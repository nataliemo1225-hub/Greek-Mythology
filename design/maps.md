# Maps Page — `/maps`
## Design Document

The interactive atlas — the site's signature interactive feature. Three illustrated antique maps (Aegean World, Trojan War Theater, Odysseus's Voyage) with clickable markers that open a location panel linking to stories and figures. Reads deep-link query params: `?map=greece|trojan|odyssey&loc=<locationId>`.

Module accent: `aegean` `#25505E`.

---

## Section 1 — PageHero (compact)

**Layout:** Shorter than other pages — 30vh, since the map needs the viewport. Background: a blurred, darkened crop of `map-greece.png`. Breadcrumb `Home / Maps`. Eyebrow `CARTOGRAPHY`. H1 `The Mythic Atlas`. Lede: *"Three maps, every myth. Choose a chart, then click any marker to open its tale."*

**Animation:** H1 char-split rise; lede fade +0.4s. Keep it fast — the map is the star.

---

## Section 2 — Map Switcher (control bar)

**Layout:** Sticky bar under navbar (top 72px), ivory/blur, hairline border. Three map tabs (segmented control, centered on desktop, full-width scroll row on mobile):

1. `THE AEGEAN WORLD` — subtitle "Greece & the mythic heartland" · badge with marker count
2. `THE TROJAN WAR` — subtitle "The Troad & the Achaean camps" · count
3. `ODYSSEUS'S VOYAGE` — subtitle "Ten years of wandering" · count

Right side of bar (desktop): a legend — `● City` `▲ Mountain` `◆ Island` `≈ Sea/Realm` (small Inter 0.7rem labels, ink-soft). Legend collapses into a "ⓘ Legend" popover on mobile.

**Animation:** Bar slides in with shadow on stick. Active tab indicator animates with Framer Motion `layoutId` (spring 0.35s). On switch: URL param updates (`?map=...`) without reload.

---

## Section 3 — The Map Stage

**Layout:** Full-width (max 1440px) region below the bar. The map itself is an "atlas plate": the map image inside a double gold-rule frame (outer 3px gold 60%, inner 1px ink 20%, 12px parchment mat), slight drop shadow, on the ivory page with parchment texture. Aspect ratio locked 10:7; the stage scales to viewport width (max height ~78vh, horizontally scrollable-pannable on mobile — or scale-to-fit with pinch allowed).

**Map background:** `map-greece.png` / `map-trojan.png` / `map-odyssey.png` per active tab. On tab switch, maps cross-fade (0.5s) with a subtle 8px scale settle (1.02→1).

**Markers (from `locations` data, filtered by `maps` containing the active map; positioned `left: coords.x%`, `top: coords.y%`):**
- Anatomy: a 12px dot in gold with `ink` 2px ring + a pulsing halo ring (CSS animation: box-shadow ring scale 1→2.2, opacity 0.6→0, 2.4s loop, staggered by index so they don't pulse in sync).
- Type shapes: cities = round dot; mountains = small triangle marker (▲ 14px); islands = diamond (rotated square); seas/realms = tilde-ish ring (hollow circle). All gold, ink outline.
- Label: name in Cinzel 600 0.72rem, ink, on a small parchment pill (80% opacity, hairline border) offset above-right of the dot; labels always visible on desktop for the ~13–17 markers per map (density is low enough); on mobile labels show only for the selected marker + on hover-capable devices.
- Real `<button>`s, `aria-label`s, focus ring gold.

**Marker interactions:**
- Hover: dot scales 1.4, halo brightens, label pill raises (y -3px) and goes opaque; cursor `pointer`.
- Click: marker becomes "selected" — dot fills `terracotta`, halo locks as a steady double ring; the Location Panel (Section 4) opens/updates with that location. Clicking another marker moves the selection. Clicking empty sea closes selection? No — panel persists (less finicky); a close button handles dismissal.
- Keyboard: Tab through markers, Enter selects.

**Animation on first mount:** markers pop in scattered order (scale 0→1, back.out ease, stagger 0.05s, 0.4s) after the plate wipes in (clip-path from top, 0.8s).

---

## Section 4 — Location Panel (side panel / bottom sheet)

**Layout:**
- Desktop ≥900px: floating panel docked to the right edge of the map stage, width 360px, height ~70% of stage, parchment card with gold left-rule (4px aegean), shadow, margin 20px. The stage content doesn't reflow — panel overlays.
- Mobile: bottom sheet sliding up over the map, 55vh, drag-to-dismiss handle.

**Panel content (from the selected `MythLocation`):**
- Eyebrow: location type (`CITY` / `MOUNTAIN` / `ISLAND` / `SEA` / `REALM`) + which maps feature it.
- Name (Cinzel 700 1.75rem) + a small gold meander strip.
- `description` (Cormorant 1.15rem/1.7).
- **"Stories & figures bound to this place"**: chips list resolved from `relatedIds` — each chip shows type icon (⚡ god / ⚔ hero / 📖 story — NO emoji: use tiny laurel/sword/scroll SVG glyphs or plain type tags) + name. Chips navigate to `/pantheon/:id`, `/heroes/:id`, `/stories/:id`.
- Footer row: `Open full story →` (if a story among relatedIds) + close `✕` top-right.

**Animation:** Panel enters: x +40→0 + fade (0.45s, easeOut) desktop; sheet y +100%→0 spring mobile. On marker re-select: content cross-fades (0.25s) — panel itself stays put.

**Empty state (before any selection):** panel shows a welcome card — "Click a marker to begin" + a short list of 3 suggested places (Olympus, Troy, Ithaca) as chips that select themselves on click.

---

## Section 5 — Map Notes (below the stage)

**Layout:** 3-column strip (stacks mobile), parchment cards with aegean top-rule, one per map, each: map name, one-line description, marker count, and `View this chart →` (switches tab + scrolls to stage). Gives context and reinforces the switcher.

**Animation:** Stagger rise 0.08s on scroll into view.

---

## Section 6 — Glossary Cross-link Strip

Centered line: *"Looking for the Chinese name of a place? — Open the 中英对照 Glossary →"* linking `/glossary`. Small gold ornaments flanking.

**Animation:** Fade+rise.

---

## Technical / UX Notes
- Marker overlap: coordinates in data are pre-spaced (see schema coordinate guidance); if two markers land within 4% distance at current stage size, nudge labels to opposite sides (labels flip below-left automatically via CSS class when `x > 70%` or `y > 75%`).
- Deep-linking: on mount, read `?map=` & `?loc=`, activate tab, open panel, and scroll stage into view; briefly pulse the selected marker's halo 3×.
- Pan/zoom: keep it simple — no zoom; the three zoom levels ARE the three maps. Mobile allows native horizontal scroll of the plate wrapper if stage exceeds viewport, with a subtle edge-fade gradient hint.
- Performance: markers are CSS-only transforms; map images lazy-loaded, active map preloads the other two in idle time.

**Assets:** `map-greece.png`, `map-trojan.png`, `map-odyssey.png`, `meander.svg`, `divider-laurel.svg`, small SVG glyphs (laurel, sword, scroll, pin).
