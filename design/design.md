# MYTHOS — An Atlas of Greek Mythology
## Global Design Document

An all-English, content-rich knowledge atlas of Greek mythology. Editorial museum-companion aesthetic: warm ivory parchment, marble, antique gold, terracotta, and Aegean teal; inscriptional Roman capitals paired with a literary serif; laurel and Greek-key (meander) ornaments; illustrated antique cartography with clickable markers.

---

## 1. Design Concept

**"A museum atlas you can wander."** The site feels like a beautifully bound classical encyclopedia brought to life: ivory paper textures, gold-ruled section dividers, engraved-style artwork, and maps that look lifted from a 19th-century mythological atlas — but with modern motion: buttery smooth scrolling, scroll-driven reveals, kinetic display typography, and glowing interactive map markers.

- Mood words: timeless, erudite, warm, epic, curated.
- Not dark-fantasy, not cartoonish. Think *museum exhibition catalogue meets antique atlas*.

---

## 2. Color Palette

### Core
| Token | Hex | Usage |
|---|---|---|
| `ivory` | `#F6F0E2` | Primary page background |
| `parchment` | `#EFE5CE` | Card / panel backgrounds |
| `marble` | `#E4DAC4` | Subtle section alternation, borders on light |
| `ink` | `#251E15` | Primary text |
| `ink-soft` | `#5C4D3B` | Secondary text, captions |
| `gold` | `#A87C2A` | Primary accent — rules, icons, links hover, active states |
| `gold-bright` | `#C9A227` | Highlights, marker glow, hover sparkle |
| `terracotta` | `#A44A2A` | Hero accent, CTA hover |
| `olive` | `#68703C` | Tertiary accent, tags |
| `aegean` | `#25505E` | Maps, sea, story accent, links |
| `night` | `#1C1A2B` | Dark sections (footer, tragedies, primordial header) |
| `parchment-on-night` | `#E9DFC6` | Text on dark backgrounds |

### Module accent colors (used for eyebrows, card top-rules, badges, map legend)
| Module | Accent |
|---|---|
| Primordial Gods | `primordial` `#3D3A5C` (night violet) |
| Titans | `bronze` `#8C5A2B` |
| Olympians | `gold` `#A87C2A` |
| Heroes | `terracotta` `#A44A2A` |
| Stories / Epics | `aegean` `#25505E` |
| Tragic Families | `blood` `#6E2B2B` |

### Functional
- Card border: `rgba(37,30,21,0.14)` hairlines; gold border on hover.
- Shadows: warm, soft — `0 8px 30px rgba(37,30,21,0.10)` resting, `0 18px 50px rgba(37,30,21,0.16)` raised.
- Focus rings: `2px solid #C9A227` offset 2px.

---

## 3. Typography

Google Fonts: **Cinzel** (400/600/700), **Cormorant Garamond** (400/500/600 + italics), **Inter** (400/500/600), **Noto Serif SC** (500 — Chinese glossary column only).

| Role | Font | Size / Weight / Tracking |
|---|---|---|
| Display H1 (hero) | Cinzel 700 | `clamp(3rem, 7.5vw, 6.5rem)`, uppercase, letter-spacing `0.06em`, line-height 1.05 |
| Page H1 | Cinzel 700 | `clamp(2.5rem, 5vw, 4.25rem)`, uppercase, ls `0.05em` |
| Section H2 | Cinzel 600 | `clamp(1.75rem, 3vw, 2.5rem)`, ls `0.03em` |
| Card title / H3 | Cinzel 600 | `1.25–1.5rem`, ls `0.02em` |
| Eyebrow / overline | Inter 600 | `0.72rem`, uppercase, ls `0.28em`, module accent color |
| Body (long-form) | Cormorant Garamond 500 | `1.2rem` (19–20px), line-height 1.75, `ink` |
| Body italic lede | Cormorant Garamond 500 italic | `1.45rem`, line-height 1.6, `ink-soft` |
| UI labels, buttons, nav | Inter 500/600 | `0.85rem`, uppercase ls `0.14em` for buttons; sentence case for nav |
| Meta / captions | Inter 400 | `0.8rem`, `ink-soft` |
| Chinese text | Noto Serif SC 500 | matches row size |
| Drop cap (story pages) | Cinzel 700 | 4.5rem initial letter, gold |

