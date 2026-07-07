const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const prisma = new PrismaClient();

function determinePillar(category, title) {
  const text = (category + ' ' + title).toLowerCase();
  if (text.includes('ai') || text.includes('llm') || text.includes('gpt')) return 'P1';
  if (text.includes('ops') || text.includes('process') || text.includes('efficiency') || text.includes('operation')) return 'P2';
  if (text.includes('org') || text.includes('team') || text.includes('structure') || text.includes('culture') || text.includes('hr')) return 'P3';
  if (text.includes('founder') || text.includes('ceo') || text.includes('leader') || text.includes('management')) return 'P4';
  if (text.includes('financ') || text.includes('cost') || text.includes('profit') || text.includes('margin') || text.includes('revenue')) return 'P5';
  if (text.includes('sale') || text.includes('growth') || text.includes('b2b') || text.includes('marketing')) return 'P6';
  if (text.includes('tech') || text.includes('digital') || text.includes('software') || text.includes('it') || text.includes('data')) return 'P7';
  if (text.includes('family') || text.includes('legacy')) return 'P8';
  return 'P2';
}

async function run() {
  const blogs = await prisma.post.findMany({ select: { slug: true, title: true, content: true, category: true } });
  const guides = await prisma.howToGuide.findMany({ select: { slug: true, title: true, content: true, category: true } });
  
  const allItems = [
    ...blogs.map(b => ({ ...b, type: 'blog' })),
    ...guides.map(g => ({ ...g, type: 'guide' }))
  ];

  const exclude = [
    'identifying-business-leakage-where-youre-losing-profit',
    'from-20-to-100-employees-surviving-the-complexity-wall',
    'kpis-that-actually-matter-and-the-ones-that-dont',
    'building-a-second-layer-of-leadership-from-founder-to-ceo',
    'managing-change-how-to-pivot-without-breaking-your-team'
  ];
  
  // Also exclude the first 30 we already did in Batch 1
  const candidates = allItems.filter(i => !exclude.includes(i.slug));
  const remaining = candidates.slice(30);
  
  let batchIndex = 2;
  for (let i = 0; i < remaining.length; i += 30) {
    const chunk = remaining.slice(i, i + 30);
    let out = '';
    for (const item of chunk) {
      const pillar = determinePillar(item.category || '', item.title);
      out += 'TYPE: ' + item.type + '\n';
      out += 'SLUG: ' + item.slug + '\n';
      out += 'PILLAR: ' + pillar + '\n';
      out += 'TITLE: ' + item.title + '\n';
      out += 'CONTENT: ' + item.content.replace(/^#+ .*/gm, '').replace(/<[^>]*>/g, '').replace(/\n/g, ' ').substring(0, 500).trim() + '\n\n';
    }
    fs.writeFileSync(`scripts/seo/batch_${batchIndex}.txt`, out);
    console.log(`Generated batch_${batchIndex}.txt with ${chunk.length} items`);
    batchIndex++;
  }
}

run().finally(() => prisma.$disconnect());
