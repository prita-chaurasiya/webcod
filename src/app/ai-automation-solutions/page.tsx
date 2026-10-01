"use client";

import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";
import { PremiumFeatureCard } from "@/components/PremiumFeatureCard";
import { Bot, Zap, Shield, Cpu, ArrowRight, Brain, Network, Cloud, ShieldCheck, Layers, BarChart, Settings, Code2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="bg-white min-h-screen font-sans">
      
      {/* 1. Breadcrumb Section */}
      <div 
        className="relative py-12 md:py-16 lg:py-16 md:py-12 bg-[#3b70e0] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(10, 20, 50, 0.7), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop')"
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 capitalize tracking-tight drop-shadow-md">
              AI & Automation Solutions
            </h1>
            <ul className="flex items-center gap-3 text-blue-100 font-bold uppercase text-sm tracking-widest">
              <li>
                <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              </li>
              <li className="text-blue-300">/</li>
              <li className="text-white">AI & AUTOMATION</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="py-12 md:py-16 lg:py-16 md:py-12 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100 rounded-full blur-[150px] opacity-50 pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8 inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold text-xs tracking-widest uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                Intelligent Workflows
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
                Transform Your Enterprise with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Cognitive Automation</span>
              </h2>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
                Our AI & Automation solutions blend advanced machine learning with robotic process automation to give your business a permanent competitive edge. 
              </p>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                We design and deploy systems that learn, adapt, and operate autonomously—allowing your team to focus on strategic growth while we handle the operational heavy lifting.
              </p>
              
              <div className="flex flex-wrap gap-5">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-slate-50 text-white font-bold py-4 px-10 rounded-[18px] shadow-lg hover:-translate-y-1 transition-all group">
                  Start Your Journey <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent mix-blend-overlay z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop" 
                  alt="AI Automation Concepts" 
                  className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              
              {/* Floating Element */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 flex items-center gap-5 z-20"
              >
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Bot className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">99.9%</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Accuracy</div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Core Offerings Grid replaced with Premium Feature Cards */}
      <section className="py-12 md:py-16 lg:py-16 md:py-12 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0f2c59] mb-6 tracking-tight">Our Premium Solutions</h2>
            <p className="text-xl text-slate-600 font-medium">
              We deliver systemic, end-to-end automation architectures that integrate seamlessly with your existing infrastructure.
            </p>
          </div>

          <div className="space-y-12">
            <PremiumFeatureCard 
              number="01"
              imageTitle="AI Agents"
              imageSrc="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
              category="AI AUTOMATION"
              title="Agents that do the work, not just answer questions"
              description="Custom AI agents and chatbots on OpenAI, Claude and Gemini — grounded in your data, integrated with your CRM, ERP and WhatsApp, with a human in the loop wherever you want one. Prototype in weeks, not quarters."
              linkText="Explore AI agent development"
              href="/ai-agent-development"
              reverse={false}
            />

            <PremiumFeatureCard 
              number="02"
              imageTitle="Gen AI"
              imageSrc="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
              category="GENERATIVE AI"
              title="Create intelligent content at scale"
              description="Harness the power of Generative AI to automate document creation, marketing copy, internal reporting, and rich media. We fine-tune LLMs to perfectly match your brand's voice and strict compliance standards."
              linkText="Explore Generative AI"
              href="/generative-ai"
              reverse={true}
            />

            <PremiumFeatureCard 
              number="03"
              imageTitle="Growth"
              imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
              category="DIGITAL MARKETING & AI SEARCH"
              title="Be found on Google — and inside ChatGPT"
              description="SEO, paid media and now generative engine optimisation so your brand shows up where buyers actually look. Strategy, execution and reporting from the same team that builds your product."
              linkText="Explore growth services"
              href="/digital-marketing"
              reverse={false}
            />
          </div>
        </div>
      </section>

      {/* 4. Strategic Approach (Spacious Layout) */}
      <section className="py-12 md:py-16 lg:py-16 md:py-12 bg-slate-50 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <div>
              <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">How We Work</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
                A Systemic Approach to Digital Evolution
              </h2>
              
              <div className="space-y-12">
                {[
                  { num: "01", title: "Discovery & Blueprinting", desc: "We map your existing processes to identify high-impact automation opportunities." },
                  { num: "02", title: "Model Development", desc: "Custom AI algorithms are trained on your proprietary data for maximum relevance." },
                  { num: "03", title: "Integration & Deployment", desc: "Seamless rollout with zero downtime, connecting legacy systems with modern AI." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="text-5xl font-bold text-slate-700 group-hover:text-blue-500 transition-colors shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-3">{step.title}</h4>
                      <p className="text-slate-600 text-lg leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block relative h-[700px]">
               {/* Decorative structural elements to make it look premium */}
               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-[120%] border-l border-slate-700/50 flex flex-col justify-between py-12 pl-12">
                 <div className="w-full h-px bg-slate-700/50 relative">
                   <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>
                 </div>
                 <div className="w-full h-px bg-slate-700/50 relative">
                   <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-indigo-400"></div>
                 </div>
                 <div className="w-full h-px bg-slate-700/50 relative">
                   <div className="absolute right-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"></div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Tech Stack */}
      <section className="py-12 md:py-16 lg:py-16 md:py-12 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Powered by Enterprise Tech</h2>
          <p className="text-xl text-slate-600 mb-16 max-w-3xl mx-auto font-medium">
            We build robust AI architectures utilizing the industry's most powerful and secure frameworks.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {["OpenAI & GPT-4", "TensorFlow", "PyTorch", "AWS SageMaker", "Azure AI", "Google Cloud ML", "LangChain", "Pinecone"].map((tech, i) => (
              <div key={i} className="px-8 py-4 bg-white rounded-full font-bold text-slate-700 shadow-sm border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-all cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      <PremiumProjectCTA />
    </main>
  );
}
