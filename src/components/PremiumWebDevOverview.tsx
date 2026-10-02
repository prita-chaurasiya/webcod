"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Smartphone, Zap, Code2, Layers, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const webServices = [
  {
    icon: Monitor,
    title: "Custom Web Applications",
    desc: "Tailored enterprise solutions designed for complex workflows and high-volume scalability."
  },
  {
    icon: Smartphone,
    title: "Responsive Frontend Design",
    desc: "Pixel-perfect, mobile-first interfaces that deliver a flawless user experience across all devices."
  },
  {
    icon: Server,
    title: "Robust Backend Architecture",
    desc: "Secure, high-performance server-side engineering and API integrations using modern tech stacks."
  },
  {
    icon: Zap,
    title: "High-Performance Optimization",
    desc: "Lightning-fast load times and optimized core web vitals for maximum conversion rates."
  }
];

export function PremiumWebDevOverview() {
  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-50/30 rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 justify-center mb-6">
              <span className="text-[var(--primary)] text-sm font-bold tracking-widest uppercase bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100">
                Web Engineering
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.15]">
              Building Next-Generation <span className="text-[var(--primary)]">Web Experiences</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
              We engineer secure, scalable, and stunning web solutions. From corporate portals to complex SaaS architectures, our expert development team turns your vision into a digital reality.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Modern frameworks like Next.js, React, and Node.js",
                "Strict adherence to global security & compliance standards",
                "Agile methodology for rapid, reliable delivery",
                "Comprehensive post-launch technical support"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-semibold">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/web-development" className="btn-primary">
              Explore Web Development <Zap className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>

          {/* Right Content / Cards Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100/40 to-transparent rounded-[2rem] -m-4 md:-m-8 z-0"></div>
            
            {webServices.map((service, idx) => (
              <div 
                key={idx} 
                className="bg-gradient-to-b from-white to-slate-50 p-8 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgba(37,99,235,0.05)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] hover:-translate-y-1 hover:border-orange-200 transition-all duration-300 relative z-10 group"
              >
                <div className="w-12 h-12 bg-gradient-to-b from-white to-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--primary)] group-hover:text-white text-[var(--primary)] transition-colors shadow-sm border border-slate-100">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

