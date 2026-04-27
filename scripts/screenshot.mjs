import { chromium } from "playwright";
import { mkdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const VIEWPORTS = [
  { name: "phone-375", width: 375, height: 812 },
  { name: "phone-414", width: 414, height: 896 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "desktop-1280", width: 1280, height: 800 },
  { name: "desktop-1920", width: 1920, height: 1080 },
];

const args = process.argv.slice(2);
const route = args[0] ?? "/";
const baseUrl = process.env.BASE_URL ?? "http://localhost:3000";
const outDir = path.resolve(".screenshots", route.replace(/^\/+|\/+$/g, "") || "root");

const flagIdx = args.indexOf("--viewports");
const selectedViewports =
  flagIdx >= 0
    ? VIEWPORTS.filter((v) => args[flagIdx + 1].split(",").includes(v.name))
    : VIEWPORTS;

const fullPage = !args.includes("--no-full-page");
const scrollMode = args.includes("--scroll");

if (existsSync(outDir)) await rm(outDir, { recursive: true });
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const url = `${baseUrl}${route.startsWith("/") ? route : `/${route}`}`;
console.log(`→ ${url}`);

for (const vp of selectedViewports) {
  const ctx = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 2,
  });
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(400);
  if (scrollMode) {
    const totalHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    const step = vp.height;
    let y = 0;
    let i = 0;
    while (y < totalHeight) {
      await page.evaluate((y) => window.scrollTo(0, y), y);
      await page.waitForTimeout(250);
      const file = path.join(outDir, `${vp.name}-${String(i).padStart(2, "0")}.png`);
      await page.screenshot({ path: file, fullPage: false });
      console.log(`  ✓ ${vp.name} y=${y} → ${file}`);
      y += step;
      i += 1;
    }
  } else {
    const file = path.join(outDir, `${vp.name}.png`);
    await page.screenshot({ path: file, fullPage });
    console.log(`  ✓ ${vp.name} (${vp.width}×${vp.height}) → ${file}`);
  }
  await ctx.close();
}

await browser.close();
console.log(`\nDone. Open ${outDir}/`);
