/** @jest-environment jsdom */
import { render } from '@testing-library/react';
import BlogPostPage from '../app/blog/[slug]/page';

// Mock dependencies
jest.mock('../lib/posts', () => ({
  getAllPosts: jest.fn().mockResolvedValue([]),
  getPostBySlug: jest.fn().mockResolvedValue({
    slug: 'test-post',
    title: 'Test Post',
    category: 'Technology',
    content: 'Test content',
    date: '2026-09-26',
    excerpt: 'Test',
    author: 'Test Author',
    publishedAt: new Date().toISOString()
  })
}));

beforeAll(() => {
  global.IntersectionObserver = class IntersectionObserver {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  } as any;
});

describe('Brief 06 SEO Requirements', () => {
  it('server-renders BlogPosting schema in plain script tag', async () => {
    // Await the async server component
    const jsx = await BlogPostPage({ params: Promise.resolve({ slug: 'test-post' }) });
    const { container } = render(jsx);
    
    // Query for the script tag
    const script = container.querySelector('script[type="application/ld+json"]#blogposting-schema');
    expect(script).toBeInTheDocument();
    
    // Check its content
    const html = script?.innerHTML || '';
    expect(html).toContain('"@type":"BlogPosting"');
  });
});
