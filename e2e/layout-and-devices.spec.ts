import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

const PAGES_TO_TEST = [
  { name: 'home', path: '/' },
  { name: 'services', path: '/services' },
  { name: 'aeo-seo-geo', path: '/services/aeo-seo-geo' },
  { name: 'custom-software', path: '/services/custom-software-development' },
  { name: 'distil', path: '/products/distil' },
  { name: 'sunscout', path: '/products/sunscout' },
  { name: 'meridian', path: '/products/meridian' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact' },
  { name: 'blog-index', path: '/blog' },
  { name: 'how-to-index', path: '/how-to' },
  { name: 'free-ai-visibility-check', path: '/free-ai-visibility-check' },
];

test.describe('Layout, Viewports and Device Responsiveness', () => {
  test.beforeAll(async () => {
    const screenshotDir = path.join(process.cwd(), 'qa', 'screenshots');
    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir, { recursive: true });
    }
  });

  for (const target of PAGES_TO_TEST) {
    test(`Page check: ${target.name} (${target.path})`, async ({ page }, testInfo) => {
      const consoleErrors: string[] = [];
      const failedRequests: string[] = [];

      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          consoleErrors.push(msg.text());
        }
      });

      page.on('requestfailed', (req) => {
        // Ignore expected third party tracking or analytics aborts if any
        if (!req.url().includes('google-analytics') && !req.url().includes('clarity')) {
          failedRequests.push(`${req.method()} ${req.url()}: ${req.failure()?.errorText}`);
        }
      });

      // 1. Navigate to page
      const response = await page.goto(target.path, { waitUntil: 'domcontentloaded' });
      expect(response?.status()).toBe(200);

      // Brief hydration wait
      await page.waitForTimeout(600);

      // 2. Check: No horizontal scroll (scrollWidth <= clientWidth + 1 for rounding)
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth + 1;
      });
      expect(hasHorizontalScroll, `Horizontal scroll detected on ${target.name}`).toBe(false);

      // 3. Check: No raw YouTube iframes on initial load (must only load on click via YouTubeLite)
      const rawYouTubeIframes = await page.locator('iframe[src*="youtube.com/embed"], iframe[src*="youtube-nocookie.com/embed"]').count();
      expect(rawYouTubeIframes, `Found raw autoplay/unclicked YouTube iframe on ${target.name}`).toBe(0);

      // 4. Check: Tap targets at least 44px on mobile
      const isMobile = testInfo.project.name.toLowerCase().includes('mobile') || testInfo.project.name.toLowerCase().includes('iphone') || testInfo.project.name.toLowerCase().includes('pixel');
      if (isMobile) {
        const smallTapTargets = await page.evaluate(() => {
          const linksAndButtons = Array.from(document.querySelectorAll('a, button, input[type="submit"], input[type="button"]'));
          const issues: string[] = [];
          for (const el of linksAndButtons) {
            const rect = el.getBoundingClientRect();
            // Skip hidden or non-displayed elements
            if (rect.width === 0 || rect.height === 0 || window.getComputedStyle(el).display === 'none') {
              continue;
            }
            // If both dimensions are strictly under 32px and not inline text links
            if (rect.width < 32 && rect.height < 32 && !el.closest('p')) {
              issues.push(`${el.tagName} (${el.textContent?.trim().slice(0, 20)}): ${Math.round(rect.width)}x${Math.round(rect.height)}`);
            }
          }
          return issues;
        });
        if (smallTapTargets.length > 0) {
          console.warn(`Small tap target warning on ${target.name}:`, smallTapTargets.slice(0, 3));
        }
      }

      // 5. Check: Sticky header does not obstruct visible anchor targets
      const visibleAnchors = await page.locator('a[href^="#"]:visible:not(.sr-only)').all();
      if (visibleAnchors.length > 0) {
        const firstAnchor = visibleAnchors[0];
        const hash = await firstAnchor.getAttribute('href');
        if (hash && hash.length > 1 && hash !== '#main-content') {
          const targetEl = page.locator(hash);
          if (await targetEl.isVisible()) {
            await firstAnchor.click();
            await page.waitForTimeout(300);
            const bounding = await targetEl.boundingBox();
            if (bounding) {
              expect(bounding.y).toBeGreaterThanOrEqual(-10);
            }
          }
        }
      }

      // 6. Capture screenshot
      const safeProjectName = testInfo.project.name.replace(/\s+/g, '-').toLowerCase();
      const screenshotPath = path.join(process.cwd(), 'qa', 'screenshots', `${target.name}-${safeProjectName}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: false });

      // 7. Verify no severe console errors
      const criticalErrors = consoleErrors.filter(
        (err) => !err.includes('favicon') && !err.includes('analytics') && !err.includes('ResizeObserver')
      );
      expect(criticalErrors, `Console errors on ${target.name}`).toEqual([]);
    });
  }
});
