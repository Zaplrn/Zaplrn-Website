/**
 * Single source of truth for every SEO / AEO / GEO value on the site.
 *
 * Change a value here and it propagates to:
 *   - runtime <head> tags        (src/seo/Seo.jsx)
 *   - per-route metadata          (src/seo/pageSeo.js)
 *   - JSON-LD structured data     (src/seo/schema.js)
 *
 * NOTE: index.html, public/robots.txt, public/sitemap.xml and public/llms.txt
 * are static files served before JS runs — they carry hardcoded copies of
 * SITE_URL. If SITE_URL changes, update those four files too.
 */

export const SITE_URL = "https://zaplrn.com";

export const BRAND = {
  name: "Zaplrn",
  legalName: "Zaplrn",
  tagline: "Better Than Mindless Scrolling",
  // One-sentence entity definition. Used verbatim in meta description,
  // Organization schema and llms.txt so every surface agrees.
  summary:
    "Zaplrn is a microlearning app where every lesson is a 60-second “Zap” — a short, structured video that teaches one concept, organised into curated Series by industry practitioners.",
  category: "Microlearning / EdTech mobile application",
  foundingLocation: "India",
  logo: `${SITE_URL}/favicon.png`,
  // ⚠️ TODO — falls back to the favicon because no dedicated share image
  // exists yet. Social cards will render it square/cropped. Add a real
  // 1200×630 PNG at public/og-image.png and switch this to
  // `${SITE_URL}/og-image.png`. Pointing at a missing file would break the
  // preview card entirely, so the working fallback is used until then.
  ogImage: `${SITE_URL}/favicon.png`,
};

/**
 * Social profiles. These feed the Organization `sameAs` array, which search
 * engines and LLMs use to resolve the Zaplrn entity across the web.
 *
 * ⚠️ VERIFY BEFORE DEPLOY — only `instagram` and `whatsapp` were confirmed
 * from the existing codebase (src/pages/contactUs.jsx). The facebook,
 * linkedin and twitter URLs below are INFERRED from the brand name. A
 * `sameAs` entry pointing at a non-existent or someone else's profile
 * actively damages entity resolution. Correct or delete them.
 */
export const SOCIAL = {
  instagram: "https://www.instagram.com/zaplrn.app", // ✅ confirmed in code
  whatsapp:
    "https://wa.me/918308111736?text=Hello%2C%20I%20want%20to%20talk%20about%20Zaplrn", // ✅ confirmed in code
  facebook: "https://www.facebook.com/zaplrn", // ⚠️ inferred — verify
  linkedin: "https://www.linkedin.com/company/zaplrn", // ⚠️ inferred — verify
  twitter: "https://x.com/zaplrn", // ⚠️ inferred — verify
};

/** Twitter @handle for the twitter:site / twitter:creator card tags. */
export const TWITTER_HANDLE = "@zaplrn"; // ⚠️ inferred — verify

/**
 * Only real, resolvable profile URLs belong in `sameAs`. Ordered most- to
 * least-authoritative, which is the convention search engines expect.
 */
export const SAME_AS = [
  SOCIAL.instagram,
  SOCIAL.linkedin,
  SOCIAL.twitter,
  SOCIAL.facebook,
];

export const CONTACT = {
  // Derived from the wa.me link already present in contactUs.jsx.
  phone: "+918308111736",
  contactPage: `${SITE_URL}/contact`,
  supportChat: "https://tawk.to/chat/69f072268cab611c324fe080/1jn9jrqpv",
  areaServed: "Worldwide",
  availableLanguage: ["en"],
};

/** Absolute-URL helper. Guarantees no double slash and no trailing slash. */
export function absoluteUrl(path = "/") {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`.replace(
    /\/+$/,
    "",
  );
}
