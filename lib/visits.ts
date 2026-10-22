import { createHash } from "node:crypto";
import { prisma } from "@/lib/prisma";

// Narrow view of the three analytics models (see prisma/schema.prisma), so these routes only depend
// on what they use.
type VisitorRow = { isNew: boolean; views: number; referrer: string | null; country: string | null; device: string | null };
type Delegate<Row> = {
  upsert(args: unknown): Promise<unknown>;
  findMany(args: unknown): Promise<Row[]>;
  create?(args: unknown): Promise<unknown>;
};
export const analyticsDb = prisma as unknown as {
  siteVisitor: Delegate<VisitorRow>;
  sitePageDay: Delegate<{ path: string; views: number }>;
  siteVital: Delegate<{ metric: string; value: number; device: string | null }> & { create(args: unknown): Promise<unknown> };
};

/** Calendar day in India time, YYYY-MM-DD. */
export function istDay(d = new Date()): string {
  return new Date(d.getTime() + 5.5 * 3600 * 1000).toISOString().slice(0, 10);
}

/** One-way, day-scoped visitor key: the salt changes every day and no IP is stored. */
export function visitorKey(ip: string, ua: string, day: string): string {
  const salt = process.env.VISIT_SALT || process.env.CRON_SECRET || "tbc-visits";
  return createHash("sha256").update(`${salt}|${day}|${ip}|${ua}`).digest("hex").slice(0, 32);
}

const BOT = /bot|crawl|spider|slurp|preview|monitor|lighthouse|headless|python|curl|wget|axios|node-fetch|go-http|java\/|facebookexternalhit|whatsapp|bingpreview|vercel/i;
export const isBot = (ua: string) => !ua || BOT.test(ua);

export function deviceOf(ua: string): string {
  if (/ipad|tablet/i.test(ua)) return "tablet";
  if (/mobi|android|iphone/i.test(ua)) return "phone";
  return "desktop";
}

/** Reduce a referrer to its host, and drop our own domain. */
export function refHost(ref: string | undefined): string | null {
  if (!ref) return null;
  try {
    const h = new URL(ref).hostname.replace(/^www\./, "");
    return /turbobytesconsulting\.(com|in)$|localhost|vercel\.app$/.test(h) ? null : h;
  } catch {
    return null;
  }
}

/** Keep paths tidy and bounded: no query strings, no admin, max 200 chars. */
export function cleanPath(p: unknown): string | null {
  if (typeof p !== "string" || !p.startsWith("/")) return null;
  const path = p.split(/[?#]/)[0].slice(0, 200);
  return path.startsWith("/admin") || path.startsWith("/api") ? null : path;
}
