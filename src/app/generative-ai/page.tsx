"use client";

import { ServiceBannerShort } from "@/components/ServiceBannerShort";
import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";
import { PremiumDigiatureServiceLayout } from "@/components/PremiumDigiatureServiceLayout";
import { PremiumAiConsultationForm } from "@/components/PremiumAiConsultationForm";
import { Bot, Zap, Shield, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <ServiceBannerShort 
        title="Generative AI Solutions"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Generative AI Solutions" }
        ]}
        bgImage="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop"
      />
      
      <PremiumDigiatureServiceLayout activeService="generative-ai">
        <div className="space-y-12">
          {/* Main Content Area */}
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                Next-Generation <span className="text-blue-600">Generative AI Solutions</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
                WebCodian delivers cutting-edge generative ai solutions that empower businesses to automate workflows, scale operations, and drive unprecedented growth through artificial intelligence.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our expert engineers integrate advanced models and machine learning algorithms directly into your existing infrastructure, providing seamless intelligence exactly where you need it most.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[2rem] border border-white shadow-xl shadow-blue-900/5 group">
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-[2rem]"></div>
                <motion.div 
                  animate={{ y: [-10, 10, -10] }} 
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 w-full aspect-square rounded-[1.5rem] overflow-hidden border-4 border-white shadow-md bg-white flex items-center justify-center"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop" 
                    alt="Generative AI Solutions Visualization" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent mix-blend-overlay"></div>
                </motion.div>
                
                {/* Floating decorative elements */}
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center z-20">
                  <Cpu className="w-5 h-5 text-blue-600" />
                </motion.div>
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-600 rounded-2xl shadow-xl flex items-center justify-center z-20 rotate-12">
                  <Bot className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Key Benefits Grid */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-blue-600 pl-4">Key Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Zap, title: "Unmatched Speed", desc: "Process complex datasets in seconds rather than hours." },
                { icon: Shield, title: "Enterprise Security", desc: "Data protection protocols built into the core logic." },
                { icon: Cpu, title: "Scalable Architecture", desc: "Designed to grow effortlessly with your user base." },
                { icon: Bot, title: "Intelligent Automation", desc: "Reduce manual human errors by up to 99%." }
              ].map((benefit, idx) => (
                <motion.div whileHover={{ y: -5, scale: 1.02 }} key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">{benefit.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Consultation Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 bg-slate-900 rounded-[2rem] p-8 md:p-12 relative overflow-hidden shadow-2xl"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2eb872]/10 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="relative z-10 grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-2 text-white">
                <h3 className="text-3xl font-black mb-4 leading-tight">Transform Your Business with AI</h3>
                <p className="text-slate-400 mb-8 font-medium">Ready to see how our AI solutions can drive growth and efficiency? Book a free consultation with our AI experts today.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><Zap className="w-4 h-4 text-[#2eb872]" /></div>
                    <span className="text-sm font-semibold">Custom Strategy Tailored to You</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><Shield className="w-4 h-4 text-[#2eb872]" /></div>
                    <span className="text-sm font-semibold">Secure & Scalable Solutions</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3 bg-white rounded-3xl p-6 md:p-8 shadow-xl">
                <PremiumAiConsultationForm />
              </div>
            </div>
          </motion.div>
        </div>
      </PremiumDigiatureServiceLayout>

      <PremiumProjectCTA />
    </main>
  );
}
