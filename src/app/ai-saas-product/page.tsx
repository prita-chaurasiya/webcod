"use client";

import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";
import { PremiumFeatureCard } from "@/components/PremiumFeatureCard";
import { Server, Database, Layers, ArrowRight, Shield, Cpu, Cloud, Code2, Globe } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="bg-white min-h-screen font-sans">
      
      {/* 1. Breadcrumb Section */}
      <div 
        className="relative py-12 md:py-16 lg:py-16 md:py-12 bg-[#3b70e0] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(10, 20, 60, 0.7), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop')"
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 capitalize tracking-tight drop-shadow-md">
              AI SaaS Product Development
            </h1>
            <ul className="flex items-center gap-3 text-indigo-100 font-bold uppercase text-sm tracking-widest">
              <li>
                <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              </li>
              <li className="text-indigo-300">/</li>
              <li className="text-white">AI SAAS PLATFORMS</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="py-12 md:py-16 lg:py-16 md:py-12 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-100 rounded-full blur-[150px] opacity-50 pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8 inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-bold text-xs tracking-widest uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
                Scalable Platforms
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
                Architecting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Future of SaaS</span>
              </h2>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
                We design, build, and scale enterprise-grade Software as a Service products with cutting-edge artificial intelligence seamlessly integrated into the core.
              </p>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                Whether you're building a highly scalable multi-tenant architecture from scratch or injecting predictive analytics into an existing legacy platform, our elite engineering team delivers robust, cloud-native solutions.
              </p>
              
              <div className="flex flex-wrap gap-5">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-900 text-white font-bold py-4 px-10 rounded-[18px] shadow-lg hover:-translate-y-1 transition-all group">
                  Build Your SaaS <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent mix-blend-overlay z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" 
                  alt="SaaS Analytics Dashboard" 
                  className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              
              {/* Floating Element */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 flex items-center gap-5 z-20"
              >
                <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <Cloud className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">99.99%</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Global Uptime</div>
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
            <h2 className="text-3xl md:text-5xl font-bold text-[#0f2c59] mb-6 tracking-tight">SaaS Engineering Capabilities</h2>
            <p className="text-xl text-slate-600 font-medium">
              We leverage cloud-native infrastructure, multi-tenant databases, and advanced AI to build software that scales infinitely.
            </p>
          </div>

          <div className="space-y-12">
            <PremiumFeatureCard 
              number="01"
              imageTitle="Architecture"
              imageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
              category="MULTI-TENANT INFRASTRUCTURE"
              title="Scalable Cloud Architecture"
              description="We architect robust multi-tenant systems on AWS, Azure, and Google Cloud. Our serverless deployments ensure your application handles spikes in traffic gracefully without infrastructure overhead."
              linkText="Explore cloud services"
              href="/services"
              reverse={false}
            />

            <PremiumFeatureCard 
              number="02"
              imageTitle="AI Integration"
              imageSrc="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
              category="INTELLIGENT FEATURES"
              title="Native AI Capabilities"
              description="Transform basic SaaS into an intelligent product. We embed predictive analytics, automated reporting, computer vision, and NLP directly into your product's core workflows."
              linkText="Explore AI integrations"
              href="/generative-ai"
              reverse={true}
            />

            <PremiumFeatureCard 
              number="03"
              imageTitle="Monetization"
              imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
              category="SUBSCRIPTION BILLING"
              title="Enterprise Billing & Security"
              description="Complete integration with Stripe, Chargebee, and Auth0. We implement enterprise-grade RBAC (Role-Based Access Control), SSO, and complex usage-based billing logic."
              linkText="Explore our solutions"
              href="/custom-software-development"
              reverse={false}
            />
          </div>
        </div>
      </section>

      {/* 4. Strategic Approach (Spacious Layout) */}
      <section className="py-12 md:py-16 lg:py-16 md:py-12 bg-slate-50 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <div>
              <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4 block">Development Lifecycle</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
                Our SaaS Engineering Process
              </h2>
              
              <div className="space-y-12">
                {[
                  { num: "01", title: "Discovery & UX", desc: "We map out user journeys, complex permissions, and billing hierarchies to create a seamless, intuitive dashboard experience." },
                  { num: "02", title: "Agile Engineering", desc: "Our elite engineers build the platform using React, Node.js, and Python, delivering robust features in bi-weekly sprints." },
                  { num: "03", title: "Cloud Deployment", desc: "We set up automated CI/CD pipelines, containerized deployments, and load balancers to ensure zero-downtime updates." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="text-5xl font-bold text-slate-400 group-hover:text-indigo-500 transition-colors shrink-0">
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
                   <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.8)]"></div>
                 </div>
                 <div className="w-full h-px bg-slate-700/50 relative">
                   <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-400"></div>
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
