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
    
    // Fix the text-white on bg-blue-50 issue in the security section
    content = content.replace(/className="py-12 md:py-16 bg-blue-50 text-white relative overflow-hidden"/g, 'className="py-12 md:py-16 bg-blue-50 text-slate-800 relative overflow-hidden"');
    
    // Also change the shield icon color to stand out better on the light background
    content = content.replace(/<Shield className="w-6 h-6 text-indigo-400" \/>/g, '<Shield className="w-6 h-6 text-blue-600" />');
    
    fs.writeFileSync(file, content);
    console.log('Fixed security section contrast in', file);
  }
});
