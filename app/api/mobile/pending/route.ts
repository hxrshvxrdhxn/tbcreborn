import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  // Mobile app authentication (simple secret)
  const authHeader = req.headers.get("authorization");
  if (
    process.env.CRON_SECRET &&
    authHeader !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Find the most recent draft post
    const pendingPost = await prisma.post.findFirst({
      where: { status: "draft" },
      orderBy: { createdAt: "desc" },
    });

    if (!pendingPost) {
      return NextResponse.json({ pending: false });
    }

    return NextResponse.json({ pending: true, post: pendingPost });
  } catch {
    return NextResponse.json({ error: "Failed to fetch pending post" }, { status: 500 });
  }
}
