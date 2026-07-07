const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();
const csvPath = path.join(__dirname, 'metadata.csv');

function parseCSVLine(line) {
  const result = [];
  let currentStr = '';
  let insideQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"' && line[i+1] === '"') {
      currentStr += '"';
      i++; // skip escaped quote
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
  if (!fs.existsSync(csvPath)) {
    console.error("metadata.csv not found");
    return;
  }
  
  const content = fs.readFileSync(csvPath, 'utf8');
  const lines = content.split('\n').map(l => l.trim()).filter(l => l);
  
  // Skip header
  lines.shift();
  
  let successCount = 0;
  let failCount = 0;

  for (const line of lines) {
    const parts = parseCSVLine(line);
    if (parts.length < 6) continue;
    
    const type = parts[0];
    const slug = parts[1];
    const title_tag = parts[3];
    const meta_description = parts[4];
    const pillar = parts[5];
    
    try {
      if (type === 'blog') {
        await prisma.post.update({
          where: { slug },
          data: { seoTitle: title_tag, seoDescription: meta_description, pillar }
        });
      } else if (type === 'guide') {
        await prisma.howToGuide.update({
          where: { slug },
          data: { seoTitle: title_tag, seoDescription: meta_description, pillar }
        });
      }
      successCount++;
    } catch (e) {
      console.error(`Failed to update ${type} ${slug}:`, e.message);
      failCount++;
    }
  }
  
  console.log(`Pushed metadata to DB. Success: ${successCount}, Failed: ${failCount}`);
}

run()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
