# Glossary Page — `/glossary`
## Design Document

The 中英对照表: a searchable, filterable Chinese–English reference of key names — gods, heroes, places, stories, creatures, concepts. Clean reference-page design: the most utilitarian page, but still dressed in the atlas aesthetic. Renders from the `glossary` data array.

Module accent: `gold` (reference/brass-plate feel).

---

## Section 1 — PageHero (compact)

**Layout:** 32vh, `texture-parchment.png`-heavy ivory treatment rather than artwork (or a subtle desaturated crop of `map-greece.png` at 25% opacity under scrim). Breadcrumb `Home / Glossary`. Eyebrow `REFERENCE · 参考`. H1 `The Glossary` with a Chinese subtitle beside it: `中英对照表` (Noto Serif SC 500, 0.5× the H1 size, gold). Lede: *"Key names of gods, heroes, and places — English and Chinese side by side."*

**Animation:** H1 char-split rise; Chinese subtitle fades in +0.5s with slight blur-out (4px→0); lede +0.6s.

---

## Section 2 — Controls Bar (sticky)

**Layout:** Sticky under navbar (top 72px), ivory/blur, hairline border, container 1200px. Contents (row, wraps mobile):
- **Search input** (flex-grow, max 420px): parchment field, gold focus ring, leading magnifier SVG. Placeholder: `Search English or 中文…`. Inter 0.95rem. Live-filters as user types (debounce 150ms); matches `english`, `chinese`, and `note`.
- **Category filter chips** (wrap row): `All` + one per category present in data: `Primordials` · `Titans` · `Olympians` · `Heroes` · `Places` · `Stories` · `Creatures` · `Concepts`. Pill style; active = gold fill, ink text; inactive = hairline gold outline, ink-soft text. Each shows a count.
- **Result count** right-aligned: `Showing 47 of 120 entries` (Inter 0.75rem, ink-soft).

**Animation:** Chips stagger in 0.04s on mount. On filter change, count number cross-fades.

---

## Section 3 — The Glossary Table

**Layout:** A proper reference table styled as an atlas ledger, container 1200px:

- **Header row** (sticky within table scroll region on long lists): `ENGLISH` | `中文` | `CATEGORY` | `NOTE` — Inter 600 0.7rem ls 0.14em, ink-soft, hairline gold bottom border (2px).
- **Rows:** alternating parchment/ivory striping; row padding 14px 16px.
  - English: Cinzel 600 1.05rem, ink — becomes a **link** (aegean underline on hover) when the entry has `refId`, routing to the matching detail page (`/pantheon/:id`, `/heroes/:id`, `/stories/:id`, or `/maps?...&loc=` for places).
  - Chinese: Noto Serif SC 500 1.15rem, ink — slightly larger than English for legibility parity.
  - Category: small chip tinted by module accent mapping (primordial→violet, titan→bronze, olympian→gold, hero→terracotta, place→aegean, story→aegean, creature→olive, concept→ink-soft).
  - Note: Inter 0.8rem, ink-soft (e.g. "Roman name: Jupiter").
- Row hover: row background shifts to `marble` 60%, English name turns gold if linked.
- **Mobile (<700px):** table becomes stacked cards — each entry a parchment card: English + 中文 on one line (name prominence), category chip + note below.

**Animation:**
- Initial render: rows stagger fade+rise 12px in batches of ~12 (fast, 0.025s stagger — reference page, keep snappy).
- On search/filter: `AnimatePresence` — list cross-fades 0.2s, layout-animates row reordering (Framer Motion `layout`).
- Empty state: centered ornament + *"No entries found — try another name."* with a `Clear search` text button.

**Interactions:** as above. Linked names are the primary delight — the glossary is a hub into the whole atlas.

---

## Section 4 — Category Index Cards

**Layout:** Below the table, SectionHeader: eyebrow `BROWSE BY KIND`, H3 `The Families of Names`. Row of 8 small cards (one per category): category icon glyph (SVG), name, entry count, and 3 sample entries (e.g. Olympians: `Zeus 宙斯 · Athena 雅典娜 · Apollo 阿波罗`). Click sets the category filter and smooth-scrolls back to the table.

**Animation:** Cards stagger rise 0.06s on scroll into view; hover lift -4px + gold border.

---

## Section 5 — Footer

Global Footer.

---

## Notes
- Default table order: curated — category groups in mythic order (primordial → titan → olympian → hero → place → story → creature → concept), alphabetical within group. (No user sorting controls needed at overview scale; search + filters suffice.)
- All copy bilingual-considerate: UI stays English per the all-English requirement; Chinese appears in the subtitle, the `中文` column header, and entry data only.
