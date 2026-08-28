# Stories Pages — `/stories` + `/stories/:id`
## Design Document

The war and the epics: an index presenting the Trojan War, the Iliad, and the Odyssey as three monumental volumes, plus a long-form editorial detail template. The same detail template also renders the three tragic-family stories (`category: 'tragedy'`, blood accent) linked from `/tragedies`.

Module accent: `aegean` `#25505E` (war/epics) · `blood` `#6E2B2B` (tragedy category).

---

# A. Stories Index — `/stories`

## Section 1 — PageHero

**Layout:** 44vh banner, `art-trojan-war.png` background, scrim. Breadcrumb `Home / Stories`. Eyebrow `WAR & EPIC`. H1 `The Great Stories`. Lede: *"One war, two poems, and the voyages that made the myths immortal."*

**Animation:** H1 char-split rise; lede fade +0.4s; parallax `yPercent -10`.

**Assets:** `art-trojan-war.png`.

## Section 2 — The Three Volumes (feature cards)

**Layout:** Three stacked full-width "volume" cards (not a grid — these are monumental). Each card: 2 columns alternating sides (image left/right), 60/40, parchment with aegean top-rule, generous 56px padding. Cards render from `stories` data (ids `trojan-war`, `iliad`, `odyssey`).

1. **The Trojan War** — `art-trojan-war.png`. Eyebrow `THE WAR`. Meta: `c. 12th/13th century BCE (mythic)`. Hook from `intro` (2-line clamp). Tag chips: `Achilles` `Hector` `The Wooden Horse`. CTA `Enter the war →`.
2. **The Iliad** — `art-iliad.png`. Eyebrow `THE EPIC OF RAGE`. Meta: `Homer · 8th century BCE`. Chips: `Wrath of Achilles` `Hector` `Patroclus`. CTA `Read about the poem →`.
3. **The Odyssey** — `art-odyssey.png`. Eyebrow `THE EPIC OF RETURN`. Meta: `Homer · 8th century BCE`. Chips: `Odysseus` `Ten Years` `Ithaca`. CTA `Sail with Odysseus →`.

Card copy details (author/date) from data `author`, `date`, `subtitle`.

**Animation:** Each card: image side clip-path wipes in (inset from the card's outer edge, 0.9s, trigger 80%), text side staggers rise 30px. Between cards, a `divider-laurel.svg` ornament fades in.

**Interactions:** Card hover: image scale 1.04, CTA gold sweep. Whole card clickable.

**Assets:** three story artworks.

## Section 3 — Reading Path Strip

**Layout:** Marble band; a horizontal 3-step path with connecting gold dashed line: `I · The Trojan War` → `II · The Iliad` → `III · The Odyssey`, each node a small card with one-line summary ("How the war began and ended" / "Ten days of rage in the tenth year" / "Ten years of wandering home"). Below, a note: *"The three houses of tragedy wait in the shadow of these tales — visit `The Tragic Families →`"* (blood accent link).

**Animation:** Nodes stagger pop (scale 0.9→1 + fade, 0.1s stagger); dashed line draws via stroke-dashoffset scrub across the section.

**Interactions:** Node click → detail page.

---

# B. Story Detail — `/stories/:id`

Long-form editorial template driven by the `Story` record. Accent = aegean (war/epic) or blood (tragedy).

## Section 1 — Detail Hero

**Layout:** 56vh full-bleed hero with the story's artwork (`art-<id>.png`; tragedies use `art-atreus/thebes/cadmus.png`), scrim to bottom. Bottom-left aligned content block (container):
- Breadcrumb `Home / Stories / <title>` (parchment 70%, gold hover).
- Eyebrow: category label — `THE WAR` / `THE EPIC OF RAGE` / `THE EPIC OF RETURN` / `TRAGIC HOUSE`.
- H1: story title, Cinzel 700 clamp(2.5rem, 6vw, 4.5rem), parchment.
- Subtitle (`subtitle`) in Cormorant italic 1.4rem, gold-bright.
- Meta row (Inter 0.8rem, parchment 80%): `author` · `date` (e.g. `Homer — 8th century BCE`), separated by diamonds.

**Animation:** Scrim deepens from 30%→final 1s; title char-split rise; meta fades +0.6s; background parallax `yPercent -12` scrub; scroll cue line draws at bottom-center.

**Assets:** story artwork, `divider-laurel.svg`.

## Section 2 — Intro Lede

**Layout:** Ivory, centered 60ch. `intro` paragraph set large: Cormorant 500 italic, 1.5rem/1.7, ink. Flanked top and bottom by small laurel ornaments.

**Animation:** Words fade sequentially (word stagger 0.015s) on enter.

## Section 3 — Body Sections (with reading progress + section nav)

**Layout:** 2-column ≥1024px: sticky left rail (240px) + main 68ch column. Left rail: vertical section nav listing each `sections[].heading` (Inter 0.75rem, ink-soft; active = aegean/blood with gold left bar); below it a thin reading-progress bar (height fills gold with scroll). Rail hidden <1024px (progress becomes a fixed top hairline under navbar).

Main column: for each section —
- H2 heading (Cinzel 600 1.9rem) with a small gold roman numeral.
- `body` paragraphs, Cormorant 1.2rem/1.8. First section gets a drop cap.
- Between sections: centered `⁂` ornament (gold).

**Animation:** Each section block fade+rise 30px at 85% trigger. ScrollTrigger updates active nav item + progress fill (scrub on whole article). Section headings: gold bar draws scaleX 0→1.

**Interactions:** Nav click → Lenis smooth-scroll to section.

## Section 4 — Key Figures

**Layout:** Marble band. SectionHeader: eyebrow `DRAMATIS PERSONAE`, H3 `Key Figures`. Grid of compact figure cards resolved from `keyFigures` (gods + heroes): medallion/portrait 72px + name + epithet + type tag. 5–6 per row ≥1200px.

**Animation:** Stagger rise 0.06s. Hover lift + gold border.

**Interactions:** Click → figure detail page.

## Section 5 — Places of the Story

**Layout:** Split 50/50: left — framed crop of the relevant map (`map-trojan.png` for trojan-war/iliad, `map-odyssey.png` for odyssey, `map-greece.png` for tragedies) with 2–3 pulsing demo markers at real `coords` of the story's `keyLocationIds`; right — list of location chips with one-line context from each location's `description` (clamped). CTA `Open these places on the atlas →` → `/maps?map=<m>`.

**Animation:** Map rises with slight rotate; markers pulse loop; chips stagger.

**Interactions:** Chip click → `/maps?map=<m>&loc=<id>`.

## Section 6 — Continue Reading

**Layout:** 2–3 RelatedLinks cards from `relatedIds` (other stories + houses), larger story-flavored cards with artwork thumbs where available. Eyebrow `FURTHER TALES`.

**Animation:** Stagger rise.

Then global Footer.
