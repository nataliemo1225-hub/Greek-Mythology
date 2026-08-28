import { useMemo, useRef } from 'react'
import { Navigate, useParams } from 'react-router'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import Reveal from '@/components/Reveal'
import RelatedLinks from '@/components/RelatedLinks'
import { GENERATION_ACCENT } from '@/components/GodCard'
import { KING_ACCENT } from '@/components/KingCard'
import { taleSlug } from '@/lib/utils'
import {
  primordials,
  titans,
  titanBorn,
  olympians,
  otherDeities,
  heroes,
  kings,
  type God,
  type Hero,
  type King,
} from '@/data'

const DEITY_POOLS: God[][] = [primordials, titans, titanBorn, olympians, otherDeities]

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']

/** Heroes that have engraved portrait art; others fall back to the heroes banner. */
const HERO_PORTRAITS = ['achilles', 'heracles', 'odysseus', 'perseus', 'theseus']

function findPerson(
  id: string | undefined,
): { person: God | Hero | King; kind: 'god' | 'hero' | 'king' } | null {
  for (const pool of DEITY_POOLS) {
    const god = pool.find((g) => g.id === id)
    if (god) return { person: god, kind: 'god' }
  }
  const hero = heroes.find((h) => h.id === id)
  if (hero) return { person: hero, kind: 'hero' }
  const king = kings.find((k) => k.id === id)
  if (king) return { person: king, kind: 'king' }
  return null
}

export default function TaleDetail() {
  const { id, tale } = useParams()
  const found = useMemo(() => findPerson(id), [id])
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  if (!found) return <Navigate to="/pantheon" replace />

  const { person, kind } = found
  const basePath = kind === 'god' ? '/pantheon' : kind === 'hero' ? '/heroes' : '/kings'
  const features = person.features ?? []
  const fi = features.findIndex((f) => taleSlug(f.title) === tale)
  if (fi < 0) return <Navigate to={`${basePath}/${person.id}`} replace />

  const feature = features[fi]
  const accent =
    kind === 'god'
      ? GENERATION_ACCENT[(person as God).generation]
      : kind === 'king'
        ? KING_ACCENT
        : '#A44A2A'
  const image =
    kind !== 'hero' || HERO_PORTRAITS.includes(person.id)
      ? `/portrait-${person.id}.jpg`
      : '/art-heroes.jpg'

  return (
    <>
      <PageHero
        eyebrow={`${person.name} · Featured Tale`}
        title={feature.title}
        lede={feature.lede}
        image={image}
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: kind === 'god' ? 'Pantheon' : kind === 'hero' ? 'Heroes' : 'Kings', to: basePath },
          { label: person.name, to: `${basePath}/${person.id}` },
          { label: feature.title },
        ]}
        tall
      />

      {/* Chapter contents */}
      {feature.sections.length > 1 && (
        <section className="mx-auto max-w-[68ch] px-[clamp(20px,5vw,48px)] pt-[clamp(32px,5vw,56px)]">
          <nav
            className="rounded-md hairline bg-parchment/70 px-8 py-6 shadow-warm"
            aria-label={`Contents of ${feature.title}`}
          >
            <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-gold">
              In This Tale
            </p>
            <ol className="mt-4 space-y-2.5">
              {feature.sections.map((sec, i) => (
                <li key={sec.heading}>
                  <button
                    type="button"
                    onClick={() =>
                      sectionRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                    className="group flex items-baseline gap-4 text-left"
                  >
                    <span className="w-8 shrink-0 font-display text-[0.95rem] font-bold text-gold">
                      {ROMAN[i] ?? String(i + 1)}
                    </span>
                    <span className="font-display text-[1.05rem] font-semibold text-ink transition-colors group-hover:text-gold">
                      {sec.heading}
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </nav>
        </section>
      )}

      {/* Quick-reference rail */}
      <section className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)] pt-[clamp(40px,6vw,64px)]">
        <Reveal stagger={0.08} className="mx-auto grid max-w-[1000px] gap-px overflow-hidden rounded-md hairline bg-gold/25 shadow-warm sm:grid-cols-2 lg:grid-cols-4">
          {feature.facts.map((fact) => (
            <div key={fact.label} data-reveal-item className="bg-ivory px-5 py-4 text-center">
              <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                {fact.label}
              </p>
              <p className="mt-1.5 font-display text-[1.05rem] font-semibold leading-snug text-ink">
                {fact.value}
              </p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Chapters */}
      <section className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)] py-[clamp(48px,7vw,88px)]">
        <Reveal stagger={0.1} className="mx-auto max-w-[860px] space-y-14">
          {feature.sections.map((sec, i) => (
            <article
              key={i}
              ref={(el) => {
                sectionRefs.current[i] = el
              }}
              data-reveal-item
              className="relative scroll-mt-28 pl-14 sm:pl-20"
            >
              <span
                className="absolute left-0 top-0 font-display text-[1.9rem] font-bold leading-none text-gold/70 sm:text-[2.4rem]"
                aria-hidden
              >
                {ROMAN[i] ?? String(i + 1)}
              </span>
              <h3 className="font-display text-[clamp(1.3rem,2vw,1.75rem)] font-semibold tracking-[0.02em] text-ink">
                {sec.heading}
              </h3>
              <span className="mt-3 block h-px w-14 bg-gold/60" aria-hidden />
              {sec.body.split('\n\n').map((para, pi) => (
                <p key={pi} className="mt-4 font-serif text-[1.15rem] leading-[1.8] text-ink">
                  {para}
                </p>
              ))}
              {i < feature.sections.length - 1 && (
                <p className="mt-10 text-center font-serif text-xl text-gold" aria-hidden>
                  ⁂
                </p>
              )}
            </article>
          ))}
        </Reveal>
      </section>

      {/* Related */}
      <section className="border-t border-gold/30 bg-marble/60 py-[clamp(48px,7vw,88px)]">
        <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)]">
          <SectionHeader eyebrow="Woven Together" title="Related Figures & Stories" accent={accent} />
          <div className="mt-12">
            <RelatedLinks ids={feature.relatedIds ?? person.relatedIds} title="" />
          </div>
        </div>
      </section>
    </>
  )
}
