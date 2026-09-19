"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown, Clock, BookOpen, Star, Award, Briefcase, FileCheck, Users, Users2, Laptop2, MessageCircle } from "lucide-react";
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
    <div className="bg-[#0a0f1c] min-h-screen text-slate-300 select-none">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#060913] perspective-[1000px] border-b border-white/5">
        {/* Abstract Animated Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] animate-[pulse_6s_ease-in-out_infinite_alternate]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] animate-[pulse_8s_ease-in-out_infinite_alternate-reverse]" />
          <svg className="absolute inset-0 w-full h-full opacity-5 mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-semibold text-sm mb-6 tracking-widest backdrop-blur-md uppercase shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                {category}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                {title.split(' ').map((word, i, arr) => 
                   i === arr.length - 1 || i === arr.length - 2 ? 
                   <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> {word}</span> : 
                   <span key={i}> {word}</span>
                )}
              </h1>
              <p className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {description}
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 mb-10">
                 <div className="flex items-center gap-2 text-slate-300">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <span className="font-semibold">{duration}</span>
                 </div>
                 <div className="flex items-center gap-2 text-slate-300">
                    <BookOpen className="w-5 h-5 text-blue-400" />
                    <span className="font-semibold">{lectures}</span>
                 </div>
                 <div className="flex items-center gap-2 text-slate-300">
                    <Star className="w-5 h-5 text-amber-400 fill-current" />
                    <span className="font-semibold">{rating} Rating</span>
                 </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link 
                  href="/course-enquiry"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-1 transition-all duration-300 text-lg group"
                >
                  Enroll Now - {price}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300 text-lg">
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
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-[3rem] mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
                <motion.div 
                  animate={{ y: [-10, 10, -10], rotateZ: [0, 2, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 w-full h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] shadow-2xl flex flex-col overflow-hidden"
                  style={{ transform: "translateZ(50px)" }}
                >
                  <img 
                    src={heroImage} 
                    alt={title} 
                    className="w-full h-full object-cover mix-blend-overlay opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-[#060913]/60 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-8">
                     <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-4 shadow-lg">
                        <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                           <Award className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                           <div className="text-white font-bold text-lg">{studentsEnrolled}</div>
                           <div className="text-slate-400 text-sm">Students Enrolled</div>
                        </div>
                     </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar (New Addition) */}
      <div className="bg-white/5 border-b border-white/5 py-6">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-cyan-400" />
              <div>
                <div className="text-white font-bold text-lg">10,000+</div>
                <div className="text-slate-400 text-xs uppercase tracking-wider">Students Trained</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/10"></div>
            <div className="flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-blue-400" />
              <div>
                <div className="text-white font-bold text-lg">100%</div>
                <div className="text-slate-400 text-xs uppercase tracking-wider">Placement Support</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/10"></div>
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-indigo-400" />
              <div>
                <div className="text-white font-bold text-lg">10+ Years</div>
                <div className="text-slate-400 text-xs uppercase tracking-wider">Industry Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Course Overview & Benefits */}
      <section className="py-24 relative overflow-hidden bg-[#0a0f1c]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left: Overview */}
            <div className="lg:w-7/12">
              <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-semibold text-sm mb-4">Course Overview</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{overviewTitle}</h2>
              <div className="text-slate-400 text-lg leading-relaxed space-y-6">
                 {overviewDescription.split('\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                 ))}
              </div>
              
              {/* New Addition: Who should join this course */}
              <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Users2 className="w-6 h-6 text-blue-400" /> Who Should Join?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                    Beginners wanting to start a career in tech.
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                    Professionals looking to upskill and switch domains.
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                    College students needing practical, hands-on project experience.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: What You'll Learn (Benefits) */}
            <div className="lg:w-5/12">
               <div className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] h-full">
                  <h3 className="text-2xl font-bold text-white mb-8">What You&apos;ll Learn</h3>
                  <div className="space-y-6">
                     {benefits.map((benefit, idx) => (
                        <div key={idx} className="flex gap-4 items-start">
                           <div className="mt-1 w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                           </div>
                           <p className="text-slate-300 font-medium">{benefit}</p>
                        </div>
                     ))}
                  </div>

                  {/* New Addition: Tools & Technologies Covered */}
                  <div className="mt-10 pt-8 border-t border-white/10">
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Laptop2 className="w-5 h-5 text-blue-400" /> Tools & Tech Covered
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Node.js", "MongoDB", "Express", "Figma", "AWS", "Git"].map((tool, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-cyan-300">{tool}</span>
                      ))}
                    </div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Key Highlights & Career Outcomes */}
      <section className="py-20 bg-[#060913] relative border-y border-white/5">
         <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Career Outcomes & Highlights</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Prepare for top-tier roles with our industry-aligned curriculum and placement support.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
               <div className="text-center group">
                  <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                     <Briefcase className="w-8 h-8 text-blue-400" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">100% Placement</h4>
                  <p className="text-slate-400 text-sm">Dedicated placement cell and interview prep.</p>
               </div>
               <div className="text-center group">
                  <div className="w-16 h-16 mx-auto bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-4 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                     <FileCheck className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">Live Projects</h4>
                  <p className="text-slate-400 text-sm">Work on real-world industry projects.</p>
               </div>
               <div className="text-center group">
                  <div className="w-16 h-16 mx-auto bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-4 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
                     <Award className="w-8 h-8 text-indigo-400" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">Certification</h4>
                  <p className="text-slate-400 text-sm">Globally recognized certificate upon completion.</p>
               </div>
               <div className="text-center group">
                  <div className="w-16 h-16 mx-auto bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-4 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                     <Star className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">Target Job Roles</h4>
                  <p className="text-slate-400 text-sm">Software Engineer, Full Stack Dev, UI/UX Designer.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 4. Course Curriculum (Modules) */}
      <section className="py-24 bg-[#0a0f1c] relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-semibold text-sm mb-4">Course Curriculum</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">What&apos;s inside the course?</h2>
          </div>

          <div className="space-y-4">
            {modules.map((module, idx) => (
              <div 
                key={idx} 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openModule === idx ? 'border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.15)] bg-white/5' : 'border-white/10 bg-white/5 hover:border-white/20'}`}
              >
                <button 
                  onClick={() => setOpenModule(openModule === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                     <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${openModule === idx ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'bg-white/5 text-slate-400 border border-white/10'}`}>
                        {idx + 1}
                     </div>
                     <div>
                        <span className="block font-bold text-lg text-white">
                           {module.title}
                        </span>
                        <span className="text-sm font-medium text-slate-400 mt-1 block">
                           {module.duration} • {module.topics.length} Topics
                        </span>
                     </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openModule === idx ? 'rotate-180 text-cyan-400' : 'text-slate-500'}`} />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openModule === idx ? 'auto' : 0, opacity: openModule === idx ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 border-t border-white/10 mt-2">
                     <ul className="space-y-3 mt-4">
                        {module.topics.map((topic, i) => (
                           <li key={i} className="flex items-center gap-3 text-slate-400">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
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
        <section className="py-24 bg-[#060913] relative border-t border-white/5">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-semibold text-sm mb-4">Frequently Asked Questions</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Got Questions? We Have Answers.</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === idx ? 'border-cyan-500/50 shadow-md bg-white/5' : 'border-white/10 bg-white/5 hover:border-white/20'}`}
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className={`font-bold text-lg ${openFaq === idx ? 'text-cyan-400' : 'text-slate-300'}`}>
                      Q{idx + 1}. {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-cyan-400' : 'text-slate-500'}`} />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/10 mt-2">
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

      {/* Sticky Enquire Button */}
      <Link href="/course-enquiry" className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full shadow-[0_10px_30px_rgba(6,182,212,0.4)] hover:scale-105 transition-transform group">
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline">Enquire Now</span>
      </Link>

    </div>
  );
}
