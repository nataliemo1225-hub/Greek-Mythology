import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { searchSite, type CategoryKey, type SearchResult } from '@/lib/search'
import SectionHeader from '@/components/SectionHeader'

const CATEGORY_ORDER: { key: CategoryKey; label: string }[] = [
  { key: 'deity', label: 'Gods & Deities' },
  { key: 'hero', label: 'Heroes' },
  { key: 'king', label: 'Kings' },
  { key: 'story', label: 'Stories & Epics' },
  { key: 'tale', label: 'Featured Tales' },
  { key: 'house', label: 'Tragic Houses' },
  { key: 'place', label: 'Places' },
  { key: 'page', label: 'Pages' },
]

const MAX_FIELDS_SHOWN = 4

/** Split text into parts, marking every case-insensitive hit of any term. */
function highlightParts(text: string, terms: string[]): { text: string; hit: boolean }[] {
  const lower = text.toLowerCase()
  const lowered = terms.map((t) => t.toLowerCase()).filter(Boolean)
  const parts: { text: string; hit: boolean }[] = []
  let i = 0
  while (i < text.length) {
    const term = lowered.find((t) => lower.startsWith(t, i))
    if (term) {
      parts.push({ text: text.slice(i, i + term.length), hit: true })
      i += term.length
    } else {
      let j = i + 1
      while (j < text.length && !lowered.some((t) => lower.startsWith(t, j))) j++
      parts.push({ text: text.slice(i, j), hit: false })
      i = j
    }
  }
  return parts
}

function Highlighted({ text, terms }: { text: string; terms: string[] }) {
  return (
    <>
      {highlightParts(text, terms).map((p, i) =>
        p.hit ? (
          <mark key={i} className="rounded-[2px] bg-gold/40 px-0.5 font-semibold text-ink">
            {p.text}
          </mark>
        ) : (
          <span key={i}>{p.text}</span>
        ),
      )}
    </>
  )
}

function ResultCard({ result, terms }: { result: SearchResult; terms: string[] }) {
  const { doc, total, matches } = result
  const shown = matches.slice(0, MAX_FIELDS_SHOWN)
  const hiddenCount = matches.slice(MAX_FIELDS_SHOWN).reduce((n, m) => n + m.count, 0)
  return (
    <li className="rounded-md hairline bg-parchment p-5 shadow-warm transition-all hover:-translate-y-0.5 hover:border-gold">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <Link to={doc.route} className="group min-w-0">
          <span className="font-display text-[1.25rem] font-semibold text-ink transition-colors group-hover:text-gold">
            <Highlighted text={doc.title} terms={terms} />
          </span>
          {doc.subtitle && (
            <span className="ml-2 font-serif text-[0.95rem] italic text-ink-soft">
              {doc.subtitle}
            </span>
          )}
        </Link>
        <span className="flex shrink-0 items-center gap-2">
          <span className="rounded-sm border border-gold/50 bg-gold/10 px-2 py-0.5 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-gold">
            {doc.category}
          </span>
          <span className="font-sans text-[0.72rem] font-medium text-ink-soft">
            {total} {total === 1 ? 'match' : 'matches'}
          </span>
        </span>
      </div>
      <ul className="mt-3 space-y-2 border-t border-gold/20 pt-3">
        {shown.map((m, i) => (
          <li key={i} className="flex flex-col gap-1 sm:flex-row sm:gap-3">
            <span className="mt-0.5 shrink-0 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-aegean">
              {m.label}
              <span className="ml-1 text-ink-soft">×{m.count}</span>
            </span>
            <p className="min-w-0 font-serif text-[0.95rem] leading-[1.6] text-ink">
              <Highlighted text={m.snippet} terms={terms} />
            </p>
          </li>
        ))}
      </ul>
      {hiddenCount > 0 && (
        <p className="mt-3 font-sans text-[0.72rem] tracking-[0.06em] text-ink-soft">
          + {hiddenCount} more {hiddenCount === 1 ? 'occurrence' : 'occurrences'} on this page
        </p>
      )}
      <Link
        to={doc.route}
        className="mt-3 inline-block font-sans text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-gold underline-offset-4 transition-colors hover:text-ink hover:underline"
      >
        Open page →
      </Link>
    </li>
  )
}

/** Site-wide search: every match of the keyword across the whole atlas. */
export default function SearchSection({
  onQueryChange,
}: {
  onQueryChange?: (query: string) => void
}) {
  const [query, setQueryState] = useState('')
  const setQuery = (q: string) => {
    setQueryState(q)
    onQueryChange?.(q)
  }
  const { terms, results } = useMemo(() => searchSite(query), [query])

  const totalMatches = results.reduce((n, r) => n + r.total, 0)
  const groups = CATEGORY_ORDER.map((c) => ({
    ...c,
    items: results.filter((r) => r.doc.categoryKey === c.key),
  })).filter((g) => g.items.length > 0)

  return (
    <section id="search" className="bg-marble/60 py-[clamp(56px,8vw,104px)]">
      <div className="mx-auto max-w-[1000px] px-[clamp(20px,5vw,48px)]">
        <SectionHeader
          eyebrow="Search the Atlas"
          title="Find Any God, Hero, or Tale"
          accent="#A87C2A"
        />

        {/* Search box */}
        <div className="mx-auto mt-10 max-w-[680px]">
          <div className="relative">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gold"
              aria-hidden
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the whole site — try “Zeus”, “Trojan War”, “雅典娜”…"
              aria-label="Search the whole site"
              className="w-full rounded-sm border border-gold/50 bg-ivory py-4 pl-14 pr-12 font-serif text-[1.1rem] text-ink shadow-warm outline-none transition-colors placeholder:italic placeholder:text-ink-soft/70 focus:border-gold"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 font-sans text-[1.1rem] leading-none text-ink-soft transition-colors hover:text-ink"
              >
                ×
              </button>
            )}
          </div>
          <p className="mt-3 text-center font-sans text-[0.72rem] uppercase tracking-[0.18em] text-ink-soft">
            Searches every god, hero, king, story, and place in the atlas
          </p>
        </div>

        {/* Results */}
        {query.trim() && (
          <div className="mt-12">
            {results.length === 0 ? (
              <p className="mx-auto max-w-[50ch] text-center font-serif text-[1.15rem] italic leading-[1.7] text-ink-soft">
                No corner of the atlas mentions “{query.trim()}”. Try another name, place, or tale.
              </p>
            ) : (
              <>
                <p className="text-center font-sans text-[0.8rem] tracking-[0.08em] text-ink-soft">
                  <span className="font-semibold text-gold">{totalMatches}</span>{' '}
                  {totalMatches === 1 ? 'occurrence' : 'occurrences'} of “{query.trim()}” across{' '}
                  <span className="font-semibold text-gold">{results.length}</span>{' '}
                  {results.length === 1 ? 'entry' : 'entries'}
                </p>
                <div className="mt-8 space-y-10">
                  {groups.map((group) => (
                    <div key={group.key}>
                      <div className="flex items-center gap-4">
                        <h3 className="shrink-0 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-aegean">
                          {group.label}
                        </h3>
                        <span className="h-px flex-1 bg-gold/30" aria-hidden />
                        <span className="shrink-0 font-sans text-[0.68rem] text-ink-soft">
                          {group.items.length} {group.items.length === 1 ? 'entry' : 'entries'}
                        </span>
                      </div>
                      <ul className="mt-4 grid gap-4">
                        {group.items.map((r) => (
                          <ResultCard key={r.doc.id} result={r} terms={terms} />
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
