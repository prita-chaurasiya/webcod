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
  overviewTitle,
  overviewDescription,
  features,
  technologies,
  faqs,
  featuresImage
}: PremiumServiceDetailProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Hero Text */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-300 font-semibold text-sm mb-6 tracking-widest backdrop-blur-md uppercase">
                <span className="w-2 h-2 rounded-full bg-[#2eb872] animate-pulse"></span>
                {badgeText}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                {title.split(' ').map((word, i, arr) => 
                   i === arr.length - 1 ? 
                   <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-[#2eb872] to-blue-400"> {word}</span> : 
                   <span key={i}> {word}</span>
                )}
              </h1>
              <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {description}
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-[#2eb872] text-white font-bold rounded-2xl hover:shadow-[0_0_30px_rgba(46,184,114,0.4)] hover:-translate-y-1 transition-all duration-300 text-lg group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Hero 3D Graphic */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
              className="lg:w-1/2 relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative w-full max-w-md mx-auto aspect-square">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-[#2eb872] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" />
                <motion.div 
                  animate={{ y: [-10, 10, -10], rotateZ: [0, 2, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 w-full h-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-[3rem] shadow-2xl flex items-center justify-center overflow-hidden"
                  style={{ transform: "translateZ(50px)" }}
                >
                  <img 
                    src={heroImage} 
                    alt={title} 
                    className="w-full h-full object-cover mix-blend-overlay opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Overview & Features */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-600 font-semibold text-sm mb-4">Service Overview</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{overviewTitle}</h2>
              <p className="text-slate-600 mb-8 text-lg">
                {overviewDescription}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
                    <div className="mt-1 bg-blue-100 text-blue-600 p-2 rounded-xl shrink-0">
                      {feature.icon || <CheckCircle2 className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-2">{feature.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 perspective-[1000px]">
               {featuresImage ? (
                  <motion.div 
                    whileHover={{ rotateX: 5, rotateY: -5 }}
                    className="bg-slate-50 p-4 rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                     <img src={featuresImage} alt="Features" className="w-full h-auto rounded-2xl" />
                  </motion.div>
               ) : (
                  <div className="bg-slate-50 p-8 md:p-12 rounded-[2rem] border border-slate-100 h-full flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Us?</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3 text-slate-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-[#2eb872]" /> Tailored Solutions
                      </li>
                      <li className="flex items-center gap-3 text-slate-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-[#2eb872]" /> Experienced Team
                      </li>
                      <li className="flex items-center gap-3 text-slate-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-[#2eb872]" /> Quality Assurance
                      </li>
                      <li className="flex items-center gap-3 text-slate-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-[#2eb872]" /> Ongoing Support
                      </li>
                    </ul>
                  </div>
               )}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Tech Stack Marquee (if provided) */}
      {technologies && technologies.length > 0 && (
        <section className="py-20 bg-slate-900 border-y border-slate-800 overflow-hidden relative perspective-[1000px]">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-20 mb-12 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-semibold text-sm mb-4">TECHNOLOGY WE USE</span>
          </div>
          
          <div className="relative w-full flex flex-col gap-6 z-0">
            <div className="flex w-[2070px]">
              <motion.div
                animate={{ x: [0, -1035] }}
                transition={{ repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" }}
                className="flex gap-6 items-center"
              >
                {[...technologies, ...technologies, ...technologies].map((tech, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.1, rotateX: 10, rotateY: 10, zIndex: 30 }}
                    className="w-48 bg-slate-800/80 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 flex flex-col items-center justify-center gap-4 shadow-xl cursor-pointer"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="text-5xl" style={{ transform: "translateZ(30px)" }}>{tech.icon}</div>
                    <div className="font-bold text-lg text-slate-200 text-center" style={{ transform: "translateZ(20px)" }}>{tech.name}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* 4. FAQ Section (if provided) */}
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
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === idx ? 'border-blue-500 shadow-md bg-white' : 'border-slate-200 bg-slate-50 hover:border-blue-300'}`}
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className={`font-bold text-lg ${openFaq === idx ? 'text-blue-600' : 'text-slate-800'}`}>
                      Q{idx + 1}. {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
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

      {/* 5. Reused Premium Project CTA */}
      <PremiumProjectCTA />

    </div>
  );
}
