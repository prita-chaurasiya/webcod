"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageSquare, BookOpen, Fingerprint } from "lucide-react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function PremiumProjectCTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const ctaCard = containerRef.current.querySelector('.cta-card');
      if (ctaCard) {
        gsap.fromTo(ctaCard,
          { opacity: 0, y: 20, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    }
  }, []);

  return (
    <section className="py-16 relative overflow-hidden bg-transparent perspective-[1000px]" ref={containerRef}>
      <div className="absolute inset-0 bg-[#0a0f1c] pointer-events-none -z-10" />
      {/* Cinematic Abstract Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-[120px] mix-blend-screen animate-[pulse_6s_ease-in-out_infinite_alternate]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] mix-blend-screen animate-[pulse_8s_ease-in-out_infinite_alternate-reverse]"></div>
        
        <svg className="absolute inset-0 w-full h-full opacity-10 mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10 text-center">
          <div 
            className="cta-card opacity-0 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight drop-shadow-md">
              Let's Build Something <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-sm">Great Together</span>
            </h2>
          
          <p className="text-slate-300 text-base md:text-lg mb-8 max-w-xl mx-auto font-light leading-relaxed">
            Have an idea, business requirement, website project or training goal? Let's discuss it and turn your vision into a digital reality.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap mt-6">
            <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Link 
                href="/get-a-quote" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-[0_8px_20px_rgba(6,182,212,0.3)] hover:shadow-[0_12px_25px_rgba(6,182,212,0.5)] transition-shadow duration-300 text-base group border border-cyan-400/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12"></div>
                <Fingerprint className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                Get a Free Quote
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-extrabold rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_25px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-white/20 text-base group"
              >
                <MessageSquare className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300 text-cyan-400" />
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
