# What was wrong, and what changed

Homepage rebuild for Panwar Knitwear. Everything below is checkable against the
live `panwarknitwear.com` and their IndiaMART storefront, both read 31 Aug 2026.

---

## The one that matters most

**Stock photos were captioned as their own product.** The bottom wear section
showed five Unsplash stock images under the heading "Product Samples". Real
photographs of the actual garments — MSP Sports lowers in branded polybags and
cartons — were sitting on their own IndiaMART storefront, one click away. The new
page uses 20 real photographs and no stock imagery at all.

## What a buyer could not find out

- **The homepage never said what the company does.** It opened with two brand names
  and a sentence about comfort and style. The new hero says it in one line: knitted
  top wear and bottom wear, two in-house brands, eight fabrics, one supplier in
  Ludhiana.
- **Every credential they have was missing.** Trading since 2016, GST-registered
  2017, 26–50 employees, 4.1/5 from 8 reviews, five payment modes, road delivery
  nationwide — none of it appeared anywhere. It is now a section of its own, with
  the JustDial, IndiaMART and Google Maps listings linked and labelled with what
  each one confirms.
- **Boys' wear was omitted entirely.** IndiaMART lists it as a category with six
  products and real photography. It now has its own section, which widens the
  addressable buyer at no cost.
- **The eight fabrics were buried in a paragraph.** They are the actual
  differentiator, so they are now a table a buyer can order from by name — with the
  alternative trade names IndiaMART uses, so a buyer who searched there recognises
  them here.

## The form that pretended to work

The old contact form posted to `send_mail.php` and the page printed
`email@example.com` as the contact address. A buyer filling it in had no way of
knowing whether anything was sent.

There is now no form that sends. The three real phone numbers come first, each with
Call and WhatsApp, and they work with scripting switched off. Below them, an
optional composer fills in a WhatsApp message — garment, fabric, quantity, notes —
and hands it to WhatsApp, where the buyer reads it before sending. With JavaScript
disabled the composer is removed from the page rather than left inert.

## Two things I found that need the client

- **`mspsports.in` serves a broken certificate.** It presents a certificate issued
  for `kayanah.com` that expired 4 October 2023, so every browser shows a full-page
  "your connection is not private" warning. Their own site links to it. I have left
  the link off — walking a buyer into a security warning on the page that asks them
  to trust an unfamiliar supplier does more damage than omitting it. It restores
  automatically once the certificate is fixed. (`zonixa.com` is fine and is linked.)
- **Leadership is contradictory between their two sources.** Their site names Mohar
  Singh Panwar as founder with two co-founder CEOs; IndiaMART names a different CEO
  and a different owner. Printing either list as settled would publish something one
  of their own sources contradicts, so the page publishes the founder and stops.

## Judgement calls I made

- **No prices, though IndiaMART publishes them.** Per-piece figures read retail,
  undercut a bulk position and go stale.
- **IndiaMART's image captions are not trustworthy, so I checked every photo by
  eye.** The image filed there as "Mens Cotton T Shirt" is a photograph of a navy
  lower. Every caption on the new page describes what is actually in the frame.
- **Real is necessary but not sufficient.** Earlier passes used every real photo
  available — catalogue sheets with `ART NO. #3100` printed across them, and on-model
  shots on stark white that look like marketplace listings. Both are gone. The page
  now shows only flat-lays: the garment, its colourway range, its hangtags and its
  branded packaging. That is also the correct choice commercially, because it sells
  to the person placing the order rather than the person wearing the garment.
- **Two images on their IndiaMART storefront are AI-generated mockups, not
  photographs.** One shows two smiling models with luggage in a grey polo; another a
  tie-dye tee on a mannequin in a rendered room. Both carry a plain typeset "zonixa"
  rather than the embroidered badge on their real garments. They are not used, for
  the same reason the old site's Unsplash stock is not used.
- **Listing counts are labelled as listings, not capacity.** Nineteen t-shirt
  listings is not a production figure and the page does not let it read like one.

## Design and brand

- **Their own logo was not on their new homepage.** It is now, at full size, in the
  header and the footer. The artwork is a violet banner with its own gradient, so
  the header is built as that same gradient and the mark sits inside it rather than
  floating on white as a stray rectangle.
