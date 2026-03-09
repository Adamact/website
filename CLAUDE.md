# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for **Attestro** (invoice processing product) by **Älgamo Software AB**. Static multi-page site built with Vite + TypeScript, deployed to GitHub Pages (custom domain via `CNAME`).

## Commands

- `npm run dev` — Start Vite dev server (localhost:5173, hot reload)
- `npm run build` — Type-check with `tsc -b` then build to `dist/`
- `npm run preview` — Serve the built `dist/` locally

No test framework or linter is configured.

## Architecture

**Multi-page Vite setup** — `vite.config.ts` defines three HTML entry points: `index.html`, `pricing.html`, `about.html`. Each page loads the same shared `styles.css` and `src/main.ts`.

**i18n system** — All user-facing text is translated via `data-i18n` attributes in HTML. `src/main.ts` contains a `translations` object with `sv` and `en` keys. Language preference is persisted in `localStorage` under `algamo-lang`. Default language is Swedish (`sv`).

- To add a new translatable string: add the key to both `sv` and `en` in the `translations` object in `src/main.ts`, then use `data-i18n="keyName"` on the HTML element.
- Page-specific meta titles/descriptions are detected by checking for `.pricing` or `.about` class on the body content.

**No component framework** — Plain HTML pages with vanilla TypeScript. `src/main.ts` handles language switching, pricing toggle animation, smooth scrolling, and logo fallback.

**Assets** — `assets/` is referenced directly in HTML. `public/assets/` is copied as-is to `dist/` by Vite.

**Legacy file** — `script.js` in the root is superseded by `src/main.ts` and can be removed.
