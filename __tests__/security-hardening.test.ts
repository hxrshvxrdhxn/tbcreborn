/**
 * @jest-environment node
 */
import { timingSafeStringEqual, verifyBearerToken, getClientIp } from "../lib/security";
import { addSession, isValidSession, removeSession, _resetRevocations } from "../lib/session";
import {
  authRateLimiter,
  howToRequestLimiter,
  howToSearchLimiter,
  visitRateLimiter,
  contactRateLimiter,
  analysisRateLimiter,
  MemoryRateLimiter,
} from "../lib/rate-limit";
import {
  NOTIFICATION_RECIPIENT,
  DAILY_EMAIL_CAP,
  sendNotificationEmail,
} from "../lib/mailer";

describe("Application Security Hardening Suite", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
    _resetRevocations();
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  describe("1. Constant-time comparisons (timingSafeStringEqual & verifyBearerToken)", () => {
    it("timingSafeStringEqual correctly verifies matching and non-matching secrets", () => {
      const secret = "SuperSecretPassword123!@#";
      expect(timingSafeStringEqual(secret, secret)).toBe(true);
      expect(timingSafeStringEqual(secret, "WrongPassword")).toBe(false);
      expect(timingSafeStringEqual(secret, "")).toBe(false);
      expect(timingSafeStringEqual("", "")).toBe(true);
      // @ts-expect-error test non-string input safety
      expect(timingSafeStringEqual(undefined, secret)).toBe(false);
      // @ts-expect-error test non-string input safety
      expect(timingSafeStringEqual(null, null)).toBe(false);
    });

    it("verifyBearerToken validates Bearer tokens in constant time", () => {
      const cronSecret = "cron-token-abc-987654";
      expect(verifyBearerToken(`Bearer ${cronSecret}`, cronSecret)).toBe(true);
      expect(verifyBearerToken(`bearer ${cronSecret}`, cronSecret)).toBe(true);
      expect(verifyBearerToken(`Bearer wrong-token`, cronSecret)).toBe(false);
      expect(verifyBearerToken(`Basic ${cronSecret}`, cronSecret)).toBe(false);
      expect(verifyBearerToken("", cronSecret)).toBe(false);
      expect(verifyBearerToken(null, cronSecret)).toBe(false);
      expect(verifyBearerToken(`Bearer ${cronSecret}`, undefined)).toBe(false);
    });
  });

  describe("2. Admin session security and fail-closed signing", () => {
    it("fails closed when SESSION_SECRET is missing", async () => {
      delete process.env.SESSION_SECRET;
      // Must throw an error when attempting to sign a session without SESSION_SECRET
      await expect(addSession()).rejects.toThrow(/SESSION_SECRET environment variable is missing/i);
      // Validation must return false without crashing
      const valid = await isValidSession("some.jwt.token");
      expect(valid).toBe(false);
    });

    it("signs valid 12-hour session tokens when SESSION_SECRET is set", async () => {
      process.env.SESSION_SECRET = "super-secure-production-session-secret-key-at-least-32-chars";
      const token = await addSession();
      expect(typeof token).toBe("string");
      expect(token.split(".")).toHaveLength(3);

      const isValid = await isValidSession(token);
      expect(isValid).toBe(true);
    });

    it("invalidates session server-side upon logout (revocation list)", async () => {
      process.env.SESSION_SECRET = "super-secure-production-session-secret-key-at-least-32-chars";
      const token = await addSession();
      expect(await isValidSession(token)).toBe(true);

      // Perform server-side revocation on logout
      await removeSession(token);

      // Subsequent checks must be rejected immediately
      expect(await isValidSession(token)).toBe(false);
    });
  });

  describe("3. Per-IP rate limiting (MemoryRateLimiter)", () => {
    it("enforces sliding window rate limits and blocks excess attempts", () => {
      const limiter = new MemoryRateLimiter({ windowMs: 1000, max: 3 });
      const ip = "192.168.1.100";

      expect(limiter.isRateLimited(ip)).toBe(false); // 1
      expect(limiter.isRateLimited(ip)).toBe(false); // 2
      expect(limiter.isRateLimited(ip)).toBe(false); // 3
      expect(limiter.isRateLimited(ip)).toBe(true);  // 4: Blocked!
      expect(limiter.isRateLimited(ip)).toBe(true);  // 5: Blocked!

      // Other IPs remain unaffected
      expect(limiter.isRateLimited("192.168.1.101")).toBe(false);
    });

    it("getClientIp correctly extracts client IP from headers", () => {
      const reqWithForwarded = {
        headers: new Headers({ "x-forwarded-for": "203.0.113.195, 70.41.3.18" }),
      };
      expect(getClientIp(reqWithForwarded)).toBe("203.0.113.195");

      const reqWithRealIp = {
        headers: new Headers({ "x-real-ip": "198.51.100.4" }),
      };
      expect(getClientIp(reqWithRealIp)).toBe("198.51.100.4");

      const reqEmpty = { headers: new Headers() };
      expect(getClientIp(reqEmpty)).toBe("unknown");
    });
  });

  describe("4. Unified mail helper & daily Postgres cap", () => {
    it("strictly sets the notification destination to harshvardhan@turbobytesconsulting.com", () => {
      expect(NOTIFICATION_RECIPIENT).toBe("harshvardhan@turbobytesconsulting.com");
      expect(DAILY_EMAIL_CAP).toBe(100);
    });

    it("safely skips email when SMTP is not configured without losing lead", async () => {
      delete process.env.SMTP_USER;
      delete process.env.SMTP_PASS;
      delete process.env.SMTP_HOST;

      const result = await sendNotificationEmail({
        type: "contact",
        subject: "New Lead",
        html: "<p>Test lead</p>",
      });

      expect(result.sent).toBe(false);
      expect(result.skipped).toBe(true);
      expect(result.reason).toBe("smtp_not_configured");
    });
  });
});
