import { chromium } from 'playwright';

const pages = [
  { url: '/', name: 'home' },
  { url: '/about', name: 'about' },
  { url: '/gallery', name: 'gallery' },
  { url: '/contact', name: 'contact' },
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });

for (const { url, name } of pages) {
  await page.goto(`http://localhost:3000${url}`);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(800);
  await page.screenshot({ path: `screenshot-${name}.png`, fullPage: false });
  console.log(`✓ screenshot-${name}.png`);
}

// Mobile view of home
await page.setViewportSize({ width: 375, height: 812 });
await page.goto('http://localhost:3000');
await page.waitForLoadState('networkidle');
await page.waitForTimeout(600);
await page.screenshot({ path: 'screenshot-mobile.png', fullPage: false });
console.log('✓ screenshot-mobile.png');

await browser.close();
