import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const targetFile = process.argv[2];
if (!targetFile) {
  console.error("Usage: node scripts/import-content.mjs <path-to-json>");
  process.exit(1);
}

const resolvedPath = path.resolve(process.cwd(), targetFile);
if (!fs.existsSync(resolvedPath)) {
  console.error(`File not found: ${resolvedPath}`);
  process.exit(1);
}

const raw = JSON.parse(fs.readFileSync(resolvedPath, "utf8"));
const posts = Array.isArray(raw.posts) ? raw.posts : [];
const guides = Array.isArray(raw.howToGuides) ? raw.howToGuides : [];

console.log(`Loaded ${posts.length} posts and ${guides.length} how-to guides from ${path.basename(resolvedPath)}`);

const prisma = new PrismaClient();

async function main() {
  let postsUpserted = 0;
  let guidesUpserted = 0;

  for (const p of posts) {
    if (!p.slug) continue;
    const createData = {
      id: p.id,
      slug: p.slug,
      title: p.title,
      date: p.date,
      category: p.category,
      readTime: p.readTime,
      excerpt: p.excerpt,
      content: p.content,
      status: p.status,
      publishedAt: p.publishedAt ?? null,
      seoTitle: p.seoTitle ?? null,
      seoDescription: p.seoDescription ?? null,
      pillar: p.pillar ?? null,
      createdAt: p.createdAt ? new Date(p.createdAt) : undefined,
      updatedAt: p.updatedAt ? new Date(p.updatedAt) : undefined,
    };
    const { id, ...updateData } = createData;

    await prisma.post.upsert({
      where: { slug: p.slug },
      create: createData,
      update: updateData,
    });
    postsUpserted++;
  }

  for (const g of guides) {
    if (!g.slug) continue;
    const createData = {
      id: g.id,
      slug: g.slug,
      title: g.title,
      category: g.category,
      content: g.content,
      seoTitle: g.seoTitle ?? null,
      seoDescription: g.seoDescription ?? null,
      pillar: g.pillar ?? null,
      createdAt: g.createdAt ? new Date(g.createdAt) : undefined,
      updatedAt: g.updatedAt ? new Date(g.updatedAt) : undefined,
    };
    const { id, ...updateData } = createData;

    await prisma.howToGuide.upsert({
      where: { slug: g.slug },
      create: createData,
      update: updateData,
    });
    guidesUpserted++;
  }

  console.log(`Import completed successfully:`);
  console.log(`- Total posts upserted: ${postsUpserted}`);
  console.log(`- Total how-to guides upserted: ${guidesUpserted}`);
}

main()
  .catch((err) => {
    console.error(`Import failed: ${err.message}`);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
