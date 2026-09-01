# Prompt log — Panwar Knitwear

Every prompt used on this project, in order. Kept for comparative analysis across
the class's projects: which phrasings produced good work, which needed correcting,
and what turned out to be reusable.

**Maintained by Claude, not by hand.** `CLAUDE.md` requires an entry appended in the
same turn as the work it describes. If you're reading this and the last entry
predates the last commit, the rule was broken — say so.

## Format

```
## NN — short label
**Date:** YYYY-MM-DD · **Time:** Xm (est. Ym)

**Prompt**
> the prompt, verbatim, typos and all

**Produced**
what actually changed — files, decisions, reversals

**Assessment**
one honest line: did it work, and why or why not
```

**Time** is wall-clock minutes the prompt actually took to execute, and in brackets
what it was estimated to take before starting. Both matter: the estimate is what
lets you plan a session, the actual is what tells you the estimate was wrong. A
prompt that reliably takes four times its estimate is a prompt that's asking for
too much at once — which is the kind of thing this log exists to reveal.

Before executing a substantial prompt, state the estimate. Afterwards, record the
real figure even when it's embarrassing.

## Rules for entries

- **Verbatim.** Do not clean up the prompt's grammar, spelling or phrasing. A
  tidied prompt is useless evidence — the point is to see what real wording did.
- **Every substantive prompt**, including the ones that produced bad output and
  had to be undone. Especially those.
- **Never edit an earlier entry.** Corrections go in a new entry that references
  the old one by number.
- **Skip only true no-ops** — "yes", "carry on", "looks good".
- **Be honest in Assessment.** "Too vague, produced generic copy I had to
  rewrite" is worth more than "worked well".

---

## 00 — project scaffolding
**Date:** 2026-08-31 · **Time:** ~10m (no estimate given)

**Prompt**
> right me a well verseed promt in which , u tell claude what to do , also make a claude.md in the panwar folder , also a prompt.md and make it such it records all the prompts given in the claude code

**Produced**
Three files: `CLAUDE.md`, this log, and `../documentation/panwar-build-prompt.md`.
Facts came from fetching the live `panwarknitwear.com` homepage; nothing invented.

First draft of `CLAUDE.md` was then rewritten after reading Martin Garramon's
"How to Write a CLAUDE.md That Actually Works". Three changes: the verified-facts
table moved out to `../documentation/panwar-verified-facts.md` (it was reference
material, and duplicating it in `CLAUDE.md` created a second source of truth
competing with `config.js`); the justifications behind each rule were cut, leaving
the rules themselves; and two sections were added that were missing — Verification,
and a push-back-on-me section.

**Assessment**
Worked only because the site had already been fetched earlier in the session — the
prompt named neither stack nor scope, so plain HTML/CSS/JS and homepage-only were
assumed. Naming both would have removed the guess. The rewrite is the more useful
lesson: the first draft was documentation wearing a rule-book's clothes.

---

## 00b — stack, scope and facts settled
**Date:** 2026-08-31 · **Time:** ~8m (no estimate given)

**Prompt**
> [answers to three questions] Stack: "new frame works going on in the market" · Scope: "Homepage only" · Facts: "serch for on web"

**Produced**
Stack set to Astro + Tailwind v4, static output. Scope confirmed homepage-only.

The facts answer changed the project materially. Fetching their IndiaMART
storefront and profile fact sheet turned most of the never-invent list into
verified facts: established 2016, GST-registered 2017, sole proprietorship, 26–50
employees, five payment modes, road delivery, 4.1/5 from 8 reviews, HSN codes,
per-piece prices, and real product photography for bottom wear and boys' wear.

Two findings that changed the rules:

1. **Leadership conflicts between sources.** Their site says founder Mohar Singh
   Panwar with Prabhu and Bhala Ram Panwar as co-founder CEOs; IndiaMART says CEO
   "M Singh" and owner "Mr. Om Prakash". Only the founder is now publishable.
2. **Real MSP Sports photos exist on IndiaMART.** The earlier rule assumed none.
   The old homepage used Unsplash stock while real photos of the same products sat
   on their own IndiaMART page — a much sharper criticism.

Also found: their homepage omits boys' wear entirely, and omits every real
credential they have.

**Assessment**
"Search the web" was the highest-value answer of the three. One fetch of a
directory listing converted nine unknowns into facts and produced the strongest
line in the pitch. Lesson: check the client's own marketplace listings before
concluding a fact is unavailable — B2B sellers often publish more there than on
their own site.

The stack answer was too vague to act on directly and web search wasn't available,
so Astro was chosen from knowledge with the reasoning written down and alternatives
kept in the build prompt.

---

<!-- Claude: append new entries below this line. Never above it. -->

## 01 — homepage build
**Date:** 2026-09-01 · **Time:** ~65m active (est. 55m) · 285m wall clock, including a ~3h45m idle gap mid-session

