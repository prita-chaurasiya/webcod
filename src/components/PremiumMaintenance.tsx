"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Server, Activity, Wrench, Clock, Bug, ChevronDown, CheckCircle2, ArrowRight, Zap } from "lucide-react";
import { useState, useRef } from "react";
import Link from "next/link";

const services = [
  { name: "Website Updates", desc: "Keep your platform current with the latest features and framework versions.", icon: <Activity className="w-8 h-8 text-blue-500" /> },
  { name: "Content Management", desc: "Regular updates to your text, images, and media to keep your audience engaged.", icon: <Wrench className="w-8 h-8 text-[#2eb872]" /> },
  { name: "Security Enhancements", desc: "Continuous monitoring, firewall updates, and vulnerability patching.", icon: <Shield className="w-8 h-8 text-purple-500" /> },
  { name: "Performance Optimization", desc: "Database tuning, caching strategies, and asset minification for speed.", icon: <Server className="w-8 h-8 text-rose-500" /> },
  { name: "Bug Fixing", desc: "Rapid identification and resolution of any technical glitches or errors.", icon: <Bug className="w-8 h-8 text-amber-500" /> }
];

const faqs = [
  {
    q: "What is included in your maintenance packages?",
    a: "Our maintenance packages typically include regular updates to software, plugins, and themes, security monitoring, daily or weekly backups, uptime monitoring, and priority technical support."
  },
  {
    q: "Do I have to sign a long-term contract for maintenance services?",
    a: "No, we offer flexible maintenance plans with options for monthly, quarterly, or annual billing. You can choose the plan that best fits your needs and budget, with no long-term commitment required."
  },
  {
    q: "How quickly do you respond to maintenance requests or issues?",
    a: "We prioritize maintenance requests based on severity. Critical issues such as website downtime or security breaches are addressed immediately, while routine updates and non-urgent requests are typically completed within 24 to 48 hours."
  },
  {
    q: "Can you help with emergency issues outside of regular business hours?",
    a: "Yes, we offer emergency support services for critical issues that occur outside of regular business hours. Our team is available 24/7 to address emergencies and ensure minimal disruption to your business."
  },
  {
    q: "Will you provide reports on the maintenance work done?",
    a: "Yes, we provide regular reports detailing the maintenance work completed on your website or application. These reports include information on updates performed, security scans, uptime statistics, and any issues resolved."
  }
];

