const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      // Reduce overly thick font weights
      content = content.replace(/\bfont-black\b/g, 'font-bold');
      content = content.replace(/\bfont-extrabold\b/g, 'font-bold');
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

processDir(path.join(__dirname, '../src/components'));
processDir(path.join(__dirname, '../src/app'));
console.log("Global font weight adjustments completed.");