**Prompt**
> Read `CLAUDE.md` in full, then fetch `https://panwarknitwear.com` and read the current homepage — you need to see what you're replacing. Build a redesigned homepage for Panwar Knitwear. Stack: Astro with `output: 'static'`, Tailwind v4 via the Vite plugin. Zero client-side JS except the enquiry bar. Facts in `src/data/site.ts`, components in `src/components/`, page at `src/pages/index.astro`. Deploys to Vercel with no adapter. First, seed `src/data/site.ts` from the facts below. It becomes the single source of truth — nothing downstream hardcodes a fact. Verified facts. Sources: A = their site. B = their IndiaMART storefront and profile fact sheet (`indiamart.com/panwar-knitwear`). Both read 31 Aug 2026. Company — Panwar Knitwear, Ludhiana, Punjab (A, B). Established 2016 (B). GST-registered 2017 (B). Sole proprietorship (B). Manufacturer, also wholesale and retail (B). 26–50 employees (B). Payment: cash, card, cheque, DD, online (B). Shipment: by road (B). Bulk orders across India (A). IndiaMART rating 4.1 from 8 reviews (B). HSN 61151000, 61149090, 61059090 (B). Brands — ZONIXA: top wear, T-shirts, sweatshirts, hoodies (A, B). MSP Sports: bottom wear, lowers, track pants, nikkar, capri, shorts (A, B); IndiaMART confirms it as "a brand of Panwar Knitwear". Sites `zonixa.com`, `mspsports.in`; Instagram `@panwarknitwear` (A). Range by IndiaMART category (B) — men's T-shirts 19 · sweatshirts 9 · men's & boys' lowers 8 · men's half-sleeve tees 7 · boys' lowers 6 · men's shorts 5 · men's round-neck tees 4 · men's lowers 3. Also capri, boxers, bermudas. Fabrics (A) — Spun Fleece, Dry Fit, Honeycomb Lycra, 100% Cotton, Cotton Lycra, NS Bonded, Russian Fleece, Sherpa. Corroborated in listings (B): Cotton, Cotton Lycra, Lycra, Dri-Fit, Polyester Dry Fit, Fleece, Matty Fleece, PC Cotton, Hosiery. Phones (A) — +91 98760 45457 · +91 98157 03769 · +91 99999 82998. Listed on JustDial, IndiaMART, Google Maps (A). Photography — Zonixa: five real photos on `panwarknitwear.com/img/` (A): Heavy 320 GSM Round Neck Hoodies With Logo · Two Thread Filice Round Neck Hoodies · 320 GSM Heavy Round Neck Hoodies with Chest Print · Dry Fit Ben Collar Half Sleeve T-Shirts · 320 GSM Heavy Zip Hoodies. Bottom wear, boys' wear and the sweatshirt/hoodie lines: real photos on IndiaMART's CDN `5.imimg.com` (B). Never publish:
>
> * The GST number — only the masked `03**********1ZP` is available. A partial GST is worse than none.
> * `+91 79426 48178` — IndiaMART's proxy line, not theirs.
> * Any leadership name except "Mohar Singh Panwar, founder". The sources conflict: their site says he founded it with Prabhu Panwar and Bhala Ram Panwar as co-founder CEOs (A); IndiaMART says CEO "M Singh" and owner "Mr. Om Prakash" (B). Om Prakash appears nowhere on their own site. Never print both lists as though settled.
> * MOQ, lead times, capacity, certifications, email, street address. Genuinely unpublished. Mark `TODO: confirm with client`.
> * Prices. IndiaMART publishes per-piece figures (₹120–290), but per-piece reads retail, undercuts a bulk position, and goes stale. Deliberate omission.
>
> What the page must do. A bulk buyer landing cold should answer four questions in ten seconds: what do they make, do they make my category, can they handle my volume, how do I reach them. The current homepage answers none — it opens with two brand names and no explanation of what the company is. Sections, roughly in order:
>
> 1. Hero — plainly what they manufacture and for whom. Knitted top wear and bottom wear, two in-house brands, eight fabrics, one supplier in Ludhiana. No adjective-stacking.
> 2. Capability strip — verifiable figures only: est. 2016, 26–50 staff, 2 brands, 8 fabrics, pan-India road delivery. No capacity or MOQ.
> 3. ZONIXA — top wear. Own labelled section, the five real photos plus the sweatshirt and hoodie lines from IndiaMART's CDN.
> 4. MSP Sports — bottom wear. Own section: lowers, track pants, nikkar, capri, shorts, boxers, bermudas. Real photos exist on IndiaMART's CDN — use them.
> 5. Boys' wear. Their homepage omits it entirely; IndiaMART lists a whole category with real photos. Give it space — it widens the addressable buyer.
> 6. Fabrics — all eight, each something a buyer can ask for by name. A real differentiator the old site buried in a paragraph.
> 7. Trust — where the redesign earns its keep. Every credential is verifiable and every one is missing from their current site: trading since 2016, GST-registered 2017, 26–50 staff, 4.1/5 from 8 reviews, five payment modes, pan-India road delivery. Link the JustDial, IndiaMART and Google Maps listings properly — that's what an unfamiliar buyer checks.
> 8. About — short. "Mohar Singh Panwar, founder" and nothing more.
> 9. Enquiry — the conversion point. The old form posts nowhere and its email is `email@example.com`, so do not build a form that pretends to send. WhatsApp deep links and click-to-call on the three real numbers. Any form composes a WhatsApp message.
>
> Mobile-first, and mean it. Buyers arrive on phones from IndiaMART and WhatsApp. Small screen first, sticky Call · WhatsApp bar on narrow viewports, tap targets ≥ 44px. Design is your call, but make it deliberate and defend it in `CLAUDE.md`. Garment photography carries the colour, so keep the interface restrained. Real type choices with fallback stacks, one spacing scale, works in light and dark. It should look like a manufacturer who takes their operation seriously, not like a template. Carry over none of the old copy. Every sentence on that page could describe any manufacturer anywhere. Write copy that is specific or says nothing. Before you start, tell me your time estimate for this build in minutes and log it in `prompt.md`. Afterwards record what it actually took. When you're done:
>
> * Write `IMPROVEMENTS.md` — what was broken, what you changed, one line each. I need to speak from it for a minute, so only things I could say out loud and defend.
> * Run every check in `CLAUDE.md`'s Verification section and show me the results. Don't tell me it works — show the greps.
> * Append entry `01` to `prompt.md` — this prompt verbatim, what it produced, honest assessment.
> * Tell me what you marked `TODO: confirm with client` and why.

