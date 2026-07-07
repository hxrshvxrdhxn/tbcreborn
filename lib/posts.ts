import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import sanitizeHtml from "sanitize-html";
import { blogPosts as staticPosts, BlogPost } from "./content";
import { prisma } from "./prisma";

export type { BlogPost };

export type PostStatus = "published" | "draft" | "scheduled";

export interface ManagedPost extends BlogPost {
  id: string;
  status: PostStatus;
  publishedAt: string | null;
  isManaged: boolean;
  seoTitle?: string | null;
  seoDescription?: string | null;
  pillar?: string | null;
}

// ── File System Scanning ─────────────────────────────────────────────────────

const postsDirectory = path.join(process.cwd(), "content", "posts");

export async function getLocalMdxPosts(): Promise<ManagedPost[]> {
  if (!fs.existsSync(postsDirectory)) return [];
  const filenames = fs.readdirSync(postsDirectory);
  const now = new Date();

  const posts = await Promise.all(
    filenames
      .filter((f) => f.endsWith(".mdx"))
      .map(async (filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data, content } = matter(fileContents);

        const isPublished = data.status === "published";
        const isScheduledAndReady =
          data.status === "scheduled" &&
          data.publishedAt &&
          new Date(data.publishedAt) <= now;

        // If no status is provided in MDX but there is a date <= now, assume published
        const isImplicitlyPublished =
          !data.status && data.date && new Date(data.date) <= now;

        if (!isPublished && !isScheduledAndReady && !isImplicitlyPublished) {
          return null;
        }

        return {
          id: filename,
          slug: filename.replace(/\.mdx$/, ""),
          title: data.title || "Untitled",
          date: data.date || new Date().toISOString(),
          category: data.category || "Uncategorized",
          readTime: data.readTime || "5 min read",
          excerpt: data.excerpt || "",
          content: content,
          status: (data.status as PostStatus) || "published",
          publishedAt: data.publishedAt || data.date || null,
          isManaged: false, // from filesystem
        } as ManagedPost;
      })
  );

  return posts.filter(Boolean) as ManagedPost[];
}

// ── Public API ────────────────────────────────────────────────────────────────

export async function getAllPosts(): Promise<BlogPost[]> {
  const dbPosts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const mdxPosts = await Promise.all(
    dbPosts.map(async (post) => {
      const now = new Date();
      const isPublished = post.status === "published";
      const isScheduledAndReady =
        post.status === "scheduled" &&
        post.publishedAt &&
        new Date(post.publishedAt) <= now;

      if (!isPublished && !isScheduledAndReady) {
        return null;
      }

      return {
        id: post.id,
        slug: post.slug,
        title: post.title,
        date: post.date,
        category: post.category,
        readTime: post.readTime,
        excerpt: post.excerpt,
        content: post.content,
        status: post.status as PostStatus,
        publishedAt: post.publishedAt,
        isManaged: true,
        seoTitle: post.seoTitle,
        seoDescription: post.seoDescription,
        pillar: post.pillar,
      } as ManagedPost;
    })
  );

  const validMdxPosts = mdxPosts.filter(Boolean) as ManagedPost[];
  const localMdxPosts = await getLocalMdxPosts();

  const combinedMap = new Map<
    string,
    | ManagedPost
    | (BlogPost & {
        status: "published";
        publishedAt: string;
        isManaged: boolean;
      })
  >();

  // Add static
  for (const p of staticPosts) {
    combinedMap.set(p.slug, {
      ...p,
      status: "published",
      publishedAt: p.date,
      isManaged: false,
    });
  }

  // Add local MDX (overrides static if same slug)
  for (const p of localMdxPosts) {
    combinedMap.set(p.slug, p);
  }

  // Add DB posts (overrides local MDX and static if same slug)
  for (const p of validMdxPosts) {
    combinedMap.set(p.slug, p);
  }

  const combined = Array.from(combinedMap.values());

  return combined.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(
  slug: string
): Promise<BlogPost | undefined> {
  let post: ManagedPost | undefined = undefined;
  
  // 1. Try DB first
  const dbPost = await prisma.post.findUnique({
    where: { slug },
  });

  if (dbPost) {
    const now = new Date();
    const isPublished = dbPost.status === "published";
    const isScheduledAndReady =
      dbPost.status === "scheduled" &&
      dbPost.publishedAt &&
      new Date(dbPost.publishedAt) <= now;

    if (isPublished || isScheduledAndReady) {
      post = {
        id: dbPost.id,
        slug: dbPost.slug,
        title: dbPost.title,
        date: dbPost.date,
        category: dbPost.category,
        readTime: dbPost.readTime,
        excerpt: dbPost.excerpt,
        content: dbPost.content,
        status: dbPost.status as PostStatus,
        publishedAt: dbPost.publishedAt,
        isManaged: true,
        seoTitle: dbPost.seoTitle,
        seoDescription: dbPost.seoDescription,
        pillar: dbPost.pillar,
      } as ManagedPost;
    }
  }

  // 2. If not in DB, try local MDX
  if (!post) {
    const local = await getLocalMdxPosts();
    post = local.find(p => p.slug === slug);
  }

  // 3. If not local MDX, try static
  if (!post) {
    const staticPost = staticPosts.find(p => p.slug === slug);
    if (staticPost) {
      post = {
        ...staticPost,
        status: "published",
        publishedAt: staticPost.date,
        isManaged: false,
      };
    }
  }

  if (!post) return undefined;

  const rawHtml = (
    await remark().use(remarkHtml).process(post.content)
  ).toString();
  
  const html = sanitizeHtml(rawHtml, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      "img",
      "h1",
      "h2",
      "iframe",
    ]),
    allowedAttributes: {
        ...sanitizeHtml.defaults.allowedAttributes,
        "*": ["class", "id"],
    },
  });

  return { ...post, content: html };
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

  const posts = await Promise.all(
    dbPosts.map(async (post) => {
      return {
        id: post.id,
        slug: post.slug,
        title: post.title,
        date: post.date,
        category: post.category,
        readTime: post.readTime,
        excerpt: post.excerpt,
        content: post.content,
        status: post.status as PostStatus,
        publishedAt: post.publishedAt,
        isManaged: true,
        seoTitle: post.seoTitle,
        seoDescription: post.seoDescription,
        pillar: post.pillar,
      } as ManagedPost;
    })
  );

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
