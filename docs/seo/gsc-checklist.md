# Google Search Console (GSC) Manual Setup & Verification Checklist

This checklist documents the immediate setup and recurring health checks required for `turbobytesconsulting.com` once Google Search Console access is configured.

---

## 1. Property Setup and Domain Verification

- [ ] **Create Domain Property**: In Google Search Console, select **Add Property** and choose **Domain** (not URL prefix) using `turbobytesconsulting.com`. This ensures coverage across all protocols (`https://`), root domain, and any subdomains.
- [ ] **DNS TXT Verification**:
  - Copy the TXT verification record provided by Google Search Console.
  - Add the `TXT` record at your DNS provider (e.g., Cloudflare, Route 53, or domain registrar) on `@` (root).
  - Wait 2–5 minutes for DNS propagation and click **Verify**.
- [ ] **Fallback Verification (Optional)**: If DNS TXT verification is delayed, add a custom Caddy HTML tag or file verification route. Do not rely on third-party meta verification plugins.

---

## 2. Sitemap Submission

- [ ] **Submit Primary Sitemap**:
  - Navigate to **Index > Sitemaps** in the left sidebar.
  - Enter `sitemap.xml` under *Add a new sitemap* (full URL: `https://turbobytesconsulting.com/sitemap.xml`).
  - Click **Submit**.
  - Confirm the status shows **Success** and verify the reported URL count (matches all 49+ public pages including products, services, hub entries, and how-to guides).

---

## 3. High-Priority URL Inspection & Initial Indexing

Perform manual **URL Inspection** and request indexing for key conversion and product pillars:

- [ ] **Homepage**: `https://turbobytesconsulting.com/`
- [ ] **Products Hub**: `https://turbobytesconsulting.com/products`
- [ ] **Key Products**:
  - `https://turbobytesconsulting.com/products/distil`
  - `https://turbobytesconsulting.com/products/sunscout`
  - `https://turbobytesconsulting.com/products/vantage`
  - `https://turbobytesconsulting.com/products/cadence`
  - `https://turbobytesconsulting.com/products/assay`
  - `https://turbobytesconsulting.com/products/steward`
  - `https://turbobytesconsulting.com/products/compass`
  - `https://turbobytesconsulting.com/products/relay`
  - `https://turbobytesconsulting.com/products/rapport`
- [ ] **Agent Desk**: `https://turbobytesconsulting.com/agent-desk`
- [ ] **Services Hub & Core Services**:
  - `https://turbobytesconsulting.com/services`
  - `https://turbobytesconsulting.com/services/custom-software-development`
  - `https://turbobytesconsulting.com/services/business-automation`
  - `https://turbobytesconsulting.com/services/custom-llm`
- [ ] **Authority & Conversion Pages**:
  - `https://turbobytesconsulting.com/about`
  - `https://turbobytesconsulting.com/work`
  - `https://turbobytesconsulting.com/contact`
  - `https://turbobytesconsulting.com/book-consultation`

For each URL: click **Test Live URL**, confirm green status (HTTP 200, canonical recognized, mobile-friendly), then click **Request Indexing**.

---

## 4. Structured Data & Rich Results Validation

Verify that Google recognizes all JSON-LD schemas without warnings or syntax errors:

- [ ] **Organization & WebSite**: Run the homepage through the Google Rich Results Test; verify `Organization`, `PostalAddress`, `ContactPoint`, and `WebSite` (with `SearchAction`) parse cleanly.
- [ ] **SoftwareApplication**: Inspect `/products/distil` and `/products/vantage`; verify `SoftwareApplication` attributes (name, operatingSystem, applicationCategory, publisher).
- [ ] **Service**: Inspect `/services/custom-software-development`; verify `Service` provider linking to `https://turbobytesconsulting.com/#organization`.
- [ ] **FAQPage**: Inspect any product or service page with FAQs; verify questions and answers are recognized for search accordions.
- [ ] **BreadcrumbList**: Confirm inner pages report clean hierarchical breadcrumb trails (`Home > Products > ...` or `Home > Services > ...`).

---

## 5. Core Web Vitals & Experience Audits

- [ ] **Core Web Vitals Report**: Monitor **Experience > Core Web Vitals** (Mobile and Desktop) for:
  - **LCP (Largest Contentful Paint)**: < 2.5s (optimised via Next.js local fonts and responsive image `sizes`).
  - **INP (Interaction to Next Paint)**: < 200ms (validated click interactions, no blocking JavaScript).
  - **CLS (Cumulative Layout Shift)**: < 0.1 (strict aspect ratios on heroes, video embeds, and card images).
- [ ] **Page Experience & HTTPS**: Confirm 100% of URLs are served over HTTPS with no mixed-content warnings.

---

## 6. Security and Crawling Health (Weekly Routine)

- [ ] **Security & Manual Actions**: Check **Security & Manual Actions > Manual actions** (must say *No issues detected*).
- [ ] **Crawl Errors / Page Indexing**: Inspect **Index > Pages** weekly for:
  - Excluded by `noindex` tag (confirm only internal admin routes like `/admin/*`, `/blog-admin/*` are excluded).
  - Soft 404s (ensure all discontinued routes 301 redirect or return a proper 404).
  - Crawled - currently not indexed (review and add internal links if any pages linger here).
