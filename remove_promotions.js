const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function run() {
  const guides = await prisma.howToGuide.findMany();
  let updatedCount = 0;

  for (const guide of guides) {
    const lines = guide.content.split('\n');
    const newLines = lines.filter(line => !line.trim().startsWith('TBC helps'));
    
    if (newLines.length !== lines.length) {
      await prisma.howToGuide.update({
        where: { id: guide.id },
        data: { content: newLines.join('\n').trim() }
      });
      updatedCount++;
    }
  }

  console.log(`Removed promotional content from ${updatedCount} guides.`);
}

run().catch(console.error).finally(() => prisma.$disconnect());
