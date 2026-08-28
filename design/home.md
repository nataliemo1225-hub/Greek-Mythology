# Home Page — `/`
## Design Document

The landing experience: a cinematic hero, a scroll-driven "from Chaos to Olympus" prologue, gateways to all seven modules, a featured-figures strip, and teasers for the maps and glossary.

---

## Section 1 — Hero

**Layout:** Full viewport height (100vh, min 640px). Background `hero-home.png` full-bleed with dark gradient scrim (`linear-gradient(180deg, rgba(28,26,43,0.25) 0%, rgba(28,26,43,0.55) 70%, rgba(28,26,43,0.85) 100%)`). Content centered, bottom-weighted (ends ~14vh above fold edge). Gold meander strip (24px) pinned to very bottom of hero as transition into next section.

**Elements:**
- Eyebrow: `AN ATLAS OF THE ANCIENT GREEK WORLD` — Inter 600, 0.75rem, ls 0.34em, gold-bright.
- Title: `MYTHOS` — Cinzel 700, clamp(3.5rem, 11vw, 9rem), parchment, ls 0.12em.
- Subtitle (Cormorant italic, 1.5rem, parchment-on-night 90%): *"From Chaos to Odysseus — the gods, heroes, and epics of Greek mythology, gathered in one atlas."*
- Two CTAs: primary `Enter the Pantheon` (gold fill, ink text) → `/pantheon`; secondary `Explore the Maps` (parchment outline, transparent) → `/maps`.
- Scroll cue: thin vertical gold line with a descending diamond, label `SCROLL` (Inter 0.65rem ls 0.3em).
- Decorative: two faint laurel SVGs flanking the title at 8% opacity, large (320px).

**Text content:** as above (fixed copy, not from data).

**Animation:**
- On load: scrim fades from 90%→final over 1.2s; eyebrow letter-spacing animates 0.5em→0.34em while fading in (0.9s); title characters split-animate (per-char y 60→0, rotate 4°→0, stagger 0.035s, 1s, ease power3.out); subtitle fades up 0.6s at +0.5s; CTAs fade up 0.5s at +0.8s; scroll cue line draws (scaleY 0→1) at +1.1s and loops a gentle pulse.
- On scroll (GSAP ScrollTrigger, scrub): background `yPercent 12` parallax; title block `y -80`, opacity fades to 0 by 60% of hero height.

**Interactions:** CTA hover — gold sweep fill + translateY(-2px). Scroll cue click → Lenis scroll to Section 2.

**Assets:** `hero-home.png`, `meander.svg`, `laurel.svg`.

---

## Section 2 — Prologue: "From Chaos to Olympus" (scroll-driven pinned sequence)

**Layout:** Pinned section, 300vh scroll length, viewport-height stage. Dark `night` background (the one dark moment on the home page). Three beats cross-fade as scroll progresses; a fixed progress rail on the left edge (3 nodes labeled I · II · III).

**Beats:**
1. **CHAOS** — eyebrow `THE BEGINNING`, line: *"In the beginning there was Chaos — the yawning void. Then Gaia, the Earth; Tartarus, the depths; Eros, desire; Nyx and Erebus, night and darkness."* Visual: `art-primordial.png` as a slowly scaling backdrop (scale 1→1.12).
2. **THE TITANS** — *"From Gaia and Uranus came the Titans — twelve colossal powers who ruled the golden age, until Cronus devoured his own children and the wheel of fate turned."* Visual: `art-titans.png`.
3. **THE OLYMPIANS** — *"Then Zeus and his siblings rose, cast the Titans into Tartarus, and took their thrones on Olympus — the Twelve whose stories fill this atlas."* Visual: `art-olympians.png`.

Each beat: large Cinzel numeral (I/II/III) 8rem at 12% opacity behind text; text max-width 640px, left-aligned at 12% container offset; small link `Meet them →` appearing at beat end, routing to `/pantheon?tab=primordial|titan|olympian`.

**Animation (GSAP ScrollTrigger, pin + scrub):**
- Beat 1: backdrop fades/scales in 0–20% progress; text words rise (SplitText word-level, stagger 0.02) 5–25%.
- Cross-fades at 33% and 66%: outgoing text y -40 + opacity 0, incoming y 40→0; backgrounds crossfade 0.8s equivalent scrub; progress rail node fills gold.
- Unpin at 100%, next section slides over with rounded top corners (borderRadius 24→0 scrub).

**Interactions:** The `Meet them →` links per beat. Reduced motion: section unpins, beats stack as static panels.

