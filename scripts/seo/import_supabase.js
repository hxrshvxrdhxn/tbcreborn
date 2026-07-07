const { PrismaClient } = require('@prisma/client');
const fs = require('fs');

async function run() {
  const prisma = new PrismaClient();
  
  console.log("Reading exported data...");
  const data = JSON.parse(fs.readFileSync('scripts/seo/export.json', 'utf8'));
  
  console.log(`Importing ${data.posts.length} posts...`);
  for (const post of data.posts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: post,
      create: post
    });
  }
  
  console.log(`Importing ${data.guides.length} guides...`);
  for (const guide of data.guides) {
    await prisma.howToGuide.upsert({
      where: { slug: guide.slug },
      update: guide,
      create: guide
    });
  }

  console.log("Import to Supabase complete.");
}

run()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => process.exit(0));
