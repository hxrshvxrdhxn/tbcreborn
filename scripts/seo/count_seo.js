const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function run() {
  const blogCount = await prisma.post.count({ where: { seoTitle: { not: null } } });
  const guideCount = await prisma.howToGuide.count({ where: { seoTitle: { not: null } } });
  console.log(`Blogs with SEO: ${blogCount}`);
  console.log(`Guides with SEO: ${guideCount}`);
  console.log(`Total: ${blogCount + guideCount}`);
}
run().finally(() => prisma.$disconnect());
