"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    subtitle: "Enterprise Engineering",
    heading1: "Architecting",
    heading2: "The Future of",
    headingAccent: "Digital Business.",
    text: "WebCodian is a global software engineering partner, delivering highly scalable, secure, and intelligent technology solutions to enterprises worldwide. We turn visionary concepts into robust digital realities that drive operational excellence.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 2,
    subtitle: "AI & Automation",
    heading1: "Intelligent",
    heading2: "Ecosystems",
    headingAccent: "Engineered to Scale.",
    text: "Leverage the power of advanced Artificial Intelligence, Machine Learning, and Cloud Architecture. We empower organizations to automate complex workflows, unlock deep data insights, and dominate their respective markets.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop"
  }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center pt-[120px] pb-[80px] bg-slate-50">
      {/* Deep Tech Background Visuals */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-50/10 rounded-full blur-[100px] mix-blend-screen opacity-40"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay"></div>
        
        {/* Subtle Floating Nodes */}
        <motion.div animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]"></motion.div>
        <motion.div animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-[30%] right-[15%] w-3 h-3 rounded-full bg-slate-50 shadow-[0_0_15px_#a855f7]"></motion.div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="grid lg:grid-cols-12 gap-12 items-center"
          >
            {/* Left Content */}
            <div className="lg:col-span-7 text-[var(--heading)]">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center gap-3 mb-6 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md"
              >
                <div className="w-2 h-2 rounded-full bg-[var(--primary)] shadow-[0_0_10px_var(--primary)] animate-pulse"></div>
                <span className="text-[13px] font-bold tracking-widest uppercase text-slate-600">{slides[currentSlide].subtitle}</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}
                className="text-[48px] md:text-[64px] lg:text-[72px] font-bold leading-[1.05] mb-8 tracking-tight"
              >
                <span className="block text-[var(--heading)]">{slides[currentSlide].heading1}</span>
                <span className="block text-slate-600">{slides[currentSlide].heading2}</span>
                <span className="block text-[var(--primary)] relative">
                  {slides[currentSlide].headingAccent}
                  <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-[var(--primary)] to-transparent rounded-full"></span>
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}
                className="text-[16px] md:text-[18px] leading-[1.8] mb-10 text-slate-500 max-w-2xl font-medium"
              >
                {slides[currentSlide].text}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-wrap items-center gap-6"
              >
                <Link 
                  href="/about" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--primary)] text-white font-bold rounded-full hover:bg-[#259b5f] transition-all duration-300 shadow-[0_10px_30px_rgba(46,184,114,0.2)] hover:shadow-[0_15px_40px_rgba(46,184,114,0.4)] hover:-translate-y-1 group"
                >
                  Explore WebCodian <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href="https://www.youtube.com/watch?v=Y5KCDWi7h9o" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 text-[var(--heading)] font-bold hover:text-slate-600 transition-colors group"
                >
                  <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                    <Play className="w-5 h-5 fill-white ml-1" />
                  </div>
                  Watch Reel
                </a>
              </motion.div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-12 lg:mt-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }} 
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} 
                transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0F19] via-transparent to-transparent z-10 rounded-[18px]"></div>
                <img 
                  src={slides[currentSlide].image} 
                  alt="Technology Hero" 
                  className="max-w-full h-auto drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)] relative z-0 img-premium" 
                  style={{ transform: "perspective(1000px) rotateY(-10deg) rotateX(5deg)" }}
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Premium Slider Controls */}
      <div className="absolute bottom-10 right-10 flex gap-4 z-20">
        <button onClick={prevSlide} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:scale-110 transition-all backdrop-blur-md group">
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <button onClick={nextSlide} className="w-12 h-12 rounded-full bg-[var(--primary)]/20 border border-[var(--primary)]/50 flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white hover:scale-110 transition-all backdrop-blur-md group">
          <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
}
