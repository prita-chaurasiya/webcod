"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MonitorSmartphone, Code2, ChevronDown, Rocket, ShieldCheck, Zap, ArrowRight, LayoutTemplate } from "lucide-react";
import { useState, useRef } from "react";
import Link from "next/link";

const technologies = [
  { name: "HTML5", img: "html-5.png" },
  { name: "CSS3", img: "css-3.png" },
  { name: "Tailwind", img: "bootstrap.png" }, 
  { name: "JavaScript", img: "javascript.png" },
  { name: "React JS", img: "react.png" },
  { name: "Next.js", img: "react.png" }, 
  { name: "Node.js", img: "nodejs.png" },
  { name: "Python", img: "python.png" },
  { name: "Laravel", img: "lvv.png" },
  { name: "WordPress", img: "wordpress.png" },
];

const processSteps = [
  { id: 1, title: "Discovery", desc: "Understanding your vision, target audience, and business goals.", icon: <MonitorSmartphone className="w-6 h-6" /> },
  { id: 2, title: "UI/UX Design", desc: "Crafting wireframes and stunning visual prototypes for approval.", icon: <LayoutTemplate className="w-6 h-6" /> },
  { id: 3, title: "Development", desc: "Writing clean, scalable, and secure code using modern frameworks.", icon: <Code2 className="w-6 h-6" /> },
  { id: 4, title: "Launch", desc: "Rigorous testing, deployment, and ongoing post-launch support.", icon: <Rocket className="w-6 h-6" /> },
];

const categories = [
  { name: "E-Commerce Solutions", img: "shopping.png" },
  { name: "EdTech Platforms", img: "school.png" },
  { name: "Travel Portals", img: "walking-tour.png" },
  { name: "Healthcare Systems", img: "doctor-consultation.png" },
  { name: "Corporate Websites", img: "consultant.png" },
  { name: "SaaS Dashboards", img: "ux.png" },
];

const faqs = [
  {
    q: "How long does it take to develop a custom website?",
    a: "The timeline varies based on complexity. A standard corporate site takes 2-4 weeks, while a complex e-commerce or SaaS platform can take 8-12 weeks."
  },
  {
    q: "Do you provide SEO and performance optimization?",
    a: "Yes! Every website we build is fundamentally optimized for search engines (SEO) and lightning-fast loading speeds using Next.js architecture."
  },
  {
    q: "Will my website be mobile-responsive?",
    a: "Absolutely. We adopt a mobile-first approach ensuring your platform looks and functions flawlessly across all devices and screen sizes."
  },
  {
    q: "Do you offer post-launch maintenance?",
    a: "We offer comprehensive 24/7 support and maintenance packages to keep your platform secure, updated, and running at peak performance."
  }
];

