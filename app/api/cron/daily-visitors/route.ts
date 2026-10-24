import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { analyticsDb, istDay } from "@/lib/visits";

// Daily website summary, emailed at 09:00 India time for the previous day.
// Vercel calls this with the CRON_SECRET bearer token; ?day=YYYY-MM-DD lets an owner re-send a past day.

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const TO = "harshvardhan@turbobytesconsulting.com";
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

function p75(values: number[]): number | null {
  if (!values.length) return null;
  const s = [...values].sort((a, b) => a - b);
  return s[Math.min(s.length - 1, Math.floor(0.75 * (s.length - 1)))];
}

function tally<T>(rows: T[], key: (r: T) => string | null, limit = 5): [string, number][] {
  const m = new Map<string, number>();
  for (const r of rows) {
    const k = key(r) || "Direct / unknown";
    m.set(k, (m.get(k) || 0) + 1);
  }
  return [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, limit);
}

// Google's thresholds: good / needs improvement / poor
const VITAL_INFO: Record<string, { label: string; good: number; poor: number; unit: "ms" | "" }> = {
  LCP: { label: "Largest content shown", good: 2500, poor: 4000, unit: "ms" },
  INP: { label: "Response to taps and clicks", good: 200, poor: 500, unit: "ms" },
  CLS: { label: "Layout stability", good: 0.1, poor: 0.25, unit: "" },
  FCP: { label: "First content shown", good: 1800, poor: 3000, unit: "ms" },
  TTFB: { label: "Server response", good: 800, poor: 1800, unit: "ms" },
};

export async function GET(req: NextRequest) {
  if (!process.env.CRON_SECRET || req.headers.get("authorization") !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const asked = req.nextUrl.searchParams.get("day");
  const day = asked && /^\d{4}-\d{2}-\d{2}$/.test(asked) ? asked : istDay(new Date(Date.now() - 24 * 3600 * 1000));
  const weekAgo = istDay(new Date(new Date(`${day}T12:00:00+05:30`).getTime() - 7 * 24 * 3600 * 1000));

  const [visitors, lastWeek, pages, vitals] = await Promise.all([
    analyticsDb.siteVisitor.findMany({ where: { day }, select: { isNew: true, views: true, referrer: true, country: true, device: true } }),
    analyticsDb.siteVisitor.findMany({ where: { day: weekAgo }, select: { isNew: true, views: true, referrer: true, country: true, device: true } }),
    analyticsDb.sitePageDay.findMany({ where: { day }, orderBy: { views: "desc" }, take: 8, select: { path: true, views: true } }),
    analyticsDb.siteVital.findMany({ where: { day }, select: { metric: true, value: true, device: true } }),
  ]);

  const total = visitors.length;
  const fresh = visitors.filter((v) => v.isNew).length;
  const views = visitors.reduce((s, v) => s + v.views, 0);
  const change = lastWeek.length ? Math.round(((total - lastWeek.length) / lastWeek.length) * 100) : null;

  const vitalRows = Object.entries(VITAL_INFO).map(([k, info]) => {
    const v = p75(vitals.filter((x) => x.metric === k).map((x) => x.value));
    if (v === null) return "";
    const rating = v <= info.good ? "Good" : v <= info.poor ? "Needs work" : "Poor";
    const colour = rating === "Good" ? "#13563A" : rating === "Needs work" ? "#9A6B00" : "#B42318";
    const shown = info.unit === "ms" ? `${(v / 1000).toFixed(2)} s` : v.toFixed(3);
    return `<tr><td>${info.label}</td><td style="text-align:right">${shown}</td><td style="color:${colour};font-weight:600">${rating}</td></tr>`;
  }).join("");

  const list = (rows: [string, number][]) => rows.map(([k, n]) => `<tr><td>${esc(k)}</td><td style="text-align:right">${n}</td></tr>`).join("");
  const dateLabel = new Date(`${day}T12:00:00+05:30`).toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", timeZone: "Asia/Kolkata" });
  const td = "padding:6px 10px;border-bottom:1px solid #E5EDE8";

  const html = `
  <div style="font-family:Inter,Arial,sans-serif;color:#0D1B2A;max-width:560px">
    <h2 style="margin:0 0 4px">Website summary — ${dateLabel}</h2>
    <p style="margin:0 0 20px;color:#6B7280">turbobytesconsulting.com, India time${change === null ? "" : `, ${change >= 0 ? "+" : ""}${change}% visitors vs the same day last week`}</p>
    <table style="border-collapse:collapse;width:100%;font-size:15px">
      <tr><td style="${td}">Visitors</td><td style="${td};text-align:right;font-weight:700">${total}</td></tr>
      <tr><td style="${td}">New visitors</td><td style="${td};text-align:right;font-weight:700">${fresh}</td></tr>
      <tr><td style="${td}">Returning visitors</td><td style="${td};text-align:right">${total - fresh}</td></tr>
      <tr><td style="${td}">Page views</td><td style="${td};text-align:right">${views}</td></tr>
    </table>
    ${pages.length ? `<h3 style="margin:24px 0 6px">Top pages</h3><table style="border-collapse:collapse;width:100%;font-size:14px">${pages.map((p) => `<tr><td>${esc(p.path)}</td><td style="text-align:right">${p.views}</td></tr>`).join("")}</table>` : ""}
    ${total ? `<h3 style="margin:24px 0 6px">Where visitors came from</h3><table style="border-collapse:collapse;width:100%;font-size:14px">${list(tally(visitors, (v) => v.referrer))}</table>` : ""}
    ${total ? `<h3 style="margin:24px 0 6px">Countries and devices</h3><table style="border-collapse:collapse;width:100%;font-size:14px">${list(tally(visitors, (v) => v.country))}${list(tally(visitors, (v) => v.device, 3))}</table>` : ""}
    ${vitalRows ? `<h3 style="margin:24px 0 6px">Speed for real visitors (75th percentile)</h3><table style="border-collapse:collapse;width:100%;font-size:14px">${vitalRows}</table>` : ""}
    <p style="margin-top:24px;color:#6B7280;font-size:12px">Counted without cookies, bots filtered out. Visitors are counted once per day per browser.</p>
  </div>`;

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.SMTP_HOST) {
    return NextResponse.json({ error: "Email service not configured.", day, total, fresh, views }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
  await transporter.sendMail({
    from: process.env.SMTP_FROM || '"TBC Website" <harshvardhan@turbobytesconsulting.com>',
    to: TO,
    subject: `Website: ${total} visitors, ${fresh} new — ${dateLabel}`,
    html,
  });

  return NextResponse.json({ success: true, day, total, fresh, views });
}
