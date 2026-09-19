"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";

const slides = [
  {
    id: 1,
    headlinePart1: "Learn. Build.",
    headlinePart2: "Grow Your",
    headlinePart3: "Digital Skills.",
    description: "Build practical skills in Computer Applications, Web Development, Digital Marketing, Programming, Graphic Design and modern technologies with WebCodian.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    headlinePart1: "Design. Develop.",
    headlinePart2: "Scale Your",
    headlinePart3: "Business Apps.",
    description: "Enterprise-grade web and mobile applications designed to optimize your workflow and increase revenue with WebCodian's expert team.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    headlinePart1: "Attract. Engage.",
    headlinePart2: "Dominate",
    headlinePart3: "Search Results.",
    description: "Data-driven marketing and SEO strategies to increase your visibility, traffic, and sales globally with WebCodian's growth team.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 4,
    headlinePart1: "Innovate. Deploy.",
    headlinePart2: "Master",
    headlinePart3: "AI & Tech.",
    description: "Learn modern frameworks like React, Python, and AI integration to stay ahead in the fast-paced technology landscape.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
  }
];



export function EduHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
    }
  }, [currentSlide]);

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full min-h-[100vh] lg:h-[750px] bg-[#0a0f1c] overflow-hidden flex flex-col justify-center pt-24 lg:pt-32 pb-16 lg:pb-0">
      
      <button 
        onClick={prevSlide}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full z-0"
        >
          {/* Full Banner Background Image (Ken Burns Effect) */}
          <motion.img 
            src={slide.image} 
            alt="Hero Background" 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1.15 }}
            transition={{ duration: 20, ease: "linear" }}
            className="absolute inset-0 w-full h-full object-cover origin-center opacity-60"
          />
          
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1c] via-[#0a0f1c]/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent z-10"></div>
        </motion.div>
      </AnimatePresence>

      {/* Main Text Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl h-full relative z-30 flex flex-col justify-center">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide + '-text'}
            className="w-full max-w-2xl flex flex-col justify-center items-start py-10"
            ref={textRef}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 backdrop-blur-md border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)] text-cyan-400 font-bold text-xs tracking-wider mb-6 lg:mb-8">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              WEB CODIAN • IT TRAINING & DIGITAL SKILLS
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-extrabold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-2xl">
              {slide.headlinePart1} <br className="hidden md:block" />
              {slide.headlinePart2} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 relative inline-block mt-2 lg:mt-0">
                {slide.headlinePart3}
                <svg className="absolute w-full h-3 -bottom-1 lg:-bottom-2 left-0 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M 0,5 Q 25,0 50,5 T 100,5" fill="none" stroke="currentColor" className="text-cyan-500" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-lg font-medium leading-relaxed drop-shadow-lg">
              {slide.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link 
                  href="/computer-courses"
                  className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300 text-base group relative overflow-hidden border border-white/10"
                >
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12"></div>
                  Explore Courses 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link 
                  href="/contact"
                  className="w-full sm:w-auto bg-white/5 hover:bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg border border-white/10 hover:border-white/20 transition-all duration-300 text-base group"
                >
                  Enquire Now
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
        
      </div>
    </section>
  );
}
