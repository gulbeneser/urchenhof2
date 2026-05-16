# AGENTS.md - Urchenhof Static Website Guide

## Project Overview
- This repository is a static German website for **Frühstückspension Urchenhof - Maria Alm - Salzburg**.
- The site must use real Urchenhof hospitality content supplied by the user. Do **not** invent business claims, awards, facilities, package details, or placeholder copy.
- The production business details used across metadata, structured data, visible page copy, and footer are:
  - Frühstückspension Urchenhof, Familie Herzog
  - Urchen 11, 5761 Maria Alm, Österreich
  - Tel. +43 6584 7893
  - Fax +43 6584 7295 15
  - info@pension-urchenhof.at
  - www.pension-urchenhof.at
- Visual direction: warm vintage/alpine landing page with SEO-oriented German content for Willkommen, Der Urchenhof, Zimmer, Apartments, Ausstattung, Pauschalen, Anreise, Winter, Sommer, Ferienhaus Hintermoos, Bildergalerien, and Anfrage/Kontakt.
- The project is now multi-page: the homepage remains a rich landing page and the core sections also have dedicated SEO pages.

## Repository Structure
- `index.html` contains the homepage semantic HTML, metadata, canonical/OG/Twitter tags, JSON-LD structured data, landing-page content, homepage price calculator, and links to the detail pages.
- Dedicated public pages currently include:
  - `der-urchenhof.html`
  - `zimmer.html`
  - `apartments.html`
  - `pauschalen.html`
  - `anreise.html`
  - `winter.html`
  - `sommer.html`
  - `bildergalerien.html`
  - `ferienhaus-hintermoos.html`
- `assets/css/styles.css` contains the extracted site styling, responsive layout rules, skip-link/focus styles, reduced-motion handling, subpage styles, and price-calculator styles.
- `assets/js/main.js` contains progressive enhancement JavaScript for sticky header state, subtle pattern movement, reveal animations with an IntersectionObserver fallback, and the accommodation price calculator.
- `fotos/` contains local image assets supplied by the user. Prefer these local images over remote stock images.
- `sitemap.xml` contains all public URLs for the multi-page static site.
- `AGENTS.md` is this handoff guide and must be reviewed and updated before finishing future tasks.

## Current Content & Navigation Notes
- Keep exactly one descriptive `<h1>` per public HTML page. The homepage `<h1>` is `Herzlich willkommen`; subpages each have their own page-specific `<h1>`.
- Header and footer navigation now point to dedicated public pages rather than only in-page anchors. The homepage still contains rich in-page sections for landing-page SEO.
- Keep the keyboard skip link pointing to `#main-content` and ensure every public page has `id="main-content"`.
- The visible header logo is CSS/HTML-based (`.brand-logo`) so it has a transparent background and avoids committing extra or duplicate binary logo files. `fotos/newlogo.png` remains the favicon unless intentionally changed.
- The Lärchenhof cross-link is part of the real content: `www.apartments-laerchenhof.at` / Apartmenthaus Lärchenhof.
- The `#kontakt` footer contact area remains the shared Anfrage destination on each page.

## Price Calculator Notes
- Price calculators appear on the homepage, `zimmer.html`, and `apartments.html`.
- Calculator prices must only use the real user-supplied current values:
  - Doppelzimmer mit Balkon: ab EUR 42,00 pro Person und Tag, Belegung 1 - 2 Personen, Frühstück.
  - Dreibettzimmer mit Balkon: ab EUR 42,00 pro Person und Tag, Belegung 2 - 3 Personen, Frühstück.
  - Vierbettzimmer mit Balkon: ab EUR 42,00 pro Person und Tag, Belegung 2 - 4 Personen, Frühstück.
  - Apartment für 2 - 4 Personen: ab EUR 69,00 pro FEWO und Tag, ohne Verpflegung.
  - Apartment für 4 - 6 Personen: ab EUR 98,00 pro FEWO und Tag, ohne Verpflegung.
- Ferienhaus Hintermoos and Oster-Familienaktion are **Preis auf Anfrage** / **auf Anfrage** and must not be force-calculated unless the user supplies a real price.
- The calculator is an orientation only; keep the “unverbindlich / Ab-Preise / Endpreise können abweichen” wording unless the user supplies fixed booking logic.