**Assets:** `art-primordial.png`, `art-titans.png`, `art-olympians.png`.

---

## Section 3 — Module Gateways ("The Atlas")

**Layout:** Ivory background, container 1200px. SectionHeader: eyebrow `THE ATLAS`, H2 `Seven Gates into the Myths`, lede *"Choose where to begin your wanderings."* Below: an asymmetric bento grid (12-col, gaps 28px):

- **Pantheon** (large card, span 7, tall): art `art-olympians.png` top; title `The Pantheon`; copy "Primordial powers, the twelve Titans, and the Olympian gods."; stat chips `9 Primordials · 19 Titans · 18 Deities`; link.
- **Heroes** (span 5, tall): `art-heroes.png`; "Mortal men and women who dared the impossible."; chip `10 Heroes`.
- **Stories** (span 5): `art-trojan-war.png`; "The Trojan War and Homer's two great epics."; chip `3 Epics`.
- **Tragic Families** (span 4): `art-atreus.png`, blood accent; "Three houses, three curses."
- **Maps** (span 3, compact): mini crop of `map-greece.png`; "Sail the mythic world."
- **Glossary** (span 12 wide, horizontal strip card): left text "中文–English Glossary · Key names of gods, heroes, and places side by side"; right: sample row teaser (`Zeus · 宙斯`, `Athena · 雅典娜`, `Ithaca · 伊萨卡`) in a 3-col mini-list; link `Open the glossary →`.

**Animation:** SectionHeader per global pattern. Cards stagger in on scroll: rise 50px + opacity, stagger 0.09s, trigger at 80% viewport. Card art scales 1→1.06 continuously at 20s ease-in-out alternate (very subtle "breathing"), pauses on hover.

**Interactions:** Whole card clickable (stretched link). Hover: lift -6px, art scale 1.08, gold border, title shifts gold. Glossary sample rows hover → row highlight parchment.

**Assets:** listed images + `divider-laurel.svg` under header.

---

## Section 4 — Featured Figures ("Faces of the Myths")

**Layout:** Marble-tinted band (`marble` 40% overlay). SectionHeader left-aligned: eyebrow `FIGURES`, H2 `Begin with the Great Names`. A horizontal snap-scroll carousel of 8 portrait cards: Zeus, Athena, Apollo, Achilles, Odysseus, Heracles, Aphrodite, Prometheus (first 4 with portraits if available, else medallions). Each card 260×360px: portrait/medallion, name (Cinzel), epithet (Cormorant italic gold), one-line hook, type tag (OLYMPIAN / HERO / TITAN).

**Animation:** Cards fade+rise on section entry (stagger 0.07s). Carousel: drag with Framer Motion (`drag="x"`, elastic 0.12); edge arrows appear ≥1024px.

**Interactions:** Card click → detail page. Hover: card raises, epithet brightens. Progress dots below carousel update on drag.

**Assets:** Olympian portraits (Zeus/Athena/Apollo/Aphrodite), `portrait-heracles/odysseus/achilles.png` (stretch), Medallion fallback.

---

## Section 5 — Map Teaser ("Chart the Mythic World")

**Layout:** Split 55/45. Left: framed crop of `map-greece.png` inside a gold double-rule "atlas plate" frame with 3 demo markers (Olympus, Troy, Ithaca) that gently pulse. Right: eyebrow `CARTOGRAPHY`, H2 `Three Maps, Every Myth`, copy: *"Every story happened somewhere. Trace Odysseus's ten-year voyage, survey the plains of Troy, and find Olympus above the clouds — click any marker to open its tale."* Bullets: `The Aegean World` · `The Trojan War Theater` · `Odysseus's Voyage`. CTA `Open the Atlas →`.

**Animation:** Map plate rises + slight rotate (2°→0) on entry. Demo markers pulse (ring scale 1→1.8, opacity 0.8→0, 2s loop, staggered 0.4s). Copy block rises with stagger.

**Interactions:** Clicking the teaser map or CTA → `/maps`. Hover on a demo marker shows its name tooltip.

**Assets:** `map-greece.png`.

---

## Section 6 — Closing Quote + Footer

**Layout:** Centered narrow band before footer. Large Cormorant italic quote (1.8rem, ink, max 26ch): *"Even the gods themselves are ruled by fate."* — attribution `— after Homer`. Gold laurel ornament above and below.

**Animation:** Quote words fade in sequence (word stagger 0.04s) on enter; laurels scale 0.9→1 + fade.

**Assets:** `divider-laurel.svg`. Then global Footer.