Numerals in stats/dates: Cinzel 600 (e.g., "XII Olympians", "8th century BCE").

---

## 4. Spacing, Layout, Grid

- Base unit 4px. Section vertical padding: `120px` desktop / `72px` tablet / `56px` mobile.
- Content container: `max-width 1200px`, `padding-inline: clamp(20px, 5vw, 48px)`.
- Wide layouts (maps, full-bleed art): `max-width 1440px`.
- Card grids: 12-col grid → 4 cols ≥1200px, 3 cols ≥900px, 2 cols ≥600px, 1 col mobile. Card gap `28px`.
- Editorial text column: `max-width 68ch` centered for story bodies.
- Hairline rules: `1px` in `marble` or `gold` at 40% opacity, often flanking an ornament (◆ or laurel SVG).

---

## 5. Motion & Interaction Language

**Libraries:** Lenis (smooth scroll, site-wide), GSAP + ScrollTrigger (scroll reveals, pinned sequences on Home), Framer Motion (route transitions, micro-interactions), no Three.js required (reserve performance budget for maps + scroll scenes).

**Global:**
- Route transitions: outgoing `opacity 1→0, y 0→-8px, 0.2s`; incoming `opacity 0→1, y 16→0px, 0.45s easeOut`, slight stagger on children.
- Scroll reveal default ("rise"): `opacity 0→1, y 40→0px, 0.8s cubic-bezier(0.22,1,0.36,1)`, trigger at 85% viewport, once.
- Section headers: eyebrow wipes in (clip-path inset left→right, 0.6s), title rises, gold rule scales `scaleX 0→1` from center (0.7s).
- Card hover: `translateY(-6px)`, shadow deepens, hairline border → gold, inner image `scale 1.0→1.05` (0.6s ease). Transition `0.35s`.
- Buttons: gold fill sweeps left→right on hover (background-size trick, 0.35s); press `scale 0.97`.
- Links in body text: `aegean`, underline animates in from left on hover.
- Respect `prefers-reduced-motion`: disable Lenis/GSAP pins, use simple opacity fades.

**Performance:** ≤8 simultaneously animating elements per viewport; images lazy-loaded below fold; map markers use CSS transforms only.

**Cursor:** default; map markers show `pointer` + custom gold ring tooltip follows cursor on maps.

---

## 6. Shared Components

### Navbar (all pages)
- Sticky top, height 72px. Background `ivory/85%` + `backdrop-blur(12px)`, hairline gold bottom border that fades in after 24px scroll.
- Left: laurel-wreath SVG mark + wordmark "MYTHOS" (Cinzel 700, ls 0.18em) with small sub "ATLAS OF GREEK MYTHOLOGY" (Inter 0.6rem, ls 0.3em, gold) — hides sub on mobile.
- Links (Inter 500, 0.85rem): Pantheon · Heroes · Stories · Tragedies · Maps · Glossary. Active link: gold with a small diamond `◆` above, animated via layoutId underline.
- Mobile: hamburger → full-screen ivory overlay drawer; links stagger in (0.06s each, slide-right 24px + fade); meander SVG divider between links.
- Animation: on load, navbar slides down from -72px, 0.6s, 0.2s delay. Hide on scroll-down, reveal on scroll-up (0.3s translate).

