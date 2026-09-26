import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const prisma = new PrismaClient();
const args = process.argv.slice(2);
const isApply = args.includes('--apply');
const dirIndex = args.indexOf('--dir');
const customDir = dirIndex > -1 ? args[dirIndex + 1] : null;

async function run() {
  const postsDir = customDir 
    ? path.resolve(process.cwd(), customDir) 
    : path.resolve(process.cwd(), '..', 'tbc-handoff', 'posts');
  if (!fs.existsSync(postsDir)) {
    console.log('No posts directory found.');
    return;
  }

  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
  let created = 0;
  let updated = 0;
  let skipped = 0;

  console.log(`Found ${files.length} markdown files. Mode: ${isApply ? 'APPLY' : 'DRY-RUN'}`);

  for (const file of files) {
    const filePath = path.join(postsDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const parsed = matter(content);
    const data = parsed.data;
    const body = parsed.content;

    const fullText = `${JSON.stringify(data)} ${body}`;
    if (/\bMectech\b/i.test(fullText)) {
      console.log(`Skipped ${file}: Contains 'Mectech'`);
      skipped++;
      continue;
    }
    if (/\bMPE\b/i.test(fullText)) {
      console.log(`Skipped ${file}: Contains 'MPE'`);
      skipped++;
      continue;
    }
    if (/!/.test(fullText)) {
      console.log(`Skipped ${file}: Contains exclamation mark`);
      skipped++;
      continue;
    }

    if (!data.slug || !data.title || !data.publishedAt) {
      console.log(`Skipped ${file}: Missing required frontmatter`);
      skipped++;
      continue;
    }

    const dateStr = new Intl.DateTimeFormat('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(new Date(data.publishedAt));

    const postData = {
      slug: data.slug,
      title: data.title,
      category: data.category || 'Uncategorized',
      readTime: data.readTime || '5 min read',
      excerpt: data.excerpt || '',
      content: body,
      status: 'scheduled',
      publishedAt: new Date(data.publishedAt).toISOString(),
      seoTitle: data.seoTitle || null,
      seoDescription: data.seoDescription || null,
      pillar: data.pillar || null,
      date: dateStr,
    };

    if (isApply) {
      const existing = await prisma.post.findUnique({ where: { slug: postData.slug } });
      if (existing) {
        await prisma.post.update({
          where: { slug: postData.slug },
          data: postData
        });
        updated++;
      } else {
        await prisma.post.create({
          data: postData
        });
        created++;
      }
    } else {
      const existing = await prisma.post.findUnique({ where: { slug: postData.slug } });
      console.log(`- Slug: ${postData.slug} | date: ${postData.date} | publishedAt: ${postData.publishedAt} | status: ${postData.status} | Will be: ${existing ? 'UPDATED' : 'CREATED'}`);
      if (existing) updated++;
      else created++;
    }
  }

  console.log(`\nSummary:\nCreated: ${created}\nUpdated: ${updated}\nSkipped: ${skipped}`);
}

run().catch(console.error).finally(() => prisma.$disconnect());
