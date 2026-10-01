"use client";

import React from "react";

export function TakshContactHero() {
  return (
    <section className="relative bg-[#ebf1fe] pt-32 pb-32 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2 flex justify-center relative">
            <div className="absolute inset-0 bg-[var(--primary)] blur-3xl opacity-20 rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" 
              alt="Contact WebCodian Team" 
              className="w-full max-w-[500px] h-auto object-cover rounded-[24px] shadow-2xl relative z-10 border-4 border-white"
            />
          </div>

          {/* Right: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              <span className="text-[var(--primary)]">Contact</span> Us
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto md:mx-0">
              Ready to elevate your IT strategy? Our expert team is eager to help you tackle challenges and seize opportunities. Reach out to us today and let's discuss how our innovative solutions can drive your business forward and achieve your goals.
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] md:h-[120px]">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V30C1132.19,53.09,1055.71,74.35,985.66,92.83Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
}
