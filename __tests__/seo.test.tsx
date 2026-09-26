import { metadata as adminMetadata } from '../app/admin/layout';
import { metadata as blogAdminMetadata } from '../app/blog-admin/layout';
import sitemap from '../app/sitemap';
import { GET as rssGet } from '../app/feed.xml/route';
import { prisma } from '../lib/prisma';
import { getAllPosts } from '../lib/posts';

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
});
