// news-image-20261118 v2 — "The World in One Day" (Node 22, standard library only).
// The entry is a program that writes one image to /output/entry.png: it copies
// the poster stored beside this file. The poster is original artwork drawn for
// this entry: a broadsheet front page summing up Wednesday 18 November 2026 in
// 43 verified stories — 13 illustrated (lead: Iran strikes Bahrain and Kuwait),
// a world map with numbered pins, and 30 numbered briefs. No photos, no
// borrowed artwork.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const srcPath = new URL('./entry.png', import.meta.url);
const destPath = join(outDir, 'entry.png');
copyFileSync(srcPath, destPath);
// Verify the copy landed intact: destination size must match source size.
const srcSize = statSync(srcPath).size;
const destSize = statSync(destPath).size;
if (srcSize !== destSize) {
  throw new Error(
    `entry.png copy incomplete: source ${srcSize} bytes, destination ${destSize} bytes`,
  );
}
