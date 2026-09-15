"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, ArrowRight, Code2, MonitorSmartphone, Share2, Award, BookOpen, Users, Briefcase, Bot, Library, ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

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

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full min-h-[100vh] lg:h-[750px] bg-slate-900 overflow-hidden flex flex-col justify-center pt-24 lg:pt-32 pb-16 lg:pb-0">
      
      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center bg-white/90 hover:bg-white text-slate-800 rounded-full shadow-lg transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center bg-white/90 hover:bg-white text-slate-800 rounded-full shadow-lg transition-all"
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
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 15, ease: "linear" }}
            className="absolute inset-0 w-full h-full object-cover origin-center"
          />
          
          {/* Gradient Overlay for Text Readability */}
          {/* Fades from solid white on the left, to semi-transparent in the middle, to clear on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
        </motion.div>
      </AnimatePresence>

      {/* Main Text Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl h-full relative z-30 flex flex-col justify-center">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide + '-text'}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="w-full max-w-2xl flex flex-col justify-center items-start py-10"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm text-slate-800 font-bold text-xs tracking-wider mb-6 lg:mb-8">
              <GraduationCap className="w-4 h-4 text-[#2eb872]" />
              WEB CODIAN • IT TRAINING & DIGITAL SKILLS
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight drop-shadow-sm">
              {slide.headlinePart1} <br className="hidden md:block" />
              {slide.headlinePart2} <br className="hidden md:block" />
              <span className="text-[#2eb872] relative inline-block mt-2 lg:mt-0">
                {slide.headlinePart3}
                <svg className="absolute w-full h-3 -bottom-1 lg:-bottom-2 left-0 opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M 0,5 Q 25,0 50,5 T 100,5" fill="none" stroke="#2eb872" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-slate-800 text-lg md:text-xl mb-10 max-w-lg font-semibold leading-relaxed drop-shadow-sm">
              {slide.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <motion.div whileHover={{ y: -6, scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link 
                  href="/computer-courses"
                  className="w-full sm:w-auto bg-[#2eb872] hover:bg-[#25995e] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(46,184,114,0.3)] hover:shadow-[0_20px_40px_rgba(46,184,114,0.5)] transition-shadow duration-300 text-base group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12"></div>
                  Explore Courses 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ y: -6, scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link 
                  href="/contact"
                  className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-slate-200 hover:border-slate-300 transition-shadow duration-300 text-base group"
                >
                  Enquire Now
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#2eb872] group-hover:translate-x-1 transition-all" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
        
      </div>
    </section>
  );
}
