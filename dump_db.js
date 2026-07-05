const path = require('path');
process.env.DATABASE_URL = `file:${path.join(__dirname, 'prisma', 'dev.db')}`;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs');

async function run() {
  const post = await prisma.post.findUnique({
    where: { slug: 'senior-hire-changes-everything-how-to-get-right' }
  });
  fs.writeFileSync('debug_post.txt', post.content);
  console.log("Wrote to debug_post.txt");
}

run().catch(console.error).finally(() => prisma.$disconnect());
