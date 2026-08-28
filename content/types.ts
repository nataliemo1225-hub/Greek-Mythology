/** A long-form featured narrative attached to a deity's detail page. */
export interface GodFeature {
  eyebrow: string;         // e.g. "The War of the Titans"
  title: string;           // e.g. "The Titanomachy"
  lede: string;            // 1–2 sentence hook
  facts: { label: string; value: string }[]; // quick-reference rail
  sections: { heading: string; body: string }[]; // body = one paragraph per section
}

export interface God {
  id: string;
  name: string;            // e.g. "Zeus"
  epithet?: string;        // e.g. "the Cloud-Gatherer"
  title: string;           // e.g. "King of the Gods, God of Sky and Thunder"
  generation: 'primordial' | 'titan' | 'titan-born' | 'olympian';
  romanName?: string;
  domain: string[];        // e.g. ["sky", "thunder", "justice"]
  symbols: string[];       // e.g. ["thunderbolt", "eagle", "oak"]
  parents?: string;        // short text, e.g. "Cronus and Rhea"
  consort?: string;
  children?: string;       // short text listing notable children
  summary: string;         // 4–7 sentences, engaging overview prose
  keyMyths: string[];      // 3–6 short bullets, each 1–2 sentences
  features?: GodFeature[]; // optional long-form narratives, e.g. the Titanomachy for Zeus
  relatedIds: string[];    // ids of other gods/heroes/stories — use the ID REGISTRY below
  locationIds: string[];   // ids from the location registry
}

export interface Hero {
  id: string;
  name: string;
  epithet?: string;
  origin: string;          // homeland, e.g. "Thebes (born), Tiryns"
  parents?: string;
  famousFor: string;       // one line, e.g. "The Twelve Labors"
  summary: string;         // 4–7 sentences
  keyMyths: string[];      // 3–6 bullets
  features?: GodFeature[]; // optional long-form narratives, e.g. the descent for Eurydice
  relatedIds: string[];
  locationIds: string[];
}

export interface Story {
  id: string;
  title: string;           // e.g. "The Trojan War"
  subtitle?: string;
  category: 'war' | 'epic' | 'tragedy' | 'origin' | 'myth';
  author?: string;         // "Homer" for Iliad/Odyssey
  date?: string;           // e.g. "8th century BCE"
  intro: string;           // 1 paragraph hook
  sections: { heading: string; body: string }[]; // 3–6 sections, body = 1–3 paragraphs
  keyFigures: string[];    // ids of gods/heroes
  keyLocationIds: string[];
  relatedIds: string[];
}

export interface MythLocation {
  id: string;
  name: string;
  type: 'city' | 'mountain' | 'island' | 'sea' | 'realm';
  maps: ('greece' | 'trojan' | 'odyssey')[];
  // percentage coordinates (0–100) per map: x = left→right, y = top→bottom
  coords: Partial<Record<'greece' | 'trojan' | 'odyssey', { x: number; y: number }>>;
  description: string;     // 2–4 sentences
  relatedIds: string[];    // gods/heroes/stories ids linked to this place
}

export interface GlossaryEntry {
  english: string;
  chinese: string;         // standard mainland Chinese translation, e.g. 宙斯
  category: 'primordial' | 'titan' | 'olympian' | 'hero' | 'place' | 'story' | 'creature' | 'concept';
  note?: string;           // short note, e.g. "Roman name: Jupiter"
  refId?: string;          // id of the corresponding god/hero/story/location entry
}
