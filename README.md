# ICISML 2027 — Conference Website

Static site for the 7th International Conference on Intelligent Systems and
Machine Learning (Hybrid Mode), hosted by PSIT Kanpur, 10–11 September 2027.

Deployed via GitHub Pages (see `CNAME`). No build step — plain HTML with
Tailwind CSS loaded from a CDN.

## Structure

```
.
├── index.html              Home — hero, about, dates, past conferences
├── call-for-papers.html    Tracks, about, submission guidelines
├── publication.html        Special issues
├── registration.html       Dates, fees, submissions/acceptance chart
├── authors.html            Paper formatting and review guidelines
├── speakers.html           Keynote speakers
├── committee.html          Full organising committee
├── contact.html            Venue and contact details
│
├── assets/
│   ├── img/                All images used by the site
│   └── docs/               PDFs used by the site
│
├── css/styles.css          Legacy stylesheet (not currently linked)
├── js/scripts.js           Legacy script (not currently linked)
├── images/                 Unused photo archive from past editions
└── CNAME                   Custom domain for GitHub Pages
```

## Conventions

- Every page is self-contained: nav, footer and page-specific `<style>`/`<script>`
  blocks live in the file itself.
- Asset paths are relative and always point at `assets/img/` or `assets/docs/`.
- Content that is switched off for this edition is kept inside HTML comments
  rather than deleted, so it can be re-enabled later. Currently commented out:
  - CMT submission buttons (index, call-for-papers, authors) — awaiting the
    ICISML 2027 CMT site
  - Final Technical Programme Schedule (index) — from the 2026 edition
  - Sponsors and Session Chairs sections (index)
  - The previous edition's full journal list (publication)
  - The scrolling news ticker (index, call-for-papers, registration)

## Re-enabling the ticker

The ticker markup is commented out on index, call-for-papers and registration.
Each of those pages sets `--ticker-height: 0px` so no blank strip is reserved.
When the ticker is switched back on, set that variable back to `44px`.

## Updating the submissions chart

The submission/acceptance figures live in one place: the Chart.js
`labels`/`submissions`/`accepted` arrays near the bottom of `registration.html`.
Acceptance rates are computed from those arrays, not hard-coded.
