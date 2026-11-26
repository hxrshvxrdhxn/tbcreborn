import { NextRequest, NextResponse } from "next/server";
import { analyticsDb, cleanPath, deviceOf, istDay, isBot, refHost, visitorKey } from "@/lib/visits";
import { visitRateLimiter } from "@/lib/rate-limit";
import { getClientIp } from "@/lib/security";

// Cookieless visit beacon. Body: { t: "view", path, ref, isNew } or { t: "vital", path, name, value }.
// Always answers 204 so a tracking hiccup never shows up for the visitor.

const VITALS = new Set(["LCP", "INP", "CLS", "FCP", "TTFB"]);
const ok = () => new NextResponse(null, { status: 204 });

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    // Rate limit visit beacons to 60 requests per minute per IP
    if (visitRateLimiter.isRateLimited(`visit_${ip}`)) {
      return ok();
    }

    const ua = req.headers.get("user-agent") || "";
    if (isBot(ua)) return ok();

    const rawBody = await req.json().catch(() => null);
    if (!rawBody || typeof rawBody !== "object") return ok();

    const path = cleanPath(typeof rawBody.path === "string" ? rawBody.path.slice(0, 200) : "");
    if (!path) return ok();

    const day = istDay();
    const device = deviceOf(ua);

    if (rawBody.t === "vital") {
      const value = Number(rawBody.value);
      const name = typeof rawBody.name === "string" ? rawBody.name : "";
      if (VITALS.has(name) && Number.isFinite(value) && value >= 0 && value < 120000) {
        await analyticsDb.siteVital.create({
          data: {
            day,
            metric: name,
            value,
            path,
            device: device ? device.slice(0, 50) : null,
          },
        });
      }
      return ok();
    }

    const visitor = visitorKey(ip, ua, day);
    const country = req.headers.get("x-vercel-ip-country") || null;
    const ref = typeof rawBody.ref === "string" ? refHost(rawBody.ref.slice(0, 500)) : null;

    await Promise.all([
      analyticsDb.siteVisitor.upsert({
        where: { day_visitor: { day, visitor } },
        create: {
          day,
          visitor,
          isNew: rawBody.isNew === true,
          landing: path,
          referrer: ref,
          country: country ? country.slice(0, 50) : null,
          device: device ? device.slice(0, 50) : null,
        },
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
