import { useState } from 'react'
import { Link } from 'react-router'
import type { Hero } from '@/data'
import Medallion from '@/components/Medallion'
import Chip from '@/components/Chip'

const HERO_ACCENT = '#A44A2A'

/** Tries `/portrait-<id>.jpg`, falls back to a Medallion when absent. */
function PortraitOrMedallion({ id, name }: { id: string; name: string }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <Medallion name={name} size={88} />
  return (
    <img
      src={`/portrait-${id}.jpg`}
      alt={`Engraved portrait of ${name}`}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-[88px] w-[88px] rounded-full border border-terracotta/50 object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105"
    />
  )
}

/**
 * Parchment card for a hero: terracotta top-rule, portrait/medallion, name,
 * epithet, "famous for" chip, summary, link.
 */
export default function HeroCard({ hero }: { hero: Hero }) {
  return (
    <article className="group relative flex flex-col rounded-md hairline bg-parchment p-6 shadow-warm transition-all duration-[350ms] hover:-translate-y-1.5 hover:border-gold hover:shadow-warm-lg">
      <span className="absolute inset-x-0 top-0 h-1 rounded-t-md bg-terracotta" aria-hidden />
      <div className="flex items-center gap-4 pt-1">
        <PortraitOrMedallion id={hero.id} name={hero.name} />
        <div>
          <h3 className="font-display text-[1.35rem] font-semibold tracking-[0.02em] text-ink transition-colors group-hover:text-terracotta">
            {hero.name}
          </h3>
          {hero.epithet && (
            <p className="font-serif text-[1.05rem] italic text-gold">{hero.epithet}</p>
          )}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        <Chip accent={HERO_ACCENT}>{hero.famousFor}</Chip>
        <Chip accent="#25505E">{hero.origin.split(',')[0]}</Chip>
      </div>
      <p className="mt-4 line-clamp-2 font-serif text-[1.05rem] leading-relaxed text-ink-soft">
        {hero.summary}
      </p>
      <Link
        to={`/heroes/${hero.id}`}
        className="mt-5 inline-flex items-center gap-1.5 font-sans text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-aegean after:absolute after:inset-0"
        aria-label={`Read the myth of ${hero.name}`}
      >
        <span className="link-underline">Read the myth</span>
        <span aria-hidden>→</span>
      </Link>
    </article>
  )
}
