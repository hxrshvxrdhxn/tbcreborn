import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import DOMPurify from "isomorphic-dompurify";

// ── HTML entity escaper (prevents XSS in email body) ──────────────────────────
function esc(str: string): string {
  return DOMPurify.sanitize(str);
}

// ── Simple in-memory rate limiter: max 5 submissions per IP per 1 hour ────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

let upstashRatelimit: Ratelimit | null = null;
if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  upstashRatelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5, "1 h"),
  });
}

async function isRateLimited(ip: string): Promise<boolean> {
  if (upstashRatelimit) {
    try {
      const { success } = await upstashRatelimit.limit(`contact_${ip}`);
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

// ── Zod schema ────────────────────────────────────────────────────────────────
const schema = z.object({
  name: z.string().min(2).max(100),
  company: z.string().min(1).max(150),
  email: z.string().email().max(254),
  phone: z.string().max(30).optional(),
  service: z.string().min(1).max(100),
  budget: z.string().max(50).optional(),
  message: z.string().min(10).max(5000),
  website: z.string().optional(), // honeypot
});

export async function POST(req: NextRequest) {
  try {
    // Basic CSRF Protection: Validate Origin / Referer
    const origin = req.headers.get("origin") || req.headers.get("referer") || "";
    if (!origin.includes("localhost") && !origin.includes("turbobytesconsulting.com") && !origin.includes("vercel.app")) {
      console.error("CSRF Blocked: Invalid Origin", origin);
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const body = await req.json();
    const data = schema.parse(body);

    // Honeypot check: If a bot fills out the visually hidden "website" field,
    // silently drop the request but return a success to fool the bot.
    if (data.website) {
      console.log("Honeypot triggered, silently ignoring request.");
      return NextResponse.json({ success: true });
    }

    // Rate limiting (only after honeypot check to save Redis hits from dumb bots)
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";

    if (await isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.SMTP_HOST) {
      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || '"TBC Website" <harshvardhan@turbobytesconsulting.com>',
      to: "harshvardhan@turbobytesconsulting.com",
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

    // ── Save to Database ────────────────────────────────────────────────────
    try {
      await prisma.contactQuery.create({
        data: {
          name: data.name,
          company: data.company,
          email: data.email,
          phone: data.phone || null,
          service: data.service,
          budget: data.budget || null,
          message: data.message,
        }
      });
    } catch (dbErr) {
      console.error("Failed to save query to DB:", dbErr);
      // Non-fatal, we still sent the email.
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
