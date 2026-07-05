const fs = require('fs');

const content = fs.readFileSync('debug_post.txt', 'utf8');

// The regex needs to find a line of text, followed immediately by a line of only hyphens or equals.
// However, the line of text might be part of a block.
// Wait! If the line of text is part of a block (like line 1 and line 2), `([^\n]+)\n(-+|=+)\s*$` will just grab line 2.
// And it will convert line 2 to a heading. Then line 1 will just be a paragraph!
// Let's test this.

const fixed = content.replace(/(?:\r?\n)?([^\r\n]+)\r?\n(-{3,}|={3,})\s*(?:\r?\n|$)/g, '\n\n## $1\n\n');

console.log("FIXED:");
console.log(fixed);
