"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown, Clock, BookOpen, Star, Award, Briefcase, FileCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { PremiumProjectCTA } from "./PremiumProjectCTA";

interface CourseModule {
  title: string;
  duration: string;
  topics: string[];
}

interface CourseFAQ {
  q: string;
  a: string;
}

interface PremiumCourseDetailProps {
  title: string;
  category: string;
  description: string;
  heroImage: string;
  duration: string;
  lectures: string;
  rating: number;
  studentsEnrolled: string;
  price: string;
  overviewTitle: string;
  overviewDescription: string;
  benefits: string[];
  modules: CourseModule[];
  faqs?: CourseFAQ[];
}

export function PremiumCourseDetail({
  title,
  category,
  description,
  heroImage,
  duration,
  lectures,
  rating,
  studentsEnrolled,
  price,
  overviewTitle,
  overviewDescription,
  benefits,
  modules,
  faqs
}: PremiumCourseDetailProps) {
  const [openModule, setOpenModule] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 perspective-[1000px]">
        {/* Abstract Animated Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] animate-[pulse_6s_ease-in-out_infinite_alternate]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#2eb872]/20 rounded-full blur-[100px] animate-[pulse_8s_ease-in-out_infinite_alternate-reverse]" />
          <svg className="absolute inset-0 w-full h-full opacity-10 mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern-hero" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern-hero)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            {/* Hero Text */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:w-3/5 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-300 font-semibold text-sm mb-6 tracking-widest backdrop-blur-md uppercase">
                <span className="w-2 h-2 rounded-full bg-[#2eb872] animate-pulse"></span>
                {category}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                {title.split(' ').map((word, i, arr) => 
                   i === arr.length - 1 || i === arr.length - 2 ? 
                   <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-[#2eb872] to-blue-400"> {word}</span> : 
                   <span key={i}> {word}</span>
                )}
              </h1>
              <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {description}
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 mb-10">
                 <div className="flex items-center gap-2 text-slate-300">
                    <Clock className="w-5 h-5 text-[#2eb872]" />
                    <span className="font-semibold">{duration}</span>
                 </div>
                 <div className="flex items-center gap-2 text-slate-300">
                    <BookOpen className="w-5 h-5 text-blue-400" />
                    <span className="font-semibold">{lectures}</span>
                 </div>
                 <div className="flex items-center gap-2 text-slate-300">
                    <Star className="w-5 h-5 text-[#f59e0b] fill-current" />
                    <span className="font-semibold">{rating} Rating</span>
                 </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-[#2eb872] text-white font-bold rounded-2xl hover:shadow-[0_0_30px_rgba(46,184,114,0.4)] hover:-translate-y-1 transition-all duration-300 text-lg group"
                >
                  Enroll Now - {price}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-300 text-lg">
                  Download Syllabus
                </button>
              </div>
            </motion.div>

            {/* Hero 3D Graphic */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
              className="lg:w-2/5 relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative w-full max-w-sm mx-auto aspect-[4/5]">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-[#2eb872] rounded-[3rem] mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" />
                <motion.div 
                  animate={{ y: [-10, 10, -10], rotateZ: [0, 2, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 w-full h-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-[3rem] shadow-2xl flex flex-col overflow-hidden"
                  style={{ transform: "translateZ(50px)" }}
                >
                  <img 
                    src={heroImage} 
                    alt={title} 
                    className="w-full h-full object-cover mix-blend-overlay opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-8">
                     <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#2eb872] flex items-center justify-center">
                           <Award className="w-6 h-6 text-white" />
                        </div>
                        <div>
                           <div className="text-white font-bold text-lg">{studentsEnrolled}</div>
                           <div className="text-slate-300 text-sm">Students Enrolled</div>
                        </div>
                     </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Course Overview & Benefits */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left: Overview */}
            <div className="lg:w-7/12">
              <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-600 font-semibold text-sm mb-4">Course Overview</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{overviewTitle}</h2>
              <div className="text-slate-600 text-lg leading-relaxed space-y-6">
                 {overviewDescription.split('\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                 ))}
              </div>
            </div>

            {/* Right: What You'll Learn (Benefits) */}
            <div className="lg:w-5/12">
               <div className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl h-full">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8">What You'll Learn</h3>
                  <div className="space-y-6">
                     {benefits.map((benefit, idx) => (
                        <div key={idx} className="flex gap-4 items-start">
                           <div className="mt-1 w-6 h-6 rounded-full bg-[#2eb872]/20 flex items-center justify-center shrink-0">
                              <CheckCircle2 className="w-4 h-4 text-[#2eb872]" />
                           </div>
                           <p className="text-slate-700 font-medium">{benefit}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Key Highlights */}
      <section className="py-20 bg-slate-900 relative border-y border-slate-800">
         <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
               <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4 border border-blue-500/30">
                     <Briefcase className="w-8 h-8 text-blue-400" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">100% Placement</h4>
                  <p className="text-slate-400 text-sm">Dedicated placement cell and interview prep.</p>
               </div>
               <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-[#2eb872]/20 rounded-2xl flex items-center justify-center mb-4 border border-[#2eb872]/30">
                     <FileCheck className="w-8 h-8 text-[#2eb872]" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">Live Projects</h4>
                  <p className="text-slate-400 text-sm">Work on real-world industry projects.</p>
               </div>
               <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-purple-500/20 rounded-2xl flex items-center justify-center mb-4 border border-purple-500/30">
                     <Award className="w-8 h-8 text-purple-400" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">Certification</h4>
                  <p className="text-slate-400 text-sm">Globally recognized certificate upon completion.</p>
               </div>
               <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-orange-500/20 rounded-2xl flex items-center justify-center mb-4 border border-orange-500/30">
                     <Star className="w-8 h-8 text-orange-400" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">Expert Faculty</h4>
                  <p className="text-slate-400 text-sm">Learn directly from industry professionals.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 4. Course Curriculum (Modules) */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-slate-200 text-slate-700 font-semibold text-sm mb-4">Course Curriculum</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What's inside the course?</h2>
          </div>

          <div className="space-y-4">
            {modules.map((module, idx) => (
              <div 
                key={idx} 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openModule === idx ? 'border-blue-500 shadow-md bg-white' : 'border-slate-200 bg-white hover:border-blue-300'}`}
              >
                <button 
                  onClick={() => setOpenModule(openModule === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                     <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${openModule === idx ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                        {idx + 1}
                     </div>
                     <div>
                        <span className="block font-bold text-lg text-slate-800">
                           {module.title}
                        </span>
                        <span className="text-sm font-medium text-slate-500 mt-1 block">
                           {module.duration} • {module.topics.length} Topics
                        </span>
                     </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openModule === idx ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openModule === idx ? 'auto' : 0, opacity: openModule === idx ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 border-t border-slate-100 mt-2">
                     <ul className="space-y-3 mt-4">
                        {module.topics.map((topic, i) => (
                           <li key={i} className="flex items-center gap-3 text-slate-600">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                              {topic}
                           </li>
                        ))}
                     </ul>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ Section (if provided) */}
      {faqs && faqs.length > 0 && (
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-600 font-semibold text-sm mb-4">Frequently Asked Questions</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Got Questions? We Have Answers.</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === idx ? 'border-[#2eb872] shadow-md bg-white' : 'border-slate-200 bg-slate-50 hover:border-[#2eb872]/50'}`}
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className={`font-bold text-lg ${openFaq === idx ? 'text-[#2eb872]' : 'text-slate-800'}`}>
                      Q{idx + 1}. {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-[#2eb872]' : 'text-slate-400'}`} />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Reused Premium Project CTA */}
      <PremiumProjectCTA />

    </div>
  );
}
