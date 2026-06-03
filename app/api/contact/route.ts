import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// ── HTML entity escaper (prevents XSS in email body) ──────────────────────────
function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

// ── Simple in-memory rate limiter: max 5 submissions per IP per 10 minutes ────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function isRateLimited(ip: string): boolean {
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

// ── Zod schema ────────────────────────────────────────────────────────────────
const schema = z.object({
  name: z.string().min(2).max(100),
  company: z.string().min(1).max(150),
  email: z.string().email().max(254),
  phone: z.string().max(30).optional(),
  service: z.string().min(1).max(100),
  budget: z.string().max(50).optional(),
  message: z.string().min(10).max(5000),
});

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const data = schema.parse(body);

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "TBC Website <noreply@turbobytesconsulting.com>",
      to: "info@turbobytesconsulting.com",
      replyTo: data.email,
      subject: `New enquiry from ${esc(data.name)} — ${esc(data.company)}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${esc(data.name)}</p>
        <p><strong>Company:</strong> ${esc(data.company)}</p>
        <p><strong>Email:</strong> ${esc(data.email)}</p>
        ${data.phone ? `<p><strong>Phone:</strong> ${esc(data.phone)}</p>` : ""}
        <p><strong>Service of Interest:</strong> ${esc(data.service)}</p>
        ${data.budget ? `<p><strong>Budget Range:</strong> ${esc(data.budget)}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${esc(data.message)}</p>
      `,
    });

    // ── Google Sheets CRM (fire-and-forget, never blocks the response) ──────
    const sheetsWebhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (sheetsWebhook) {
      fetch(sheetsWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).catch(() => {/* non-fatal — log silently */});
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
