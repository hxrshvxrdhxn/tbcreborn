const fs = require('fs');

let allRows = [];
const header = "type,slug,original_title,title_tag,meta_description,pillar";

for (let i = 1; i <= 13; i++) {
  const filePath = `scripts/seo/batch_${i}_done.csv`;
  if (fs.existsSync(filePath)) {
    const lines = fs.readFileSync(filePath, 'utf8').split('\n').filter(Boolean);
    // Remove header if present
    if (lines[0] && lines[0].includes('original_title')) {
      lines.shift();
    }
    allRows = allRows.concat(lines);
  }
}

fs.writeFileSync('scripts/seo/final_metadata.csv', header + '\n' + allRows.join('\n'));

// Pick 10 random samples ensuring 4 pillars
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

const items = allRows.map(parseCSVLine).filter(i => i.length >= 6);
items.sort(() => 0.5 - Math.random());

const selected = [];
const pillars = new Set();

for (const item of items) {
  if (selected.length < 10) {
    selected.push(item);
    pillars.add(item[5]);
  }
}

while (pillars.size < 4) {
  const missingPillarItems = items.filter(i => !pillars.has(i[5]) && !selected.includes(i));
  if (missingPillarItems.length === 0) break;
  
  selected.pop();
  selected.unshift(missingPillarItems[0]);
  
  pillars.clear();
  selected.forEach(i => pillars.add(i[5]));
}

console.log(`Total Compiled Rows: ${items.length}`);
console.log("| Original Title | Generated Title Tag | Generated Meta Description | Pillar |");
console.log("| :--- | :--- | :--- | :--- |");
selected.forEach(s => {
  console.log(`| ${s[2]} | ${s[3]} | ${s[4]} | ${s[5]} |`);
});
