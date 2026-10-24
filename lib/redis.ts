import { SignJWT, jwtVerify } from "jose";

const secretValue = process.env.ADMIN_PASSWORD ?? process.env.LOCAL_SESSION_SECRET;
if (!secretValue && process.env.NODE_ENV !== "test" && process.env.NODE_ENV !== "development") {
  console.warn("WARNING: No session secret configured in environment variables.");
}
const secret = new TextEncoder().encode(secretValue || "test-secret-fallback");

// Redis sessions are random UUIDs. Anything else in the cookie is rejected before it reaches
// the Upstash REST path, so a crafted value (for example one containing "../") cannot change
// which command runs.
const SESSION_ID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function addSession(token: string): Promise<string> {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    try {
      await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/set/${encodeURIComponent(token)}/valid/EX/604800`, {
        headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}` },
      });
      return token; // Redis uses the raw UUID
    } catch (e) {
      console.error("Redis addSession failed", e);
    }
  }
  
  // Local fallback: sign the UUID as a JWT
  return new SignJWT({ jti: token })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}

export async function isValidSession(token: string): Promise<boolean> {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    if (!SESSION_ID.test(token)) return false;
    try {
      const res = await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/get/${encodeURIComponent(token)}`, {
        headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}` },
        cache: "no-store",
      });
      const data = await res.json();
      return data.result === "valid";
    } catch (e) {
      console.error("Redis isValidSession failed", e);
      return false;
    }
  }
  
  // Local fallback
  try {
    await jwtVerify(token, secret);
    return true;
  } catch {
    return false;
  }
}

export async function removeSession(token: string): Promise<void> {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN && SESSION_ID.test(token)) {
    try {
      await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/del/${encodeURIComponent(token)}`, {
        headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}` },
      });
    } catch (e) {
      console.error("Redis removeSession failed", e);
    }
  }
  // Local fallback: JWTs are stateless, so we can't truly "delete" them locally 
  // without a blacklist, but clearing the cookie handles the logout anyway.
}
