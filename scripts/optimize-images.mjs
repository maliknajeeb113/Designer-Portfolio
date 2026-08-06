// Converts PNGs under src/assets to LOSSLESS WebP and rewrites the imports that
// referenced them. Lossless is deliberate: this is a design portfolio, so the
// output is guaranteed pixel-identical — WebP just stores the same pixels in
// ~45% fewer bytes.
//
// Run after dropping new PNG screenshots into src/assets:
//   node scripts/optimize-images.mjs
//
// Left alone on purpose:
//   *.gif   animated, kept as-is
//   *.jpg   already lossy; lossless WebP of a JPEG is usually BIGGER
//   *.svg   vector
//   public/ favicons and og.jpg need maximum crawler/scraper support
import sharp from "sharp";
import { readdirSync, statSync, readFileSync, writeFileSync, unlinkSync } from "node:fs";
import { join, extname, basename } from "node:path";

const ASSETS = "src/assets";
const SRC = "src";

const pngs = [];
(function walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (extname(e.name).toLowerCase() === ".png") pngs.push(p);
  }
})(ASSETS);

if (!pngs.length) {
  console.log("[images] no PNGs to convert");
  process.exit(0);
}

let before = 0;
let after = 0;
const converted = [];

for (const png of pngs) {
  const originalSize = statSync(png).size;
  const buf = await sharp(png).webp({ lossless: true, effort: 6 }).toBuffer();
  if (buf.length >= originalSize) {
    console.log(`  keep  ${basename(png)} (PNG already smaller)`);
    continue;
  }
  const webp = png.replace(/\.png$/i, ".webp");
  writeFileSync(webp, buf);
  unlinkSync(png);
  before += originalSize;
  after += buf.length;
  converted.push(png);
}

// point every import at the new extension
const sources = [];
(function walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.tsx?$/.test(e.name)) sources.push(p);
  }
})(SRC);

let rewritten = 0;
for (const f of sources) {
  const s = readFileSync(f, "utf8");
  const out = s.replace(/(from\s+"\.{1,2}\/[^"]*assets\/[^"]+)\.png"/g, '$1.webp"');
  if (out !== s) {
    writeFileSync(f, out);
    rewritten++;
  }
}

const pct = before ? (100 - (after / before) * 100).toFixed(0) : "0";
console.log(
  `[images] ${converted.length} PNG -> lossless WebP: ` +
    `${(before / 1048576).toFixed(1)}MB -> ${(after / 1048576).toFixed(1)}MB (-${pct}%), ` +
    `${rewritten} source files updated`,
);
