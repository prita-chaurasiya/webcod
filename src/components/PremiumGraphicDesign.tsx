"use client";

import { motion } from "framer-motion";
import { ArrowRight, Palette, PenTool, Layout, Image as ImageIcon, Box, Frame, CheckCircle2, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { PremiumProjectCTA } from "./PremiumProjectCTA";

const services = [
  { title: "Logo Design", icon: <Palette className="w-8 h-8" /> },
  { title: "Brand Identity", icon: <Box className="w-8 h-8" /> },
  { title: "Poster Design", icon: <Frame className="w-8 h-8" /> },
  { title: "Illustration Services", icon: <PenTool className="w-8 h-8" /> },
  { title: "Banner Design", icon: <ImageIcon className="w-8 h-8" /> },
  { title: "Business Card Design", icon: <Layout className="w-8 h-8" /> },
];

const technologies = [
  { name: "Adobe Photoshop", icon: "📸" },
  { name: "Adobe Illustrator", icon: "✒️" },
  { name: "Canva", icon: "🎨" },
  { name: "Figma", icon: "✨" },
  { name: "CorelDRAW", icon: "✏️" },
  { name: "Sketch", icon: "💎" },
];

const faqs = [
  { 
    q: "What graphic design services does WebCodian offer?", 
    a: "WebCodian provides a comprehensive range of graphic design services including logo design, branding, UI/UX design, illustration, print design, and more. Whether you need a new logo for your business or custom graphics for your marketing materials, our talented designers are here to help." 
  },
  { 
    q: "How long does it take to complete a graphic design project with WebCodian?", 
    a: "The timeline for graphic design projects varies depending on the complexity and scope of the project. We work closely with our clients to understand their timelines and deliver high-quality designs within the agreed-upon timeframe." 
  },
  { 
    q: "Can I request revisions to the designs created by WebCodian?", 
    a: "Yes, we welcome feedback and revisions to ensure your designs meet your expectations. Our goal is to deliver designs that accurately reflect your vision and brand identity, and we're happy to make adjustments as needed until you're satisfied with the final result." 
  },
  { 
    q: "Will I own the rights to the designs created by WebCodian?", 
    a: "Yes, upon completion of the project and full payment, you will have full ownership of the designs created by WebCodian. We provide all necessary files and documentation to ensure you have complete control over your brand assets." 
  },
  { 
    q: "Can WebCodian assist with printing and production of graphic design materials?", 
    a: "Yes, we can coordinate printing and production services for your graphic design materials, whether you need business cards, brochures, banners, or other marketing collateral. We work with trusted printing partners to ensure high-quality results and timely delivery." 
  }
];

export function PremiumGraphicDesign() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-slate-900 perspective-[1000px]">
        {/* Abstract Animated Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[100px] animate-[pulse_6s_ease-in-out_infinite_alternate]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] animate-[pulse_8s_ease-in-out_infinite_alternate-reverse]" />
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 font-semibold text-sm mb-6 tracking-widest backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></span>
                PREMIUM DESIGN AGENCY
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
                Graphic <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Design</span>
              </h1>
              <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                At Webcodian LLP, we believe in the power of visual storytelling. Our Graphic Design services are tailored to help businesses like yours captivate audiences, convey messages effectively, and leave a lasting impression.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-2xl hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] hover:-translate-y-1 transition-all duration-300 text-lg group"
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
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" />
                <motion.div 
                  animate={{ y: [-10, 10, -10], rotateZ: [0, 2, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 w-full h-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-[3rem] shadow-2xl flex items-center justify-center p-8"
                  style={{ transform: "translateZ(50px)" }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80" 
                    alt="Graphic Design" 
                    className="w-full h-full object-cover rounded-3xl shadow-lg"
                  />
                </motion.div>
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -top-10 -right-10 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100"
                  style={{ transform: "translateZ(80px)" }}
                >
                  <Palette className="w-10 h-10 text-pink-500" />
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-10 -left-10 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100"
                  style={{ transform: "translateZ(100px)" }}
                >
                  <PenTool className="w-10 h-10 text-purple-500" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Overview & Services */}
      <section className="py-16 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          
          <div className="flex flex-col lg:flex-row gap-12 mb-16">
            <div className="lg:w-1/2">
              <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-600 font-semibold text-sm mb-4">About Graphics Design</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Innovative Graphic Design Solutions</h2>
              <p className="text-slate-600 mb-8 text-lg">
                Creating visually compelling designs that enhance brand appeal, communication, and audience engagement across various platforms and mediums.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 bg-pink-100 text-pink-600 p-1 rounded-full"><CheckCircle2 className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Engaging Design Solutions</h4>
                    <p className="text-slate-500">Providing engaging design solutions that captivate attention and drive impactful brand communication.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 bg-purple-100 text-purple-600 p-1 rounded-full"><CheckCircle2 className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Creative Branding Services</h4>
                    <p className="text-slate-500">Offering creative branding services to visually represent your brand essence and uniqueness.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
               <div className="bg-slate-50 p-8 md:p-12 rounded-[2rem] border border-slate-100 h-full">
                 <span className="inline-block py-1 px-3 rounded-full bg-white shadow-sm border border-slate-100 text-slate-600 font-semibold text-sm mb-4">Services</span>
                 <h2 className="text-3xl font-bold text-slate-900 mb-6">Comprehensive Graphic Design Services</h2>
                 <p className="text-slate-600 mb-8">Offering a range of graphic design solutions tailored to meet your branding needs, ensuring visually compelling and impactful designs.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((svc, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:border-pink-300 hover:shadow-md transition-all">
                        <div className="text-pink-500">{svc.icon}</div>
                        <span className="font-bold text-slate-800">{svc.title}</span>
                      </div>
                    ))}
                 </div>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Tech Stack Marquee */}
      <section className="py-16 bg-slate-900 border-y border-slate-800 overflow-hidden relative perspective-[1000px]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-20 mb-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-semibold text-xs mb-4">TECHNOLOGY WE USE</span>
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

      {/* 4. FAQ Section */}
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
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === idx ? 'border-pink-500 shadow-md bg-white' : 'border-slate-200 bg-slate-50 hover:border-pink-300'}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg ${openFaq === idx ? 'text-pink-600' : 'text-slate-800'}`}>
                    Q{idx + 1}. {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-pink-600' : 'text-slate-400'}`} />
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

      {/* 5. Reused Premium Project CTA */}
      <PremiumProjectCTA />

    </div>
  );
}
