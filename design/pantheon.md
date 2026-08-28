# Pantheon Pages — `/pantheon` + `/pantheon/:id`
## Design Document

The heart of the site: all divine figures across three generations — Primordial Gods, the Twelve Titans (+ notable Titan-born), and the Twelve Olympians (+ other deities) — as a tabbed index plus a rich detail template.

---

# A. Pantheon Index — `/pantheon`

## Section 1 — PageHero

**Layout:** 46vh banner. Background artwork **changes with the active tab** (`art-primordial.png` / `art-titans.png` / `art-olympians.png`), cross-fading on tab switch. Dark scrim. Breadcrumb `Home / Pantheon`. H1 `The Pantheon`. Lede: *"Three generations of divine power — from the first void to the thrones of Olympus."*

**Animation:** H1 char-split rise (stagger 0.03s); lede fades at +0.4s; background parallax `yPercent -10` scrub. On tab switch: old art cross-fades to new (0.7s), H1 remains.

**Assets:** three generation artworks.

## Section 2 — Generation Tabs (sticky tab bar)

**Layout:** Sticky bar under navbar (top: 72px), ivory/blur, hairline bottom border. Three tabs as large segmented controls, full container width:

1. `PRIMORDIAL GODS` — accent `primordial` violet, subtitle "The first powers" · count badge `9`
2. `THE TWELVE TITANS` — accent `bronze`, subtitle "Lords of the golden age" · badge `12 + 7`
3. `THE OLYMPIANS` — accent `gold`, subtitle "The thrones of Olympus" · badge `12 + 6`

Tab = Cinzel 600 label + Inter 0.65rem subtitle + count chip. Active tab: bottom 3px accent bar + accent-tinted background (`accent/8%`).

**Animation:** Tab bar slides down into stick with shadow on scroll. Active indicator animates via Framer Motion `layoutId` (0.35s spring). URL syncs `?tab=primordial|titan|olympian` (deep-linkable, also used by Home prologue links).

## Section 3 — Generation Intro Panel

**Layout:** Per-tab intro block above the grid: left — large Cinzel roman numeral + generation name; right — 2–3 sentence framing copy (fixed copy):
- Primordials: *"Before gods there were powers: the void of Chaos, broad-breasted Gaia, starry Uranus, night itself. They are not worshipped so much as endured — the stage on which all myth unfolds."*
- Titans: *"The twelve children of Earth and Sky ruled a golden age from Mount Othrys — until their own son Cronus was overthrown in turn. Their children, Atlas and Prometheus among them, still bear the weight of that fall."*
- Olympians: *"Victors of the Titanomachy, the twelve dwellers of Olympus rule sky, sea, harvest, war, love, and craft. Their quarrels and loves drive nearly every story in this atlas."*

**Animation:** Copy cross-fades + 20px rise on tab change (0.4s).

## Section 4 — God Card Grid

**Layout:** 12-col grid → 4/3/2/1 columns. Ordered by data order (primordials array, etc.).

**Card anatomy (GodCard):**
- Olympians: square engraved portrait (`portrait-*.png`) at top with parchment backdrop, 1:1 crop, subtle inner gold frame.
- Primordials/Titans/Titan-born/Other: Medallion (initial letter, laurel, double gold ring) centered on a marble radial field, 120px.
- Name (Cinzel 600, 1.3rem) + epithet (Cormorant italic, gold, e.g. *"the Cloud-Gatherer"*).
- Domain chips (up to 3, from `domain`): hairline olive pills.
- Symbols line: Inter 0.75rem, ink-soft — e.g. `⚡ Thunderbolt · Eagle · Oak` (plain text symbols, no emoji — use `·` separators).
- "Read the myth →" text link, aegean.
- Titan-born and Other-deity subgroups render **after** the main 12 under a small sub-header: `Second Generation — the Titan-born` / `Also among the Olympian circle` (Inter eyebrow + hairline rule), same card style, slightly smaller (span same grid but 90% scale? no — same size, separated by the sub-header).

