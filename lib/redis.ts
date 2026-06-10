import { SignJWT, jwtVerify } from "jose";

// Fallback to jose JWTs for local development without Upstash
const secret = new TextEncoder().encode(process.env.ADMIN_PASSWORD || "fallback_secret_do_not_use_in_prod");

export async function addSession(token: string): Promise<string> {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    try {
      await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/set/${token}/valid/EX/604800`, {
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
    try {
      const res = await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/get/${token}`, {
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
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    try {
      await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/del/${token}`, {
        headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}` },
      });
    } catch (e) {
      console.error("Redis removeSession failed", e);
    }
  }
  // Local fallback: JWTs are stateless, so we can't truly "delete" them locally 
  // without a blacklist, but clearing the cookie handles the logout anyway.
}
