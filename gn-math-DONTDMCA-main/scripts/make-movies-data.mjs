import { readFileSync, writeFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const candidates = [
  join(root, 'vendor', 'movieData.ts'),
  join(root, 'movieData.ts'),
  'C:/Users/jack/Desktop/funschools-main/movieData.ts',
];
const src = candidates.find((p) => existsSync(p));
if (!src) {
  console.error(
    'No movieData.ts found. Copy funschools movieData.ts to vendor/movieData.ts or project root, or install at:',
    candidates[candidates.length - 1]
  );
  process.exit(1);
}
const out = join(root, 'movies-data.js');

let s = readFileSync(src, 'utf8');
const start = s.indexOf('export const MOVIES');
if (start === -1) throw new Error('MOVIES export not found');
const lb = s.indexOf('[', start);
const end = s.lastIndexOf('];');
if (lb === -1 || end === -1) throw new Error('array bounds');
let body = s.slice(lb, end + 1);
body = body.replace(/\r\n/g, '\n');
const final = `window.MOVIES_DATA = ${body};\n`;
writeFileSync(out, final, 'utf8');
console.log('source:', src);
console.log('wrote', out, 'bytes', Buffer.byteLength(final, 'utf8'));
