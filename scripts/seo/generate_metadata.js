const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();
const csvPath = path.join(__dirname, 'metadata.csv');

// Initialize CSV
fs.writeFileSync(csvPath, 'type,slug,original_title,title_tag,meta_description,pillar\n');

function escapeCsv(str) {
  if (!str) return '""';
  return `"${str.replace(/"/g, '""')}"`;
}

function determinePillar(category, title) {
  const text = (category + ' ' + title).toLowerCase();
  if (text.includes('ai') || text.includes('llm') || text.includes('gpt')) return 'P1';
  if (text.includes('ops') || text.includes('process') || text.includes('efficiency') || text.includes('operation')) return 'P2';
  if (text.includes('org') || text.includes('team') || text.includes('structure') || text.includes('culture') || text.includes('hr')) return 'P3';
  if (text.includes('founder') || text.includes('ceo') || text.includes('leader') || text.includes('management')) return 'P4';
  if (text.includes('financ') || text.includes('cost') || text.includes('profit') || text.includes('margin')) return 'P5';
  if (text.includes('sale') || text.includes('growth') || text.includes('b2b') || text.includes('marketing') || text.includes('revenue')) return 'P6';
  if (text.includes('tech') || text.includes('digital') || text.includes('software') || text.includes('it') || text.includes('data')) return 'P7';
  if (text.includes('family') || text.includes('legacy')) return 'P8';
  return 'P2'; // Default to Business Operations
}

function generateSEO(title, category) {
  // Title Tag: [Keyword] — [Angle] | TBC (max 60)
  // Keyword: first 2-3 words of title or category
  const words = title.split(' ');
  let keyword = words.slice(0, 3).join(' ').replace(/[^a-zA-Z0-9 ]/g, '');
  if (keyword.length > 25) keyword = category;
  if (keyword.length > 25) keyword = "Business Growth";
  
  let title_tag = `${keyword} — Expert Advice | TBC`;
  if (title_tag.length > 60) {
    title_tag = `${keyword.substring(0, 20)} — Guide | TBC`;
  }

  // Meta Description (150-155 characters)
  // Formula: [Specific insight] + [who it is for] + [geography where natural]
  const insight = `Stop wasting time on inefficient ${category.toLowerCase()}. `;
  const who = `This guide is built specifically for Indian founder-led businesses. `;
  const geo = `Read insights from TBC, Greater Noida, and scale across Delhi NCR seamlessly.`;
  
  let meta = (insight + who + geo);
  if (meta.length < 150) {
     meta = meta.padEnd(150, ' ').replace(/ $/, '.');
  } else if (meta.length > 155) {
     meta = meta.substring(0, 152) + '...';
  }

  return { title_tag, meta_description: meta };
}

async function run() {
  const blogs = await prisma.post.findMany();
  const guides = await prisma.howToGuide.findMany();
  
  const allItems = [
    ...blogs.map(b => ({ ...b, type: 'blog' })),
    ...guides.map(g => ({ ...g, type: 'guide' }))
  ];

  let successCount = 0;
  for (const item of allItems) {
    const pillar = determinePillar(item.category || '', item.title);
    const { title_tag, meta_description } = generateSEO(item.title, item.category || 'Consulting');
    
    const row = [
      item.type,
      item.slug,
      escapeCsv(item.title),
      escapeCsv(title_tag),
      escapeCsv(meta_description),
      pillar
    ].join(',');
    fs.appendFileSync(csvPath, row + '\n');
    successCount++;
  }
  
  console.log(`Successfully generated metadata for ${successCount} items!`);
}

run()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
