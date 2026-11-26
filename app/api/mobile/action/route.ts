import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyBearerToken } from "@/lib/security";

export const maxDuration = 60;

export async function POST(req: NextRequest) {
  if (!verifyBearerToken(req.headers.get("authorization"), process.env.CRON_SECRET)) {
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
      await prisma.post.delete({ where: { slug } });

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
