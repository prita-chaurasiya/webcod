"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, Brain, Code, Cloud, Building, Smartphone, Cpu,
  ArrowRightCircle, Lock, Settings, MessageSquare, BarChart, 
  PenTool, GraduationCap
} from "lucide-react";

export function PremiumAboutDigiatureStyle() {
  return (
    <div className="w-full bg-slate-50 overflow-hidden">
      
      {/* SECTION 1: Light About Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          <div className="max-w-4xl mx-auto text-center mb-16" data-aos="fade-up">
            <span className="inline-block py-2 px-4 rounded-full bg-blue-50 text-blue-600 font-bold text-sm tracking-wide mb-6">
              Innovation & Excellence
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">
              About WebCodian
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              WebCodian is a premier IT Training Institute and modern software development company delivering innovative digital solutions. We help students master technology and businesses transform ideas into scalable digital products using advanced technologies and intelligent architectures.
            </p>
          </div>

          {/* Legal / Cert Card (Digiature Style) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-white rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col md:flex-row items-center gap-6 mb-24"
          >
            <div className="flex-1 flex gap-4 items-start">
              <ShieldCheck className="w-8 h-8 text-[#2eb872] shrink-0 mt-1" />
              <p className="text-slate-700 font-medium">
                <strong>WEBCODIAN</strong> is a certified educational institute and leading software development agency dedicated to empowering the next generation of tech leaders.
              </p>
            </div>
            <div className="hidden md:block w-px h-16 bg-slate-200"></div>
            <div className="w-full md:w-auto text-center md:text-left pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
              <span className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Status</span>
              <span className="text-lg font-black text-slate-900">ISO Certified</span>
            </div>
          </motion.div>

          {/* Specializations Grid */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 pl-4 border-l-4 border-[#2eb872]">
              Our Specializations:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {[
                { icon: <GraduationCap className="w-6 h-6" />, title: "Full Stack Training" },
                { icon: <Code className="w-6 h-6" />, title: "Custom Software" },
                { icon: <Cloud className="w-6 h-6" />, title: "SaaS Platforms" },
                { icon: <Building className="w-6 h-6" />, title: "Enterprise Systems" },
                { icon: <Smartphone className="w-6 h-6" />, title: "Mobile Applications" },
                { icon: <Brain className="w-6 h-6" />, title: "AI & Automation" },
                { icon: <PenTool className="w-6 h-6" />, title: "UI/UX Design" },
                { icon: <Settings className="w-6 h-6" />, title: "IT Consulting" },
              ].map((spec, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group bg-white rounded-xl p-5 shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md hover:border-blue-100 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {spec.icon}
                  </div>
                  <h4 className="font-semibold text-slate-800 text-sm">{spec.title}</h4>
                </motion.div>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: Future Ready Split Section */}
      <section className="py-20 lg:py-32 bg-white relative border-y border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            {/* Left Side */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <span className="text-[#2eb872] font-bold text-sm tracking-widest uppercase mb-4 block">Next-Gen Ecosystems</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Building Future-Ready Digital Solutions
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                From immersive IT training programs and custom web applications to enterprise automation systems, we develop technology ecosystems designed for long-term career growth and business scalability.
              </p>

              {/* Quote Card */}
              <div className="relative bg-slate-50 rounded-2xl p-8 pl-12 shadow-inner">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-600 to-[#2eb872] rounded-l-2xl"></div>
                <p className="text-lg font-medium text-slate-800 italic">
                  "Our team combines educational innovation, technical expertise, and industry knowledge to deliver high-performance training and digital solutions tailored to modern needs."
                </p>
              </div>
            </motion.div>

            {/* Right Side */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-8"
            >
              <p className="text-slate-600 text-lg border-b border-slate-100 pb-8">
                Whether you are a student looking to break into the tech industry or a business needing a complex SaaS platform, our dual-focus approach ensures excellence at every level.
              </p>

              <div className="space-y-6">
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-1">
                    <ArrowRightCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-slate-900 mb-2">Scalable Architecture</h5>
                    <p className="text-slate-600">Software designed to grow seamlessly alongside your business expansion and user base.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-100 text-[#2eb872] flex items-center justify-center shrink-0 mt-1">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-slate-900 mb-2">Industry-Standard Security</h5>
                    <p className="text-slate-600">Ironclad protocols ensuring maximum security for your digital products and data.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 mt-1">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-slate-900 mb-2">Intelligent Workflows</h5>
                    <p className="text-slate-600">Automate repetitive business workflows to drastically improve operational efficiency.</p>
                  </div>
                </div>

              </div>
            </motion.div>
            
          </div>
        </div>
      </section>


      {/* SECTION 3: Dark Gradient Services Section */}
      <section className="py-20 lg:py-32 bg-slate-900 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2eb872]/10 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          
          <div className="max-w-3xl mb-16" data-aos="fade-up">
            <span className="inline-block py-1.5 px-3 rounded-full bg-white/5 border border-white/10 text-slate-300 font-bold text-xs uppercase tracking-widest mb-6">
              Our Core Services
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Corporate Training &<br className="hidden md:block" /> Custom Software
            </h2>
            <p className="text-lg text-slate-400">
              Our premium services help businesses automate processes, launch digital products, and train their workforce with cutting-edge technology skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {[
              { 
                icon: <MessageSquare className="w-6 h-6" />, 
                title: "Custom Software Development", 
                desc: "Tailored software solutions built from the ground up to address your specific business challenges and operational needs." 
              },
              { 
                icon: <GraduationCap className="w-6 h-6" />, 
                title: "Advanced IT Training", 
                desc: "Comprehensive bootcamps and corporate training programs covering Full Stack, AI, and Cloud Architecture." 
              },
              { 
                icon: <BarChart className="w-6 h-6" />, 
                title: "Business Automation", 
                desc: "Eliminate manual operational bottlenecks by integrating intelligent software triggers into your daily tasks." 
              },
              { 
                icon: <Smartphone className="w-6 h-6" />, 
                title: "Mobile App Development", 
                desc: "High-performance native and cross-platform mobile applications for iOS and Android ecosystems." 
              },
              { 
                icon: <Cloud className="w-6 h-6" />, 
                title: "SaaS Product Development", 
                desc: "Developing scalable, multi-tenant cloud software embedded with core artificial intelligence capabilities." 
              },
              { 
                icon: <PenTool className="w-6 h-6" />, 
                title: "UI/UX Design Strategy", 
                desc: "Crafting intuitive, engaging, and premium digital interfaces that ensure maximum user retention and satisfaction." 
              },
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-slate-800/50 rounded-2xl p-1 overflow-hidden"
              >
                {/* Glowing Border Mask Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-[#2eb872] to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Inner Card Content */}
                <div className="relative h-full bg-slate-900 rounded-xl p-8 flex flex-col items-start transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 flex items-center justify-center mb-6 group-hover:text-[#2eb872] group-hover:border-[#2eb872]/30 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-teal-300 transition-all duration-300">
                    {service.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
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