export function PremiumMaintenance() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const rotateHero = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const serverGlow = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 0.3]);

  return (
    <div className="bg-slate-50 text-slate-900 overflow-hidden" ref={containerRef}>
      
      {/* 1. Cinematic Light Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-24 overflow-hidden border-b border-slate-200/60">
        {/* Animated Background Gradients */}
        <div className="absolute top-[0%] right-[0%] w-[800px] h-[800px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-[150px] mix-blend-multiply pointer-events-none animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[0%] left-[0%] w-[600px] h-[600px] bg-gradient-to-tr from-[#2eb872]/20 to-emerald-400/20 rounded-full blur-[150px] mix-blend-multiply pointer-events-none animate-pulse" style={{ animationDuration: '12s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm backdrop-blur-md">
                <Clock className="w-5 h-5 text-[#2eb872]" />
                <span className="text-sm font-bold text-slate-700 uppercase tracking-widest">24/7 Monitoring & Support</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Unbreakable <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2eb872] to-emerald-500">
                  Reliability.
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
                Welcome to Webcodian LLP's Maintenance Service! We understand that launching a website or application is just the beginning. Our continuous support ensures you stay online and optimized.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/contact" className="px-8 py-4 bg-[#2eb872] hover:bg-[#259b5f] text-white rounded-xl font-bold text-lg shadow-[0_10px_20px_rgba(46,184,114,0.3)] hover:shadow-[0_15px_30px_rgba(46,184,114,0.4)] hover:-translate-y-1 transition-all flex items-center gap-2">
                  Secure Your App <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="flex items-center gap-4 px-6 py-4 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-700 shadow-sm">
                  <div className="w-3 h-3 rounded-full bg-[#2eb872] animate-ping relative">
                    <div className="absolute inset-0 bg-[#2eb872] rounded-full animate-none"></div>
                  </div>
                  Systems Operational
                </div>
              </div>
            </motion.div>

            {/* 3D Premium Server Rack Mockup - Light Mode */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ rotateY: -15, rotateX: 10, y: rotateHero }}
              className="relative perspective-1000 hidden lg:flex justify-center items-center h-[500px]"
            >
              <div className="w-[350px] flex flex-col gap-6 transform-gpu">
                {[1, 2, 3].map((server) => (
                  <div key={server} className="relative w-full h-32 bg-white border border-slate-100 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-5 flex flex-col justify-between overflow-hidden group">
                    {/* Server details */}
                    <div className="flex justify-between items-start z-10 relative">
                      <div className="flex gap-3">
                        <div className="w-20 h-2.5 bg-slate-200 rounded-full"></div>
                        <div className="w-10 h-2.5 bg-slate-200 rounded-full"></div>
                      </div>
                      <div className="flex gap-2">
                        <motion.div 
                          animate={{ opacity: [0.4, 1, 0.4] }} 
                          transition={{ duration: 0.8, repeat: Infinity, delay: server * 0.2 }} 
                          className="w-3 h-3 rounded-full bg-[#2eb872] shadow-[0_0_15px_rgba(46,184,114,0.5)]"
                        ></motion.div>
                        <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                      </div>
                    </div>
                    {/* Air vents */}
                    <div className="flex justify-between px-2 z-10 relative">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-2 h-10 bg-slate-100 rounded-full group-hover:bg-slate-200 transition-colors"></div>
                      ))}
                    </div>
                    {/* Ambient Glow */}
                    <motion.div 
                      style={{ opacity: serverGlow }} 
                      className="absolute inset-0 bg-gradient-to-r from-[#2eb872]/5 to-blue-500/5 mix-blend-multiply pointer-events-none"
                    ></motion.div>
                  </div>
                ))}
              </div>

              {/* Floating Performance Tag */}
              <motion.div 
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-12 top-20 bg-white/80 backdrop-blur-md border border-slate-200 p-6 rounded-2xl shadow-xl z-20"
              >
                <div className="flex items-center gap-5">
                  <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2eb872] to-teal-500">99.9%</div>
                  <div>
                    <p className="text-base font-bold text-slate-900">Uptime</p>
                    <p className="text-sm text-slate-500">Guaranteed</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Maintenance Pillars Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-sm mb-6 tracking-widest uppercase shadow-sm backdrop-blur-md"
            >
              <Zap className="w-4 h-4 text-amber-500" /> What We Do
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6">Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Protection</span></h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">We don't just fix things when they break. We proactively monitor, optimize, and secure your platform.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-blue-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white to-transparent rounded-bl-full pointer-events-none transition-opacity opacity-0 group-hover:opacity-100 duration-500"></div>
                <div className="w-20 h-20 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-8 group-hover:bg-white group-hover:scale-110 transition-all duration-500 shadow-sm group-hover:shadow-md">
                  {srv.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{srv.name}</h3>
                <p className="text-slate-600 leading-relaxed text-base">{srv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The "Why WebCodian" Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200/50 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#2eb872]/10 rounded-full blur-[150px] mix-blend-multiply pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8">Why Partner With <span className="text-[#2eb872]">Us?</span></h2>
              <p className="text-slate-600 text-xl mb-10 leading-relaxed">
                Your digital assets are critical to your business operations. Our dedicated maintenance teams ensure that you never have to worry about downtime, security breaches, or outdated software again.
              </p>
              <ul className="space-y-6">
                {[
                  "Proactive 24/7 Uptime Monitoring",
                  "Automated Daily & Weekly Backups",
                  "Instant Emergency Bug Resolution",
                  "Monthly Performance Reports"
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex items-center gap-5 text-slate-700 font-bold text-lg bg-white p-5 rounded-2xl border border-slate-100 hover:border-slate-300 transition-colors shadow-sm hover:shadow-md"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#2eb872]/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-[#2eb872]" /> 
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-[#2eb872]/20 rounded-3xl blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
               {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://webcodian.com/public/web/assets/img/project-start1.png" alt="Maintenance" className="relative z-10 w-full h-auto object-contain filter drop-shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Premium FAQ */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 lg:px-6 max-w-4xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Maintenance <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2eb872] to-teal-500">FAQs</span></h2>
            <p className="text-xl text-slate-600">Everything you need to know about our maintenance and support services.</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`border rounded-3xl overflow-hidden transition-all duration-500 ${openFaq === idx ? 'bg-white shadow-[0_20px_40px_rgba(0,0,0,0.06)] border-[#2eb872]/30 ring-1 ring-[#2eb872]/20' : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-slate-300'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-7 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`text-lg font-bold pr-4 transition-colors ${openFaq === idx ? 'text-slate-900' : 'text-slate-700'}`}>{faq.q}</span>
                  <div className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === idx ? 'bg-[#2eb872]/10 shadow-sm' : 'bg-white border border-slate-200'}`}>
                    <ChevronDown className={`w-6 h-6 transition-transform duration-500 ${openFaq === idx ? 'rotate-180 text-[#2eb872]' : 'text-slate-400'}`} />
                  </div>
                </button>
                <div 
                  className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${openFaq === idx ? 'max-h-60 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-600 text-lg leading-relaxed">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
