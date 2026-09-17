"use client";

import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";
import { Bot, Zap, Shield, Cpu, Layers, Link as LinkIcon, Database, ArrowRight, Settings, TrendingUp, Layers as LayersIcon, Zap as ZapIcon, Brain, Network, Cloud, ShieldCheck, Headphones, Briefcase, ShoppingCart, Building, DollarSign, GraduationCap, HeartPulse } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="bg-white min-h-screen font-sans">
      
      {/* 1. Breadcrumb Section */}
      <div 
        className="relative py-24 bg-[#3b70e0] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(230, 64, 64, 0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop')"
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 capitalize tracking-tight">Business Automation Solutions</h1>
            <ul className="flex items-center gap-2 text-white/90 font-medium uppercase text-sm tracking-wider">
              <li>
                <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              </li>
              <li className="text-white/60">/</li>
              <li className="text-white font-bold capitalize">business automation solutions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
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

              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Business Automation Solutions for <span className="text-blue-600">Smarter and Scalable Operations</span>
              </h1>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
                Businesses today need speed, efficiency, and intelligent workflows to stay competitive in the digital economy. At WebCodian, we provide advanced Business Automation Solutions that help organizations automate repetitive tasks, streamline operations, and improve overall productivity.
              </p>
              <p className="text-slate-500 mb-8 leading-relaxed">
                From workflow automation and AI-powered systems to CRM integrations and process management, our solutions are designed to reduce manual effort, improve accuracy, and accelerate business growth.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-blue-600/30 transition-all">
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
              <div className="bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
                {/* Browser bar fake */}
                <div className="bg-slate-900 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="p-1">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
                    alt="Automation Dashboard" 
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. What is Business Automation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pr-12"
            >
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Intelligent Operations</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">What Is Business Automation?</h2>
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
                  className="bg-white border border-slate-100 shadow-lg shadow-slate-200/50 p-6 rounded-2xl flex items-start gap-5 hover:-translate-y-1 transition-transform"
                >
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
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

      {/* 4. Services Grid */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">AI Services</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Our Artificial Intelligence Services</h2>
            <p className="text-slate-600 text-lg">
              At WebCodian, we build innovative AI solutions that help businesses automate operations, improve decision-making, and create intelligent digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { badge: "Generative AI", icon: ZapIcon, title: "Generative AI Solutions", desc: "Build intelligent AI systems that generate content, automate workflows, create documents, and enhance productivity.", link: "/generative-ai", color: "from-purple-500 to-indigo-500" },
              { badge: "AI Agents", icon: Brain, title: "AI Agents Development", desc: "Develop custom AI agents capable of handling tasks, managing workflows, supporting teams, and automating operations.", link: "/ai-agent-development", color: "from-blue-500 to-cyan-500" },
              { badge: "Conversational AI", icon: Headphones, title: "Chatbot & Voice AI", desc: "Create smart chatbots and voice assistants that automate conversations, improve engagement, and deliver instant support.", link: "/chatbot-voice-ai", color: "from-emerald-500 to-teal-500" },
              { badge: "Data Intelligence", icon: TrendingUp, title: "Predictive Analytics", desc: "Use advanced AI models to predict trends, forecast outcomes, analyze customer behavior, and support decisions.", link: "/services", color: "from-orange-500 to-amber-500" },
              { badge: "Computer Vision", icon: ShieldCheck, title: "Computer Vision Solutions", desc: "Implement AI-powered image and video analysis systems for object detection, recognition, monitoring, and automation.", link: "/services", color: "from-rose-500 to-pink-500" },
              { badge: "AI Products", icon: Layers, title: "AI SaaS Products", desc: "Design and develop scalable AI-powered SaaS platforms that streamline processes, enhance experiences, and drive growth.", link: "/ai-saas-product", color: "from-blue-600 to-indigo-600" }
            ].map((srv, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${srv.color} opacity-5 rounded-bl-full group-hover:scale-150 transition-transform duration-700`}></div>
                
                <span className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  {srv.badge}
                </span>
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${srv.color} text-white flex items-center justify-center mb-6 shadow-lg shadow-slate-200`}>
                  <srv.icon className="w-6 h-6" />
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 mb-3">{srv.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{srv.desc}</p>
                
                <Link href={srv.link} className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:text-blue-800 transition-colors">
                  Explore More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Business Automation Is Important (Orbital Layout) */}
      <section className="py-24 bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-2 block">Operational Efficiency</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Why Business Automation Is Important</h2>
            <p className="text-slate-400 text-lg">
              Manual processes often slow down business growth and increase operational costs. Automation helps organizations become more agile, efficient, and scalable.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative">
            
            {/* Left Side Benefits */}
            <div className="w-full lg:w-1/3 space-y-8">
              {[
                { num: "01", color: "text-emerald-400", title: "Faster workflow execution", desc: "Improve operational speed with intelligent automated systems." },
                { num: "02", color: "text-cyan-400", title: "Reduced human errors", desc: "Minimize manual mistakes and improve operational accuracy." },
                { num: "03", color: "text-sky-400", title: "Improved productivity", desc: "Allow teams to focus on strategy and high-value operations." }
              ].map((item, i) => (
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} key={i} className="flex gap-6 items-start">
                  <div className={`text-4xl font-black ${item.color} opacity-80 shrink-0`}>{item.num}</div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Center Orbital */}
            <div className="w-full lg:w-1/3 flex justify-center py-12 lg:py-0 relative">
              <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                {/* Center Hub */}
                <div className="relative z-20 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex flex-col items-center justify-center text-white shadow-2xl shadow-blue-500/50 border-4 border-slate-800">
                  <span className="text-4xl font-black leading-none mb-1">6</span>
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
                        className="absolute w-12 h-12 bg-slate-800 rounded-full border-2 border-slate-700 flex items-center justify-center text-blue-400 shadow-lg"
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
                { num: "06", color: "text-purple-400", title: "Lower operational costs", desc: "Reduce repetitive manual workloads and optimize resources." }
              ].map((item, i) => (
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} key={i} className="flex gap-6 items-start lg:flex-row-reverse text-left lg:text-right">
                  <div className={`text-4xl font-black ${item.color} opacity-80 shrink-0`}>{item.num}</div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 6. Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block">Automation Industries</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Industries We Serve <br/> <span className="text-blue-600">with Automation Solutions</span>
            </h2>
            <p className="text-slate-600 text-lg">
              We empower businesses across industry verticals with intelligent automation solutions that improve productivity, streamline workflows, and drive growth. From workflow automation to AI-powered business systems, we help organizations streamline operations, reduce manual efforts, and deliver better customer experiences.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            
            <div className="flex flex-col gap-8 w-full lg:w-1/3">
              <div className="flex items-center gap-4 bg-red-50/50 p-4 rounded-2xl border border-red-100">
                <div className="w-14 h-14 bg-red-500 text-white rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-red-500/30"><ShoppingCart className="w-6 h-6"/></div>
                <div>
                  <h4 className="font-bold text-slate-900">E-commerce</h4>
                  <p className="text-sm text-slate-600">Order processing automation, inventory management and customer support.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-orange-50/50 p-4 rounded-2xl border border-orange-100">
                <div className="w-14 h-14 bg-orange-500 text-white rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/30"><Building className="w-6 h-6"/></div>
                <div>
                  <h4 className="font-bold text-slate-900">Real Estate</h4>
                  <p className="text-sm text-slate-600">CRM workflows, inquiry systems and document automation.</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="w-64 h-64 bg-slate-100 rounded-full flex items-center justify-center border-8 border-white shadow-2xl relative overflow-hidden p-6">
                <div className="absolute inset-0 bg-blue-600 opacity-5 rounded-full"></div>
                <div className="text-center relative z-10">
                   <Network className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                   <div className="font-black text-slate-900 text-xl tracking-wide uppercase">Industries</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8 w-full lg:w-1/3">
              <div className="flex items-center gap-4 bg-green-50/50 p-4 rounded-2xl border border-green-100">
                <div className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-green-500/30"><DollarSign className="w-6 h-6"/></div>
                <div>
                  <h4 className="font-bold text-slate-900">FinTech</h4>
                  <p className="text-sm text-slate-600">Transaction monitoring and financial workflow automation systems.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-blue-50/50 p-4 rounded-2xl border border-blue-100">
                <div className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/30"><HeartPulse className="w-6 h-6"/></div>
                <div>
                  <h4 className="font-bold text-slate-900">Healthcare</h4>
                  <p className="text-sm text-slate-600">Patient automation and AI-powered healthcare support systems.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-purple-50/50 p-4 rounded-2xl border border-purple-100">
                <div className="w-14 h-14 bg-purple-500 text-white rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/30"><GraduationCap className="w-6 h-6"/></div>
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
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-slate-900 mb-4">Technologies Used in Business Automation</h3>
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
              <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <tech.icon className="w-6 h-6 text-blue-600 shrink-0" />
                <span className="font-bold text-slate-700">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. AI-Powered Automation */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center bg-blue-700/50 rounded-[2.5rem] p-8 md:p-12 border border-white/10 backdrop-blur-sm">
            
            <div className="lg:col-span-7 text-white">
              <span className="inline-block bg-white/10 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
                AI Automation
              </span>
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                AI-Powered Automation for <br/> <span className="text-blue-300">Modern Businesses</span>
              </h2>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                Artificial intelligence is changing the future of automation. AI-powered business systems can analyze data, predict outcomes, and make intelligent decisions automatically.
              </p>
              <div className="text-sm font-medium text-blue-200 italic border-l-4 border-blue-400 pl-4">
                By combining AI with automation, businesses create smarter digital ecosystems that adapt and grow over time.
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 rounded-2xl p-8 border border-white/20">
              <p className="text-white font-bold text-lg mb-6">Our solutions help you:</p>
              <ul className="space-y-4">
                {[
                  "Automate customer interactions",
                  "Generate business insights",
                  "Improve operational efficiency",
                  "Enable predictive analytics",
                  "Enhance decision-making"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            
            <div className="lg:col-span-2">
               <div className="mb-6 relative inline-block">
                <span className="bg-blue-600 text-white px-5 py-2 rounded-r-full font-bold text-sm tracking-wider uppercase shadow-md relative z-10">
                  WebCodian Advantage
                </span>
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 rotate-45 z-0"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
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
                  <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex items-center gap-4 hover:shadow-md transition-shadow">
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

      {/* 10. CTA */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 items-center bg-slate-800 rounded-[2rem] p-8 md:p-12 shadow-2xl border border-slate-700">
            <div className="md:col-span-2 text-white">
              <span className="inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Intelligent Automation</span>
              <h2 className="text-3xl font-black mb-4">Transform Your Business with Automation</h2>
              <p className="text-slate-400 mb-4">Ready to automate your business processes and improve operational efficiency? WebCodian provides scalable Business Automation Solutions designed to optimize workflows and accelerate growth.</p>
              <p className="text-slate-400 font-medium">Contact our team today to build intelligent automation systems for your business.</p>
            </div>
            <div className="md:col-span-1 md:text-right text-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full transition-colors w-full sm:w-auto text-lg shadow-lg shadow-blue-600/20">
                Contact Our Team <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PremiumProjectCTA />
    </main>
  );
}
