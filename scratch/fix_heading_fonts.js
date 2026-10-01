const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('d:/webcod/src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Remove explicit font-sans or font-outfit from headings
  // E.g., <h2 className="font-sans text-xl..."> -> <h2 className="text-xl...">
  content = content.replace(/(<h[1-6][^>]*className="[^"]*)(font-sans | font-sans|font-sans|font-outfit | font-outfit|font-outfit)([^"]*")/g, '$1$3');

  // Let's also check for any headings that might have explicitly hardcoded fonts.
  content = content.replace(/(<h[1-6][^>]*className="[^"]*)(font-['"]?[^ ]*['"]? | font-['"]?[^ ]*['"]?|font-['"]?[^ ]*['"]?)([^"]*")/g, (match, p1, p2, p3) => {
    // Only remove if it's font-sans or font-outfit. But actually, we want ALL headings to be the heading font.
    // However, some might be font-bold or font-semibold. We don't want to remove those!
    // So the previous regex specifically targeting font-sans is safer.
    return match;
  });

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Updated headings in ${file}`);
  }
});
