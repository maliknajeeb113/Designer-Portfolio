import { Head } from "vite-react-ssg";
import { SITE, SITE_URL } from "../config/site";
import type { PageSeo } from "../config/seo";

interface SeoProps {
  seo: PageSeo;
  /** Optional schema.org payload rendered as JSON-LD. */
  jsonLd?: Record<string, unknown>;
  /** Social card image, absolute or root-relative. Defaults to the site card. */
  image?: string;
}

const DEFAULT_OG_IMAGE = "/og.jpg";

// Renders every per-page tag crawlers and social/AI scrapers look for. Because
// the site is prerendered, these end up in the static HTML rather than being
// applied by JS after load — which is the whole point: GPTBot, ClaudeBot and
// the LinkedIn/Slack preview fetchers do not execute JavaScript.
const Seo = ({ seo, jsonLd, image = DEFAULT_OG_IMAGE }: SeoProps) => {
  const url = `${SITE_URL}${seo.path}`;
  const img = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={img} />

      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Head>
  );
};

export default Seo;
