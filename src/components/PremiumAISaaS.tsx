"use client";

import { motion } from "framer-motion";
import { CloudCog, Layers, ArrowRight, Code2, Database, Smartphone } from "lucide-react";
import Link from "next/link";

export function PremiumAISaaS() {
  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      
      {/* Premium Hero Section */}
      <section className="relative min-h-[75vh] flex items-center pt-24 pb-16 overflow-hidden bg-slate-900 text-white">
        
        {/* Background Gradients */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#f97316]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#3b82f6]/15 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <CloudCog className="w-4 h-4 text-[#f97316]" />
                <span className="text-xs font-bold text-slate-200 uppercase tracking-widest">SaaS Architecture</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Launch Your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#fb923c]">
                  AI SaaS Startup.
                </span>
              </h1>
              
              <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                We design, architect, and develop scalable SaaS products powered by AI. From MVP to enterprise-ready platforms with subscription billing and multi-tenant architecture.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/contact" className="px-8 py-3.5 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-xl font-bold text-base shadow-lg shadow-[#f97316]/20 hover:-translate-y-0.5 transition-all flex items-center gap-2">
                  Discuss Your Vision <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </motion.div>

            {/* Visual: SaaS Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              <div className="relative w-full rounded-[32px] bg-slate-800 p-2 shadow-2xl border border-slate-700 overflow-hidden backdrop-blur-xl">
                <div className="bg-[#0f172a] rounded-[24px] overflow-hidden">
                  
                  {/* Top Navbar Mockup */}
                  <div className="h-14 border-b border-slate-800 flex items-center justify-between px-6">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#f97316] to-[#fb923c] rounded-lg"></div>
                      <div className="h-4 w-24 bg-slate-700 rounded-full hidden sm:block"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-slate-800"></div>
                      <div className="w-8 h-8 rounded-full bg-slate-700"></div>
                    </div>
                  </div>

                  {/* Dashboard Layout */}
                  <div className="flex h-[280px]">
                    {/* Sidebar */}
                    <div className="w-16 sm:w-48 border-r border-slate-800 p-4 hidden sm:flex flex-col gap-4">
                      <div className="h-3 w-full bg-slate-700/50 rounded-full"></div>
                      <div className="h-3 w-3/4 bg-slate-800 rounded-full"></div>
                      <div className="h-3 w-5/6 bg-slate-800 rounded-full"></div>
                      <div className="h-3 w-full bg-slate-800 rounded-full mt-4"></div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-1 p-6 flex flex-col gap-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="h-5 w-32 bg-slate-200 rounded-full mb-2"></div>
                          <div className="h-3 w-48 bg-slate-600 rounded-full"></div>
                        </div>
                        <div className="h-8 w-24 bg-[#f97316] rounded-lg"></div>
                      </div>
                      
                      {/* Metric Cards */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                          <div className="h-3 w-20 bg-slate-500 rounded-full mb-3"></div>
                          <div className="h-8 w-24 bg-white rounded-full"></div>
                        </div>
                        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-16 h-16 bg-[#06b6d4]/10 rounded-bl-full"></div>
                          <div className="h-3 w-20 bg-slate-500 rounded-full mb-3"></div>
                          <div className="h-8 w-16 bg-[#06b6d4] rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Chart Area */}
                      <div className="flex-1 bg-slate-800/30 rounded-xl border border-slate-700/50 flex items-end px-4 gap-2 pb-4">
                        <div className="w-1/6 bg-slate-700 rounded-t-sm h-[40%]"></div>
                        <div className="w-1/6 bg-[#f97316] rounded-t-sm h-[70%]"></div>
                        <div className="w-1/6 bg-slate-700 rounded-t-sm h-[50%]"></div>
                        <div className="w-1/6 bg-slate-700 rounded-t-sm h-[30%]"></div>
                        <div className="w-1/6 bg-[#06b6d4] rounded-t-sm h-[90%]"></div>
                        <div className="w-1/6 bg-slate-700 rounded-t-sm h-[60%]"></div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack / Features Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Built for Scale</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Modern technology stacks tailored for high-growth SaaS environments.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Multi-Tenant Architecture", icon: <Layers className="w-6 h-6 text-[#3b82f6]" /> },
              { title: "API-First Development", icon: <Code2 className="w-6 h-6 text-[#10b981]" /> },
              { title: "Secure Data Isolation", icon: <Database className="w-6 h-6 text-[#6d28d9]" /> }
            ].map((feat, i) => (
              <div key={i} className="flex items-center gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                  {feat.icon}
                </div>
                <h3 className="font-bold text-slate-900">{feat.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
