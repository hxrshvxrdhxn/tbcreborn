import { NextRequest, NextResponse } from "next/server";
import { getAllPosts } from "@/lib/posts";
import { verifyBearerToken } from "@/lib/security";
import { sendNotificationEmail } from "@/lib/mailer";

export const maxDuration = 60;

export async function GET(req: NextRequest) {
  if (!verifyBearerToken(req.headers.get("authorization"), process.env.CRON_SECRET)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const today = new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    const posts = await getAllPosts();
    const todaysPost = posts.find((p) => p.date === today);

    if (todaysPost) {
      return NextResponse.json({
        success: true,
        message: `Blog is live today: ${todaysPost.title}`,
      });
    } else {
      console.error(`Alert: No blog found for today (${today}). Attempting to send email alert.`);

      await sendNotificationEmail({
        type: "cron",
        subject: "CRITICAL: TBC Blog Failed to Go Live Today",
        html: `
          <h2>CRITICAL: TBC Blog Failed to Go Live Today</h2>
          <p>The cron verification system checked the TBC website and found no blog published for <strong>${today}</strong>.</p>
          <p>Please check the server logs and the database immediately.</p>
        `,
      });

      // Google Apps Script Webhook fallback if configured
      const sheetsWebhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
      if (sheetsWebhook) {
        try {
          await fetch(sheetsWebhook, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              action: "emailAlert",
              subject: "CRITICAL: TBC Blog Failed to Go Live Today",
              message: `The cron verification system checked the TBC website and found no blog published for ${today}.\n\nPlease check the server logs and the database immediately.`,
            }),
          });
        } catch (webhookError) {
          console.error("Failed to call Google Apps Script webhook:", webhookError);
        }
      }

      return NextResponse.json(
        { error: "No blog live today. Alert triggered." },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Cron Error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to verify blog" },
      { status: 500 }
    );
  }
}