- **The brand colour was taken from the logo, not invented.** Sampling
  `transparent-logo.png` gives a violet ramp from `#3e0049` to `#71028f`. That runs
  the header, hero, capability strip, fabric table and footer. An earlier version of
  this page used a rust palette chosen from nothing; a colour that cannot be traced
  to a source is the wrong colour for a supplier's own site.
- **Half the available product photography was unusable and is not used.** Many
  IndiaMART images are catalogue sheets with marketing text printed into the picture
  — `ART NO. #3100`, `LIFE BEYOND limits`, `SIZE :- L, XL, XXL`. Three were dropped
  outright, two were cropped to remove the printed text, and three clean
  single-product shots were pulled from the secondary images on each listing to
  replace them. Every photograph on the page is now either a clean product shot or a
  flat-lay showing the branded packaging.
- **The hero is textured, not graded.** The background of the headline area is a
  faint knitted-stitch lattice over flat brand violet, drawn entirely in CSS. It
  replaced a diagonal gradient that washed out to its palest value exactly where the
  garment photographs sit. Using the material the company actually makes as the
  texture of its own page is the kind of detail that separates a considered site from
  a template, and it adds nothing to the download.
- **The page moves, without shipping a framework.** Sections rise as they enter,
  product cards lift and their photograph creeps in on hover, the hero settles on
  load, and the product rails snap-scroll on a phone — replacing the old site's
  jQuery carousel. All of it is CSS; the JavaScript budget is unchanged at one
  inline script for the WhatsApp composer, and every effect respects
  `prefers-reduced-motion`.

## Getting to a range in one click

The old homepage opened with two brand names and no way to act on them. The rebuild
treats "which of your ranges do I need" as the first decision a buyer makes, so
there are three routes to every range from anywhere on the page: the desktop nav, a
scrollable pill rail on phones, and a set of range cards directly under the headline
figures. Each card shows a photograph, the garment types and how many products are
published in that category — all read from the same data file as the section it
points at, so they cannot fall out of step. Clicking one flashes a brand-coloured
edge on the destination so the jump visibly lands.

## Two things carried back from the old site, and one that was not

- **Restored:** the LinkedIn and Quora links from the old "Learn More" block, which
  the first pass dropped. LinkedIn returns 200. Quora returns 403 to a scripted
  request, which is its normal bot response rather than evidence the page is gone —
  it is linked, and flagged in `site.ts` as asserted rather than verified.
- **Not restored:** the three "About" images. `who-we-are.jpg` and
  `our-leadership.jpg` are stock photographs of silhouetted businesspeople in an
  office, and `our-craftsmanship.jpg` is generic tailoring stock. Putting those back
  would repeat the exact failure this redesign is built to criticise.

## Build quality

- The old page pulled jQuery, the Slick carousel and Tailwind 2 from three CDNs to
  render a static page. The new one ships **zero JavaScript bundles** — one small
  inline script for the WhatsApp composer, and nothing else.
- Images were hotlinked; they are now self-hosted and served as resized WebP, so a
  buyer on a phone connection is not downloading 250KB JPEGs. No external requests
  at all, fonts included.
- Mobile-first, and checked: no horizontal scroll at 375, 768 or 1280px, every tap
  target at least 44px, sticky Call · WhatsApp bar on narrow screens, and all 16
  measured text/background pairs meeting WCAG AA in both light and dark themes.
- One bug found and fixed by measurement rather than by eye: `overflow-x: hidden` on
  `<body>` turned the body into a scroll container, which broke the scroll-driven
  reveals and left content sitting in the viewport at `opacity: 0`. The page now
  uses `overflow-x: clip` on the root, and the reveal starts at 45% opacity instead
  of 0 so that no content can ever be hidden behind an animation that fails to run.

## Still missing, and only the client can answer

Minimum order quantity, lead time, monthly capacity, certifications, a monitored
email address, the street address, size ranges, and whether they accept
buyer-supplied labels. These are the first questions a serious bulk buyer asks. They
are unpublished on both sources, so the page omits them rather than guessing — they
are tracked in `src/data/site.ts` under `todoConfirmWithClient`.
