import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';

const prisma = new PrismaClient();

async function run() {
  const posts = await prisma.post.findMany();
  const guides = await prisma.howToGuide.findMany();
  
  const backup = { posts, howToGuides: guides };
  
  fs.writeFileSync('C:/Users/user/OneDrive/Desktop/TBC/tbc-handoff/db-backup-2026-09-26.json', JSON.stringify(backup, null, 2));
  
  const statusCounts = posts.reduce((acc: any, p: any) => {
    acc[p.status] = (acc[p.status] || 0) + 1;
    return acc;
  }, {});
  
  console.log(`Posts backed up: ${posts.length}`);
  console.log('Post status breakdown:', statusCounts);
  console.log(`Guides backed up: ${guides.length}`);
}

run().catch(console.error).finally(() => prisma.$disconnect());
