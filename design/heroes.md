# Heroes Pages — `/heroes` + `/heroes/:id`
## Design Document

Mortal glory: an index celebrating the ten great heroes with a Heracles spotlight, plus a detail template mirroring the god detail but with a warmer terracotta accent.

Module accent: `terracotta` `#A44A2A`.

---

# A. Heroes Index — `/heroes`

## Section 1 — PageHero

**Layout:** 50vh banner, `art-heroes.png` background (red-figure frieze), dark scrim weighted to bottom. Breadcrumb `Home / Heroes`. Eyebrow `MORTAL GLORY`. H1 `The Heroes`. Lede: *"Half-divine, fully mortal — men and women who slew monsters, founded cities, and earned a place among the stars."*

**Animation:** H1 char-split rise (stagger 0.03s, 0.9s); lede fade-up +0.4s; frieze background slow horizontal pan (xPercent 0→-6, 24s, alternate) + parallax `yPercent -10` scrub.

**Assets:** `art-heroes.png`.

## Section 2 — Spotlight: Heracles

**Layout:** Full-width feature panel, parchment card with gold double-rule frame, 2 columns ≥960px (55% text / 45% visual). Visual: `portrait-heracles.png` (stretch asset) or a large terracotta Medallion `H` with lion-skin motif SVG overlay; behind it a radial gold glow.
- Eyebrow `THE GREATEST OF HEROES`. H2 `Heracles`. Epithet italic: *"the Lion-Slayer, Bearer of the Twelve Labors"*.
- 2–3 sentence hook from `summary` (clamped), stat chips: `Twelve Labors` · `Son of Zeus` · `Tiryns & Thebes`.
- CTA `Read his story →` → `/heroes/heracles`.

**Animation:** Panel draws its gold frame on entry (4 border lines scale-in sequentially, 0.5s each, stagger 0.15s); text staggers right-to-left in; visual fades with 20px rise.

**Interactions:** Panel hover: glow intensifies; CTA gold sweep.

## Section 3 — Hero Card Grid

**Layout:** SectionHeader: eyebrow `THE ROLL OF HEROES`, H2 `Nine More Names to Remember`. Grid 3 cols ≥1024px / 2 / 1, cards for the remaining 9 heroes (perseus, theseus, achilles, odysseus, jason, atalanta, bellerophon, orpheus, aeneas).

**HeroCard anatomy:**
- Top: Medallion (terracotta ring) or stretch portrait (`portrait-odysseus.png`, `portrait-achilles.png`, `portrait-perseus.png`) — 96px, left-aligned.
- Name (Cinzel 600 1.3rem) + epithet (Cormorant italic gold).
- `famousFor` as a terracotta chip row prefix `KNOWN FOR`.
- 2-line clamped summary.
- Origin line: Inter 0.75rem ink-soft, pin-dot icon `⌖` + origin text.
- `Read the myth →`.

**Animation:** Stagger rise 0.07s on scroll (batch trigger). Hover: lift -6px, terracotta top-rule brightens, medallion rotates 0→-4°.

**Interactions:** Card → `/heroes/:id`.

## Section 4 — Context Strip

**Layout:** Narrow centered band linking outward: *"Many heroes sailed to Troy — meet them where their stories live."* + two inline CTAs: `The Trojan War →` `/stories/trojan-war` and `Chart their journeys →` `/maps`. Meander dividers above/below.

**Animation:** Fade+rise on entry.

---

# B. Hero Detail — `/heroes/:id`

Same skeleton as God Detail, terracotta accent, content from the `Hero` record.

## Section 1 — Detail Hero
- Exhibition plate layout (visual left 320px, text right). Breadcrumb `Home / Heroes / <name>`.
- Eyebrow `HERO` + origin. H1 name. Epithet italic gold.
- Fact rail (4-up, hairline divided): **Origin** · **Parents** · **Famous for** (from `famousFor`) · **Related divine patrons** (first 2 god-related `relatedIds` if resolvable, else omit cell).

**Animation:** identical to god detail (frame draw, char-split, stagger).

## Section 2 — Summary
Editorial 68ch, drop cap, Cormorant body. Scroll fade-rise per paragraph.

## Section 3 — Key Myths
Numbered gold-numeral list (`keyMyths`), 2-col ≥900px when >3 items. Left slide-in stagger 0.1s.

## Section 4 — Related Figures & Stories
RelatedLinks row from `relatedIds` (gods, heroes, stories like `trojan-war`, `odyssey`). Stagger 0.06s.

## Section 5 — On the Map
Location chips from `locationIds` → `/maps?map=...&loc=...`; framed `map-greece.png` crop (or `map-odyssey.png` for odysseus, chosen by first location's `maps[0]`). Slow pan background.

## Section 6 — Prev / Next
Cycles within `heroes` array. Then Footer.
