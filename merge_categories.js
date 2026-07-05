const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function run() {
  const guides = await prisma.howToGuide.findMany();
  
  const mergeRules = {
    'ESOP': 'ESOP & EQUITY COMPENSATION',
    'EVENTS': 'EVENTS & NETWORKING',
    'HR SYSTEMS': 'HR SYSTEMS & PROCESSES',
    'LABOUR LAW': 'LABOUR LAW COMPLIANCE',
    'LEAVE MANAGEMENT': 'LEAVE & BENEFITS',
    'OFFICE SETUP & FACILITYGUIDES': 'OFFICE SETUP & FACILITY',
    'OFFICE SETUP': 'OFFICE SETUP & FACILITY',
    'PARTNERSHIPS': 'PARTNERSHIPS & ALLIANCES',
    'PAYROLL': 'PAYROLL MANAGEMENT',
    'PF/ESIC': 'PF, ESIC & STATUTORY COMPLIANCE',
    'REAL ESTATE & FINANCEGUIDES': 'REAL ESTATE & FINANCE',
    'REAL ESTATE & PROPERTY': 'REAL ESTATE & OFFICE SETUP',
    'WORKING CAPITAL': 'WORKING CAPITAL MANAGEMENT'
  };

  let updatedCount = 0;

  for (const g of guides) {
    if (mergeRules[g.category]) {
      await prisma.howToGuide.update({
        where: { id: g.id },
        data: { category: mergeRules[g.category] }
      });
      updatedCount++;
    } else if (g.category.includes('GUIDES')) {
      await prisma.howToGuide.update({
        where: { id: g.id },
        data: { category: g.category.replace(/GUIDES/g, '').trim() }
      });
      updatedCount++;
    }
  }

  console.log(`Merged ${updatedCount} categories.`);
}

run().catch(console.error).finally(() => prisma.$disconnect());