export function PremiumWebDev() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="bg-white text-gray-900 overflow-hidden" ref={containerRef}>
      
      {/* 1. Next-Gen Hero Section */}
      <section className="relative min-h-[75vh] flex items-center pt-24 pb-16 overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#2eb872]/10 rounded-full blur-[150px] animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-gray-200/50 rounded-full blur-[150px] pointer-events-none delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-sm border border-gray-200">
                <Rocket className="w-5 h-5 text-[#2eb872]" />
                <span className="text-xs font-bold text-gray-700 uppercase tracking-widest">Next-Generation Development</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1]">
                Build The <br/>
                <span className="text-[#2eb872]">
                  Future Web.
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                We engineer bespoke, high-performance web applications that combine award-winning design with robust, scalable architecture.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/contact" className="px-8 py-4 bg-[#2eb872] hover:bg-[#259b5f] text-white rounded-xl font-bold text-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all flex items-center gap-2">
                  Start Your Project <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/portfolio" className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 rounded-xl font-bold text-lg border border-gray-200 transition-all shadow-sm">
                  View Our Work
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-12 border-t border-gray-100">
                <div>
                  <h4 className="text-3xl font-black text-gray-900 mb-1">500+</h4>
                  <p className="text-sm text-gray-500">Projects Delivered</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-gray-900 mb-1">99%</h4>
                  <p className="text-sm text-gray-500">Client Satisfaction</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-gray-900 mb-1">24/7</h4>
                  <p className="text-sm text-gray-500">Technical Support</p>
                </div>
              </div>
            </motion.div>

            {/* 3D Code Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative perspective-1000 hidden lg:block"
            >
              <motion.div style={{ y: yBg }} className="relative z-10 w-full rounded-2xl bg-white border border-gray-200 shadow-2xl overflow-hidden transform-gpu">
                {/* Mockup Header */}
                <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-[#2eb872]"></div>
                </div>
                {/* Code Body */}
                <div className="p-6 font-mono text-sm bg-gray-900 text-slate-300">
                  <p className="text-purple-400">import <span className="text-white">&#123;</span> Webcodian <span className="text-white">&#125;</span> from <span className="text-[#2eb872]">&apos;@agency/core&apos;</span>;</p>
                  <p className="mt-4 text-blue-400">const <span className="text-white">Project</span> = <span className="text-yellow-300">()</span> =&#62; <span className="text-white">&#123;</span></p>
                  <p className="pl-4 text-slate-400">return (</p>
                  <p className="pl-8 text-cyan-400">&#60;<span className="text-pink-400">Webcodian</span></p>
                  <p className="pl-12 text-blue-300">performance=<span className="text-[#2eb872]">&quot;unmatched&quot;</span></p>
                  <p className="pl-12 text-blue-300">design=<span className="text-[#2eb872]">&quot;pixel-perfect&quot;</span></p>
                  <p className="pl-12 text-blue-300">scalability=&#123;<span className="text-purple-400">true</span>&#125;</p>
                  <p className="pl-8 text-cyan-400">/&#62;</p>
                  <p className="pl-4 text-slate-400">);</p>
                  <p className="text-white">&#125;;</p>
                </div>
                
                {/* Floating elements over the code */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-8 top-20 bg-white/90 backdrop-blur border border-gray-100 p-4 rounded-xl shadow-xl flex items-center gap-4"
                >
                  <ShieldCheck className="w-8 h-8 text-[#2eb872]" />
                  <div>
                    <p className="text-sm font-bold text-gray-900">Bank-Grade Security</p>
                    <p className="text-xs text-gray-500">AES-256 Encryption</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-12 bottom-12 bg-white/90 backdrop-blur border border-gray-100 p-4 rounded-xl shadow-xl flex items-center gap-4"
                >
                  <Zap className="w-8 h-8 text-yellow-500" />
                  <div>
                    <p className="text-sm font-bold text-gray-900">Lighthouse 100</p>
                    <p className="text-xs text-gray-500">Perfect Performance</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Process Timeline Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Our Proven <span className="text-[#2eb872]">Process</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">A systematic, transparent approach ensuring flawless execution from concept to deployment.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>
            
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="w-24 h-24 mx-auto bg-white border-4 border-gray-50 rounded-2xl flex items-center justify-center text-[#2eb872] shadow-sm hover:shadow-md rotate-45 mb-8 hover:bg-[#2eb872] hover:text-white transition-colors duration-300">
                  <div className="-rotate-45">
                    {step.icon}
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-block px-3 py-1 bg-green-50 text-[#2eb872] text-xs font-bold rounded-full mb-3">STEP 0{step.id}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Tech Stack Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gray-100 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Modern <span className="text-[#2eb872]">Tech Stack</span></h2>
              <p className="text-gray-500">We utilize cutting-edge technologies to build platforms that are fast, secure, and infinitely scalable.</p>
            </div>
            <Link href="/contact" className="text-[#2eb872] hover:text-[#259b5f] font-bold flex items-center gap-2 transition-colors">
              Request Stack Audit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white border border-gray-100 hover:border-[#2eb872]/50 hover:shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 group"
              >
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`https://webcodian.com/public/web/assets/img/services/${tech.img}`} alt={tech.name} className="w-12 h-12 object-contain group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300 filter grayscale group-hover:grayscale-0 drop-shadow-sm" />
                <span className="font-semibold text-gray-600 group-hover:text-gray-900 transition-colors">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Industries Showcase */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Industry <span className="text-[#2eb872]">Expertise</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Tailored web solutions designed specifically for the unique demands of your sector.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-64 rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-[#2eb872] opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:bg-white group-hover:scale-110 group-hover:shadow-md transition-all duration-500">
                     {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`https://webcodian.com/public/web/assets/img/services/${cat.img}`} alt={cat.name} className="w-8 h-8 object-contain" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{cat.name}</h3>
                    <div className="w-0 h-1 bg-[#2eb872] group-hover:w-12 transition-all duration-300"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <Link href="/industry" className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-bold transition-colors">
               View All 20+ Industries <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        </div>
      </section>

      {/* 5. Light Mode FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Common <span className="text-[#2eb872]">Inquiries</span></h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === idx ? 'border-[#2eb872]/50 bg-green-50/30 shadow-[0_4px_20px_rgba(46,184,114,0.1)]' : 'border-gray-200 bg-white hover:border-gray-300'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className={`font-bold pr-4 transition-colors ${openFaq === idx ? 'text-gray-900' : 'text-gray-700'}`}>{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFaq === idx ? 'bg-[#2eb872]/20' : 'bg-gray-50'}`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-[#2eb872]' : 'text-gray-400'}`} />
                  </div>
                </button>
                <div 
                  className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-6 max-w-4xl relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Stop settling for templates. Let&apos;s build a custom, high-converting web platform that dominates your industry.</p>
          
          <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-[#2eb872] hover:bg-[#259b5f] text-white rounded-2xl font-black text-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all">
            Start Your Project Now <Rocket className="w-6 h-6 text-white" />
          </Link>
        </div>
      </section>

    </div>
  );
}
