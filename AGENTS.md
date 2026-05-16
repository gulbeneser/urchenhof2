# AGENTS.md - Urchenhof Static Website Guide

## Project Overview
- This repository is a static, single-page German website for **Frühstückspension Urchenhof - Maria Alm - Salzburg**.
- The production business details used on the page are:
  - Frühstückspension Urchenhof, Familie Herzog
  - Urchen 11, 5761 Maria Alm, Österreich
  - Tel. +43 6584 7893
  - Fax +43 6584 7295 15
  - info@pension-urchenhof.at
  - www.pension-urchenhof.at
- The site is designed as a warm vintage/alpine landing page with SEO-oriented real German content for rooms, apartments, ski packages, winter, summer, Ferienhaus Hintermoos, and contact.

## Repository Structure
- `index.html` contains the complete website: HTML, CSS, JSON-LD structured data, and small client-side JavaScript.
- `fotos/` contains local image assets supplied by the user. Prefer these local images over remote stock images.
- `sitemap.xml` contains the current sitemap for the single public URL.
- `AGENTS.md` is this handoff guide and should be reviewed before making future edits.

## Content Rules
- Preserve the German hospitality tone and use real Urchenhof content rather than placeholder copy.
- Keep key SEO terms visible where natural: `Frühstückspension Urchenhof`, `Maria Alm`, `Hochkönig`, `Salzburg`, `Zimmer`, `Ferienwohnungen`, `Apartments`, `Ski amadé`, `Ferienhaus Hintermoos`.
- Keep contact details consistent across metadata, JSON-LD, footer, and visible page copy.
- If package dates or prices are changed by the user, update every repeated mention and consider whether the metadata or structured data also needs adjustment.

## Image Rules
- Use local assets from `fotos/` whenever possible.
- Some filenames include spaces or repeated punctuation, e.g. `fotos/doppelbett mit balkon.png` and `fotos/urchenhof_apartment2_4..png`; preserve exact paths unless renaming them everywhere.
- Always provide descriptive German `alt` text for SEO and accessibility.

## SEO Checklist for Future Agents
- Keep exactly one descriptive `<h1>` on the page.
- Maintain a unique `<title>`, meta description, canonical URL, Open Graph tags, and JSON-LD structured data.
- Ensure meaningful section IDs for anchor navigation.
- Review `sitemap.xml` at the end of every task. Add new public pages if the site becomes multi-page.
- Prefer semantic HTML sections/articles/figures and descriptive link text.

## Development & Testing
- This is a plain static site; no package manager is required.
- Quick local preview command: `python3 -m http.server 8000` and open `http://127.0.0.1:8000/`.
- Basic validation command: use a small script or browser smoke test to confirm `index.html`, local image references, and `sitemap.xml` exist.

## Required End-of-Task Maintenance
- Update this `AGENTS.md` whenever project structure, important content, workflow, or testing guidance changes.
- Check `sitemap.xml` at the end of each task and add any new public pages.
- Keep changes committed on the current branch and prepare a pull request summary when requested by the system.
