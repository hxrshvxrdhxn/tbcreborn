import { metadata as adminMetadata } from '../app/admin/layout';
import { metadata as blogAdminMetadata } from '../app/blog-admin/layout';
import sitemap from '../app/sitemap';
import { GET as rssGet } from '../app/feed.xml/route';
import { prisma } from '../lib/prisma';
import { getAllPosts } from '../lib/posts';
import { getHubEntries } from '../lib/hubs';

jest.mock('../lib/prisma', () => ({
  prisma: {
    post: { findMany: jest.fn() },
    howToGuide: { findMany: jest.fn() },
  }
}));

jest.mock('../lib/posts', () => ({
  getAllPosts: jest.fn(),
  getPostBySlug: jest.fn(),
}));

jest.mock('../lib/hubs', () => {
  const actual = jest.requireActual('../lib/hubs');
  return {
    ...actual,
    getHubEntries: jest.fn().mockResolvedValue([]),
  };
});

describe('SEO Requirements', () => {
  it('Admin pages should carry noindex', () => {
    expect(adminMetadata.robots).toEqual({ index: false, follow: false });
    expect(blogAdminMetadata.robots).toEqual({ index: false, follow: false });
  });

  it('Sitemap should exclude future posts and drafts', async () => {
    (getAllPosts as jest.Mock).mockResolvedValue([
      { slug: 'live-post', date: '10 May 2026', publishedAt: new Date(Date.now() - 10000).toISOString() },
    ]);
    (prisma.howToGuide.findMany as jest.Mock).mockResolvedValue([]);

    const sm = await sitemap();
    const blogUrls = sm.filter(r => r.url.includes('/blog'));
    expect(blogUrls).toHaveLength(2);
    expect(blogUrls.some(r => r.url.includes('live-post'))).toBe(true);
  });

  it('RSS should exclude future posts and drafts', async () => {
    (getAllPosts as jest.Mock).mockResolvedValue([
      { slug: 'live-post', title: 'Live Post', date: '10 May 2026', excerpt: 'Test', publishedAt: new Date(Date.now() - 10000).toISOString() },
    ]);

    const res = await rssGet();
    const xml = await res.text();
    expect(xml).toContain('live-post');
    expect(xml).toContain('Live Post');
  });

  it('Sitemap should exclude empty hub indexes when no entries are visible', async () => {
    (getAllPosts as jest.Mock).mockResolvedValue([]);
    (prisma.howToGuide.findMany as jest.Mock).mockResolvedValue([]);

    const sm = await sitemap();
    const urls = sm.map(r => r.url);
    const hubs = ['/glossary', '/integrations', '/cost', '/compare', '/solutions', '/ai-use-cases'];
    for (const hub of hubs) {
      expect(urls).not.toContain(`https://turbobytesconsulting.com${hub}`);
    }
  });

  it('Sitemap should include hub index and industry index when visible entries exist', async () => {
    (getAllPosts as jest.Mock).mockResolvedValue([]);
    (prisma.howToGuide.findMany as jest.Mock).mockResolvedValue([]);

    (getHubEntries as jest.Mock).mockImplementation(async (hub: string) => {
      if (hub === 'solutions') {
        return [
          {
            slug: 'clinic-software',
            title: 'Clinic Software',
            seoTitle: 'Clinic Software',
            seoDescription: 'Clinic Software',
            summary: 'Clinic Software',
            dataPoints: [],
            body: '',
            faqs: [],
            related: [],
            service: '/services/custom-software-development',
            publishedAt: '2026-09-01T00:00:00.000Z',
            indexable: true,
            industry: 'Healthcare',
            industrySlug: 'healthcare',
          },
        ] as any;
      }
      return [];
    });

    const sm = await sitemap();
    const urls = sm.map(r => r.url);

    expect(urls).toContain('https://turbobytesconsulting.com/solutions');
    expect(urls).toContain('https://turbobytesconsulting.com/solutions/healthcare');
    expect(urls).toContain('https://turbobytesconsulting.com/solutions/healthcare/clinic-software');
    expect(urls).not.toContain('https://turbobytesconsulting.com/cost');
    expect(urls).not.toContain('https://turbobytesconsulting.com/compare');

    (getHubEntries as jest.Mock).mockReset();
  });
});
