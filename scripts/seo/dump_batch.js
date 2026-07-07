const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const prisma = new PrismaClient();
async function run() {
  const blogs = await prisma.post.findMany({ select: { slug: true, title: true, content: true, category: true } });
  const guides = await prisma.howToGuide.findMany({ select: { slug: true, title: true, content: true, category: true } });
  const allItems = [...blogs.map(b => ({ ...b, type: 'blog' })), ...guides.map(g => ({ ...g, type: 'guide' }))];
  const exclude = ['identifying-business-leakage-where-youre-losing-profit', 'from-20-to-100-employees-surviving-the-complexity-wall', 'kpis-that-actually-matter-and-the-ones-that-dont', 'building-a-second-layer-of-leadership-from-founder-to-ceo', 'managing-change-how-to-pivot-without-breaking-your-team'];
  const candidates = allItems.filter(i => !exclude.includes(i.slug));
  const batch = candidates.slice(0, 30);
  let out = '';
  for (const item of batch) {
    out += 'SLUG: ' + item.slug + '\nTITLE: ' + item.title + '\nCONTENT: ' + item.content.replace(/^#+ .*/gm, '').replace(/<[^>]*>/g, '').replace(/\n/g, ' ').substring(0, 500).trim() + '\n\n';
  }
  fs.writeFileSync('batch_1.txt', out);
}
run().finally(() => prisma.$disconnect());
