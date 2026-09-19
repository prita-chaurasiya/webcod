"use client";


import { Zap, ShieldCheck, Trophy, Sparkles } from "lucide-react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function PremiumWhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const texts = containerRef.current.querySelectorAll('.why-header-text');
      const cards = containerRef.current.querySelectorAll('.why-card');

      gsap.fromTo(texts,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.fromTo(cards,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, []);

  return (
    <section className="py-24 bg-[#0a0f1c] relative overflow-hidden" ref={containerRef}>
      {/* Dark background grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#06b6d4 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

      <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
        
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-slate-300 font-semibold text-sm mb-4 border border-white/10 why-header-text opacity-0"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            WHY CHOOSE US
          </div>
          <h2 
            className="text-3xl md:text-5xl font-extrabold text-white mb-4 why-header-text opacity-0"
          >
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Performance</span>
          </h2>
          <p
            className="text-slate-400 max-w-2xl mx-auto text-lg why-header-text opacity-0 font-medium"
          >
            We don&apos;t just write code. We architect scalable, secure, and lightning-fast digital solutions that give you a competitive edge.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min perspective-1000">
          
          {/* Card 1: Large Span */}
          <div 
            className="why-card opacity-0 lg:col-span-2 bg-gradient-to-br from-white/5 to-white/5 rounded-3xl p-8 border border-white/10 hover:border-cyan-500/50 transition-colors group relative overflow-hidden backdrop-blur-sm"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 opacity-5 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-cyan-500/50 transition-colors relative z-10 shadow-sm">
              <Zap className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Lightning Fast Execution</h3>
            <p className="text-slate-400 text-lg max-w-lg relative z-10">
              Our agile development methodology ensures rapid delivery without compromising on code quality. We turn complex requirements into functional software at unprecedented speeds.
            </p>
          </div>

          {/* Card 2 */}
          <div 
            className="why-card opacity-0 bg-gradient-to-br from-white/5 to-white/5 rounded-3xl p-8 border border-white/10 hover:border-blue-500/50 transition-colors group relative overflow-hidden backdrop-blur-sm"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-5 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-blue-500/50 transition-colors relative z-10 shadow-sm">
              <ShieldCheck className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Enterprise Security</h3>
            <p className="text-slate-400 relative z-10">
              Security isn&apos;t an afterthought. We build platforms with enterprise-grade encryption and strict data protection protocols.
            </p>
          </div>

          {/* Card 3 */}
          <div 
            className="why-card opacity-0 lg:col-span-3 bg-gradient-to-r from-cyan-500/5 to-transparent rounded-3xl p-8 md:p-12 border border-cyan-500/10 hover:border-cyan-500/30 transition-colors flex flex-col md:flex-row items-center justify-between gap-8 group backdrop-blur-sm"
          >
            <div>
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6 text-cyan-400 border border-cyan-500/20 shadow-sm">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Award-Winning Quality</h3>
              <p className="text-slate-400 text-lg max-w-2xl">
                We are Varanasi&apos;s top-rated digital agency for a reason. Our dedication to pixel-perfect design and robust backend architecture has earned us the trust of hundreds of clients globally.
              </p>
            </div>
            <div className="shrink-0 w-40 h-40 relative group-hover:scale-110 transition-transform duration-500">
              {/* 3D abstract representation */}
              <div className="absolute inset-0 border-4 border-cyan-500 rounded-full animate-spin-slow opacity-20"></div>
              <div className="absolute inset-4 border-4 border-blue-500 rounded-full animate-spin-reverse opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-4xl font-black text-white drop-shadow-md">#1</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
