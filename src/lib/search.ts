import {
  primordials,
  titans,
  titanBorn,
  olympians,
  otherDeities,
  heroes,
  kings,
  stories,
  locations,
  tragicHouses,
  type God,
  type Hero,
  type King,
  type Story,
  type MythLocation,
  type GodFeature,
} from '@/data'
import { taleSlug } from '@/lib/utils'

/* ------------------------------------------------------------------ */
/* Document model                                                      */
/* ------------------------------------------------------------------ */

export interface SearchField {
  label: string
  text: string
}

export type CategoryKey = 'deity' | 'hero' | 'king' | 'story' | 'tale' | 'house' | 'place' | 'page'

export interface SearchDoc {
  id: string
  title: string
  subtitle?: string
  category: string
  categoryKey: CategoryKey
  route: string
  fields: SearchField[]
}

const GENERATION_CATEGORY: Record<God['generation'], string> = {
  primordial: 'Primordial God',
  titan: 'Titan',
  'titan-born': 'Titan-born',
  olympian: 'Olympian',
}

const STORY_CATEGORY: Record<Story['category'], string> = {
  war: 'War Saga',
  epic: 'Epic',
  tragedy: 'Tragedy',
  origin: 'Origin Myth',
  myth: 'Myth',
}

function godToDoc(god: God): SearchDoc {
  const fields: SearchField[] = [
    { label: 'Name', text: [god.name, god.epithet, god.romanName].filter(Boolean).join(' — ') },
    { label: 'Title', text: god.title },
    { label: 'Domain & Symbols', text: [...god.domain, ...god.symbols].join(', ') },
  ]
  if (god.parents || god.consort || god.children) {
    fields.push({
      label: 'Family',
      text: [
        god.parents && `Parents: ${god.parents}`,
        god.consort && `Consort: ${god.consort}`,
        god.children && `Children: ${god.children}`,
      ]
        .filter(Boolean)
        .join('. '),
    })
  }
  fields.push({ label: 'Summary', text: god.summary })
  god.keyMyths.forEach((myth, i) => fields.push({ label: `Key Myth ${i + 1}`, text: myth }))
  return {
    id: god.id,
    title: god.name,
    subtitle: god.title,
    category: GENERATION_CATEGORY[god.generation],
    categoryKey: 'deity',
    route: `/pantheon/${god.id}`,
    fields,
  }
}

function heroToDoc(hero: Hero): SearchDoc {
  const fields: SearchField[] = [
    { label: 'Name', text: [hero.name, hero.epithet].filter(Boolean).join(' — ') },
    { label: 'Origin', text: hero.origin },
    { label: 'Famous For', text: hero.famousFor },
  ]
  if (hero.parents) fields.push({ label: 'Parents', text: hero.parents })
  fields.push({ label: 'Summary', text: hero.summary })
  hero.keyMyths.forEach((myth, i) => fields.push({ label: `Key Myth ${i + 1}`, text: myth }))
  return {
    id: hero.id,
    title: hero.name,
    subtitle: hero.famousFor,
    category: 'Hero',
    categoryKey: 'hero',
    route: `/heroes/${hero.id}`,
    fields,
  }
}

function kingToDoc(king: King): SearchDoc {
  const fields: SearchField[] = [
    { label: 'Name', text: [king.name, king.epithet].filter(Boolean).join(' — ') },
    { label: 'Realm', text: [king.realm, king.house].filter(Boolean).join(' — ') },
    { label: 'Famous For', text: king.famousFor },
  ]
  if (king.parents) fields.push({ label: 'Parents', text: king.parents })
  fields.push({ label: 'Summary', text: king.summary })
  king.keyMyths.forEach((myth, i) => fields.push({ label: `Key Myth ${i + 1}`, text: myth }))
  return {
    id: king.id,
    title: king.name,
    subtitle: king.famousFor,
    category: king.heroId ? 'King & Hero' : 'King',
    categoryKey: 'king',
    route: king.heroId ? `/heroes/${king.heroId}` : `/kings/${king.id}`,
    fields,
  }
}

