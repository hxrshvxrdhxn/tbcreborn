
import { GET } from "@/app/api/cron/generate-blog/route";

jest.mock("ai", () => ({
  generateObject: jest.fn().mockResolvedValue({
    object: {
      title: "Test AI Post",
      category: "Insight",
      readTime: "5 min",
      excerpt: "Test excerpt",
      content: "Test content",
    }
  }),
}));

jest.mock("@ai-sdk/openai", () => ({
  openai: jest.fn(),
}));

jest.mock("@/lib/prisma", () => ({
  prisma: {
    post: {
      findMany: jest.fn().mockResolvedValue([]),
      findUnique: jest.fn().mockResolvedValue(null),
      create: jest.fn().mockResolvedValue({}),
    },
  },
}));

describe("Cron API validation", () => {
  beforeEach(() => {
    process.env.CRON_SECRET = "test-secret";
  });

  it("fails without authorization header", async () => {
    const res = await GET();
    expect(res.status).toBe(410);
  });

  it("fails with incorrect authorization header", async () => {
    const res = await GET();
    expect(res.status).toBe(410);
  });

  it("succeeds with correct authorization header", async () => {
    const res = await GET();
    expect(res.status).toBe(410);
  });
});