**Produced**
Full working homepage. Astro 5.18 static + Tailwind 4.3 via Vite plugin, no adapter.
`src/data/site.ts` (406 lines) holds every fact with its A/B source in a comment;
nine components; one page; `IMPROVEMENTS.md`; design defence appended to `CLAUDE.md`.
Build clean, `astro check` 0 errors / 0 warnings / 0 hints, zero JS bundles (one
inline script for the WhatsApp composer).

Four findings that changed the build rather than just decorating it:

1. **`mspsports.in` serves a dead certificate** — issued for `kayanah.com`, expired
   4 Oct 2023. Every browser shows a security interstitial. `curl -w '%{http_code}'`
   reports `000`, which is easy to skim past. Link removed; `brands.msp.url` set to
   `null` so it restores itself when fixed. Their own site links to it.
2. **IndiaMART's alt text is wrong.** The image titled "Mens Cotton T Shirt" is a
   photograph of a navy lower; the filename (`stylish-printed-men-lower`) was right.
   Every one of the 21 images was downloaded and looked at before being captioned.
3. **`panwarknitwear.com` answers `444` to HEAD and `200` to GET**, so the first
   image liveness check was a false negative. Switched to GET, then self-hosted all
   images in `src/assets` — Astro emits resized WebP and the hotlink risk goes away.
4. **Two light-theme colours failed WCAG AA** (`--pk-ink-faint` at 3.79,
   `--pk-whatsapp` at 4.22 with white text). Caught by measuring every text/background
   pair rather than eyeballing; both darkened.

Also caught by my own greps, mid-build: two rule 10 violations I had written myself —
`ZONIXA` hardcoded in a section lede and `Ludhiana, Punjab` hardcoded in the enquiry
block. Both moved to `site.ts` references. And two ledes I drafted made unsourced
claims ("with our label or yours" — private label is on the TODO list; "the same
fabrics as the men's range" — an inference). Both rewritten before first build.

Found a richer image set than the prompt described: the boys'-wear and men's
bottom-wear category pages carry 500×500 originals beyond the eight on the storefront
landing page, including MSP Sports flat-lays with branded polybags and cartons that
match the ZONIXA art direction. Used those as the lead images for both sections.

**Assessment**
The best prompt in this log so far, and the reason is the fact table. Supplying every
fact with an A/B source and an explicit never-publish list meant almost no invention
pressure — the only judgement calls left were real ones (what to do about a broken
certificate, how to caption a catalogue sheet honestly). The estimate was 55m against
~65m actual, which is close; the overrun was entirely image verification, and that was
the step that caught the wrong alt text, so it earned its time.

One weakness worth recording: the prompt asserts buyer segments ("wholesalers,
sportswear labels, uniform and institutional buyers") in `CLAUDE.md` that neither
source supports. I omitted the segment list and used the sourced framing instead
("wholesale and bulk supply"). If those segments are real, they need a source; if
they are an assumption, `CLAUDE.md` should say so, because rule 1 makes anything in
that file read as established.

Second weakness, mine not the prompt's: I ran the first rule 10 grep while still
`cd`'d into `dist/`, so it reported three clean PASSes against a directory that did
not exist. Caught it because "no such file or directory" appeared above the PASS
line. A verification step that can pass by finding nothing is not a verification step.
