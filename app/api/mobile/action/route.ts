import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const maxDuration = 60; // We may trigger generation here

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (
    !process.env.CRON_SECRET ||
    authHeader !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { slug, action } = await req.json();

    if (!slug || !["approve", "reject"].includes(action)) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    if (action === "approve") {
      await prisma.post.update({
        where: { slug },
        data: {
          status: "published",
          publishedAt: new Date().toISOString(),
        },
      });
      return NextResponse.json({ success: true, message: "Post published." });
    }

    if (action === "reject") {
      // Delete the rejected post
      await prisma.post.delete({ where: { slug } });

      // Trigger the generation of a new post immediately
      // We can call our own cron endpoint internally
      // Fixed origin: the production domain, this deployment's own Vercel URL, or localhost.
      // Never the request's Host header, which the caller controls.
      const origin =
        process.env.VERCEL_ENV === "production"
          ? "https://turbobytesconsulting.com"
          : process.env.VERCEL_URL
            ? `https://${process.env.VERCEL_URL}`
            : "http://localhost:3000";
      const generateUrl = `${origin}/api/cron/generate-blog`;
      
      const genReq = await fetch(generateUrl, {
        headers: {
          authorization: `Bearer ${process.env.CRON_SECRET || ""}`
        }
      });

      if (!genReq.ok) {
        throw new Error("Failed to generate replacement post");
      }

      return NextResponse.json({ success: true, message: "Post rejected and new post generating." });
    }
  } catch {
    return NextResponse.json({ error: "Action failed" }, { status: 500 });
  }
}
