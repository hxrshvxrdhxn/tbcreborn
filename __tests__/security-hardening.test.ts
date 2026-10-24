/**
 * @jest-environment node
 */
// Brief 42: the session cookie must never be able to change which Upstash command runs.

jest.mock("jose", () => ({ SignJWT: class {}, jwtVerify: async () => ({}) }));

describe("isValidSession with Upstash configured", () => {
  const OLD = process.env;
  let calls: string[] = [];

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD, UPSTASH_REDIS_REST_URL: "https://example.upstash.io", UPSTASH_REDIS_REST_TOKEN: "t" };
    calls = [];
    global.fetch = jest.fn(async (url: string) => {
      calls.push(String(url));
      return { json: async () => ({ result: "valid" }) } as Response;
    }) as unknown as typeof fetch;
  });
  afterAll(() => {
    process.env = OLD;
  });

  it("rejects a crafted cookie without calling Upstash", async () => {
    const { isValidSession } = await import("../lib/redis");
    for (const bad of ["../echo/valid", "x/valid", "%2e%2e/echo/valid", "", "not-a-uuid"]) {
      expect(await isValidSession(bad)).toBe(false);
    }
    expect(calls).toHaveLength(0);
  });

  it("looks up a real session id", async () => {
    const { isValidSession } = await import("../lib/redis");
    const id = "3f2a9c1e-5b7d-4e8a-9c21-7d4e5f6a8b90";
    expect(await isValidSession(id)).toBe(true);
    expect(calls).toEqual([`https://example.upstash.io/get/${id}`]);
  });
});
