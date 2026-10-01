"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Award, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function PremiumVision() {
  return (
    <section className="relative py-12 md:py-16 lg:py-16 md:py-12 bg-slate-50 overflow-hidden">
      {/* Animated Light Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/50 to-blue-50/20 rounded-full blur-[100px] opacity-70 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-indigo-50/60 to-blue-50/30 rounded-full blur-[100px] opacity-70 animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-blue-100 shadow-sm text-[var(--primary)] text-[13px] font-bold tracking-widest uppercase mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--primary)]"></span>
              </span>
              The WebCodian Vision
            </div>
            
            <h2 className="font-extrabold text-[var(--heading)] leading-[1.15] mb-6">
              Elevating Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-blue-500">Excellence</span>
            </h2>
            
            <p className="text-lg md:text-xl text-[var(--foreground)] leading-relaxed mb-10 max-w-xl">
              We don't just build software; we craft digital legacies. We are committed to transforming businesses and passionate learners into elite industry professionals through world-class engineering and real-world exposure.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <div className="flex-1 flex items-center gap-4 bg-white border border-slate-100 p-5 rounded-[16px] shadow-sm hover:border-[var(--primary)] hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-blue-50 text-[var(--primary)] rounded-full flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[var(--heading)] font-bold text-lg mb-1">Premium Quality</h4>
                  <p className="text-[14px] text-slate-500 font-medium">Unmatched precision</p>
                </div>
              </div>
              
              <div className="flex-1 flex items-center gap-4 bg-white border border-slate-100 p-5 rounded-[16px] shadow-sm hover:border-[var(--primary)] hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-blue-50 text-[var(--primary)] rounded-full flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[var(--heading)] font-bold text-lg mb-1">Industry Ready</h4>
                  <p className="text-[14px] text-slate-500 font-medium">Future-proof tech</p>
                </div>
              </div>
            </div>

            <Link href="/about" className="btn-primary">
              Discover Our Story
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>

          {/* Right Image & Floating Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[550px] lg:h-[650px] rounded-[24px] z-10 perspective-1000"
          >
            {/* Main Premium Image */}
            <div className="absolute inset-0 rounded-[24px] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
                alt="WebCodian Digital Excellence" 
                className="w-full h-full object-cover img-premium"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
            </div>

            {/* Top Right Floating Card */}
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 top-16 w-64 bg-white/90 backdrop-blur-xl border border-white rounded-[18px] p-5 shadow-[0_20px_40px_rgba(0,0,0,0.1)] z-30"
            >
              <h4 className="text-[var(--heading)] font-bold mb-1 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></div>
                Innovation Labs
              </h4>
              <p className="text-[13px] text-slate-500 font-medium">Access to state-of-the-art software tools and cloud environments.</p>
            </motion.div>

            {/* Bottom Left Floating Card */}
            <motion.div 
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-6 bottom-16 w-72 bg-white/95 backdrop-blur-xl border border-white/50 rounded-[18px] p-6 shadow-[0_20px_50px_rgba(37,99,235,0.15)] z-30 flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Star className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <div>
                <div className="text-3xl font-black text-[var(--heading)] leading-none mb-1">100%</div>
                <div className="text-[13px] text-slate-600 font-semibold leading-tight">Job Assistance &<br/>Placement Support</div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
