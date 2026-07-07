const fs = require('fs');
const path = require('path');

const filesToFix = [
  'app/api/how-to/request/route.ts',
  'app/api/how-to/search/route.ts',
  'app/how-to/[slug]/page.tsx',
  'app/how-to/page.tsx',
  'app/sitemap.ts'
];

for (const file of filesToFix) {
  const filePath = path.join(__dirname, '../../', file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace import
    content = content.replace(/import\s+{\s*PrismaClient\s*}\s+from\s+['"]@prisma\/client['"];?/g, "import { prisma } from '@/lib/prisma';");
    
    // Remove new PrismaClient()
    content = content.replace(/const\s+prisma\s*=\s*new\s+PrismaClient\(\);?/g, "");
    
    // Remove await prisma.$disconnect()
    content = content.replace(/await\s+prisma\.\$disconnect\(\);?/g, "");
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed ${file}`);
  }
}
