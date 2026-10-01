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
      
      // 1. Spacing reductions
      content = content.replace(/\bpy-24\b/g, 'py-12 md:py-16');
      content = content.replace(/\bpy-32\b/g, 'py-16 md:py-20');
      content = content.replace(/\bpy-28\b/g, 'py-14 md:py-16');
      content = content.replace(/\bpy-20\b/g, 'py-12');
      
      // 2. Dark to Light theme (very carefully)
      content = content.replace(/bg-slate-900/g, 'bg-slate-50');
      content = content.replace(/bg-\[\#0f2c59\]/g, 'bg-blue-50/50');
      content = content.replace(/bg-blue-900/g, 'bg-blue-50');
      content = content.replace(/bg-slate-800/g, 'bg-white');
      
      // In sections that were dark, text was white. We need to make it dark.
      // But we can't blindly replace text-white everywhere (e.g. buttons).
      // So we target common heading/text patterns in those dark sections.
      // Actually, if we made background light, text-white will be invisible!
      // This is risky if we blindly replace. Let's do a smart regex replacement for blocks that contain those specific dark backgrounds.
      
      // Just replacing specific text colors that were exclusively used in dark sections:
      content = content.replace(/text-slate-400/g, 'text-slate-600');
      content = content.replace(/text-blue-200/g, 'text-blue-700');
      
      // Text-white is the hardest. Let's replace 'text-white' with 'text-slate-900' only if it's NOT inside a button.
      // Easiest is to do it case-by-case, but let's replace text-white in h2, h3, p tags.
      content = content.replace(/<h2([^>]*)text-white([^>]*)>/g, '<h2$1text-slate-900$2>');
      content = content.replace(/<h3([^>]*)text-white([^>]*)>/g, '<h3$1text-slate-900$2>');
      content = content.replace(/<h4([^>]*)text-white([^>]*)>/g, '<h4$1text-slate-900$2>');
      content = content.replace(/<p([^>]*)text-white([^>]*)>/g, '<p$1text-slate-600$2>');
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

processDir(path.join(__dirname, '../src/components'));
processDir(path.join(__dirname, '../src/app'));
console.log("Global spacing and theme adjustments completed.");
