import {
  SITE_URL,
  BRAND,
  SAME_AS,
  CONTACT,
  absoluteUrl,
} from "./siteConfig";

/**
 * Schema.org JSON-LD builders.
 *
 * Stable @id values matter: they let search engines and LLMs merge the
 * Organization/WebSite/WebPage nodes into one entity graph instead of treating
 * each page's markup as an unrelated island. Every node below is cross-linked
 * by @id rather than duplicated.
 *
 * DELIBERATELY OMITTED (see the recommendations in the handover notes):
 *   - SearchAction  — the site has no search endpoint. Declaring one that
 *                     404s is a false claim and forfeits the sitelinks
 *                     searchbox anyway.
 *   - LocalBusiness — requires a real postal address; Zaplrn has no public
 *                     storefront. Organization is the correct type here.
 *   - AggregateRating / Review — must never be fabricated.
 *   - BlogPosting / Article — no blog or article content exists yet.
 *   - Person — no named individuals are published on the site.
 *   - Offers on SoftwareApplication — app pricing is not yet public.
 */

export const ORG_ID = `${SITE_URL}/#organization`;
export const SITE_ID = `${SITE_URL}/#website`;
export const APP_ID = `${SITE_URL}/#app`;

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: BRAND.name,
    legalName: BRAND.legalName,
    url: SITE_URL,
    description: BRAND.summary,
    slogan: BRAND.tagline,
    foundingLocation: {
      "@type": "Place",
      name: BRAND.foundingLocation,
    },
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#logo`,
      url: BRAND.logo,
      contentUrl: BRAND.logo,
      caption: `${BRAND.name} logo`,
    },
    image: { "@id": `${SITE_URL}/#logo` },
    sameAs: SAME_AS,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        url: CONTACT.contactPage,
        telephone: CONTACT.phone,
        areaServed: CONTACT.areaServed,
        availableLanguage: CONTACT.availableLanguage,
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    url: SITE_URL,
    name: BRAND.name,
    description: BRAND.summary,
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

/**
 * The product entity. This is what an LLM reads to answer
 * "what does Zaplrn do?" — every feature below is drawn from real copy in
 * the landing page components, not invented.
 */
export function softwareApplicationSchema() {
  return {
    "@type": "SoftwareApplication",
    "@id": APP_ID,
    name: BRAND.name,
    applicationCategory: "EducationalApplication",
    applicationSubCategory: "Microlearning",
    operatingSystem: "Android, iOS",
    url: SITE_URL,
    description: BRAND.summary,
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
    audience: [
      {
        "@type": "Audience",
        audienceType: "Learners",
        description:
          "People who want to convert screen time into measurable skill progress through short, structured lessons.",
      },
      {
        "@type": "Audience",
        audienceType: "Creators",
        description:
          "Industry practitioners who want to turn their expertise into a structured curriculum rather than disposable content.",
      },
    ],
    featureList: [
      "60-second Zaps — each lesson teaches one concept in under a minute",
      "Structured Series — curated multi-lesson curricula that run from day one to done",
      "Goal-driven discovery by industry, including tech, business, finance and creative arts",
      "Integrated Mastery Chat for direct mentorship from the creator behind a Zap",
      "Skill-progress dashboard tracking Series completed and skills unlocked",
      "Dual-mode accounts — every user can both learn and teach without a second profile",
      "Smart notifications limited to followed Series updates and trusted creator posts",
      "Deep-dive creator analytics showing completion rates and where learners drop off",
    ],
  };
}

/**
 * Canonical FAQ knowledge base.
 *
 * ⚠️ Google's FAQPage guidelines require the question/answer pairs to also be
 * VISIBLE on the page. These answers are currently machine-only, so they serve
 * AEO/LLM extraction (Perplexity, ChatGPT Search, Claude, Gemini all read
 * JSON-LD) but should not be expected to produce Google FAQ rich results.
 * Adding a visible FAQ section is the recommended follow-up — it is a UI
 * change, so it was left out of this pass.
 */
export const FAQS = [
  {
    q: "What is Zaplrn?",
    a: "Zaplrn is a microlearning mobile app that replaces mindless scrolling with 60-second video lessons called Zaps. Each Zap teaches one concept, and Zaps are chained into structured Series taught by industry practitioners.",
  },
  {
    q: "What is a Zap on Zaplrn?",
    a: "A Zap is a single lesson capped at 60 seconds. The limit is deliberate: it forces creators to distil one concept into its highest-impact form, so a lesson fits between meetings, on a commute, or over coffee.",
  },
  {
    q: "How is Zaplrn different from social media short-video feeds?",
    a: "Three ways. Content is organised by intent and category rather than by an engagement algorithm, so there is no algorithm anxiety. Lessons are chained into structured Series instead of disconnected clips. And progress is measured on a skills dashboard, so watching converts into demonstrable learning.",
  },
  {
    q: "Who creates the content on Zaplrn?",
    a: "Industry practitioners, not influencers. Zaplrn is built for people who actually do the work they teach, and creators can be reached directly through the Integrated Mastery Chat.",
  },
  {
    q: "What subjects can you learn on Zaplrn?",
    a: "Zaplrn organises content into discovery ecosystems by industry, including technology, business, personal finance, and creative arts. Discovery is goal-driven, so the feed reflects the skills you are working toward.",
  },
  {
    q: "Can I be both a learner and a creator on Zaplrn?",
    a: "Yes. Zaplrn uses dual-mode accounts, so a single profile can both learn and teach. You do not need a separate creator account.",
  },
  {
    q: "How do creators benefit from publishing on Zaplrn?",
    a: "Creators build a structured curriculum rather than disposable content. They get deep-dive analytics on Series completion rates and where learners get stuck, an intentional-reach discovery engine, and a category-organised profile that works as a professional portfolio.",
  },
  {
    q: "Is Zaplrn available on Android and iOS?",
    a: "Zaplrn is being released for both Android and iOS. The Play Store and App Store listings are marked coming soon on the website.",
  },
  {
    q: "How do I delete my Zaplrn account?",
    a: "Account deletion instructions, including what data is erased, what is retained for legal compliance, and the processing timeline, are documented on the Zaplrn account deletion page.",
  },
  {
    q: "How do I contact Zaplrn support?",
    a: "Through the contact form on the Zaplrn contact page, the live chat widget, or the WhatsApp support line. The team replies within 24 hours.",
  },
];

export function faqSchema() {
  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: FAQS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function breadcrumbSchema(crumbs, pathname) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(pathname)}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function webPageSchema(seo) {
  const url = absoluteUrl(seo.path || "/");
  const isHome = (seo.path || "/") === "/";

  const node = {
    "@type": seo.schemaType || "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: seo.title,
    // The AEO field: a self-contained answer to "what is this page?"
    description: seo.answer || seo.description,
    isPartOf: { "@id": SITE_ID },
    about: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
    breadcrumb: { "@id": `${url}#breadcrumb` },
  };

  if (isHome) node.mainEntity = { "@id": APP_ID };
  if (seo.schemaType === "ContactPage") {
    node.significantLink = [CONTACT.contactPage];
  }

  return node;
}

/**
 * Builds the complete per-route @graph. One <script> tag, one graph — this is
 * strictly better than scattering several disconnected JSON-LD blocks, because
 * the @id cross-references resolve into a single entity.
 */
export function buildGraph(seo) {
  const graph = [
    organizationSchema(),
    websiteSchema(),
    webPageSchema(seo),
    breadcrumbSchema(seo.breadcrumb || [], seo.path || "/"),
  ];

  if ((seo.path || "/") === "/") {
    graph.push(softwareApplicationSchema(), faqSchema());
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
