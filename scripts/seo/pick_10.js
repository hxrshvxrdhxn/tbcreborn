const fs = require('fs');
const lines = fs.readFileSync('scripts/seo/metadata_v3.csv', 'utf8').split('\n').filter(Boolean);
const header = lines.shift();

// Parse CSV manually since there are commas in quotes
function parseCSVLine(line) {
  const result = [];
  let currentStr = '';
  let insideQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"' && line[i+1] === '"') {
      currentStr += '"'; i++;
    } else if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === ',' && !insideQuotes) {
      result.push(currentStr);
      currentStr = '';
    } else {
      currentStr += char;
    }
  }
  result.push(currentStr);
  return result;
}

const items = lines.map(parseCSVLine);
// Exclude the 5 we already did
const exclude = [
  'identifying-business-leakage-where-youre-losing-profit',
  'from-20-to-100-employees-surviving-the-complexity-wall',
  'kpis-that-actually-matter-and-the-ones-that-dont',
  'building-a-second-layer-of-leadership-from-founder-to-ceo',
  'managing-change-how-to-pivot-without-breaking-your-team'
];
const candidates = items.filter(i => !exclude.includes(i[1]));

// Shuffle
candidates.sort(() => 0.5 - Math.random());

const selected = [];
const pillars = new Set();

for (const item of candidates) {
  if (selected.length < 10) {
    selected.push(item);
    pillars.add(item[5]); // Pillar is index 5
  }
}

// If we don't have 4 pillars, swap until we do
while (pillars.size < 4) {
  const missingPillarItems = candidates.filter(i => !pillars.has(i[5]) && !selected.includes(i));
  if (missingPillarItems.length === 0) break; // no more pillars available
  
  // replace the last item with one of a new pillar
  const removed = selected.pop();
  selected.push(missingPillarItems[0]);
  
  pillars.clear();
  selected.forEach(i => pillars.add(i[5]));
}

console.log("| Original Title | Generated Title Tag | Generated Meta Description | Pillar |");
console.log("| :--- | :--- | :--- | :--- |");
selected.forEach(s => {
  console.log(`| ${s[2]} | ${s[3]} | ${s[4]} | ${s[5]} |`);
});
