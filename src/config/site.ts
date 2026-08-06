// Single source of truth for site-wide constants: identity, external links, and
// the metadata SEO/meta tags are built from. Anything that appears in more than
// one component belongs here, not inlined at the top of a component file.

/**
 * Resume link. Set VITE_RESUME_URL in .env (or the host's env settings) to change
 * it without a code change; the literal is a fallback for local dev.
 *
 * NOTE: previously this constant was copy-pasted into Hero, Navbar and Footer,
 * so updating the env var only changed the hero button. All three now read here.
 */
export const RESUME_URL =
  import.meta.env.VITE_RESUME_URL ||
  "https://drive.google.com/file/d/1B_9Bz25SG9cIbWIgQFeeLjLua008NC84/view?usp=drive_link";

/**
 * Canonical production origin — used for canonical URLs, OG tags and the sitemap.
 * The apex (avnigarg.in) 301s to the www host, so www is the canonical form.
 */
export const SITE_URL = "https://www.avnigarg.in";

/** Identity + defaults for page metadata. */
export const SITE = {
  name: "Avni Garg",
  role: "Product Designer",
  title: "Avni Garg — Product Designer",
  description:
    "Product designer at B:Live turning complex B2B & B2C SaaS into interfaces people actually understand. Research-led, 0→1, end to end.",
  location: "Bangalore, India",
  email: "avni.garg.in@gmail.com",
} as const;

/** External profiles. `Footer` renders a subset; SEO uses the full list as sameAs. */
export const SOCIALS = {
  email: `mailto:${SITE.email}`,
  linkedin: "https://www.linkedin.com/in/garg-avni/",
  behance: "https://www.behance.net/avniigarg",
  twitter: "https://twitter.com/avniigarg",
  instagram: "https://www.instagram.com/avnigarg.ux/",
} as const;
