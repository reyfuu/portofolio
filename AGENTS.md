@/home/reyfuu/.codex/RTK.md

# AGENTS.md — Reyfuu portfolio

## Project map

The active website is Next.js 16 App Router + React 19 + TypeScript + Tailwind 3.
Node is pinned to 26.10.0 in `.node-version` and `.nvmrc`. Dev/build use Webpack because this environment blocks the local port binding used by Turbopack CSS workers.
- `src/app/`: page composition, layout and metadata.
- `src/components/`: navigation, projects, project modal and interactive CLI.
- `src/styles/`: shared styles and tokens; `tailwind.config.js`: utility mappings.
- `src/lib/github.ts`: GitHub fetching and fallback handling.
- `src/data/projects.ts`: offline project dataset.
- `BRD.md`: business needs; `FRD.md`: testable behavior; `PRD.md`: product priorities.
- `PRODUCT.md`: durable product facts for Impeccable; `DESIGN.md`: visual contract.
- Root `index.html`, `css/`, and `js/` are the legacy static version. Do not confuse them with the active app or maintain both without a specific request.

## Required workflow

1. **Superpowers**: read `using-superpowers` at the start of a task and use relevant installed skills. Understand the existing flow before editing; use brainstorming for design and systematic-debugging for bugs. Follow explicit user scope and higher-priority instructions.
2. **Ponytail (full)**: reuse existing code, standard libraries and native browser features before adding code. Choose the smallest complete solution. No speculative abstractions or dependencies. Preserve accessibility, validation and error handling. Trace callers before fixing a shared function. Leave one meaningful runnable check for new nontrivial logic.
3. **RTK**: prefix every shell command with `rtk`. Use `rtk proxy <command>` when there is no dedicated wrapper. Read the referenced RTK instructions; do not silently bypass them.
4. **grillme**: challenge vague requirements, unsupported claims and unnecessary complexity before implementation. Read the code first; state a concrete trade-off and recommendation. Ask one focused question only when its answer changes the outcome; otherwise state a reasonable assumption and continue. Critique decisions, never the person. No dedicated grillme skill is currently installed: this paragraph is the local behavior contract, not a claim that a skill ran.
5. Implement the authorized change, run proportionate checks, then perform the completion routine below.

## Completion routine — every task

- Review the changed files for unnecessary code (Ponytail) and check relevant behavior using RTK-wrapped commands. Run type checking and build for app changes; validate links and consistency for documentation changes.
- **Graphify**: use the installed `gsd-graphify` skill after the final edits of every task. Read `.planning/config.json` first. If enabled, build/update the graph and check freshness; preserve the last valid graph on failure. Never hand-write generated graph files or claim a build passed when it did not. If the GSD preflight falsely reports missing Graphify but `rtk proxy graphify --version` succeeds, run `rtk proxy graphify update .` directly, copy its generated outputs into `.planning/graphs/`, then use the GSD snapshot/status commands. If genuinely disabled or unavailable, report the specific blocker and the activation/install step. Run inline, without delegating graph generation.
- Summarize what changed, checks actually run, and outstanding blockers. Never claim browser QA, deployment or Git operations that did not happen.

## Design and engineering rules

- No emoji anywhere in the active website, terminal output, favicon or new copy.
- Sync actual GitHub metadata with `rtk npm run sync:github`; derive language counts from original repositories, mark forks, and describe creation dates as project history, never employment.

- Follow `DESIGN.md`: an editorial developer portfolio with actual repository content. Strong typography, intentional whitespace and restrained teal accents; avoid generic marketing copy, gradient headlines, decorative glowing orbs, emoji feature tiles and repeated card grids.
- Explain what each project does. Do not invent years of experience, usage metrics, benchmarks, client logos or production guarantees. Label repository counts by the dataset they describe.
- Keep GitHub/social URLs accurate. Use `audinathanael@gmail.com` for contact. Never use a GitHub noreply address as a contact mailbox.
- Preserve GitHub API fallback to `src/data/projects.ts` for offline, error and rate-limit states. Filters must offer a recoverable empty state.
- Use semantic HTML, accessible labels, visible keyboard focus, normal-text contrast >= 4.5:1, and reduced-motion support. Check 375px through 1920px layouts; verify terminal commands and modal keyboard/Escape behavior when touched.
- Prefer CSS and existing components; animate transform/opacity only when motion helps. Add no decorative dependency.
- Keep the Next.js generated block below. If bundled docs are unavailable, report that and use version-matched official documentation before changing framework APIs.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
