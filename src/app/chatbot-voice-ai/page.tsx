"use client";

import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";
import { PremiumFeatureCard } from "@/components/PremiumFeatureCard";
import { Headphones, Mic, MessageSquare, ArrowRight, Zap, Shield, Cpu, Activity, Volume2, Globe } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="bg-white min-h-screen font-sans">
      
      {/* 1. Breadcrumb Section */}
      <div 
        className="relative py-24 lg:py-32 bg-[#3b70e0] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(10, 40, 50, 0.7), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2000&auto=format&fit=crop')"
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 capitalize tracking-tight drop-shadow-md">
              Chatbot & Voice AI
            </h1>
            <ul className="flex items-center gap-3 text-emerald-100 font-bold uppercase text-sm tracking-widest">
              <li>
                <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              </li>
              <li className="text-emerald-300">/</li>
              <li className="text-white">CONVERSATIONAL AI</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-emerald-100 rounded-full blur-[150px] opacity-50 pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8 inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-bold text-xs tracking-widest uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                Omnichannel Support
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
                Transform CX with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Conversational AI</span>
              </h2>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
                Deliver instant, human-like customer support 24/7. Our advanced chatbots and voice AI solutions resolve queries instantly across every channel.
              </p>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                From simple FAQ bots to complex, multi-turn voice agents that can book appointments and process payments over the phone—we build intelligent agents that scale your support operations flawlessly.
              </p>
              
              <div className="flex flex-wrap gap-5">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-900 text-white font-bold py-4 px-10 rounded-[18px] shadow-lg hover:-translate-y-1 transition-all group">
                  Automate Support <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-transparent mix-blend-overlay z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1000&auto=format&fit=crop" 
                  alt="Voice AI Interface" 
                  className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              
              {/* Floating Element */}
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 flex items-center gap-5 z-20"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Headphones className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">24/7</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Global Support</div>
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
            <h2 className="text-3xl md:text-5xl font-black text-[#0f2c59] mb-6 tracking-tight">Intelligent Interactions</h2>
            <p className="text-xl text-slate-600 font-medium">
              We leverage advanced NLP and Speech-to-Text technologies to create seamless conversational experiences.
            </p>
          </div>

          <div className="space-y-12">
            <PremiumFeatureCard 
              number="01"
              imageTitle="Omnichannel"
              imageSrc="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800"
              category="MESSAGING BOTS"
              title="Unified WhatsApp & Web Chatbots"
              description="Deploy intelligent conversational agents directly into WhatsApp, Telegram, and your website. They connect to your CRM to provide personalized, context-aware responses and actions."
              linkText="Explore chatbots"
              href="/services"
              reverse={false}
            />

            <PremiumFeatureCard 
              number="02"
              imageTitle="Voice Calls"
              imageSrc="https://images.unsplash.com/photo-1590845947698-8924d7409b56?auto=format&fit=crop&q=80&w=800"
              category="VOICE RECOGNITION"
              title="AI Voice Agents for Telephony"
              description="Automate inbound support calls or outbound sales with hyper-realistic AI voices. Our telephony agents can understand nuances, handle interruptions, and execute database queries mid-call."
              linkText="Explore voice AI"
              href="/services"
              reverse={true}
            />

            <PremiumFeatureCard 
              number="03"
              imageTitle="Analytics"
              imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
              category="SENTIMENT ANALYSIS"
              title="Real-Time Call Emotion Tracking"
              description="Extract deep insights from thousands of customer interactions automatically. Our AI analyzes the tone, sentiment, and intent of every call and chat to identify churn risks and training opportunities."
              linkText="Explore sentiment analytics"
              href="/custom-software-development"
              reverse={false}
            />
          </div>
        </div>
      </section>

      {/* 4. Strategic Approach (Spacious Layout) */}
      <section className="py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <div>
              <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4 block">System Architecture</span>
              <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">
                How Our Conversational AI Works
              </h2>
              
              <div className="space-y-12">
                {[
                  { num: "01", title: "Natural Language Understanding", desc: "Advanced NLU engines instantly parse complex phrasing, slang, and typos to perfectly understand the user's core intent." },
                  { num: "02", title: "API Orchestration", desc: "The bot doesn't just talk; it securely queries your database, processes refunds, or books appointments in real-time." },
                  { num: "03", title: "Human Handoff", desc: "If a query is too complex or the customer is frustrated, the AI seamlessly transfers the conversation to a human agent with full context." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="text-5xl font-black text-slate-700 group-hover:text-emerald-500 transition-colors shrink-0">
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
                   <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.8)]"></div>
                 </div>
                 <div className="w-full h-px bg-slate-700/50 relative">
                   <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-teal-400"></div>
                 </div>
                 <div className="w-full h-px bg-slate-700/50 relative">
                   <div className="absolute right-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"></div>
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
