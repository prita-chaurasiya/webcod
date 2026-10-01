"use client";

import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";
import { PremiumFeatureCard } from "@/components/PremiumFeatureCard";
import { Headphones, Mic, MessageSquare, ArrowRight, Zap, Shield, Cpu, Activity, Volume2, Globe, Layers, Settings, BarChart, ShieldCheck, Cloud, Brain, Network } from "lucide-react";
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

      {/* 5. Business Challenges We Solve */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#0f2c59] mb-6">Business Challenges We Solve</h2>
            <p className="text-xl text-slate-600 font-medium">Overcome support bottlenecks and scale your customer engagement effortlessly.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Layers, title: "High Support Volume", desc: "Long wait times and overwhelmed human agents during peak traffic hours." },
              { icon: Settings, title: "Inconsistent Experiences", desc: "Varying response quality and inaccurate information provided to customers." },
              { icon: BarChart, title: "Costly Operations", desc: "Escalating costs of maintaining 24/7 global support centers." }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-10 rounded-[2rem] border border-slate-200 hover:border-emerald-300 transition-colors group">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
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
      <section className="py-24 bg-emerald-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" alt="Business Benefits" className="rounded-[2.5rem] shadow-xl border-4 border-white" />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8">Unfair Business Advantage</h2>
              <ul className="space-y-6">
                {[
                  "Reduce support ticket resolution time by up to 80%",
                  "Provide instantaneous 24/7 multilingual support",
                  "Lower operational costs while increasing customer satisfaction",
                  "Seamlessly escalate complex issues with full conversation context"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
                    <ShieldCheck className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                    <span className="text-lg font-bold text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Technology Stack */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#0f2c59]">Conversational AI Tech Stack</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {["Dialogflow", "Rasa", "Amazon Lex", "Twilio", "OpenAI GPT-4", "Whisper STT", "ElevenLabs TTS", "Python", "Node.js", "WebSocket", "GraphQL", "Redis"].map((tech) => (
              <div key={tech} className="bg-slate-50 px-8 py-4 rounded-full border border-slate-200 shadow-sm font-black text-slate-700 hover:border-emerald-500 hover:text-emerald-600 transition-colors">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Development Process */}
      <section className="py-24 lg:py-32 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Our Implementation Process</h2>
            <p className="text-xl text-slate-400">A rigorous methodology for deploying intelligent conversational agents.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Conversation Design", desc: "Mapping out user journeys, intents, and dialog trees for natural interactions." },
              { step: "02", title: "NLU Training", desc: "Training the Natural Language Understanding engine with domain-specific vocabulary." },
              { step: "03", title: "API Integration", desc: "Connecting the bot to your CRM, ERP, and internal databases for dynamic responses." },
              { step: "04", title: "Testing & Deployment", desc: "Simulating thousands of edge-case conversations before public launch." }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800 p-8 rounded-[2rem] border border-slate-700 hover:bg-slate-700 transition-colors">
                <div className="text-5xl font-black text-slate-600 mb-6">{item.step}</div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-slate-400 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Enterprise Use Cases */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#0f2c59]">Enterprise Use Cases</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "E-Commerce Concierge", desc: "AI bots that guide users through product selection, handle cart abandonment, and process returns instantly.", img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop" },
              { title: "Healthcare Scheduling", desc: "Voice AI agents that answer phone calls, collect patient symptoms, and securely book appointments into the EHR system.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" }
            ].map((uc, i) => (
              <div key={i} className="bg-white rounded-[2rem] overflow-hidden group shadow-xl border border-slate-100">
                <div className="h-64 overflow-hidden relative">
                  <img src={uc.img} alt={uc.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-black mb-4 text-slate-900">{uc.title}</h3>
                  <p className="text-slate-600 text-lg font-medium">{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Security & Compliance */}
      <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/20 rounded-full blur-[100px]"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-white mb-6">Data Privacy & Security</h2>
              <p className="text-lg text-blue-200 mb-8 font-medium">Conversational data often contains PII. We architect our AI systems to automatically redact sensitive information and comply strictly with global data protection laws.</p>
              <ul className="space-y-4">
                {["End-to-End Encryption", "HIPAA & GDPR Compliance", "Automated PII Redaction", "On-Premise Deployment Options"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-emerald-400" />
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
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#0f2c59] mb-6">Industries We Empower</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Cloud, name: "Healthcare" },
              { icon: BarChart, name: "Finance" },
              { icon: Network, name: "Retail" },
              { icon: Brain, name: "Travel" }
            ].map((ind, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all group border border-slate-200 cursor-default">
                <ind.icon className="w-10 h-10 text-emerald-600 group-hover:text-white mb-4 transition-colors" />
                <span className="font-bold text-lg">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Quality Assurance */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl font-black text-[#0f2c59] mb-8">Conversational QA & Analytics</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">We deploy comprehensive analytics dashboards to track bot deflection rates, sentiment scores, and fallback triggers, continuously optimizing the conversational flow.</p>
        </div>
      </section>

      {/* 13. Case Studies / Success Stories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-emerald-50 p-12 lg:p-20 rounded-[3rem] text-center border border-emerald-100 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Client Success Story</h2>
            <p className="text-xl text-slate-600 font-medium italic max-w-4xl mx-auto mb-10">
              "WebCodian integrated a WhatsApp conversational bot that now handles 70% of our tier-1 support queries instantly, saving us over $40,000 monthly in operational costs."
            </p>
            <div className="font-bold text-slate-800 uppercase tracking-widest text-sm">— Leading Telecom Provider</div>
          </div>
        </div>
      </section>

      {/* 14. FAQs */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#0f2c59]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Can the chatbot be integrated with WhatsApp?", a: "Yes, we specialize in deploying omnichannel bots that work seamlessly across WhatsApp, Telegram, Facebook Messenger, and custom web widgets." },
              { q: "What languages does your Voice AI support?", a: "Our Voice AI solutions support over 50 languages with highly realistic accents and localized nuances using state-of-the-art TTS/STT engines." },
              { q: "How does the bot know when to hand over to a human?", a: "We program explicit fallback rules based on sentiment analysis, repeated misunderstandings, or high-value intent recognition to trigger a seamless live agent handoff." }
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