### Footer (all pages)
- Dark `night` background, parchment text. Top: meander SVG divider in gold.
- Col 1: logo + one-line mission "An open atlas of the Greek mythic world." Col 2: Explore links (all routes). Col 3: "The Epics" (Trojan War / Iliad / Odyssey). Col 4: Glossary + Maps.
- Bottom row: "Built for the love of myth — ΜΥΘΟΣ" + copyright line. A rotating quote? No — static single line from Homer: *"Sing, O goddess, the anger of Achilles…"* in Cormorant italic, gold.
- Animation: content rises 30px + fades on enter viewport.

### SectionHeader
Eyebrow (module accent) → Cinzel H2 → gold rule with center diamond ornament → optional lede paragraph (Cormorant italic, max 60ch, centered or left).

### PageHero (all index/detail pages)
Full-width banner, 40–52vh, module artwork with dark gradient scrim (`linear-gradient(180deg, rgba(28,26,43,.35), rgba(28,26,43,.75))`), breadcrumb (Home / Module), Cinzel H1 in parchment, eyebrow, and a one-line lede. Parallax: background `yPercent -12` on scroll (GSAP).

### GodCard / HeroCard
Parchment card, hairline border, 4px gold top-rule in module accent. Contents: medallion or portrait, name (Cinzel), epithet (Cormorant italic, gold), domain/symbol tag chips (Inter 0.7rem, olive/aegean outlines), 2-line summary clamp, "Read the myth →" link. Hover per §5.

### Medallion (avatar fallback for all figures without portraits)
64–96px circle: thin double gold ring, Cinzel initial letter centered, tiny laurel sprigs at bottom arc. Background: radial parchment → marble. Used for primordials, titans, heroes, and deities lacking a portrait asset.

### MeanderDivider
Horizontal Greek-key SVG band, 24px tall, gold at 50% opacity; used between major page sections. Animates `background-position` drift 60s linear infinite (subtle).

### Chip / Tag
Pill, Inter 0.7rem ls 0.08em, hairline border in accent color, transparent bg; hover fills accent at 10%.

### RelatedLinks (detail pages)
Row of small cards: "Related figures & stories" — medallion/initial + name + type label; hover lift.

### BackToTop
Fixed bottom-right circular gold-outline button, appears after 600px, smooth-scrolls to top.

---

## 7. Page List

