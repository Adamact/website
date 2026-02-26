# Website

Static site (HTML, CSS, TypeScript) built with Vite. Intended for GitHub Pages (see `CNAME`).

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Opens a dev server with hot reload (e.g. http://localhost:5173). Use this instead of opening `index.html` with `file://`.

## Build

```bash
npm run build
```

Output goes to `dist/`. Deploy the contents of `dist/` to GitHub Pages (or any static host).

If your site is served from a subpath (e.g. `https://username.github.io/repo/`), set `base: '/repo/'` in `vite.config.ts` before building.

## Host locally (without Node)

If you don’t run the dev server, you can still serve the **built** site:

```bash
npm run build
npx serve dist
```

Or serve the repo root with Python: `python -m http.server 8000` — then open `index.html`; note that `/src/main.ts` won’t work without a build, so use `npm run dev` for full behavior.

## Structure

- `index.html`, `pricing.html`, `about.html` — pages
- `styles.css` — global styles
- `src/main.ts` — i18n, language switcher, pricing toggle, smooth scroll (TypeScript, compiled by Vite)
- `public/assets/` — images (logo, etc.); copied as-is into `dist/` on build

The old `script.js` is replaced by `src/main.ts`; you can remove `script.js` after confirming the build works.
