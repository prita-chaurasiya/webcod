"use client";

import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";
import { Bot, Zap, Shield, Cpu, Layers, Link as LinkIcon, Database, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      
      {/* 1. Breadcrumb Section */}
      <div 
        className="relative py-24 bg-[#3b70e0] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(230, 64, 64, 0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')"
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 capitalize tracking-tight">AI & SaaS Product</h1>
            <ul className="flex items-center gap-2 text-white/90 font-medium uppercase text-sm tracking-wider">
              <li>
                <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              </li>
              <li className="text-white/60">/</li>
              <li className="text-white font-bold capitalize">ai saas product</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="py-20 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white lg:pr-12"
            >
              <span className="inline-block bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full mb-6 uppercase font-bold text-sm tracking-widest border border-blue-500/30">
                Solutions
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-[1.15]">
                AI & SaaS Product Development Solutions for Scalable Digital Businesses
              </h1>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                The next generation of software is intelligent, cloud-native, and subscription-driven. At WebCodian, we specialize in AI SaaS product development — building scalable, AI-powered platforms that help startups, enterprises, and digital-first businesses launch and grow recurring-revenue products.
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                From multi-tenant SaaS applications to intelligent automation platforms, we engineer cloud-based digital products designed for performance, security, and long-term business growth.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-4 md:p-8"
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
                alt="AI SaaS Solutions" 
                className="w-full rounded-3xl shadow-2xl shadow-blue-900/50 border border-slate-700/50"
              />
              <div className="text-center mt-6 text-slate-400 italic text-sm">
                *Visualizing scalable growth through technology*
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. What Are AI & SaaS Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 lg:pr-8">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-[#2eb872]">
                What Are AI & SaaS Products?
              </h2>
              <p className="text-slate-600 mb-5 leading-relaxed text-lg">
                AI & SaaS products combine artificial intelligence with the Software as a Service delivery model — creating intelligent, cloud-hosted applications that users access anywhere via subscription.
              </p>
              <p className="text-slate-600 mb-5 leading-relaxed text-lg">
                Unlike traditional licensed software, SaaS platforms are continuously updated in the cloud, eliminating installation overhead and reducing total cost of ownership. When AI is embedded into the core, these platforms can automate complex workflows, generate actionable insights from data, and deliver personalized experiences at scale.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg font-medium text-slate-800">
                For businesses, AI SaaS products represent one of the most efficient paths to recurring revenue, faster time-to-market, and scalable digital growth.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="relative py-12 px-4 bg-slate-50 rounded-3xl border border-slate-100 shadow-inner">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  
                  {/* Left Column Cards */}
                  <div className="md:col-span-1 flex flex-col gap-4 text-center md:text-right">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                      <h6 className="font-bold text-slate-900 mb-1 text-sm">Market Research</h6>
                      <p className="text-slate-500 text-xs">Conduct Market Research</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                      <h6 className="font-bold text-slate-900 mb-1 text-sm">Budgeting</h6>
                      <p className="text-slate-500 text-xs">Estimate the Budget</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                      <h6 className="font-bold text-slate-900 mb-1 text-sm">Business Model</h6>
                      <p className="text-slate-500 text-xs">Determine Business Model</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                      <h6 className="font-bold text-slate-900 mb-1 text-sm">Tech Stack</h6>
                      <p className="text-slate-500 text-xs">Define Technology Stack</p>
                    </div>
                  </div>

                  {/* Center Hub */}
                  <div className="md:col-span-1 flex justify-center items-center py-6 md:py-0">
                    <div className="w-24 h-24 bg-blue-600 rounded-full flex flex-col items-center justify-center text-white shadow-xl shadow-blue-600/30 ring-8 ring-blue-50">
                      <Database className="w-8 h-8 mb-1" />
                      <span className="font-bold text-xs uppercase tracking-wider">SaaS</span>
                    </div>
                  </div>

                  {/* Right Column Cards */}
                  <div className="md:col-span-1 flex flex-col gap-4 text-center md:text-left">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                      <h6 className="font-bold text-slate-900 mb-1 text-sm">Develop MVP</h6>
                      <p className="text-slate-500 text-xs">Develop an MVP</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                      <h6 className="font-bold text-slate-900 mb-1 text-sm">Test & Iterate</h6>
                      <p className="text-slate-500 text-xs">Test And Iterate</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                      <h6 className="font-bold text-slate-900 mb-1 text-sm">Final Release</h6>
                      <p className="text-slate-500 text-xs">Check & Release Final Version</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                      <h6 className="font-bold text-slate-900 mb-1 text-sm">Maintenance</h6>
                      <p className="text-slate-500 text-xs">Support And Maintenance</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Services Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-blue-600 mb-4">Our AI & SaaS Product Development Services</h2>
            <p className="text-slate-600 text-lg">
              We provide end-to-end AI SaaS product development services — from initial architecture to post-launch support — tailored to modern digital business models.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group">
              <div className="text-blue-600 mb-4 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Layers className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Custom SaaS Product Development</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                We design and build scalable SaaS platforms from the ground up, with secure cloud architecture, multi-tenant systems, role-based access control, and subscription management built in.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group">
              <div className="text-blue-600 mb-4 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Cpu className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">AI-Powered SaaS Applications</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                Integrate intelligent features like predictive analytics, natural language processing (NLP), machine learning recommendation engines, and computer vision directly into your SaaS product to create a competitive advantage.
              </p>
            </div>

          </div>

        </div>
      </section>

      <PremiumProjectCTA />
    </main>
  );
}
