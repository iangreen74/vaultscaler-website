/**
 * Generate the OG/social share image (1200x630) written to public/og.jpg.
 * Run: node scripts/generate-og-images.mjs
 */
import sharp from 'sharp';
import { mkdirSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, '..', 'public');
mkdirSync(publicDir, { recursive: true });

const WIDTH = 1200;
const HEIGHT = 630;

function buildSvg({ bg, accentColor, textColor, productName, headline, subline }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      ${bg.map((c, i) => `<stop offset="${i / (bg.length - 1)}" stop-color="${c}"/>`).join('\n      ')}
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>

  <!-- Accent bar top — the one restrained use of alert-red -->
  <rect width="${WIDTH}" height="6" fill="${accentColor}"/>

  <!-- Product name (large) -->
  <text x="80" y="210" fill="${textColor}" font-family="Georgia,Cambria,'Times New Roman',serif" font-size="72" font-weight="600">${escapeXml(productName)}</text>

  <!-- Headline (multi-line via tspan) -->
  ${wrapText(headline, 40, 80, 290, textColor, 44, 500)}

  <!-- Subline -->
  ${wrapText(subline, 60, 80, 290 + countLines(headline, 40) * 52 + 26, 'rgba(236,233,227,0.6)', 24, 400)}

  <!-- Footer -->
  <text x="80" y="${HEIGHT - 50}" fill="rgba(236,233,227,0.4)" font-family="system-ui,-apple-system,Segoe UI,Roboto,sans-serif" font-size="22" font-weight="700" letter-spacing="1">vaultscaler.com</text>
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
    filename: 'og.jpg',
    // Gallery-at-night: near-black ground, warm off-white type, one restrained
    // alert-red accent bar — matches tailwind.config.ts's ink/bone/alert tokens.
    bg: ['#0a0a0b', '#141416', '#1b1b1e'],
    accentColor: '#d43f31',
    textColor: '#ece9e3',
    productName: 'VaultScaler',
    headline: 'Have something worth keeping private?',
    subline: 'A private AI consultancy.',
  },
];

for (const img of images) {
  const svg = buildSvg(img);
  const outPath = resolve(publicDir, img.filename);
  const isJpg = /\.jpe?g$/i.test(img.filename);
  await (isJpg ? sharp(Buffer.from(svg)).jpeg({ quality: 92 }) : sharp(Buffer.from(svg)).png()).toFile(outPath);
  console.log(`✓ ${outPath}`);
}

console.log('Done — OG images generated.');
