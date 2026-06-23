/**
 * Generate product-specific OG images (1200x630 PNG).
 * Run: node scripts/generate-og-images.mjs
 */
import sharp from 'sharp';
import { mkdirSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, '..', 'public', 'og');
mkdirSync(publicDir, { recursive: true });

const WIDTH = 1200;
const HEIGHT = 630;

function buildSvg({ bg, accentColor, productName, headline, subline }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      ${bg.map((c, i) => `<stop offset="${i / (bg.length - 1)}" stop-color="${c}"/>`).join('\n      ')}
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>

  <!-- Accent bar top -->
  <rect width="${WIDTH}" height="6" fill="${accentColor}"/>

  <!-- Product name (large) -->
  <text x="80" y="210" fill="${accentColor}" font-family="system-ui,-apple-system,Segoe UI,Roboto,sans-serif" font-size="72" font-weight="800">${escapeXml(productName)}</text>

  <!-- Headline (multi-line via tspan) -->
  ${wrapText(headline, 40, 80, 290, '#ffffff', 48, 700)}

  <!-- Subline -->
  ${wrapText(subline, 60, 80, 290 + countLines(headline, 40) * 56 + 24, 'rgba(255,255,255,0.7)', 24, 400)}

  <!-- Footer -->
  <text x="80" y="${HEIGHT - 50}" fill="rgba(255,255,255,0.5)" font-family="system-ui,-apple-system,Segoe UI,Roboto,sans-serif" font-size="22" font-weight="700" letter-spacing="1">VaultScaler</text>
</svg>`;
}

function wrapText(text, maxChars, x, y, fill, fontSize, fontWeight) {
  const words = text.split(' ');
  const lines = [];
  let current = '';
  for (const word of words) {
    if ((current + ' ' + word).trim().length > maxChars) {
      lines.push(current.trim());
      current = word;
    } else {
      current = (current + ' ' + word).trim();
    }
  }
  if (current) lines.push(current.trim());

  return lines
    .map(
      (line, i) =>
        `<text x="${x}" y="${y + i * (fontSize * 1.15)}" fill="${fill}" font-family="system-ui,-apple-system,Segoe UI,Roboto,sans-serif" font-size="${fontSize}" font-weight="${fontWeight}">${escapeXml(line)}</text>`
    )
    .join('\n  ');
}

function countLines(text, maxChars) {
  const words = text.split(' ');
  let count = 1;
  let current = '';
  for (const word of words) {
    if ((current + ' ' + word).trim().length > maxChars) {
      count++;
      current = word;
    } else {
      current = (current + ' ' + word).trim();
    }
  }
  return count;
}

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

const images = [
  {
    filename: 'vaultscaler-og.png',
    bg: ['#122E46', '#234D70', '#2a5f87'],
    accentColor: '#00e3ae',
    productName: 'VaultScaler',
    headline: 'Measure. Remember. Catch real change.',
    subline: 'Private, local-first AI for living and controlled systems.',
  },
];

for (const img of images) {
  const svg = buildSvg(img);
  const outPath = resolve(publicDir, img.filename);
  await sharp(Buffer.from(svg)).png().toFile(outPath);
  console.log(`✓ ${outPath}`);
}

console.log('Done — OG images generated.');
