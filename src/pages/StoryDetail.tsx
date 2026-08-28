import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import RelatedLinks, { resolveRelated } from '@/components/RelatedLinks'
import Medallion from '@/components/Medallion'
import { stories, locations } from '@/data'

const STORY_ART: Record<string, string> = {
  'trojan-war': '/art-trojan-war.jpg',
  iliad: '/art-iliad.jpg',
  odyssey: '/art-odyssey.jpg',
  'house-of-atreus': '/art-atreus.jpg',
  'house-of-thebes': '/art-thebes.jpg',
  'house-of-cadmus': '/art-cadmus.jpg',
  'golden-fleece': '/art-golden-fleece.jpg',
  titanomachy: '/art-titanomachy.jpg',
  gigantomachy: '/art-gigantomachy.jpg',
  typhon: '/art-typhon.jpg',
  'binding-of-zeus': '/art-revolt.jpg',
  medusa: '/art-medusa.jpg',
}

const CATEGORY_LABEL: Record<string, string> = {
  war: 'War',
  epic: 'Epic',
  tragedy: 'Tragedy',
  origin: 'Origin Myth',
  myth: 'Myth',
}

const STORY_MAP: Record<string, 'greece' | 'trojan' | 'odyssey'> = {
  'trojan-war': 'trojan',
  iliad: 'trojan',
  odyssey: 'odyssey',
}

const MAP_IMAGE: Record<string, string> = {
  greece: '/map-greece.jpg',
  trojan: '/map-trojan.jpg',
  odyssey: '/map-odyssey.jpg',
}

const ROMAN = [
  'I',
  'II',
  'III',
  'IV',
  'V',
  'VI',
  'VII',
  'VIII',
  'IX',
  'X',
  'XI',
  'XII',
  'XIII',
  'XIV',
  'XV',
  'XVI',
  'XVII',
  'XVIII',
  'XIX',
  'XX',
]

function StoryBody({ body, dropCap = false }: { body: string; dropCap?: boolean }) {
  const blocks = body
    .trim()
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)

  return (
    <div className="mt-5 space-y-5 font-serif text-[1.2rem] leading-[1.8] text-ink">
      {blocks.map((block, index) => {
        const lines = block
          .split('\n')
          .map((line) => line.trim())
          .filter(Boolean)

        if (lines.length > 1 && lines.every((line) => line.startsWith('• '))) {
          return (
            <ul key={block} className="space-y-2.5">
              {lines.map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="mt-[0.62em] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                  <span>{line.slice(2)}</span>
                </li>
              ))}
            </ul>
          )
        }

        return (
          <p
            key={block}
            className={
              dropCap && index === 0
                ? 'first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-[4.2rem] first-letter:font-bold first-letter:leading-[0.85] first-letter:text-gold'
                : undefined
            }
          >
            {block}
          </p>
        )
      })}
    </div>
  )
}

