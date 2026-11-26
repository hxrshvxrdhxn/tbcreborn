import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { contactRateLimiter } from "@/lib/rate-limit";
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
  company: z.string().trim().max(150, "Company cannot exceed 150 characters").optional(),
  email: z.string().trim().email("Invalid email address").max(254, "Email cannot exceed 254 characters"),
  phone: z.string().trim().max(30, "Phone cannot exceed 30 characters").optional(),
  service: z.string().trim().min(1, "Service is required").max(100, "Service cannot exceed 100 characters"),
  budget: z.string().trim().max(50, "Budget cannot exceed 50 characters").optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(5000, "Message cannot exceed 5000 characters"),
  foundVia: z.string().trim().max(60, "FoundVia cannot exceed 60 characters").optional(),
  website: z.string().max(100).optional(), // Honeypot trap
  landingPage: z.string().trim().max(500).nullable().optional(),
  referrerPath: z.string().trim().max(500).nullable().optional(),
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

    // Honeypot check: If bot filled 'website', drop silently with 200 OK
    if (data.website) {
      console.log("Honeypot triggered, silently ignoring request.");
      return NextResponse.json({ success: true });
    }

    // Per-IP rate limiting: 5 per hour
    const ip = getClientIp(req);
    if (contactRateLimiter.isRateLimited(`contact_${ip}`)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Google Sheets CRM (fire-and-forget, non-blocking)
    const sheetsWebhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (sheetsWebhook) {
      fetch(sheetsWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          company: data.company || "Not specified",
        }),
      }).catch(() => {/* non-fatal */});
    }

    // ── Save to Database First ──────────────────────────────────────────────
    try {
      await prisma.contactQuery.create({
        data: {
          name: data.name,
          company: data.company || "Not specified",
          email: data.email,
          phone: data.phone || null,
          service: data.service,
          budget: data.budget || null,
          message: data.foundVia ? `${data.message}\n\nFound us via: ${data.foundVia}` : data.message,
          landingPage: data.landingPage || null,
          referrerPath: data.referrerPath || null,
        }
      });
    } catch (dbErr: unknown) {
      console.warn("Failed to save query with tracking columns, retrying without them:", dbErr instanceof Error ? dbErr.message : dbErr);
      try {
        await prisma.contactQuery.create({
          data: {
            name: data.name,
            company: data.company || "Not specified",
            email: data.email,
            phone: data.phone || null,
            service: data.service,
            budget: data.budget || null,
            message: data.foundVia ? `${data.message}\n\nFound us via: ${data.foundVia}` : data.message,
          } as Parameters<typeof prisma.contactQuery.create>[0]["data"]
        });
      } catch (fallbackErr) {
        console.error("Failed to save query to DB even on fallback:", fallbackErr);
      }
    }

    // ── Shared Mail Helper with 100 emails/day cap ──────────────────────────
    const isVisibilityCheck = data.service.toLowerCase().includes("visibility");
    const emailType = isVisibilityCheck ? "visibility_check" : "contact";
    const subjectCompany = data.company ? ` — ${esc(data.company)}` : "";

    await sendNotificationEmail({
      type: emailType,
      subject: isVisibilityCheck
        ? `Free AI Visibility Check: ${esc(data.company || data.name)}`
        : `New enquiry from ${esc(data.name)}${subjectCompany}`,
      html: `
        <h2>${isVisibilityCheck ? "New AI Visibility Check Request" : "New Contact Form Submission"}</h2>
        <p><strong>Name:</strong> ${esc(data.name)}</p>
        ${data.company ? `<p><strong>Company:</strong> ${esc(data.company)}</p>` : ""}
        <p><strong>Email:</strong> ${esc(data.email)}</p>
        ${data.phone ? `<p><strong>Phone:</strong> ${esc(data.phone)}</p>` : ""}
        <p><strong>Service of Interest:</strong> ${esc(data.service)}</p>
        ${data.foundVia ? `<p><strong>Found us via:</strong> ${esc(data.foundVia)}</p>` : ""}
        ${data.budget ? `<p><strong>Budget Range:</strong> ${esc(data.budget)}</p>` : ""}
        <p><strong>Message / Queries:</strong></p>
        <p style="white-space:pre-wrap">${esc(data.message)}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Something went wrong. Please email harshvardhan@turbobytesconsulting.com or call +91 93547 84377." },
      { status: 500 }
    );
  }
}
