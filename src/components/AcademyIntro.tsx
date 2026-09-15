"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, ArrowRight, Code, Monitor, BookOpen } from "lucide-react";

export function AcademyIntro() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/20">
              <GraduationCap className="w-5 h-5" />
              <span className="text-sm font-bold tracking-wider uppercase">WebCodian Academy</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-space-grotesk leading-tight">
              Build Skills That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Build Careers.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Industry-focused computer courses, practical training, and digital skills designed to help students build real-world careers. Learn directly from the professionals building enterprise software and digital marketing campaigns.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/courses" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-md hover:bg-primary/90 transition-all shadow-[0_4px_14px_0_rgba(79,70,229,0.39)] hover:-translate-y-0.5">
                Explore Computer Courses
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/computer-institute" className="inline-flex justify-center items-center px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-md hover:bg-white/10 transition-all hover:-translate-y-0.5">
                About The Institute
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-[#111111] p-6 rounded-2xl border border-white/5 shadow-xl">
                  <Monitor className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-white font-bold text-lg mb-2">Practical Learning</h3>
                  <p className="text-sm text-muted-foreground">100% lab-based practical sessions</p>
                </div>
                <div className="bg-[#111111] p-6 rounded-2xl border border-white/5 shadow-xl">
                  <Code className="w-10 h-10 text-blue-400 mb-4" />
                  <h3 className="text-white font-bold text-lg mb-2">Live Projects</h3>
                  <p className="text-sm text-muted-foreground">Work on real industry projects</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-primary p-6 rounded-2xl shadow-xl shadow-primary/20">
                  <BookOpen className="w-10 h-10 text-white mb-4" />
                  <h3 className="text-white font-bold text-lg mb-2">Expert Trainers</h3>
                  <p className="text-white/80 text-sm">Learn from active developers</p>
                </div>
                <div className="bg-[#111111] p-6 rounded-2xl border border-white/5 shadow-xl">
                  <div className="text-4xl font-bold text-white mb-2">20+</div>
                  <h3 className="text-white font-bold text-lg mb-2">Career Programs</h3>
                  <p className="text-sm text-muted-foreground">Designed for employment</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
