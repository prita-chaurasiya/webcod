"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PremiumProjectCTA } from "./PremiumProjectCTA";

interface SolutionFeature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface PremiumSolutionDetailProps {
  title: string;
  subtitle: string;
  heroHeading: React.ReactNode;
  heroDescription: React.ReactNode;
  heroImage: string;
  whyHeading: React.ReactNode;
  whyDescription: string;
  whyImage: string;
  features: SolutionFeature[];
}

export function PremiumSolutionDetail({
  title,
  subtitle,
  heroHeading,
  heroDescription,
  heroImage,
  whyHeading,
  whyDescription,
  whyImage,
  features,
}: PremiumSolutionDetailProps) {
  return (
    <div className="bg-white min-h-screen font-sans overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#f8fafc] overflow-hidden">
        {/* Subtle background blob */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-blue-100/50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-[55%] text-left"
            >
              <h1 className="text-4xl md:text-[44px] lg:text-[52px] font-bold text-slate-900 leading-[1.2] mb-6 tracking-tight">
                {heroHeading}
              </h1>
              
              <h2 className="text-xl md:text-2xl font-bold text-[var(--primary)] mb-6 leading-snug">
                {subtitle}
              </h2>
              
              <div className="text-slate-600 text-base md:text-lg mb-8 leading-[1.7] space-y-5 font-medium max-w-3xl">
                {heroDescription}
              </div>
              
            </motion.div>

            {/* Right Illustration / Animated Device Frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 50 }}
              className="lg:w-[45%] w-full relative"
            >
              <div className="relative w-full max-w-lg mx-auto aspect-[4/3] lg:aspect-[16/11]">
                {/* Glowing Aura */}
                <div className="absolute -inset-3 bg-gradient-to-tr from-blue-500/30 via-[var(--primary)]/30 to-purple-500/20 rounded-[2.5rem] filter blur-2xl opacity-70 animate-pulse pointer-events-none" />
                
                {/* Device / Mockup Chrome */}
                <div className="relative z-10 w-full h-full bg-white/90 backdrop-blur-2xl border border-white/20 rounded-[2rem] shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col group">
                  
                  {/* Window Chrome Header */}
                  <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-slate-50/70 backdrop-blur-md shrink-0">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-slate-50/90 shadow-[0_0_8px_rgba(244,63,94,0.4)]"></span>
                      <span className="w-3 h-3 rounded-full bg-slate-50/90 shadow-[0_0_8px_rgba(245,158,11,0.4)]"></span>
                      <span className="w-3 h-3 rounded-full bg-slate-50/90 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
                    </div>
                    
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-ping"></span>
                      <span>webcodian.engine.preview</span>
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-50/10 border border-slate-100/20 text-[var(--primary)] text-[10px] font-bold tracking-widest uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-50 animate-pulse"></span>
                      <span>LIVE</span>
                    </div>
                  </div>

                  {/* Video / GIF Display Container */}
                  <div className="relative flex-1 w-full h-full overflow-hidden bg-slate-50">
                    {(heroImage?.endsWith('.mp4') || heroImage?.endsWith('.webm')) ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        src={heroImage}
                      />
                    ) : (
                      <img
                        src={heroImage || "/videos/web-dev.mp4"} // fallback if they provided an image instead of video
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    )}
                    
                    {/* Ambient subtle vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20 pointer-events-none" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Why Choose / Features Section - Cards at Bottom */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          
          {/* Top Content */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight tracking-tight"
            >
              {whyHeading}
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 text-lg md:text-xl font-medium"
            >
              {whyDescription}
            </motion.p>
          </div>

          {/* Bottom Cards Grid - Full Width */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx} 
                className="bg-slate-50 p-8 rounded-[24px] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] hover:border-blue-200 transition-all duration-300 flex flex-col group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors duration-300 shadow-sm mb-6">
                  {feature.icon || (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  )}
                </div>
                <h4 className="font-bold text-slate-900 text-xl mb-3">{feature.title}</h4>
                <p className="text-slate-500 text-base leading-relaxed font-medium">{feature.description}</p>
              </motion.div>
            ))}
          </div>
            
        </div>
      </section>

      {/* Reused Premium CTA */}
      <PremiumProjectCTA />

    </div>
  );
}