export default function StoryDetail() {
  const { id } = useParams()
  const story = useMemo(() => stories.find((s) => s.id === id), [id])
  const [activeSection, setActiveSection] = useState(0)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    setActiveSection(0)
    if (!story) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset.sectionIndex)
            setActiveSection(i)
          }
        }
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    sectionRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [story])

  if (!story) return <Navigate to="/stories" replace />

  const mapId = STORY_MAP[story.id] ?? 'greece'
  const storyLocations = locations
    .filter((l) => story.keyLocationIds?.includes(l.id))
    .sort((a, b) => a.name.localeCompare(b.name, 'en'))
  const mappableLocations = storyLocations.filter((l) => l.maps.includes(mapId) && l.coords[mapId])
  const figureEntries = resolveRelated(story.keyFigures)

  return (
    <div>
      <PageHero
        eyebrow={CATEGORY_LABEL[story.category]}
        title={story.title}
        lede={story.subtitle}
        image={STORY_ART[story.id] ?? '/art-trojan-war.jpg'}
        breadcrumb={[
          { label: 'Home', to: '/' },
          story.category === 'tragedy'
            ? { label: 'Tragedies', to: '/tragedies' }
            : { label: 'Stories', to: '/stories' },
          { label: story.title },
        ]}
        tall
      />

      {/* Intro + meta */}
      <section className="mx-auto max-w-[68ch] px-[clamp(20px,5vw,48px)] pt-[clamp(40px,6vw,72px)]">
        {(story.author || story.date) && (
          <p className="mb-4 font-sans text-[0.78rem] uppercase tracking-[0.18em] text-ink-soft">
            {[story.author, story.date].filter(Boolean).join(' · ')}
          </p>
        )}
        <p className="font-serif text-[1.35rem] italic leading-[1.7] text-ink">{story.intro}</p>
      </section>

      {/* Contents of the tale */}
      {story.sections.length > 1 && (
        <section className="mx-auto max-w-[68ch] px-[clamp(20px,5vw,48px)] pt-10">
          <nav className="rounded-md hairline bg-parchment/70 px-8 py-6 shadow-warm" aria-label="Contents">
            <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-gold">
              Contents
            </p>
            <ol className="mt-4 space-y-2.5">
              {story.sections.map((s, i) => (
                <li key={s.heading}>
                  <button
                    type="button"
                    onClick={() =>
                      sectionRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                    className="group flex items-baseline gap-4 text-left"
                  >
                    <span className="w-8 shrink-0 font-display text-[0.95rem] font-bold text-gold">
                      {ROMAN[i]}
                    </span>
                    <span className="font-display text-[1.05rem] font-semibold text-ink transition-colors group-hover:text-gold">
                      {s.heading}
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </nav>
        </section>
      )}

      {/* Sections with sticky rail */}
      <section className="mx-auto grid max-w-[1200px] gap-12 px-[clamp(20px,5vw,48px)] py-[clamp(40px,6vw,80px)] lg:grid-cols-[240px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-3">
            {story.sections.map((s, i) => (
              <button
                key={s.heading}
                type="button"
                onClick={() =>
                  sectionRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
                className={`block w-full border-l-2 pl-3 text-left font-sans text-[0.78rem] leading-snug transition-colors ${
                  activeSection === i
                    ? 'border-gold font-semibold text-aegean'
                    : 'border-transparent text-ink-soft hover:text-ink'
                }`}
              >
                {s.heading}
              </button>
            ))}
          </div>
        </aside>

        <div className="max-w-[68ch]">
          {story.sections.map((s, i) => (
            <section
              key={s.heading}
              data-section-index={i}
              ref={(el) => {
                sectionRefs.current[i] = el
              }}
              className="scroll-mt-32 pb-14"
            >
              <h2 className="flex items-baseline gap-4 font-display text-[1.9rem] font-semibold text-ink">
                <span className="font-display text-[1rem] font-bold text-gold">{ROMAN[i]}</span>
                {s.heading}
              </h2>
              <span className="mt-2 block h-px w-24 bg-gold/50" aria-hidden />
              <StoryBody body={s.body} dropCap={i === 0} />
              {i < story.sections.length - 1 && (
                <p className="mt-10 text-center font-serif text-xl text-gold" aria-hidden>
                  ⁂
                </p>
              )}
            </section>
          ))}
        </div>
      </section>

      {/* Key figures */}
      {figureEntries.length > 0 && (
        <section className="bg-marble/60 py-[clamp(48px,7vw,88px)]">
          <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)]">
            <SectionHeader eyebrow="Dramatis Personae" title="Key Figures" accent="#25505E" />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {figureEntries.map((f) => (
                <Link
                  key={f.id}
                  to={f.to}
                  className="group flex items-center gap-3 rounded-md hairline bg-parchment p-3 shadow-warm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-warm-lg"
                >
                  <Medallion name={f.name} size={56} />
                  <span>
                    <span className="block font-display text-[1.05rem] font-semibold text-ink transition-colors group-hover:text-gold">
                      {f.name}
                    </span>
                    <span className="block font-sans text-[0.68rem] uppercase tracking-[0.12em] text-ink-soft">
                      {f.typeLabel}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Places of the story */}
      {mappableLocations.length > 0 && (
        <section className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)] py-[clamp(48px,7vw,88px)]">
          <SectionHeader eyebrow="Geography" title="Places of the Story" accent="#25505E" />
          <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
            <div className="rounded-sm border border-gold/70 bg-parchment p-3 shadow-warm-lg">
              <div className="relative overflow-hidden rounded-sm border border-gold/40">
                <img
                  src={MAP_IMAGE[mapId]}
                  alt="Antique parchment map"
                  className="block aspect-[10/7] w-full object-cover"
                />
                {mappableLocations.slice(0, 6).map((loc, i) => {
                  const c = loc.coords[mapId]!
                  return (
                    <Link
                      key={loc.id}
                      to={`/maps?loc=${loc.id}`}
                      className="group absolute z-10 -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${c.x}%`, top: `${c.y}%` }}
                      aria-label={`View ${loc.name} on the atlas`}
                    >
                      <span
                        className="marker-pulse-ring absolute inset-0 rounded-full border-2 border-gold-bright"
                        style={{ animationDelay: `${i * 0.4}s` }}
                        aria-hidden
                      />
                      <span className="block h-3.5 w-3.5 rounded-full border-2 border-ivory bg-terracotta shadow" />
                      <span className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-sm border border-gold/50 bg-night px-2.5 py-1 font-sans text-[0.7rem] tracking-[0.08em] text-parchment-on-night opacity-0 shadow-warm transition-opacity group-hover:opacity-100">
                        {loc.name}
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>
            <div>
              <ul className="space-y-3">
                {storyLocations.map((loc) => (
                  <li key={loc.id}>
                    <Link
                      to={`/maps?loc=${loc.id}`}
                      className="group flex items-start gap-3 rounded-sm border border-gold/40 bg-parchment px-4 py-3 transition-colors hover:border-gold hover:bg-gold/10"
                    >
                      <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-terracotta" aria-hidden />
                      <span>
                        <span className="block font-display text-[1rem] font-semibold text-ink group-hover:text-gold">
                          {loc.name}
                        </span>
                        <span className="mt-0.5 line-clamp-2 block font-sans text-[0.8rem] leading-relaxed text-ink-soft">
                          {loc.description}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/maps"
                className="btn-gold-sweep mt-6 inline-block border border-gold-bright bg-gold px-6 py-3 font-sans text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-ink hover:-translate-y-0.5"
              >
                Open these places on the atlas →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Continue reading */}
      <section className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)] pb-[clamp(56px,8vw,96px)]">
        <SectionHeader eyebrow="Further Tales" title="Continue Reading" accent="#25505E" />
        <div className="mt-12">
          <RelatedLinks ids={story.relatedIds} title="" />
        </div>
      </section>
    </div>
  )
}
