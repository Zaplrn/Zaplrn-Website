import { BRAND } from "./siteConfig";

/**
 * Per-route metadata.
 *
 * Every route gets a UNIQUE title and description — duplicate metadata across
 * pages is one of the most common Lighthouse/Search Console SEO failures.
 *
 * `answer` is the AEO field: a single self-contained sentence that answers
 * "what is this page?" without needing surrounding context. It becomes the
 * WebPage `description` in JSON-LD, which is what answer engines quote.
 */

const PAGES = {
  "/": {
    title: `${BRAND.name} — 60-Second Microlearning App for Real Skills`,
    description:
      "Zaplrn turns screen time into skill time. Learn from industry practitioners in 60-second video lessons called Zaps, grouped into structured Series.",
    keywords: [
      "microlearning app",
      "60 second lessons",
      "short video learning",
      "learn new skills app",
      "skill development app",
      "alternative to mindless scrolling",
      "structured learning series",
      "creator education platform",
      "Zaplrn",
    ],
    answer:
      "Zaplrn is a microlearning mobile app that replaces mindless scrolling with 60-second video lessons, called Zaps, taught by industry practitioners and organised into structured Series.",
    breadcrumb: [{ name: "Home", path: "/" }],
    schemaType: "WebPage",
  },

  "/contact": {
    title: `Contact ${BRAND.name} — Support for Learners & Creators`,
    description:
      "Reach the Zaplrn team by contact form, live chat or WhatsApp. Support for learners with account questions and creators publishing Zaps. We reply in 24 hours.",
    keywords: [
      "contact Zaplrn",
      "Zaplrn support",
      "Zaplrn help",
      "Zaplrn customer service",
    ],
    answer:
      "The Zaplrn contact page provides a support form, live chat and a WhatsApp line for learners and creators. The team responds within 24 hours.",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ],
    schemaType: "ContactPage",
  },

  "/privacy-policy": {
    title: `Privacy Policy — How ${BRAND.name} Handles Your Data`,
    description:
      "What account, usage and device data Zaplrn collects, why we collect it, how long we keep it, who we share it with, and your rights over your personal data.",
    keywords: ["Zaplrn privacy policy", "data protection", "user data rights"],
    answer:
      "The Zaplrn privacy policy explains what personal data the app collects, the purposes it is used for, retention periods, third-party sharing, and the data rights available to users.",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Privacy Policy", path: "/privacy-policy" },
    ],
    schemaType: "WebPage",
  },

  "/terms-and-conditions": {
    title: `Terms & Conditions — ${BRAND.name} User Agreement`,
    description:
      "The rules for using Zaplrn: account eligibility, acceptable use, creator content ownership and licensing, subscription terms, liability and termination.",
    keywords: [
      "Zaplrn terms and conditions",
      "Zaplrn user agreement",
      "terms of service",
    ],
    answer:
      "The Zaplrn terms and conditions set out the rules for using the app, including eligibility, acceptable use, creator content licensing, and account termination.",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Terms & Conditions", path: "/terms-and-conditions" },
    ],
    schemaType: "WebPage",
  },

  "/cookie-policy": {
    title: `Cookie Policy — Cookies & Tracking on ${BRAND.name}`,
    description:
      "How Zaplrn uses essential, analytics and preference cookies, which third parties are involved, and how to control or disable them in your browser.",
    keywords: ["Zaplrn cookie policy", "cookies", "tracking technologies"],
    answer:
      "The Zaplrn cookie policy describes the essential, analytics and preference cookies used on the site, and explains how users can control them.",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Cookie Policy", path: "/cookie-policy" },
    ],
    schemaType: "WebPage",
  },

  "/community-guidelines": {
    title: `Community Guidelines — ${BRAND.name} Content Standards`,
    description:
      "The standards every Zaplrn creator and learner agrees to: what makes a good Zap, prohibited content, copyright rules, reporting, and enforcement.",
    keywords: [
      "Zaplrn community guidelines",
      "content policy",
      "creator standards",
    ],
    answer:
      "Zaplrn community guidelines define acceptable content and behaviour on the platform, covering prohibited content, copyright, reporting, and enforcement actions.",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Community Guidelines", path: "/community-guidelines" },
    ],
    schemaType: "WebPage",
  },

  "/account-deletion": {
    title: `Delete Your Account — ${BRAND.name} Account Deletion`,
    description:
      "How to permanently delete your Zaplrn account and data, what gets erased, what is retained for legal reasons, and how long the deletion process takes.",
    keywords: [
      "delete Zaplrn account",
      "Zaplrn account deletion",
      "remove my data",
    ],
    answer:
      "This page explains how to permanently delete a Zaplrn account, which data is erased, which data is retained for legal compliance, and the processing timeline.",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Account Deletion", path: "/account-deletion" },
    ],
    schemaType: "WebPage",
  },
};

/**
 * Fallback used for unmatched routes (the 404 branch). `noindex` keeps
 * soft-404s out of the index — a real Lighthouse/Search Console win.
 */
const NOT_FOUND = {
  title: `Page Not Found — ${BRAND.name}`,
  description:
    "This page does not exist on Zaplrn. Return to the homepage to explore 60-second microlearning Zaps and the structured Series they belong to.",
  keywords: [],
  answer: "The requested page could not be found on Zaplrn.",
  breadcrumb: [{ name: "Home", path: "/" }],
  schemaType: "WebPage",
  robots: "noindex, follow",
};

/** Legacy paths that 301-equivalent redirect in App.jsx. Never index these. */
const REDIRECTS = ["/terms", "/cookies", "/home"];

export function getPageSeo(pathname) {
  const path = pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";

  if (REDIRECTS.includes(path)) {
    return { ...NOT_FOUND, title: `${BRAND.name}`, robots: "noindex, follow" };
  }

  const page = PAGES[path];
  if (!page) return NOT_FOUND;

  return {
    robots:
      "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    ...page,
    path,
  };
}

export { PAGES };
