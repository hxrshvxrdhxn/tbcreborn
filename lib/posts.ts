import { remark } from "remark";
import remarkHtml from "remark-html";
import DOMPurify from "isomorphic-dompurify";
import { blogPosts as staticPosts, BlogPost } from "./content";
import { prisma } from "./prisma";

export type { BlogPost };

export type PostStatus = "published" | "draft" | "scheduled";

export interface ManagedPost extends BlogPost {
  id: string;
  status: PostStatus;
  publishedAt: string | null;
  isManaged: boolean;
}

// ── Public API ────────────────────────────────────────────────────────────────

export async function getAllPosts(): Promise<BlogPost[]> {
  const dbPosts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const mdxPosts = await Promise.all(dbPosts.map(async (post) => {
    const now = new Date();
    const isPublished = post.status === "published";
    const isScheduledAndReady = post.status === "scheduled" && post.publishedAt && new Date(post.publishedAt) <= now;

    if (!isPublished && !isScheduledAndReady) {
      return null;
    }

    const rawHtml = (
      await remark().use(remarkHtml).process(post.content)
    ).toString();
    const html = DOMPurify.sanitize(rawHtml);

    return {
      id: post.id,
      slug: post.slug,
      title: post.title,
      date: post.date,
      category: post.category,
      readTime: post.readTime,
      excerpt: post.excerpt,
      content: html,
      status: post.status as PostStatus,
      publishedAt: post.publishedAt,
      isManaged: true,
    } as ManagedPost;
  }));

  const validMdxPosts = mdxPosts.filter(Boolean) as ManagedPost[];

  const combined = [
    ...validMdxPosts,
    ...staticPosts.map((p) => ({ ...p, status: "published" as const, publishedAt: p.date, isManaged: false })),
  ];
  return combined.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const all = await getAllPosts();
  return all.find((p) => p.slug === slug);
}

export async function getAllSlugs(): Promise<string[]> {
  const all = await getAllPosts();
  return all.map((p) => p.slug);
}

// ── Admin API ────────────────────────────────────────────────────────────────

export async function getAdminPosts(): Promise<ManagedPost[]> {
  const dbPosts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const posts = await Promise.all(dbPosts.map(async (post) => {
    const rawHtml = (
      await remark().use(remarkHtml).process(post.content)
    ).toString();
    const html = DOMPurify.sanitize(rawHtml);

    return {
      id: post.id,
      slug: post.slug,
      title: post.title,
      date: post.date,
      category: post.category,
      readTime: post.readTime,
      excerpt: post.excerpt,
      content: html,
      status: post.status as PostStatus,
      publishedAt: post.publishedAt,
      isManaged: true,
    } as ManagedPost;
  }));

  return posts;
}

export async function getRawPost(slug: string) {
  const post = await prisma.post.findUnique({
    where: { slug },
  });
  if (!post) return null;
  return {
    frontmatter: {
      title: post.title,
      date: post.date,
      category: post.category,
      readTime: post.readTime,
      excerpt: post.excerpt,
      status: post.status,
      publishedAt: post.publishedAt || "",
    },
    body: post.content,
  };
}
