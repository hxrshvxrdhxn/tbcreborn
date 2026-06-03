import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function buildFrontmatter(data: Record<string, string>): string {
  const lines = ["---"];
  const keys = ["title", "date", "category", "readTime", "excerpt", "status", "publishedAt"];
  for (const key of keys) {
    if (data[key] !== undefined && data[key] !== "") {
      // Wrap strings with special chars in quotes
      const val = data[key].includes('"') ? `'${data[key]}'` : `"${data[key]}"`;
      lines.push(`${key}: ${val}`);
    }
  }
  lines.push("---");
  return lines.join("\n");
}

export async function POST(req: NextRequest) {
  // Auth check (double-check beyond middleware)
  const session = req.cookies.get("admin_session")?.value;
  if (!session || session !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { title, body: content, slug: providedSlug, ...meta } = body;

  if (!title || !content) {
    return NextResponse.json({ error: "Title and content are required." }, { status: 400 });
  }

  const slug = providedSlug || slugify(title);
  const fileName = `${slug}.mdx`;
  const filePath = path.join(POSTS_DIR, fileName);

  // Auto-set date if not provided
  if (!meta.date) {
    meta.date = new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true });
  }

  const fileContent = `${buildFrontmatter({ title, ...meta })}\n\n${content.trim()}\n`;
  fs.writeFileSync(filePath, fileContent, "utf8");

  return NextResponse.json({ success: true, slug });
}

export async function DELETE(req: NextRequest) {
  const session = req.cookies.get("admin_session")?.value;
  if (!session || session !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await req.json();
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }

  return NextResponse.json({ success: true });
}
