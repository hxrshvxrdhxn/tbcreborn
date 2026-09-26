const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function run() {
  const postCount = await prisma.post.count();
  const guideCount = await prisma.howToGuide.count();
  
  console.log(`Posts in DB: ${postCount}`);
  console.log(`Guides in DB: ${guideCount}`);
  
  const firstPost = await prisma.post.findFirst();
  const firstGuide = await prisma.howToGuide.findFirst();
  
  console.log("Post schema keys:", firstPost ? Object.keys(firstPost) : "None");
  console.log("Guide schema keys:", firstGuide ? Object.keys(firstGuide) : "None");
}

run()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
