"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, Brain, Code, Cloud, Building, Smartphone, Cpu,
  ArrowRightCircle, Lock, Settings, MessageSquare, BarChart, 
  PenTool, GraduationCap
} from "lucide-react";

export function PremiumAboutDigiatureStyle() {
  return (
    <div className="w-full bg-[#0B1121] text-white overflow-hidden relative">
      
      {/* Global Ambient Glows for Luxury 3D feel */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* SECTION 1: Light About Section (Now Dark Luxury) */}
      <section className="py-20 lg:py-28 relative z-10">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 font-bold text-xs tracking-[0.2em] mb-8 uppercase backdrop-blur-md shadow-[0_0_20px_rgba(37,99,235,0.2)]">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Innovation & Excellence
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-slate-400 mb-8 tracking-tight leading-tight drop-shadow-2xl">
              Engineering Digital Excellence
            </h2>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
              WebCodian is a premier IT Training Institute and modern software development company delivering innovative digital solutions. We help students master technology and businesses transform ideas into scalable digital products using advanced technologies and intelligent architectures.
            </p>
          </motion.div>

          {/* Legal / Cert Card (3D Glassmorphism) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.5, type: "spring" }}
            style={{ transformStyle: "preserve-3d" }}
            className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl rounded-[24px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 flex flex-col md:flex-row items-center gap-8 mb-32 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="flex-1 flex gap-5 items-start relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                <ShieldCheck className="w-7 h-7 text-blue-400" />
              </div>
              <p className="text-slate-300 font-medium leading-relaxed">
                <strong className="text-white">WEBCODIAN</strong> is a certified educational institute and leading software development agency dedicated to empowering the next generation of tech leaders.
              </p>
            </div>
            <div className="hidden md:block w-px h-20 bg-white/10 relative z-10"></div>
            <div className="w-full md:w-auto text-center md:text-left pt-6 md:pt-0 border-t md:border-t-0 border-white/10 relative z-10">
              <span className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Status</span>
              <span className="text-2xl font-bold text-white drop-shadow-md">ISO Certified</span>
            </div>
          </motion.div>

          {/* Specializations Grid */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-12 pl-6 border-l-4 border-blue-500 drop-shadow-lg">
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
                  className="group relative bg-white/5 backdrop-blur-md rounded-[20px] p-6 shadow-xl border border-white/10 flex flex-col items-center gap-4 text-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="w-16 h-16 rounded-[16px] bg-white/5 border border-white/10 text-slate-300 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-400 transition-all duration-300 shadow-lg relative z-10">
                    {spec.icon}
                  </div>
                  <h4 className="font-bold text-white text-base relative z-10">{spec.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Future Ready Split Section */}
      <section className="py-20 lg:py-28 relative z-10 border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <span className="text-blue-400 font-bold text-xs tracking-[0.2em] uppercase mb-6 block drop-shadow-md">Next-Gen Ecosystems</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight drop-shadow-xl">
                Building Future-Ready Digital Solutions
              </h2>
              <p className="text-lg text-slate-300 mb-10 font-light leading-relaxed">
                From immersive IT training programs and custom web applications to enterprise automation systems, we develop technology ecosystems designed for long-term career growth and business scalability.
              </p>

              <div className="relative bg-white/5 backdrop-blur-lg rounded-[24px] p-10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/10 overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-400 to-indigo-600"></div>
                <p className="text-xl font-medium text-slate-200 italic leading-relaxed">
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
                    whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
                    className="flex gap-6 p-6 rounded-[20px] transition-all duration-300 border border-transparent hover:border-white/10"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="text-xl font-bold text-white mb-2">{item.title}</h5>
                      <p className="text-slate-400 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* SECTION 3: Dark Gradient Services Section */}
      <section className="py-20 lg:py-28 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block py-2 px-6 rounded-full bg-white/5 border border-white/10 text-slate-300 font-bold text-xs uppercase tracking-[0.2em] mb-6 backdrop-blur-sm">
              Our Core Services
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-6 leading-tight">
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
                className="group relative bg-white/[0.03] backdrop-blur-xl rounded-[24px] p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-500 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
                  <div className="w-16 h-16 rounded-[18px] bg-white/5 border border-white/10 text-slate-300 flex items-center justify-center mb-8 group-hover:text-blue-400 group-hover:border-blue-400/50 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-500">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-slate-400 font-light leading-relaxed">
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
