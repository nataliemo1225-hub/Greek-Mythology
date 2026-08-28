import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router'
import PageHero from '@/components/PageHero'
import RelatedLinks from '@/components/RelatedLinks'
import { locations, type MythLocation } from '@/data'

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

export default function Maps() {
  const [params] = useSearchParams()
  const [activeMap, setActiveMap] = useState<MapId>('greece')
  const [selectedId, setSelectedId] = useState<string>('olympus')

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
  }, [params])

  // Deep link support: /maps?map=<greece|trojan|odyssey> preselects a map.
  useEffect(() => {
    const mapId = params.get('map')
    if (mapId === 'greece' || mapId === 'trojan' || mapId === 'odyssey') {
      setActiveMap(mapId)
    }
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

  const selected: MythLocation | undefined =
    markers.find((m) => m.id === selectedId) ?? markers[0]

  const voyageIndex = selected ? VOYAGE_ORDER.indexOf(selected.id) : -1

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
              onClick={() => {
                setActiveMap(m.id)
                const first = locations.find((l) => l.maps.includes(m.id))
                setSelectedId(m.id === 'odyssey' ? 'troy' : (first?.id ?? ''))
              }}
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

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[62fr_38fr]">
          {/* Map plate */}
          <div className="rounded-sm border border-gold/70 bg-parchment p-3 shadow-warm-lg">
            <div className="relative overflow-hidden rounded-sm border border-gold/40">
              <img
                src={map.image}
                alt={`Antique parchment map: ${map.label}`}
                className="block aspect-[10/7] w-full object-cover"
              />

              {/* Odyssey voyage path */}
              {activeMap === 'odyssey' && voyagePoints.length > 1 && (
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  viewBox="0 0 100 70"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <polyline
                    points={voyagePoints.map((p) => `${p.x},${p.y * 0.7}`).join(' ')}
                    fill="none"
                    stroke="rgba(181,137,66,0.85)"
                    strokeWidth="0.6"
                    strokeDasharray="1.6 1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}

              {markers.map((m, i) => {
                const c = m.coords[activeMap]
                const stopNum = activeMap === 'odyssey' ? VOYAGE_ORDER.indexOf(m.id) : -1
                const isSelected = selected?.id === m.id
                return (
                  <button
                    key={m.id}
                    type="button"
                    aria-label={`View ${m.name}`}
                    aria-pressed={isSelected}
                    className={`group absolute -translate-x-1/2 -translate-y-1/2 ${isSelected ? 'z-30' : 'z-10'}`}
                    style={{ left: `${c.x}%`, top: `${c.y}%` }}
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
                        <span
                          className="marker-pulse-ring absolute inset-0 rounded-full border-2 border-gold-bright"
                          style={{ animationDelay: `${(i % 6) * 0.35}s` }}
                          aria-hidden
                        />
                        {activeMap === 'odyssey' && stopNum >= 0 ? (
                          <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-ivory bg-terracotta font-sans text-[0.62rem] font-bold text-ivory shadow transition-colors group-hover:bg-gold">
                            {stopNum + 1}
                          </span>
                        ) : (
                          <span className="block h-3.5 w-3.5 rounded-full border-2 border-ivory bg-terracotta shadow transition-colors group-hover:bg-gold" />
                        )}
                        <span className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-sm border border-gold/50 bg-night px-2.5 py-1 font-sans text-[0.7rem] tracking-[0.08em] text-parchment-on-night opacity-0 shadow-warm transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                          {m.name}
                        </span>
                      </>
                    )}
                  </button>
                )
              })}
            </div>

            {activeMap === 'odyssey' && (
              <p className="mt-3 px-1 pb-1 font-sans text-[0.72rem] uppercase tracking-[0.14em] text-ink-soft">
                The dotted route follows Odysseus from Troy (1) home to Ithaca ({voyageStops.length})
              </p>
            )}
          </div>

          {/* Location detail panel */}
          {selected && (
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
                          setActiveMap(mm)
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
          )}
        </div>

        {/* Index of places on this map */}
        <div className="mt-14">
          <h3 className="font-display text-lg font-semibold tracking-[0.02em] text-ink">
            Places on this map
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {[...markers]
              .sort((a, b) => a.name.localeCompare(b.name, 'en'))
              .map((m) => (
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
      </section>
    </div>
  )
}
