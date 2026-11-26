import { NextRequest, NextResponse } from "next/server";
import { addSession, removeSession } from "@/lib/session";
import { authRateLimiter } from "@/lib/rate-limit";
import { timingSafeStringEqual, getClientIp } from "@/lib/security";
import { z } from "zod";

const loginSchema = z.object({
  password: z.string().min(1).max(256),
});

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);

  if (authRateLimiter.isRateLimited(`auth_${ip}`)) {
    return NextResponse.json(
      { error: "Too many login attempts. Locked for 15 minutes." },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const parsed = loginSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
    }

    const { password } = parsed.data;
    const adminPwd = process.env.ADMIN_PASSWORD;

    if (!adminPwd || !timingSafeStringEqual(password, adminPwd)) {
      return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
    }

    const sessionToken = await addSession();

    const res = NextResponse.json({ success: true });
    res.cookies.set("admin_session", sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 12, // 12 hours
      path: "/",
    });
    return res;
  } catch (err) {
    console.error("Admin auth error:", err);
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }
}

export async function DELETE(req: NextRequest) {
  const token = req.cookies.get("admin_session")?.value;
  if (token) {
    await removeSession(token);
  }
  const res = NextResponse.json({ success: true });
  res.cookies.delete("admin_session");
  return res;
}
