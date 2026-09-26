const fs = require('fs');
let c = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf8');
c = c.replace(/import Script from "next\/script";?\n?/, '');
c = c.replace(/<Script /g, '<script ').replace(/<\/Script>/g, '</script>');
fs.writeFileSync('app/blog/[slug]/page.tsx', c);

let l = fs.readFileSync('app/layout.tsx', 'utf8');
l = l.replace(/<Script /g, '<script ').replace(/<\/Script>/g, '</script>');
fs.writeFileSync('app/layout.tsx', l);

const servicesDir = 'app/services/';
const roots = fs.readdirSync(servicesDir).filter(f => fs.statSync(servicesDir + f).isDirectory());
for (const root of roots) {
  if (fs.existsSync(servicesDir + root + '/page.tsx')) {
    let content = fs.readFileSync(servicesDir + root + '/page.tsx', 'utf8');
    let changed = false;
    if (content.includes('import Script from "next/script"')) {
      content = content.replace(/import Script from "next\/script";?\n?/, '');
      changed = true;
    }
    if (content.includes('<Script')) {
      content = content.replace(/<Script /g, '<script ').replace(/<\/Script>/g, '</script>');
      changed = true;
    }
    if (changed) fs.writeFileSync(servicesDir + root + '/page.tsx', content);
  }
}
console.log('Replaced next/script in blog, layout, and services');
