const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const categoryRules = [
  { category: 'Manufacturing & Operations', keywords: ['factory', 'production', 'quality', 'audit', 'iso 9001', 'electricity', 'solar', 'equipment', '5s'] },
  { category: 'Supply Chain & Procurement', keywords: ['supplier', 'inventory', 'warehouse', 'logistics', '3pl', 'freight', 'purchase order', 'vendor', 'dead stock', 'stock', 'procurement', 'lead times', 'raw material', 'distributor', 'distribution'] },
  { category: 'Export & International', keywords: ['export', 'international'] },
  { category: 'Finance & Accounting', keywords: ['margins', 'cost', 'cash flow', 'budget', 'cfo', 'tax', 'fraud', 'financial', 'debt', 'investor'] },
  { category: 'HR & People', employees: ['hr manager', 'attrition', 'compensation', 'terminate', 'performance', 'delegate', 'co-founder', 'all-hands', 'succession', 'employee', 'team'] },
  { category: 'Sales & Marketing', keywords: ['sales', 'crm', 'competitor', 'price', 'referral', 'leads', 'website', 'content marketing', 'position', 'linkedin'] },
  { category: 'Legal & Compliance', keywords: ['contract', 'intellectual property', 'shareholder agreement', 'gst'] },
  { category: 'Business Strategy', keywords: ['strategy', 'pivot', 'risk', 'diversify', 'partnerships', 'processes', 'software', 'ai tools', 'cyber attack', 'business'] }
];

function guessCategory(title) {
  const t = title.toLowerCase();
  for (const rule of categoryRules) {
    const keys = rule.keywords || rule.employees || [];
    if (keys.some(k => t.includes(k))) {
      return rule.category;
    }
  }
  return 'Business Strategy'; // default fallback
}

function cleanCategory(cat) {
  return cat
    .replace(/\s*\((FINAL|CONTINUED|ADVANCED)\)/gi, '')
    .replace(/\s*(FINAL|CONTINUED|ADVANCED)\s*/gi, '')
    .replace(/FINAL GUIDES/gi, '')
    .replace(/BONUS:\s*/gi, '')
    .trim()
    .toUpperCase();
}

async function run() {
  const guides = await prisma.howToGuide.findMany();
  let updatedCount = 0;

  for (const g of guides) {
    let newCategory = cleanCategory(g.category);

    if (newCategory === 'UNCATEGORIZED') {
      newCategory = guessCategory(g.title).toUpperCase();
    }

    if (newCategory !== g.category) {
      await prisma.howToGuide.update({
        where: { id: g.id },
        data: { category: newCategory }
      });
      updatedCount++;
    }
  }

  console.log(`Updated ${updatedCount} guides with clean categories.`);

  const categories = await prisma.howToGuide.groupBy({
    by: ['category'],
    _count: { category: true }
  });

  console.log('New Categories in DB:');
  categories.forEach(c => {
    console.log(`- ${c.category} (${c._count.category})`);
  });
}

run().catch(console.error).finally(() => prisma.$disconnect());
