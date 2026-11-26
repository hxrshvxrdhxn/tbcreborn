import crypto from "crypto";

/**
 * Constant-time string equality comparison using SHA-256 digests.
 * Digestion ensures both inputs have equal 32-byte buffers before timingSafeEqual,
 * preventing length leakage as well as content-dependent timing leaks.
 */
export function timingSafeStringEqual(a: string, b: string): boolean {
  if (typeof a !== "string" || typeof b !== "string") {
    return false;
  }
  const hashA = crypto.createHash("sha256").update(a).digest();
  const hashB = crypto.createHash("sha256").update(b).digest();
  return crypto.timingSafeEqual(hashA, hashB);
}

/**
 * Verifies Authorization header formatted as 'Bearer <token>' against expected token in constant time.
 */
export function verifyBearerToken(authHeader: string | null | undefined, expectedToken: string | undefined): boolean {
  if (!authHeader || !expectedToken) {
    return false;
  }
  const match = authHeader.match(/^Bearer\s+(.+)$/i);
  if (!match) {
    return false;
  }
  const provided = match[1].trim();
  return timingSafeStringEqual(provided, expectedToken);
}

/**
 * Extracts client IP from standard reverse proxy headers.
 */
export function getClientIp(req: { headers: { get(name: string): string | null } }): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  const realIp = req.headers.get("x-real-ip")?.trim();
  if (realIp) return realIp;
  return "unknown";
}
