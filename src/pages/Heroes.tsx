import { Link } from 'react-router'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import HeroCard from '@/components/HeroCard'
import Reveal from '@/components/Reveal'
import Chip from '@/components/Chip'
import { heroes } from '@/data'

export default function Heroes() {
  const spotlight = heroes.find((h) => h.id === 'heracles') ?? heroes[0]
  const rest = heroes.filter((h) => h.id !== spotlight.id)

  return (
    <div>
      <PageHero
        eyebrow="Mortal Glory"
        title="The Heroes"
        lede="Half-divine, fully mortal — men and women who slew monsters, founded cities, and earned a place among the stars."
        image="/art-heroes.jpg"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Heroes' }]}
        tall
      />

      {/* Heracles spotlight */}
      <section className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)] py-[clamp(48px,7vw,88px)]">
        <Reveal>
          <Link
            to={`/heroes/${spotlight.id}`}
            className="group grid items-center gap-10 rounded-md border border-gold/60 bg-parchment p-8 shadow-warm-lg min-[960px]:grid-cols-[55fr_45fr] min-[960px]:p-12"
          >
            <div>
              <p className="eyebrow text-terracotta">The Greatest of Heroes</p>
              <h2 className="mt-3 font-display text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold text-ink transition-colors group-hover:text-terracotta">
                {spotlight.name}
              </h2>
              {spotlight.epithet && (
                <p className="mt-1 font-serif text-[1.35rem] italic text-gold">{spotlight.epithet}</p>
              )}
              <p className="mt-5 line-clamp-4 max-w-[56ch] font-serif text-[1.15rem] leading-[1.75] text-ink">
                {spotlight.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Chip accent="#A44A2A">{spotlight.famousFor}</Chip>
                {spotlight.parents && <Chip accent="#68703C">{spotlight.parents}</Chip>}
                <Chip accent="#25505E">{spotlight.origin}</Chip>
              </div>
              <span className="mt-7 inline-flex items-center gap-1.5 font-sans text-[0.85rem] font-semibold uppercase tracking-[0.14em] text-aegean">
                <span className="link-underline">Read his story</span>
                <span aria-hidden>→</span>
              </span>
            </div>
            <div className="relative mx-auto">
              <span
                className="absolute inset-0 rounded-full bg-gold/25 blur-3xl"
                aria-hidden
              />
              <img
                src="/portrait-heracles.jpg"
                alt="Engraved portrait of Heracles"
                className="relative aspect-square w-full max-w-[360px] rounded-sm border border-terracotta/50 object-cover shadow-warm"
              />
            </div>
          </Link>
        </Reveal>
      </section>

      {/* The roll of heroes */}
      <section className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)] pb-[clamp(56px,8vw,96px)]">
        <SectionHeader
          eyebrow="The Roll of Heroes"
          title="Nine More Names to Remember"
          accent="#A44A2A"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      </section>
    </div>
  )
}
