import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const pages = [
  { name: 'Home', url: 'http://localhost:7000/', file: 'lh-home.json' },
  { name: 'Services Overview', url: 'http://localhost:7000/services', file: 'lh-services.json' },
  { name: 'AEO / SEO / GEO Pillar', url: 'http://localhost:7000/services/aeo-seo-geo', file: 'lh-aeo.json' },
  { name: 'Distil Product', url: 'http://localhost:7000/products/distil', file: 'lh-distil.json' },
  { name: 'Blog Post', url: 'http://localhost:7000/blog/automating-reports-from-multiple-data-sources', file: 'lh-blog.json' },
];

const results = [];

for (const p of pages) {
  const outPath = path.join(process.cwd(), 'qa', p.file);
  console.log(`Running Lighthouse on ${p.name} (${p.url})...`);
  try {
    execSync(
      `npx --yes lighthouse "${p.url}" --output=json --output-path="${outPath}" --chrome-flags="--headless --no-sandbox" --only-categories=performance,accessibility,best-practices,seo --form-factor=mobile --throttling-method=devtools`,
      { stdio: 'ignore' }
    );
    const data = JSON.parse(fs.readFileSync(outPath, 'utf8'));
    const perf = Math.round(data.categories.performance.score * 100);
    const a11y = Math.round(data.categories.accessibility.score * 100);
    const bp = Math.round(data.categories['best-practices'].score * 100);
    const seo = Math.round(data.categories.seo.score * 100);
    const fcp = data.audits['first-contentful-paint']?.displayValue;
    const lcp = data.audits['largest-contentful-paint']?.displayValue;
    const cls = data.audits['cumulative-layout-shift']?.displayValue;
    const tbt = data.audits['total-blocking-time']?.displayValue;

    results.push({ name: p.name, url: p.url, perf, a11y, bp, seo, fcp, lcp, cls, tbt });
    console.log(`✓ ${p.name}: Perf ${perf} | A11y ${a11y} | BP ${bp} | SEO ${seo} | LCP ${lcp} | CLS ${cls}`);
  } catch (err) {
    console.error(`Failed on ${p.name}:`, err.message);
  }
}

fs.writeFileSync(path.join(process.cwd(), 'qa', 'lighthouse-summary.json'), JSON.stringify(results, null, 2));
console.log('Finished Lighthouse audit for all 5 pages.');
