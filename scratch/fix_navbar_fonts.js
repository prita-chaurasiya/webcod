const fs = require('fs');

const file = 'd:/webcod/src/components/Navbar.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace standard nav links
content = content.replace(/className="relative text-\[14px\] font-bold text-\[var\(--heading\)\]/g, 'className="relative text-[15px] font-bold font-heading tracking-wide text-[var(--heading)]');

// Replace dropdown triggers
content = content.replace(/className="text-\[14px\] font-bold flex items-center gap-1 group-hover\/solutions:text-\[var\(--primary\)\]/g, 'className="text-[15px] font-bold font-heading tracking-wide flex items-center gap-1 group-hover/solutions:text-[var(--primary)]');

content = content.replace(/className="text-\[14px\] font-bold flex items-center gap-1 group-hover\/industry:text-\[var\(--primary\)\]/g, 'className="text-[15px] font-bold font-heading tracking-wide flex items-center gap-1 group-hover/industry:text-[var(--primary)]');

content = content.replace(/className="text-\[14px\] font-bold flex items-center gap-1 group-hover\/portfolio:text-\[var\(--primary\)\]/g, 'className="text-[15px] font-bold font-heading tracking-wide flex items-center gap-1 group-hover/portfolio:text-[var(--primary)]');

fs.writeFileSync(file, content);
console.log('Updated Navbar links to use heading font');
