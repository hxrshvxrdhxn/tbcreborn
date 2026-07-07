const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function run() {
  await prisma.post.deleteMany({
    where: { slug: 'test-draft-1' }
  });
  console.log("Deleted test-draft-1 from Post table.");
}

run().finally(() => prisma.$disconnect());
