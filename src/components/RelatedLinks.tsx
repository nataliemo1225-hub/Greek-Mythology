import { Link } from 'react-router'
import { primordials, titans, titanBorn, olympians, otherDeities, heroes, kings, stories } from '@/data'
import Medallion from '@/components/Medallion'

interface RelatedEntry {
  id: string
  name: string
  typeLabel: string
  to: string
}

const ALL: RelatedEntry[] = [
  ...primordials.map((g) => ({ id: g.id, name: g.name, typeLabel: 'Primordial', to: `/pantheon/${g.id}` })),
  ...titans.map((g) => ({ id: g.id, name: g.name, typeLabel: 'Titan', to: `/pantheon/${g.id}` })),
  ...titanBorn.map((g) => ({ id: g.id, name: g.name, typeLabel: 'Titan-born', to: `/pantheon/${g.id}` })),
  ...olympians.map((g) => ({ id: g.id, name: g.name, typeLabel: 'Olympian', to: `/pantheon/${g.id}` })),
  ...otherDeities.map((g) => ({ id: g.id, name: g.name, typeLabel: 'Deity', to: `/pantheon/${g.id}` })),
  ...heroes.map((h) => ({ id: h.id, name: h.name, typeLabel: 'Hero', to: `/heroes/${h.id}` })),
  // Kings with a dual identity resolve to their hero page
  ...kings.map((k) => ({
    id: k.id,
    name: k.name,
    typeLabel: k.heroId ? 'King & Hero' : 'King',
    to: k.heroId ? `/heroes/${k.heroId}` : `/kings/${k.id}`,
  })),
  ...stories.map((s) => ({
    id: s.id,
    name: s.title,
    typeLabel:
      s.category === 'tragedy'
        ? 'Tragedy'
        : s.category === 'war'
          ? 'War'
          : s.category === 'origin'
            ? 'Origin Myth'
            : 'Epic',
    to: `/stories/${s.id}`,
  })),
]

export function resolveRelated(ids: string[]): RelatedEntry[] {
  return ids
    .map((id) => ALL.find((e) => e.id === id))
    .filter((e): e is RelatedEntry => Boolean(e))
}

/** Row of small "Related figures & stories" cards with medallion + name + type. */
export default function RelatedLinks({
  ids,
  title = 'Related figures & stories',
  gridClass = 'sm:grid-cols-2 lg:grid-cols-3',
  compact = false,
}: {
  ids: string[]
  title?: string
  /** Grid columns for the card list — override in narrow containers. */
  gridClass?: string
  /** Pill-style links that stay short no matter how many entries — for side panels. */
  compact?: boolean
}) {
  const entries = resolveRelated(ids)
  if (entries.length === 0) return null

  if (compact) {
    return (
      <section aria-label={title}>
        <h2 className="font-display text-xl font-semibold tracking-[0.02em] text-ink">{title}</h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {entries.map((e) => (
            <Link
              key={e.id}
              to={e.to}
              title={`${e.name} — ${e.typeLabel}`}
              className="group flex items-center gap-2 rounded-full hairline bg-parchment py-1.5 pl-1.5 pr-3.5 shadow-warm transition-colors hover:border-gold hover:bg-gold/15"
            >
              <Medallion name={e.name} size={26} />
              <span className="font-sans text-[0.78rem] font-medium tracking-[0.04em] text-ink transition-colors group-hover:text-gold">
                {e.name}
              </span>
            </Link>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section aria-label={title}>
      <h2 className="font-display text-xl font-semibold tracking-[0.02em] text-ink">{title}</h2>
      <div className={`mt-5 grid gap-4 ${gridClass}`}>
        {entries.map((e) => (
          <Link
            key={e.id}
            to={e.to}
            className="group flex items-center gap-3 rounded-md hairline bg-parchment p-3 shadow-warm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-warm-lg"
          >
            <Medallion name={e.name} size={48} />
            <span className="min-w-0">
              <span className="block truncate font-display text-[1rem] font-semibold text-ink transition-colors group-hover:text-gold">
                {e.name}
              </span>
              <span className="block truncate font-sans text-[0.7rem] uppercase tracking-[0.12em] text-ink-soft">
                {e.typeLabel}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
