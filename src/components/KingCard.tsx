import { useState } from 'react'
import { Link } from 'react-router'
import type { King } from '@/data'
import Medallion from '@/components/Medallion'
import Chip from '@/components/Chip'

export const KING_ACCENT = '#674A7E'

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
      className="h-[88px] w-[88px] rounded-full border object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105"
      style={{ borderColor: `${KING_ACCENT}80` }}
    />
  )
}

/**
 * Parchment card for a king: royal-purple top-rule, portrait/medallion, name,
 * epithet, realm chip, summary, link. Kings with a dual identity (heroId)
 * link through to their hero page and carry an "Also a Hero" marker.
 */
export default function KingCard({ king }: { king: King }) {
  const to = king.heroId ? `/heroes/${king.heroId}` : `/kings/${king.id}`
  return (
    <article className="group relative flex flex-col rounded-md hairline bg-parchment p-6 shadow-warm transition-all duration-[350ms] hover:-translate-y-1.5 hover:border-gold hover:shadow-warm-lg">
      <span
        className="absolute inset-x-0 top-0 h-1 rounded-t-md"
        style={{ backgroundColor: KING_ACCENT }}
        aria-hidden
      />
      <div className="flex items-center gap-4 pt-1">
        <PortraitOrMedallion id={king.heroId ?? king.id} name={king.name} />
        <div>
          <h3 className="font-display text-[1.35rem] font-semibold tracking-[0.02em] text-ink transition-colors group-hover:text-gold">
            {king.name}
          </h3>
          {king.epithet && (
            <p className="font-serif text-[1.05rem] italic text-gold">{king.epithet}</p>
          )}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        <Chip accent={KING_ACCENT}>King of {king.realm.split(',')[0]}</Chip>
        {king.heroId && <Chip accent="#A44A2A">Also a Hero</Chip>}
        {king.house && <Chip accent="#5A5548">{king.house}</Chip>}
      </div>
      <p className="mt-4 line-clamp-2 font-serif text-[1.05rem] leading-relaxed text-ink-soft">
        {king.summary}
      </p>
      <Link
        to={to}
        className="mt-5 inline-flex items-center gap-1.5 font-sans text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-aegean after:absolute after:inset-0"
        aria-label={`Read the myth of ${king.name}`}
      >
        <span className="link-underline">
          {king.heroId ? 'Read the hero tale' : 'Read the myth'}
        </span>
        <span aria-hidden>→</span>
      </Link>
    </article>
  )
}
