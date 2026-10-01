"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";

export function PremiumHomeAbout() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-50 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
      
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="inline-block px-4 py-2 rounded-full bg-blue-50 text-[var(--primary)] font-bold text-sm tracking-widest uppercase mb-6">
                Global Technology Partner
              </div>
              <h2 className="text-3xl lg:text-5xl font-black text-[var(--heading)] mb-6 leading-[1.1] tracking-tight">
                Architecting the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-blue-400">Enterprise Digital Transformation</span>
              </h2>
              
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                <p>
                  As a leading international software engineering and AI automation firm, <strong>WebCodian</strong> partners with global enterprises to navigate the complexities of digital disruption. We don't just write code; we engineer scalable, intelligent ecosystems that redefine industry standards.
                </p>
                <p>
                  With state-of-the-art delivery centers in India and a global footprint spanning North America, Europe, and the Middle East, our team of world-class technologists delivers unparalleled excellence in Custom Software, Cloud Infrastructure, and AI-driven business solutions. We empower organizations to unlock exponential growth through technology.
                </p>
              </div>
            </motion.div>

            {/* Feature Block */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-start gap-6 pt-6 mt-6 border-t border-slate-100"
            >
              <div className="w-16 h-16 rounded-[18px] bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 shadow-sm">
                <Code2 className="w-8 h-8 text-[var(--primary)]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--heading)] mb-2">Enterprise-Grade Engineering</h3>
                <p className="text-slate-500 leading-relaxed mb-4">
                  Leveraging agile methodologies, DevOps pipelines, and deep domain expertise to deliver secure, high-performance software that accelerates your time-to-market and reduces total cost of ownership.
                </p>
                <Link href="/about" className="inline-flex items-center gap-2 text-[var(--primary)] font-bold hover:text-blue-700 transition-colors group">
                  Discover Our Global Reach <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Image Composition */}
          <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px] flex items-center justify-center lg:justify-end">
            
            {/* Main large image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-full max-w-[500px] h-[400px] lg:h-[500px] rounded-[24px] overflow-hidden shadow-2xl z-10 ml-auto border border-slate-100"
            >
              <div className="absolute inset-0 bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1000&auto=format&fit=crop" 
                  alt="Enterprise Digital Transformation" 
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700 hover:scale-105 transform"
                />
              </div>
            </motion.div>

            {/* Overlapping floating image */}
            <motion.div 
              initial={{ opacity: 0, y: -40, x: -40 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="absolute top-10 lg:top-16 left-0 lg:left-0 w-64 lg:w-72 h-48 lg:h-56 rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-20 border-[6px] border-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" 
                alt="Global Tech Infrastructure" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 left-10 lg:-left-10 z-30 bg-white p-4 rounded-[18px] shadow-xl border border-slate-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                <span className="text-[var(--primary)] font-black text-xl">10+</span>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">Years of</p>
                <p className="text-xs text-slate-500 font-medium">Excellence</p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
