import * as fs from 'fs';
import * as path from 'path';
const mammoth = require('mammoth');
const TurndownService = require('turndown');
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const turndownService = new TurndownService();

async function run() {
  const docsDir = 'C:\\Users\\user\\Downloads\\TBC blogs till aug end';
  const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.docx'));
  
  for (const file of files) {
    const filePath = path.join(docsDir, file);
    console.log(`Processing ${file}...`);
    
    const result = await mammoth.convertToHtml({ path: filePath });
    let html = result.value;
    
    // Replace non-breaking spaces and some weird chars
    html = html.replace(/&#183;/g, '·').replace(/&#8212;/g, '—').replace(/&#8211;/g, '–');
    
    let markdown = turndownService.turndown(html);
    console.log("Markdown preview:", markdown.substring(0, 200));
    
    // Split into posts by looking for dates like "19 May 2026 · AI Strategy · 6 min read"
    const regex = /(?:\n|^)[_\s\*]*(\d{1,2}\s+[a-zA-Z]+\s+20\d{2})\s*(?:[·\|–\-])\s*(.+?)\s*(?:[·\|–\-])\s*(\d+\s*min\s*read)[_\s\*]*(?:\n|$)/g;
    
    let match;
    let posts = [];
    let lastIndex = 0;
    
    while ((match = regex.exec(markdown)) !== null) {
      if (lastIndex > 0) {
        posts[posts.length - 1].content = markdown.substring(lastIndex, match.index).trim();
      }
      
      posts.push({
        dateStr: match[1].trim(),
        category: match[2].replace(/[\*\\]/g, '').trim(),
        readTime: match[3].replace(/[\*\\]/g, '').trim(),
        content: ''
      });
      lastIndex = regex.lastIndex;
    }
    
    if (posts.length > 0 && lastIndex < markdown.length) {
      posts[posts.length - 1].content = markdown.substring(lastIndex).trim();
    }
    
    console.log(`Found ${posts.length} posts`);
    
    for (const post of posts) {
      // Parse content
      const lines = post.content.split('\n');
      
      // Usually Title is the first non-empty line
      let title = '';
      let slug = '';
      let excerpt = '';
      let bodyLines = [];
      let i = 0;
      
      while (i < lines.length && !lines[i].trim()) i++;
      if (i < lines.length) {
        title = lines[i].replace(/^#+\s*/, '').replace(/[*_]/g, '').trim();
        i++;
      }
      
      while (i < lines.length) {
        const line = lines[i].trim();
        if (line.toLowerCase().startsWith('url slug:')) {
            slug = line.split(':')[1].trim().replace('/blog/', '');
        } else if (line.toLowerCase().startsWith('target keywords:')) {
            // ignore
        } else if (line.toLowerCase().startsWith('meta description:')) {
            excerpt = line.substring('meta description:'.length).trim();
        } else if (line !== '') {
            bodyLines.push(lines[i]); // Keep original formatting
        }
        i++;
      }
      
      let body = bodyLines.join('\n').trim();
      // Remove any heading block of the same title if it exists
      if (body.startsWith(title)) {
        body = body.substring(title.length).trim();
      }
      
      if (!slug) {
        slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      }
      
      const postDate = new Date(`${post.dateStr} 10:00:00 GMT+0530`);
      const now = new Date();
      
      let status = 'scheduled';
      if (postDate <= now) {
          status = 'published';
      }
      
      console.log(`Inserting: ${title} (${post.dateStr}) -> ${status}`);
      
      // Upsert in DB
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
}

run().catch(console.error).finally(() => prisma.$disconnect());
