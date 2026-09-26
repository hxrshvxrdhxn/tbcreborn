import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function run() {
  const posts = await prisma.post.findMany();
  const guides = await prisma.howToGuide.findMany();
  
  const allDocs = [
    ...posts.map(p => ({ type: 'post', slug: p.slug, content: p.content })),
    ...guides.map(g => ({ type: 'guide', slug: g.slug, content: g.content }))
  ];

  let totalMatches = 0;
  console.log("--- Nested Links Report ---");

  for (const doc of allDocs) {
    if (!doc.content) continue;
    const paragraphs = doc.content.split(/\n\s*\n/);
    
    let docHasMatch = false;

    for (const p of paragraphs) {
      let matchedPattern = null;
      
      // Pattern 1: [ inside link text before ](
      if (/\[[^\]]*\[/.test(p)) {
        matchedPattern = 'Nested [ in link text';
      }
      // Pattern 2: ]( inside a link URL
      else if (/\]\([^)\s]*\]\(/.test(p)) {
        matchedPattern = 'Nested ]( in link URL';
      }
      // Pattern 3: %5B or %5D
      else if (/%5B|%5D/.test(p)) {
        matchedPattern = '%5B or %5D (URL encoded brackets)';
      }
      // Pattern 4: unbalanced [ / ] count
      else {
        const openBrackets = (p.match(/\[/g) || []).length;
        const closeBrackets = (p.match(/\]/g) || []).length;
        if (openBrackets !== closeBrackets) {
          matchedPattern = 'Unbalanced brackets count';
        }
      }

      if (matchedPattern) {
        docHasMatch = true;
        totalMatches++;
        console.log(`\nDoc: ${doc.type} / ${doc.slug}`);
        console.log(`Pattern: ${matchedPattern}`);
        // 200 character excerpt around the match
        // We'll just take the first 200 chars of the paragraph or so
        console.log(`Excerpt: ${p.substring(0, 200).replace(/\n/g, ' ')}...`);
      }
    }
  }

  console.log(`\nTotal paragraphs with matches: ${totalMatches}`);
  await prisma.$disconnect();
}

run().catch(console.error);
