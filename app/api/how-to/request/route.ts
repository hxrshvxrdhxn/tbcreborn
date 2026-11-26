import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { howToRequestLimiter } from "@/lib/rate-limit";
import { getClientIp } from "@/lib/security";

const schema = z.object({
  query: z.string().trim().min(3, "Query must be at least 3 characters").max(300, "Query cannot exceed 300 characters"),
  email: z.string().trim().email("Invalid email address").max(254, "Email cannot exceed 254 characters"),
});

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  if (howToRequestLimiter.isRateLimited(`howto_req_${ip}`)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid request data." }, { status: 400 });
    }

    const { query, email } = parsed.data;

    const newRequest = await prisma.howToRequest.create({
      data: { query, email },
    });

    return NextResponse.json({ success: true, request: newRequest });
  } catch (error) {
    console.error("Failed to submit how-to request:", error);
    return NextResponse.json(
      { error: "Failed to submit request" },
      { status: 500 }
    );
  }
}
