import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BRAND, TWITTER_HANDLE, absoluteUrl } from "./siteConfig";
import { getPageSeo } from "./pageSeo";
import { buildGraph } from "./schema";

/**
 * Runtime <head> manager.
 *
 * Renders NOTHING (returns null) — it only mutates document.head, so it cannot
 * affect layout, styling or paint.
 *
 * Why hand-rolled instead of react-helmet: this needs ~80 lines, adds no
 * dependency, and React 19 has no built-in <head> hoisting for the metadata
 * shapes used here (JSON-LD @graph swapping on route change).
 *
 * IMPORTANT — it UPSERTS rather than appends. index.html already ships static
 * fallback tags so that non-JS crawlers (GPTBot, ClaudeBot, PerplexityBot, and
 * the Facebook/WhatsApp/LinkedIn/Slack link scrapers) see valid metadata. If
 * this component appended, every page would end up with two <meta
 * name="description"> tags — a duplicate-metadata SEO error. Instead it finds
 * the existing tag by selector and rewrites its content in place.
 */

function upsertMeta(selectorAttr, key, content) {
  if (!content) return;
  const selector = `meta[${selectorAttr}="${key}"]`;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(selectorAttr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

const JSONLD_ID = "seo-route-jsonld";

function upsertJsonLd(graph) {
  let el = document.getElementById(JSONLD_ID);
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = JSONLD_ID;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(graph);
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getPageSeo(pathname);
    const canonical = absoluteUrl(seo.path || pathname);

    document.title = seo.title;
    document.documentElement.lang = "en";

    // ── Core ────────────────────────────────────────────────────────────────
    upsertMeta("name", "description", seo.description);
    upsertMeta("name", "robots", seo.robots);
    upsertMeta("name", "googlebot", seo.robots);
    if (seo.keywords?.length) {
      upsertMeta("name", "keywords", seo.keywords.join(", "));
    }
    upsertMeta("name", "author", BRAND.name);
    upsertMeta("name", "application-name", BRAND.name);

    // ── Canonical ───────────────────────────────────────────────────────────
    // Exactly one canonical per page, always absolute, always self-referencing.
    upsertLink("canonical", canonical);

    // ── Open Graph ──────────────────────────────────────────────────────────
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", BRAND.name);
    upsertMeta("property", "og:locale", "en_US");
    upsertMeta("property", "og:title", seo.title);
    upsertMeta("property", "og:description", seo.description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", BRAND.ogImage);
    upsertMeta("property", "og:image:alt", `${BRAND.name} — ${BRAND.tagline}`);

    // ── Twitter / X ─────────────────────────────────────────────────────────
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:site", TWITTER_HANDLE);
    upsertMeta("name", "twitter:creator", TWITTER_HANDLE);
    upsertMeta("name", "twitter:title", seo.title);
    upsertMeta("name", "twitter:description", seo.description);
    upsertMeta("name", "twitter:image", BRAND.ogImage);
    upsertMeta("name", "twitter:image:alt", `${BRAND.name} — ${BRAND.tagline}`);

    // ── Structured data ─────────────────────────────────────────────────────
    upsertJsonLd(buildGraph({ ...seo, path: seo.path || pathname }));
  }, [pathname]);

  return null;
}
