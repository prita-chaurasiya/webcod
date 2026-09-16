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
                <Link href="/contact" className="px-8 py-3.5 bg-[#0f172a] hover:bg-[#1e293b] text-white rounded-xl font-bold text-base shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2">
                  Streamline Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </motion.div>

            {/* Visual: Workflow Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              <div className="relative w-full rounded-[32px] bg-white p-2 shadow-2xl overflow-hidden border border-slate-200">
                <div className="bg-slate-50 rounded-[24px] overflow-hidden border border-slate-100">
                  {/* Dashboard Header */}
                  <div className="h-12 bg-white border-b border-slate-200 flex items-center px-6 justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                    </div>
                    <div className="h-4 w-32 bg-slate-100 rounded-full"></div>
                  </div>
                  
                  {/* Workflow Content */}
                  <div className="p-8">
                    <div className="flex flex-col gap-6">
                      
                      {/* Step 1 */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#0ea5e9]/10 text-[#0ea5e9] flex items-center justify-center shrink-0">
                          <TrendingUp className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="h-4 w-1/3 bg-slate-200 rounded-full mb-2"></div>
                          <div className="h-3 w-1/2 bg-slate-100 rounded-full"></div>
                        </div>
                        <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Success</div>
                      </div>

                      {/* Connecting line */}
                      <div className="w-0.5 h-6 bg-slate-200 ml-6 -my-4"></div>

                      {/* Step 2 */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#f97316]/10 text-[#f97316] flex items-center justify-center shrink-0">
                          <GitMerge className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="h-4 w-1/4 bg-slate-200 rounded-full mb-2"></div>
                          <div className="h-3 w-2/3 bg-slate-100 rounded-full"></div>
                        </div>
                        <div className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">Routing</div>
                      </div>

                      {/* Connecting line */}
                      <div className="w-0.5 h-6 bg-slate-200 ml-6 -my-4"></div>

                      {/* Step 3 */}
                      <div className="flex items-center gap-4 border border-[#10b981] p-3 rounded-2xl bg-white shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#10b981]"></div>
                        <div className="w-10 h-10 rounded-xl bg-[#10b981]/10 text-[#10b981] flex items-center justify-center shrink-0">
                          <FileCheck2 className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-slate-900">CRM Updated & Notified</div>
                          <div className="text-xs text-slate-500">Automated action completed in 0.2s</div>
                        </div>
                      </div>

                    </div>
                  </div>
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
