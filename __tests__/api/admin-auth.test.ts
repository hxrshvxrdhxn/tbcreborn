import { NextRequest } from "next/server";

jest.mock("jose", () => ({
  SignJWT: class {
    setProtectedHeader() { return this; }
    setIssuedAt() { return this; }
    setExpirationTime() { return this; }
    async sign() { return "mock_token"; }
  },
  jwtVerify: async () => ({ payload: { jti: "mock_token" } }),
}));

import { POST } from "@/app/api/admin/auth/route";

describe("Admin Auth API", () => {
  beforeEach(() => {
    process.env.ADMIN_PASSWORD = "correct_password";
  });

  it("fails with incorrect password", async () => {
    const req = new NextRequest("http://localhost", {
      method: "POST",
      body: JSON.stringify({ password: "wrong_password" }),
      headers: { "x-forwarded-for": "127.0.0.1" }
    });
    const res = await POST(req);
    expect(res.status).toBe(401);
  });

  it("succeeds with correct password and sets cookie", async () => {
    const req = new NextRequest("http://localhost", {
      method: "POST",
      body: JSON.stringify({ password: "correct_password" }),
      headers: { "x-forwarded-for": "127.0.0.2" }
    });
    const res = await POST(req);
    expect(res.status).toBe(200);
    const cookies = res.headers.get("set-cookie");
    expect(cookies).toContain("admin_session=");
  });

  it("blocks after 5 failed attempts (brute force protection)", async () => {
    for (let i = 0; i < 5; i++) {
      const req = new NextRequest("http://localhost", {
        method: "POST",
        body: JSON.stringify({ password: "wrong_password" }),
        headers: { "x-forwarded-for": "10.0.0.1" }
      });
      const res = await POST(req);
      expect(res.status).toBe(401);
    }
    
    // 6th attempt should be blocked
    const reqBlocked = new NextRequest("http://localhost", {
      method: "POST",
      body: JSON.stringify({ password: "correct_password" }),
      headers: { "x-forwarded-for": "10.0.0.1" }
    });
    const resBlocked = await POST(reqBlocked);
    expect(resBlocked.status).toBe(429);
  });
});
