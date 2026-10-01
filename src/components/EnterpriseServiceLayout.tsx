"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle2, ArrowRight, Settings, Cpu, ShieldCheck, 
  BarChart, Layers, Users, Zap
} from "lucide-react";
import { EnterpriseSection } from "./EnterpriseSection";
import { EnterpriseSectionHeader } from "./EnterpriseSectionHeader";
import Link from "next/link";

interface ServiceData {
  title: string;
  overview: string;
  challenges: { title: string; desc: string }[];
  solutions: { title: string; desc: string; icon?: React.ReactNode }[];
  techStack: string[];
  process: { step: string; title: string; desc: string }[];
  benefits: { title: string; desc: string }[];
  industries: string[];
  faqs: { q: string; a: string }[];
  image1?: string;
  image2?: string;
}

export function EnterpriseServiceLayout({ data }: { data: ServiceData }) {
  return (
    <div className="w-full bg-white overflow-hidden">
      
      {/* 1. Business Overview */}
      <EnterpriseSection padding="large">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-black text-[var(--heading)] mb-6">Business Overview</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">{data.overview}</p>
            
            <h3 className="text-xl font-bold text-[var(--heading)] mb-4">Core Technologies</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {data.techStack.map((tech, idx) => (
                <span key={idx} className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-700 font-bold text-sm rounded-full">
                  {tech}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-bold text-[var(--heading)] mb-4">Industries Served</h3>
            <div className="flex flex-wrap gap-2">
              {data.industries.map((ind, idx) => (
                <span key={idx} className="text-sm font-semibold text-[var(--primary)] bg-blue-50 px-3 py-1 rounded-md">
                  {ind}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
            <img src={data.image1 || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"} alt="Technology Overview" className="rounded-[24px] shadow-2xl relative z-10 w-full h-[500px] object-cover" />
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-slate-100 rounded-[24px] z-0 hidden md:block"></div>
          </motion.div>
        </div>
      </EnterpriseSection>

      {/* 2. Challenges & Solutions */}
      <EnterpriseSection background="slate" padding="large">
        <EnterpriseSectionHeader badge="The Gap vs The Bridge" title="Overcoming Industry Challenges" />
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Challenges */}
          <div className="bg-white p-10 rounded-[24px] shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-red-600 mb-8 flex items-center gap-3">
              <Zap className="w-6 h-6" /> Common Challenges
            </h3>
            <div className="space-y-6">
              {data.challenges.map((challenge, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-1">✕</div>
                  <div>
                    <h4 className="font-bold text-[var(--heading)]">{challenge.title}</h4>
                    <p className="text-slate-600 text-sm mt-1">{challenge.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Solutions */}
          <div className="bg-[var(--heading)] p-10 rounded-[24px] shadow-xl text-white">
            <h3 className="text-2xl font-bold text-[var(--primary)] mb-8 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6" /> Our Solutions
            </h3>
            <div className="space-y-6">
              {data.solutions.map((solution, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--primary)]/20 text-[var(--primary)] flex items-center justify-center shrink-0 mt-1">✓</div>
                  <div>
                    <h4 className="font-bold text-white">{solution.title}</h4>
                    <p className="text-slate-300 text-sm mt-1">{solution.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </EnterpriseSection>

      {/* 3. Process */}
      <EnterpriseSection padding="large">
        <EnterpriseSectionHeader badge="Methodology" title="Our Agile Development Process" subtitle="A streamlined, transparent, and iterative approach to ensure rapid delivery and uncompromising quality." />
        
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {data.process.map((step, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="relative bg-white p-8 rounded-[24px] border border-slate-100 shadow-sm hover:border-[var(--primary)] transition-colors">
              <div className="text-5xl font-black text-slate-100 absolute top-4 right-6 pointer-events-none">{step.step}</div>
              <h4 className="text-xl font-bold text-[var(--heading)] mb-3 relative z-10 mt-6">{step.title}</h4>
              <p className="text-slate-600 text-sm relative z-10">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </EnterpriseSection>

      {/* 4. Benefits */}
      <EnterpriseSection background="slate" padding="large">
        <EnterpriseSectionHeader badge="Value Add" title="Key Business Benefits" />
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {data.benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[24px] shadow-sm border border-slate-100 text-center">
              <div className="w-16 h-16 bg-blue-50 text-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[var(--heading)] mb-3">{benefit.title}</h4>
              <p className="text-slate-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </EnterpriseSection>

      {/* 5. CTA */}
      <EnterpriseSection padding="large">
        <div className="bg-[var(--primary)] rounded-[32px] p-12 lg:p-20 text-center text-white">
          <h2 className="text-4xl font-black mb-6">Ready to Build Your {data.title}?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Partner with us to engineer a robust, scalable solution tailored to your enterprise needs.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[var(--heading)] rounded-[18px] font-black text-lg shadow-xl hover:-translate-y-1 transition-all">
            Schedule a Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </EnterpriseSection>
    </div>
  );
}