| Route | File | Description |
|---|---|---|
| `/` | `home.md` | Cinematic landing: hero, scroll-driven "creation to Olympus" prologue, module gateway cards, featured figures, map teaser, glossary teaser |
| `/pantheon` | `pantheon.md` | Index of all gods with generation tabs (Primordials / The Twelve Titans & Titan-born / The Twelve Olympians & other deities); card grid |
| `/pantheon/:id` | `pantheon.md` | God detail template: hero banner, domain/symbol facts, summary, key myths, related figures, map locations |
| `/heroes` | `heroes.md` | Heroes index: featured Heracles spotlight + card grid of 10 heroes |
| `/heroes/:id` | `heroes.md` | Hero detail template |
| `/stories` | `stories.md` | Epics & war index: Trojan War, Iliad, Odyssey feature cards + reading-path strip |
| `/stories/:id` | `stories.md` | Story detail template (long-form editorial w/ drop cap, section nav, key figures, map links) — also renders the three tragic-family stories |
| `/tragedies` | `tragedies.md` | The Great Tragic Families: dark dramatic page with the three houses (Atreus, Thebes, Cadmus), curse timelines, links to full stories |
| `/maps` | `maps.md` | Interactive atlas: 3 switchable illustrated maps (Aegean World / Trojan War / Odysseus's Voyage), clickable markers, side panel with location details + story links |
| `/glossary` | `glossary.md` | Chinese–English glossary: searchable, filterable table of gods, heroes, places, stories |

---

## 8. Data Integration Notes

- All content renders from typed data files in `src/data/` (`primordials`, `titans`, `titanBorn`, `olympians`, `otherDeities`, `heroes`, `stories`, `locations`, `glossary`) per the agreed schema (ids, `relatedIds`, `locationIds`, `coords`).
- Detail pages resolve `relatedIds` → cards, `locationIds` → "Seen on the map" chips linking to `/maps?map=greece&loc=<id>` (Maps page reads query params to preselect map + open the location panel).
- Stories: `category: 'war' | 'epic'` render under `/stories`; `category: 'tragedy'` are featured on `/tragedies` and their detail pages live at `/stories/:id` with the tragedy accent theme.
- Maps: markers positioned absolutely by percentage `coords` over the map background image; each map only renders locations whose `maps` array includes it.

---

## 9. Assets Manifest

All raster art shares one style directive: **"Classical Greek mythology illustration in the style of a 19th-century engraved mythological atlas — fine etched line work, warm sepia and parchment tones with antique-gold and terracotta accents, subtle paper grain, dignified and museum-like, no text, no watermark."** Map assets use the map-specific directive below.

| Filename | Description | Location | Dimensions | Type |
|---|---|---|---|---|
| `hero-home.png` | Sweeping view of Mount Olympus rising above golden clouds at dawn, marble temple silhouettes on the peak, an eagle circling, warm gold/ivory palette with deep Aegean-teal shadows at the edges; engraved-atlas style. Cinematic and serene. | Home hero background | 2400×1350 (16:9) | Image |
| `art-primordial.png` | The birth of the cosmos from Chaos: a swirling void of deep indigo and night-violet mist pierced by gold starlight, Gaia's earth forming below, Uranus's starry dome above; dark, mysterious, cosmic. | Pantheon page — Primordials tab header; home prologue | 1600×900 (16:9) | Image |
| `art-titans.png` | Colossal bronze-skinned Titan figures striding among storm-wrapped mountain peaks, Cronus holding a sickle silhouetted against lightning; monumental scale, bronze/ochre palette. | Pantheon — Titans tab header | 1600×900 (16:9) | Image |
| `art-olympians.png` | Sunlit marble hall of the gods above the clouds: twelve thrones in a colonnade, golden light, laurel garlands, eagles and doves; radiant ivory/gold palette. | Pantheon — Olympians tab header | 1600×900 (16:9) | Image |
| `art-heroes.png` | Red-figure pottery style frieze of Greek heroes: Heracles wrestling the Nemean lion, Perseus with Medusa's head, Theseus in the labyrinth — terracotta figures on black-glaze ground with gold details, but rendered as a wide painted frieze panel. | Heroes page header; home module card | 1920×900 (wide) | Image |
| `art-trojan-war.png` | The siege of Troy at dusk: a thousand black ships on a wine-dark sea, the walled citadel on its hill, funeral pyres and bronze-armored warriors, smoke and ember-orange sky. | Stories page card + Trojan War detail hero | 1920×1000 | Image |
| `art-iliad.png` | Achilles and Hector dueling before the Scaean Gates, Achilles' great shield catching the light, gods watching from clouds above; dramatic chiaroscuro. | Stories card + Iliad detail hero | 1920×1000 | Image |
| `art-odyssey.png` | A lone black-prowed ship on a vast wine-dark sea between monstrous rocks (Scylla) and a whirlpool (Charybdis), distant sirens' island under a moonlit sky; teal/silver/gold. | Stories card + Odyssey detail hero; home module card | 1920×1000 | Image |
| `art-atreus.png` | The dark palace of Mycenae: a blood-red sunset behind Lion Gate walls, a dagger on a banquet table, crows; maroon/charcoal palette, oppressive mood. | Tragedies page — House of Atreus | 1600×900 | Image |
| `art-thebes.png` | The Sphinx crouched on a rock above the seven gates of Thebes, a weary traveler below, plague-mist in the streets; ochre and ash palette. | Tragedies — House of Thebes | 1600×900 | Image |
| `art-cadmus.png` | Cadmus sowing the dragon's teeth: armored warriors sprouting from furrowed earth, Europa riding the white bull across the sea in the distance; dusty gold palette. | Tragedies — House of Cadmus | 1600×900 | Image |
| `map-greece.png` | **Map directive:** antique hand-drawn parchment map of Greece and the Aegean, top-down cartographic view, sepia ink coastlines on aged parchment, stippled seas labeled with tiny wave marks, a compass rose in one corner, a small decorative sea-serpent in open water, no text labels. Geography layout: mainland Greece upper-left/center, Aegean Sea center-right dotted with small islands, Anatolian coast along the far right edge, Crete as a long island bottom-center; ample clean parchment areas for markers. | Maps page — "The Aegean World"; home map teaser | 2000×1400 (10:7) | Image |
| `map-trojan.png` | Same antique style, zoomed to the northeast Aegean and the Troad: Troy's citadel marked as a small walled-city engraving in the upper-right area, island of Lesbos below it, Lemnos to the west, the Greek mainland coast along left and bottom edges, the Hellespont strait visible; compass rose, no text. | Maps page — "The Trojan War" | 2000×1400 (10:7) | Image |
| `map-odyssey.png` | Same antique style, the wandering Mediterranean: Troy at the far right edge, Ithaca as a small island center-left, open sea filling most of the frame with faint dotted-voyage-line engravings, scattered small islands, a merman and ship ornament in corners, compass rose, no text. | Maps page — "Odysseus's Voyage" | 2000×1400 (10:7) | Image |
| `portrait-zeus.png` … `portrait-apollo.png`, `portrait-artemis.png`, `portrait-ares.png`, `portrait-aphrodite.png`, `portrait-hephaestus.png`, `portrait-hermes.png`, `portrait-dionysus.png`, `portrait-hera.png`, `portrait-poseidon.png`, `portrait-demeter.png`, `portrait-athena.png` | 12 Olympian portraits, one per god, uniform style: marble-bust portrait rendered as sepia engraved line art on parchment, head-and-shoulders, each with one identifying attribute (Zeus: thunderbolt; Hera: peacock; Poseidon: trident; Demeter: wheat; Athena: owl+helmet; Apollo: lyre+laurel; Artemis: bow+crescent; Ares: spear+helm; Aphrodite: dove+shell; Hephaestus: hammer+anvil; Hermes: winged helm+caduceus; Dionysus: thyrsus+grapes). Square, consistent crop and tone. | Olympian cards + god detail heroes | 800×800 (1:1) each | Image ×12 |
| `texture-parchment.png` | Seamless tileable subtle parchment paper grain, very light ivory, low contrast. | Site-wide background overlay (fixed, 4–6% opacity) | 1024×1024 | Image |
| `laurel.svg` | Symmetrical laurel wreath, thin gold line-art, open at top. | Logo mark, medallions, headings ornament | vector | SVG |
| `meander.svg` | Repeating Greek-key (meander) band tile, gold line-art on transparent. | Footer divider, section dividers, card borders | vector (tileable) | SVG |
| `divider-laurel.svg` | Horizontal ornament: gold rule with central laurel sprig and two diamonds. | SectionHeader rule, story section breaks | vector | SVG |
| `favicon.svg` | Gold laurel wreath around a Cinzel "M" on night background. | Browser tab | vector | SVG |

**Optional stretch assets (only if generation budget allows):** `portrait-heracles.png`, `portrait-odysseus.png`, `portrait-achilles.png`, `portrait-perseus.png` (same engraved-bust style, hero attributes: lion-skin, ship's prow helm, crested helmet, mirrored shield) for the featured hero spotlight cards.

---

## 10. Accessibility & Responsiveness

- All map markers are real `<button>`s with `aria-label="View <location>"`; marker focus shows the same tooltip as hover.
- Keyboard: tab order follows visual order; map side panel closable via Esc; glossary search is a labelled input.
- Contrast: body text on ivory ≥ 7:1; gold used for large display text or with ink backing on small text.
- Breakpoints: 1280 / 1024 / 768 / 480. Pantheon grid 4→3→2→1; maps keep 10:7 aspect, panel becomes bottom sheet <900px; nav collapses <860px.