## Content Rules
- Preserve the German hospitality tone and use real Urchenhof content rather than placeholder copy.
- Keep key SEO terms visible where natural: `Frühstückspension Urchenhof`, `Pension Urchenhof`, `Maria Alm`, `Hochkönig`, `Salzburg`, `Zimmer`, `Ferienwohnungen`, `Apartments`, `Ski amadé`, `Anreise`, `Bildergalerien`, `Ferienhaus Hintermoos`.
- Keep contact details consistent across metadata, JSON-LD, footer, and visible page copy.
- If package dates or prices are changed by the user, update every repeated mention and consider whether metadata, page descriptions, price calculator options, mailto bodies, and structured data also need adjustment.
- Do not add facts that are not present in supplied Urchenhof content. If unsure, ask the user or keep wording general.

## Image Rules
- Use local assets from `fotos/` whenever possible.
- Current local photos used by the site include:
  - `fotos/urchenhof_front04_640x480.jpg` (homepage hero and gallery image; also preloaded)
  - `fotos/urchenhof16_640x480.jpg`
  - `fotos/mariaalm640x480.jpg`
  - `fotos/urchenhof22_640x480.jpg`
  - `fotos/kinderskikurs02.jpg`
  - `fotos/sessellift_abergbahn.jpg`
  - `fotos/skifahren.jpg`
  - `fotos/urchenhof013_640x480.jpg`
  - `fotos/laerchenhof_schild640x480.jpg`
  - `fotos/bergpanorama_winter-2.jpg`
  - `fotos/doppelbett mit balkon.png`
  - `fotos/urchenhof_dreibettzimmerr.png`
  - `fotos/urchenhof_apartment.png`
  - `fotos/urchenhof_apartment2_4..png`
  - `fotos/newlogo.png` (favicon)
- Some filenames include spaces or repeated punctuation, e.g. `fotos/doppelbett mit balkon.png` and `fotos/urchenhof_apartment2_4..png`; preserve exact paths unless renaming them everywhere.
- Always provide descriptive German `alt` text for SEO and accessibility.
- Keep above-the-fold hero/subhero images prioritized (`fetchpriority="high"` / preload on homepage) and lazy-load lower-page images where appropriate.
- Avoid adding duplicate binary image files to PRs. Reuse existing tracked assets when possible.

## SEO Perfect Checklist for Future Agents
- Keep exactly one descriptive `<h1>` per HTML page.
- Maintain a unique `<title>`, meta description, canonical URL, Open Graph tags, Twitter card, favicon, theme color, and appropriate structured data where applicable.
- Use meaningful section IDs for anchor navigation and deep links (`#doppelzimmer`, `#apartment-2-4`, etc.).
- Keep the main production URL as `https://www.pension-urchenhof.at/` unless the user explicitly changes the domain.
- Review `sitemap.xml` at the end of every task. Add or remove public pages whenever the site changes.
- Prefer semantic HTML sections/articles/figures and descriptive link text.
- Confirm local image references, local asset references, and internal page links exist before finishing.
- Avoid placeholder copy, fake awards, fake ratings, or unverified services/facilities.

## Development & Testing
- This is a plain static site; no package manager is required.
- Quick local preview command: `python3 -m http.server 8000` and open `http://127.0.0.1:8000/`.
- Basic validation command: use a small script or browser smoke test to confirm all `*.html` files, `assets/css/styles.css`, `assets/js/main.js`, local image references, exactly one `<h1>` per page, internal links, and `sitemap.xml` exist.
- Useful commands:
  - `rg -n "fotos/|<h1|<section|application/ld\+json|assets/css|assets/js|data-price-calculator" *.html assets/js/main.js`
  - `python3 -m http.server 8000`
- If a perceptible browser-facing change is made, attempt a screenshot after starting the local server.

## Required End-of-Task Maintenance
- Update this `AGENTS.md` whenever project structure, important content, workflow, SEO rules, or testing guidance changes.
- Check `sitemap.xml` at the end of each task and add any new public pages if the site becomes multi-page or pages are renamed.
- Keep changes committed on the current branch and prepare a pull request summary when requested by the system.
