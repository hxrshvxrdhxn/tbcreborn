import nodemailer from "nodemailer";
import { prisma } from "@/lib/prisma";

export const NOTIFICATION_RECIPIENT = "harshvardhan@turbobytesconsulting.com";
export const DAILY_EMAIL_CAP = 100;

export interface NotificationEmailPayload {
  type: "contact" | "analysis" | "visibility_check" | "cron";
  subject: string;
  html: string;
  text?: string;
}

export interface MailerResult {
  sent: boolean;
  skipped?: boolean;
  reason?: string;
  error?: string;
}

/**
 * Returns current day in India Standard Time (YYYY-MM-DD).
 */
export function getIstDay(): string {
  return new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
}

// In-memory fallback counter if Postgres is temporarily unreachable
const fallbackDailyCounter = new Map<string, number>();

/**
 * Ensures the SentEmailLog table exists in Postgres before querying/inserting.
 */
let tableVerified = false;
async function ensureSentEmailTable(): Promise<void> {
  if (tableVerified) return;
  try {
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS "SentEmailLog" (
        "id" TEXT PRIMARY KEY,
        "type" TEXT NOT NULL,
        "recipient" TEXT NOT NULL,
        "subject" TEXT NOT NULL,
        "day" TEXT NOT NULL,
        "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `);
    await prisma.$executeRawUnsafe(`
      CREATE INDEX IF NOT EXISTS "SentEmailLog_day_idx" ON "SentEmailLog"("day")
    `);
    tableVerified = true;
  } catch (err) {
    // If raw DDL is restricted or fails, continue gracefully
    console.warn("[mailer] Table creation check notice:", err instanceof Error ? err.message : err);
  }
}

/**
 * Checks Postgres for the number of emails sent today.
 */
export async function getDailySentCount(day: string = getIstDay()): Promise<number> {
  await ensureSentEmailTable();
  try {
    if (prisma.sentEmailLog && typeof prisma.sentEmailLog.count === "function") {
      return await prisma.sentEmailLog.count({
        where: { day },
      });
    }
    return fallbackDailyCounter.get(day) || 0;
  } catch (err) {
    console.warn("[mailer] Postgres count failed, using local counter:", err instanceof Error ? err.message : err);
    return fallbackDailyCounter.get(day) || 0;
  }
}

/**
 * Sends a notification email strictly to harshvardhan@turbobytesconsulting.com.
 * Enforces a hard global limit of 100 emails per day counted in Postgres.
 * Over the cap, emails are skipped and leads are safely retained in the database.
 */
export async function sendNotificationEmail(payload: NotificationEmailPayload): Promise<MailerResult> {
  const day = getIstDay();

  // Enforce global 100/day cap counted in Postgres
  const currentCount = await getDailySentCount(day);
  if (currentCount >= DAILY_EMAIL_CAP) {
    console.warn(
      `[mailer] Global daily cap of ${DAILY_EMAIL_CAP} emails reached for ${day} (${currentCount} already sent). Lead saved, skipping email.`
    );
    return {
      sent: false,
      skipped: true,
      reason: "daily_cap_exceeded",
    };
  }

  // Check SMTP configuration
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.SMTP_HOST) {
    console.warn("[mailer] SMTP credentials not fully configured. Email notification skipped (lead safely saved).");
    return {
      sent: false,
      skipped: true,
      reason: "smtp_not_configured",
    };
  }

  try {
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
      from: process.env.SMTP_FROM || `"TBC Website" <${NOTIFICATION_RECIPIENT}>`,
      to: NOTIFICATION_RECIPIENT, // Strictly sent to harshvardhan@turbobytesconsulting.com
      subject: payload.subject,
      html: payload.html,
      text: payload.text,
    });

    // Record outbound email in Postgres
    try {
      if (prisma.sentEmailLog && typeof prisma.sentEmailLog.create === "function") {
        await prisma.sentEmailLog.create({
          data: {
            type: payload.type,
            recipient: NOTIFICATION_RECIPIENT,
            subject: payload.subject,
            day,
          },
        });
      } else {
        fallbackDailyCounter.set(day, (fallbackDailyCounter.get(day) || 0) + 1);
      }
    } catch (dbErr) {
      console.error("[mailer] Failed to record sent email to Postgres:", dbErr instanceof Error ? dbErr.message : dbErr);
      fallbackDailyCounter.set(day, (fallbackDailyCounter.get(day) || 0) + 1);
    }

    return { sent: true };
  } catch (mailErr) {
    const message = mailErr instanceof Error ? mailErr.message : String(mailErr);
    console.error("[mailer] Outbound email failed (lead safely retained):", message);
    return { sent: false, error: message };
  }
}
