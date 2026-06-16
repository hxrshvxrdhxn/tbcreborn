import { NextRequest } from "next/server";
import { POST } from "@/app/api/contact/route";

jest.mock("@/lib/prisma", () => ({
  prisma: {
    contactQuery: {
      create: jest.fn().mockResolvedValue({}),
    },
  },
}));

jest.mock("resend", () => {
  return {
    Resend: jest.fn().mockImplementation(() => ({
      emails: { send: jest.fn().mockResolvedValue({}) },
    })),
  };
});

jest.mock("isomorphic-dompurify", () => ({
  sanitize: (str: string) => str,
}));

describe("Contact API validation", () => {
  const baseData = {
    name: "Test User",
    company: "Test Co",
    email: "test@example.com",
    service: "Web Dev",
    message: "This is a test message that is long enough.",
  };

  beforeEach(() => {
    process.env.RESEND_API_KEY = "test_key";
  });

  it("succeeds with valid data", async () => {
    const req = new NextRequest("http://localhost", { method: "POST", body: JSON.stringify(baseData), headers: { "x-forwarded-for": "10.0.0.1", origin: "http://localhost" } });
    const res = await POST(req);
    expect(res.status).toBe(200);
  });

  it("fails when name is too short", async () => {
    const req = new NextRequest("http://localhost", { method: "POST", body: JSON.stringify({ ...baseData, name: "A" }), headers: { "x-forwarded-for": "10.0.0.2", origin: "http://localhost" } });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it("fails when email is invalid", async () => {
    const req = new NextRequest("http://localhost", { method: "POST", body: JSON.stringify({ ...baseData, email: "not-an-email" }), headers: { "x-forwarded-for": "10.0.0.3", origin: "http://localhost" } });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it("fails when message is too short", async () => {
    const req = new NextRequest("http://localhost", { method: "POST", body: JSON.stringify({ ...baseData, message: "short" }), headers: { "x-forwarded-for": "10.0.0.4", origin: "http://localhost" } });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it("fails when service is missing", async () => {
    const { service, ...rest } = baseData;
    const req = new NextRequest("http://localhost", { method: "POST", body: JSON.stringify(rest), headers: { "x-forwarded-for": "10.0.0.5", origin: "http://localhost" } });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it("fails when company is missing", async () => {
    const { company, ...rest } = baseData;
    const req = new NextRequest("http://localhost", { method: "POST", body: JSON.stringify(rest), headers: { "x-forwarded-for": "10.0.0.6", origin: "http://localhost" } });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });
});
