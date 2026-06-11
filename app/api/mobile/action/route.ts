import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const maxDuration = 60; // We may trigger generation here

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (
    process.env.CRON_SECRET &&
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
      const host = req.headers.get("host");
      const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
      const generateUrl = `${protocol}://${host}/api/cron/generate-blog`;
      
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
