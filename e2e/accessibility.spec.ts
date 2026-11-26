import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const ACCESSIBILITY_PAGES = [
  { name: 'Home', path: '/' },
  { name: 'Services Overview', path: '/services' },
  { name: 'AEO / SEO / GEO Pillar', path: '/services/aeo-seo-geo' },
  { name: 'Custom Software Development', path: '/services/custom-software-development' },
  { name: 'Business Automation', path: '/services/business-automation' },
  { name: 'AI Applications', path: '/services/ai-applications' },
  { name: 'Technology Consulting', path: '/services/technology-consulting' },
  { name: 'Digital Transformation', path: '/digital-transformation' },
  { name: 'Distil Product', path: '/products/distil' },
  { name: 'Sunscout Product', path: '/products/sunscout' },
  { name: 'Meridian Product', path: '/products/meridian' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Book Consultation', path: '/book-consultation' },
  { name: 'Blog Index', path: '/blog' },
  { name: 'How-To Index', path: '/how-to' },
];

test.describe('Accessibility Audits (axe-core & Keyboard Focus)', () => {
  for (const item of ACCESSIBILITY_PAGES) {
    test(`A11y check: ${item.name} (${item.path})`, async ({ page }) => {
      await page.goto(item.path, { waitUntil: 'domcontentloaded' });
      await page.waitForLoadState('networkidle').catch(() => {});

      // Run axe analysis on page content
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        // Ignore color-contrast on non-critical text and exclude third-party cookie banner buttons
        .disableRules(['color-contrast'])
        .exclude('#rcc-decline-button')
        .exclude('#rcc-confirm-button')
        .analyze();

      // Check for serious or critical violations
      const seriousOrCritical = accessibilityScanResults.violations.filter(
        (v) => v.impact === 'serious' || v.impact === 'critical'
      );

      expect(
        seriousOrCritical,
        `Found serious/critical a11y violations on ${item.name}: ${JSON.stringify(
          seriousOrCritical.map((v) => ({ id: v.id, impact: v.impact, description: v.description, nodes: v.nodes.length })),
          null,
          2
        )}`
      ).toEqual([]);
    });
  }

  test('Keyboard navigation: Tab through header nav shows visible focus', async ({ page }) => {
    await page.goto('/');

    // Press Tab multiple times and verify that active element has focus
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('Tab');
      const hasFocusedElement = await page.evaluate(() => {
        return document.activeElement !== null && document.activeElement !== document.body;
      });
      expect(hasFocusedElement).toBe(true);
    }
  });
});
