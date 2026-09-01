# Panwar Knitwear

**Status:** homepage built and verified (1 Sep 2026). Astro static + Tailwind v4,
nine components, all nine sections live, `npm run build` clean. Not yet deployed.
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

**The interface recedes because the garments do not.** The photography carries
every bright colour on the page — mustard tees, coral hoodies, olive joggers, six
colourways to a frame. So the interface holds three things only: warm off-white
paper, near-black ink, and one rust accent. Rust because it sits beside the navy,
olive and grey of the actual garments without competing with them, and because the
generic corporate blue is what a template picks. WhatsApp green appears exactly
once, on the WhatsApp control, where it is recognition rather than decoration.

**Type carries the whole positioning: claims in prose, evidence in monospace.**
Archivo for headings and body — a grotesque with straight-sided terminals, which
reads industrial without becoming a tech-startup default. IBM Plex Mono for every
figure, eyebrow and spec label: `2016`, `26–50`, the HSN codes, the fabric alternate
names, the phone numbers. A buyer scanning for evidence finds it set differently
from the sentences making the claims. That split is the typographic idea; keep it.
Both are self-hosted via `@fontsource`, so the page makes no external request at all.

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

**Accessibility is not a later pass.** Every text/background pair on the page was
measured against WCAG AA in both themes; two light-theme tokens (`--pk-ink-faint`
and `--pk-whatsapp`) were darkened because they failed at 3.79 and 4.22. Re-measure
if you touch them.

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
