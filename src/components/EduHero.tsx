"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Award, ChevronRight } from "lucide-react";
import Link from "next/link";

const images = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=2000"
];

export function EduHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[100vh] bg-slate-900 overflow-hidden flex flex-col justify-center">
      
      {/* Background Slider with Ken Burns */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full z-0"
        >
          <motion.img 
            src={images[currentSlide]} 
            alt="Enterprise Technology" 
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 15, ease: "linear" }}
            className="absolute inset-0 w-full h-full object-cover origin-center opacity-60"
          />
          {/* Luxury dark gradient overlay to ensure text pops */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
        </motion.div>
      </AnimatePresence>

      {/* Main Text Content (Static) */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl h-full relative z-30 flex flex-col justify-center pt-20">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full max-w-3xl flex flex-col justify-center items-start py-10"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white font-medium text-xs tracking-[0.2em] mb-8 uppercase shadow-2xl">
            <Award className="w-4 h-4 text-blue-400" />
            Since 2018 • INDIA • DUBAI • USA • 500+ Projects Delivered
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-[80px] font-extrabold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
            Software <br className="hidden md:block" />
            <span className="text-slate-300 font-light">That Ships.</span><br />
            <span className="text-blue-500">AI That Works.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl font-normal leading-relaxed drop-shadow-md tracking-wide">
            WebCodian is a premium software development and AI automation company. We build custom software, mobile apps and AI agents that remove the work slowing your business down — and the digital marketing that brings customers to it.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
            <Link 
              href="/contact"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-9 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all duration-300 text-base hover:-translate-y-1"
            >
              Consult an Expert
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link 
              href="/portfolio"
              className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-white px-9 py-4 rounded-xl font-bold flex items-center justify-center gap-2 border border-white/20 transition-all duration-300 text-base hover:-translate-y-1"
            >
              View Our Work
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </Link>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
