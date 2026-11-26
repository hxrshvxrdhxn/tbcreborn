import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { howToSearchLimiter } from "@/lib/rate-limit";
import { getClientIp } from "@/lib/security";

export async function GET(req: NextRequest) {
  const ip = getClientIp(req);
  if (howToSearchLimiter.isRateLimited(`howto_search_${ip}`)) {
    return NextResponse.json({ error: "Rate limit exceeded." }, { status: 429 });
  }

  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q")?.trim();

  if (!q || q.length < 2 || q.length > 100) {
    return NextResponse.json({ results: [] });
  }

  try {
    const results = await prisma.howToGuide.findMany({
      where: {
        OR: [
          { title: { contains: q, mode: "insensitive" } },
          { content: { contains: q, mode: "insensitive" } },
          { category: { contains: q, mode: "insensitive" } },
        ],
      },
      select: {
        id: true,
        title: true,
        slug: true,
        category: true,
      },
      take: 10,
    });

    return NextResponse.json({ results });
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json({ error: "Failed to search" }, { status: 500 });
  }
}
