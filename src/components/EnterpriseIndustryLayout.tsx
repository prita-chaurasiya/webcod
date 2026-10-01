"use client";

import { motion } from "framer-motion";
import { 
  Building2, ArrowRight, ShieldCheck, Cpu, Zap, Activity
} from "lucide-react";
import { EnterpriseSection } from "./EnterpriseSection";
import { EnterpriseSectionHeader } from "./EnterpriseSectionHeader";
import Link from "next/link";

interface IndustryData {
  title: string;
  overview: string;
  challenges: { title: string; desc: string }[];
  solutions: { title: string; desc: string }[];
  technologies: string[];
  outcomes: { metric: string; desc: string }[];
  image1?: string;
  image2?: string;
}

export function EnterpriseIndustryLayout({ data }: { data: IndustryData }) {
  return (
    <div className="w-full bg-white overflow-hidden">
      
      {/* 1. Industry Overview */}
      <EnterpriseSection padding="large">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--heading)] mb-6">Industry Overview</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">{data.overview}</p>
            <h3 className="text-xl font-bold text-[var(--heading)] mb-4">Driving Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {data.technologies.map((tech, idx) => (
                <span key={idx} className="px-4 py-2 bg-blue-50 text-[var(--primary)] font-bold text-sm rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
            <img src={data.image1 || "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"} alt={`${data.title} Industry`} className="rounded-[24px] shadow-2xl relative z-10 w-full h-[500px] object-cover" />
            <div className="absolute top-8 -right-8 w-64 h-64 bg-[var(--primary)] rounded-[24px] z-0 hidden md:block opacity-10"></div>
          </motion.div>
        </div>
      </EnterpriseSection>

      {/* 2. Challenges & Solutions */}
      <EnterpriseSection background="slate" padding="large">
        <EnterpriseSectionHeader badge="Transformation" title="Modernizing the Sector" />
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Challenges */}
          <div className="bg-white p-10 rounded-[24px] shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-[var(--heading)] mb-8 flex items-center gap-3">
              Industry Bottlenecks
            </h3>
            <div className="space-y-6">
              {data.challenges.map((challenge, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-1">!</div>
                  <div>
                    <h4 className="font-bold text-[var(--heading)]">{challenge.title}</h4>
                    <p className="text-slate-600 text-sm mt-1">{challenge.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Solutions */}
          <div className="bg-white p-10 rounded-[24px] shadow-sm border border-slate-100 border-t-4 border-t-[var(--primary)]">
            <h3 className="text-2xl font-bold text-[var(--heading)] mb-8 flex items-center gap-3">
              Our Digital Interventions
            </h3>
            <div className="space-y-6">
              {data.solutions.map((solution, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center shrink-0 mt-1">✓</div>
                  <div>
                    <h4 className="font-bold text-[var(--heading)]">{solution.title}</h4>
                    <p className="text-slate-600 text-sm mt-1">{solution.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </EnterpriseSection>

      {/* 3. Business Outcomes */}
      <EnterpriseSection padding="large">
        <EnterpriseSectionHeader badge="Impact" title="Measurable Business Outcomes" />
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {data.outcomes.map((outcome, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 text-center hover:-translate-y-2 transition-all">
              <div className="text-4xl font-bold text-[var(--primary)] mb-4">{outcome.metric}</div>
              <p className="text-slate-600 font-medium">{outcome.desc}</p>
            </div>
          ))}
        </div>
      </EnterpriseSection>

      {/* 4. CTA */}
      <EnterpriseSection background="navy" padding="large">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Innovate Your {data.title} Business Today</h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">Join the market leaders who have already partnered with us to undergo complete digital transformation.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-[var(--primary)] hover:bg-blue-500 text-white rounded-[18px] font-bold text-lg shadow-xl hover:-translate-y-1 transition-all">
            Discuss Your Requirements <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </EnterpriseSection>
    </div>
  );
}
