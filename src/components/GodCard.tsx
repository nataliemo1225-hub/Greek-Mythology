import { useState } from 'react'
import { Link } from 'react-router'
import type { God } from '@/data'
import Medallion from '@/components/Medallion'
import Chip from '@/components/Chip'

export const GENERATION_ACCENT: Record<God['generation'], string> = {
  primordial: '#3D3A5C',
  titan: '#8C5A2B',
  'titan-born': '#8C5A2B',
  olympian: '#A87C2A',
}

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
      className="h-[88px] w-[88px] rounded-full border border-gold/50 object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105"
    />
  )
}

/**
 * Parchment card for a deity: hairline border, 4px top-rule in the generation
 * accent, portrait/medallion, name, epithet, domain chips, summary, link.
 */
export default function GodCard({ god }: { god: God }) {
  const accent = GENERATION_ACCENT[god.generation]
  return (
    <article className="group relative flex flex-col rounded-md hairline bg-parchment p-6 shadow-warm transition-all duration-[350ms] hover:-translate-y-1.5 hover:border-gold hover:shadow-warm-lg">
      <span className="absolute inset-x-0 top-0 h-1 rounded-t-md" style={{ backgroundColor: accent }} aria-hidden />
      <div className="flex items-center gap-4 pt-1">
        <PortraitOrMedallion id={god.id} name={god.name} />
        <div>
          <h3 className="font-display text-[1.35rem] font-semibold tracking-[0.02em] text-ink transition-colors group-hover:text-gold">
            {god.name}
          </h3>
          {god.epithet && (
            <p className="font-serif text-[1.05rem] italic text-gold">{god.epithet}</p>
          )}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {god.domain.slice(0, 3).map((d) => (
          <Chip key={d} accent={accent}>
            {d}
          </Chip>
        ))}
      </div>
      <p className="mt-4 line-clamp-2 font-serif text-[1.05rem] leading-relaxed text-ink-soft">
        {god.summary}
      </p>
      <Link
        to={`/pantheon/${god.id}`}
        className="mt-5 inline-flex items-center gap-1.5 font-sans text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-aegean after:absolute after:inset-0"
        aria-label={`Read the myth of ${god.name}`}
      >
        <span className="link-underline">Read the myth</span>
        <span aria-hidden>→</span>
      </Link>
    </article>
  )
}
