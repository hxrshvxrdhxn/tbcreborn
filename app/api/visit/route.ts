import { NextRequest, NextResponse } from "next/server";
import { analyticsDb, cleanPath, deviceOf, istDay, isBot, refHost, visitorKey } from "@/lib/visits";

// Cookieless visit beacon. Body: { t: "view", path, ref, isNew } or { t: "vital", path, name, value }.
// Always answers 204 so a tracking hiccup never shows up for the visitor.

const VITALS = new Set(["LCP", "INP", "CLS", "FCP", "TTFB"]);
const ok = () => new NextResponse(null, { status: 204 });

export async function POST(req: NextRequest) {
  try {
    const ua = req.headers.get("user-agent") || "";
    if (isBot(ua)) return ok();
    const body = await req.json().catch(() => null);
    const path = cleanPath(body?.path);
    if (!body || !path) return ok();

    const day = istDay();
    const device = deviceOf(ua);

    if (body.t === "vital") {
      const value = Number(body.value);
      if (VITALS.has(body.name) && Number.isFinite(value) && value >= 0 && value < 120000) {
        await analyticsDb.siteVital.create({ data: { day, metric: body.name, value, path, device } });
      }
      return ok();
    }

    const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || req.ip || "0";
    const visitor = visitorKey(ip, ua, day);
    const country = req.headers.get("x-vercel-ip-country") || null;

    await Promise.all([
      analyticsDb.siteVisitor.upsert({
        where: { day_visitor: { day, visitor } },
        create: { day, visitor, isNew: body.isNew === true, landing: path, referrer: refHost(body.ref), country, device },
        update: { views: { increment: 1 } },
      }),
      analyticsDb.sitePageDay.upsert({
        where: { day_path: { day, path } },
        create: { day, path },
        update: { views: { increment: 1 } },
      }),
    ]);
  } catch (e) {
    console.error("visit beacon failed", e instanceof Error ? e.message : e);
  }
  return ok();
}
