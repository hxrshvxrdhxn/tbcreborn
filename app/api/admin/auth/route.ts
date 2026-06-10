import { NextRequest, NextResponse } from "next/server";
import { addSession, removeSession } from "@/lib/redis";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

let upstashRatelimit: Ratelimit | null = null;
if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  upstashRatelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5, "15 m"),
  });
}

async function isRateLimited(ip: string): Promise<boolean> {
  if (upstashRatelimit) {
    try {
      const { success } = await upstashRatelimit.limit(`auth_${ip}`);
      return !success;
    } catch (e) {
      console.error("Upstash rate limit failed, falling back to local", e);
    }
  }

  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (await isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many login attempts. Locked for 15 minutes." }, { status: 429 });
  }

  const { password } = await req.json();
  const adminPwd = process.env.ADMIN_PASSWORD;

  if (!adminPwd || password !== adminPwd) {
    return NextResponse.json({ error: "Invalid password." }, { status: 401 });
  }

  const rawToken = crypto.randomUUID();
  const sessionToken = await addSession(rawToken);

  const res = NextResponse.json({ success: true });
  res.cookies.set("admin_session", sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });
  return res;
}

export async function DELETE(req: NextRequest) {
  const token = req.cookies.get("admin_session")?.value;
  if (token) {
    await removeSession(token);
  }
  const res = NextResponse.json({ success: true });
  res.cookies.delete("admin_session");
  return res;
}
