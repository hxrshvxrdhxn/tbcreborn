const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function run() {
  const slugs = [
    'identifying-business-leakage-where-youre-losing-profit',
    'from-20-to-100-employees-surviving-the-complexity-wall',
    'kpis-that-actually-matter-and-the-ones-that-dont',
    'building-a-second-layer-of-leadership-from-founder-to-ceo',
    'managing-change-how-to-pivot-without-breaking-your-team'
  ];
  for (const slug of slugs) {
    const post = await prisma.post.findUnique({where:{slug}});
    console.log('================');
    console.log('TITLE:', post.title);
    console.log('CONTENT START:\\n', post.content.substring(0, 1500));
  }
}
run().finally(() => prisma.$disconnect());
