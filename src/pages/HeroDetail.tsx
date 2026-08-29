import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router'
import Medallion from '@/components/Medallion'
import SectionHeader from '@/components/SectionHeader'
import Reveal from '@/components/Reveal'
import RelatedLinks from '@/components/RelatedLinks'
import FeatureArea from '@/components/FeatureArea'
import { heroes, locations } from '@/data'

const ACCENT = '#A44A2A'

function Portrait({ id, name }: { id: string; name: string }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <Medallion name={name} size={200} />
  return (
    <div
      className="rounded-sm p-2"
      style={{ border: `1px solid ${ACCENT}`, boxShadow: '0 0 0 4px rgba(164,74,42,0.15)' }}
    >
      <img
        src={`/portrait-${id}.jpg`}
        alt={`Engraved portrait of ${name}`}
        onError={() => setFailed(true)}
        className="h-[300px] w-[300px] rounded-sm object-cover"
      />
    </div>
  )
}

export default function HeroDetail() {
  const { id } = useParams()
  const [activeLocId, setActiveLocId] = useState<string | null>(null)
  const hero = useMemo(() => heroes.find((h) => h.id === id), [id])

  if (!hero) return <Navigate to="/heroes" replace />

  const heroLocations = locations
    .filter((l) => hero.locationIds?.includes(l.id))
    .sort((a, b) => a.name.localeCompare(b.name, 'en'))

  const facts: { label: string; value: string }[] = [
    { label: 'Homeland', value: hero.origin },
    { label: 'Famous For', value: hero.famousFor },
    ...(hero.parents ? [{ label: 'Parents', value: hero.parents }] : []),
  ]

  return (
    <div>
      {/* Exhibition plate hero */}
      <section className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)] pt-28 pb-14">
        <nav className="font-sans text-[0.75rem] tracking-[0.08em] text-ink-soft" aria-label="Breadcrumb">
          <Link to="/" className="transition-colors hover:text-gold">Home</Link>
          <span className="mx-2 text-gold">/</span>
          <Link to="/heroes" className="transition-colors hover:text-gold">Heroes</Link>
          <span className="mx-2 text-gold">/</span>
          <span className="text-ink">{hero.name}</span>
        </nav>

        <div className="mt-10 grid items-center gap-10 min-[900px]:grid-cols-[340px_1fr]">
          <Reveal className="justify-self-center">
            <Portrait id={hero.id} name={hero.name} />
          </Reveal>
          <div>
            <p className="eyebrow text-terracotta">Hero</p>
            <span className="mt-3 block h-[3px] w-16 bg-terracotta" aria-hidden />
            <h1 className="mt-4 font-display text-[clamp(2.75rem,6vw,5rem)] font-bold leading-[1.05] text-ink">
              {hero.name}
            </h1>
            {hero.pronunciation && (
              <p className="mt-2 font-sans text-[1.05rem] tracking-[0.04em] text-ink-soft">
                {hero.pronunciation}
              </p>
            )}
            {hero.epithet && (
              <p className="mt-2 font-serif text-[1.5rem] italic text-gold">{hero.epithet}</p>
            )}
            <p className="mt-4 font-sans text-[0.85rem] uppercase tracking-[0.14em] text-ink-soft">
              {hero.famousFor}
            </p>
          </div>
        </div>

        {/* Fact rail */}
        <div className="mt-14 grid gap-6 border-y border-terracotta/30 py-8 sm:grid-cols-3">
          {facts.map((f) => (
            <div key={f.label}>
              <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                {f.label}
              </p>
              <p className="mt-2 font-serif text-[1.05rem] leading-relaxed text-ink">{f.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Summary */}
      <section className="mx-auto max-w-[68ch] px-[clamp(20px,5vw,48px)] pb-[clamp(48px,7vw,88px)]">
        <p className="font-serif text-[1.2rem] leading-[1.8] text-ink first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-[4.2rem] first-letter:font-bold first-letter:leading-[0.85] first-letter:text-terracotta">
          {hero.summary}
        </p>
      </section>

      {/* Key myths */}
      <section className="bg-marble/60 py-[clamp(48px,7vw,88px)]">
        <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)]">
          <SectionHeader eyebrow="Deeds & Trials" title={`Key Myths of ${hero.name}`} accent={ACCENT} />
          <ol
            className={`mx-auto mt-12 gap-x-14 gap-y-8 ${
              hero.keyMyths.length > 3 ? 'grid max-w-[1000px] md:grid-cols-2' : 'max-w-[68ch] space-y-8'
            }`}
          >
            {hero.keyMyths.map((myth, i) => (
              <li key={i} className="flex gap-5">
                <span className="font-display text-[1.5rem] font-semibold leading-none text-terracotta">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="font-serif text-[1.15rem] leading-[1.7] text-ink">{myth}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Featured tales */}
      <FeatureArea
        key={hero.id}
        personId={hero.id}
        personName={hero.name}
        features={hero.features}
        accent={ACCENT}
        basePath="/heroes"
      />

      {/* Related */}
      <section className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)] py-[clamp(48px,7vw,88px)]">
        <SectionHeader eyebrow="Woven Together" title="Related Figures & Stories" accent={ACCENT} />
        <div className="mt-12">
          <RelatedLinks ids={hero.relatedIds} title="" />
        </div>
      </section>

      {/* On the map */}
      {heroLocations.length > 0 && (
        <section className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)] pb-[clamp(48px,7vw,88px)]">
          <div className="grid items-center gap-8 rounded-md hairline bg-parchment p-6 shadow-warm md:grid-cols-[280px_1fr]">
            <div className="group relative block overflow-hidden rounded-sm border border-gold/40">
              <Link to="/maps" aria-label="Open the interactive atlas" className="block">
                <img
                  src="/map-greece.jpg"
                  alt="Antique parchment map of the Aegean world"
                  className="aspect-[10/7] w-full object-cover transition-transform duration-[800ms] group-hover:scale-105"
                />
              </Link>
              {/* Markers never navigate — tap toggles the name label (mobile
                  has no hover); jumping to the atlas lives on the name pills */}
              {heroLocations.map((loc) => {
                const c = loc.coords.greece
                if (!c) return null
                const active = activeLocId === loc.id
                return (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => setActiveLocId(active ? null : loc.id)}
                    className="group/marker absolute z-10 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                    style={{ left: `${c.x}%`, top: `${c.y}%` }}
                    aria-label={loc.name}
                    aria-pressed={active}
                  >
                    <span
                      className="marker-pulse-ring absolute inset-1 rounded-full border-2 border-gold-bright"
                      aria-hidden
                    />
                    <span
                      className={`block h-2.5 w-2.5 rounded-full border border-ivory shadow transition-colors ${active ? 'bg-gold' : 'bg-terracotta group-hover/marker:bg-gold'}`}
                      aria-hidden
                    />
                    <span className={`pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-sm border border-gold/50 bg-night px-2 py-1 font-sans text-[0.68rem] tracking-[0.08em] text-parchment-on-night shadow-warm transition-opacity duration-200 group-hover/marker:opacity-100 ${active ? 'opacity-100' : 'opacity-0'}`}>
                      {loc.name}
                    </span>
                  </button>
                )
              })}
            </div>
            <div>
              <p className="eyebrow text-aegean">On the Map</p>
              <p className="mt-2 font-serif text-[1.2rem] italic text-ink">
                Places bound to {hero.name}.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {heroLocations.map((loc) => (
                  <Link
                    key={loc.id}
                    to={`/maps?loc=${loc.id}`}
                    className="flex items-center gap-2 rounded-sm border border-gold/50 bg-ivory px-3 py-1.5 font-sans text-[0.78rem] tracking-[0.06em] text-ink transition-colors hover:border-gold hover:bg-gold/15"
                  >
                    <span className="h-2 w-2 rounded-full bg-terracotta" aria-hidden />
                    {loc.name}
                  </Link>
                ))}
              </div>
              <Link
                to={`/maps?figure=${hero.id}`}
                className="mt-5 inline-flex items-center gap-2 font-sans text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-aegean transition-colors hover:text-gold"
              >
                Follow {hero.name} across the atlas →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Bottom breathing room */}
      <div className="pb-[clamp(56px,8vw,96px)]" aria-hidden />
    </div>
  )
}
