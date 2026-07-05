const path = require('path');
process.env.DATABASE_URL = `file:${path.join(__dirname, 'prisma', 'dev.db')}`;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function run() {
  const posts = await prisma.post.findMany();
  for (const post of posts) {
    const original = post.content;
    const fixed = original.replace(/(?:\r?\n)?([^\r\n]+)\r?\n(-{3,}|={3,})\s*(?:\r?\n|$)/g, '\n\n## $1\n\n');
    
    if (original !== fixed) {
      await prisma.post.update({
        where: { id: post.id },
        data: { content: fixed }
      });
      console.log(`Fixed headings for [${post.slug}]`);
    }
  }
}

run()
  .then(() => console.log('All done.'))
  .catch(console.error)
  .finally(() => prisma.$disconnect());
