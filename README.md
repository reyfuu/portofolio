# Reyfuu portfolio

Next.js 16, React 19, TypeScript, and Tailwind CSS. Use Node 26.10.0.

## Development

```sh
npm ci
npm run dev
```

The active application lives in `src/app` and `src/components`. Root `index.html`, `css/`, and `js/` are legacy files.

## Checks

```sh
npm run typecheck
npm test
npm run build
```

Refresh repository metadata with `npm run sync:github`. The site falls back to the local GitHub snapshot when the API is unavailable.
