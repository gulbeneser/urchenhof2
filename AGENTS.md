# AGENTS.md - Urchenhof Static Website Guide

## Project Overview
- This repository is a static, single-page German website for **Frühstückspension Urchenhof - Maria Alm - Salzburg**.
- The page intentionally uses real Urchenhof hospitality content supplied by the user; avoid invented business claims, invented awards, invented facilities, or placeholder copy.
- The production business details used across metadata, structured data, visible page copy, and footer are:
  - Frühstückspension Urchenhof, Familie Herzog
  - Urchen 11, 5761 Maria Alm, Österreich
  - Tel. +43 6584 7893
  - Fax +43 6584 7295 15
  - info@pension-urchenhof.at
  - www.pension-urchenhof.at
- The visual direction is a warm vintage/alpine one-page landing page with SEO-oriented German sections for Willkommen, Der Urchenhof, Zimmer, Apartments, Ausstattung, Pauschalen, Anreise, Winter, Sommer, Ferienhaus Hintermoos, Bildergalerien, and Anfrage/Kontakt.

## Repository Structure
- `index.html` contains the complete website: HTML, CSS, JSON-LD structured data, and small client-side JavaScript.
- `fotos/` contains local image assets supplied by the user. Prefer these local images over remote stock images.
- `sitemap.xml` contains the current sitemap for the single public URL.
- `AGENTS.md` is this handoff guide and must be reviewed before making future edits.

## Current Content & Navigation Notes
- Keep exactly one `<h1>` on the page; currently it is the hero heading for the welcome section.
- Header navigation points to in-page anchors only. There are no separate public HTML pages at the moment.
- The mobile menu overlay was removed because the visible text `Schließen Willkommen✦...` was undesirable; navigation now wraps responsively in the header.
- The visible header logo is CSS/HTML-based (`.brand-logo`) so it has a transparent background and avoids committing extra or duplicate binary logo files. `fotos/newlogo.png` remains only as the favicon unless intentionally changed.
- The Lärchenhof cross-link is part of the real content: `www.apartments-laerchenhof.at` / Apartmenthaus Lärchenhof.

## Content Rules
- Preserve the German hospitality tone and use real Urchenhof content rather than placeholder copy.
- Keep key SEO terms visible where natural: `Frühstückspension Urchenhof`, `Pension Urchenhof`, `Maria Alm`, `Hochkönig`, `Salzburg`, `Zimmer`, `Ferienwohnungen`, `Apartments`, `Ski amadé`, `Anreise`, `Bildergalerien`, `Ferienhaus Hintermoos`.
- Keep contact details consistent across metadata, JSON-LD, footer, and visible page copy.
- If package dates or prices are changed by the user, update every repeated mention and consider whether metadata or structured data also needs adjustment.
- Do not add facts that are not present in supplied Urchenhof content. If unsure, ask the user or keep wording general.

## Image Rules
- Use local assets from `fotos/` whenever possible.
- Newly used homepage photos include:
  - `fotos/urchenhof16_640x480.jpg`
  - `fotos/mariaalm640x480.jpg`
  - `fotos/urchenhof22_640x480.jpg`
  - `fotos/kinderskikurs02.jpg`
  - `fotos/sessellift_abergbahn.jpg`
  - `fotos/skifahren.jpg`
  - `fotos/urchenhof013_640x480.jpg`
  - `fotos/laerchenhof_schild640x480.jpg`
  - `fotos/urchenhof_front04_640x480.jpg`
  - `fotos/bergpanorama_winter-2.jpg`
  - `fotos/bergpanorama_winter.jpg`
- Some filenames include spaces or repeated punctuation, e.g. `fotos/doppelbett mit balkon.png` and `fotos/urchenhof_apartment2_4..png`; preserve exact paths unless renaming them everywhere.
- Always provide descriptive German `alt` text for SEO and accessibility.
- Avoid adding duplicate binary image files to PRs. Reuse existing tracked assets when possible.

## SEO Checklist for Future Agents
- Keep exactly one descriptive `<h1>` on the page.
- Maintain a unique `<title>`, meta description, canonical URL, Open Graph tags, favicon, and JSON-LD structured data.
- Use meaningful section IDs for anchor navigation.
- Review `sitemap.xml` at the end of every task. Add new public pages only if the site becomes multi-page.
- Prefer semantic HTML sections/articles/figures and descriptive link text.
- Confirm local image references exist before finishing.

## Development & Testing
- This is a plain static site; no package manager is required.
- Quick local preview command: `python3 -m http.server 8000` and open `http://127.0.0.1:8000/`.
- Basic validation command: use a small script or browser smoke test to confirm `index.html`, local image references, exactly one `<h1>`, and `sitemap.xml` exist.
- Useful command for references: `rg -n "fotos/|<h1|<section|application/ld\+json" index.html`.

## Required End-of-Task Maintenance
- Update this `AGENTS.md` whenever project structure, important content, workflow, or testing guidance changes.
- Check `sitemap.xml` at the end of each task and add any new public pages if the site becomes multi-page.
- Keep changes committed on the current branch and prepare a pull request summary when requested by the system.
