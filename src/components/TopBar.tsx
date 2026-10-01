"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function TopBar() {
  return (
    <div className="h-[40px] bg-[var(--secondary)] text-white w-full hidden lg:flex items-center justify-center relative z-[100] overflow-hidden">
      
      {/* Background Gradient Detail */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--primary)]/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between h-full relative z-10">
        
        {/* Left: Animated Text Highlight */}
        <div className="flex items-center gap-3 overflow-hidden h-full">
          <Sparkles className="w-3.5 h-3.5 text-[var(--primary)] shrink-0 animate-pulse" />
          <div className="flex flex-col h-full justify-center relative">
            <span className="text-[13px] font-medium tracking-wide text-slate-200">
              Transforming businesses with <span className="text-white font-bold">Enterprise AI & Custom Software</span> solutions.
            </span>
          </div>
        </div>

        {/* Right: Small CTA */}
        <Link 
          href="/contact" 
          className="relative z-[60] pointer-events-auto cursor-pointer flex items-center gap-1.5 text-[12px] font-bold text-white bg-[var(--primary)]/20 hover:bg-[var(--primary)] border border-[var(--primary)]/30 px-3 py-1 rounded-md transition-all duration-300 group"
        >
          Book Free Consultation 
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
        
      </div>
    </div>
  );
}
