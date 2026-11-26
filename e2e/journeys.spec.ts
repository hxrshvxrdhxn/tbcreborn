import { test, expect } from '@playwright/test';

test.describe('Core User Journeys', () => {
  test('Journey 1: Home -> Services overview -> Service detail -> Contact', async ({ page }) => {
    // 1. Visit homepage
    await page.goto('/');
    await expect(page).toHaveTitle(/Turbo Bytes Consulting/i);
    await expect(page.locator('h1')).toContainText('The intelligence layer your business has been missing.');

    // 2. Navigate to services overview
    const servicesLink = page.locator('nav a[href="/services"]').first();
    await servicesLink.click();
    await page.waitForURL('**/services');
    await expect(page.locator('h1')).toBeVisible();

    // 3. Navigate to a specific service (e.g. Custom Software Development)
    const customSoftwareLink = page.locator('a[href="/services/custom-software-development"]').first();
    await customSoftwareLink.click();
    await page.waitForURL('**/services/custom-software-development');
    await expect(page.locator('h1')).toBeVisible();

    // 4. Click CTA or link to Contact
    const contactCta = page.locator('a[href="/contact"], a[href="/book-consultation"]').first();
    await contactCta.click();
    await expect(page).toHaveURL(/\/(contact|book-consultation)/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('Journey 2: Home -> Product detail -> Book a consultation', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to Distil product page via product section link in main content
    const distilLink = page.locator('main a[href="/products/distil"]').first();
    await distilLink.scrollIntoViewIfNeeded();
    await distilLink.click();
    await page.waitForURL('**/products/distil');
    await expect(page.locator('h1')).toBeVisible();
    await expect(page).toHaveTitle(/Distil/i);

    // Click "Book a consultation" button in main content
    const bookCta = page.locator('main a[href="/book-consultation"]').first();
    await bookCta.scrollIntoViewIfNeeded();
    await bookCta.click();
    await page.waitForURL('**/book-consultation');
    await expect(page.locator('h1')).toBeVisible();
  });

  test('Journey 3: Blog index -> Post detail -> Pagination', async ({ page }) => {
    await page.goto('/blog');
    await expect(page.locator('h1')).toBeVisible();

    // Verify blog posts list exists
    const postCards = page.locator('article, a[href^="/blog/"]');
    await expect(postCards.first()).toBeVisible();

    // Check pagination link
    const nextPageLink = page.locator('a[href*="page=2"]').first();
    if (await nextPageLink.isVisible()) {
      await nextPageLink.click();
      await page.waitForURL('**/blog?page=2');
      await expect(page.locator('h1')).toBeVisible();
    }

    // Click a blog post
    const firstPost = page.locator('a[href^="/blog/"]:not([href*="page="])').first();
    const href = await firstPost.getAttribute('href');
    if (href) {
      await firstPost.click();
      await page.waitForURL(`**${href}`);
      await expect(page.locator('h1')).toBeVisible();
    }
  });

  test('Journey 4: How-to search and navigation', async ({ page }) => {
    await page.goto('/how-to');
    await expect(page.locator('h1')).toBeVisible();

    // Find search input
    const searchInput = page.locator('input[type="search"], input[placeholder*="search" i], input[type="text"]').first();
    if (await searchInput.isVisible()) {
      await searchInput.fill('automation');
      await page.waitForTimeout(500);
    }

    // Click first guide
    const firstGuide = page.locator('a[href^="/how-to/"]').first();
    if (await firstGuide.isVisible()) {
      await firstGuide.click();
      await expect(page.locator('h1')).toBeVisible();
    }
  });

  test('Journey 5: AEO/SEO/GEO pillar -> Free AI visibility check', async ({ page }) => {
    await page.goto('/services/aeo-seo-geo');
    await expect(page.locator('h1')).toContainText('AEO, SEO and GEO');

    // Click "Free AI visibility check" CTA in main hero
    const freeCheckCta = page.locator('main a[href="/free-ai-visibility-check"]').first();
    await freeCheckCta.scrollIntoViewIfNeeded();
    await freeCheckCta.click();
    await page.waitForURL('**/free-ai-visibility-check');
    await expect(page.locator('h1')).toBeVisible();
  });

  test('Journey 6: Mobile menu open/close and links', async ({ page, isMobile }) => {
    await page.goto('/');
    
    // Look for hamburger toggle if mobile or smaller viewport
    const menuButton = page.locator('button[aria-label*="menu" i], button[aria-expanded]').first();
    if (await menuButton.isVisible()) {
      await menuButton.click();
      await page.waitForTimeout(300);
      
      // Check nav overlay or container is visible
      const mobileNav = page.locator('nav, [role="dialog"]').first();
      await expect(mobileNav).toBeVisible();

      // Close menu
      await menuButton.click();
      await page.waitForTimeout(300);
    }
  });

  test('Journey 7: Footer links verification', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    // Verify Services & Products columns exist (matches either split columns or legacy header)
    const servicesCol = footer.locator('text=Services');
    await expect(servicesCol.first()).toBeVisible();

    // Verify key links inside footer
    await expect(footer.locator('a[href="/about"]')).toBeVisible();
    await expect(footer.locator('a[href="/contact"]')).toBeVisible();
    await expect(footer.locator('a[href="/privacy-policy"]')).toBeVisible();
  });

  test('Journey 8: 404 page check', async ({ page }) => {
    const response = await page.goto('/this-page-does-not-exist-qa-check-404');
    expect(response?.status()).toBe(404);
    await expect(page.locator('body')).toContainText(/not found|404/i);
  });

  test('Journey 9: Browser back and forward history navigation', async ({ page }) => {
    await page.goto('/');
    await page.goto('/about');
    await expect(page).toHaveURL(/\/about/);

    await page.goBack();
    await expect(page).toHaveURL(/\//);

    await page.goForward();
    await expect(page).toHaveURL(/\/about/);
  });
});
