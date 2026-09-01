/**
 * Panwar Knitwear — single source of truth.
 *
 * Every business fact published on the site lives here. Nothing downstream
 * hardcodes a fact. If a value is not in this file, it is not published.
 *
 * Sources, both read 31 Aug 2026:
 *   A = panwarknitwear.com (their own site)
 *   B = indiamart.com/panwar-knitwear (storefront + profile fact sheet)
 *
 * Every fact below carries its source in a comment. Anything unsourced is a bug.
 *
 * DELIBERATELY ABSENT — do not add without a decision:
 *   - GST number. Only the masked `03**********1ZP` is public (B). A partial
 *     GST is worse than none.
 *   - The IndiaMART proxy phone. It routes through IndiaMART, it is not theirs.
 *   - Prices. B publishes per-piece figures. Per-piece reads retail, undercuts a
 *     bulk position and goes stale.
 *   - Every leadership name except the founder. A and B conflict (see `about`).
 *   - MOQ, lead times, capacity, certifications, email, street address. Genuinely
 *     unpublished by either source. Tracked in `todoConfirmWithClient` below.
 */

/* ------------------------------------------------------------------ company */

export const company = {
  name: 'Panwar Knitwear',
  // A, B. City only — the street address is not published by either source.
  city: 'Ludhiana',
  state: 'Punjab',
  country: 'India',
  established: 2016, // B — "Incepted in the year 2016"
  gstRegisteredSince: 2017, // B — factsheet "GST Registration Date: 2017"
  legalStatus: 'Sole proprietorship', // B — "Legal Status of Firm: Proprietorship"
  natureOfBusiness: 'Manufacturer', // B
  // B — factsheet "Additional Business". Kept because it tells a buyer they can
  // buy direct rather than through a distributor.
  alsoTrading: ['Wholesale', 'Retail'],
  employees: '26–50', // B — "Total Number of Employees: 26 to 50 People"
  shipment: 'By road', // B — Packaging/Payment and Shipment Details
  shipmentReach: 'Bulk orders across India', // A
  paymentModes: ['Cash', 'Card', 'Cheque', 'DD', 'Online'], // B
  // B — HSN codes on their listings. Published because a buyer's purchase or
  // customs team will ask for them, and no competitor site bothers to show them.
  hsnCodes: ['61151000', '61149090', '61059090'],
} as const;

/* ---------------------------------------------------------------- contact */

/**
 * A — all three published on their own homepage. The IndiaMART number is a proxy
 * line and is deliberately excluded.
 *
 * `e164` is digits-only with country code, for `tel:` and `wa.me/`.
 */
export const phones = [
  { display: '+91 98760 45457', e164: '919876045457' },
  { display: '+91 98157 03769', e164: '919815703769' },
  { display: '+91 99999 82998', e164: '919999982998' },
] as const;

export const primaryPhone = phones[0];

/** Message pre-filled into WhatsApp when a buyer taps through without the form. */
export const whatsappDefaultMessage =
  'Hello Panwar Knitwear — I would like to enquire about a bulk order.';

export function telHref(e164: string) {
  return `tel:+${e164}`;
}

export function whatsappHref(e164: string, message: string = whatsappDefaultMessage) {
  return `https://wa.me/${e164}?text=${encodeURIComponent(message)}`;
}

/* ------------------------------------------------------------------ brands */

export const brands = {
  zonixa: {
    name: 'ZONIXA',
    scope: 'Top wear', // A, B
    // A. Verified 1 Sep 2026: 200, valid Let's Encrypt certificate.
    url: 'https://zonixa.com' as string | null,
  },
  msp: {
    name: 'MSP Sports',
    scope: 'Bottom wear', // A, B
    /**
     * NOT LINKED. A links to https://mspsports.in, but on 1 Sep 2026 that host
     * serves a certificate issued for `kayanah.com` which expired 4 Oct 2023.
     * Every browser shows a full-page "your connection is not private"
     * interstitial before the site loads.
     *
     * Rule 9 is about not sending a buyer somewhere broken, and this page is the
     * one asking them to trust an unfamiliar supplier — walking them into a
     * security warning does more damage than omitting the link. Restore this the
     * day the certificate is fixed; the link renders automatically when it is
     * no longer null.
     */
    url: null as string | null,
    // B — IndiaMART product titles read "…from MSP Sports, a brand of Panwar Knitwear"
    relationshipNote: 'A brand of Panwar Knitwear',
  },
} as const;

/* --------------------------------------------------------------- listings */

/**
 * B — live category counts from the IndiaMART storefront, read 31 Aug 2026.
 * These are counts of published listings, not capacity or catalogue size. The
 * copy must not imply otherwise.
 */