function storyToDoc(story: Story): SearchDoc {
  const fields: SearchField[] = [
    {
      label: 'Title',
      text: [story.title, story.subtitle, story.author, story.date].filter(Boolean).join(' — '),
    },
    { label: 'Introduction', text: story.intro },
  ]
  story.sections.forEach((s) => fields.push({ label: `Section: ${s.heading}`, text: s.body }))
  return {
    id: story.id,
    title: story.title,
    subtitle: story.subtitle,
    category: STORY_CATEGORY[story.category],
    categoryKey: 'story',
    route: `/stories/${story.id}`,
    fields,
  }
}

/** A featured tale of a god or hero becomes its own searchable document, deep-linking to its page. */
function taleToDoc(person: God | Hero, kind: 'god' | 'hero', feature: GodFeature): SearchDoc {
  const base = kind === 'god' ? '/pantheon' : '/heroes'
  return {
    id: `${person.id}-tale-${taleSlug(feature.title)}`,
    title: feature.title,
    subtitle: `${person.name} · Featured Tale`,
    category: 'Featured Tale',
    categoryKey: 'tale',
    route: `${base}/${person.id}/tales/${taleSlug(feature.title)}`,
    fields: [
      { label: 'Lede', text: feature.lede },
      ...feature.facts.map((f) => ({ label: `Fact: ${f.label}`, text: `${f.label}: ${f.value}` })),
      ...feature.sections.map((s) => ({
        label: `Chapter: ${s.heading}`,
        text: `${s.heading}. ${s.body}`,
      })),
    ],
  }
}

function locationToDoc(loc: MythLocation): SearchDoc {
  return {
    id: loc.id,
    title: loc.name,
    subtitle: loc.type,
    category: 'Place',
    categoryKey: 'place',
    route: `/maps?loc=${loc.id}`,
    fields: [
      { label: 'Name', text: `${loc.name} (${loc.type})` },
      { label: 'Description', text: loc.description },
    ],
  }
}

/* ------------------------------------------------------------------ */
/* Index                                                               */
/* ------------------------------------------------------------------ */

const PAGE_DOCS: SearchDoc[] = [
  {
    id: 'page-home',
    title: 'Home',
    subtitle: 'An Atlas of the Ancient Greek World',
    category: 'Page',
    categoryKey: 'page',
    route: '/',
    fields: [
      {
        label: 'Page',
        text: 'MYTHOS — An Atlas of the Ancient Greek World. From Chaos to Odysseus — the gods, heroes, and epics of Greek mythology, gathered in one atlas.',
      },
    ],
  },
  {
    id: 'page-pantheon',
    title: 'The Pantheon',
    category: 'Page',
    categoryKey: 'page',
    route: '/pantheon',
    fields: [
      {
        label: 'Page',
        text: 'The Pantheon — primordial gods, the twelve Titans, and the twelve Olympians of Mount Olympus.',
      },
    ],
  },
  {
    id: 'page-heroes',
    title: 'Heroes',
    category: 'Page',
    categoryKey: 'page',
    route: '/heroes',
    fields: [
      {
        label: 'Page',
        text: 'Heroes — Heracles, Perseus, Theseus, Achilles, Odysseus, Jason, Atalanta, Bellerophon, Orpheus and the great quests of the heroic age.',
      },
    ],
  },
  {
    id: 'page-kings',
    title: 'The Kings',
    category: 'Page',
    categoryKey: 'page',
    route: '/kings',
    fields: [
      {
        label: 'Page',
        text: 'The Kings — mortal sovereigns between gods and heroes: Agamemnon, Priam, Menelaus, Nestor, Oedipus, Creon, Atreus, Tantalus, Minos, Cadmus, Midas, Sisyphus, and the hero-kings Theseus, Odysseus, Jason and Perseus.',
      },
    ],
  },
  {
    id: 'page-stories',
    title: 'Stories & Epics',
    category: 'Page',
    categoryKey: 'page',
    route: '/stories',
    fields: [
      {
        label: 'Page',
        text: 'Stories and epics — the Trojan War, the Iliad, the Odyssey, the Golden Fleece, and the origin myths of gods and mankind.',
      },
    ],
  },
  {
    id: 'page-tragedies',
    title: 'The Great Tragic Families',
    category: 'Page',
    categoryKey: 'page',
    route: '/tragedies',
    fields: [
      {
        label: 'Page',
        text: 'The Great Tragic Families — three royal houses, three hereditary curses: the House of Cadmus, the House of Thebes, and the House of Atreus.',
      },
    ],
  },
  {
    id: 'page-maps',
    title: 'Interactive Maps',
    category: 'Page',
    categoryKey: 'page',
    route: '/maps',
    fields: [
      {
        label: 'Page',
        text: 'Interactive maps — the Aegean world, the Troad and the Trojan War, and the wanderings of Odysseus. Click a place to open its stories.',
      },
    ],
  },
]

