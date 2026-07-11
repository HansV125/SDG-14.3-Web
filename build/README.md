# SDG 14.3 Indonesia — Backend

A small Express backend that powers the six pages exported from Google Stitch
(`sdg_14.3_project_landing_page`, and the Empati / Ideasi / Prototipe /
Pengujian / Refleksi phase pages), wired together into one connected site.

## What was built

**1. Real page connections.** In the exported files every nav link, footer
link, and "next phase" CTA pointed to `href="#"` (or to non-existent anchors
like `#journey`). Every page now links to the others through real routes:

| Route         | Page                          |
|---------------|-------------------------------|
| `/`           | Landing page                  |
| `/empati`     | Fase 1: Empati & Penelitian   |
| `/ideasi`     | Fase 2: Ideasi                |
| `/prototipe`  | Fase 3: Prototipe             |
| `/pengujian`  | Fase 4: Pengujian             |
| `/refleksi`   | Fase 5: Refleksi              |

Nav bars, footers, and in-page "next step" buttons (e.g. "Mulai Proyek",
"Ke Fase 3: Prototipe") all use these routes, and the current page is
highlighted consistently in each nav.

**2. A YouTube embed, sourced from the backend.** The Pengujian page's video
placeholder (previously a hardcoded, unrelated video ID) now fetches its
video from `GET /api/config` and renders the iframe client-side. It's
currently set to NOAA's featured "What is Ocean Acidification?" explainer,
credited on the page. Swap `data/config.json` to change it.

**3. A small set of APIs the frontend actually calls:**
- `GET /api/facts` — the "5 Fakta SDG 14.3" data on the landing page.
  The cards render from this JSON (falling back to the static markup already
  in the page if the request fails).
- `GET /api/config` — site config, including the YouTube video above.
- `GET /api/progress` / `POST /api/progress/:phase` — tracks, per anonymous
  visitor (a random id in a cookie, no personal data), which of the 5 project
  phases they've visited. Every nav bar shows a small progress indicator
  (dots, `PERJALANAN`) reflecting this across the whole site.

## Design system

No visual rules were changed — `DESIGN.md`'s colors, type scale, spacing,
and component styles are untouched. All edits either added missing `href`s,
converted a couple of dead `<button>`s into properly styled links, or added
small elements (progress dots, video caption) built from the same design
tokens already used elsewhere on each page.

## Running it

```bash
npm install
npm start
```

Then open `http://localhost:3000`.

## Project structure

```
server.js              Express app: page routes + API routes
data/
  facts.json            "5 Fakta" content
  config.json            site config incl. YouTube video id
  phases.json             ordered list of the 5 journey phases
  progress-store.json      created at runtime, per-visitor progress
public/
  pages/                  the six HTML pages (nav/footer/CTAs wired to real routes)
  js/main.js               shared script: progress dots, facts, video embed
```