export const listingCounts = [
  { category: "Men's T-shirts", count: 19 },
  { category: 'Sweatshirts', count: 9 },
  { category: "Men's & boys' lowers", count: 8 },
  { category: "Men's half-sleeve tees", count: 7 },
  { category: "Boys' lowers", count: 6 },
  { category: "Men's shorts", count: 5 },
  { category: "Men's round-neck tees", count: 4 },
  { category: "Men's lowers", count: 3 },
] as const;

export const listingCountsReadOn = '31 August 2026';

/* ------------------------------------------------------------------ garments */

/** Garment types, by brand. A and B. Used as plain named lists a buyer can quote. */
export const garmentTypes = {
  zonixa: ['T-shirts', 'Half-sleeve tees', 'Round-neck tees', 'Polo / ben collar', 'Sweatshirts', 'Hoodies', 'Zip hoodies'],
  msp: ['Lowers', 'Track pants', 'Nikkar', 'Capri', 'Shorts', 'Boxers', 'Bermudas'],
  boys: ['Lowers', 'Track pants', 'Joggers'],
} as const;

/* ------------------------------------------------------------------ fabrics */

/**
 * A — the eight named on their own site. This is the USP: eight knitted fabrics
 * from one supplier, so a buyer can name the fabric rather than describe it.
 *
 * `alsoListedAs` records where B corroborates the same fabric under a different
 * trade name, so a buyer searching IndiaMART's wording still finds a match.
 * Every `note` below is a plain restatement of the fabric name — no invented
 * GSM, no invented performance claim.
 */
export const fabrics = [
  { name: 'Spun Fleece', alsoListedAs: 'Fleece', use: 'Sweatshirts, hoodies' },
  { name: 'Dry Fit', alsoListedAs: 'Dri-Fit, Polyester Dry Fit', use: 'Tees, track pants' },
  { name: 'Honeycomb Lycra', alsoListedAs: 'Lycra', use: 'Tees, polos' },
  { name: '100% Cotton', alsoListedAs: 'Cotton, PC Cotton, Hosiery', use: 'Tees, lowers' },
  { name: 'Cotton Lycra', alsoListedAs: 'Cotton Lycra', use: 'Tees, lowers' },
  { name: 'NS Bonded', alsoListedAs: null, use: 'Winter wear' },
  { name: 'Russian Fleece', alsoListedAs: 'Matty Fleece', use: 'Sweatshirts, hoodies' },
  { name: 'Sherpa', alsoListedAs: null, use: 'Winter wear' },
] as const;

/* ------------------------------------------------------------------- trust */

/** B — IndiaMART's own rating widget. Both figures published together, always. */
export const rating = { score: '4.1', outOf: '5', reviews: 8, source: 'IndiaMART' } as const;

/**
 * A — the three directory listings their own site links to. These are what an
 * unfamiliar buyer checks before sending money, so they are given real estate
 * rather than being buried in a footer icon row.
 */
export const listings = [
  {
    name: 'IndiaMART',
    href: 'https://www.indiamart.com/panwar-knitwear',
    what: 'Verified storefront, full product range and category counts',
  },
  {
    name: 'JustDial',
    href: 'https://jsdl.in/DT-40JPFSTDR23',
    what: 'Local business listing',
  },
  {
    name: 'Google Maps',
    href: 'https://maps.app.goo.gl/rrg4VPdpZcRvZTQZ6',
    what: 'Ludhiana location and reviews',
  },
] as const;

/** A — their own social and brand links. */
export const socials = [
  { name: 'Instagram', handle: '@panwarknitwear', href: 'https://www.instagram.com/panwarknitwear' },
] as const;

/* ------------------------------------------------------------------- about */

/**
 * RULE 3. Publish the founder and nothing more.
 *
 * A says: founded by Mohar Singh Panwar, with Prabhu Panwar and Bhala Ram Panwar
 * as co-founder CEOs.
 * B says: Company CEO "M Singh", Owner "Mr. Om Prakash".
 *
 * Om Prakash appears nowhere on their own site; the co-founders appear nowhere on
 * IndiaMART. The only name both sources support is the founder. Printing either
 * full list as settled would publish a claim one of their own sources contradicts.
 */
export const leadership = [{ name: 'Mohar Singh Panwar', role: 'Founder' }] as const;

/* ------------------------------------------------------- unpublished facts */

/**
 * Facts a bulk buyer will ask for that neither source publishes. Listed here so
 * the gap is visible and tracked rather than silently invented.
 */
