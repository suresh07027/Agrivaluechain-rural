// Usage (from /client):  npm i -D sharp  &&  node scripts/optimize-images.mjs
// Re-compresses big images in src/assets IN PLACE, keeping the same file names
// and extensions, so no imports need to change. Commit first so you can undo.
import sharp from "sharp";
import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = "src/assets";
const MAX_WIDTH = 1920;          // hero backgrounds never need more
const MIN_BYTES = 250 * 1024;    // skip files that are already small

async function* walk(dir) {
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else yield p;
  }
}

let before = 0, after = 0;
for await (const file of walk(ROOT)) {
  const ext = path.extname(file).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;
  const { size } = await fs.stat(file);
  if (size < MIN_BYTES) continue;

  let img = sharp(file).rotate().resize({ width: MAX_WIDTH, withoutEnlargement: true });
  img = ext === ".png"
    ? img.png({ compressionLevel: 9, palette: true, quality: 90 })
    : img.jpeg({ quality: 80, mozjpeg: true });

  const buf = await img.toBuffer();
  if (buf.length < size) {            // only overwrite when it actually got smaller
    await fs.writeFile(file, buf);
    before += size; after += buf.length;
    console.log(`${file}: ${(size/1048576).toFixed(2)} MB -> ${(buf.length/1048576).toFixed(2)} MB`);
  }
}
console.log(`\nSaved ${((before-after)/1048576).toFixed(1)} MB (${(before/1048576).toFixed(1)} -> ${(after/1048576).toFixed(1)} MB)`);
