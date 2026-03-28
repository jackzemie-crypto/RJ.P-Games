/**
 * One-time: paste MOVIES array body (from export const MOVIES...) into movies-array-raw.js
 * as: export default [ ... ];
 * Then run: node scripts/embed-movies.mjs
 * Produces ../movies-data.js
 */
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const rawPath = join(__dirname, 'movies-array-raw.js');

let text;
try {
  text = readFileSync(rawPath, 'utf8');
} catch {
  console.error('Missing scripts/movies-array-raw.js — export default [ ... ];');
  process.exit(1);
}

const m = text.match(/export\s+default\s*(\[[\s\S]*\]);?\s*$/);
if (!m) {
  console.error('Could not find export default [ ... ]');
  process.exit(1);
}

const arr = m[1];
const out = `window.MOVIES_DATA = ${arr};
`;
writeFileSync(join(root, 'movies-data.js'), out, 'utf8');
console.log('Wrote movies-data.js');
