"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    subtitle: "Digital Offerings",
    heading1: "Design. Develop.",
    heading2: "Scale Your",
    headingAccent: "Business Apps.",
    text: "Welcome to Webcodian LLP, your premier destination for innovative software solutions and cutting-edge website development. Based in the cultural heart of Varanasi, we specialize in crafting tailor-made digital experiences that empower businesses to thrive in the ever-evolving digital landscape.",
    image: "https://webcodian.com/public/web/assets/img/case-study/1.png"
  },
  {
    id: 2,
    subtitle: "Advancing Innovators",
    heading1: "Innovative",
    heading2: "Developers",
    headingAccent: "Steering Progress.",
    text: "Are you passionate about pushing the boundaries of technology and creating groundbreaking solutions that transform industries? Join us at Webcodian LLP as an Innovative Developer and embark on an exciting journey of innovation, creativity, and collaboration.",
    image: "https://webcodian.com/public/web/assets/img/case-study/2.png"
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
    <section className="relative overflow-hidden min-h-[90vh] flex items-center pt-[120px] pb-[80px] bg-[#0B0F19]">
      {/* Deep Tech Background Visuals */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[100px] mix-blend-screen opacity-40"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay"></div>
        
        {/* Subtle Floating Nodes */}
        <motion.div animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]"></motion.div>
        <motion.div animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-[30%] right-[15%] w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_15px_#a855f7]"></motion.div>
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
            <div className="lg:col-span-7 text-white">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center gap-3 mb-6 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md"
              >
                <div className="w-2 h-2 rounded-full bg-[#2eb872] shadow-[0_0_10px_#2eb872] animate-pulse"></div>
                <span className="text-[13px] font-bold tracking-widest uppercase text-slate-300">{slides[currentSlide].subtitle}</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}
                className="text-[48px] md:text-[64px] lg:text-[72px] font-black leading-[1.05] mb-8 tracking-tight"
              >
                <span className="block text-white">{slides[currentSlide].heading1}</span>
                <span className="block text-slate-300">{slides[currentSlide].heading2}</span>
                <span className="block text-[#2eb872] relative">
                  {slides[currentSlide].headingAccent}
                  <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-[#2eb872] to-transparent rounded-full"></span>
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}
                className="text-[16px] md:text-[18px] leading-[1.8] mb-10 text-slate-400 max-w-2xl font-medium"
              >
                {slides[currentSlide].text}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-wrap items-center gap-6"
              >
                <Link 
                  href="/about" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#2eb872] text-white font-bold rounded-full hover:bg-[#259b5f] transition-all duration-300 shadow-[0_10px_30px_rgba(46,184,114,0.2)] hover:shadow-[0_15px_40px_rgba(46,184,114,0.4)] hover:-translate-y-1 group"
                >
                  Explore WebCodian <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href="https://www.youtube.com/watch?v=Y5KCDWi7h9o" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 text-white font-bold hover:text-slate-300 transition-colors group"
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
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0F19] via-transparent to-transparent z-10 rounded-2xl"></div>
                <img 
                  src={slides[currentSlide].image} 
                  alt="Technology Hero" 
                  className="max-w-full h-auto drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)] relative z-0" 
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
        <button onClick={nextSlide} className="w-12 h-12 rounded-full bg-[#2eb872]/20 border border-[#2eb872]/50 flex items-center justify-center text-[#2eb872] hover:bg-[#2eb872] hover:text-white hover:scale-110 transition-all backdrop-blur-md group">
          <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
}
