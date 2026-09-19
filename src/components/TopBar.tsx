"use client";

import { Phone, Mail } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-[#0a0f1c]/50 backdrop-blur-md text-slate-300 py-2.5 hidden lg:block border-b border-white/5 relative z-50">
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl flex items-center justify-between text-[13px] font-medium">
        
        {/* Left: Offer */}
        <div className="flex items-center gap-2">
          <span>All course 28% off for</span>
          <span className="text-cyan-400 font-semibold">WebCodian students.</span>
        </div>
        
        {/* Right: Contact & Socials */}
        <div className="flex items-center gap-6">
          <a href="tel:+919794412733" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <Phone className="w-3.5 h-3.5 text-cyan-400" />
            <span>(91) 9794412733</span>
          </a>
          <a href="mailto:info@webcodian.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>info@webcodian.com</span>
          </a>
          
          <div className="flex items-center gap-3 ml-2 border-l border-white/10 pl-5">
            <a href="#" className="hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
