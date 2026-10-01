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
        className="relative py-12 md:py-16 lg:py-16 md:py-12 bg-[#3b70e0] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(10, 30, 70, 0.7), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop')"
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 capitalize tracking-tight drop-shadow-md">
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
      <section className="py-12 md:py-16 lg:py-16 md:py-12 bg-slate-50 relative overflow-hidden">
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

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
                Next-Generation <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">AI Agents</span>
              </h2>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
                We build sophisticated, autonomous AI agents capable of reasoning, planning, and executing complex workflows without human intervention.
              </p>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                From customer service bots to enterprise-wide data orchestrators, our AI agents integrate directly with your existing APIs to fetch data, make decisions, and drive measurable outcomes at scale.
              </p>
              
              <div className="flex flex-wrap gap-5">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-slate-50 text-white font-bold py-4 px-10 rounded-[18px] shadow-lg hover:-translate-y-1 transition-all group">
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
                  <div className="text-2xl font-bold text-slate-900">10x</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Efficiency</div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Core Capabilities Grid replaced with Premium Feature Cards */}
      <section className="py-12 md:py-16 lg:py-16 md:py-12 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0f2c59] mb-6 tracking-tight">Agent Capabilities</h2>
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
      <section className="py-12 md:py-16 lg:py-16 md:py-12 bg-slate-50 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <div>
              <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-4 block">Architecture</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
                How Our AI Agents Work
              </h2>
              
              <div className="space-y-12">
                {[
                  { num: "01", title: "Perception & Input", desc: "The agent ingests multimodal data—text, images, or API payloads—to understand the user's intent." },
                  { num: "02", title: "Reasoning Engine", desc: "Powered by Large Language Models (LLMs), the agent determines the best sequence of tools to achieve the goal." },
                  { num: "03", title: "Action & Tool Use", desc: "The agent securely calls webhooks, APIs, or database queries to execute the planned actions autonomously." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="text-5xl font-bold text-slate-400 group-hover:text-cyan-500 transition-colors shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-3">{step.title}</h4>
                      <p className="text-slate-300 text-lg leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block relative h-[700px]">
               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-[120%] border-l border-slate-700/50 flex flex-col justify-between py-12 pl-12">
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

      {/* 5. Business Challenges We Solve */}
      <section className="py-12 md:py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0f2c59] mb-6">Business Challenges We Solve</h2>
            <p className="text-xl text-slate-600 font-medium">Overcome operational bottlenecks with autonomous task execution.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Layers, title: "Siloed Operations", desc: "Data and workflows are trapped across multiple disconnected software platforms." },
              { icon: Settings, title: "Manual Repetition", desc: "Your top talent is wasting hours on mundane data entry and repetitive tasks." },
              { icon: BarChart, title: "Scaling Bottlenecks", desc: "Customer support and operational output cannot scale without linearly increasing headcount." }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-10 rounded-[2rem] border border-slate-200 hover:border-cyan-300 transition-colors group">
                <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Business Benefits */}
      <section className="py-12 md:py-16 bg-cyan-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" alt="Business Benefits" className="rounded-[2.5rem] shadow-xl border-4 border-white" />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Unfair Business Advantage</h2>
              <ul className="space-y-6">
                {[
                  "Reduce operational overhead by up to 60%",
                  "Execute cross-platform workflows 24/7 without human intervention",
                  "Eliminate manual data entry errors completely",
                  "Scale customer and internal support infinitely"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-cyan-100">
                    <ShieldCheck className="w-8 h-8 text-cyan-600 flex-shrink-0" />
                    <span className="text-lg font-bold text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Technology Stack */}
      <section className="py-12 md:py-16 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0f2c59]">AI Agent Tech Stack</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {["LangGraph", "CrewAI", "AutoGPT", "OpenAI Tool Calling", "Anthropic Claude", "Python", "FastAPI", "Vector Databases", "MCP", "RAG", "REST/GraphQL Integration", "Docker"].map((tech) => (
              <div key={tech} className="bg-slate-50 px-8 py-4 rounded-full border border-slate-200 shadow-sm font-bold text-slate-700 hover:border-cyan-500 hover:text-cyan-600 transition-colors">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Development Process */}
      <section className="py-12 md:py-16 lg:py-16 md:py-12 bg-slate-50 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Implementation Process</h2>
            <p className="text-xl text-slate-600">A rigorous, enterprise-grade methodology for deploying Autonomous AI safely.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Workflow Audit", desc: "We map your existing manual workflows and identify where agents can take over tool execution." },
              { step: "02", title: "API Integration", desc: "Building secure connectors so the agent can read/write to your CRM, ERP, and databases." },
              { step: "03", title: "Cognitive Engineering", desc: "Designing the reasoning loops (ReAct) and memory systems for complex problem solving." },
              { step: "04", title: "Human-in-the-Loop", desc: "Deploying with strict approval gates before the agent executes high-stakes actions." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-700 hover:bg-slate-700 transition-colors">
                <div className="text-5xl font-bold text-slate-600 mb-6">{item.step}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Enterprise Use Cases */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0f2c59]">Enterprise Use Cases</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Autonomous Customer Support", desc: "Agents that access billing APIs to process refunds, update subscriptions, and resolve tickets entirely on their own.", img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop" },
              { title: "Financial Data Analysts", desc: "Agent swarms that monitor live markets, query internal SQL databases, and compile morning executive reports automatically.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" }
            ].map((uc, i) => (
              <div key={i} className="bg-white rounded-[2rem] overflow-hidden group shadow-xl border border-slate-100">
                <div className="h-64 overflow-hidden relative">
                  <img src={uc.img} alt={uc.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">{uc.title}</h3>
                  <p className="text-slate-300 text-lg font-medium">{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Security & Compliance */}
      <section className="py-12 md:py-16 bg-blue-50 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[100px]"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Uncompromising Data Security</h2>
              <p className="text-lg text-blue-700 mb-8 font-medium">When you give AI agency, security is paramount. We build systems that guarantee agents only operate within strict boundaries with robust audit trails.</p>
              <ul className="space-y-4">
                {["Human-in-the-Loop (HITL) Execution", "SOC2 Compliant API Gateways", "Strict Role-Based Access Controls (RBAC)", "Immutable Agent Action Logs"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-cyan-400" />
                    <span className="font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop" alt="Security" className="rounded-3xl shadow-2xl border-4 border-blue-800" />
            </div>
          </div>
        </div>
      </section>

      {/* 11. Industries We Serve */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0f2c59] mb-6">Industries We Empower</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Cloud, name: "E-Commerce" },
              { icon: BarChart, name: "Logistics" },
              { icon: Network, name: "Telecom" },
              { icon: Brain, name: "FinTech" }
            ].map((ind, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-2xl hover:bg-blue-600 hover:text-white transition-all group border border-slate-200 cursor-default">
                <ind.icon className="w-10 h-10 text-blue-600 group-hover:text-white mb-4 transition-colors" />
                <span className="font-bold text-lg">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Quality Assurance */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-[#0f2c59] mb-8">Agent QA & Red Teaming</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">We rigorously stress-test agent reasoning loops against edge cases, infinite loops, and prompt injections to ensure enterprise-ready reliability before deployment.</p>
        </div>
      </section>

      {/* 13. Case Studies / Success Stories */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-cyan-50 p-12 lg:p-20 rounded-[3rem] text-center border border-cyan-100 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Client Success Story</h2>
            <p className="text-xl text-slate-600 font-medium italic max-w-4xl mx-auto mb-10">
              "WebCodian engineered an autonomous support swarm that integrates directly with our Shopify and Zendesk APIs. It now handles 40% of our return processing without a single human touch."
            </p>
            <div className="font-bold text-slate-800 uppercase tracking-widest text-sm">— Global Retail Enterprise</div>
          </div>
        </div>
      </section>

      {/* 14. FAQs */}
      <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0f2c59]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "What is an AI Agent and how is it different from a chatbot?", a: "A chatbot just talks. An AI agent has agency—it uses tools like APIs to execute tasks in the real world." },
              { q: "What happens if the agent makes a mistake?", a: "We implement Human-in-the-Loop constraints. The agent prepares the action, but a human clicks 'Approve' for anything sensitive." },
              { q: "Can agents communicate with each other?", a: "Yes. Using frameworks like CrewAI, we deploy swarms where specialized agents hand off tasks to one another." }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <h4 className="font-bold text-lg text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-slate-600 font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PremiumProjectCTA />
    </main>
  );
}
