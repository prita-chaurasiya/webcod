"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Layout, Code, TestTube2, Rocket, HeartHandshake } from "lucide-react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processes = [
  { id: "01", title: "Discover", desc: "Understanding your vision, business goals, and target audience.", icon: <Search className="w-6 h-6" /> },
  { id: "02", title: "Plan", desc: "Crafting a strategic roadmap and technical architecture.", icon: <PenTool className="w-6 h-6" /> },
  { id: "03", title: "Design", desc: "Creating intuitive, user-centric, and premium UI/UX designs.", icon: <Layout className="w-6 h-6" /> },
  { id: "04", title: "Develop", desc: "Writing clean, scalable, and highly performant code.", icon: <Code className="w-6 h-6" /> },
  { id: "05", title: "Test", desc: "Rigorous QA testing to ensure bug-free functionality.", icon: <TestTube2 className="w-6 h-6" /> },
  { id: "06", title: "Launch", desc: "Deploying your solution to production securely.", icon: <Rocket className="w-6 h-6" /> },
  { id: "07", title: "Support", desc: "Continuous monitoring, maintenance, and growth.", icon: <HeartHandshake className="w-6 h-6" /> },
];

export function PremiumProcess() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll('.process-item');
      const line = containerRef.current.querySelector('.process-line');

      if (line) {
        gsap.fromTo(line,
          { width: "0%" },
          {
            width: "100%",
            duration: 1.5,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
              toggleActions: "play none none none"
            }
          }
        );
      }

      gsap.fromTo(items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, []);

  return (
    <section className="py-16 lg:py-20 bg-transparent relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-[#0a0f1c] pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-semibold text-sm mb-4 tracking-widest shadow-[0_0_15px_rgba(6,182,212,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span>
            HOW WE WORK
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white"
          >
            Our Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Process</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 hidden lg:block rounded-full overflow-hidden">
             <div 
               className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 process-line w-0"
             />
          </div>

          <div className="flex md:grid overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory md:snap-none md:grid-cols-2 lg:grid-cols-7 gap-4 md:gap-6 lg:gap-4 relative z-10 scroll-smooth [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {processes.map((process, idx) => (
              <div 
                key={process.id}
                className="flex flex-col items-center text-center relative group shrink-0 w-[85vw] snap-center md:w-auto md:shrink md:snap-none process-item opacity-0"
              >
                {/* Number Badge */}
                <div className="w-16 h-16 rounded-full bg-[#0f172a] border-4 border-[#0a0f1c] flex items-center justify-center mb-6 shadow-[0_5px_15px_rgba(0,0,0,0.5)] relative z-10 group-hover:border-cyan-500/50 group-hover:scale-110 transition-all duration-300">
                  <span className="text-xl font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">{process.id}</span>
                </div>
                
                {/* Content Card */}
                <div className="bg-white/5 p-6 rounded-2xl shadow-sm border border-white/10 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] group-hover:border-cyan-500/30 transition-all duration-300 h-full w-full backdrop-blur-sm">
                  <div className="text-cyan-400 flex justify-center mb-4 group-hover:scale-110 transition-transform drop-shadow-sm">
                    {process.icon}
                  </div>
                  <h3 className="font-bold text-white mb-2">{process.title}</h3>
                  <p className="text-sm text-slate-400">{process.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
