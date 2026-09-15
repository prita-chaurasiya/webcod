"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Rocket, Database, Blocks, Cpu, BarChart3, LineChart, Code2, Layers, ShieldCheck, ArrowRight, Settings } from "lucide-react";
import { useState, useRef } from "react";
import Link from "next/link";

const technologies = [
  { name: "Java", img: "java.png" },
  { name: "Python", img: "python.png" },
  { name: "Laravel", img: "lvv.png" },
  { name: "Node.js", img: "nodejs.png" },
  { name: "React JS", img: "react.png" },
  { name: "PHP", img: "php (1).png" },
  { name: "HTML5", img: "html-5.png" },
  { name: "CSS3", img: "css-3.png" },
  { name: "JavaScript", img: "javascript.png" },
  { name: "J-Query", img: "jq.png" },
  { name: "Bootstrap", img: "bootstrap.png" },
  { name: "WordPress", img: "wordpress.png" },
];

const services = [
  { name: "Custom Software Development", icon: <Code2 className="w-6 h-6 text-[#2eb872]" /> },
  { name: "Enterprise Software Solutions", icon: <Database className="w-6 h-6 text-[#2eb872]" /> },
  { name: "ERP Solutions", icon: <Blocks className="w-6 h-6 text-[#2eb872]" /> },
  { name: "CRM Systems", icon: <BarChart3 className="w-6 h-6 text-[#2eb872]" /> },
  { name: "CMS Development", icon: <Layers className="w-6 h-6 text-[#2eb872]" /> },
  { name: "E-commerce Solutions", icon: <LineChart className="w-6 h-6 text-[#2eb872]" /> }
];

const categories = [
  { name: "E-Commerce", img: "shopping.png", span: "col-span-1 row-span-1" },
  { name: "School & College", img: "school.png", span: "col-span-1 row-span-2" },
  { name: "Institute", img: "ux.png", span: "col-span-2 row-span-1" },
  { name: "Tour & Travel", img: "walking-tour.png", span: "col-span-1 row-span-1" },
  { name: "NGO", img: "earth.png", span: "col-span-1 row-span-1" },
  { name: "Consulting", img: "consultant.png", span: "col-span-1 row-span-1" },
  { name: "HealthCare", img: "doctor-consultation.png", span: "col-span-2 row-span-2" },
  { name: "Security Service", img: "guard.png", span: "col-span-1 row-span-1" },
  { name: "Manufacturing", img: "icon6.png", span: "col-span-1 row-span-1" },
  { name: "News & Blog", img: "blog.png", span: "col-span-1 row-span-1" },
  { name: "Landing Page", img: "landing-page.png", span: "col-span-1 row-span-1" },
  { name: "Crowd Funding", img: "crowfunding.png", span: "col-span-2 row-span-1" }
];

const faqs = [
  {
    q: "Can you develop custom software tailored to my business needs?",
    a: "Yes, we specialize in developing custom software solutions tailored to the unique requirements of your business. Whether you need a CRM system, inventory management software, or workflow automation tool, we can create a bespoke solution that fits your needs perfectly."
  },
  {
    q: "How do you ensure the scalability of software developed by WebCodian?",
    a: "Scalability is a key consideration in software development, and we design our solutions with scalability in mind. Our architecture and coding practices allow for seamless scalability as your business grows and evolves."
  },
  {
    q: "Can you integrate the software with existing systems or third-party services?",
    a: "Absolutely, we have experience integrating custom software with existing systems and third-party services using APIs, webhooks, and other integration methods to ensure seamless data flow and functionality."
  },
  {
    q: "Will I have ownership of the source code for the software developed?",
    a: "Yes, you will have full ownership of the source code for the software developed by WebCodian. We believe in transparency and provide our clients with all necessary assets and documentation upon project completion."
  },
  {
    q: "Do you provide training and support for using the software?",
    a: "Yes, we offer training sessions and ongoing support to ensure you and your team are comfortable using the software effectively. Our support team is available to address any questions or issues that may arise post-launch."
  }
];

