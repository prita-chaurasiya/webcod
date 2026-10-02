"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ShieldCheck, Cpu, Clock, Layers } from "lucide-react";
import Link from "next/link";

export function PremiumWhyChooseUs() {
  return (
    <section className="py-12 md:py-16 lg:py-16 md:py-12 bg-white relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[100px] opacity-70 pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-20">
          
          {/* Left Text */}
          <div className="w-full lg:w-1/2">
            <span className="inline-block bg-white text-[var(--primary)] text-xs font-bold tracking-widest px-4 py-2 uppercase mb-6 shadow-sm border border-slate-100 rounded-full">
              Why Choose WebCodian
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight leading-[1.1]">
              Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Enterprise Excellence</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 font-medium leading-relaxed">
              We don't just write code; we build scalable digital infrastructure. Partner with a team that understands complex business logic, strict security compliances, and rapid deployment cycles.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Top 1% Elite Engineering Talent",
                "ISO-Certified Security & Data Protection",
                "Transparent Agile Development Sprints",
                "Dedicated Post-Launch SLA Support"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-700 font-bold text-lg">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-[18px] shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-xl hover:-translate-y-1 transition-all group">
              Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Image Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4 md:space-y-6 mt-12"
              >
                <div className="rounded-3xl overflow-hidden shadow-xl relative border-4 border-white group">
                  <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay z-10 transition-opacity group-hover:opacity-0 duration-500"></div>
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" alt="Team Collaboration" className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="bg-gradient-to-b from-white to-slate-50 p-8 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
                  <Cpu className="w-10 h-10 text-blue-600 mb-4" />
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Modern Tech Stack</h4>
                  <p className="text-slate-500 text-sm font-medium">React, Node.js, AI Models, and Cloud-Native architectures.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4 md:space-y-6"
              >
                <div className="bg-slate-50 p-8 rounded-3xl shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/20 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
                  <ShieldCheck className="w-10 h-10 text-indigo-400 mb-4" />
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Bank-Grade Security</h4>
                  <p className="text-slate-600 text-sm font-medium">End-to-end encryption and compliance-first engineering.</p>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl relative border-4 border-white group">
                  <div className="absolute inset-0 bg-indigo-600/20 mix-blend-overlay z-10 transition-opacity group-hover:opacity-0 duration-500"></div>
                  <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop" alt="Enterprise Office" className="w-full h-56 md:h-72 object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              </motion.div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

