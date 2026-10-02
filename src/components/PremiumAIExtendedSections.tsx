"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, Plus, Minus, ChevronRight, BarChart, Users, Globe2, 
  Clock, ShieldCheck, HeartPulse, Building2, ShoppingCart, GraduationCap, 
  Plane, Factory, Briefcase, Database, Cpu, Network, Sparkles, MessageSquare
} from "lucide-react";
import Link from "next/link";

export interface PremiumAIExtendedProps {
  useCases: {
    title: string;
    description: string;
    image: string;
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
}

export function PremiumAIExtendedSections({ useCases, faqs }: PremiumAIExtendedProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* 7. AI Development Process */}
      <section className="py-12 md:py-16 lg:py-16 md:py-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0f2c59] mb-6 tracking-tight">Our Enterprise Process</h2>
            <p className="text-xl text-slate-600 font-medium">A systematic, risk-free methodology designed for global enterprises.</p>
          </div>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-orange-100 -translate-y-1/2 z-0"></div>
            
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "Discovery", desc: "Deep architectural audit and strategic alignment." },
                { step: "02", title: "Prototyping", desc: "Rapid POC development and data integration." },
                { step: "03", title: "Engineering", desc: "Enterprise-grade scalable deployment." },
                { step: "04", title: "Optimization", desc: "Continuous model fine-tuning and support." }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-b from-white to-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-[100px] -z-10 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="text-5xl font-bold text-slate-100 mb-6 group-hover:text-orange-500/10 transition-colors">{item.step}</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                  <p className="text-slate-600 font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Technology Stack */}
      <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0f2c59]">Enterprise AI Stack</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {["OpenAI", "Claude", "Gemini", "Llama 3", "LangChain", "LangGraph", "CrewAI", "Python", "FastAPI", "Node.js", "React", "Next.js", "Docker", "AWS", "Azure", "Google Cloud", "Vector DBs", "RAG", "MCP", "n8n", "Make", "Zapier"].map((tech) => (
              <div key={tech} className="bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm font-bold text-slate-700 hover:border-orange-500 hover:text-orange-500 transition-colors cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Industries We Serve */}
      <section className="py-12 md:py-16 lg:py-16 md:py-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0f2c59] mb-6">Industries We Empower</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: HeartPulse, name: "Healthcare" },
              { icon: Briefcase, name: "Finance" },
              { icon: ShoppingCart, name: "Retail" },
              { icon: Building2, name: "Real Estate" },
              { icon: GraduationCap, name: "Education" },
              { icon: Factory, name: "Manufacturing" },
              { icon: Plane, name: "Travel" },
              { icon: Database, name: "Logistics" }
            ].map((ind, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-2xl hover:bg-orange-500 hover:text-white transition-all group border border-slate-100 shadow-sm cursor-default">
                <ind.icon className="w-10 h-10 text-orange-500 group-hover:text-white mb-4 transition-colors" />
                <span className="font-bold text-lg">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. AI Use Cases */}
      <section className="py-12 md:py-16 lg:py-16 md:py-12 bg-slate-50 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Enterprise Use Cases</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((uc, i) => (
              <div key={i} className="bg-gradient-to-b from-white to-slate-50 rounded-[2rem] overflow-hidden group shadow-xl">
                <div className="h-64 overflow-hidden relative border-b border-slate-700">
                  <div className="absolute inset-0 bg-slate-50/20 z-10"></div>
                  <img src={uc.image} alt={uc.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">{uc.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{uc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11 & 12. Why Choose Us & Metrics */}
      <section className="py-12 md:py-16 lg:py-16 md:py-12 bg-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] opacity-10 bg-cover mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-[1.1]">Why Global Enterprises Trust WebCodian</h2>
              <div className="space-y-6">
                {["Elite Engineering Talent", "Strict Data Privacy & ISO Compliance", "Zero-Downtime Deployments", "Dedicated Post-Launch Support"].map((point, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-8 h-8 text-orange-300 flex-shrink-0" />
                    <span className="text-xl font-bold">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { val: "500+", label: "Projects Delivered" },
                { val: "99%", label: "Client Satisfaction" },
                { val: "24/7", label: "Global Support" },
                { val: "10+", label: "Years Experience" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-colors">
                  <div className="text-4xl font-bold mb-2">{stat.val}</div>
                  <div className="text-orange-700 font-bold uppercase tracking-wider text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 13. FAQ */}
      <section className="py-12 md:py-16 lg:py-16 md:py-12 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0f2c59] mb-6">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gradient-to-b from-white to-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between font-bold text-lg text-left text-slate-800 hover:text-orange-500 transition-colors"
                >
                  {faq.q}
                  <span className="flex-shrink-0 ml-4">
                    {openFaq === i ? <Minus className="w-5 h-5 text-orange-500" /> : <Plus className="w-5 h-5 text-slate-600" />}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-6 text-slate-600 leading-relaxed font-medium"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Related AI Services */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h3 className="text-2xl font-bold text-[#0f2c59] mb-8 text-center">Explore Other AI Solutions</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/ai-agent-development" className="font-bold text-slate-600 hover:text-orange-500 flex items-center gap-2 bg-slate-50 px-8 py-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              AI Agents <ChevronRight className="w-4 h-4" />
            </Link>
            <Link href="/generative-ai" className="font-bold text-slate-600 hover:text-orange-500 flex items-center gap-2 bg-slate-50 px-8 py-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              Generative AI <ChevronRight className="w-4 h-4" />
            </Link>
            <Link href="/chatbot-voice-ai" className="font-bold text-slate-600 hover:text-orange-500 flex items-center gap-2 bg-slate-50 px-8 py-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              Voice AI <ChevronRight className="w-4 h-4" />
            </Link>
            <Link href="/ai-saas-product" className="font-bold text-slate-600 hover:text-orange-500 flex items-center gap-2 bg-slate-50 px-8 py-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              AI SaaS <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