export function PremiumSoftwareDev() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const rotateHero = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <div className="bg-white text-gray-900 overflow-hidden" ref={containerRef}>
      
      {/* 1. Isometric Hero Section */}
      <section className="relative min-h-[100vh] flex items-center pt-20 pb-24 overflow-hidden border-b border-gray-100">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#2eb872]/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#2eb872]/5 rounded-full blur-[150px] pointer-events-none"></div>
        
        {/* Hexagon Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0zMCAwaDMwdjUwbC0zMCA1MEwwIDUwdjUwaDMwdjUwbC0zMCA1MEwwIDUwdjUwaDMwdjUwbC0zMCA1MEwwIDUwIiBzdHJva2U9IiMwMDAiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] bg-[length:60px_100px] mix-blend-overlay"></div>

        <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-sm border border-gray-200 backdrop-blur-md">
                <Cpu className="w-5 h-5 text-[#2eb872]" />
                <span className="text-sm font-bold text-gray-700 uppercase tracking-widest">Enterprise Engineering</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.1]">
                Custom Software <br/>
                <span className="text-[#2eb872]">
                  Solutions.
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
                We specialize in building custom software solutions that streamline business processes, enhance productivity, and drive innovation across your entire organization.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/contact" className="px-8 py-4 bg-[#2eb872] hover:bg-[#259b5f] text-white rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(46,184,114,0.3)] hover:-translate-y-1 transition-all flex items-center gap-2">
                  Initiate Project <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 rounded-xl font-bold text-lg border border-gray-200 transition-all shadow-sm">
                  Request Consultation
                </Link>
              </div>
            </motion.div>

            {/* 3D Isometric Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ rotateX: 20, rotateY: -15, rotateZ: 5, y: rotateHero }}
              className="relative perspective-1000 hidden lg:block transform-gpu mt-12"
            >
              {/* Main Dashboard Panel */}
              <div className="relative z-10 w-full h-[400px] rounded-2xl bg-white border border-gray-200 shadow-2xl overflow-hidden flex flex-col">
                {/* Header */}
                <div className="h-12 bg-gray-50 border-b border-gray-100 flex items-center px-6 justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="w-1/3 h-2 bg-gray-200 rounded-full"></div>
                </div>
                {/* Content */}
                <div className="flex-1 p-6 flex gap-6">
                  {/* Sidebar */}
                  <div className="w-1/4 flex flex-col gap-4 border-r border-gray-100 pr-6">
                    <div className="w-full h-8 bg-gray-100 rounded-lg"></div>
                    <div className="w-3/4 h-4 bg-gray-100 rounded-full"></div>
                    <div className="w-5/6 h-4 bg-gray-100 rounded-full"></div>
                    <div className="w-2/3 h-4 bg-gray-100 rounded-full"></div>
                  </div>
                  {/* Main Data */}
                  <div className="flex-1 flex flex-col gap-6">
                    <div className="flex justify-between gap-4">
                      <div className="flex-1 h-24 bg-green-50 border border-green-100 rounded-xl p-4 flex flex-col justify-between">
                         <div className="w-8 h-8 rounded-full bg-green-100"></div>
                         <div className="w-1/2 h-2 bg-[#2eb872] rounded-full"></div>
                      </div>
                      <div className="flex-1 h-24 bg-blue-50 border border-blue-100 rounded-xl p-4 flex flex-col justify-between">
                         <div className="w-8 h-8 rounded-full bg-blue-100"></div>
                         <div className="w-1/2 h-2 bg-blue-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 h-24 bg-purple-50 border border-purple-100 rounded-xl p-4 flex flex-col justify-between">
                         <div className="w-8 h-8 rounded-full bg-purple-100"></div>
                         <div className="w-1/2 h-2 bg-purple-400 rounded-full"></div>
                      </div>
                    </div>
                    {/* Chart Area */}
                    <div className="flex-1 bg-gray-50 border border-gray-100 rounded-xl p-6 relative overflow-hidden">
                       <svg className="absolute bottom-0 w-full h-24 text-gray-200" preserveAspectRatio="none" viewBox="0 0 100 100">
                          <path d="M0,100 C20,20 40,80 60,40 C80,0 100,60 100,100 Z" fill="currentColor" opacity="0.5"/>
                          <path d="M0,100 C30,40 50,90 70,20 C90,-10 100,40 100,100 Z" fill="currentColor" className="text-[#2eb872]/20"/>
                       </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Element 1 */}
              <motion.div 
                animate={{ z: [0, 50, 0], y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-12 -top-8 bg-white backdrop-blur border border-gray-100 p-5 rounded-2xl shadow-xl z-20 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
                  <Settings className="w-6 h-6 text-[#2eb872]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Automated Workflows</p>
                  <p className="text-xs text-gray-500">System Integrated</p>
                </div>
              </motion.div>
              
              {/* Floating Element 2 */}
              <motion.div 
                animate={{ z: [0, 30, 0], y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-8 -bottom-8 bg-white backdrop-blur border border-gray-100 p-5 rounded-2xl shadow-xl z-20 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
                  <ShieldCheck className="w-6 h-6 text-[#2eb872]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Data Security</p>
                  <p className="text-xs text-gray-500">End-to-End Encryption</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Services / Architecture Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Software <span className="text-[#2eb872]">Solutions</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Crafting tailored software solutions leveraging cutting-edge technology, designed to meet specific business needs and drive operational excellence.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((srv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-[#2eb872]/50 hover:shadow-lg overflow-hidden transition-all duration-300"
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-[#2eb872]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-white group-hover:border-[#2eb872]/20">
                    {srv.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{srv.name}</h3>
                  <div className="mt-auto">
                    <span className="text-sm font-bold text-[#2eb872] group-hover:text-[#259b5f] flex items-center gap-1">Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Tech Stack Section */}
      <section className="py-24 bg-white border-y border-gray-100 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#2eb872]/5 rounded-[100%] blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Enterprise <span className="text-[#2eb872]">Technology Stack</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We leverage the most advanced, secure, and robust technologies to build scalable enterprise architectures.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-4 border border-gray-100 hover:border-[#2eb872]/30 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`https://webcodian.com/public/web/assets/img/services/${tech.img}`} alt={tech.name} className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300 filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 drop-shadow-sm" />
                <span className="font-semibold text-gray-500 group-hover:text-gray-900 transition-colors text-sm">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Masonry Categories Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Industry <span className="text-[#2eb872]">Applications</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We use a systematic approach to maximize and optimize results across a wide array of diverse sectors.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[120px]">
            {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`${cat.span} group relative rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-[#2eb872]/50 shadow-sm hover:shadow-md cursor-pointer`}
              >
                <div className="absolute inset-0 bg-[#2eb872]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center gap-3 z-10">
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://webcodian.com/public/web/assets/img/services/${cat.img}`} alt={cat.name} className="w-10 h-10 object-contain group-hover:scale-125 transition-transform duration-500" />
                  <h3 className="font-bold text-gray-900 text-sm md:text-base">{cat.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Custom FAQ */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Frequently Asked <span className="text-[#2eb872]">Questions</span></h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === idx ? 'border-[#2eb872]/50 bg-green-50/30 shadow-md' : 'border-gray-200 bg-white hover:border-gray-300'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className={`font-bold pr-4 transition-colors ${openFaq === idx ? 'text-gray-900' : 'text-gray-700'}`}>{faq.q}</span>
                  <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-colors ${openFaq === idx ? 'bg-[#2eb872]/20' : 'bg-gray-50'}`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-[#2eb872]' : 'text-gray-500'}`} />
                  </div>
                </button>
                <div 
                  className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-64 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
