import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isValidSession } from "@/lib/redis";

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function POST(req: NextRequest) {
  // Auth check
  const session = req.cookies.get("admin_session")?.value;
  const valid = session ? await isValidSession(session) : false;
  if (!valid) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { title, body: content, slug: providedSlug, ...meta } = body;

  if (!title || !content) {
    return NextResponse.json({ error: "Title and content are required." }, { status: 400 });
  }

  const slug = providedSlug || slugify(title);

  // Auto-set date if not provided
  if (!meta.date) {
    meta.date = new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  try {
    // Upsert the post
    await prisma.post.upsert({
      where: { slug },
      update: {
        title,
        content: content.trim(),
        date: meta.date,
        category: meta.category || "Insight",
        readTime: meta.readTime || "5 min read",
        excerpt: meta.excerpt || "",
        status: meta.status || "published",
        publishedAt: meta.publishedAt || null,
      },
      create: {
        slug,
        title,
        content: content.trim(),
        date: meta.date,
        category: meta.category || "Insight",
        readTime: meta.readTime || "5 min read",
        excerpt: meta.excerpt || "",
        status: meta.status || "published",
        publishedAt: meta.publishedAt || null,
      }
    });

    return NextResponse.json({ success: true, slug });
  } catch (error) {
    console.error("Failed to save post:", error);
    return NextResponse.json({ error: "Failed to save to database." }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const session = req.cookies.get("admin_session")?.value;
  const valid = session ? await isValidSession(session) : false;
  if (!valid) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await req.json();

  try {
    await prisma.post.delete({
      where: { slug }
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete post:", error);
    return NextResponse.json({ error: "Failed to delete from database." }, { status: 500 });
  }
}
