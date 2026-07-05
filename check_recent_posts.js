const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function run() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
    take: 10,
    select: { title: true, date: true, status: true, createdAt: true }
  });
  console.log(posts);
}

run().catch(console.error).finally(() => prisma.$disconnect());