export const todoConfirmWithClient = [
  'Minimum order quantity, per style and per colour',
  'Lead time from confirmed order to dispatch',
  'Monthly production capacity, in pieces',
  'Certifications, if any',
  'A monitored email address for enquiries',
  'Full street address of the Ludhiana unit',
  'Size ranges offered per garment type',
  'Whether they accept buyer-supplied artwork and labels (private label)',
  'mspsports.in TLS certificate — expired Oct 2023 and issued for another domain, so the brand site is currently unlinkable',
] as const;

/* ---------------------------------------------------------------- metadata */

export const meta = {
  title: 'Panwar Knitwear — knitted top wear and bottom wear manufacturer, Ludhiana',
  description:
    'Ludhiana knitwear manufacturer supplying bulk orders across India since 2016. Tops and bottoms from one supplier under two in-house brands, ZONIXA and MSP Sports, in eight knitted fabrics.',
  sourcesReadOn: '31 August 2026',
} as const;

/* ---------------------------------------------------------------- products */

import type { ImageMetadata } from 'astro';

// ZONIXA — photographed by the client, published on panwarknitwear.com/img/ (A).
import zRoundNeckHoodies from '../assets/zonixa/round-neck-hoodies-logo.jpg';
import zTwoThreadHoodie from '../assets/zonixa/two-thread-fleece-hoodie.jpg';
import zChestPrintHoodies from '../assets/zonixa/hoodies-chest-print.jpg';
import zBenCollarTees from '../assets/zonixa/dry-fit-ben-collar-tees.jpg';
import zZipHoodies from '../assets/zonixa/zip-hoodies.jpg';
// ZONIXA — published on their IndiaMART storefront (B).
import zMattyFleece from '../assets/zonixa/matty-fleece-sweatshirt.jpg';
import zRoundNeckTee from '../assets/zonixa/round-neck-tshirt.jpg';
import zStretchTee from '../assets/zonixa/stretchable-tshirt.jpg';

// MSP Sports — published on their IndiaMART storefront (B).
import mPknitLower from '../assets/msp/pknit-fancy-lower.jpg';
import mFancyBeltLower from '../assets/msp/fancy-belt-both-side-zip-lower.jpg';
import mCottonLower from '../assets/msp/cotton-mens-lower.jpg';
import mShorts from '../assets/msp/fancy-men-shorts.jpg';
import mNikkar from '../assets/msp/basic-nikkar-one-side-zip.jpg';
import mTrackPants from '../assets/msp/men-track-pants.jpg';
import mDriFitLower from '../assets/msp/mens-dri-fit-lower.jpg';

// Boys' wear — IndiaMART "Boys Lower" category (B).
import bPochiLower from '../assets/boys/pochi-both-side-zip-lower.jpg';
import bDesignerLower from '../assets/boys/designer-boys-lower.jpg';
import bBoysDesigner from '../assets/boys/boys-designer-lower.jpg';
import bBoysCasual from '../assets/boys/boys-casual-lower.jpg';
import bBoysPrinted from '../assets/boys/boys-printed-regular-fit-lower.jpg';

export type Product = {
  /** The client's own listing title, from A or B. Never rewritten. */
  name: string;
  image: ImageMetadata;
  /** Written only from what is visible in the frame. Never from image alt text. */
  alt: string;
  /** Source of the photograph. */
  source: 'A' | 'B';
  /** True where the photo is a catalogue sheet with text printed into it. */
  catalogueSheet?: boolean;
};

/**
 * Every photograph below was downloaded and looked at before being captioned.
 *
 * This matters: IndiaMART's own alt text is unreliable. The image filed under
 * "Mens Cotton T Shirt" is a photograph of a navy lower — the filename
 * (`stylish-printed-men-lower`) was right and the alt attribute was wrong. Alt
 * text from either source is therefore not trusted as a caption. `name` is the
 * client's listing title; `alt` describes what is actually in the frame.
 *
 * Images are served from `src/assets`, not hotlinked. Both origins answer today,
 * but panwarknitwear.com returns 444 to a HEAD request, which is the sort of
 * server that breaks a hotlink without warning. Self-hosting also lets Astro emit
 * resized WebP, which matters on the phone connections these buyers arrive on.
 */
