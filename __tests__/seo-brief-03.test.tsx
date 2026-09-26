/** @jest-environment jsdom */
import { render } from '@testing-library/react';
import CustomSoftwarePage, { metadata as csMeta } from '../app/services/custom-software-development/page';
import MobileAppPage, { metadata as maMeta } from '../app/services/mobile-app-development/page';
import AiAppPage, { metadata as aiMeta } from '../app/services/ai-applications/page';
import BusAutoPage, { metadata as baMeta } from '../app/services/business-automation/page';
import MvpPage, { metadata as mvpMeta } from '../app/services/mvp-development/page';
import LocationGnPage, { metadata as lGnMeta } from '../app/software-development-company-greater-noida/page';

const pages = [
  { Page: CustomSoftwarePage, meta: csMeta, path: '/services/custom-software-development' },
  { Page: MobileAppPage, meta: maMeta, path: '/services/mobile-app-development' },
  { Page: AiAppPage, meta: aiMeta, path: '/services/ai-applications' },
  { Page: BusAutoPage, meta: baMeta, path: '/services/business-automation' },
  { Page: MvpPage, meta: mvpMeta, path: '/services/mvp-development' },
  { Page: LocationGnPage, meta: lGnMeta, path: '/software-development-company-greater-noida' }
];

beforeAll(() => {
  global.IntersectionObserver = class IntersectionObserver {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  } as any;
});

describe('Brief 03 SEO Requirements', () => {
  for (const { Page, meta, path } of pages) {
    describe(`Page: ${path}`, () => {
      it('renders without crashing (200 OK equivalent)', () => {
        const { container } = render(<Page />);
        expect(container).toBeInTheDocument();
      });

      it('has exactly one H1', () => {
        const { container } = render(<Page />);
        const h1s = container.querySelectorAll('h1');
        expect(h1s).toHaveLength(1);
      });

      it('has a canonical URL', () => {
        expect(meta.alternates?.canonical).toBe(path.replace('/page.tsx', ''));
      });

      it('includes Service and FAQPage JSON-LD', () => {
        const { container } = render(<Page />);
        const scripts = Array.from(container.querySelectorAll('script[type="application/ld+json"]'));
        const htmls = scripts.map(s => s.innerHTML);
        
        const hasService = htmls.some(h => h.includes('"@type":"Service"'));
        const hasFaq = htmls.some(h => h.includes('"@type":"FAQPage"'));
        
        expect(hasService).toBe(true);
        expect(hasFaq).toBe(true);
      });

      it('has zero presence of "Mectech", "MPE", or "!"', () => {
        const { container } = render(<Page />);
        const text = container.textContent || '';
        expect(text).not.toMatch(/\\bMectech\\b/i);
        expect(text).not.toMatch(/\\bMPE\\b/i);
        expect(text).not.toContain('!');
      });
    });
  }
});
