const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function run() {
  const posts = await prisma.post.findMany({
    where: { date: { contains: 'Jul 2026' } },
    select: { title: true, date: true, status: true, publishedAt: true }
  });
  console.log(posts);
}

run().catch(console.error).finally(() => prisma.$disconnect());
