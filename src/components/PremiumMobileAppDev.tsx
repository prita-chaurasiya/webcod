"use client";

import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Apple, MonitorSmartphone, Code2, ShieldCheck, Zap, Layers, Rocket, Users, Target } from "lucide-react";
import Link from "next/link";
import { PageBanner } from "./PageBanner";
import { PremiumProjectCTA } from "./PremiumProjectCTA";

const mobileServices = [
  {
    title: "iOS App Development",
    desc: "We build elegant, high-performance iOS applications using Swift and Objective-C that adhere strictly to Apple's Human Interface Guidelines for maximum user engagement.",
    icon: <Apple className="w-8 h-8 text-slate-800" />,
    color: "bg-slate-100",
    hover: "hover:border-slate-800"
  },
  {
    title: "Android App Development",
    desc: "Our Android experts engineer robust, scalable applications using Kotlin and Java, ensuring seamless performance across the vast ecosystem of Android devices.",
    icon: <Smartphone className="w-8 h-8 text-emerald-600" />,
    color: "bg-emerald-50",
    hover: "hover:border-emerald-600"
  },
  {
    title: "Cross-Platform Apps",
    desc: "Reduce time-to-market and development costs with powerful cross-platform solutions built on React Native and Flutter, offering native-like performance.",
    icon: <MonitorSmartphone className="w-8 h-8 text-blue-600" />,
    color: "bg-blue-50",
    hover: "hover:border-blue-600"
  },
  {
    title: "Mobile App Consulting",
    desc: "Not sure where to start? Our seasoned mobile strategists help you refine your app idea, choose the right tech stack, and plan a winning go-to-market strategy.",
    icon: <Target className="w-8 h-8 text-indigo-600" />,
    color: "bg-indigo-50",
    hover: "hover:border-indigo-600"
  }
];

const processSteps = [
  { num: "01", title: "Strategy & Planning", desc: "We define the product vision, conduct market research, and create a comprehensive roadmap." },
  { num: "02", title: "UI/UX Design", desc: "Our designers craft intuitive, stunning interfaces focused on maximizing user retention." },
  { num: "03", title: "Agile Development", desc: "We build your app in sprints, ensuring transparency, flexibility, and rapid delivery." },
  { num: "04", title: "Testing & QA", desc: "Rigorous automated and manual testing guarantees a bug-free, high-performance launch." },
  { num: "05", title: "App Store Launch", desc: "We handle the entire deployment process to the Apple App Store and Google Play Store." },
  { num: "06", title: "Maintenance & Scale", desc: "Post-launch support, monitoring, and updates to keep your app ahead of the curve." }
];

export function PremiumMobileAppDev() {
  return (
    <div className="bg-white font-['Plus_Jakarta_Sans']">
      
      {/* 1. Custom Hero */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="w-full lg:w-1/2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-6">
                <Smartphone className="w-4 h-4" /> Top-Rated Mobile App Agency
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
                Transform Ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Powerful Mobile Apps</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
                We design and develop custom iOS and Android mobile applications that deliver exceptional user experiences, drive engagement, and generate massive ROI for enterprises worldwide.
              </motion.p>
              
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2">
                  Talk to our Experts <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/portfolio" className="px-8 py-4 bg-white text-slate-800 border-2 border-slate-200 hover:border-slate-300 rounded-full font-bold text-lg hover:-translate-y-1 transition-all">
                  View Portfolio
                </Link>
              </motion.div>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="relative z-10">
                <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000&auto=format&fit=crop" alt="Mobile App Development" className="rounded-[32px] shadow-2xl border-8 border-white object-cover h-[500px] w-full" />
                
                {/* Floating Badges */}
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Apple className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">iOS Apps</p>
                    <p className="text-lg font-black text-slate-800">100% Native</p>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow" style={{ animationDelay: '1s' }}>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Security</p>
                    <p className="text-lg font-black text-slate-800">Bank-Grade</p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Comprehensive <span className="text-blue-600">Mobile App</span> Services
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              From native masterpieces to robust cross-platform solutions, we have the technical prowess to bring any mobile vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mobileServices.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[32px] border-2 border-slate-100 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              >
                <div className={`w-20 h-20 rounded-2xl ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{service.desc}</p>
                
                <div className="mt-8 flex items-center gap-2 font-bold text-slate-800 group-hover:text-blue-600 transition-colors cursor-pointer">
                  Learn more <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us (Mobile Specific) */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop" alt="Mobile Development" className="rounded-[32px] shadow-2xl" />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                Why Partner With Us For Mobile Development?
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                Building an app is easy. Building a successful app that scales to millions of users requires deep expertise, flawless architecture, and obsessive attention to detail.
              </p>
              
              <ul className="space-y-6">
                {[
                  { title: "User-Centric Design", desc: "We design with empathy, ensuring every tap and swipe feels intuitive and delightful." },
                  { title: "High Performance", desc: "Optimized codebases that guarantee lightning-fast load times and zero lag." },
                  { title: "Secure Architecture", desc: "We implement advanced encryption and OAuth protocols to protect user data." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-1">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Development Process */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Our Proven <span className="text-blue-600">Development Process</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              A transparent, agile, and result-oriented approach to bringing your mobile app vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                <div className="text-6xl font-black text-slate-100 group-hover:text-blue-50 transition-colors mb-4 select-none">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <PremiumProjectCTA />
      
    </div>
  );
}
