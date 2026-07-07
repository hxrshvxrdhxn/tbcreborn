const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();
const csvPath = path.join(__dirname, 'metadata.csv');

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
  return 'P2';
}

function extractInsight(content) {
  // Remove markdown headers, bold, italics, links
  let text = content
    .replace(/^#+ .*/gm, '') // remove headers
    .replace(/\*\*(.*?)\*\*/g, '$1') // remove bold
    .replace(/\*(.*?)\*/g, '$1') // remove italics
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // replace links with just text
    .replace(/<[^>]*>/g, '') // remove HTML
    .replace(/\n/g, ' ') // replace newlines with space
    .trim();

  // Split into sentences
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
  
  // Try to find the most "insightful" sentence (often the 2nd or 3rd sentence in an intro)
  // Skip generic opening sentences if possible
  let insight = sentences[0] ? sentences[0].trim() : "";
  if (sentences.length > 1 && sentences[0].length < 50) {
    insight = sentences[1].trim();
  }
  
  if (sentences.length > 2 && insight.includes("Welcome to")) {
    insight = sentences[2].trim();
  }

  return insight;
}

function generateAdvancedSEO(title, content) {
  // Title Tag Logic:
  // Convert "How to X" to "Guide to X" or similar.
  // Combine title with a specific angle.
  let title_tag = title;
  
  // If title has a colon, split it: "Main: Sub" -> "Main — Sub"
  if (title.includes(':')) {
    const parts = title.split(':');
    title_tag = `${parts[0].trim()} — ${parts[1].trim()}`;
  } else if (title.includes('-')) {
    const parts = title.split('-');
    title_tag = `${parts[0].trim()} — ${parts[1].trim()}`;
  } else {
    // Pick the first few words as primary keyword, then append the rest
    const words = title.split(' ');
    if (words.length > 4) {
      title_tag = `${words.slice(0, 3).join(' ')} — ${words.slice(3).join(' ')}`;
    } else {
      title_tag = `${title} — TBC Insights`;
    }
  }

  // Ensure it fits within 60 chars with the suffix
  const suffix = " | TBC";
  const maxLen = 60 - suffix.length;
  
  if (title_tag.length > maxLen) {
    // Truncate intelligently at word boundary
    title_tag = title_tag.substring(0, maxLen).replace(/\s+\S*$/, '');
  }
  title_tag = title_tag + suffix;

  // Meta Description Logic:
  // Extract real content insight + location
  const baseInsight = extractInsight(content);
  
  // Locations to randomly cycle or append naturally
  const locations = ["TBC, Greater Noida.", "TBC, NCR.", "TBC, Delhi NCR."];
  const loc = locations[Math.floor(Math.random() * locations.length)];
  
  let meta = `${baseInsight} ${loc}`;
  
  // If still too short, add a second sentence from content
  if (meta.length < 100) {
    const text = content.replace(/^#+ .*/gm, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\n/g, ' ').trim();
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
    if (sentences.length > 1) {
      meta = `${sentences[0].trim()} ${sentences[1].trim()} ${loc}`;
    }
  }

  // Truncate precisely to 155 max
  if (meta.length > 155) {
    meta = meta.substring(0, 150).replace(/\s+\S*$/, '') + `... ${loc}`;
    if (meta.length > 155) {
      meta = meta.substring(0, 152) + '...';
    }
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
    const { title_tag, meta_description } = generateAdvancedSEO(item.title, item.content);
    
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
  
  console.log(`Successfully generated advanced metadata for ${successCount} items!`);
}

run()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
