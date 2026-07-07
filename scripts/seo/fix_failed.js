const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function run() {
  await prisma.howToGuide.update({
    where: { slug: 'how-to-draft-a-contractor-agreement-that-protects-your-company' },
    data: {
      seoTitle: "Contractor Agreements — Protect your business with clear terms | TBC",
      seoDescription: "Drafting a contractor agreement like an employment contract can lead to forced reclassification. Learn how to draft clauses that protect your company. TBC, NCR.",
      pillar: "P2"
    }
  });
  console.log("Fixed the single failed item.");
}

run().finally(() => prisma.$disconnect());
