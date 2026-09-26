import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

describe('Importer Script', () => {
  const postsDir = path.join(process.cwd(), '__tests__', 'fixtures');
  
  beforeAll(() => {
    if (!fs.existsSync(postsDir)) {
      fs.mkdirSync(postsDir, { recursive: true });
    }
    
    // Valid post
    fs.writeFileSync(path.join(postsDir, 'valid.md'), `---
title: Valid
slug: valid
publishedAt: 2026-10-10T10:00:00Z
---
This is a good post.`);

    // Invalid Mectech
    fs.writeFileSync(path.join(postsDir, 'invalid-mectech.md'), `---
title: Bad
slug: bad1
publishedAt: 2026-10-10T10:00:00Z
---
This contains Mectech inside.`);

    // Invalid MPE
    fs.writeFileSync(path.join(postsDir, 'invalid-mpe.md'), `---
title: Bad
slug: bad2
publishedAt: 2026-10-10T10:00:00Z
---
This contains MPE inside.`);

    // Invalid exclamation
    fs.writeFileSync(path.join(postsDir, 'invalid-exclamation.md'), `---
title: Bad
slug: bad3
publishedAt: 2026-10-10T10:00:00Z
---
This contains!`);
  });

  afterAll(() => {
    fs.rmSync(postsDir, { recursive: true, force: true });
  });

  it('validates and dry-run writes nothing', () => {
    const output = execSync('npx ts-node scripts/import-handoff-posts.ts --dir __tests__/fixtures', { encoding: 'utf-8' });
    
    expect(output).toContain('Mode: DRY-RUN');
    expect(output).toContain("Skipped invalid-mectech.md: Contains 'Mectech'");
    expect(output).toContain("Skipped invalid-mpe.md: Contains 'MPE'");
    expect(output).toContain("Skipped invalid-exclamation.md: Contains exclamation mark");
    
    expect(output).toContain('Created: 1'); 
    expect(output).toContain('Updated: 0');
    expect(output).toContain('Skipped: 3');
  });
});
