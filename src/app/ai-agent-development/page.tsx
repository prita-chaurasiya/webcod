"use client";

import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";
import { PremiumFeatureCard } from "@/components/PremiumFeatureCard";
import { PremiumAIExtendedSections } from "@/components/PremiumAIExtendedSections";
import { Bot, Zap, Shield, Cpu, ArrowRight, Brain, Network, Cloud, ShieldCheck, Layers, BarChart, Settings, Code2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="bg-white min-h-screen font-sans">
      
      {/* 1. Breadcrumb Section */}
      <div 
        className="relative py-24 lg:py-32 bg-[#3b70e0] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(10, 30, 70, 0.7), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop')"
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 capitalize tracking-tight drop-shadow-md">
              AI Agent Development
            </h1>
            <ul className="flex items-center gap-3 text-blue-100 font-bold uppercase text-sm tracking-widest">
              <li>
                <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              </li>
              <li className="text-blue-300">/</li>
              <li className="text-white">AI AGENT DEVELOPMENT</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-cyan-100 rounded-full blur-[150px] opacity-50 pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8 inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full font-bold text-xs tracking-widest uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-600 animate-pulse"></span>
                Autonomous Intelligence
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
                Next-Generation <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">AI Agents</span>
              </h2>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
                We build sophisticated, autonomous AI agents capable of reasoning, planning, and executing complex workflows without human intervention.
              </p>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                From customer service bots to enterprise-wide data orchestrators, our AI agents integrate directly with your existing APIs to fetch data, make decisions, and drive measurable outcomes at scale.
              </p>
              
              <div className="flex flex-wrap gap-5">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-slate-900 text-white font-bold py-4 px-10 rounded-[18px] shadow-lg hover:-translate-y-1 transition-all group">
                  Build Your Agent <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/20 to-transparent mix-blend-overlay z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop" 
                  alt="AI Agent Architecture" 
                  className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              
              {/* Floating Element */}
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 flex items-center gap-5 z-20"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600">
                  <Brain className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">10x</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Efficiency</div>
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
            <h2 className="text-3xl md:text-5xl font-black text-[#0f2c59] mb-6 tracking-tight">Agent Capabilities</h2>
            <p className="text-xl text-slate-600 font-medium">
              Our AI agents do more than just chat—they execute. We engineer them with full agency to interact with your digital ecosystem.
            </p>
          </div>

          <div className="space-y-12">
            <PremiumFeatureCard 
              number="01"
              imageTitle="Integration"
              imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
              category="API & SYSTEMS"
              title="Secure API & CRM Integrations"
              description="Agents that can securely read, write, and execute functions across your CRM, ERP, and internal APIs. They bridge the gap between fragmented software silos, turning complex workflows into single natural language commands."
              linkText="Explore integration features"
              href="/services"
              reverse={false}
            />

            <PremiumFeatureCard 
              number="02"
              imageTitle="Reasoning"
              imageSrc="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
              category="CHAIN OF THOUGHT"
              title="Advanced Cognitive Reasoning"
              description="Powered by cutting-edge LLMs, our agents break down complex problems into solvable steps. They don't just execute predefined scripts; they analyze context, handle edge cases, and adapt dynamically."
              linkText="See how it works"
              href="/generative-ai"
              reverse={true}
            />

            <PremiumFeatureCard 
              number="03"
              imageTitle="Swarms"
              imageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
              category="MULTI-AGENT COLLABORATION"
              title="Deploy specialized AI swarms"
              description="Scale your operations infinitely by deploying swarms of specialized agents that collaborate with each other. One agent researches, another drafts, and a third audits—working together to solve massive tasks in seconds."
              linkText="Scale with swarms"
              href="/business-automation"
              reverse={false}
            />
          </div>
        </div>
      </section>

      {/* 4. Agent Architecture */}
      <section className="py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <div>
              <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-4 block">Architecture</span>
              <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">
                How Our AI Agents Work
              </h2>
              
              <div className="space-y-12">
                {[
                  { num: "01", title: "Perception & Input", desc: "The agent ingests multimodal data—text, images, or API payloads—to understand the user's intent." },
                  { num: "02", title: "Reasoning Engine", desc: "Powered by Large Language Models (LLMs), the agent determines the best sequence of tools to achieve the goal." },
                  { num: "03", title: "Action & Tool Use", desc: "The agent securely calls webhooks, APIs, or database queries to execute the planned actions autonomously." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="text-5xl font-black text-slate-700 group-hover:text-cyan-500 transition-colors shrink-0">
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
               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-[120%] border-l border-slate-700/50 flex flex-col justify-between py-20 pl-12">
                 <div className="w-full h-px bg-slate-700/50 relative">
                   <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.8)]"></div>
                 </div>
                 <div className="w-full h-px bg-slate-700/50 relative">
                   <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-indigo-400"></div>
                 </div>
                 <div className="w-full h-px bg-slate-700/50 relative">
                   <div className="absolute right-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.8)]"></div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sections 7-14 via PremiumAIExtendedSections */}
      <PremiumAIExtendedSections 
        useCases={[
          {
            title: "Automated Customer Support Agent",
            description: "Deploy an AI agent that doesn't just answer FAQs, but actually processes returns, checks inventory, and books appointments by interfacing directly with your ERP system.",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop"
          },
          {
            title: "Financial Data Analyst Agent",
            description: "An autonomous agent that monitors financial markets, analyzes your internal expense data, and generates comprehensive risk-assessment reports every morning.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
          },
          {
            title: "HR Onboarding Agent",
            description: "A specialized swarm of agents that handles employee onboarding. One drafts the contract, another sets up IT credentials, and a third schedules orientation meetings.",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
          },
          {
            title: "Code Review & Security Agent",
            description: "Integrate an AI agent into your CI/CD pipeline that automatically reviews pull requests, identifies security vulnerabilities, and suggests optimized code rewrites.",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
          }
        ]}
        faqs={[
          {
            q: "What is an AI Agent and how is it different from a chatbot?",
            a: "While a chatbot simply generates text responses based on user input, an AI Agent has 'agency'. It can break down a complex goal into steps, reason about how to solve it, and use tools (like APIs, web browsers, or databases) to actually execute actions autonomously."
          },
          {
            q: "Are these AI agents secure enough for enterprise data?",
            a: "Absolutely. We build strict guardrails and human-in-the-loop (HITL) protocols into every agent. We can deploy them in isolated cloud environments (VPC) and ensure they only have access to the specific data and APIs you authorize, fully compliant with SOC2 and GDPR."
          },
          {
            q: "What Large Language Models (LLMs) do you use to power the agents?",
            a: "We are model-agnostic. We use the best model for the specific task, including OpenAI's GPT-4, Anthropic's Claude 3, Google Gemini, or even custom-fine-tuned open-source models like Llama 3 when data privacy is the absolute highest priority."
          },
          {
            q: "How long does it take to develop a custom AI agent?",
            a: "A proof-of-concept (POC) can typically be developed in 2-4 weeks. A fully integrated, enterprise-grade agent deployed to production usually takes 8-12 weeks, depending on the complexity of your internal APIs and security requirements."
          },
          {
            q: "Can the AI agent integrate with my existing software?",
            a: "Yes. Our agents are designed to integrate seamlessly with your existing tech stack, including CRMs like Salesforce, ERPs like SAP, and team communication tools like Slack or Microsoft Teams via secure REST and GraphQL APIs."
          },
          {
            q: "What happens if the AI agent makes a mistake?",
            a: "We implement 'Chain of Thought' reasoning and rigorous fallback protocols. If an agent is uncertain, it pauses execution and escalates the issue to a human supervisor for approval before taking any critical action."
          },
          {
            q: "Do I need technical expertise to manage the AI agents?",
            a: "No. We provide a user-friendly management dashboard where your non-technical team can monitor agent performance, view logs, adjust permissions, and see the exact ROI and time saved."
          },
          {
            q: "How do you handle agent hallucinations?",
            a: "We use Retrieval-Augmented Generation (RAG) and strict prompt engineering guardrails. The agent is strictly instructed to only use the context provided by your secure database, reducing hallucinations to near-zero."
          }
        ]}
      />

      <PremiumProjectCTA />
    </main>
  );
}
