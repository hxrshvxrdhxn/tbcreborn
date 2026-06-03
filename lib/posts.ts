// ─────────────────────────────────────────────────────────────────────────────
// Unified post reader — merges static lib/content.ts + dynamic content/posts/
// ─────────────────────────────────────────────────────────────────────────────
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import { blogPosts as staticPosts, BlogPost } from "./content";

export type { BlogPost };

export type PostStatus = "published" | "draft" | "scheduled";

export interface ManagedPost extends BlogPost {
  status: PostStatus;
  publishedAt: string; // ISO date string
  isManaged: boolean;  // came from content/posts/ (editable in admin)
}

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

// ── Read all MDX posts from content/posts/ ───────────────────────────────────
async function getMdxPosts(): Promise<ManagedPost[]> {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const posts = await Promise.all(
    files.map(async (file): Promise<ManagedPost | null> => {
      const slug = file.replace(/\.(mdx|md)$/, "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
      const { data, content } = matter(raw);

      const status: PostStatus = data.status ?? "published";
      const publishedAt: string = data.publishedAt ?? data.date ?? "";

      // Filter unpublished / future posts on the public side
      if (status === "draft") return null;
      if (
        status === "scheduled" &&
        publishedAt &&
        new Date(publishedAt) > new Date()
      )
        return null;

      const html = (
        await remark().use(remarkHtml, { sanitize: false }).process(content)
      ).toString();

      return {
        slug,
        title: data.title ?? "",
        date: data.date ?? "",
        category: data.category ?? "Insight",
        readTime: data.readTime ?? "5 min read",
        excerpt: data.excerpt ?? "",
        content: html,
        status,
        publishedAt,
        isManaged: true,
      };
    })
  );

  return posts.filter(Boolean) as ManagedPost[];
}

// ── Public API ────────────────────────────────────────────────────────────────

/** All published posts (MDX + static), newest first. */
export async function getAllPosts(): Promise<BlogPost[]> {
  const mdx = await getMdxPosts();
  const combined = [
    ...mdx,
    ...staticPosts.map((p) => ({ ...p, status: "published" as const, publishedAt: p.date, isManaged: false })),
  ];
  return combined.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/** Single post by slug. */
export async function getPostBySlug(
  slug: string
): Promise<BlogPost | undefined> {
  const all = await getAllPosts();
  return all.find((p) => p.slug === slug);
}

/** All slugs (for generateStaticParams). */
export async function getAllSlugs(): Promise<string[]> {
  const all = await getAllPosts();
  return all.map((p) => p.slug);
}

// ── Admin-only API (includes drafts + future scheduled) ──────────────────────

export async function getAdminPosts(): Promise<ManagedPost[]> {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const posts = await Promise.all(
    files.map(async (file): Promise<ManagedPost> => {
      const slug = file.replace(/\.(mdx|md)$/, "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
      const { data, content } = matter(raw);
      const html = (
        await remark().use(remarkHtml, { sanitize: false }).process(content)
      ).toString();

      return {
        slug,
        title: data.title ?? "",
        date: data.date ?? "",
        category: data.category ?? "Insight",
        readTime: data.readTime ?? "5 min read",
        excerpt: data.excerpt ?? "",
        content: html,
        status: data.status ?? "published",
        publishedAt: data.publishedAt ?? data.date ?? "",
        isManaged: true,
      };
    })
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/** Read raw MDX file (for admin editor). */
export function getRawPost(slug: string): {
  frontmatter: Record<string, string>;
  body: string;
} | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
  return { frontmatter: data as Record<string, string>, body: content };
}