export const SEARCH_INDEX: SearchDoc[] = [
  ...[...primordials, ...titans, ...titanBorn, ...olympians, ...otherDeities].map(godToDoc),
  ...heroes.map(heroToDoc),
  ...kings.map(kingToDoc),
  ...[...primordials, ...titans, ...titanBorn, ...olympians, ...otherDeities].flatMap((g) =>
    (g.features ?? []).map((f) => taleToDoc(g, 'god', f)),
  ),
  ...heroes.flatMap((h) => (h.features ?? []).map((f) => taleToDoc(h, 'hero', f))),
  ...stories.map(storyToDoc),
  ...tragicHouses.map((house): SearchDoc => {
    return {
      id: house.id,
      title: house.eyebrow,
      subtitle: house.curse,
      category: 'Tragic House',
      categoryKey: 'house',
      route: `/tragedies#${house.id}`,
      fields: [
        { label: 'House', text: `${house.eyebrow} — ${house.curse}` },
        ...house.timeline.map((node) => ({
          label: `Doomed Generation: ${node.name}`,
          text: `${node.name} — ${node.fate}`,
        })),
      ],
    }
  }),
  ...locations.map(locationToDoc),
  ...PAGE_DOCS,
]

/* ------------------------------------------------------------------ */
/* Query normalization                                                   */
/* ------------------------------------------------------------------ */

export function expandQuery(query: string): string[] {
  const q = query.trim()
  if (!q) return []
  return [q]
}

/* ------------------------------------------------------------------ */
/* Search                                                              */
/* ------------------------------------------------------------------ */

export interface FieldMatch {
  label: string
  snippet: string
  count: number
}

export interface SearchResult {
  doc: SearchDoc
  total: number
  matches: FieldMatch[]
}

const SNIPPET_RADIUS = 70

function countOccurrences(haystack: string, term: string): number {
  let count = 0
  let idx = haystack.indexOf(term)
  while (idx !== -1) {
    count++
    idx = haystack.indexOf(term, idx + term.length)
  }
  return count
}

function firstOccurrence(haystack: string, terms: string[]): number {
  let best = -1
  for (const term of terms) {
    const idx = haystack.indexOf(term)
    if (idx !== -1 && (best === -1 || idx < best)) best = idx
  }
  return best
}

export function searchSite(query: string): { terms: string[]; results: SearchResult[] } {
  const rawTerms = expandQuery(query)
  const terms = rawTerms.map((t) => t.toLowerCase()).filter((t) => t.length > 0)
  if (terms.length === 0) return { terms: [], results: [] }

  const results: SearchResult[] = []
  for (const doc of SEARCH_INDEX) {
    const matches: FieldMatch[] = []
    let total = 0
    for (const field of doc.fields) {
      const lower = field.text.toLowerCase()
      let count = 0
      for (const term of terms) count += countOccurrences(lower, term)
      if (count === 0) continue
      total += count
      const first = firstOccurrence(lower, terms)
      const start = Math.max(0, first - SNIPPET_RADIUS)
      const end = Math.min(field.text.length, first + SNIPPET_RADIUS)
      const snippet =
        (start > 0 ? '…' : '') + field.text.slice(start, end).trim() + (end < field.text.length ? '…' : '')
      matches.push({ label: field.label, snippet, count })
    }
    if (total > 0) {
      matches.sort((a, b) => b.count - a.count)
      results.push({ doc, total, matches })
    }
  }
  results.sort((a, b) => b.total - a.total)
  return { terms: rawTerms, results }
}
