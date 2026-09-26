import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const args = process.argv.slice(2);
  const isApply = args.includes('--apply');
  const patchPath = path.resolve(process.cwd(), '../tbc-handoff/link-fix-patch.json');
  
  if (!fs.existsSync(patchPath)) {
    console.error('Patch file not found:', patchPath);
    process.exit(1);
  }

  const patchData = JSON.parse(fs.readFileSync(patchPath, 'utf-8'));
  console.log(`Loaded ${patchData.length} entries from patch file.`);
  console.log(isApply ? 'MODE: APPLY (Database will be updated)' : 'MODE: DRY RUN');

  let matchCount = 0;
  let mismatchCount = 0;
  let skippedSlugs = [];
  
  const results: any = {
    Post: { matched: 0, mismatched: 0 },
    HowToGuide: { matched: 0, mismatched: 0 }
  };

  for (const entry of patchData) {
    const { table, id, slug, oldSha256, newContent } = entry;
    
    let row;
    if (table === 'Post') {
      row = await prisma.post.findUnique({ where: { id } });
    } else if (table === 'HowToGuide') {
      row = await prisma.howToGuide.findUnique({ where: { id } });
    } else {
      console.warn(`Unknown table ${table} for id ${id}`);
      continue;
    }

    if (!row) {
      console.warn(`[${table}] Row not found for id ${id} (slug: ${slug})`);
      mismatchCount++;
      skippedSlugs.push(slug);
      continue;
    }

    const currentHash = crypto.createHash('sha256').update(row.content, 'utf8').digest('hex');
    
    if (currentHash !== oldSha256) {
      console.warn(`[${table}] SHA256 mismatch for ${slug} (changed since backup)`);
      console.warn(`  Expected: ${oldSha256}`);
      console.warn(`  Got:      ${currentHash}`);
      mismatchCount++;
      results[table].mismatched++;
      skippedSlugs.push(slug);
      continue;
    }

    matchCount++;
    results[table].matched++;

    if (isApply) {
      if (table === 'Post') {
        await prisma.post.update({
          where: { id },
          data: { content: newContent, updatedAt: new Date() }
        });
      } else if (table === 'HowToGuide') {
        await prisma.howToGuide.update({
          where: { id },
          data: { content: newContent, updatedAt: new Date() }
        });
      }
      console.log(`Updated [${table}] ${slug}`);
    } else {
      console.log(`Would update [${table}] ${slug}`);
    }
  }

  console.log('\n--- Summary ---');
  console.log(`Matched: ${matchCount} (Post: ${results.Post.matched}, HowToGuide: ${results.HowToGuide.matched})`);
  console.log(`Mismatched/Skipped: ${mismatchCount} (Post: ${results.Post.mismatched}, HowToGuide: ${results.HowToGuide.mismatched})`);
  
  if (skippedSlugs.length > 0) {
    console.log('Skipped slugs:', skippedSlugs.join(', '));
  }

  await prisma.$disconnect();
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