export const zonixaProducts: readonly Product[] = [
  {
    name: 'Heavy 320 GSM Round Neck Hoodies With Logo',
    image: zRoundNeckHoodies,
    alt: 'Stone-grey ZONIXA hoodie laid flat beside five folded colourways — green, black, blue, pink and brown — with a branded ZONIXA polybag.',
    source: 'A',
  },
  {
    name: '320 GSM Heavy Round Neck Hoodies with Chest Print',
    image: zChestPrintHoodies,
    alt: 'Blue ZONIXA hoodie with an NYC chest print, beside five folded colourways of the same style.',
    source: 'A',
  },
  {
    name: '320 GSM Heavy Zip Hoodies',
    image: zZipHoodies,
    alt: 'Grey ZONIXA zip-through hoodie with hangtag, above five folded colourways including green, black, coral, blue and navy.',
    source: 'A',
  },
  {
    name: 'Two Thread Fleece Round Neck Hoodies',
    image: zTwoThreadHoodie,
    alt: 'Navy ZONIXA hooded sweatshirt laid flat with its branded hangtag attached.',
    source: 'A',
  },
  {
    name: 'Dry Fit Ben Collar Half Sleeve T-Shirts',
    image: zBenCollarTees,
    alt: 'Black and white ZONIXA ben-collar half-sleeve tee beside five folded colourways and stacked ZONIXA cartons.',
    source: 'A',
  },
  {
    name: 'ZONIXA Matty Fleece Sweatshirt',
    image: zMattyFleece,
    alt: 'Six printed round-neck sweatshirts in olive, mustard, maroon, pink, grey and black, laid out in two rows.',
    source: 'B',
    catalogueSheet: true,
  },
  {
    name: 'ZONIXA Men Round Neck T-Shirt',
    image: zRoundNeckTee,
    alt: 'Mustard yellow round-neck t-shirt with a small ZONIXA chest logo, worn by a model.',
    source: 'B',
  },
  {
    name: "ZONIXA Men's Stretchable T-Shirts",
    image: zStretchTee,
    alt: 'White round-neck t-shirt with a small ZONIXA chest logo, worn by a model.',
    source: 'B',
  },
];

export const mspProducts: readonly Product[] = [
  {
    name: 'MSP Sports P-Knit Fancy Lower With Zip and Back Pocket',
    image: mPknitLower,
    alt: 'Seven lowers in navy, black, grey, charcoal, olive and bottle green laid in a row, with MSP Sports branded polybags and cartons and detail insets of the back pocket and side zip.',
    source: 'B',
  },
  {
    name: 'Fancy Belt Both Side Zip Lower',
    image: mFancyBeltLower,
    alt: 'Six lowers in black, olive, grey, charcoal and navy laid flat beside an MSP Sports polybag and a branded carton.',
    source: 'B',
  },
  {
    name: "Cotton Men's Lower",
    image: mCottonLower,
    alt: 'Navy cotton lower with a contrast side piping, worn by a model.',
    source: 'B',
  },
  {
    name: 'Fancy Men Shorts',
    image: mShorts,
    alt: 'Navy knitted shorts with drawcord and a printed side panel, laid flat with the tag still attached.',
    source: 'B',
  },
  {
    name: 'Basic Nikkar One Side Zip',
    image: mNikkar,
    alt: 'MSP Sports catalogue sheet showing knitted nikkar in navy, olive, grey and teal worn by a model.',
    source: 'B',
    catalogueSheet: true,
  },
  {
    name: 'Men Track Pants',
    image: mTrackPants,
    alt: 'MSP Sports catalogue sheet showing track pants in navy, grey and black worn by a model.',
    source: 'B',
    catalogueSheet: true,
  },
  {
    name: 'Mens Dri-Fit Lower',
    image: mDriFitLower,
    alt: 'MSP Sports catalogue sheet showing dry-fit lowers in blue, navy, grey and black worn by a model.',
    source: 'B',
    catalogueSheet: true,
  },
];

export const boysProducts: readonly Product[] = [
  {
    name: 'Basic All Over Print Pochi Both Side Zip Lower',
    image: bPochiLower,
    alt: 'Six printed lowers in black, pale blue, charcoal, blue and navy laid in a row with an MSP Sports polybag and carton.',
    source: 'B',
  },
  {
    name: 'Designer Boys Lower',
    image: bDesignerLower,
    alt: 'Six cuffed joggers in olive, sand, navy, blue, grey and black, each with a contrast side piping and a small chest badge.',
    source: 'B',
  },
  {
    name: 'Boys Designer Lower',
    image: bBoysDesigner,
    alt: 'Black cuffed jogger with a gold print and its tag attached, laid flat.',
    source: 'B',
  },
  {
    name: 'Boys Casual Lower',
    image: bBoysCasual,
    alt: 'Dark grey track pant with yellow and white side stripes, laid flat.',
    source: 'B',
  },
  {
    name: 'Boys Printed Regular Fit Lower',
    image: bBoysPrinted,
    alt: 'Grey all-over printed lower with a drawcord waist, worn by a model.',
    source: 'B',
  },
];
