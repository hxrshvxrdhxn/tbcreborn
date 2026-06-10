import { getAllPosts, getPostBySlug } from "@/lib/posts";

jest.mock("remark", () => ({
  remark: () => ({
    use: () => ({
      process: async (content: string) => content,
    }),
  }),
}));
jest.mock("remark-html", () => ({}));
jest.mock("isomorphic-dompurify", () => ({
  sanitize: (html: string) => html,
}));

jest.mock("@/lib/prisma", () => {
  return {
    prisma: {
      post: {
        findMany: jest.fn().mockResolvedValue([
          {
            id: "1",
            slug: "test-post",
            title: "Test Post",
            content: "Hello world",
            status: "published",
            createdAt: new Date(),
          },
          {
            id: "2",
            slug: "future-post",
            title: "Future Post",
            content: "Hello world",
            status: "scheduled",
            publishedAt: new Date(Date.now() + 100000).toISOString(),
            createdAt: new Date(),
          },
          {
            id: "3",
            slug: "past-scheduled-post",
            title: "Past Scheduled",
            content: "Hello world",
            status: "scheduled",
            publishedAt: new Date(Date.now() - 100000).toISOString(),
            createdAt: new Date(),
          }
        ])
      }
    }
  }
});

describe("Posts Library", () => {
  it("filters out future scheduled posts in getAllPosts", async () => {
    const posts = await getAllPosts();
    // Static posts are also appended, but we only check our mocked DB posts
    const slugs = posts.map(p => p.slug);
    expect(slugs).toContain("test-post");
    expect(slugs).toContain("past-scheduled-post");
    expect(slugs).not.toContain("future-post");
  });

  it("can lookup a post by slug", async () => {
    const post = await getPostBySlug("test-post");
    expect(post).toBeDefined();
    expect(post?.title).toBe("Test Post");
  });
});
