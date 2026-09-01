# Panwar Knitwear

**Status:** homepage built, redesigned and verified (1 Sep 2026). Astro static +
Tailwind v4, ten components, ten sections live, brand navigation in place, `npm run
build` clean. Not yet deployed.
*(The one line here that doesn't persist — update it at the end of each session.)*

**Business:** knitwear manufacturer in Ludhiana, est. 2016, 26–50 staff, sole
proprietorship. Two in-house brands — ZONIXA (top wear), MSP Sports (bottom wear).
Sells in bulk to wholesalers, sportswear labels, uniform and institutional buyers.
Never to consumers.

**USP:** tops and bottoms, eight knitted fabrics, one supplier. Lead with it.

**Facts live in `src/data/site.ts`.** If a value isn't there, it isn't published.

---

## Decisions already made — do not re-open

- **Astro** with static output, Tailwind v4. Zero client JS except the enquiry bar.
- `src/data/site.ts` holds every business fact. Single source of truth.
- Homepage only. Other pages are out of scope until asked.
- Positioning is mid-market and capability-led. Not luxury, not budget.
- **No prices**, though IndiaMART publishes them. Per-piece figures read retail,
  undercut a bulk position, and go stale. Positioning call, already argued.
- No copy from the old site survives.

## Rules

1. Never invent a fact. If it isn't in `src/data/site.ts`, it's omitted or marked `TODO: confirm with client`.
2. Never publish: the masked GST number, the IndiaMART proxy phone `+91 79426 48178`, MOQ, lead times, capacity, certifications, or an email address.
3. **Leadership: publish "Mohar Singh Panwar, founder" and nothing more.** The two sources disagree on everyone else. Never print the site's co-founders and IndiaMART's "Om Prakash" together as a settled list.
4. No cart, checkout, payment, per-piece price, or size picker. Enquiry is the only conversion.
5. Write for the buyer placing a bulk order, never the person wearing the garment.
6. No sustainability, eco-friendly, or ethical-sourcing claims.
7. Never compete on price. No "best prices", no ranges, no ₹.
8. Real photography only. Zonixa photos from `panwarknitwear.com/img/`; bottom wear, boys' wear and sweatshirts from IndiaMART's CDN `5.imimg.com`. **Never a stock photo captioned as their product** — that was the old site's worst failure, and real photos existed one click away on their own IndiaMART page.
9. No `href="#"`. No link to a page that doesn't exist.
10. No hardcoded facts outside `src/data/site.ts`. Products and fabrics render from it.
11. No raw hex. Tailwind theme tokens only, defined once.
12. Mobile-first. Tap targets ≥ 44px. Phone reach to Call and WhatsApp on every screen.
13. Never build a form that appears to send and doesn't. WhatsApp deep links and click-to-call only, until a real email destination exists.
14. Copy is specific or absent. No adjective-stacking, no superlative not backed by a fact in `src/data/site.ts`.
15. Prefer a verifiable credential over an adjective. Their real ones — 2016, GST 2017, 26–50 staff, 4.1/5 from 8 reviews, pan-India road delivery, five payment modes — are all absent from their current site.

## Verification — before claiming anything works

State the check, then run it. No silent "should be fine".

- **Every build:** grep the output for `unsplash`, `href="#"`, `example.com`,
  `sustainab`, `eco-friendly`, `best price`, `79426`, `₹`, `1ZP`. Any hit is a rule
  violation — fix before reporting done.
- **Facts:** grep the built HTML for a phone number or product name. A hit outside
  `site.ts` means rule 10 was broken.
- **Rendering:** confirm the product and fabric sections actually populated. An
  empty grid from a data typo looks like a styling bug.
- **Images:** confirm every remote image actually loads. A hotlinked IndiaMART or
  panwarknitwear URL that 404s is worse than a placeholder.
- **Responsive:** 375px, 768px, 1280px. No horizontal scroll at any of them.
- **Themes:** light and dark.
- **Build:** `npm run build` clean, no warnings ignored.
- If you can't verify something, say so plainly instead of implying you did.

## Prompt logging

`prompt.md` records every prompt used on this project, in order.

Append an entry in the **same turn** as the work it describes — unprompted, not
batched. Record: date, the prompt **verbatim including typos**, what it produced,
and one honest line on whether it worked.

Skip only true no-ops ("yes", "carry on"). Never edit an earlier entry; corrections
go in a new one referencing the old by number.

## Push back on me

- Lead with what's wrong. If I ask what you think, problems first.
- If I state a fact about this business, ask whether it's sourced or whether I'm
  assuming.
- If I ask for something that breaks a rule above, name the rule before doing it.
- One instruction at a time. Don't dump a checklist when I need the next action.
- No "great question". No preamble. Answer.

---

## Design decisions — made 1 Sep 2026, defend or change deliberately

The brief said design is my call but must be deliberate. Here is the reasoning, so
the next session argues with it rather than guessing at it.

**Colour comes from their logo, not from taste.** `transparent-logo.png` is a
violet gradient running `#3e0049` → `#71028f`. Those two values were sampled out of
the artwork and are the entire brand ramp; nothing on the page invents a hue. This
replaced an earlier rust palette that was chosen from nothing and read as generic —
if a colour cannot be traced to a source, it is the wrong colour for this project.

**Violet is structural, never decorative on top of a photograph.** It carries the
header, the hero plate, the capability strip, the fabric table head, the rating
panel and the footer. The garments still carry every bright colour in the frame, so
the violet is kept to the surfaces *around* the photography and never tints it.
WhatsApp green appears exactly once, on the WhatsApp control, where it is
recognition rather than decoration.

**The brand fields are flat, and the hero is textured rather than graded.** There was
briefly a `linear-gradient(108deg, …)` sweeping across the header, hero and rating
panel. It failed the project's own test three ways: the logo gives two endpoints but
the sweep between them was invented, so it was the one colour decision on the page
with no source; it reached its lightest value on the right, which is exactly where
the garment cards sit, so the photography met the weakest part of the field; and a
left-to-right gradient is the single most template-looking device available, which is
the criticism this design already had to answer once.

`.brand-plate` is now flat `--color-brand-deepest`. The hero and the rating panel use
`.knit-plate`, which lays a faint stitch lattice over that flat colour — two
`repeating-linear-gradient`s at opposing 60° angles, drawn in a `--pk-knit-stroke`
token derived from the brand ink with `color-mix`, never a raw rgba. It reads as
jersey knit at arm's length and as nothing in particular up close, which is what a
background should do. **The texture is the material the client actually manufactures,
which is the whole argument for it** — and it costs no image weight.

The header stays flat and untextured on purpose: the logo artwork carries its own
gradient, and a stitch mesh at that height competes with it. The texture is also
suppressed under `prefers-contrast: more`.

**The logo is used, at real size, on a plate that matches it.** The artwork is a
violet banner with its own gradient and border baked in, so dropping it on white
paper would read as a stray purple rectangle. The header is built as the same
gradient and the mark sits inside it. It appears again in the footer.

**Type carries the whole positioning: claims in prose, evidence in monospace.**
Archivo for headings and body — a grotesque with straight-sided terminals, which
reads industrial without becoming a tech-startup default. IBM Plex Mono for every
figure, eyebrow and spec label: `2016`, `26–50`, the HSN codes, the fabric alternate
names, the phone numbers. A buyer scanning for evidence finds it set differently
from the sentences making the claims. That split is the typographic idea; keep it.
Both are self-hosted via `@fontsource`, so the page makes no external request at all.

**Brand navigation is the page's main job, so it gets the most weight.** The first
question a bulk buyer asks is "do they make my category". Three routes — ZONIXA,
MSP Sports, boys' wear — are reachable three ways from anywhere: the desktop nav,
a scrollable pill rail on narrow screens, and the `#ranges` cards directly under the
capability strip. Each card carries a photograph, the garment list and the published
listing count, all derived from `site.ts` so a card cannot drift from the section it
points at. A `:target` rule flashes a brand edge on the destination so the click
visibly lands, with no scroll listener and no JavaScript.

**No model photography.** Rule 5 says write for the buyer placing a bulk order, never
the person wearing the garment — that applies to pictures too. On-model shots on
stark white read as marketplace listings, fight the dark theme and sell to the
wearer. Flat-lays showing colourway range, hangtags and branded packaging sell to the
buyer. Every product photograph on the page is now a flat-lay or a packed-goods shot.

**Layout is a spec sheet, not a brochure.** The capability strip is a five-cell
`dl`, the fabrics are a real `<table>`, the credentials are `dt`/`dd` pairs. A bulk
buyer is comparing suppliers, not browsing — tabular data respects that, and it
also happens to be the correct markup.

**One spacing scale.** Tailwind's default 4px base throughout; sections are
`py-16 / sm:py-20 / lg:py-24`, and nothing invents a one-off value.

**Colour is defined once, in `src/styles/global.css`.** Semantic CSS custom
properties on `:root`, overridden in one `prefers-color-scheme: dark` block, mapped
into Tailwind via `@theme inline`. No component declares a colour. This is why there
is no `<meta name="theme-color">` — it takes a literal value and would have been a
second place a colour lived.

**Motion is CSS only — the zero-JavaScript rule still holds.** Scroll reveals use
`animation-timeline: view()`, cards lift and their photograph creeps in on hover,
the hero rises on load, and the product rails are `scroll-snap` rather than the old
site's jQuery carousel. There is still exactly one script on the page and it is the
WhatsApp composer. Everything respects `prefers-reduced-motion`.

**No content may depend on an animation having run.** An inactive `view()` timeline
does not fall back to a time-based run — it pins the animation at its start state.
So the scroll reveal starts at `opacity: 0.45`, not `0`: if the timeline ever fails
to attach, the worst case is a slightly faded, slightly offset element rather than
an invisible one. Do not lower that floor to zero.

**Accessibility is not a later pass.** Every text/background pair on the page was
measured against WCAG AA in both themes, including text on the violet plate. Two
light-theme tokens (`--pk-ink-faint` and `--pk-whatsapp`) were darkened during the
first build because they failed at 3.79 and 4.22. Re-measure if you touch them.

## Verification additions learned this session

- **Alt text from IndiaMART is not a caption.** Their image titled "Mens Cotton T
  Shirt" is a photograph of a navy lower. Download and look at every image before
  captioning it; trust the filename over the alt attribute, and your eyes over both.
- **Check the TLS certificate on every outbound link, not just the status code.**
  `mspsports.in` returns a 301 to HTTPS and then serves a certificate for
  `kayanah.com` that expired Oct 2023. `curl -o /dev/null -w '%{http_code}'` reports
  `000`, which is easy to skim past. It is now unlinked; `brands.msp.url` is `null`
  and the link renders again the moment it is set.
- **`HEAD` is not a liveness test.** `panwarknitwear.com` answers `444` to HEAD and
  `200` to GET. Test images with GET.
- **Images are self-hosted in `src/assets`, not hotlinked.** Both origins answer
  today, but a server that rejects HEAD is a server that will break a hotlink without
  warning. Self-hosting also lets Astro emit resized WebP, which is what matters on
  the phone connections these buyers arrive on.

## Verification additions learned in the redesign

- **`overflow-x: hidden` on `<body>` silently breaks `animation-timeline: view()`.**
  It makes the body a scroll container; the reveals attach their timeline to it, it
  never scrolls, and the animation stays pinned at its first keyframe. Symptom:
  elements sitting fully inside the viewport reporting `opacity: 0`. The page now
  uses `overflow-x: clip` on the root only. Check computed opacity of `.rise`
  elements after a reload at a restored scroll position, not just after scrolling.
- **The three "About" images on the old site are stock photographs.**
  `who-we-are.jpg` and `our-leadership.jpg` are silhouetted businesspeople in an
  office. Carrying them over would repeat the exact failure the redesign criticises.
  They are deliberately not used.
- **`panwarknitwear.com` rate-limits.** Several images that returned `200` on one
  pass returned `444` a minute later. Space requests out and re-test before
  concluding an asset is missing.
- **Not every IndiaMART photo is usable.** Roughly half are catalogue sheets with
  marketing text printed into the image (`ART NO. #3100`, `LIFE BEYOND limits`).
  Prefer the secondary images on a listing — they are usually clean single-product
  shots. Two salvageable frames were cropped to remove the printed text; the rest
  were dropped rather than shown.
- **The `mspsports` grep hits the LinkedIn URL.** The post slug contains the
  hashtag `…-zonixa-mspsports-activity-…`. That is not a link to the broken brand
  site — check what matched before treating it as a regression.

## Photography rules learned the hard way

- **No model shots.** See the design note above. They were removed after the client
  called them out, and the reasoning is rule 5 applied to images.
- **No printed marketing text inside a photograph.** `ART NO. #3100`,
  `LIFE BEYOND limits`, `SIZE :- L, XL, XXL`. Either crop it out cleanly or drop the
  image. Tagging it "catalogue sheet" and shipping it anyway was tried and was wrong.
- **Some of their IndiaMART images are AI-generated mockups, not photographs.**
  `Zonixa T-Shirts` (two smiling models with luggage) and `Zonixa Shape Matty
  T-shirts` (a tie-dye tee on a mannequin in a rendered room) are generated
  composites with a flat wordmark pasted on, not their embroidered ZONIXA mark. Rule
  8 forbids them exactly as it forbids Unsplash. Check the logo on the garment: real
  production carries a small embroidered or printed ZONIXA badge, the mockups carry
  plain typeset text.
- **The good images are usually deeper in the listing.** The storefront thumbnail is
  often the catalogue-sheet cover; the second and third images on the same product
  are frequently clean flat-lays. Always open the category page, not just the
  storefront.
