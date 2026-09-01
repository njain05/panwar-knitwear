# Panwar Knitwear — Website

Marketing homepage for **Panwar Knitwear**, a knitwear manufacturer based in Ludhiana, Punjab. Built as a static site targeting bulk wholesale buyers, not consumers.

**Live status:** homepage built and verified. Not yet deployed.

---

## Tech stack

| Tool | Purpose |
|------|---------|
| [Astro 5](https://astro.build) | Static site framework — zero client JS by default |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility styling via Vite plugin |
| [Archivo (variable)](https://fontsource.org/fonts/archivo) | Headings and body text — self-hosted |
| [IBM Plex Mono](https://fontsource.org/fonts/ibm-plex-mono) | Numbers, labels, specs — self-hosted |
| [sharp](https://sharp.pixelplumbing.com) | Astro image processing — resizes and converts to WebP |
| TypeScript | Type-checked throughout |

No client-side JavaScript ships except the enquiry bar's WhatsApp deep link and click-to-call. No external font requests — both typefaces are loaded from `@fontsource`.

---

## Project structure

```
src/
├── assets/              # Self-hosted product photographs
│   ├── brand/           # Logo
│   ├── zonixa/          # ZONIXA top-wear photos
│   ├── msp/             # MSP Sports bottom-wear photos
│   └── boys/            # Boys' wear photos
├── components/          # Astro components, one per page section
│   ├── Header.astro
│   ├── Hero.astro
│   ├── CapabilityStrip.astro
│   ├── BrandSection.astro
│   ├── ProductCard.astro
│   ├── Fabrics.astro
│   ├── About.astro
│   ├── Trust.astro
│   ├── Enquiry.astro
│   ├── StickyContactBar.astro
│   ├── ContactButtons.astro
│   ├── Section.astro
│   └── Footer.astro
├── data/
│   └── site.ts          # Single source of truth for every business fact
├── layouts/
│   └── Base.astro       # HTML shell, fonts, meta tags
├── pages/
│   └── index.astro      # Homepage — assembles components in order
└── styles/
    └── global.css       # CSS custom properties (colour tokens) + Tailwind theme
```

### The one file that matters most: `src/data/site.ts`

Every business fact — company details, phone numbers, brands, fabrics, products, trust signals — lives in `site.ts`. No component hardcodes a fact. If a value is not in that file, it is not on the site.

---

## Getting started

```bash
# Install dependencies
npm install

# Start dev server at http://localhost:4321
npm run dev

# Build for production into dist/
npm run build

# Preview the production build locally
npm run preview
```

Node 18+ required (for Astro 5 and sharp).

---

## How the page is structured

Nine sections render in order:

1. **Header** — logo, phone number, WhatsApp button
2. **Hero** — headline, one-line USP, call-to-action
3. **Capability strip** — five key credentials in a `<dl>`
4. **Brand section** — ZONIXA (top wear) and MSP Sports (bottom wear) with product grids
5. **Fabrics** — the eight knitted fabrics in a `<table>`, the USP in data form
6. **About** — founder, year established, legal status, staff count
7. **Trust** — IndiaMART rating, directory listings, Instagram
8. **Enquiry** — WhatsApp and phone CTAs with pre-filled message
9. **Footer** — HSN codes, payment modes, shipment note

---

## Design decisions

- **Colour palette:** warm off-white background, near-black ink, one rust accent. Defined as CSS custom properties in `global.css`; dark-mode tokens in a `prefers-color-scheme: dark` block. No raw hex in components.
- **Type:** Archivo for prose, IBM Plex Mono for every number and spec label. The split signals "claim vs. evidence" to a buyer scanning fast.
- **Layout:** spec-sheet over brochure — `<dl>`, `<table>`, `<dt>`/`<dd>`. Tabular data for buyers comparing suppliers.
- **Images:** self-hosted in `src/assets`. Astro emits resized WebP automatically. No hotlinks.
- **Enquiry:** WhatsApp deep link and click-to-call only. No form that appears to send but doesn't.

All colour and contrast decisions are documented in `CLAUDE.md` under "Design decisions".

---

## Deploying to Vercel

This site is configured for static output (`output: 'static'` in `astro.config.mjs`) and deploys to Vercel with zero configuration:

1. Push this repository to GitHub (already done if you're reading this there).
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the GitHub repo.
3. Vercel detects Astro automatically. Leave all settings as defaults.
4. Click **Deploy**.

Every subsequent push to `main` triggers a new deploy automatically.

> **Custom domain:** to use `panwarknitwear.com`, add it in the Vercel project settings under **Domains**, then update the DNS `A` record at your registrar to point to Vercel's IP. Vercel provisions the TLS certificate automatically.

---

## Content rules (summary)

The full rules are in `CLAUDE.md`. Short version:

- Never invent a fact. If it isn't in `site.ts`, it is omitted.
- No prices, no MOQ, no GST number, no email, no street address — genuinely unpublished by the business.
- Real product photography only — never stock photos captioned as their product.
- No links to pages that don't exist (`href="#"` banned).
- Copy targets the buyer placing a bulk order, not the person wearing the garment.

---

## Sources

All business facts in `site.ts` are tagged with their source:

- **A** — `panwarknitwear.com` (their own site), read 31 Aug 2026
- **B** — `indiamart.com/panwar-knitwear` (storefront + profile fact sheet), read 31 Aug 2026
