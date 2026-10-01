"use client";

import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";
import { PremiumFeatureCard } from "@/components/PremiumFeatureCard";
import { Bot, Zap, Shield, Cpu, ArrowRight, Brain, Network, Cloud, ShieldCheck, Layers, BarChart, Settings, Code2, PenTool, Sparkles, MessageSquare } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="bg-white min-h-screen font-sans">
      
      {/* 1. Breadcrumb Section */}
      <div 
        className="relative py-24 lg:py-32 bg-[#3b70e0] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(40, 10, 60, 0.7), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop')"
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 capitalize tracking-tight drop-shadow-md">
              Generative AI Solutions
            </h1>
            <ul className="flex items-center gap-3 text-purple-100 font-bold uppercase text-sm tracking-widest">
              <li>
                <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              </li>
              <li className="text-purple-300">/</li>
              <li className="text-white">GENERATIVE AI</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-100 rounded-full blur-[150px] opacity-50 pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8 inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-bold text-xs tracking-widest uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
                Creative Intelligence
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
                Unlock Infinite Potential with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600">Generative AI</span>
              </h2>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
                Go beyond automation. Our Generative AI solutions empower your business to create, ideate, and produce content at unprecedented speed and scale.
              </p>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                From generating photorealistic marketing assets to drafting complex technical reports and writing production-ready code, we implement customized foundational models that understand your brand deeply.
              </p>
              
              <div className="flex flex-wrap gap-5">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-900 text-white font-bold py-4 px-10 rounded-[18px] shadow-lg hover:-translate-y-1 transition-all group">
                  Innovate Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-white relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent mix-blend-overlay z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop" 
                  alt="Generative AI" 
                  className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              
              {/* Floating Element */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 flex items-center gap-5 z-20"
              >
                <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                  <Sparkles className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">100x</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Content Velocity</div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Core Capabilities Grid replaced with Premium Feature Cards */}
      <section className="py-24 lg:py-32 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-[#0f2c59] mb-6 tracking-tight">Generative Capabilities</h2>
            <p className="text-xl text-slate-600 font-medium">
              We leverage state-of-the-art multimodal models to automate the creation of text, imagery, and code.
            </p>
          </div>

          <div className="space-y-12">
            <PremiumFeatureCard 
              number="01"
              imageTitle="Text Gen"
              imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
              category="LLM FINE-TUNING"
              title="Hyper-Personalized Text Generation"
              description="Deploy LLMs that write exactly like you do. We fine-tune models on your historical data, knowledge bases, and brand guidelines to generate reports, emails, and articles instantly."
              linkText="Explore NLP Solutions"
              href="/services"
              reverse={false}
            />

            <PremiumFeatureCard 
              number="02"
              imageTitle="Visuals"
              imageSrc="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
              category="DIFFUSION MODELS"
              title="Automated Visual Asset Creation"
              description="Generate hundreds of product variations, marketing banners, and UI mockups in seconds using specialized image generation models like Stable Diffusion and Midjourney."
              linkText="Explore visual AI"
              href="/services"
              reverse={true}
            />

            <PremiumFeatureCard 
              number="03"
              imageTitle="Code AI"
              imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
              category="DEVELOPER PRODUCTIVITY"
              title="AI-Assisted Software Engineering"
              description="Boost your engineering velocity with internal AI coding assistants that understand your proprietary codebase, automatically generate boilerplate, and identify security vulnerabilities."
              linkText="Explore code generation"
              href="/custom-software-development"
              reverse={false}
            />
          </div>
        </div>
      </section>

      {/* 4. Strategic Approach (Spacious Layout) */}
      <section className="py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <div>
              <span className="text-purple-400 font-bold tracking-widest uppercase text-sm mb-4 block">Deployment Architecture</span>
              <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">
                Enterprise-Grade Generative Systems
              </h2>
              
              <div className="space-y-12">
                {[
                  { num: "01", title: "RAG Architecture", desc: "Retrieval-Augmented Generation ensures the AI only outputs facts grounded in your secure corporate database, eliminating hallucinations." },
                  { num: "02", title: "Model Routing", desc: "We deploy intelligent routers that send complex tasks to GPT-4 and simple tasks to smaller models, optimizing for speed and cost." },
                  { num: "03", title: "Data Privacy", desc: "We implement on-premise or private-cloud LLM deployments so your proprietary data never touches a public API." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="text-5xl font-black text-slate-700 group-hover:text-purple-500 transition-colors shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-3">{step.title}</h4>
                      <p className="text-slate-400 text-lg leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block relative h-[700px]">
               {/* Decorative structural elements to make it look premium */}
               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-[120%] border-l border-slate-700/50 flex flex-col justify-between py-20 pl-12">
                 <div className="w-full h-px bg-slate-700/50 relative">
                   <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)]"></div>
                 </div>
                 <div className="w-full h-px bg-slate-700/50 relative">
                   <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-pink-400"></div>
                 </div>
                 <div className="w-full h-px bg-slate-700/50 relative">
                   <div className="absolute right-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.8)]"></div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      <PremiumProjectCTA />
    </main>
  );
}
