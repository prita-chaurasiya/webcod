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
      
      // We want to replace text-[var(--heading)] with text-white BUT ONLY if the same element has bg-[var(--primary)] or similar dark backgrounds.
      // Easiest is to regex replace lines that contain both bg-[var(--primary)] and text-[var(--heading)]
      
      const lines = content.split('\n');
      let modified = false;
      for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        if (line.includes('bg-[var(--primary)]') && line.includes('text-[var(--heading)]')) {
          lines[i] = line.replace(/text-\[var\(--heading\)\]/g, 'text-white');
          modified = true;
        }
        
        // Also check some other common dark backgrounds I used for buttons
        const otherDarkBgs = ['bg-[#0f172a]', 'bg-[#1e293b]', 'bg-[#f97316]', 'bg-[#06b6d4]', 'bg-blue-600', 'bg-indigo-600', 'bg-slate-900', 'bg-purple-600'];
        for (const darkBg of otherDarkBgs) {
            if (line.includes(darkBg) && line.includes('text-[var(--heading)]')) {
                lines[i] = line.replace(/text-\[var\(--heading\)\]/g, 'text-white');
                modified = true;
                break;
            }
        }
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, lines.join('\n'), 'utf8');
        console.log('Fixed', fullPath);
      }
    }
  }
}

processDir(path.join(__dirname, 'src'));
console.log('Done');
