/** A long-form featured narrative attached to a deity's detail page. */
export interface GodFeature {
  eyebrow: string;         // e.g. "The War of the Titans"
  title: string;           // e.g. "The Titanomachy"
  lede: string;            // 1–2 sentence hook
  facts: { label: string; value: string }[]; // quick-reference rail
  sections: { heading: string; body: string }[]; // body = one paragraph per section
  relatedIds?: string[];   // figures & stories tied to THIS tale; falls back to the person's own relatedIds when omitted
}

export interface God {
  id: string;
  name: string;            // e.g. "Zeus"
  pronunciation?: string;  // American IPA, e.g. "/zuːs/"
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
  pronunciation?: string;  // American IPA, e.g. "/əˈkɪliːz/"
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

/** Display grouping on the Kings index: war = thrones of the Trojan War;
 *  cursed = doomed dynasties; founder = city-founders & fabled monarchs. */
export type KingGroup = 'war' | 'cursed' | 'founder'

export interface King {
  id: string;
  name: string;
  pronunciation?: string;  // American IPA, e.g. "/ˈæɡəˈmemnɒn/"
  epithet?: string;
  realm: string;           // seat of power, e.g. "Mycenae"
  house?: string;          // dynastic line, e.g. "House of Atreus"
  group: KingGroup;
  parents?: string;
  famousFor: string;       // one line, e.g. "Commander of the Greek host at Troy"
  summary: string;         // 4–7 sentences
  keyMyths: string[];      // 3–6 bullets (empty when heroId is set — detail lives on the hero page)
  features?: GodFeature[]; // optional long-form tales, e.g. the Labyrinth for Minos
  heroId?: string;         // dual identity: full detail lives at /heroes/<heroId>
  relatedIds: string[];    // ids of other gods/heroes/kings/stories
  locationIds: string[];   // ids from the location registry
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
  pronunciation?: string;  // American IPA, e.g. "/əˈlɪmpəs/"
  type: 'city' | 'mountain' | 'island' | 'sea' | 'realm';
  /** Display rank on the atlas. When omitted, MAJOR_LOCATION_IDS in locations.ts
   *  decides; minors fade in only once the reader zooms in. */
  prominence?: 'major' | 'minor';
  maps: ('greece' | 'trojan' | 'odyssey')[];
  // percentage coordinates (0–100) per map: x = left→right, y = top→bottom
  coords: Partial<Record<'greece' | 'trojan' | 'odyssey', { x: number; y: number }>>;
  description: string;     // 2–4 sentences
  relatedIds: string[];    // gods/heroes/stories ids linked to this place
}

