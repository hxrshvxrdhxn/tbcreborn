import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function run() {
  const posts = await prisma.post.findMany();
  let defectCount = 0;

  for (const post of posts) {
    // Look for nested markdown links like [text [text](url) text](url)
    // A simple heuristic: check if there's a `](/how-to/` or `](/blog/` before the final `](/how-to/`
    const regex = /\[.*?\[.*?\]\(.*?\).*?\]\(.*?\)/g;
    if (regex.test(post.content)) {
      console.log(`Defect found in: ${post.slug}`);
      defectCount++;
      
      // Fix it by stripping out the inner links and keeping only the outer link, or stripping the outer link.
      // Let's see the actual text: "[How to reduce production downtime [without](/how-to/...) expensive equipment upgrades](/how-to/...)"
      // Better to just clean the text: remove inner brackets and inner URL.
      const fixedContent = post.content.replace(/\[(.*?)\[(.*?)\]\((.*?)\)(.*?)\]\((.*?)\)/g, "[$1$2$4]($5)");
      
      await prisma.post.update({
        where: { id: post.id },
        data: { content: fixedContent }
      });
    }
  }

  console.log(`Fixed ${defectCount} posts with malformed links.`);
  await prisma.$disconnect();
}

run().catch(console.error);
