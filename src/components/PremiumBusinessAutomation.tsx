"use client";

import { motion } from "framer-motion";
import { Workflow, GitMerge, FileCheck2, ArrowRight, TrendingUp, BarChart3, Clock } from "lucide-react";
import Link from "next/link";

export function PremiumBusinessAutomation() {
  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      
      {/* Premium Hero Section */}
      <section className="relative min-h-[75vh] flex items-center pt-24 pb-16 overflow-hidden bg-slate-50">
        
        {/* Soft Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50"></div>

        <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200">
                <Workflow className="w-4 h-4 text-[#10b981]" />
                <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">Process Automation</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Automate & <br/>
                <span className="text-[#10b981]">
                  Accelerate.
                </span>
              </h1>
              
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                Transform manual tasks into intelligent workflows. We build custom automation pipelines connecting your CRM, ERP, and operations for ultimate efficiency.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/contact" className="px-8 py-3.5 bg-[#0f172a] hover:bg-[#1e293b] text-white rounded-[18px] font-bold text-base shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 transition-all flex items-center gap-2">
                  Streamline Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </motion.div>

            {/* Visual: AI Automation Vector Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              {/* Background Blob */}
              <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-[80px] -z-10"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/50 bg-white p-2">
                <div className="rounded-[1.5rem] overflow-hidden">
                   <img src="/images/ai-automation-vector.jpg" alt="AI Business Automation Workflow" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats / ROI Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Reduce Manual Errors", stat: "99.9%", icon: <BarChart3 className="w-6 h-6 text-[#10b981]" /> },
              { title: "Time Saved Weekly", stat: "40+ Hrs", icon: <Clock className="w-6 h-6 text-[#0ea5e9]" /> },
              { title: "Operational Cost Reduction", stat: "35%", icon: <TrendingUp className="w-6 h-6 text-[#f97316]" /> }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 rounded-[24px] bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-4xl font-black text-slate-900 mb-2">{item.stat}</h4>
                <p className="text-sm font-medium text-slate-500">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
