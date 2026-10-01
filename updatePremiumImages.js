const fs = require('fs');
const path = require('path');

// Premium business & tech images map
const premiumImages = [
  'photo-1497366216548-37526070297c', // Modern office glass
  'photo-1551288049-bebda4e38f71', // Minimalist dashboard
  'photo-1504384308090-c894fdcc538d', // Corporate team
  'photo-1522071820081-009f0129c71c', // Collaboration
  'photo-1518770660439-4636190af475', // Circuit board / tech
  'photo-1460925895917-afdab827c52f', // Analytics screen
  'photo-1553877522-43269d4ea984', // High tech server
  'photo-1519389950473-47ba0277781c'  // Desk flat lay
];

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
let changedFiles = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content.replace(/photo-[a-zA-Z0-9\-]+/g, (match) => {
    // If it's a known non-premium image or we just want to randomize to premium ones
    // We'll deterministically pick one based on the string length so it's consistent per image
    return premiumImages[match.length % premiumImages.length];
  });
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    changedFiles++;
  }
});
console.log('Updated ' + changedFiles + ' files with premium luxury images.');
