"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageSquare, BookOpen, Fingerprint } from "lucide-react";

export function PremiumProjectCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-900 perspective-[1000px]">
      {/* Cinematic Abstract Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-[pulse_6s_ease-in-out_infinite_alternate]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[100px] mix-blend-screen animate-[pulse_8s_ease-in-out_infinite_alternate-reverse]"></div>
        
        <svg className="absolute inset-0 w-full h-full opacity-10 mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[3rem] p-10 md:p-16 lg:p-20 shadow-2xl relative overflow-hidden"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight drop-shadow-md">
            Let's Build Something <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 drop-shadow-sm">Great Together</span>
          </h2>
          
          <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Have an idea, business requirement, website project or training goal? Let's discuss it and turn your vision into a digital reality.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 flex-wrap mt-8">
            <motion.div whileHover={{ y: -6, scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Link 
                href="/get-a-quote" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.6)] transition-shadow duration-300 text-lg group border border-blue-400/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12"></div>
                <Fingerprint className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Get a Free Quote
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ y: -6, scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-extrabold rounded-2xl shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_20px_40px_rgba(255,255,255,0.4)] transition-shadow duration-300 text-lg group"
              >
                <MessageSquare className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300 text-blue-600" />
                Contact Us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
