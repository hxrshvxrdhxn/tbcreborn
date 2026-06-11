import { NextRequest } from "next/server";
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
    const req = new NextRequest("http://localhost/api/cron/generate-blog", { method: "GET" });
    const res = await GET(req);
    expect(res.status).toBe(401);
  });

  it("fails with incorrect authorization header", async () => {
    const req = new NextRequest("http://localhost/api/cron/generate-blog", { 
      method: "GET",
      headers: { authorization: "Bearer wrong-secret" } 
    });
    const res = await GET(req);
    expect(res.status).toBe(401);
  });

  it("succeeds with correct authorization header", async () => {
    const req = new NextRequest("http://localhost/api/cron/generate-blog", { 
      method: "GET",
      headers: { authorization: "Bearer test-secret" } 
    });
    const res = await GET(req);
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.success).toBe(true);
  });
});
