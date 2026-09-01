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
- **Photos labelled as catalogue sheets are marked as such.** Some of the real MSP
  Sports imagery is a printed catalogue sheet rather than a clean product shot.
  Using them is right — they are real — but pretending they are studio photography
  is not, so they carry a small "catalogue sheet" tag.
- **Listing counts are labelled as listings, not capacity.** Nineteen t-shirt
  listings is not a production figure and the page does not let it read like one.

## Build quality

- The old page pulled jQuery, the Slick carousel and Tailwind 2 from three CDNs to
  render a static page. The new one ships **zero JavaScript bundles** — one small
  inline script for the WhatsApp composer, and nothing else.
- Images were hotlinked; they are now self-hosted and served as resized WebP, so a
  buyer on a phone connection is not downloading 250KB JPEGs. No external requests
  at all, fonts included.
- Mobile-first, and checked: no horizontal scroll at 375, 768 or 1280px, every tap
  target at least 44px, sticky Call · WhatsApp bar on narrow screens, and text
  contrast meeting WCAG AA in both light and dark themes.

## Still missing, and only the client can answer

Minimum order quantity, lead time, monthly capacity, certifications, a monitored
email address, the street address, size ranges, and whether they accept
buyer-supplied labels. These are the first questions a serious bulk buyer asks. They
are unpublished on both sources, so the page omits them rather than guessing — they
are tracked in `src/data/site.ts` under `todoConfirmWithClient`.