**Animation:** Grid stagger-in per tab render: rise 40px + fade, stagger 0.06s, 0.7s. Hover per global card spec; portrait cards add a faint gold radial glow behind the portrait (opacity 0→0.35).

**Interactions:** Card click → `/pantheon/:id`. Chip hover shows no action (decorative). Tab switch re-renders grid with `AnimatePresence` exit (fade 0.2s) + enter stagger.

## Section 5 — Footer CTA strip

**Layout:** Centered band: *"Some of these names appear on the map —"* + CTA `See them in the Atlas →` → `/maps`. Meander divider above.

**Animation:** Rise on scroll into view.

---

# B. God Detail — `/pantheon/:id`

Template driven entirely by the `God` record. Module accent derives from `generation`.

## Section 1 — Detail Hero

**Layout:** Not full-bleed art. Instead an "exhibition plate": ivory page; centered composition in 2 columns ≥900px (portrait/medallion left 320px, text right), single centered column mobile.
- Breadcrumb `Home / Pantheon / Zeus` (Inter 0.75rem, ink-soft, links gold on hover).
- Eyebrow: generation label + accent color (`OLYMPIAN · KING OF THE GODS` — actually eyebrow = generation, and `title` from data as the sub-line).
- H1: name, Cinzel 700, clamp(2.75rem, 6vw, 5rem). Epithet below in Cormorant italic gold 1.5rem.
- `romanName` line if present: `Known to Rome as Jupiter` (Inter 0.8rem, ink-soft).
- Portrait (olympians: engraved bust in gold double-rule frame) or Medallion 200px.
- Fact rail (below hero, 4-up stat row, hairline divided): **Domain** (chips) · **Symbols** (text) · **Parents** · **Consort / Children** (if present). Each: Inter 0.65rem label + Cormorant 1.05rem value.

**Animation:** Page load — portrait scales 0.94→1 + fade (0.6s), name chars split-rise, fact rail cells stagger 0.08s rise. Gold rule under eyebrow scaleX 0→1.

**Assets:** `portrait-<id>.png` where available, else Medallion; `divider-laurel.svg`.

## Section 2 — Summary (editorial)

**Layout:** Centered 68ch column. Drop cap (first letter, Cinzel 700, gold, 4.2rem, floated). `summary` rendered as flowing Cormorant 1.2rem/1.75 paragraphs.

**Animation:** Paragraphs fade+rise 24px as they enter (trigger 85%).

## Section 3 — Key Myths

**Layout:** Marble-tinted band. SectionHeader small: eyebrow `IN THE MYTHS`, H3 `Key Myths of <name>`. `keyMyths` bullets as an elegant numbered list — gold Cinzel numerals (01, 02…), Cormorant text, 1.15rem; 2-column layout ≥900px if >3 items, else single 68ch column.

**Animation:** Items stagger 0.1s, slide-in from left 30px + fade.

## Section 4 — Related Figures & Stories

**Layout:** SectionHeader `Woven Together` / H3 `Related Figures & Stories`. Horizontal wrap row of RelatedLinks cards (resolved from `relatedIds`): medallion/initial + name + type tag (GOD · HERO · STORY). Cards 200px, compact.

**Animation:** Stagger rise 0.06s. Hover: lift + gold border.

**Interactions:** Click → the related detail page (`/pantheon/:id`, `/heroes/:id`, or `/stories/:id`).

## Section 5 — On the Map

**Layout:** If `locationIds` non-empty: strip with small framed crop of `map-greece.png` + chips for each location (`Mount Olympus`, `Delphi`…) styled as map-marker pills (dot + name). Copy: *"Places bound to <name>."*

**Interactions:** Chip click → `/maps?map=greece&loc=<id>` (Maps page preselects and opens the panel).

**Animation:** Chips stagger; map crop pans slowly (background-position drift 30s).

## Section 6 — Prev / Next Navigation

**Layout:** Bottom band, two cards: `← Previous: <name>` / `Next: <name> →` cycling within the same generation array, Cinzel labels + Inter eyebrow.

**Animation:** Fade in; hover shifts the arrow 4px outward.

Then global Footer.
