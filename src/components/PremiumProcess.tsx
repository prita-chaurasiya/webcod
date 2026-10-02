"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Layout, Code, TestTube2, Rocket, HeartHandshake } from "lucide-react";

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
  return (
    <section className="py-16 lg:py-12 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-50/50 pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16 lg:mb-20">
          <div className="lg:w-1/2 text-left">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-[var(--primary)] font-semibold text-sm mb-4 tracking-widest"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
              HOW WE WORK
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6"
            >
              Our Proven <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-blue-600">Enterprise Process</span>
            </motion.h2>
            <p className="text-lg text-slate-600">
              We follow a rigorous, enterprise-grade development lifecycle to ensure your software is delivered on time, perfectly secure, and highly scalable.
            </p>
          </div>
          
          <div className="lg:w-1/2 flex gap-4 md:gap-6 justify-end">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-1/2 rounded-[24px] overflow-hidden shadow-xl mt-12 border border-slate-100"
            >
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" alt="Team Discussion" className="w-full h-48 md:h-64 object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-1/2 rounded-[24px] overflow-hidden shadow-xl border border-slate-100"
            >
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop" alt="Code & Architecture" className="w-full h-48 md:h-64 object-cover" />
            </motion.div>
          </div>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 hidden lg:block rounded-full overflow-hidden">
             <motion.div 
               initial={{ width: "0%" }}
               whileInView={{ width: "100%" }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="h-full bg-gradient-to-r from-emerald-500 via-blue-500 to-indigo-500"
             />
          </div>

          <div className="flex md:grid overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory md:snap-none md:grid-cols-2 lg:grid-cols-7 gap-4 md:gap-6 lg:gap-4 relative z-10 scroll-smooth [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {processes.map((process, idx) => (
              <motion.div 
                key={process.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, type: "spring", stiffness: 60 }}
                className="flex flex-col items-center text-center relative group shrink-0 w-[85vw] snap-center md:w-auto md:shrink md:snap-none"
              >
                {/* Number Badge */}
                <div className="w-16 h-16 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center mb-6 shadow-xl relative z-10 group-hover:border-slate-100 group-hover:scale-110 transition-all duration-300">
                  <span className="text-xl font-bold text-slate-500 group-hover:text-[var(--primary)] transition-colors">{process.id}</span>
                </div>
                
                {/* Content Card */}
                <div className="bg-white p-6 rounded-[18px] shadow-sm border border-slate-100 group-hover:shadow-xl group-hover:border-slate-100 transition-all duration-300 h-full w-full">
                  <div className="text-[var(--primary)] flex justify-center mb-4 group-hover:scale-110 transition-transform">
                    {process.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{process.title}</h3>
                  <p className="text-sm text-slate-500">{process.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
