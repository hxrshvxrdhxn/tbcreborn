import * as fs from 'fs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function run() {
  const txtPath = 'c:/Users/user/.gemini/antigravity/brain/45fee501-8de8-479f-9732-ca8a0c3b3e74/scratch/blogs_utf8.txt';
  const text = fs.readFileSync(txtPath, 'utf8');
  
  // Replace weird character 
  let content = text.replace(/ù/g, '-').replace(/û/g, '-');
  
  // Split by the blog post header regex
  // E.g. "19 May 2026  ·  AI Strategy  ·  6 min read" or "╖"
  const regex = /(?:^|\n)(\d{1,2}\s+[a-zA-Z]+\s+20\d{2})\s+[·╖]\s+(.*?)\s+[·╖]\s+(\d+\s*min\s*read)\s*\n/g;
  
  let match;
  let posts = [];
  let lastIndex = 0;
  
  while ((match = regex.exec(content)) !== null) {
    if (lastIndex > 0) {
      posts[posts.length - 1].rawBody = content.substring(lastIndex, match.index).trim();
    }
    
    posts.push({
      dateStr: match[1].trim(),
      category: match[2].trim(),
      readTime: match[3].trim(),
      rawBody: ''
    });
    lastIndex = regex.lastIndex;
  }
  
  if (posts.length > 0 && lastIndex < content.length) {
    posts[posts.length - 1].rawBody = content.substring(lastIndex).trim();
  }
  
  console.log(`Found ${posts.length} posts`);
  
  for (const post of posts) {
    const lines = post.rawBody.split('\n');
    
    let title = '';
    let slug = '';
    let excerpt = '';
    let bodyLines = [];
    
    // First non-empty line is title
    let i = 0;
    while (i < lines.length && !lines[i].trim()) i++;
    if (i < lines.length) {
      title = lines[i].trim();
      i++;
    }
    
    while (i < lines.length) {
      const line = lines[i].trim();
      const lower = line.toLowerCase();
      if (lower.startsWith('url slug:')) {
        slug = line.split(':')[1].trim().replace('/blog/', '').replace(/^\/+/, '');
      } else if (lower.startsWith('target keywords:')) {
        // skip
      } else if (lower.startsWith('meta description:')) {
        excerpt = line.substring('meta description:'.length).trim();
      } else if (line !== '') {
        // If it's a short line without period at end, make it a heading
        if (line.length < 80 && !line.endsWith('.') && !line.endsWith('?') && bodyLines.length > 0 && !line.includes('Turbo Bytes Consulting')) {
          bodyLines.push(`\n## ${line}\n`);
        } else {
          bodyLines.push(line);
        }
      } else {
        bodyLines.push(''); // blank line for paragraph breaks
      }
      i++;
    }
    
    let body = bodyLines.join('\n').trim();
    
    if (!slug) {
      slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }
    
    const postDate = new Date(`${post.dateStr} 10:00:00 GMT+0530`);
    const now = new Date();
    
    // As per user's rule:
    // If the date is <= today (16 June), make them go live immediately (status=published)
    // If later, then scheduled.
    // Wait, let's just make everything <= now published, and > now scheduled.
    let status = 'scheduled';
    if (postDate <= now) {
      status = 'published';
    }
    
    console.log(`Inserting: ${title} (${post.dateStr}) -> ${status}`);
    
    await prisma.post.upsert({
      where: { slug },
      update: {
        title,
        date: post.dateStr,
        category: post.category,
        readTime: post.readTime,
        excerpt,
        content: body,
        status,
        publishedAt: postDate.toISOString(),
      },
      create: {
        slug,
        title,
        date: post.dateStr,
        category: post.category,
        readTime: post.readTime,
        excerpt,
        content: body,
        status,
        publishedAt: postDate.toISOString(),
      }
    });
  }
}

run().catch(console.error).finally(() => prisma.$disconnect());
