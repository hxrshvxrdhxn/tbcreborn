const { PrismaClient } = require('@prisma/client');
const fs = require('fs');

const prisma = new PrismaClient();

function parseCSVLine(line) {
  const result = [];
  let currentStr = '';
  let insideQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"' && line[i+1] === '"') {
      currentStr += '"'; i++;
    } else if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === ',' && !insideQuotes) {
      result.push(currentStr);
      currentStr = '';
    } else {
      currentStr += char;
    }
  }
  result.push(currentStr);
  return result;
}

async function run() {
  const fileContent = fs.readFileSync('scripts/seo/final_metadata.csv', 'utf8').split('\n').filter(Boolean);
  const rows = fileContent.slice(1).map(parseCSVLine).filter(r => r.length >= 6);

  let successCount = 0;
  let failCount = 0;
  const failures = [];

  for (const row of rows) {
    let [type, slug, original_title, title_tag, meta_description, pillar] = row;
    
    // 1. Fix Slate description
    if (slug.includes('slate') || original_title.includes('Slate')) {
      meta_description = "Senior leaders make decisions blind because they cannot see what is actually happening inside the organisation. Learn how Slate surfaces those signals automatically. TBC, NCR.";
    }

    // 2. Fix P1 Misassignments
    if (pillar === 'P1') {
      const lowerTitle = original_title.toLowerCase();
      
      // Communication/Operations
      if (lowerTitle.includes('meeting') || 
          lowerTitle.includes('email') || 
          lowerTitle.includes('communication') || 
          lowerTitle.includes('operations')) {
        pillar = 'P2';
      } 
      // Leadership/Teams
      else if (lowerTitle.includes('lead') || 
               lowerTitle.includes('team') || 
               lowerTitle.includes('uncertainty') || 
               lowerTitle.includes('manager')) {
        pillar = 'P4';
      }
    }

    // Clean any quotes that might have snuck into the fields
    title_tag = title_tag.replace(/^"|"$/g, '').trim();
    meta_description = meta_description.replace(/^"|"$/g, '').trim();

    const isGuide = type.toLowerCase().includes('guide');

    try {
      if (isGuide) {
        await prisma.howToGuide.update({
          where: { slug: slug },
          data: {
            seoTitle: title_tag,
            seoDescription: meta_description,
            pillar: pillar
          }
        });
      } else {
        await prisma.post.update({
          where: { slug: slug },
          data: {
            seoTitle: title_tag,
            seoDescription: meta_description,
            pillar: pillar
          }
        });
      }
      successCount++;
    } catch (e) {
      // Sometimes subagents might have slightly mangled the slug. Let's try finding it regardless of table just in case
      try {
        const postCheck = await prisma.post.findUnique({ where: { slug } });
        if (postCheck) {
          await prisma.post.update({ where: { slug }, data: { seoTitle: title_tag, seoDescription: meta_description, pillar: pillar } });
          successCount++;
          continue;
        }
        const guideCheck = await prisma.howToGuide.findUnique({ where: { slug } });
        if (guideCheck) {
          await prisma.howToGuide.update({ where: { slug }, data: { seoTitle: title_tag, seoDescription: meta_description, pillar: pillar } });
          successCount++;
          continue;
        }
        failCount++;
        failures.push({ slug, title: original_title, error: 'Not found in either table' });
      } catch (innerErr) {
        failCount++;
        failures.push({ slug, error: innerErr.message });
      }
    }
  }

  console.log(`Update Complete.`);
  console.log(`Success: ${successCount}`);
  console.log(`Failures: ${failCount}`);
  if (failCount > 0) {
    console.log(`Failed items:`, failures);
  }
}

run().finally(() => prisma.$disconnect());
