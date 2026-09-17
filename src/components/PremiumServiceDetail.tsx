"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { PremiumProjectCTA } from "./PremiumProjectCTA";

interface ServiceFeature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface ServiceFAQ {
  q: string;
  a: string;
}

interface ServiceTechnology {
  name: string;
  icon: string | React.ReactNode;
}

interface PremiumServiceDetailProps {
  title: string;
  badgeText: string;
  description: string;
  heroImage: string;
  heroVideo?: string;
  overviewTitle: string;
  overviewDescription: string;
  features: ServiceFeature[];
  technologies?: ServiceTechnology[];
  faqs?: ServiceFAQ[];
  featuresImage?: string;
}

export function PremiumServiceDetail({
  title,
  badgeText,
  description,
  heroImage,
  heroVideo,
  overviewTitle,
  overviewDescription,
  features,
  technologies,
  faqs,
  featuresImage
}: PremiumServiceDetailProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const getFallbackVideo = (titleStr: string) => {
    const t = titleStr.toLowerCase();
    if (t.includes("app") || t.includes("mobile") || t.includes("ios") || t.includes("android")) {
      return "/videos/app-dev.mp4";
    }
    if (t.includes("e-commerce") || t.includes("shop") || t.includes("commerce")) {
      return "/videos/ecommerce.mp4";
    }
    if (t.includes("marketing") || t.includes("seo") || t.includes("digital")) {
      return "/videos/digital-marketing.mp4";
    }
    if (t.includes("software") || t.includes("crm") || t.includes("erp") || t.includes("maintenance")) {
      return "/videos/software-dev.mp4";
    }
    return "/videos/web-dev.mp4";
  };

  const isVideoUrl = (src?: string) => {
    if (!src) return false;
    return src.endsWith(".mp4") || src.endsWith(".webm");
  };

  const isGifUrl = (src?: string) => {
    if (!src) return false;
    return src.endsWith(".gif");
  };

  const resolvedMedia = heroVideo || (isVideoUrl(heroImage) || isGifUrl(heroImage) ? heroImage : getFallbackVideo(title));
  const isVideo = isVideoUrl(resolvedMedia);

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative pt-12 pb-10 lg:pt-20 lg:pb-12 overflow-hidden bg-slate-900 perspective-[1000px]">
        {/* Abstract Animated Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] animate-[pulse_6s_ease-in-out_infinite_alternate]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#2eb872]/10 rounded-full blur-[100px] animate-[pulse_8s_ease-in-out_infinite_alternate-reverse]" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern-hero" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern-hero)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Hero Text */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-300 font-bold text-xs mb-5 tracking-widest backdrop-blur-md uppercase shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2eb872] animate-pulse"></span>
                {badgeText}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-black text-white leading-[1.1] mb-5 tracking-tight">
                {title.split(' ').map((word, i, arr) => 
                   i === arr.length - 1 ? 
                   <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-[#2eb872] to-blue-400"> {word}</span> : 
                   <span key={i}> {word}</span>
                )}
              </h1>
              <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                {description}
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-[#2eb872] text-white font-bold rounded-xl hover:shadow-[0_10px_30px_rgba(46,184,114,0.3)] hover:-translate-y-0.5 transition-all duration-300 text-base group"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Hero Animated Video/GIF Device Frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 50 }}
              className="lg:w-1/2 relative w-full"
            >
              <div className="relative w-full max-w-lg mx-auto aspect-[4/3] lg:aspect-[16/11]">
                {/* Glowing Aura */}
                <div className="absolute -inset-3 bg-gradient-to-tr from-blue-500/30 via-[#2eb872]/30 to-purple-500/20 rounded-[2.5rem] filter blur-2xl opacity-70 animate-pulse pointer-events-none" />
                
                {/* Device / Mockup Chrome */}
                <div className="relative z-10 w-full h-full bg-slate-900/90 backdrop-blur-2xl border border-white/20 rounded-[2rem] shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col group">
                  
                  {/* Window Chrome Header */}
                  <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-slate-950/70 backdrop-blur-md shrink-0">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/90 shadow-[0_0_8px_rgba(244,63,94,0.4)]"></span>
                      <span className="w-3 h-3 rounded-full bg-amber-500/90 shadow-[0_0_8px_rgba(245,158,11,0.4)]"></span>
                      <span className="w-3 h-3 rounded-full bg-emerald-500/90 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
                    </div>
                    
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2eb872] animate-ping"></span>
                      <span>{title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.engine.preview</span>
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-extrabold tracking-widest uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>LIVE</span>
                    </div>
                  </div>

                  {/* Video / GIF Display Container */}
                  <div className="relative flex-1 w-full h-full overflow-hidden bg-slate-950">
                    {isVideo ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        src={resolvedMedia}
                        poster={heroImage}
                      />
                    ) : (
                      <img
                        src={resolvedMedia}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    
                    {/* Ambient subtle vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20 pointer-events-none" />

                    {/* Bottom Floating Badges */}
                    <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                      <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/15 text-[11px] font-bold text-white shadow-xl">
                        <span className="w-2 h-2 rounded-full bg-[#2eb872] animate-pulse"></span>
                        <span>Enterprise Build</span>
                      </div>

                      <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300">
                        <span>⚡ 60 FPS</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Overview & Features */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-white perspective-[1000px]">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-emerald-50/50 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                }
              }}
              className="lg:w-1/2"
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-slate-50 border border-slate-200 text-slate-500 font-bold text-[10px] uppercase tracking-[0.2em] mb-6 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                  Service Overview
                </span>
              </motion.div>
              
              <motion.h2 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight"
              >
                {overviewTitle}
              </motion.h2>
              
              <motion.p 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="text-slate-500 mb-12 text-lg md:text-xl leading-relaxed font-medium"
              >
                {overviewDescription}
              </motion.p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                {features.map((feature, idx) => (
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.95 },
                      visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } }
                    }}
                    whileHover={{ 
                      y: -8,
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    key={idx} 
                    className="flex flex-col items-start p-8 bg-white rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-blue-100 transition-all duration-300 group relative overflow-hidden"
                  >
                    {/* Hover Glow */}
                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-blue-100/50 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="bg-slate-50 text-blue-600 p-4 rounded-2xl shrink-0 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mb-6 border border-slate-100 shadow-sm relative z-10">
                      {feature.icon || <CheckCircle2 className="w-6 h-6" />}
                    </div>
                    <div className="relative z-10">
                      <h4 className="font-extrabold text-slate-900 text-lg mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed font-medium group-hover:text-slate-600 transition-colors">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}
              className="lg:w-1/2 w-full transform-gpu"
            >
               {featuresImage ? (
                  <div className="relative p-2 rounded-[3rem] bg-gradient-to-br from-slate-100 to-white shadow-2xl group transform transition-transform duration-700 hover:rotate-y-[-5deg]">
                     <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-[#2eb872]/10 blur-2xl opacity-50 -z-10 group-hover:opacity-100 transition-opacity duration-700" />
                     <div className="rounded-[2.5rem] overflow-hidden relative border-4 border-white shadow-inner bg-slate-50">
                       <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                       <img src={featuresImage} alt="Features" className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                     </div>
                  </div>
               ) : (
                  <div className="relative p-[1px] rounded-[3rem] bg-gradient-to-br from-slate-200 via-slate-50 to-slate-200 shadow-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-[#2eb872]/10 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="bg-white/80 backdrop-blur-xl p-10 md:p-14 rounded-[3rem] h-full flex flex-col justify-center relative overflow-hidden">
                      {/* Decorative Shapes */}
                      <motion.div 
                        animate={{ rotate: 360 }} 
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-32 -right-32 w-64 h-64 border-[40px] border-[#2eb872]/5 rounded-full pointer-events-none" 
                      />
                      
                      <h3 className="text-4xl font-black text-slate-900 mb-10 relative z-10 tracking-tight">Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#2eb872]">Us?</span></h3>
                      
                      <ul className="space-y-8 relative z-10">
                        {["Tailored Solutions", "Experienced Team", "Quality Assurance", "Ongoing Support"].map((item, i) => (
                          <motion.li 
                            key={i}
                            whileHover={{ x: 10 }}
                            className="flex items-center gap-5 text-slate-800 font-extrabold text-lg group/item cursor-default"
                          >
                            <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 text-[#2eb872] group-hover/item:bg-[#2eb872] group-hover/item:text-white group-hover/item:shadow-lg group-hover/item:scale-110 transition-all duration-300">
                              <CheckCircle2 className="w-6 h-6" />
                              <div className="absolute inset-0 rounded-2xl bg-[#2eb872] blur-md opacity-0 group-hover/item:opacity-30 transition-opacity duration-300" />
                            </div>
                            <span className="group-hover/item:text-blue-600 transition-colors">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
               )}
            </motion.div>
          </div>

        </div>
      </section>

      {/* 3. Tech Stack Marquee (if provided) */}
      {technologies && technologies.length > 0 && (
        <section className="py-16 bg-[#f8fafc] overflow-hidden relative border-y border-slate-100">
          <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-[#f8fafc] via-transparent to-[#f8fafc] w-full" />
          
          <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-20 mb-16 text-center">
            <span className="inline-block py-1.5 px-3 rounded-full bg-white border border-slate-200 text-slate-500 font-bold text-[10px] uppercase tracking-widest mb-4 shadow-sm">TECHNOLOGY WE USE</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">Powered by modern technologies</h2>
          </div>
          
          <div className="relative w-full flex flex-col gap-6 perspective-[1000px] z-0">
            <div className="flex w-[2070px]">
              <motion.div
                animate={{ x: [0, -1035] }}
                transition={{ repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" }}
                className="flex gap-6 items-center"
              >
                {[...technologies, ...technologies, ...technologies].map((tech, idx) => (
                  <div
                    key={idx}
                    className="w-48 h-48 bg-white hover:bg-blue-50/50 border border-slate-100 hover:border-blue-100 rounded-3xl p-6 flex flex-col items-center justify-center gap-6 shadow-sm hover:shadow-xl transition-all duration-300 group"
                  >
                    {typeof tech.icon === 'string' && tech.icon.startsWith('http') ? (
                      <img src={tech.icon} alt={tech.name} className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300" />
                    ) : (
                      <div className="text-5xl group-hover:scale-110 transition-transform text-slate-700 group-hover:text-blue-600">{tech.icon}</div>
                    )}
                    <div className="font-extrabold text-lg text-slate-800">{tech.name}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* 4. FAQ Section (if provided) */}
      {faqs && faqs.length > 0 && (
        <section className="py-12 lg:py-16 bg-slate-50 relative">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <div className="text-center mb-10">
              <span className="inline-block py-1.5 px-3 rounded-full bg-white border border-slate-200 text-slate-500 font-bold text-[10px] uppercase tracking-widest mb-4 shadow-sm">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Got Questions?</h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === idx ? 'border-blue-500 shadow-md bg-white' : 'border-slate-200 bg-white hover:border-blue-200'}`}
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 lg:p-6 text-left focus:outline-none"
                  >
                    <span className={`font-bold text-base lg:text-lg ${openFaq === idx ? 'text-blue-600' : 'text-slate-800'}`}>
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 lg:p-6 pt-0 text-slate-500 text-sm lg:text-base font-medium leading-relaxed mt-1">
                      {faq.a}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Reused Premium Project CTA */}
      <PremiumProjectCTA />

    </div>
  );
}
