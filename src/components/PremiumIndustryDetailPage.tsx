"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight, CheckCircle2, Check } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";

export interface IndustryPageData {
  id: string;
  title: string;
  eyebrow: string;
  heroDescription: string;
  heroImage: string;
  introHeading: string;
  introDescription: string;
  challenges: { id: string; title: string; description: string }[];
  solutions: { icon: string; title: string; description: string }[];
  featuredVisual: { image: string; overlayText: string };
  whatWeCanBuild: string[];
  useCases: { title: string; items: string[] }[];
  technologies: string[];
}

export function PremiumIndustryDetailPage({ data }: { data: IndustryPageData }) {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-blue-500/30">
      
      {/* 1. Industry Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
        {/* Subtle abstract background */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px]"></div>
          <div className="absolute top-40 -left-40 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              {/* Minimal Breadcrumb */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-8"
              >
                <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4 text-slate-300" />
                <span className="text-slate-400">Industries</span>
                <ChevronRight className="w-4 h-4 text-slate-300" />
                <span className="text-slate-900">{data.title}</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold tracking-widest uppercase mb-6"
              >
                {data.eyebrow}
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight"
              >
                {data.title}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-xl font-medium"
              >
                {data.heroDescription}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <Link href="/quote" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 hover:shadow-xl hover:-translate-y-0.5 group">
                  Discuss Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            <div className="order-1 lg:order-2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, clipPath: "inset(10% 10% 10% 10% round 32px)" }} 
                animate={{ opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0% round 32px)" }} 
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/3] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border border-white/50"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent mix-blend-overlay z-10"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={data.heroImage} alt={`${data.title} Solutions`} className="w-full h-full object-cover" />
                
                {/* Subtle floating UI layer */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/50 z-20 flex items-center gap-4 hidden md:flex"
                >
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Industry Standard</div>
                    <div className="text-xs font-medium text-slate-500">Secure & Scalable</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Editorial Overview */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <div className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-6">About {data.title}</div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                {data.introHeading}
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                {data.introDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Industry Challenges */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16">
            <h2 className="text-3xl font-black text-slate-900">Key Challenges We Solve</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {data.challenges.map((challenge, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="text-4xl md:text-5xl font-black text-slate-200 group-hover:text-blue-500 transition-colors font-mono">
                  {challenge.id}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{challenge.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Digital Solutions */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900"></div>
        </div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Digital Solutions for {data.title}</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Purpose-built platforms and tools designed to accelerate your operational workflows and customer experiences.</p>
          </div>
          
          <div className="flex flex-col gap-4">
            {data.solutions.map((solution, idx) => {
              const IconComponent = (LucideIcons as any)[solution.icon] || LucideIcons.Code2;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group relative bg-slate-800/50 hover:bg-slate-800 backdrop-blur-md border border-slate-700/50 hover:border-blue-500/50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 transition-all cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-16 h-16 rounded-xl bg-slate-700/50 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-all text-slate-300">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-slate-100 group-hover:text-white transition-colors">{solution.title}</h3>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors">{solution.description}</p>
                  </div>
                  <div className="shrink-0 w-12 h-12 rounded-full border border-slate-600 flex items-center justify-center group-hover:border-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all transform md:group-hover:translate-x-2">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Featured Visual */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-[2rem] overflow-hidden group shadow-2xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={data.featuredVisual.image} alt="Dashboard Preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-16">
              <h3 className="text-3xl md:text-5xl font-black text-white max-w-3xl leading-tight">
                {data.featuredVisual.overlayText}
              </h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. What We Can Build & Use Cases (Split) */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20">
            
            {/* What We Can Build */}
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-10">What We Can Build</h2>
              <div className="space-y-6">
                {data.whatWeCanBuild.map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-center border-b border-slate-100 pb-6">
                    <span className="text-lg font-bold text-blue-600 font-mono shrink-0">0{idx + 1}</span>
                    <span className="text-xl font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-10">Industry Use Cases</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {data.useCases.map((useCase, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-slate-900 mb-4">{useCase.title}</h4>
                    <ul className="space-y-3">
                      {useCase.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600">
                          <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="font-medium text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Technology Stack */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-12">Core Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {data.technologies.map((tech, idx) => (
              <span key={idx} className="px-6 py-3 bg-white rounded-full border border-slate-200 text-slate-700 font-bold shadow-sm hover:border-blue-500 hover:text-blue-600 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Process & Why Us */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-black mb-12">How We Build</h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent hidden md:block">
                {[
                  { title: "Discover", desc: "Understanding your industry workflows." },
                  { title: "Strategy", desc: "Mapping the technology architecture." },
                  { title: "Design", desc: "Creating intuitive user interfaces." },
                  { title: "Development", desc: "Writing secure, scalable code." },
                  { title: "Launch", desc: "Deployment and ongoing support." }
                ].map((step, idx) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-slate-700 group-hover:bg-blue-500 text-slate-400 group-hover:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors z-10">
                      <span className="text-xs font-bold">{idx + 1}</span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-700 bg-slate-800/50 shadow-sm">
                      <h4 className="font-bold text-lg">{step.title}</h4>
                      <p className="text-sm text-slate-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile timeline */}
              <div className="space-y-6 md:hidden">
                {[
                  { title: "Discover", desc: "Understanding your industry workflows." },
                  { title: "Strategy", desc: "Mapping the technology architecture." },
                  { title: "Design", desc: "Creating intuitive user interfaces." },
                  { title: "Development", desc: "Writing secure, scalable code." },
                  { title: "Launch", desc: "Deployment and ongoing support." }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{step.title}</h4>
                      <p className="text-sm text-slate-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black mb-12">Why WebCodian</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700 text-center">
                  <div className="text-4xl font-black text-white mb-2">6</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Years Experience</div>
                </div>
                <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700 text-center">
                  <div className="text-4xl font-black text-white mb-2">15+</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Team Members</div>
                </div>
                <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700 text-center">
                  <div className="text-4xl font-black text-white mb-2">100%</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Satisfaction</div>
                </div>
                <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700 text-center">
                  <div className="text-4xl font-black text-white mb-2">24/7</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <PremiumProjectCTA />

    </main>
  );
}
