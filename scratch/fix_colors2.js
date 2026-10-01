const fs = require('fs');

const files = [
  'd:/webcod/src/app/chatbot-voice-ai/page.tsx',
  'd:/webcod/src/app/ai-saas-product/page.tsx',
  'd:/webcod/src/app/ai-automation-solutions/page.tsx',
  'd:/webcod/src/app/ai-agent-development/page.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Looser replace on the specific lines to avoid regex failure
    content = content.replace(/className="text-4xl md:text-5xl font-bold text-slate-900 mb-10/g, 'className="text-4xl md:text-5xl font-bold text-white mb-10');
    content = content.replace(/className="text-5xl font-bold text-slate-700/g, 'className="text-5xl font-bold text-slate-400');
    content = content.replace(/className="text-slate-600 text-lg/g, 'className="text-slate-300 text-lg');
    
    fs.writeFileSync(file, content);
    console.log('Fixed', file);
  }
});
