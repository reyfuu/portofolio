# DESIGN.md — Reyfuu / working index

## Direction

A personal index of software projects: charcoal surfaces, large left-aligned type,
thin dividing rules and repository names as the main visual content. Visitors should
understand who Reyfuu is, browse the work and reach the source without reading a sales pitch.
This supersedes the previous cyber-glassmorphism specification.

Considered directions: neon terminal (too much decorative emphasis), a light résumé
(less continuity with the existing site), and an editorial dark index (chosen).
Keep the interactive terminal as a useful optional way to explore the same portfolio.

## Content and hierarchy

1. Navigation: Reyfuu wordmark, Work, Toolkit, History, Contact; mobile disclosure.
2. Split hero: h1 “Reyfuu. Software developer.”, concise focus, project/email CTAs.
   A pale-green reading surface alongside it lists three actual original repositories:
   audit, kasir-api and crewAi. Resolve them from the current dataset; never invent a
   missing entry. This is a source-code index, not a fabricated product screenshot.
3. Project archive: search and category filters, result count, six entries initially.
   Show more adds six; changing query/category resets the visible limit. Keep the
   full index searchable, with recoverable empty state and existing details dialog.
4. Toolkit: detected primary languages and counts, excluding forks and missing languages.
5. History: native year disclosures, newest open. Dates document repository creation,
   not employment. Older repositories remain available without filling the page.
6. Optional terminal: native disclosure, closed initially. All commands remain available.
7. Contact: direct email `audinathanael@gmail.com`; GitHub stays in navigation/footer.

Do not add numbered section eyebrows, ornamental badges or repeated card containers.
Use headings directly. The interface is an extension of the existing editorial world,
not a new visual identity. Preserve charcoal, teal, existing fonts and proven interactions.

## Tokens

| Role | Value |
| --- | --- |
| Page | `#0c0c0f` |
| Surface | `#111114` |
| Raised surface | `#18181c` |
| Main text | `#ededef` |
| Secondary text | `#a1a1aa` |
| Metadata | `#92929b` |
| Accent | `#5eead4` |
| Structural border | white at 10% opacity |
| Reading width | 1120px maximum, 24px side gutters |

Keep CSS variables and Tailwind mappings consistent. Use the existing Plus Jakarta Sans
and JetBrains Mono families; monospace is for metadata and terminal output. Body copy
is 16px, repository descriptions 14px, small metadata at least 12px. Hero type scales
from 52px on mobile to 88px on desktop; section titles are about 30px. Use 64–96px
section spacing, 24–40px gaps, restrained 6–10px control radii. Avoid wrapping every
section in a rounded container. Teal marks navigation/action emphasis, not whole paragraphs.

## Reference application

Impeccable 4.4.0: product context, hierarchy, craft floor and one mechanical detection
pass. UI/UX Pro Max: local design-system query and Next.js guidance. Generic query
suggestions for documentation or handwritten typography were rejected as poor fits;
existing typography, server rendering and accessibility constraints take priority.
21st.dev public tabs/skills patterns were reviewed as references; no component code
was imported and its authenticated MCP is not connected.

Selected-work surface: `#eceee8`; foreground `#202923`; secondary `#4c5b50`;
separator `#c7cfc6`; focus `#305d45`. This is the single light surface. Its hierarchy
and contrast distinguish actual projects from general navigation.

## Interaction and accessibility

Keep controls native: anchors for navigation and source links, buttons for filters
and details, a labeled input for search. Filters expose their pressed state. Provide
visible focus outlines and a skip link. Navigation targets clear the fixed header.
Modal behavior must retain Escape, focus management and scrolling. Respect reduced
motion; content must remain visible without animation. No emoji, including terminal output and favicon. No background canvas, animated
noise, gradient blobs or mouse-follow effects.

Normal text must reach WCAG AA 4.5:1 on its actual surface. Category color is paired
with a text label. Verify narrow screens, 200% zoom, keyboard navigation and no
horizontal page overflow. Use project-specific accessible names for repeated actions.

## Data and implementation

Implement in `src/`, not the legacy root HTML. Reuse the GitHub loader, offline snapshot (`src/data/github-snapshot.json`), filtering, native dialog and terminal. Refresh the snapshot with `rtk npm run sync:github`. Skills derive from primary languages in non-fork repositories; project dates come from `created_at`. Never describe fallback metadata as newly
verified live data. Do not add a new UI library or redesign API behavior for visual work.
Do not invent experience duration, performance claims, customer outcomes or project screenshots.

## Acceptance checks

- Hero identifies Reyfuu; projects follow directly and can be searched and filtered.
- Empty search results offer reset; external GitHub failure retains local projects.
- No gradient hero text, ornamental card wall, emoji skill tiles or generic sales slogans.
- Responsive review at 375, 768, 1280 and 1920px; names wrap and controls remain usable.
- Type check and production build pass; browser checks cover touched interactions.
- End each task with the AGENTS.md completion routine, including Graphify status.
