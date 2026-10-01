const fs = require('fs');

const files = [
  'd:/webcod/src/app/generative-ai/page.tsx',
  'd:/webcod/src/app/chatbot-voice-ai/page.tsx',
  'd:/webcod/src/app/ai-saas-product/page.tsx',
  'd:/webcod/src/app/ai-automation-solutions/page.tsx',
  'd:/webcod/src/app/ai-agent-development/page.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    const sectionRegex = /(<span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">Deployment Architecture[\s\S]*?<\/section>)/;
    let match = content.match(sectionRegex);
    if (match) {
      let sectionContent = match[1];
      sectionContent = sectionContent
        .replace('text-slate-900 mb-10', 'text-white mb-10')
        .replace(/text-slate-700/g, 'text-slate-400')
        .replace(/text-slate-600/g, 'text-slate-300');
      content = content.replace(sectionRegex, sectionContent);
      fs.writeFileSync(file, content);
      console.log('Fixed', file);
    }
  }
});
