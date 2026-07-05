const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function run() {
  const guide = await prisma.howToGuide.findFirst({
    where: { content: { contains: 'TBC helps' } }
  });

  if (guide) {
    console.log(guide.content);
  }
}

run().catch(console.error).finally(() => prisma.$disconnect());
