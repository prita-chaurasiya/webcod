"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Trophy, Sparkles } from "lucide-react";

export function PremiumWhyChooseUs() {
  return (
    <section className="py-24 bg-[#1f2937] relative overflow-hidden">
      {/* Dark background grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#2eb872 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

      <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 text-gray-300 font-semibold text-sm mb-4 border border-gray-700"
          >
            <Sparkles className="w-4 h-4 text-[#2eb872]" />
            WHY CHOOSE US
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-4"
          >
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2eb872] to-[#f59e0b]">Performance</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            We don't just write code. We architect scalable, secure, and lightning-fast digital solutions that give you a competitive edge.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min perspective-1000">
          
          {/* Card 1: Large Span */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-[#2eb872]/50 transition-colors group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2eb872] opacity-5 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="w-16 h-16 rounded-2xl bg-gray-800 flex items-center justify-center mb-6 border border-gray-700 group-hover:border-[#2eb872]/50 transition-colors relative z-10">
              <Zap className="w-8 h-8 text-[#2eb872]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Lightning Fast Execution</h3>
            <p className="text-gray-400 text-lg max-w-lg relative z-10">
              Our agile development methodology ensures rapid delivery without compromising on code quality. We turn complex requirements into functional software at unprecedented speeds.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-[#f59e0b]/50 transition-colors group relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#f59e0b] opacity-5 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="w-16 h-16 rounded-2xl bg-gray-800 flex items-center justify-center mb-6 border border-gray-700 group-hover:border-[#f59e0b]/50 transition-colors relative z-10">
              <ShieldCheck className="w-8 h-8 text-[#f59e0b]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Enterprise Security</h3>
            <p className="text-gray-400 relative z-10">
              Security isn't an afterthought. We build platforms with enterprise-grade encryption and strict data protection protocols.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 bg-gradient-to-r from-[#2eb872]/10 to-transparent rounded-3xl p-8 md:p-12 border border-[#2eb872]/20 hover:border-[#2eb872]/50 transition-colors flex flex-col md:flex-row items-center justify-between gap-8 group"
          >
            <div>
              <div className="w-16 h-16 rounded-full bg-[#2eb872]/20 flex items-center justify-center mb-6 text-[#2eb872]">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Award-Winning Quality</h3>
              <p className="text-gray-400 text-lg max-w-2xl">
                We are Varanasi's top-rated digital agency for a reason. Our dedication to pixel-perfect design and robust backend architecture has earned us the trust of hundreds of clients globally.
              </p>
            </div>
            <div className="shrink-0 w-40 h-40 relative group-hover:scale-110 transition-transform duration-500">
              {/* 3D abstract representation */}
              <div className="absolute inset-0 border-4 border-[#2eb872] rounded-full animate-spin-slow opacity-20"></div>
              <div className="absolute inset-4 border-4 border-[#f59e0b] rounded-full animate-spin-reverse opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-4xl font-black text-white">#1</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
