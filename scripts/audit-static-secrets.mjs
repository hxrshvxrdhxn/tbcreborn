import * as fs from 'fs';
import * as path from 'path';

function loadEnvSecrets() {
  const secrets = new Set();
  const files = ['.env', '.env.local'];
  for (const f of files) {
    if (!fs.existsSync(f)) continue;
    const content = fs.readFileSync(f, 'utf8');
    const lines = content.split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#') || !trimmed.includes('=')) continue;
      const idx = trimmed.indexOf('=');
      const key = trimmed.slice(0, idx).trim();
      const val = trimmed.slice(idx + 1).replace(/^["']|["']$/g, '').trim();
      // Only check high-entropy sensitive keys
      if (
        key.includes('PASSWORD') ||
        key.includes('SECRET') ||
        key.includes('KEY') ||
        key.includes('DATABASE_URL') ||
        key.includes('DIRECT_URL')
      ) {
        if (val && val.length >= 6) {
          secrets.add({ key, val });
        }
      }
    }
  }
  return Array.from(secrets);
}

function scanDir(dir, secrets, leaks = []) {
  if (!fs.existsSync(dir)) return leaks;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDir(full, secrets, leaks);
    } else if (entry.isFile() && (full.endsWith('.js') || full.endsWith('.css') || full.endsWith('.json') || full.endsWith('.html'))) {
      const content = fs.readFileSync(full, 'utf8');
      for (const { key, val } of secrets) {
        if (content.includes(val)) {
          leaks.push({ file: full, key });
        }
      }
    }
  }
  return leaks;
}

const secrets = loadEnvSecrets();
console.log(`Loaded ${secrets.length} secret variables to check.`);

const leaks = scanDir(path.join(process.cwd(), '.next', 'static'), secrets);

if (leaks.length > 0) {
  console.error(`CRITICAL: Found ${leaks.length} secret leak(s) in .next/static:`);
  for (const leak of leaks) {
    console.error(` - Key ${leak.key} leaked in ${leak.file}`);
  }
  process.exit(1);
} else {
  console.log('✓ AUDIT PASSED: Zero environment secrets found in .next/static client bundles.');
}
