import { test, expect } from '@playwright/test';

test.describe('Forms - Positive Testing (Local Dev Only)', () => {
  test('Contact Form: Valid submission displays success state', async ({ page, baseURL }) => {
    test.skip(!baseURL?.includes('localhost') && !baseURL?.includes('127.0.0.1'), 'Only runs locally');
    await page.goto('/contact');

    await page.fill('#name', 'QA Automation Local Test');
    await page.fill('#email', 'test-local-lead@turbobytesconsulting.internal');
    await page.selectOption('#service', { index: 1 });
    await page.fill('#message', 'Local test form submission verification with sufficient text.');

    const submitBtn = page.locator('button[type="submit"]', { hasText: /Send message/i });
    await submitBtn.click();

    // Verify success banner appears
    await expect(page.locator('text=Message sent.')).toBeVisible({ timeout: 15000 });
    await expect(page.locator('text=Thank you. We will be in touch within one business day.')).toBeVisible();
  });

  test('Free AI Visibility Check: Valid submission displays success state', async ({ page, baseURL }) => {
    test.skip(!baseURL?.includes('localhost') && !baseURL?.includes('127.0.0.1'), 'Only runs locally');
    await page.goto('/free-ai-visibility-check');

    await page.fill('#company', 'Local Test Co');
    await page.fill('#website_url', 'https://local-test-example.com');
    await page.fill('#industry', 'Precision Manufacturing');
    await page.fill('#buyer_questions', 'Which suppliers provide ISO certified components in India?');
    await page.fill('#name', 'QA Visibility Local Test');
    await page.fill('#email', 'test-visibility@turbobytesconsulting.internal');

    const submitBtn = page.locator('button[type="submit"]').first();
    await submitBtn.click();

    // Verify success state appears
    await expect(page.locator('text=Visibility check request received.')).toBeVisible({ timeout: 15000 });
  });
});
