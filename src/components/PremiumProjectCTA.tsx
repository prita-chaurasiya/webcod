"use client";

import React from "react";
import Link from "next/link";
import { Rocket } from "lucide-react";

export function PremiumProjectCTA() {
  return (
    <section className="bg-white py-12 lg:py-12 md:py-16 border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 bg-slate-50 rounded-[32px] p-8 md:p-12 lg:p-16 border border-slate-100 shadow-sm">
          {/* Left: Illustration */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" 
              alt="Build Something Great" 
              className="w-full max-w-[500px] drop-shadow-xl rounded-2xl "
            />
          </div>
          
          {/* Right: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-800 mb-6 leading-tight">
              Let's Build Something <span className="text-[var(--primary)]">Great Together</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 font-medium leading-relaxed">
              Have an idea, business requirement, website project or training goal? Let's discuss it and turn your vision into a digital reality.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--primary)] hover:bg-white text-white rounded-[18px] font-bold text-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              Get a Free Quote <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
