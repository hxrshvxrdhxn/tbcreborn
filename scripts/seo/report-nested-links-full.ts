import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';

const prisma = new PrismaClient();

async function run() {
  const posts = await prisma.post.findMany();
  const guides = await prisma.howToGuide.findMany();
  
  const allDocs = [
    ...posts.map(p => ({ type: 'post', slug: p.slug, content: p.content })),
    ...guides.map(g => ({ type: 'guide', slug: g.slug, content: g.content }))
  ];

  let totalMatches = 0;
  let out = "# Nested Links Report\n\n";

  for (const doc of allDocs) {
    if (!doc.content) continue;
    const paragraphs = doc.content.split(/\n\s*\n/);
    
    for (const p of paragraphs) {
      let matchedPattern = null;
      
      if (/\[[^\]]*\[/.test(p)) {
          matchedPattern = 'Nested [ in link text';
      } else if (/\]\([^)\s]*\]\(/.test(p)) {
          matchedPattern = 'Nested ]( in link URL';
      } else if (/%5B|%5D/.test(p)) {
          matchedPattern = '%5B or %5D (URL encoded brackets)';
      } else {
        const openBrackets = (p.match(/\[/g) || []).length;
        const closeBrackets = (p.match(/\]/g) || []).length;
        if (openBrackets !== closeBrackets) {
            matchedPattern = 'Unbalanced brackets count';
        }
      }

      if (matchedPattern) {
        totalMatches++;
        out += `### ${doc.type} / ${doc.slug}\n**Pattern:** ${matchedPattern}\n\n\`\`\`markdown\n${p.trim()}\n\`\`\`\n\n`;
      }
    }
  }

  out += `**Total paragraphs with matches:** ${totalMatches}\n`;
  fs.writeFileSync('C:/Users/user/OneDrive/Desktop/TBC/tbc-handoff/nested-links-report.md', out);
  console.log("Full report written to C:/Users/user/OneDrive/Desktop/TBC/tbc-handoff/nested-links-report.md");
  await prisma.$disconnect();
}

run().catch(console.error);
