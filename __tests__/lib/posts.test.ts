import { getAllPosts, getPostBySlug } from "@/lib/posts";

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
        ]),
        findUnique: jest.fn().mockImplementation(({ where }) => {
          if (where.slug === "test-post") {
            return Promise.resolve({
              id: "1",
              slug: "test-post",
              title: "Test Post",
              content: "Hello world",
              status: "published",
              createdAt: new Date(),
            });
          }
          if (where.slug === "table-post") {
            return Promise.resolve({
              id: "4",
              slug: "table-post",
              title: "Table Post",
              content: "# Summary\n\n| Check | Example |\n| :--- | :--- |\n| Code | Example description |\n",
              status: "published",
              createdAt: new Date(),
            });
          }
          return Promise.resolve(null);
        })
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

  it("parses markdown tables into responsive HTML tables in getPostBySlug", async () => {
    const post = await getPostBySlug("table-post");
    expect(post).toBeDefined();
    expect(post?.content).toContain('<div class="table-container">');
    expect(post?.content).toContain("<table");
    expect(post?.content).toContain("<th");
    expect(post?.content).toContain("Check");
    expect(post?.content).toContain("<td");
    expect(post?.content).toContain("Example description");
  });
});
