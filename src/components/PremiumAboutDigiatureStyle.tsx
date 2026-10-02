"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, Brain, Code, Cloud, Building, Smartphone, Cpu,
  ArrowRightCircle, Lock, Settings, MessageSquare, BarChart, 
  PenTool, GraduationCap
} from "lucide-react";

export function PremiumAboutDigiatureStyle() {
  return (
    <div className="w-full bg-slate-50 text-slate-900 overflow-hidden relative">
      
      {/* Global Ambient Glows for Luxury 3D feel */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-orange-400/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-indigo-400/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* SECTION 1: Light About Section */}
      <section className="py-20 lg:py-28 relative z-10">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-b from-white to-slate-50 border border-slate-200 text-orange-500 font-bold text-xs tracking-[0.2em] mb-8 uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Innovation & Excellence
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-900 via-orange-700 to-indigo-600 mb-8 tracking-tight leading-tight">
              Engineering Digital Excellence
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
              WebCodian is a premier IT Training Institute and modern software development company delivering innovative digital solutions. We help students master technology and businesses transform ideas into scalable digital products using advanced technologies and intelligent architectures.
            </p>
          </motion.div>

          {/* Legal / Cert Card (3D Light Glassmorphism) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.5, type: "spring" }}
            style={{ transformStyle: "preserve-3d" }}
            className="max-w-3xl mx-auto bg-gradient-to-b from-white to-slate-50 rounded-[24px] p-8 md:p-10 shadow-[0_20px_50px_rgba(37,99,235,0.04)] hover:shadow-[0_40px_80px_rgba(37,99,235,0.12)] border border-slate-100 flex flex-col md:flex-row items-center gap-8 mb-32 relative overflow-hidden group transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="flex-1 flex gap-5 items-start relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0 border border-orange-100 shadow-sm">
                <ShieldCheck className="w-7 h-7 text-orange-500" />
              </div>
              <p className="text-slate-600 font-medium leading-relaxed">
                <strong className="text-slate-900">WEBCODIAN</strong> is a certified educational institute and leading software development agency dedicated to empowering the next generation of tech leaders.
              </p>
            </div>
            <div className="hidden md:block w-px h-20 bg-slate-200 relative z-10"></div>
            <div className="w-full md:w-auto text-center md:text-left pt-6 md:pt-0 border-t md:border-t-0 border-slate-200 relative z-10">
              <span className="block text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Status</span>
              <span className="text-2xl font-bold text-slate-900 drop-shadow-sm">ISO Certified</span>
            </div>
          </motion.div>

          {/* Specializations Grid */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 pl-6 border-l-4 border-orange-500 drop-shadow-sm">
              Our Specializations
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <GraduationCap />, title: "Full Stack Training" },
                { icon: <Code />, title: "Custom Software" },
                { icon: <Cloud />, title: "SaaS Platforms" },
                { icon: <Building />, title: "Enterprise Systems" },
                { icon: <Smartphone />, title: "Mobile Applications" },
                { icon: <Brain />, title: "AI & Automation" },
                { icon: <PenTool />, title: "UI/UX Design" },
                { icon: <Settings />, title: "IT Consulting" },
              ].map((spec, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="group relative bg-gradient-to-b from-white to-slate-50 rounded-[20px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col items-center gap-4 text-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="w-16 h-16 rounded-[16px] bg-slate-50 border border-slate-100 text-slate-500 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-400 transition-all duration-300 shadow-sm relative z-10">
                    {spec.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 text-base relative z-10">{spec.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Future Ready Split Section */}
      <section className="py-20 lg:py-28 relative z-10 border-t border-slate-200 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-50/50 via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <span className="text-orange-500 font-bold text-xs tracking-[0.2em] uppercase mb-6 block drop-shadow-sm">Next-Gen Ecosystems</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 leading-tight drop-shadow-sm">
                Building Future-Ready Digital Solutions
              </h2>
              <p className="text-lg text-slate-600 mb-10 font-light leading-relaxed">
                From immersive IT training programs and custom web applications to enterprise automation systems, we develop technology ecosystems designed for long-term career growth and business scalability.
              </p>

              <div className="relative bg-slate-50 rounded-[24px] p-10 shadow-[0_15px_30px_rgba(0,0,0,0.03)] border border-slate-100 overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-orange-500 to-indigo-600"></div>
                <p className="text-xl font-medium text-slate-700 italic leading-relaxed">
                  "Our team combines educational innovation, technical expertise, and industry knowledge to deliver high-performance training and digital solutions tailored to modern needs."
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 space-y-8"
            >
              <div className="space-y-6">
                {[
                  { icon: <ArrowRightCircle />, title: "Scalable Architecture", desc: "Software designed to grow seamlessly alongside your business expansion and user base." },
                  { icon: <Lock />, title: "Industry-Standard Security", desc: "Ironclad protocols ensuring maximum security for your digital products and data." },
                  { icon: <Cpu />, title: "Intelligent Workflows", desc: "Automate repetitive business workflows to drastically improve operational efficiency." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10, backgroundColor: "#f8fafc" }}
                    className="flex gap-6 p-6 rounded-[20px] transition-all duration-300 border border-transparent hover:border-slate-100 hover:shadow-sm"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 text-orange-500 flex items-center justify-center shrink-0 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h5>
                      <p className="text-slate-600 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* SECTION 3: Light Gradient Services Section */}
      <section className="py-20 lg:py-28 relative z-10 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block py-2 px-6 rounded-full bg-gradient-to-b from-white to-slate-50 border border-slate-200 text-slate-500 font-bold text-xs uppercase tracking-[0.2em] mb-6 shadow-sm">
              Our Core Services
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 mb-6 leading-tight">
              Corporate Training & Custom Software
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <MessageSquare />, title: "Custom Software", desc: "Tailored software solutions built from the ground up to address your specific business challenges." },
              { icon: <GraduationCap />, title: "Advanced IT Training", desc: "Comprehensive bootcamps covering Full Stack, AI, and Cloud Architecture." },
              { icon: <BarChart />, title: "Business Automation", desc: "Eliminate manual operational bottlenecks by integrating intelligent software triggers." },
              { icon: <Smartphone />, title: "Mobile App Dev", desc: "High-performance native and cross-platform mobile applications for iOS and Android." },
              { icon: <Cloud />, title: "SaaS Product Dev", desc: "Developing scalable, multi-tenant cloud software embedded with core AI capabilities." },
              { icon: <PenTool />, title: "UI/UX Design", desc: "Crafting intuitive, engaging, and premium digital interfaces that ensure maximum user retention." },
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, rotateY: 5, rotateX: 5 }}
                className="group relative bg-gradient-to-b from-white to-slate-50 rounded-[24px] p-8 border border-slate-100 hover:border-orange-200 transition-all duration-500 overflow-hidden shadow-[0_15px_40px_rgba(37,99,235,0.04)] hover:shadow-[0_30px_60px_rgba(37,99,235,0.12)]"
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
                  <div className="w-16 h-16 rounded-[18px] bg-slate-50 border border-slate-100 text-slate-500 flex items-center justify-center mb-8 group-hover:bg-orange-50 group-hover:text-orange-500 group-hover:border-orange-200 transition-all duration-500 shadow-sm group-hover:shadow-[0_0_15px_rgba(37,99,235,0.1)]">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-slate-600 font-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}


