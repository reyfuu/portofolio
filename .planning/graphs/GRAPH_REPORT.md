# Graph Report - landing page  (2026-09-27)

## Corpus Check
- 46 files · ~39,988 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 276 nodes · 313 edges · 33 communities (26 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.6)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6c51a785`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- page.tsx
- InteractiveTerminal
- compilerOptions
- dependencies
- Reyfuu — product context
- scripts
- devDependencies
- main.js
- layout.tsx
- vite-check/package.json
- DESIGN.md — Reyfuu / working index
- sync-github.mjs
- AGENTS.md — Reyfuu portfolio
- GEMINI.md — Project Memory & Context Rules
- Philosophy.tsx
- github.js
- projects-data.js
- next.config.mjs
- FRD — Reyfuu Professional Portfolio
- PRD — Reyfuu Professional Portfolio
- Reyfuu portfolio
- browser-smoke.cjs
- App.jsx

## God Nodes (most connected - your core abstractions)
1. `InteractiveTerminal` - 20 edges
2. `compilerOptions` - 17 edges
3. `Project` - 11 edges
4. `Reyfuu — product context` - 11 edges
5. `PRD — Reyfuu Professional Portfolio` - 9 edges
6. `scripts` - 8 edges
7. `BRD — Reyfuu Professional Portfolio` - 8 edges
8. `DESIGN.md — Reyfuu / working index` - 8 edges
9. `FRD — Reyfuu Professional Portfolio` - 8 edges
10. `getLanguages()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `HomePage()` --calls--> `getRepositories()`  [EXTRACTED]
  src/app/page.tsx → src/lib/github.ts
- `ProjectModalProps` --references--> `Project`  [EXTRACTED]
  src/components/ProjectModal.tsx → src/data/projects.ts
- `ProjectsShowcaseProps` --references--> `Project`  [EXTRACTED]
  src/components/ProjectsShowcase.tsx → src/data/projects.ts
- `getRepositories()` --indirect_call--> `toProject()`  [INFERRED]
  src/lib/github.ts → src/data/projects.ts
- `TechMatrix()` --calls--> `getLanguages()`  [EXTRACTED]
  src/components/TechMatrix.tsx → src/data/projects.ts

## Import Cycles
- None detected.

## Communities (33 total, 7 thin omitted)

### Community 0 - "page.tsx"
Cohesion: 0.10
Nodes (30): HomePage(), revalidate, Contact(), Experience(), Hero(), ProjectModal(), ProjectModalProps, ProjectsShowcase() (+22 more)

### Community 2 - "compilerOptions"
Cohesion: 0.07
Nodes (28): dom, dom.iterable, esnext, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts (+20 more)

### Community 3 - "dependencies"
Cohesion: 0.13
Nodes (15): autoprefixer, dependencies, autoprefixer, next, postcss, react, react-dom, tailwindcss (+7 more)

### Community 4 - "Reyfuu — product context"
Cohesion: 0.17
Nodes (11): Accessibility & Inclusion, Brand Commitments, Capabilities and Constraints, Evidence on Hand, Operating Context, Platform, Positioning, Product Principles (+3 more)

### Community 5 - "scripts"
Cohesion: 0.14
Nodes (13): engines, node, name, private, scripts, build, dev, lint (+5 more)

### Community 6 - "devDependencies"
Cohesion: 0.15
Nodes (13): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, @types/node, @types/react, @types/react-dom (+5 more)

### Community 7 - "main.js"
Cohesion: 0.31
Nodes (6): escapeHtml(), getCategoryBadge(), getLangBadgeClass(), initAmbientBackground(), openModal(), renderProjects()

### Community 8 - "layout.tsx"
Cohesion: 0.22
Nodes (7): jetbrainsMono, metadata, plusJakarta, viewport, Footer(), Navbar(), navItems

### Community 9 - "vite-check/package.json"
Cohesion: 0.11
Nodes (17): vite, dependencies, react, react-dom, devDependencies, vite, @vitejs/plugin-react, react (+9 more)

### Community 10 - "DESIGN.md — Reyfuu / working index"
Cohesion: 0.25
Nodes (8): Acceptance checks, Content and hierarchy, Data and implementation, DESIGN.md — Reyfuu / working index, Direction, Interaction and accessibility, Reference application, Tokens

### Community 11 - "sync-github.mjs"
Cohesion: 0.25
Nodes (6): fields, file, profileFields, repositories, snapshot, temporary

### Community 12 - "AGENTS.md — Reyfuu portfolio"
Cohesion: 0.29
Nodes (6): AGENTS.md — Reyfuu portfolio, Completion routine — every task, Design and engineering rules, Project map, Required workflow, This is NOT the Next.js you know

### Community 13 - "GEMINI.md — Project Memory & Context Rules"
Cohesion: 0.40
Nodes (4): 1. Project Context, 2. Architectural Guidelines, 3. Persistent Guidelines for Agents, GEMINI.md — Project Memory & Context Rules

### Community 18 - "FRD — Reyfuu Professional Portfolio"
Cohesion: 0.25
Nodes (8): 1. Kebutuhan fungsional, 2. Model dan alur data, 3. State dan interaksi, 4. Kebutuhan nonfungsional, 5. Matriks uji, 6. Batas integrasi, 7. Menjalankan pemeriksaan, FRD — Reyfuu Professional Portfolio

### Community 27 - "PRD — Reyfuu Professional Portfolio"
Cohesion: 0.10
Nodes (17): 1. Kebutuhan bisnis, 2. Tujuan dan ukuran keberhasilan, 3. Pemangku kepentingan dan pengguna, 4. Ruang lingkup, 5. Aturan bisnis, 6. Risiko dan mitigasi, 7. Dependensi dan penerimaan, BRD — Reyfuu Professional Portfolio (+9 more)

### Community 28 - "Reyfuu portfolio"
Cohesion: 0.50
Nodes (3): Checks, Development, Reyfuu portfolio

## Knowledge Gaps
- **134 isolated node(s):** `GitHubService`, `REPO_DATA`, `nextConfig`, `name`, `version` (+129 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `scripts`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `scripts`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **What connects `GitHubService`, `REPO_DATA`, `nextConfig` to the rest of the system?**
  _134 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09745293466223699 - nodes in this community are weakly interconnected._
- **Should `InteractiveTerminal` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._