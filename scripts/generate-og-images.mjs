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
    filename: 'radix-core.png',
    bg: ['#122E46', '#234D70', '#2a5f87'],
    accentColor: '#00e3ae',
    productName: 'Radix Core',
    headline: 'Up to 21% Faster GPU Training',
    subline: 'Closed-loop GPU scheduling. Zero stack changes. Results in minutes.',
  },
  {
    filename: 'radix-studio.png',
    bg: ['#122E46', '#234D70', '#1a4060'],
    accentColor: '#00e3ae',
    productName: 'Radix Studio',
    headline: 'Control Every LLM Inference Call',
    subline: 'Governance, cost control, and multi-model orchestration for production AI.',
  },
  {
    filename: 'lev.png',
    bg: ['#122E46', '#1a3a56', '#0e2235'],
    accentColor: '#E6B907',
    productName: 'Lev',
    headline: 'AI Engineering That Only Moves Forward',
    subline: 'The teammate that architects, builds, deploys, and supports your software with a memory that prevents your codebase from churning backward.',
  },
];

// --- Company-level OG with product roster ---
function buildCompanySvg() {
  const font = 'system-ui,-apple-system,Segoe UI,Roboto,sans-serif';
  const products = [
    { name: 'Lev', color: '#E6B907', desc: 'Agentic Engineering System' },
    { name: 'Radix Core', color: '#00e3ae', desc: 'GPU Training Optimization' },
    { name: 'Radix Studio', color: '#00e3ae', desc: 'LLM Inference Governance' },
  ];

  const rowStartY = 300;
  const rowGap = 64;
  const productRows = products
    .map((p, i) => {
      const y = rowStartY + i * rowGap;
      return `
  <text x="80" y="${y}" fill="${p.color}" font-family="${font}" font-size="30" font-weight="800">${escapeXml(p.name)}</text>
  <text x="80" y="${y + 30}" fill="rgba(255,255,255,0.7)" font-family="${font}" font-size="20" font-weight="400">${escapeXml(p.desc)}</text>`;
    })
    .join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#122E46"/>
      <stop offset="0.5" stop-color="#1a3a56"/>
      <stop offset="1" stop-color="#0e2235"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>

  <!-- Accent bar top (primary-4) -->
  <rect width="${WIDTH}" height="6" fill="#122E46"/>

  <!-- Company name -->
  <text x="80" y="160" fill="#ffffff" font-family="${font}" font-size="72" font-weight="800">VaultScaler</text>

  <!-- Tagline -->
  <text x="80" y="215" fill="rgba(255,255,255,0.6)" font-family="${font}" font-size="26" font-weight="400">AI operations at scale</text>

  <!-- Product roster -->
${productRows}

  <!-- Footer -->
  <text x="80" y="${HEIGHT - 50}" fill="rgba(255,255,255,0.35)" font-family="${font}" font-size="20" font-weight="600" letter-spacing="1">vaultscaler.com</text>
</svg>`;
}

for (const img of images) {
  const svg = buildSvg(img);
  const outPath = resolve(publicDir, img.filename);
  await sharp(Buffer.from(svg)).png().toFile(outPath);
  console.log(`✓ ${outPath}`);
}

// Company OG
const companySvg = buildCompanySvg();
const companyPath = resolve(publicDir, 'vaultscaler.png');
await sharp(Buffer.from(companySvg)).png().toFile(companyPath);
console.log(`✓ ${companyPath}`);

console.log('Done — OG images generated.');
