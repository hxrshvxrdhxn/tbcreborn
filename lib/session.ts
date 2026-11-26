// Server-side in-memory session revocation registry
const revokedSessionIdentifiers = new Set<string>();

function toBase64Url(data: string | Uint8Array): string {
  const buf = typeof data === "string" ? Buffer.from(data, "utf8") : Buffer.from(data);
  return buf.toString("base64url");
}

function fromBase64Url(str: string): string {
  return Buffer.from(str, "base64url").toString("utf8");
}

function fromBase64UrlToBuffer(str: string): Uint8Array {
  const buf = Buffer.from(str, "base64url");
  const copy = new Uint8Array(buf.length);
  copy.set(buf);
  return copy;
}

/**
 * Returns the secret key for signing session tokens.
 * FAILS CLOSED: Never falls back to a hardcoded string or ADMIN_PASSWORD.
 */
export function getSessionSecret(): string {
  const secret = process.env.SESSION_SECRET;
  if (!secret || typeof secret !== "string" || secret.trim().length === 0) {
    throw new Error(
      "CRITICAL: SESSION_SECRET environment variable is missing. " +
      "Admin sessions cannot be signed or validated without a configured SESSION_SECRET."
    );
  }
  return secret.trim();
}

async function getHmacKey(secret: string): Promise<CryptoKey> {
  const enc = new TextEncoder();
  return globalThis.crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

/**
 * Issue a signed JWT admin session with a strict 12-hour expiration.
 * Compatible with Edge runtime (middleware) and Node.js.
 */
export async function addSession(tokenId: string = globalThis.crypto.randomUUID()): Promise<string> {
  const secret = getSessionSecret();
  const key = await getHmacKey(secret);

  const now = Math.floor(Date.now() / 1000);
  const exp = now + 12 * 60 * 60; // 12 hours

  const header = toBase64Url(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const payload = toBase64Url(JSON.stringify({ jti: tokenId, iat: now, exp }));
  const message = `${header}.${payload}`;

  const sigBuffer = await globalThis.crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(message)
  );
  const signature = toBase64Url(new Uint8Array(sigBuffer));

  return `${message}.${signature}`;
}

/**
 * Validates whether an incoming session token is signed and unrevoked.
 * Uses Web Crypto HMAC verification (constant-time, Edge-runtime compatible).
 */
export async function isValidSession(token: string): Promise<boolean> {
  if (!token || typeof token !== "string" || revokedSessionIdentifiers.has(token)) {
    return false;
  }

  let secret: string;
  try {
    secret = getSessionSecret();
  } catch {
    // Fail closed if SESSION_SECRET is missing
    return false;
  }

  const parts = token.split(".");
  if (parts.length !== 3) {
    return false;
  }

  const [headerB64, payloadB64, signatureB64] = parts;
  const message = `${headerB64}.${payloadB64}`;

  try {
    const key = await getHmacKey(secret);
    const signatureBytes = fromBase64UrlToBuffer(signatureB64);

    const valid = await globalThis.crypto.subtle.verify(
      "HMAC",
      key,
      signatureBytes as unknown as BufferSource,
      new TextEncoder().encode(message)
    );

    if (!valid) {
      return false;
    }

    const payload = JSON.parse(fromBase64Url(payloadB64));
    const now = Math.floor(Date.now() / 1000);

    if (!payload.exp || now > payload.exp) {
      return false;
    }

    if (payload.jti && revokedSessionIdentifiers.has(payload.jti)) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

/**
 * Server-side invalidation of a session on logout.
 */
export async function removeSession(token: string): Promise<void> {
  if (!token || typeof token !== "string") return;
  revokedSessionIdentifiers.add(token);

  try {
    const parts = token.split(".");
    if (parts.length === 3) {
      const payload = JSON.parse(fromBase64Url(parts[1]));
      if (payload.jti) {
        revokedSessionIdentifiers.add(payload.jti);
      }
    }
  } catch {
    // If token parsing fails, token is already invalid
  }
}

// For unit testing only
export function _resetRevocations(): void {
  revokedSessionIdentifiers.clear();
}
