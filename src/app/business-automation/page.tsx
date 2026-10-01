"use client";

import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";
import { PremiumFeatureCard } from "@/components/PremiumFeatureCard";
import { Bot, Zap, Shield, Cpu, Layers, Link as LinkIcon, Database, ArrowRight, Settings, TrendingUp, Layers as LayersIcon, Zap as ZapIcon, Brain, Network, Cloud, ShieldCheck, Headphones, Briefcase, ShoppingCart, Building, DollarSign, GraduationCap, HeartPulse } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="bg-white min-h-screen font-sans">
      
      {/* 1. Breadcrumb Section */}
      <div 
        className="relative py-12 md:py-16 bg-[#3b70e0] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(230, 64, 64, 0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop')"
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--heading)] mb-4 capitalize tracking-tight">Business Automation Solutions</h1>
            <ul className="flex items-center gap-2 text-[var(--heading)]/90 font-medium uppercase text-sm tracking-wider">
              <li>
                <Link href="/" className="hover:text-[var(--heading)] transition-colors">HOME</Link>
              </li>
              <li className="text-[var(--heading)]/60">/</li>
              <li className="text-[var(--heading)] font-bold capitalize">business automation solutions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="py-12 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:pr-8"
            >
              <div className="mb-6 relative inline-block">
                <span className="bg-blue-600 text-white px-5 py-2 rounded-r-full font-bold text-sm tracking-wider uppercase shadow-md relative z-10">
                  Business Process Intelligence
                </span>
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 rotate-45 z-0"></div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Business Automation Solutions for <span className="text-blue-600">Smarter and Scalable Operations</span>
              </h1>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
                Businesses today need speed, efficiency, and intelligent workflows to stay competitive in the digital economy. At WebCodian, we provide advanced Business Automation Solutions that help organizations automate repetitive tasks, streamline operations, and improve overall productivity.
              </p>
              <p className="text-slate-500 mb-8 leading-relaxed">
                From workflow automation and AI-powered systems to CRM integrations and process management, our solutions are designed to reduce manual effort, improve accuracy, and accelerate business growth.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-blue-600/30 transition-all">
                  Explore Solutions
                </Link>
                <Link href="/contact" className="bg-white border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-700 font-bold py-3 px-8 rounded-full shadow-sm transition-all">
                  Contact Us
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-[18px] shadow-lg overflow-hidden border border-slate-700">
                {/* Browser bar fake */}
                <div className="bg-white px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                  <div className="w-3 h-3 rounded-full bg-slate-50"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-50"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-50"></div>
                </div>
                <div className="p-1">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
                    alt="Automation Dashboard" 
                    className="w-full h-auto rounded-[18px] img-premium"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. What is Business Automation */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pr-12"
            >
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Intelligent Operations</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What Is Business Automation?</h2>
              <p className="text-slate-600 text-lg mb-4 leading-relaxed">
                Business Automation is the process of using technology, software, and artificial intelligence to automate routine business operations and workflows. Instead of handling repetitive tasks manually, businesses can use automation systems to improve efficiency and save time.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                Companies across industries are adopting business process automation solutions to optimize performance and reduce operational costs.
              </p>
            </motion.div>

            <div className="flex flex-col gap-6">
              {[
                { icon: Settings, title: "Automate business processes", desc: "Improve operational speed and eliminate repetitive manual workflows." },
                { icon: TrendingUp, title: "Manage workflows intelligently", desc: "Smart automation systems designed for scalable business operations." },
                { icon: LayersIcon, title: "Increase productivity and scalability", desc: "Reduce operational errors and improve collaboration across teams." }
              ].map((item, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx}
                  className="bg-white border border-slate-100 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] shadow-slate-200/50 p-6 rounded-[18px] flex items-start gap-5 hover:-translate-y-1 transition-transform"
                >
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-[18px] flex items-center justify-center shrink-0">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h5>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. Services Grid replaced with Premium Feature Cards */}
      <section className="py-12 md:py-16 lg:py-16 md:py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">AI Services</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0f2c59] mb-6 tracking-tight">Our Artificial Intelligence Services</h2>
            <p className="text-xl text-slate-600 font-medium">
              At WebCodian, we build innovative AI solutions that help businesses automate operations, improve decision-making, and create intelligent digital experiences.
            </p>
          </div>

          <div className="space-y-12">
            <PremiumFeatureCard 
              number="01"
              imageTitle="Gen AI"
              imageSrc="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
              category="GENERATIVE AI"
              title="Generative AI Solutions"
              description="Build intelligent AI systems that generate content, automate workflows, create documents, and enhance productivity. Harness the power of Generative AI to scale your operations."
              linkText="Explore Generative AI"
              href="/generative-ai"
              reverse={false}
            />

            <PremiumFeatureCard 
              number="02"
              imageTitle="AI Agents"
              imageSrc="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
              category="AI AUTOMATION"
              title="AI Agents Development"
              description="Develop custom AI agents capable of handling tasks, managing workflows, supporting teams, and automating operations autonomously without human intervention."
              linkText="Explore AI agent development"
              href="/ai-agent-development"
              reverse={true}
            />

            <PremiumFeatureCard 
              number="03"
              imageTitle="Voice AI"
              imageSrc="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800"
              category="CONVERSATIONAL AI"
              title="Chatbot & Voice AI"
              description="Create smart chatbots and voice assistants that automate conversations, improve engagement, and deliver instant 24/7 support to your customers globally."
              linkText="Explore voice AI"
              href="/chatbot-voice-ai"
              reverse={false}
            />
          </div>
        </div>
      </section>

      {/* 5. Why Business Automation Is Important (Orbital Layout) */}
      <section className="py-12 md:py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-2 block">Operational Efficiency</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--heading)] mb-6">Why Business Automation Is Important</h2>
            <p className="text-slate-500 text-lg">
              Manual processes often slow down business growth and increase operational costs. Automation helps organizations become more agile, efficient, and scalable.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative">
            
            {/* Left Side Benefits */}
            <div className="w-full lg:w-1/3 space-y-8">
              {[
                { num: "01", color: "text-[var(--primary)]", title: "Faster workflow execution", desc: "Improve operational speed with intelligent automated systems." },
                { num: "02", color: "text-cyan-400", title: "Reduced human errors", desc: "Minimize manual mistakes and improve operational accuracy." },
                { num: "03", color: "text-sky-400", title: "Improved productivity", desc: "Allow teams to focus on strategy and high-value operations." }
              ].map((item, i) => (
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} key={i} className="flex gap-6 items-start">
                  <div className={`text-4xl font-bold ${item.color} opacity-80 shrink-0`}>{item.num}</div>
                  <div>
                    <h4 className="text-[var(--heading)] font-bold text-xl mb-2">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Center Orbital */}
            <div className="w-full lg:w-1/3 flex justify-center py-12 lg:py-0 relative">
              <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                {/* Center Hub */}
                <div className="relative z-20 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex flex-col items-center justify-center text-[var(--heading)] shadow-lg shadow-blue-500/50 border-4 border-slate-800">
                  <span className="text-4xl font-bold leading-none mb-1">6</span>
                  <span className="text-xs uppercase tracking-widest font-bold">Benefits</span>
                </div>
                
                {/* Orbit Path */}
                <div className="absolute inset-0 rounded-full border border-slate-700/50"></div>
                
                {/* Orbiting Icons */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  {[ZapIcon, ShieldCheck, Settings, Brain, TrendingUp, DollarSign].map((Icon, idx) => {
                    const angle = (idx * 360) / 6;
                    return (
                      <div 
                        key={idx}
                        className="absolute w-12 h-12 bg-white rounded-full border-2 border-slate-700 flex items-center justify-center text-blue-400 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]"
                        style={{
                          top: '50%', left: '50%',
                          transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-140px) rotate(-${angle}deg)` // The second rotate keeps the icon upright if we wanted, but since the parent rotates, we need counter-rotation
                        }}
                      >
                        <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                           <Icon className="w-5 h-5" />
                        </motion.div>
                      </div>
                    )
                  })}
                </motion.div>
              </div>
            </div>

            {/* Right Side Benefits */}
            <div className="w-full lg:w-1/3 space-y-8">
              {[
                { num: "04", color: "text-blue-400", title: "Better customer experience", desc: "Deliver faster communication and streamlined services." },
                { num: "05", color: "text-indigo-400", title: "Real-time tracking", desc: "Generate insights instantly with automation-driven analytics." },
                { num: "06", color: "text-[var(--primary)]", title: "Lower operational costs", desc: "Reduce repetitive manual workloads and optimize resources." }
              ].map((item, i) => (
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} key={i} className="flex gap-6 items-start lg:flex-row-reverse text-left lg:text-right">
                  <div className={`text-4xl font-bold ${item.color} opacity-80 shrink-0`}>{item.num}</div>
                  <div>
                    <h4 className="text-[var(--heading)] font-bold text-xl mb-2">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 6. Industries We Serve */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block">Automation Industries</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Industries We Serve <br/> <span className="text-blue-600">with Automation Solutions</span>
            </h2>
            <p className="text-slate-600 text-lg">
              We empower businesses across industry verticals with intelligent automation solutions that improve productivity, streamline workflows, and drive growth. From workflow automation to AI-powered business systems, we help organizations streamline operations, reduce manual efforts, and deliver better customer experiences.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            
            <div className="flex flex-col gap-8 w-full lg:w-1/3">
              <div className="flex items-center gap-4 bg-slate-50/50 p-4 rounded-[18px] border border-slate-100">
                <div className="w-14 h-14 bg-slate-50 text-[var(--heading)] rounded-full flex items-center justify-center shrink-0 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] shadow-red-500/30"><ShoppingCart className="w-6 h-6"/></div>
                <div>
                  <h4 className="font-bold text-slate-900">E-commerce</h4>
                  <p className="text-sm text-slate-600">Order processing automation, inventory management and customer support.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-slate-50/50 p-4 rounded-[18px] border border-slate-100">
                <div className="w-14 h-14 bg-slate-50 text-[var(--heading)] rounded-full flex items-center justify-center shrink-0 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] shadow-orange-500/30"><Building className="w-6 h-6"/></div>
                <div>
                  <h4 className="font-bold text-slate-900">Real Estate</h4>
                  <p className="text-sm text-slate-600">CRM workflows, inquiry systems and document automation.</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="w-64 h-64 bg-slate-100 rounded-full flex items-center justify-center border-8 border-white shadow-lg relative overflow-hidden p-6">
                <div className="absolute inset-0 bg-blue-600 opacity-5 rounded-full"></div>
                <div className="text-center relative z-10">
                   <Network className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                   <div className="font-bold text-slate-900 text-xl tracking-wide uppercase">Industries</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8 w-full lg:w-1/3">
              <div className="flex items-center gap-4 bg-slate-50/50 p-4 rounded-[18px] border border-slate-100">
                <div className="w-14 h-14 bg-slate-50 text-[var(--heading)] rounded-full flex items-center justify-center shrink-0 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] shadow-green-500/30"><DollarSign className="w-6 h-6"/></div>
                <div>
                  <h4 className="font-bold text-slate-900">FinTech</h4>
                  <p className="text-sm text-slate-600">Transaction monitoring and financial workflow automation systems.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-blue-50/50 p-4 rounded-[18px] border border-blue-100">
                <div className="w-14 h-14 bg-blue-500 text-[var(--heading)] rounded-full flex items-center justify-center shrink-0 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] shadow-blue-500/30"><HeartPulse className="w-6 h-6"/></div>
                <div>
                  <h4 className="font-bold text-slate-900">Healthcare</h4>
                  <p className="text-sm text-slate-600">Patient automation and AI-powered healthcare support systems.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-slate-50/50 p-4 rounded-[18px] border border-slate-100">
                <div className="w-14 h-14 bg-slate-50 text-[var(--heading)] rounded-full flex items-center justify-center shrink-0 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] shadow-purple-500/30"><GraduationCap className="w-6 h-6"/></div>
                <div>
                  <h4 className="font-bold text-slate-900">Education</h4>
                  <p className="text-sm text-slate-600">Student enrollment systems and online learning workflow automation.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Technologies List */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Technologies Used in Business Automation</h3>
            <p className="text-slate-600">We use modern technologies and scalable infrastructure to build high-performance automation systems designed for scalability, security, and seamless business integration.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: Brain, label: "Artificial Intelligence (AI)" },
              { icon: Cpu, label: "Machine Learning" },
              { icon: Cloud, label: "Cloud Computing" },
              { icon: ShieldCheck, label: "Data Protection & Security" },
              { icon: Network, label: "Workflow Automation Platforms" },
              { icon: Layers, label: "CRM & ERP Integrations" },
              { icon: Bot, label: "Robotic Process Automation (RPA)" }
            ].map((tech, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-[18px] border border-slate-200 shadow-sm">
                <tech.icon className="w-6 h-6 text-blue-600 shrink-0" />
                <span className="font-bold text-slate-700">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. AI-Powered Automation */}
      <section className="py-12 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center bg-blue-700/50 rounded-[2.5rem] p-8 md:p-12 border border-white/10 backdrop-blur-sm">
            
            <div className="lg:col-span-7 text-[var(--heading)]">
              <span className="inline-block bg-white/10 text-[var(--heading)] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
                AI Automation
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                AI-Powered Automation for <br/> <span className="text-blue-300">Modern Businesses</span>
              </h2>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                Artificial intelligence is changing the future of automation. AI-powered business systems can analyze data, predict outcomes, and make intelligent decisions automatically.
              </p>
              <div className="text-sm font-medium text-blue-700 italic border-l-4 border-blue-400 pl-4">
                By combining AI with automation, businesses create smarter digital ecosystems that adapt and grow over time.
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 rounded-[18px] p-8 border border-white/20">
              <p className="text-[var(--heading)] font-bold text-lg mb-6">Our solutions help you:</p>
              <ul className="space-y-4">
                {[
                  "Automate customer interactions",
                  "Generate business insights",
                  "Improve operational efficiency",
                  "Enable predictive analytics",
                  "Enhance decision-making"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-[var(--heading)]">
                    <ShieldCheck className="w-5 h-5 text-blue-300 shrink-0" />
                    <span className="font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Why Choose Us */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            
            <div className="lg:col-span-2">
               <div className="mb-6 relative inline-block">
                <span className="bg-blue-600 text-white px-5 py-2 rounded-r-full font-bold text-sm tracking-wider uppercase shadow-md relative z-10">
                  WebCodian Advantage
                </span>
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 rotate-45 z-0"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Choose WebCodian for <span className="text-blue-600">Business Automation?</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                At WebCodian, we develop automation systems focused on performance, scalability, and business growth. We help businesses digitally transform their operations with intelligent automation technologies.
              </p>
            </div>

            <div className="lg:col-span-3">
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Brain, label: "AI & Enterprise Expertise" },
                  { icon: Network, label: "Custom Workflow Solutions" },
                  { icon: Cloud, label: "Scalable Cloud Architecture" },
                  { icon: LinkIcon, label: "Seamless ERP/API Sync" },
                  { icon: Shield, label: "Secure & Reliable Systems" },
                  { icon: Headphones, label: "24/7 Dedicated Support" }
                ].map((item, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-100 rounded-[18px] p-6 flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h5 className="font-bold text-slate-800">{item.label}</h5>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10. Business Challenges */}
      <section className="py-12 md:py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0f2c59] mb-6">Business Challenges We Solve</h2>
            <p className="text-xl text-slate-600 font-medium">Overcome scaling bottlenecks with intelligent business automation.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Layers, title: "Siloed Data Systems", desc: "Critical business data trapped across multiple incompatible software platforms." },
              { icon: Settings, title: "Manual Data Entry", desc: "High error rates and wasted hours from manually transferring information." },
              { icon: TrendingUp, title: "Scaling Bottlenecks", desc: "Inability to handle increased transaction volume without linearly increasing headcount." }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-10 rounded-[2rem] border border-slate-200 hover:border-blue-300 transition-colors group">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Implementation Process */}
      <section className="py-12 md:py-16 lg:py-16 md:py-12 bg-slate-50 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Automation Rollout Process</h2>
            <p className="text-xl text-slate-600">A structured methodology for digitizing and automating your enterprise operations.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Process Mining", desc: "We map your existing manual workflows to identify the highest ROI automation opportunities." },
              { step: "02", title: "Architecture Design", desc: "Designing the cloud infrastructure, database schemas, and API integration layers." },
              { step: "03", title: "Bot Development", desc: "Building the custom RPA bots, workflow scripts, and machine learning models." },
              { step: "04", title: "UAT & Deployment", desc: "Rigorous User Acceptance Testing followed by a phased production rollout." }
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

      {/* 12. Security & Compliance */}
      <section className="py-12 md:py-16 bg-blue-50 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px]"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Enterprise-Grade Security</h2>
              <p className="text-lg text-blue-700 mb-8 font-medium">When data moves automatically between systems, security cannot be an afterthought. We build secure, encrypted pipelines that comply with international data regulations.</p>
              <ul className="space-y-4">
                {["AES-256 Data Encryption", "SOC2 & ISO 27001 Compliance", "Role-Based Access Control (RBAC)", "Comprehensive Audit Logging"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-blue-400" />
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

      {/* 13. Quality Assurance & Analytics */}
      <section className="py-12 md:py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-[#0f2c59] mb-8">Continuous Monitoring & Analytics</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">We don't just deploy and walk away. Our automation solutions come with comprehensive observability dashboards, alerting systems, and SLA guarantees to ensure 99.99% uptime for your critical business processes.</p>
        </div>
      </section>

      {/* 14. Client Success Story */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-blue-50 p-12 lg:p-20 rounded-[3rem] text-center border border-blue-100 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Proven Business Results</h2>
            <p className="text-xl text-slate-600 font-medium italic max-w-4xl mx-auto mb-10">
              "WebCodian automated our entire supply chain documentation process. What used to take a team of five people a full week is now completely automated and error-free in under 10 minutes."
            </p>
            <div className="font-bold text-slate-800 uppercase tracking-widest text-sm">— National Logistics Corporation</div>
          </div>
        </div>
      </section>

      {/* 15. FAQs */}
      <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0f2c59]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "How long does it take to implement a business automation solution?", a: "Simple API integrations can be completed in 2-4 weeks. Comprehensive enterprise-wide RPA deployments typically take 3-6 months depending on system complexity." },
              { q: "Will automation replace my employees?", a: "No. Automation is designed to augment your workforce, not replace it. It removes the tedious, repetitive tasks so your team can focus on high-value, strategic work." },
              { q: "Do you integrate with legacy on-premise systems?", a: "Yes. We specialize in building secure bridges between modern cloud applications and legacy on-premise mainframes using secure middleware and custom APIs." },
              { q: "What happens if a third-party API changes or breaks?", a: "Our managed support plans include proactive API monitoring. If a vendor changes their API, our team immediately updates the integration to prevent any business downtime." }
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
