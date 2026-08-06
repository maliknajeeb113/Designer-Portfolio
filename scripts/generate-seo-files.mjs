// Emits public/robots.txt and public/sitemap.xml from the app's own route table
// so the sitemap can't drift out of sync with the routes that actually exist.
// Run as part of `npm run build` (prebuild).
import { writeFileSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// Read the paths straight out of src/config/seo.ts rather than duplicating them.
const seoSrc = readFileSync(resolve(root, "src/config/seo.ts"), "utf8");
const paths = [...seoSrc.matchAll(/^\s*path: "([^"]+)",$/gm)].map((m) => m[1]);
const siteUrl = readFileSync(resolve(root, "src/config/site.ts"), "utf8")
  .match(/export const SITE_URL = "([^"]+)"/)[1];

if (!paths.length) throw new Error("No route paths found in src/config/seo.ts");

const today = new Date().toISOString().slice(0, 10);
const urls = paths
  .map((p) => {
    const loc = `${siteUrl}${p === "/" ? "/" : p}`;
    const priority = p === "/" ? "1.0" : "0.8";
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  })
  .join("\n");

writeFileSync(
  resolve(root, "public/sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);

// Explicitly welcome the AI crawlers: this is a portfolio, being quoted by an
// assistant is the point. Remove a line here to opt out of that crawler.
writeFileSync(
  resolve(root, "public/robots.txt"),
  [
    "User-agent: *",
    "Allow: /",
    "",
    "User-agent: GPTBot",
    "Allow: /",
    "",
    "User-agent: ClaudeBot",
    "Allow: /",
    "",
    "User-agent: PerplexityBot",
    "Allow: /",
    "",
    "User-agent: Google-Extended",
    "Allow: /",
    "",
    `Sitemap: ${siteUrl}/sitemap.xml`,
    "",
  ].join("\n"),
);

console.log(`[seo] wrote sitemap.xml (${paths.length} urls) + robots.txt for ${siteUrl}`);
