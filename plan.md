# Plan: Greek Mythology Knowledge Website (All English)

## Goal
An all-English, visually rich Greek mythology knowledge base website (React + Vite, frontend-only, no backend needed).

## Modules (Requirements)
1. Primordial Gods — major ones (Chaos, Gaia, Tartarus, Eros, Erebus, Nyx, Uranus, etc.)
2. The 12 Titans (Cronus, Rhea, Oceanus, Hyperion, Mnemosyne, Themis, Iapetus, Coeus, Crius, Phoebe, Tethys, Theia + Atlas/Prometheus notes)
3. The 12 Olympians (Zeus, Hera, Poseidon, Demeter, Athena, Apollo, Artemis, Ares, Aphrodite, Hephaestus, Hermes, Dionysus/Hestia)
4. Major Heroes (Heracles, Perseus, Theseus, Achilles, Odysseus, Jason, Atalanta, Bellerophon, Orpheus...)
5. Trojan War — overview story
6. Iliad — introduction
7. Odyssey — introduction
8. Great Tragic Families (House of Atreus, House of Thebes/Oedipus, House of Cadmus...)
9. Chinese-English Glossary — gods, heroes, place names
10. Interactive Maps (multiple) — clickable locations jump to related stories. Custom illustrated SVG map approach (Aegean/Greece world map + Trojan War map + Odyssey voyage map).

Content style: overview-level, not too detailed (user will request additions later).

## Stages

### Stage 0 — Setup
- Load skills: vibecoding-webapp-swarm (orchestration) + webapp-building-swarm (artifact) + swarm-workspace
- Create shared git repo workspace.

### Stage 1 — Content creation (parallel writer subagents, English content as structured JSON/TS data files)
- Agent A: Primordial gods + Titans data
- Agent B: Olympians + Heroes data
- Agent C: Trojan War + Iliad + Odyssey + Tragic Families data
- Agent D: Chinese-English glossary + map locations (with x/y anchor coordinates on map regions + cross-links to story ids)
Content schema defined by orchestrator to guarantee consistency (id, name, epithet, domain, symbols, summary, relations, relatedIds, locationRefs).

### Stage 2 — Design & Build (coder subagent)
- Design-first: classical Greek aesthetic — marble/ivory background, terracotta/olive/gold accents, serif display typography (Cinzel/Cormorant), laurel motifs. Low saturation, warm tones, ample whitespace.
- Pages: Home (hero + module cards), pantheon pages (god cards + detail), Heroes, Stories (Trojan War, Iliad, Odyssey), Tragic Families, Maps (interactive SVG maps with clickable markers → story links), Glossary (searchable table).
- Build with Vite + React + Tailwind + shadcn-style components, client-side routing.
- Validate: npm build passes.

### Stage 3 — Integrate, Review, Deliver
- Verify all modules present, map links work, glossary complete.
- Build production bundle, deliver via website_version_manager (type: static).
