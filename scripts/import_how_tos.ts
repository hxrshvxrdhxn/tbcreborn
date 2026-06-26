import * as fs from 'fs';
import * as path from 'path';
import mammoth from 'mammoth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function generateSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

async function parseFile(filePath: string): Promise<any[]> {
  const ext = path.extname(filePath).toLowerCase();
  let text = '';

  if (ext === '.txt') {
    text = fs.readFileSync(filePath, 'utf-8');
  } else if (ext === '.docx') {
    const result = await mammoth.extractRawText({ path: filePath });
    text = result.value;
  } else {
    return [];
  }

  const lines = text.split(/\r?\n/);
  const guides: any[] = [];
  
  let currentCategory = 'Uncategorized';
  let currentGuide: any = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Check for category header: previous line before === or current line is uppercase and short
    if (line.match(/^={10,}$/)) {
      // Look back for category name
      let catLine = '';
      for (let j = i - 1; j >= 0; j--) {
        if (lines[j].trim()) {
          catLine = lines[j].trim();
          break;
        }
      }
      if (catLine && !catLine.includes('TURBO BYTES CONSULTING')) {
        currentCategory = catLine;
      }
      continue;
    }

    // Skip separator lines
    if (line.match(/^-{10,}$/)) {
      continue;
    }

    // Ignore file headers
    if (line.includes('TURBO BYTES CONSULTING — HOW-TO GUIDES') || line.includes('harshvardhan@turbobytesconsulting.com')) {
      continue;
    }

    // Match title: "101. How to..." or "How to..."
    const titleMatch = line.match(/^(\d+)\.\s+(.*)/) || line.match(/^(How to\s+.*)/i);
    
    // Check if it's actually a title
    if (titleMatch && line.length < 200 && (!currentGuide || (lines[i-1] !== undefined && lines[i-1].trim().match(/^-{10,}$/)) || (lines[i-1] !== undefined && lines[i-1].trim() === ''))) {
      if (currentGuide) {
        guides.push(currentGuide);
      }
      currentGuide = {
        title: titleMatch[2] || titleMatch[1],
        category: currentCategory,
        content: [],
      };
      continue;
    }

    // Accumulate content
    if (currentGuide) {
      if (line === '' && currentGuide.content.length === 0) continue; // Skip leading empty lines
      currentGuide.content.push(line);
    }
  }

  if (currentGuide) {
    guides.push(currentGuide);
  }

  return guides;
}

async function run() {
  const dirPath = 'C:\\Users\\user\\Downloads\\how to content';
  const files = fs.readdirSync(dirPath);

  let totalImported = 0;

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    console.log(`Processing ${file}...`);
    const guides = await parseFile(filePath);
    console.log(`  Found ${guides.length} guides.`);

    for (const g of guides) {
      const slug = generateSlug(g.title);
      // Filter out multiple consecutive empty lines and trailing empty lines
      const cleanContent = g.content.join('\n').replace(/\n{3,}/g, '\n\n').trim();

      await prisma.howToGuide.upsert({
        where: { slug },
        create: {
          title: g.title,
          slug,
          category: g.category,
          content: cleanContent,
        },
        update: {
          title: g.title,
          category: g.category,
          content: cleanContent,
        }
      });
      totalImported++;
    }
  }

  console.log(`\nImport complete! Total guides imported: ${totalImported}`);
}

run()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
