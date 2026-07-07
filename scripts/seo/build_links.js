const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

function getRelatedPillar(pillar) {
  const rel = {
    'P1': 'P7', 'P2': 'P3', 'P3': 'P4', 'P4': 'P3',
    'P5': 'P2', 'P6': 'P5', 'P7': 'P1', 'P8': 'P4'
  };
  return rel[pillar] || 'P2';
}

function injectLinks(content, links) {
  let modifiedContent = content;
  
  for (const link of links) {
    const url = link.type === 'blog' ? `/blog/${link.slug}` : `/how-to/${link.slug}`;
    const words = link.title.split(' ').filter(w => w.length > 4);
    
    let injected = false;
    for (const word of words) {
      const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b(${escapedWord})\\b`, 'i');
      if (regex.test(modifiedContent) && !modifiedContent.includes(`](${url})`)) {
        modifiedContent = modifiedContent.replace(regex, `[$1](${url})`);
        injected = true;
        break;
      }
    }
    
    if (!injected) {
      // Append naturally if no word match
      modifiedContent += `\n\n*For further reading on this topic, check out our guide on [${link.title}](${url}).*`;
    }
  }
  
  return modifiedContent;
}

async function run() {
  const blogs = await prisma.post.findMany();
  const guides = await prisma.howToGuide.findMany();
  
  const allItems = [
    ...blogs.map(b => ({ ...b, type: 'blog' })),
    ...guides.map(g => ({ ...g, type: 'guide' }))
  ];
  
  const byPillar = {};
  allItems.forEach(i => {
    const p = i.pillar || 'P2';
    if (!byPillar[p]) byPillar[p] = [];
    byPillar[p].push(i);
  });
  
  const inboundCount = {};
  allItems.forEach(i => inboundCount[i.slug] = 0);
  
  const linkMap = {};
  
  for (const item of allItems) {
    const numLinks = item.type === 'blog' ? 3 : 2;
    const itemPillar = item.pillar || 'P2';
    const relatedPillar = getRelatedPillar(itemPillar);
    
    const targets = [];
    
    // Pick from same pillar
    const same = (byPillar[itemPillar] || []).filter(x => x.slug !== item.slug && inboundCount[x.slug] < 8);
    for (let i = 0; i < numLinks - 1 && same.length > 0; i++) {
      const idx = Math.floor(Math.random() * same.length);
      const picked = same.splice(idx, 1)[0];
      targets.push({ slug: picked.slug, title: picked.title, type: picked.type });
      inboundCount[picked.slug]++;
    }
    
    // Pick from related pillar
    const related = (byPillar[relatedPillar] || []).filter(x => x.slug !== item.slug && inboundCount[x.slug] < 8);
    if (related.length > 0 && targets.length < numLinks) {
      const idx = Math.floor(Math.random() * related.length);
      const picked = related.splice(idx, 1)[0];
      targets.push({ slug: picked.slug, title: picked.title, type: picked.type });
      inboundCount[picked.slug]++;
    }
    
    // Fill remainder if needed
    while (targets.length < numLinks) {
      const fallback = allItems.filter(x => x.slug !== item.slug && inboundCount[x.slug] < 8 && !targets.find(t => t.slug === x.slug));
      if (fallback.length === 0) break;
      const idx = Math.floor(Math.random() * fallback.length);
      const picked = fallback.splice(idx, 1)[0];
      targets.push({ slug: picked.slug, title: picked.title, type: picked.type });
      inboundCount[picked.slug]++;
    }
    
    linkMap[item.slug] = targets;
    
    // Inject and update DB
    const newContent = injectLinks(item.content, targets);
    if (item.type === 'blog') {
      await prisma.post.update({ where: { id: item.id }, data: { content: newContent } });
    } else {
      await prisma.howToGuide.update({ where: { id: item.id }, data: { content: newContent } });
    }
  }
  
  const mapPath = path.join(__dirname, 'link_map.json');
  fs.writeFileSync(mapPath, JSON.stringify(linkMap, null, 2));
  console.log("Successfully built and injected link map!");
}

run()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
