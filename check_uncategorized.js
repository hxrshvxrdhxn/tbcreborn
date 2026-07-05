const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function run() {
  const categories = await prisma.howToGuide.groupBy({
    by: ['category'],
    _count: { category: true }
  });

  console.log('Categories in DB:');
  categories.forEach(c => {
    console.log(`- ${c.category} (${c._count.category})`);
  });
}

run().catch(console.error).finally(() => prisma.$disconnect());
