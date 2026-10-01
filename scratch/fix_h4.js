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
    
    // Replace the h4 tags in the deployment architecture section
    // Currently they are: <h4 className="text-2xl font-bold mb-3">
    // Make them text-white
    content = content.replace(/<h4 className="text-2xl font-bold mb-3">/g, '<h4 className="text-2xl font-bold mb-3 text-white">');
    
    fs.writeFileSync(file, content);
    console.log('Fixed h4 color in', file);
  }
});
