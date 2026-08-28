# Greek Mythology Website — Content Data Schema (READ FULLY BEFORE WRITING)

All content is written as TypeScript data files into `/mnt/agents/output/content/`.
These files will be copied verbatim into the React app at `src/data/`.
Content depth: **overview level** — accurate, well-written, concise. The user will ask for more detail later.

## File & type definitions

### `types.ts` (already agreed — every data file imports from `./types`)

```ts
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
  relatedIds: string[];
  locationIds: string[];
}

export interface Story {
  id: string;
  title: string;           // e.g. "The Trojan War"
  subtitle?: string;
  category: 'war' | 'epic' | 'tragedy';
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
```

## ID REGISTRY (fixed — use exactly these ids; other agents' files reference them)

**Primordials**: `chaos`, `gaia`, `tartarus`, `eros-primordial`, `erebus`, `nyx`, `uranus`, `pontus`, `ourea`
**Titans (the Twelve)**: `cronus`, `rhea`, `oceanus`, `tethys`, `hyperion`, `theia`, `coeus`, `phoebe`, `crius`, `iapetus`, `mnemosyne`, `themis`
**Titan-born (notable second-generation Titans)**: `atlas`, `prometheus`, `epimetheus`, `helios`, `selene`, `eos`, `leto`
**Olympians (the Twelve)**: `zeus`, `hera`, `poseidon`, `demeter`, `athena`, `apollo`, `artemis`, `ares`, `aphrodite`, `hephaestus`, `hermes`, `dionysus`
**Other notable Olympian-era deities**: `hestia`, `hades`, `persephone`, `hebe`, `eris`, `nike`
**Heroes**: `heracles`, `perseus`, `theseus`, `achilles`, `odysseus`, `jason`, `atalanta`, `bellerophon`, `orpheus`, `aeneas`
**Stories**: `trojan-war`, `iliad`, `odyssey`, `house-of-atreus`, `house-of-thebes`, `house-of-cadmus`
**Locations**:
- greece map: `olympus`, `delphi`, `delos`, `athens`, `thebes`, `argos`, `mycenae`, `sparta`, `corinth`, `ithaca`, `crete`, `troy`, `colchis`, `aeaea`, `lemnos`, `naxos`, `underworld`
- trojan-war map subset: `troy`, `sparta`, `mycenae`, `ithaca`, `argos`, `athens`, `thebes`, `crete`, `lesbos`, `lyrnessus`, `chryse`, `aulis`
- odyssey map subset: `troy`, `ithaca`, `lotus-island`, `cyclops-island`, `aeolus-island`, `laestrygonia`, `aeaea`, `sirens-sea`, `scylla-charybdis`, `thrinacia`, `ogygia`, `scheria`, `underworld-gates`

## Coordinate guidance (schematic map, 0–100 percentages)

**'greece' map** — the Aegean world: mainland Greece upper-left/center, Aegean Sea center-right, Anatolia far right, Crete bottom-center.
- Mt Olympus ~ (38, 18); Delphi ~ (33, 34); Athens ~ (48, 42); Thebes ~ (42, 35); Corinth ~ (38, 44); Argos ~ (37, 48); Mycenae ~ (39, 50); Sparta ~ (37, 58); Olympia-region not needed.
- Ithaca ~ (22, 40); Delos ~ (58, 52); Crete ~ (55, 78); Naxos ~ (60, 58); Lemnos ~ (62, 22); Troy ~ (82, 14); Colchis ~ (95, 8); Aeaea (Circe's isle, far west near Italy) ~ (8, 30); Underworld (symbolic, bottom-left corner) ~ (12, 85).

**'trojan' map** — zoom on the northeast Aegean/Troad: Troy top-right area.
- Troy ~ (70, 25); Lesbos ~ (68, 48); Chryse ~ (75, 60); Lyrnessus ~ (78, 55); Aulis ~ (30, 70); Lemnos ~ (45, 30); mainland cities (Mycenae, Sparta, Athens, etc.) along left/bottom edges.

**'odyssey' map** — the wandering Mediterranean, Troy right, Ithaca center-left.
- Troy ~ (88, 20); Ithaca ~ (38, 45); Lotus-island ~ (20, 80); Cyclops-island ~ (50, 60); Aeolus-island ~ (45, 40); Laestrygonia ~ (55, 30); Aeaea ~ (30, 25); Underworld-gates ~ (15, 15); Sirens-sea ~ (35, 55); Scylla-charybdis ~ (42, 65); Thrinacia ~ (48, 72); Ogygia ~ (25, 88); Scheria ~ (40, 52) (adjust slightly so markers don't overlap Ithaca).

## Writing standards
- All content in **English** (except the `chinese` field in glossary entries).
- Mythology must be accurate to mainstream classical sources (Hesiod's Theogony, Homer, Apollodorus, Greek tragedy).
- Concise, elegant, encyclopedic prose — like a museum companion, not a textbook.
- Do NOT include any Chinese in god/hero/story/location files. Chinese appears ONLY in glossary.ts.
- Export style: `export const primordials: God[] = [...]` etc. One named export per file, matching the file name.
