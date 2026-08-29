import { useEffect, useMemo, useRef, useState } from 'react'
import type { PointerEvent as ReactPointerEvent } from 'react'
import { useSearchParams } from 'react-router'
import PageHero from '@/components/PageHero'
import RelatedLinks from '@/components/RelatedLinks'
import {
  heroes,
  kings,
  locations,
  MAJOR_LOCATION_IDS,
  olympians,
  otherDeities,
  primordials,
  titanBorn,
  titans,
  type MythLocation,
} from '@/data'

type MapId = 'greece' | 'trojan' | 'odyssey'

const MAPS: { id: MapId; label: string; image: string; blurb: string }[] = [
  {
    id: 'greece',
    label: 'The Aegean World',
    image: '/map-greece.jpg',
    blurb:
      'From cloud-wrapped Olympus to the far shore of Colchis — the heartland of Greek myth, where gods and heroes walked among cities, islands, and sacred groves.',
  },
  {
    id: 'trojan',
    label: 'The Trojan War Theater',
    image: '/map-trojan.jpg',
    blurb:
      'The Troad and the mustering harbors of Hellas: ten years of siege, raids, and quarrels played out between the Scamander plain and the wine-dark sea.',
  },
  {
    id: 'odyssey',
    label: "Odysseus's Voyage",
    image: '/map-odyssey.jpg',
    blurb:
      "Ten years of wandering home from Troy — Cyclopes, Sirens, Scylla and Charybdis, Circe's isle, and Calypso's prison, traced in order from Troy to Ithaca.",
  },
]

/** All three plates are 1536×1024 (3:2). The frame keeps the plate's true
 *  ratio so percentage coordinates always land on the intended geography —
 *  no object-cover cropping to drift the markers. */
const MAP_ASPECT = 1024 / 1536

/** Zoom level at which minor places fade in. */
const MINOR_REVEAL = 1.6
const MIN_SCALE = 1
const MAX_SCALE = 4

/** Odyssey voyage sequence (only ids with odyssey coords are used, in order). */
const VOYAGE_ORDER = [
  'troy',
  'lotus-island',
  'cyclops-island',
  'aeolus-island',
  'laestrygonia',
  'aeaea',
  'underworld-gates',
  'sirens-sea',
  'scylla-charybdis',
  'thrinacia',
  'ogygia',
  'scheria',
  'ithaca',
]

const TYPE_LABEL: Record<MythLocation['type'], string> = {
  city: 'City',
  mountain: 'Mountain',
  island: 'Island',
  sea: 'Sea',
  realm: 'Realm',
}

const TYPE_ORDER: MythLocation['type'][] = ['city', 'island', 'mountain', 'sea', 'realm']

/** Every figure a reader can follow across the atlas. */
const FIGURE_POOL: { id: string; name: string; locationIds: string[] }[] = [
  ...primordials,
  ...titans,
  ...titanBorn,
  ...olympians,
  ...otherDeities,
  ...heroes,
  ...kings,
]

