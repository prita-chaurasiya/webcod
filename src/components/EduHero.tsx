"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Award, ChevronRight } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2000&auto=format&fit=crop",
    badge: "Since 2018 • INDIA • DUBAI • USA",
    title1: "Software",
    title2: "That Ships.",
    title3: "AI That Works.",
    description: "WebCodian is a premium software development and AI automation company. We build custom software, mobile apps and AI agents that remove the work slowing your business down."
  },
  {
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2000&auto=format&fit=crop",
    badge: "Enterprise Solutions • ISO Certified",
    title1: "Digital",
    title2: "Transformation.",
    title3: "Next-Gen SaaS.",
    description: "We help businesses scale with intelligent, custom-built enterprise software. From legacy system modernization to fully-fledged SaaS product development."
  },
  {
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2000&auto=format&fit=crop",
    badge: "Growth Marketing • Data Driven",
    title1: "Marketing",
    title2: "That Converts.",
    title3: "Global Reach.",
    description: "Drive exponential growth with our data-driven digital marketing strategies. SEO, SEM, and brand positioning that brings customers directly to you."
  }
];

export function EduHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full min-h-[100vh] bg-black overflow-hidden flex flex-col justify-center">
      
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
            src={slide.image} 
            alt="Enterprise Technology" 
            initial={{ scale: 1 }}
            animate={{ scale: 1.15 }}
            transition={{ duration: 20, ease: "linear" }}
            className="absolute inset-0 w-full h-full object-cover origin-center opacity-50"
          />
          {/* Luxury dark gradient overlay to ensure text pops without being too blue */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
        </motion.div>
      </AnimatePresence>

      {/* Main Text Content (Animated per slide) */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl h-full relative z-30 flex flex-col justify-center pt-20">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-3xl flex flex-col justify-center items-start py-10"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-orange-300 font-bold text-xs tracking-[0.2em] mb-8 uppercase shadow-[0_0_20px_rgba(37,99,235,0.2)]">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              {slide.badge}
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-[80px] font-extrabold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-2xl">
              {slide.title1} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 font-light">{slide.title2}</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-400">{slide.title3}</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl font-light leading-relaxed drop-shadow-md tracking-wide">
              {slide.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
              <Link 
                href="/contact"
                className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white px-9 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(37,99,235,0.4)] transition-all duration-300 text-base hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(37,99,235,0.6)]"
              >
                Consult an Expert
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link 
                href="/portfolio"
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 backdrop-blur-md text-white px-9 py-4 rounded-xl font-bold flex items-center justify-center gap-2 border border-white/20 transition-all duration-300 text-base hover:-translate-y-1"
              >
                View Our Work
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Slider Controls / Dots */}
        <div className="absolute bottom-10 left-6 md:left-12 lg:left-20 flex gap-3 z-40">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-500 ${
                currentSlide === idx ? "w-10 bg-orange-500" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
