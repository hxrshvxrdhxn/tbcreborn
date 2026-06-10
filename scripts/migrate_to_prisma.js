const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const prisma = new PrismaClient();
const POSTS_DIR = path.join(__dirname, '..', 'content', 'posts');

async function main() {
  console.log('Starting migration to Prisma (SQLite)...');
  
  if (!fs.existsSync(POSTS_DIR)) {
    console.log('No posts directory found.');
    return;
  }

  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.mdx') || f.endsWith('.md'));
  
  let count = 0;
  for (const file of files) {
    const slug = file.replace(/\.(mdx|md)$/, '');
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');
    const { data, content } = matter(raw);
    
    const existing = await prisma.post.findUnique({ where: { slug } });
    if (existing) {
      console.log(`Skipping ${slug}, already exists.`);
      continue;
    }

    await prisma.post.create({
      data: {
        slug,
        title: data.title ?? 'Untitled',
        date: data.date ?? new Date().toISOString(),
        category: data.category ?? 'Insight',
        readTime: data.readTime ?? '5 min read',
        excerpt: data.excerpt ?? '',
        content: content.trim(),
        status: data.status ?? 'published',
        publishedAt: data.publishedAt ?? null,
      }
    });
    count++;
    console.log(`Migrated: ${slug}`);
  }
  
  console.log(`Migration complete. Imported ${count} posts.`);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
