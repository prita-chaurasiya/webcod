"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Server, Activity, Wrench, Clock, Bug, ChevronDown, CheckCircle2, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import Link from "next/link";

const services = [
  { name: "Website Updates", desc: "Keep your platform current with the latest features and framework versions.", icon: <Activity className="w-8 h-8 text-[#2eb872]" /> },
  { name: "Content Management", desc: "Regular updates to your text, images, and media to keep your audience engaged.", icon: <Wrench className="w-8 h-8 text-[#2eb872]" /> },
  { name: "Security Enhancements", desc: "Continuous monitoring, firewall updates, and vulnerability patching.", icon: <Shield className="w-8 h-8 text-[#2eb872]" /> },
  { name: "Performance Optimization", desc: "Database tuning, caching strategies, and asset minification for speed.", icon: <Server className="w-8 h-8 text-[#2eb872]" /> },
  { name: "Bug Fixing", desc: "Rapid identification and resolution of any technical glitches or errors.", icon: <Bug className="w-8 h-8 text-[#2eb872]" /> }
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
  const rotateHero = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const serverGlow = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <div className="bg-white text-gray-900 overflow-hidden" ref={containerRef}>
      
      {/* 1. Light Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-24 overflow-hidden border-b border-gray-100">
        {/* Animated Background Gradients */}
        <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-[#2eb872]/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-gray-200/50 rounded-full blur-[150px] pointer-events-none"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm backdrop-blur-md">
                <Clock className="w-5 h-5 text-[#2eb872]" />
                <span className="text-sm font-bold text-gray-700 uppercase tracking-widest">24/7 Monitoring & Support</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.1]">
                Unbreakable <br/>
                <span className="text-[#2eb872]">
                  Reliability.
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
                Welcome to Webcodian LLP's Maintenance Service! We understand that launching a website or application is just the beginning. Our continuous support ensures you stay online and optimized.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/contact" className="px-8 py-4 bg-[#2eb872] hover:bg-[#259b5f] text-white rounded-xl font-bold text-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all flex items-center gap-2">
                  Secure Your App <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="flex items-center gap-4 px-6 text-sm font-bold text-gray-600">
                  <div className="w-3 h-3 rounded-full bg-[#2eb872] animate-pulse"></div>
                  Systems Operational
                </div>
              </div>
            </motion.div>

            {/* 3D Server Rack Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ rotateY: -15, rotateX: 10, y: rotateHero }}
              className="relative perspective-1000 hidden lg:flex justify-center items-center h-[500px]"
            >
              <div className="w-[350px] flex flex-col gap-4 transform-gpu">
                {[1, 2, 3].map((server) => (
                  <div key={server} className="relative w-full h-32 bg-white border border-gray-200 rounded-lg shadow-2xl p-4 flex flex-col justify-between overflow-hidden">
                    {/* Server details */}
                    <div className="flex justify-between items-start">
                      <div className="flex gap-2">
                        <div className="w-16 h-2 bg-gray-200 rounded"></div>
                        <div className="w-8 h-2 bg-gray-200 rounded"></div>
                      </div>
                      <div className="flex gap-1">
                        <motion.div 
                          animate={{ opacity: [0.4, 1, 0.4] }} 
                          transition={{ duration: 0.8, repeat: Infinity, delay: server * 0.2 }} 
                          className="w-2 h-2 rounded-full bg-[#2eb872]"
                        ></motion.div>
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      </div>
                    </div>
                    {/* Air vents */}
                    <div className="flex justify-between px-2">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-1.5 h-12 bg-gray-100 rounded-full"></div>
                      ))}
                    </div>
                    {/* Ambient Glow */}
                    <motion.div 
                      style={{ opacity: serverGlow }} 
                      className="absolute inset-0 bg-green-50/50 mix-blend-overlay pointer-events-none"
                    ></motion.div>
                  </div>
                ))}
              </div>

              {/* Floating Performance Tag */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-12 top-20 bg-white backdrop-blur border border-gray-100 p-5 rounded-2xl shadow-xl z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-black text-[#2eb872]">99.9%</div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Uptime</p>
                    <p className="text-xs text-gray-500">Guaranteed</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Maintenance Pillars Section */}
      <section className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Comprehensive <span className="text-[#2eb872]">Protection</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We don't just fix things when they break. We proactively monitor and optimize your platform.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((srv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-3xl p-8 border border-gray-200 hover:border-[#2eb872]/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-white group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  {srv.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{srv.name}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{srv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The "Why WebCodian" Section */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">Why Partner With <span className="text-[#2eb872]">Us?</span></h2>
              <p className="text-gray-600 text-lg mb-8">
                Your digital assets are critical to your business operations. Our dedicated maintenance teams ensure that you never have to worry about downtime, security breaches, or outdated software again.
              </p>
              <ul className="space-y-4">
                {[
                  "Proactive 24/7 Uptime Monitoring",
                  "Automated Daily & Weekly Backups",
                  "Instant Emergency Bug Resolution",
                  "Monthly Performance Reports"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-[#2eb872]" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#2eb872]/5 rounded-3xl blur-2xl"></div>
               {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://webcodian.com/public/web/assets/img/project-start1.png" alt="Maintenance" className="relative z-10 w-full h-auto object-contain filter drop-shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Custom FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Maintenance <span className="text-[#2eb872]">FAQs</span></h2>
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
                  className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
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
