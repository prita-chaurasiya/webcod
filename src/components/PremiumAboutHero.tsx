"use client";

import { motion } from "framer-motion";
import { Users, Code, Trophy, ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export function PremiumAboutHero() {
  return (
    <section className="pt-16 pb-12 lg:pt-20 lg:pb-16 bg-white relative overflow-hidden border-b border-gray-100">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-50 to-transparent rounded-full opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#2eb872]/5 to-transparent rounded-full opacity-60"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Text Content */}
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs mb-6 tracking-widest uppercase shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2eb872] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2eb872]"></span>
              </span>
              Company Overview
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight"
            >
              Driving Digital <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#2eb872]">Transformation.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10 font-medium"
            >
              We are a premier Computer Institute, IT Training center, and Custom Software Development agency. Our mission is to empower students with world-class education and businesses with cutting-edge technology that scales effortlessly.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl group">
                Discuss Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-bold rounded-xl transition-all shadow-sm hover:shadow-md">
                <Play className="w-5 h-5 text-blue-500 fill-current" />
                View Our Work
              </Link>
            </motion.div>
          </div>

          {/* Right: Visual Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 bg-white">
              <div className="aspect-[4/3] w-full">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                  alt="WebCodian Team Collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 hidden sm:flex"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-900">50+</h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Expert Team</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 hidden sm:flex"
            >
              <div className="w-12 h-12 rounded-full bg-[#2eb872]/10 flex items-center justify-center text-[#2eb872]">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-900">10+ Years</h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Experience</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
