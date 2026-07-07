const { PrismaClient } = require('@prisma/client');
const fs = require('fs');

async function run() {
  const prisma = new PrismaClient({
    datasourceUrl: 'file:C:/Users/user/OneDrive/Desktop/TBC/tbc-website/prisma/dev.db'
  });
  
  console.log("Exporting Posts...");
  const posts = await prisma.post.findMany();
  
  console.log("Exporting HowToGuides...");
  const guides = await prisma.howToGuide.findMany();

  const data = { posts, guides };
  
  fs.writeFileSync('scripts/seo/export.json', JSON.stringify(data, null, 2));
  console.log(`Export complete: ${posts.length} posts, ${guides.length} guides.`);
}

run()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => process.exit(0));
