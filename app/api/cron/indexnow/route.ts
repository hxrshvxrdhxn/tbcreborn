import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAllHubEntries } from "@/lib/hubs";

export const maxDuration = 60;
export const dynamic = "force-dynamic";

// IndexNow tells Bing (and other participating engines) about new or updated pages immediately.
// The key is public by design; it is served from /public/e126e4ac1253e44f745907060df037a7.txt.
const KEY = "e126e4ac1253e44f745907060df037a7";
const HOST = "turbobytesconsulting.com";
const BASE = `https://${HOST}`;
const HUBS = ["glossary", "integrations", "cost", "compare", "solutions", "ai-use-cases"];

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const now = Date.now();
  // Default: pages that went live in the last 26 hours. ?all=1 submits every live page once.
  const all = req.nextUrl.searchParams.get("all") === "1";
  const since = all ? 0 : now - 26 * 60 * 60 * 1000;
  const urls = new Set<string>();

  const posts = await prisma.post.findMany({ select: { slug: true, status: true, publishedAt: true, updatedAt: true } });
  for (const p of posts) {
    const liveAt = p.publishedAt ? new Date(p.publishedAt).getTime() : 0;
    const live = p.status === "published" || (p.status === "scheduled" && liveAt <= now);
    const changed = Math.max(liveAt, p.updatedAt ? new Date(p.updatedAt).getTime() : 0);
    if (live && changed >= since && changed <= now) urls.add(`${BASE}/blog/${p.slug}`);
  }

  for (const hub of HUBS) {
    const entries = await getAllHubEntries(hub);
    let anyLive = false;
    for (const e of entries) {
      const t = new Date(e.publishedAt).getTime();
      if (t > now || !e.indexable) continue;
      anyLive = true;
      if (t >= since) {
        urls.add(hub === "solutions" && e.industrySlug ? `${BASE}/solutions/${e.industrySlug}/${e.slug}` : `${BASE}/${hub}/${e.slug}`);
        urls.add(`${BASE}/${hub}`);
      }
    }
    if (all && anyLive) urls.add(`${BASE}/${hub}`);
  }

  if (all) {
    for (const p of ["", "/services", "/about", "/work", "/blog", "/contact", "/book-consultation", "/software-cost-calculator",
      "/software-development-company-noida", "/software-development-company-greater-noida", "/software-development-company-delhi-ncr"]) {
      urls.add(`${BASE}${p}`);
    }
  }

  const urlList = Array.from(urls).slice(0, 10000);
  if (urlList.length === 0) return NextResponse.json({ submitted: 0 });

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${BASE}/${KEY}.txt`, urlList }),
  });

  return NextResponse.json({ submitted: urlList.length, status: res.status });
}
