import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAllPosts } from "@/lib/posts";

export const maxDuration = 60; // Max duration for Vercel

export async function GET(req: NextRequest) {
  // CRON authentication
  const authHeader = req.headers.get("authorization");
  if (
    process.env.CRON_SECRET &&
    authHeader !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // 1. Get today's date formatted to match our DB ('5 Jul 2026')
    const today = new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short", // 'Jul'
      year: "numeric", // '2026'
    });

    // 2. Fetch all published/ready posts (this logic is the same as the frontend)
    const posts = await getAllPosts();
    
    // 3. Check if there's any post that matches today's date
    const todaysPost = posts.find((p) => p.date === today);

    if (todaysPost) {
      return NextResponse.json({
        success: true,
        message: `Blog is live today: ${todaysPost.title}`,
      });
    } else {
      console.error(`Alert: No blog found for today (${today}). Attempting to send email alert.`);

      // 4. Hit the Google Apps Script Webhook to trigger the email
      const sheetsWebhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
      if (sheetsWebhook) {
        try {
          const response = await fetch(sheetsWebhook, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              action: "emailAlert",
              subject: "CRITICAL: TBC Blog Failed to Go Live Today",
              message: `The cron verification system checked the TBC website and found no blog published for ${today}.\n\nPlease check the Vercel logs and the database immediately.`,
            }),
          });
          
          const text = await response.text();
          console.log("Apps script response:", text);
        } catch (webhookError) {
          console.error("Failed to call Google Apps Script webhook:", webhookError);
        }
      } else {
        console.warn("GOOGLE_SHEETS_WEBHOOK_URL is not configured.");
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
