import { SITE, SITE_URL, SOCIALS } from "./site";

export interface PageSeo {
  path: string;
  title: string;
  description: string;
}

// Per-route metadata. Titles are written to read well in a search result and in
// a browser tab; descriptions are the ~155 characters Google actually shows, so
// each one leads with the concrete outcome rather than a generic role summary.
export const PAGE_SEO = {
  home: {
    path: "/",
    title: `${SITE.name} — Product Designer`,
    description:
      "Product designer at B:Live turning complex B2B & B2C SaaS into interfaces people actually understand. Research-led, 0→1, end to end.",
  },
  about: {
    path: "/about",
    title: `About — ${SITE.name}`,
    description:
      "Product designer in Bangalore working on B2B and B2C EV mobility software at B:Live. Previously Salesken.ai. Research, systems, and 0→1 product design.",
  },
  ticketing: {
    path: "/ticketing",
    title: `Ticketing platform for B:Live — ${SITE.name}`,
    description:
      "Case study: replacing WhatsApp-and-spreadsheet support with a ticketing system that gives every issue one accountable owner. 70% faster resolution.",
  },
  ezy: {
    path: "/ezy",
    title: `EZY rider app redesign — ${SITE.name}`,
    description:
      "Case study: rebuilding an EV rider app 10,000+ riders had abandoned. Rider research, onboarding drop-off cut from 10/20 to 4/20, and payout visibility shipped.",
  },
  salesken: {
    path: "/salesken",
    title: `Salesken Co-Browser — ${SITE.name}`,
    description:
      "Case study: designing a real-time co-browsing and AI assist tool that gives sales reps something to say mid-call. Sole designer, 0→1, now used by 200+ businesses.",
  },
  playground: {
    path: "/playground",
    title: `Playground — ${SITE.name}`,
    description:
      "Visual experiments, motion studies and side projects from Avni Garg, product designer.",
  },
} as const satisfies Record<string, PageSeo>;

/** Every prerendered path, in sitemap order. */
export const ROUTE_PATHS = Object.values(PAGE_SEO).map((p) => p.path);

/**
 * schema.org Person — the structured record that lets search engines and AI
 * assistants state who Avni is, rather than inferring it from page text.
 */
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: SITE.role,
  email: SITE.email,
  url: SITE_URL,
  address: { "@type": "PostalAddress", addressLocality: "Bangalore", addressCountry: "IN" },
  worksFor: { "@type": "Organization", name: "B:Live", url: "https://www.blive.co.in" },
  knowsAbout: [
    "Product Design",
    "UX Research",
    "Design Systems",
    "B2B SaaS",
    "0 to 1 Product Design",
  ],
  sameAs: [SOCIALS.linkedin, SOCIALS.behance, SOCIALS.twitter, SOCIALS.instagram],
};

/** schema.org CreativeWork for a case study. */
export const caseStudyJsonLd = (seo: PageSeo, extra: Record<string, unknown> = {}) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: seo.title,
  headline: seo.title,
  description: seo.description,
  url: `${SITE_URL}${seo.path}`,
  author: { "@type": "Person", name: SITE.name, url: SITE_URL },
  creator: { "@type": "Person", name: SITE.name, url: SITE_URL },
  inLanguage: "en",
  ...extra,
});
