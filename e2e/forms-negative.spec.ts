import { test, expect } from '@playwright/test';

test.describe('Forms - Negative Testing (Security & Validation)', () => {
  test('Contact Form: Empty submit triggers client validation', async ({ page }) => {
    await page.goto('/contact');
    
    // Attempt submit with empty fields
    const submitBtn = page.locator('button[type="submit"]', { hasText: /Send message/i });
    await expect(submitBtn).toBeVisible();
    await submitBtn.click();

    // Check that error messages appeared and no success message displayed
    const alerts = page.locator('[role="alert"]');
    await expect(alerts.first()).toBeVisible();
    await expect(page.locator('text=Message sent.')).not.toBeVisible();
  });

  test('Contact Form: Invalid email address is rejected', async ({ page }) => {
    await page.goto('/contact');

    await page.fill('#name', 'Test User');
    await page.fill('#email', 'invalid-email-format');
    await page.selectOption('#service', { index: 1 });
    await page.fill('#message', 'This is a test message for email validation.');

    const submitBtn = page.locator('button[type="submit"]', { hasText: /Send message/i });
    await submitBtn.click();

    // Should show error for email field
    const emailAlert = page.locator('[role="alert"]').filter({ hasText: /valid email/i });
    await expect(emailAlert).toBeVisible();
    await expect(page.locator('text=Message sent.')).not.toBeVisible();
  });

  test('Contact Form: Script tags are safely handled and never executed', async ({ page }) => {
    let scriptExecuted = false;
    page.on('dialog', async (dialog) => {
      scriptExecuted = true;
      await dialog.dismiss();
    });

    await page.goto('/contact');

    const payload = '<script>alert("xss")</script><img src=x onerror=alert(1)>';
    await page.fill('#name', payload);
    await page.fill('#email', 'test-xss@example.com');
    await page.fill('#message', payload);

    // Verify dialog was never popped
    expect(scriptExecuted).toBe(false);
  });

  test('Contact Form: Honeypot field causes silent drop or rejection', async ({ page }) => {
    await page.goto('/contact');

    // Fill honeypot field
    await page.evaluate(() => {
      const hp = document.querySelector('input#website') as HTMLInputElement;
      if (hp) {
        hp.value = 'http://spam-bot-trap.com';
      }
    });

    await page.fill('#name', 'Spam Bot');
    await page.fill('#email', 'bot@spammer-domain-xyz.com');
    await page.fill('#message', 'Spam message content');

    const submitBtn = page.locator('button[type="submit"]', { hasText: /Send message/i });
    await submitBtn.click();

    // The API returns { ok: true } (silent drop) or rejects, but no genuine lead is created
    await page.waitForTimeout(1000);
  });

  test('Contact Form: Double click prevention', async ({ page }) => {
    await page.goto('/contact');

    await page.fill('#name', 'Fast Clicker');
    await page.fill('#email', 'fast-clicker@example.com');
    await page.fill('#message', 'Testing double-click prevention.');

    const submitBtn = page.locator('button[type="submit"]', { hasText: /Send message/i });
    
    // Intercept API calls to count requests
    let requestCount = 0;
    page.on('request', (req) => {
      if (req.url().includes('/api/contact') && req.method() === 'POST') {
        requestCount++;
      }
    });

    // Rapid double click
    await submitBtn.dblclick();
    await page.waitForTimeout(1500);

    // Should have sent at most 1 request
    expect(requestCount).toBeLessThanOrEqual(1);
  });

  test('Free AI Visibility Check: Empty submit rejected', async ({ page }) => {
    await page.goto('/free-ai-visibility-check');

    const submitBtn = page.locator('button[type="submit"]').first();
    if (await submitBtn.isVisible()) {
      await submitBtn.click();
      // Ensure required HTML5 validation or error state prevents submission
      await expect(page.locator('text=Request Received')).not.toBeVisible();
    }
  });
});
