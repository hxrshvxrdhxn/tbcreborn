const path = require('path');
process.env.DATABASE_URL = `file:${path.join(__dirname, 'prisma', 'dev.db')}`;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { remark } = require('remark');
const remarkHtml = require('remark-html');

async function run() {
  const post = await prisma.post.findUnique({
    where: { slug: 'senior-hire-changes-everything-how-to-get-right' }
  });
  console.log("RAW CONTENT:\n", post.content.substring(0, 500));
  
  const rawHtml = (
    await remark().use(remarkHtml).process(post.content)
  ).toString();
  
  console.log("\nHTML CONTENT:\n", rawHtml.substring(0, 500));
}

run().catch(console.error).finally(() => prisma.$disconnect());
