import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const posts = await prisma.post.findMany({
    select: { slug: true, status: true, date: true, publishedAt: true, content: true },
  });
  const guides = await prisma.howToGuide.findMany({
    select: { slug: true, content: true },
  });

  const now = new Date();
  const publishedSlugs = new Set();
  for (const p of posts) {
    const isPub =
      p.status === "published" ||
      (p.status === "scheduled" && p.publishedAt && new Date(p.publishedAt) <= now);
    if (isPub) publishedSlugs.add(p.slug);
  }
  const guideSlugs = new Set(guides.map((g) => g.slug));

  console.log(`Checking internal links against ${publishedSlugs.size} published posts and ${guideSlugs.size} guides...`);

  const brokenLinks = [];
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

  function scan(sourceType, sourceSlug, content) {
    if (!content) return;
    let match;
    linkRegex.lastIndex = 0;
    while ((match = linkRegex.exec(content)) !== null) {
      const url = match[2];
      if (url.startsWith("/blog/")) {
        const slug = url.replace("/blog/", "").split("#")[0].split("?")[0];
        if (!publishedSlugs.has(slug)) {
          brokenLinks.push({ from: `${sourceType}/${sourceSlug}`, to: url, text: match[1] });
        }
      } else if (url.startsWith("/how-to/")) {
        const slug = url.replace("/how-to/", "").split("#")[0].split("?")[0];
        if (!guideSlugs.has(slug)) {
          brokenLinks.push({ from: `${sourceType}/${sourceSlug}`, to: url, text: match[1] });
        }
      }
    }
  }

  for (const p of posts) {
    if (publishedSlugs.has(p.slug)) {
      scan("blog", p.slug, p.content);
    }
  }
  for (const g of guides) {
    scan("how-to", g.slug, g.content);
  }

  if (brokenLinks.length > 0) {
    console.error(`Found ${brokenLinks.length} broken internal links:`);
    console.error(JSON.stringify(brokenLinks, null, 2));
    process.exit(1);
  } else {
    console.log("All internal links verified successfully. No broken links.");
    process.exit(0);
  }
}

main()
  .catch((e) => {
    console.error("Link check failed:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