/** Small cartographic glyph per place type, so dense maps still read. */
function TypeGlyph({ type, className }: { type: MythLocation['type']; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      {type === 'city' && <circle cx="12" cy="12" r="6" fill="currentColor" />}
      {type === 'island' && (
        <rect x="6.5" y="6.5" width="11" height="11" rx="2" transform="rotate(45 12 12)" fill="currentColor" />
      )}
      {type === 'mountain' && <path d="M12 5 21 19H3Z" fill="currentColor" />}
      {type === 'sea' && (
        <path
          d="M3 10q3-4 6 0t6 0t6 0M3 16q3-4 6 0t6 0t6 0"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      )}
      {type === 'realm' && <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2.4" />}
    </svg>
  )
}

interface ViewState {
  scale: number
  tx: number
  ty: number
}

const INITIAL_VIEW: ViewState = { scale: 1, tx: 0, ty: 0 }

export default function Maps() {
  const [params, setParams] = useSearchParams()
  const [activeMap, setActiveMap] = useState<MapId>('greece')
  const [selectedId, setSelectedId] = useState<string>('olympus')
  const [typeFilter, setTypeFilter] = useState<MythLocation['type'] | 'all'>('all')
  const [figure, setFigure] = useState<{ id: string; name: string; locationIds: string[] } | null>(null)
  const [view, setView] = useState<ViewState>(INITIAL_VIEW)
  const [dragging, setDragging] = useState(false)

  const frameRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef<{ x: number; y: number } | null>(null)
  /** Accumulated pointer travel; below the threshold a press counts as a click. */
  const dragDistRef = useRef(0)

  // Deep link support: /maps?loc=<id> preselects a location on its first map.
  useEffect(() => {
    const locId = params.get('loc')
    if (!locId) return
    const loc = locations.find((l) => l.id === locId)
    if (!loc) return
    // Open the first map that actually has coordinates for this place.
    const target = loc.maps.find((m) => loc.coords[m]) ?? loc.maps[0]
    setActiveMap(target)
    setSelectedId(loc.id)
    setView(INITIAL_VIEW)
  }, [params])

  // Deep link support: /maps?map=<greece|trojan|odyssey> preselects a map.
  useEffect(() => {
    const mapId = params.get('map')
    if (mapId === 'greece' || mapId === 'trojan' || mapId === 'odyssey') {
      setActiveMap(mapId)
      setView(INITIAL_VIEW)
    }
  }, [params])

  // Figure view: /maps?figure=<id> highlights the places bound to one figure.
  useEffect(() => {
    const fid = params.get('figure')
    if (!fid) {
      setFigure(null)
      return
    }
    const person = FIGURE_POOL.find((p) => p.id === fid)
    if (!person) {
      setFigure(null)
      return
    }
    setFigure(person)
    const target = MAPS.map((m) => m.id).find((mid) =>
      locations.some((l) => person.locationIds.includes(l.id) && l.coords[mid]),
    )
    if (target) {
      setActiveMap(target)
      const first = locations.find((l) => person.locationIds.includes(l.id) && l.coords[target])
      if (first) setSelectedId(first.id)
    }
    setView(INITIAL_VIEW)
  }, [params])

  const map = MAPS.find((m) => m.id === activeMap)!

  const markers = useMemo(
    () =>
      locations.filter((l) => l.maps.includes(activeMap) && l.coords[activeMap]) as (MythLocation & {
        coords: Record<MapId, { x: number; y: number }>
      })[],
    [activeMap],
  )

  /** Numbered voyage stops for the Odyssey map. */
  const voyageStops = useMemo(
    () =>
      VOYAGE_ORDER.map((id) => markers.find((m) => m.id === id)).filter(
        (m): m is (typeof markers)[number] => Boolean(m),
      ),
    [markers],
  )

  const voyagePoints = voyageStops.map((m) => m.coords[activeMap])

  /** No fallback: the selection may be cleared by clicking the map itself. */
  const selected: MythLocation | undefined = markers.find((m) => m.id === selectedId)

  const voyageIndex = selected ? VOYAGE_ORDER.indexOf(selected.id) : -1

  const figureLocations = useMemo(
    () => (figure ? new Set(figure.locationIds) : null),
    [figure],
  )

  const figureCountOnMap = useMemo(
    () => (figureLocations ? markers.filter((m) => figureLocations.has(m.id)).length : 0),
    [figureLocations, markers],
  )

  const presentTypes = useMemo(
    () => TYPE_ORDER.filter((t) => markers.some((m) => m.type === t)),
    [markers],
  )

  // ── Zoom & pan ──────────────────────────────────────────────────────────

  const clampView = (v: ViewState): ViewState => {
    const el = frameRef.current
    const scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, v.scale))
    if (!el) return { ...v, scale }
    const { width: W, height: H } = el.getBoundingClientRect()
    const minTx = Math.min(0, W - W * scale)
    const minTy = Math.min(0, H - H * scale)
    return {
      scale,
      tx: Math.min(0, Math.max(minTx, v.tx)),
      ty: Math.min(0, Math.max(minTy, v.ty)),
    }
  }

  const zoomAt = (cx: number, cy: number, factor: number) => {
    setView((v) => {
      const ns = Math.min(MAX_SCALE, Math.max(MIN_SCALE, v.scale * factor))
      const k = ns / v.scale
      return clampView({ scale: ns, tx: cx - (cx - v.tx) * k, ty: cy - (cy - v.ty) * k })
    })
  }

  const zoomAtCenter = (factor: number) => {
    const el = frameRef.current
    if (!el) return
    const { width: W, height: H } = el.getBoundingClientRect()
    zoomAt(W / 2, H / 2, factor)
  }

  // Wheel zoom needs a non-passive listener to own the scroll gesture.
  useEffect(() => {
    const el = frameRef.current
    if (!el) return
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      const r = el.getBoundingClientRect()
      zoomAt(e.clientX - r.left, e.clientY - r.top, e.deltaY < 0 ? 1.18 : 1 / 1.18)
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('button')) return
    dragRef.current = { x: e.clientX, y: e.clientY }
    dragDistRef.current = 0
    e.currentTarget.setPointerCapture(e.pointerId)
    setDragging(true)
  }

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragRef.current) return
    const dx = e.clientX - dragRef.current.x
    const dy = e.clientY - dragRef.current.y
    dragDistRef.current += Math.abs(dx) + Math.abs(dy)
    dragRef.current = { x: e.clientX, y: e.clientY }
    setView((v) => clampView({ ...v, tx: v.tx + dx, ty: v.ty + dy }))
  }

  const endDrag = (e?: ReactPointerEvent<HTMLDivElement>) => {
    // A short press on the map itself (not a marker, not a drag) clears the
    // selection so the big pin and nameplate stop covering neighbouring places.
    if (
      e &&
      dragRef.current &&
      dragDistRef.current < 6 &&
      !(e.target as HTMLElement).closest('button')
    ) {
      setSelectedId('')
    }
    dragRef.current = null
    setDragging(false)
  }

  const selectMap = (m: MapId) => {
    setActiveMap(m)
    setTypeFilter('all')
    setView(INITIAL_VIEW)
    const first = locations.find((l) => l.maps.includes(m))
    setSelectedId(m === 'odyssey' ? 'troy' : (first?.id ?? ''))
  }

  const clearFigure = () => {
    const next = new URLSearchParams(params)
    next.delete('figure')
    setParams(next)
  }

  // ── Render ──────────────────────────────────────────────────────────────

  return (
    <div>
      <PageHero
        eyebrow="Cartography"
        title="The Atlas"
        lede="Every story happened somewhere. Survey the Aegean world, the plains of Troy, and Odysseus's ten-year voyage — click any marker to open its tale."
        image="/map-greece.jpg"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Atlas' }]}
      />

      <section className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)] py-[clamp(48px,7vw,96px)]">
        {/* Map tabs */}
        <div className="flex flex-wrap gap-3" role="tablist" aria-label="Choose a map">
          {MAPS.map((m) => (
            <button
              key={m.id}
              type="button"
              role="tab"
              aria-selected={activeMap === m.id}
              onClick={() => selectMap(m.id)}
              className={`rounded-sm border px-5 py-2.5 font-sans text-[0.8rem] font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
                activeMap === m.id
                  ? 'border-gold bg-gold text-ink shadow-warm'
                  : 'hairline bg-parchment text-ink-soft hover:border-gold hover:text-ink'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        <p className="mt-6 max-w-[68ch] font-serif text-[1.2rem] italic leading-[1.7] text-ink-soft">
          {map.blurb}
        </p>

        {/* Figure-following banner */}
        {figure && (
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-sm hairline bg-ivory px-4 py-3 shadow-warm">
            <p className="font-serif text-[1.02rem] italic leading-[1.6] text-ink">
              Following <span className="font-semibold not-italic">{figure.name}</span> — bound
              places glow gold, the rest recede.
              <span className="ml-2 font-sans text-[0.72rem] uppercase not-italic tracking-[0.12em] text-ink-soft">
                {figureCountOnMap} on this map
              </span>
            </p>
            <button
              type="button"
              onClick={clearFigure}
              className="rounded-sm border border-gold/60 px-3 py-1.5 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-ink-soft transition-colors hover:bg-gold hover:text-ink"
            >
              Clear
            </button>
          </div>
        )}

        {/* Type filter */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="mr-1 font-sans text-[0.7rem] uppercase tracking-[0.14em] text-ink-soft">
            Show:
          </span>
          <button
            type="button"
            onClick={() => setTypeFilter('all')}
            aria-pressed={typeFilter === 'all'}
            className={`rounded-sm border px-3 py-1.5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.12em] transition-all ${
              typeFilter === 'all'
                ? 'border-gold bg-gold text-ink'
                : 'hairline bg-parchment text-ink-soft hover:border-gold hover:text-ink'
            }`}
          >
            All
          </button>
          {presentTypes.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTypeFilter(t)}
              aria-pressed={typeFilter === t}
              className={`flex items-center gap-1.5 rounded-sm border px-3 py-1.5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.12em] transition-all ${
                typeFilter === t
                  ? 'border-gold bg-gold text-ink'
                  : 'hairline bg-parchment text-ink-soft hover:border-gold hover:text-ink'
              }`}
            >
              <TypeGlyph type={t} className="h-3 w-3" />
              {TYPE_LABEL[t]}
            </button>
          ))}
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[62fr_38fr]">
          {/* Map plate */}
          <div className="rounded-sm border border-gold/70 bg-parchment p-3 shadow-warm-lg">
            <div
              ref={frameRef}
              className="relative overflow-hidden rounded-sm border border-gold/40"
              style={{
                aspectRatio: `1536 / 1024`,
                cursor: dragging ? 'grabbing' : 'grab',
                touchAction: 'pan-y',
              }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
            >
              {/* Zoomable layer: image, route, and markers move together */}
              <div
                className="absolute inset-0"
                style={{
                  transform: `translate(${view.tx}px, ${view.ty}px) scale(${view.scale})`,
                  transformOrigin: '0 0',
                }}
              >
                <img
                  src={map.image}
                  alt={`Antique parchment map: ${map.label}`}
                  className="block h-full w-full select-none"
                  draggable={false}
                />

                {/* Odyssey voyage path */}
                {activeMap === 'odyssey' && voyagePoints.length > 1 && (
                  <svg
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    viewBox={`0 0 100 ${100 * MAP_ASPECT}`}
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    <polyline
                      points={voyagePoints.map((p) => `${p.x},${p.y * MAP_ASPECT}`).join(' ')}
                      fill="none"
                      stroke="rgba(181,137,66,0.85)"
                      strokeWidth="2"
                      strokeDasharray="5 4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                )}

                {markers.map((m) => {
                  const c = m.coords[activeMap]
                  const stopNum = activeMap === 'odyssey' ? VOYAGE_ORDER.indexOf(m.id) : -1
                  const isSelected = selected?.id === m.id
                  const isMajor = m.prominence
                    ? m.prominence === 'major'
                    : MAJOR_LOCATION_IDS.has(m.id)
                  const isVoyageStop = stopNum >= 0
                  const highlighted = figureLocations?.has(m.id) ?? false
                  const dimmed = figureLocations != null && !highlighted
                  if (typeFilter !== 'all' && m.type !== typeFilter && !isSelected) return null
                  const tierVisible =
                    isSelected ||
                    isMajor ||
                    isVoyageStop ||
                    highlighted ||
                    view.scale >= MINOR_REVEAL ||
                    typeFilter !== 'all'
                  return (
                    <button
                      key={m.id}
                      type="button"
                      aria-label={`View ${m.name}`}
                      aria-pressed={isSelected}
                      className="group absolute transition-opacity duration-300"
                      style={{
                        left: `${c.x}%`,
                        top: `${c.y}%`,
                        transform: `translate(-50%, -50%) scale(${1 / view.scale})`,
                        opacity: dimmed ? 0.25 : tierVisible ? 1 : 0,
                        pointerEvents: tierVisible ? 'auto' : 'none',
                        zIndex: isSelected ? 30 : highlighted ? 20 : 10,
                      }}
                      onClick={() => setSelectedId(m.id)}
                    >
                      {isSelected ? (
                        /* Prominent pin for the selected place */
                        <>
                          <span
                            className="marker-pulse-ring absolute -inset-2 rounded-full border-2 border-gold-bright"
                            aria-hidden
                          />
                          <span
                            className="flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-ivory bg-gold-bright text-night shadow-[0_0_0_3px_rgba(28,26,43,0.85),0_4px_10px_rgba(28,26,43,0.5)]"
                            aria-hidden
                          >
                            {activeMap === 'odyssey' && stopNum >= 0 ? (
                              <span className="font-sans text-[0.72rem] font-bold">{stopNum + 1}</span>
                            ) : (
                              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                              </svg>
                            )}
                          </span>
                          <span className="pointer-events-none absolute left-1/2 top-9 -translate-x-1/2 whitespace-nowrap rounded-sm border border-gold-bright/70 bg-night px-2.5 py-1 font-sans text-[0.72rem] font-semibold tracking-[0.08em] text-gold-bright shadow-warm">
                            {m.name}
                          </span>
                        </>
                      ) : (
                        <>
                          {activeMap === 'odyssey' && stopNum >= 0 ? (
                            <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-ivory bg-terracotta font-sans text-[0.62rem] font-bold text-ivory shadow transition-colors group-hover:bg-gold">
                              {stopNum + 1}
                            </span>
                          ) : (
                            <span
                              className={`flex h-[22px] w-[22px] items-center justify-center rounded-full border bg-ivory/95 shadow transition-all duration-300 ${
                                highlighted
                                  ? 'border-gold-bright text-gold-bright'
                                  : 'border-ivory text-terracotta group-hover:text-gold'
                              }`}
                              aria-hidden
                            >
                              <TypeGlyph type={m.type} className="h-3.5 w-3.5" />
                            </span>
                          )}
                          <span className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-sm border border-gold/50 bg-night px-2.5 py-1 font-sans text-[0.7rem] tracking-[0.08em] text-parchment-on-night opacity-0 shadow-warm transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                            {m.name}
                          </span>
                        </>
                      )}
                    </button>
                  )
                })}
              </div>

              {/* Zoom controls */}
              <div className="absolute right-3 top-3 z-40 flex flex-col gap-1.5">
                <button
                  type="button"
                  aria-label="Zoom in"
                  onClick={() => zoomAtCenter(1.4)}
                  className="flex h-9 w-9 items-center justify-center rounded-sm border border-gold/60 bg-parchment/95 font-sans text-[1.05rem] font-semibold text-ink shadow-warm transition-colors hover:bg-gold"
                >
                  +
                </button>
                <button
                  type="button"
                  aria-label="Zoom out"
                  onClick={() => zoomAtCenter(1 / 1.4)}
                  className="flex h-9 w-9 items-center justify-center rounded-sm border border-gold/60 bg-parchment/95 font-sans text-[1.05rem] font-semibold text-ink shadow-warm transition-colors hover:bg-gold"
                >
                  −
                </button>
                {view.scale > 1.01 && (
                  <button
                    type="button"
                    aria-label="Reset view"
                    onClick={() => setView(INITIAL_VIEW)}
                    className="flex h-9 w-9 items-center justify-center rounded-sm border border-gold/60 bg-parchment/95 font-sans text-[0.95rem] text-ink shadow-warm transition-colors hover:bg-gold"
                  >
                    ⟲
                  </button>
                )}
              </div>
            </div>

            <p className="mt-3 px-1 pb-1 font-sans text-[0.72rem] uppercase tracking-[0.14em] text-ink-soft">
              {activeMap === 'odyssey'
                ? `The dotted route follows Odysseus from Troy (1) home to Ithaca (${voyageStops.length})`
                : 'Scroll to zoom, drag to pan — lesser places fade in as you draw closer'}
            </p>
          </div>

          {/* Location detail panel (or a hint when nothing is selected) */}
          {selected ? (
            <aside
              key={`${activeMap}-${selected.id}`}
              className="rounded-md hairline bg-parchment p-6 shadow-warm lg:sticky lg:top-24"
              aria-label={`About ${selected.name}`}
            >
              <p className="eyebrow text-gold">
                {TYPE_LABEL[selected.type]}
                {activeMap === 'odyssey' && voyageIndex >= 0 && ` · Stop ${voyageIndex + 1}`}
              </p>
              <h2 className="mt-2 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-tight text-ink">
                {selected.name}
              </h2>
              {selected.pronunciation && (
                <p className="mt-1.5 font-sans text-[0.95rem] tracking-[0.04em] text-ink-soft">
                  {selected.pronunciation}
                </p>
              )}
              <p className="mt-4 font-serif text-[1.05rem] leading-[1.8] text-ink">
                {selected.description}
              </p>

              {selected.maps.length > 1 && (
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <span className="font-sans text-[0.7rem] uppercase tracking-[0.14em] text-ink-soft">
                    Also on:
                  </span>
                  {selected.maps
                    .filter((mm) => mm !== activeMap)
                    .map((mm) => (
                      <button
                        key={mm}
                        type="button"
                        onClick={() => {
                          selectMap(mm)
                          setSelectedId(selected.id)
                        }}
                        className="rounded-sm border border-gold/60 px-2.5 py-1 font-sans text-[0.68rem] font-medium uppercase tracking-[0.1em] text-ink-soft transition-colors hover:bg-gold hover:text-ink"
                      >
                        {MAPS.find((x) => x.id === mm)?.label}
                      </button>
                    ))}
                </div>
              )}

              <div className="mt-6 border-t border-gold/30 pt-6">
                {/* Compact pills keep the side panel short as the collection grows */}
                <RelatedLinks ids={selected.relatedIds} title="Linked figures & stories" compact />
              </div>
            </aside>
          ) : (
            <aside
              className="rounded-md hairline bg-parchment p-6 shadow-warm lg:sticky lg:top-24"
              aria-label="No place selected"
            >
              <p className="eyebrow text-gold">The Atlas</p>
              <h2 className="mt-2 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-tight text-ink">
                No place selected
              </h2>
              <p className="mt-4 font-serif text-[1.05rem] leading-[1.8] text-ink">
                Click a marker — or a name in the index below — to open its tale. Click the map
                itself to set the pin aside and see every neighbouring place.
              </p>
            </aside>
          )}
        </div>

        {/* Index of places on this map, grouped by type */}
        <div className="mt-14">
          <h3 className="font-display text-lg font-semibold tracking-[0.02em] text-ink">
            Places on this map
          </h3>
          <div className="mt-4 space-y-5">
            {TYPE_ORDER.map((t) => {
              const group = [...markers]
                .filter((m) => m.type === t)
                .sort((a, b) => a.name.localeCompare(b.name, 'en'))
              if (group.length === 0) return null
              return (
                <div key={t}>
                  <p className="eyebrow flex items-center gap-2 text-gold">
                    <TypeGlyph type={t} className="h-3.5 w-3.5" aria-hidden />
                    {TYPE_LABEL[t]}s
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {group.map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setSelectedId(m.id)}
                        className={`rounded-sm border px-3 py-1.5 font-sans text-[0.75rem] tracking-[0.06em] transition-all ${
                          selected?.id === m.id
                            ? 'border-gold bg-gold text-ink'
                            : 'hairline bg-parchment text-ink-soft hover:border-gold hover:text-ink'
                        }`}
                      >
                        {m.name}
                      </button>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
