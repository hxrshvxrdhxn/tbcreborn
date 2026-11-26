import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyBearerToken } from "@/lib/security";

export async function GET(req: NextRequest) {
  if (!verifyBearerToken(req.headers.get("authorization"), process.env.CRON_SECRET)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
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
