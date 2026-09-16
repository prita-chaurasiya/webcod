"use client";

import { motion } from "framer-motion";
import { Bot, Zap, BrainCircuit, Network, ArrowRight, ShieldCheck, Workflow } from "lucide-react";
import Link from "next/link";

export function PremiumAIAgent() {
  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      
      {/* Premium Hero Section - Compact & Balanced */}
      <section className="relative min-h-[75vh] flex items-center pt-24 pb-16 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#06b6d4]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#1d4ed8]/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200">
                <div className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse" />
                <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">Next-Gen Automation</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f172a] tracking-tight leading-[1.1]">
                Intelligent <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-[#1d4ed8]">
                  AI Agents.
                </span>
              </h1>
              
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                Deploy autonomous AI agents that handle complex workflows, process unstructured data, and execute business tasks 24/7 without human intervention.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/contact" className="px-8 py-3.5 bg-[#0f172a] hover:bg-[#1e293b] text-white rounded-xl font-bold text-base shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-2">
                  Build Your Agent <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#06b6d4]" />
                  <span className="text-sm font-semibold text-slate-700">Secure Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#f97316]" />
                  <span className="text-sm font-semibold text-slate-700">High Speed</span>
                </div>
              </div>
            </motion.div>

            {/* AI Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              <div className="relative w-full rounded-[32px] bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-8 shadow-2xl overflow-hidden border border-slate-800">
                {/* Network Lines */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,50 Q100,100 200,50 T400,50" stroke="#06b6d4" strokeWidth="2" fill="none" className="animate-pulse" />
                    <path d="M0,150 Q150,200 250,150 T500,150" stroke="#1d4ed8" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                
                <div className="relative z-10 flex flex-col gap-6">
                  <div className="flex justify-between items-center bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#06b6d4]/20 flex items-center justify-center">
                        <Bot className="w-5 h-5 text-[#06b6d4]" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">Customer Success Agent</p>
                        <p className="text-[#06b6d4] text-xs">Active &bull; Processing</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/5 ml-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#10b981]/20 flex items-center justify-center">
                        <Workflow className="w-5 h-5 text-[#10b981]" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">Data Analysis Node</p>
                        <p className="text-[#10b981] text-xs">Completed 42 tasks</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/5 mr-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#f97316]/20 flex items-center justify-center">
                        <BrainCircuit className="w-5 h-5 text-[#f97316]" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">Decision Engine</p>
                        <p className="text-[#f97316] text-xs">Optimizing workflows</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Core Capabilities</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Our AI agents are tailored to integrate perfectly with your existing systems.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Autonomous Workflows", desc: "Agents capable of multi-step reasoning and independent task execution without constant supervision.", icon: <Network className="w-6 h-6 text-[#06b6d4]" /> },
              { title: "Seamless Integration", desc: "Connects with your CRM, ERP, and internal databases securely via custom API bridges.", icon: <Workflow className="w-6 h-6 text-[#1d4ed8]" /> },
              { title: "Cognitive Processing", desc: "Leverages advanced LLMs to understand unstructured text, images, and documents instantly.", icon: <BrainCircuit className="w-6 h-6 text-[#6d28d9]" /> }
            ].map((feat, i) => (
              <div key={i} className="bg-white p-8 rounded-[24px] shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feat.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
