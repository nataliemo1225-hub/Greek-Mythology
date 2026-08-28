# Tragedies Page — `/tragedies`
## Design Document

The Great Tragic Families: the cursed houses of Atreus, Thebes, and Cadmus. This page deliberately breaks the site's light ivory mood — it is the one **dark page**, evoking the theater at dusk: `night` background, parchment text, blood-maroon accents. Content renders from `stories` records (`house-of-atreus`, `house-of-thebes`, `house-of-cadmus`); each house section links to its full detail at `/stories/:id`.

Module accent: `blood` `#6E2B2B`; on dark, use `#B4553F`-brightened hover states.

---

## Section 1 — PageHero (dark)

**Layout:** 52vh banner over `art-atreus.png` heavily darkened (scrim 65→90%). Breadcrumb `Home / Tragedies` in parchment 70%. Eyebrow `CURSED BLOODLINES` (blood accent, lightened to `#C67B5F` for contrast on dark). H1 `The Great Tragic Families` (Cinzel 700, parchment). Lede (Cormorant italic, parchment 85%): *"Three royal houses, three hereditary curses — where the sins of the fathers are visited upon the children, and the gods watch in silence."*

**Animation:** Title chars split-rise with a slower, heavier ease (1.2s, power4.out); a faint smoke/mist overlay drifts across the hero (CSS radial-gradient layer translating 40s loop, opacity 0.15); lede fades +0.5s.

**Assets:** `art-atreus.png`.

---

## Section 2 — Prologue Strip

**Layout:** Centered 60ch on `night`. A short fixed-copy framing passage (Cormorant 1.25rem, parchment 90%): *"Greek tragedy begins where heroism ends. The poets of Athens returned again and again to a handful of doomed dynasties — houses marked by an ancestral crime, generation after generation paying the debt."* Below: three small roman numerals I·II·III acting as anchor jump-links to the houses.

**Animation:** Fade+rise 24px. Numeral links hover: blood underline draws.

---

## Section 3 — House Sections (×3, alternating)

Each house = one full-width act. Alternating image side. Layout per house (≥960px: 50/50; mobile: stacked):

**Visual panel:** house artwork (`art-atreus.png` / `art-thebes.png` / `art-cadmus.png`) in a parchment-on-night gold hairline frame, with a subtle inner vignette; the house numeral (I/II/III) in Cinzel 6rem at 10% opacity overlaid at a corner.

**Text panel:**
- Eyebrow: `THE HOUSE OF ATREUS` etc., blood accent.
- H2: house name (Cinzel 600, parchment).
- "Curse line" — a one-line poetic summary (Cormorant italic, gold): e.g. Atreus: *"A feast of children, a stolen kingship, a house that murders its own."*
- 3–4 sentence overview: first paragraphs of the story's `intro` (clamped to ~340 chars).
- **Doomed generations** mini-timeline (vertical, 3–5 nodes): key figures of the house as connected nodes — e.g. Atreus → Agamemnon → Orestes/Electra; Thebes: Laius → Oedipus → Antigone/Polynices/Eteocles; Cadmus: Cadmus → Pentheus → Oedipus line. Node = small gold dot + name (Cinzel 0.95rem) + one-clause fate (Inter 0.75rem, parchment 70%). Connecting vertical hairline in blood accent.
- CTA: `Read the full tragedy →` → `/stories/<id>` (blood outline button; hover fills blood, parchment text).

**Animation (GSAP ScrollTrigger per house):**
- Visual panel: clip-path inset wipe from the outer edge (1s, trigger 75%), image inside scales 1.12→1 during the wipe (parallax settle).
- Text: stagger rise 30px (0.09s), curse line draws an underline (scaleX).
- Timeline: vertical line draws top→bottom (scaleY scrub over 40% viewport), nodes pop (scale 0.6→1 + fade) sequentially as the line reaches them.

**Interactions:** Timeline node names that match data ids (e.g. `orestes` — if not in data, plain text; nodes for figures present in data like `agamemnon`-related heroes only where ids exist) link to their detail pages; otherwise static. CTA → story detail.

**Assets:** the three house artworks.

---

## Section 4 — Closing: "The Theater of Athens"

**Layout:** Centered narrow band, still dark. Fixed copy (Cormorant italic 1.35rem, parchment 85%, max 34ch): *"From these houses Aeschylus, Sophocles, and Euripides built the tragedies of Athens — and Western drama was born."* Small laurel ornament above. Two CTAs side by side: `Return to the light — The Olympians →` (gold outline) and `Find these houses in the Glossary →` (parchment ghost link).

**Animation:** Quote word-fade sequence; CTAs rise +0.3s.

---

## Section 5 — Footer

Global Footer (already dark — it blends seamlessly; the meander divider in gold separates page from footer).

---

## Dark-page adjustments (override globals here only)
- Card/panel bg: `#242136`; hairlines `rgba(233,223,198,0.16)`.
- Body text `parchment-on-night`; secondary `rgba(233,223,198,0.65)`.
- Gold elements unchanged; blood accents brightened ~20% for contrast (`#B4553F` hover).
- Navbar remains ivory (it is sticky chrome above the dark canvas) — acceptable contrast moment; alternatively render navbar transparent-over-hero → solid ivory after scroll, same as other pages.
