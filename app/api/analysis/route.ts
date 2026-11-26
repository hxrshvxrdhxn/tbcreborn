import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { analysisRateLimiter } from "@/lib/rate-limit";
import { getClientIp } from "@/lib/security";
import { sendNotificationEmail } from "@/lib/mailer";

function esc(str: string): string {
  if (!str) return "";
  return str.replace(/[&<>"']/g, function(m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m] as string;
  });
}

// ── Strict Zod schema enforcing server-side length limits ─────────────────────
const schema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name cannot exceed 100 characters"),
  email: z.string().trim().email("Invalid email address").max(254, "Email cannot exceed 254 characters"),
  phone: z.string().trim().max(30, "Phone cannot exceed 30 characters").optional(),
  company: z.string().trim().min(1, "Company is required").max(150, "Company cannot exceed 150 characters"),
  address: z.string().trim().min(1, "Address is required").max(300, "Address cannot exceed 300 characters"),
  request: z.string().trim().max(5000, "Request cannot exceed 5000 characters").optional(),
  website: z.string().max(100).optional(), // Honeypot trap
});

function allowedOrigin(value: string): boolean {
  try {
    const host = new URL(value).hostname;
    return (
      host === "turbobytesconsulting.com" ||
      host === "www.turbobytesconsulting.com" ||
      host === "localhost" ||
      (host.startsWith("tbcreborn") && host.endsWith("-hxrshvxrdhxns-projects.vercel.app"))
    );
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    // CSRF Protection: Validate Origin / Referer
    const origin = req.headers.get("origin") || req.headers.get("referer") || "";
    if (!allowedOrigin(origin)) {
      console.error("CSRF Blocked: Invalid Origin", origin);
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const body = await req.json();
    const data = schema.parse(body);

    // Honeypot check
    if (data.website) {
      console.log("Honeypot triggered, silently ignoring request.");
      return NextResponse.json({ success: true });
    }

    // Per-IP rate limiting: 5 per hour
    const ip = getClientIp(req);
    if (analysisRateLimiter.isRateLimited(`analysis_${ip}`)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const message = `Free analysis request\n\nAddress: ${data.address}\n\nRequest: ${data.request || "None"}`;

    // ── Save first, so a mail outage or limit never loses a request ─────────
    try {
      await prisma.contactQuery.create({
        data: {
          name: data.name,
          company: data.company,
          email: data.email,
          phone: data.phone || null,
          service: "Free Analysis",
          message,
        },
      });
    } catch (dbErr) {
      console.error("Failed to save free analysis request:", dbErr instanceof Error ? dbErr.message : dbErr);
    }

    // Google Sheets CRM (fire-and-forget, non-blocking)
    const sheetsWebhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (sheetsWebhook) {
      fetch(sheetsWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "FREE_ANALYSIS",
          name: data.name,
          company: data.company,
          email: data.email,
          phone: data.phone || "",
          service: "Free Analysis",
          budget: "",
          message: `Address: ${data.address}\n\nRequest: ${data.request || "None"}`,
        }),
      }).catch(() => {/* non-fatal */});
    }

    // ── Shared Mail Helper with 100 emails/day cap ──────────────────────────
    await sendNotificationEmail({
      type: "analysis",
      subject: `Free Analysis Request: ${esc(data.company)}`,
      html: `
        <h2>New Free Analysis Request</h2>
        <p><strong>Name:</strong> ${esc(data.name)}</p>
        <p><strong>Company:</strong> ${esc(data.company)}</p>
        <p><strong>Email:</strong> ${esc(data.email)}</p>
        ${data.phone ? `<p><strong>Phone:</strong> ${esc(data.phone)}</p>` : ""}
        <p><strong>Address:</strong> ${esc(data.address)}</p>
        <p><strong>Specific Request:</strong></p>
        <p style="white-space:pre-wrap">${esc(data.request || "None")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Free Analysis form error:", err);
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Something went wrong. Please email harshvardhan@turbobytesconsulting.com or call +91 93547 84377." },
      { status: 500 }
    );
  }
}
