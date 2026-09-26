const fs = require('fs');
let c = fs.readFileSync('app/layout.tsx', 'utf8');
c = c.replace('import Script from "next/script";\r\n', '');
c = c.replace('import Script from "next/script";\n', '');
c = c.replace('import Script from "next/script";', '');
fs.writeFileSync('app/layout.tsx', c);
console.log('Fixed layout');
