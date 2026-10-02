"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  CheckCircle2, ArrowRight, Zap, ShieldCheck,
  TrendingUp, Star, ChevronRight, Clock, Users, BarChart3,
  Globe, Smartphone, Database, Cloud, Code, Settings, Monitor, Lock, Cpu, Server, Layers, Layout, Box, Puzzle, Network, Sparkles, GitBranch
} from "lucide-react";

const featureIcons = [Zap, Globe, Smartphone, Database, Cloud, Code, Settings, Users, Monitor, Lock, Cpu, Server, Layers, Layout, Box, Puzzle, Network, BarChart3, TrendingUp, ShieldCheck];

export interface SolutionService {
  icon: string;
  title: string;
  desc: string;
}

export interface SolutionStat {
  metric: string;
  label: string;
  desc: string;
}

export interface SolutionFAQ {
  q: string;
  a: string;
}

export interface SolutionPageData {
  // Hero
  heroTitle: string;
  heroSubtitle: string;
  heroImg: string;
  breadcrumbLabel: string;
  category: string;

  // Overview
  overviewHeading: string;
  overviewText: string;
  overviewImg: string;
  overviewBullets: string[];

  // Challenges
  challenges: { title: string; desc: string }[];

  // Why Need
  whyPoints: { title: string; desc: string }[];

  // Solutions
  solutions: { title: string; desc: string }[];

  // Features
  features: SolutionService[];

  // Benefits
  benefits: { title: string; desc: string }[];

  // Tech Stack
  techStack: string[];

  // Process
  process: { step: string; title: string; desc: string }[];

  // Industries
  industries: string[];

  // AI Opportunities
  aiPoints: { title: string; desc: string }[];

  // Security
  securityTitle: string;
  securityDesc: string;
  securityPoints: string[];
  securityImg: string;

  // Case Study
  caseStudy: {
    client: string;
    label: string;
    challenge: string;
    solution: string;
    result: string;
  };

  // Stats
  stats: SolutionStat[];

  // Support
  supportPoints: { title: string; desc: string }[];

  // FAQ
  faqs: SolutionFAQ[];

  // Related
  relatedServices: { label: string; href: string }[];

  // CTA
  ctaHeading: string;
  ctaDesc: string;
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const fadeLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const fadeRight = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export function SolutionPageTemplate({ data }: { data: SolutionPageData }) {
  return (
    <div className="bg-white overflow-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[80vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={data.heroImg} alt={data.heroTitle} className="w-full h-full object-cover animate-ken-burns" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/75 to-slate-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
        </div>
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-20 left-1/3 w-[500px] h-[300px] bg-orange-500/15 rounded-full blur-[100px] pointer-events-none z-0"
        />
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8 font-medium flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-white transition-colors">Solutions</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{data.breadcrumbLabel}</span>
          </nav>
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-5 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-bold tracking-widest uppercase"
            >
              {data.category}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              {data.heroTitle}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl"
            >
              {data.heroSubtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link href="/contact" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-600/30">
                Get Free Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/get-a-quote" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-xl backdrop-blur-sm transition-all hover:-translate-y-1">
                Request a Quote
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap gap-6 pt-8 border-t border-white/10"
            >
              {["500+ Projects Delivered", "99.9% Uptime SLA", "Agile Delivery", "ISO 27001 Security"].map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-white/70 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  {b}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div {...fadeLeft} className="lg:w-1/2">
              <div className="inline-block mb-5 px-4 py-1.5 bg-orange-50 text-orange-700 text-xs font-bold tracking-widest uppercase rounded-full border border-orange-100">
                Business Overview
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                {data.overviewHeading}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">{data.overviewText}</p>
              <ul className="space-y-3">
                {data.overviewBullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fadeRight} className="lg:w-1/2 relative">
              <img src={data.overviewImg} alt={data.overviewHeading} className="w-full h-[450px] object-cover rounded-3xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-b from-white to-slate-50 p-5 rounded-2xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-900">{data.stats[0]?.metric}</div>
                    <div className="text-sm text-slate-500">{data.stats[0]?.label}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CHALLENGES ── */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-5 px-4 py-1.5 bg-white/10 text-orange-300 text-xs font-bold tracking-widest uppercase rounded-full border border-white/10">
              Business Challenges
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Challenges We Solve
            </h2>
            <p className="text-slate-400 text-lg">Modern businesses face complex digital challenges. Here's what we address.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {data.challenges.map((c, idx) => {
              const colors = [
                { bg: "bg-orange-500/10", border: "hover:border-orange-400/50", glow: "hover:shadow-[0_8px_30px_rgba(59,130,246,0.2)]", numBg: "bg-orange-500/20", numText: "text-orange-400" },
                { bg: "bg-emerald-500/10", border: "hover:border-emerald-400/50", glow: "hover:shadow-[0_8px_30px_rgba(16,185,129,0.2)]", numBg: "bg-emerald-500/20", numText: "text-emerald-400" },
                { bg: "bg-purple-500/10", border: "hover:border-purple-400/50", glow: "hover:shadow-[0_8px_30px_rgba(168,85,247,0.2)]", numBg: "bg-purple-500/20", numText: "text-purple-400" },
                { bg: "bg-orange-500/10", border: "hover:border-orange-400/50", glow: "hover:shadow-[0_8px_30px_rgba(249,115,22,0.2)]", numBg: "bg-orange-500/20", numText: "text-orange-400" }
              ];
              const theme = colors[idx % colors.length];
              
              return (
                <motion.div
                  key={idx}
                  {...fadeUp}
                  transition={{ delay: idx * 0.08 }}
                  className={`flex gap-5 ${theme.bg} border border-white/5 p-7 rounded-[24px] ${theme.border} ${theme.glow} hover:-translate-y-1 transition-all duration-500 group backdrop-blur-sm`}
                >
                  <div className={`w-12 h-12 rounded-2xl ${theme.numBg} ${theme.numText} flex items-center justify-center shrink-0 text-xl font-bold group-hover:scale-110 transition-transform duration-500`}>
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{c.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY BUSINESSES NEED THIS ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-5 px-4 py-1.5 bg-orange-50 text-orange-700 text-xs font-bold tracking-widest uppercase rounded-full border border-orange-100">
              Why Invest
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why Businesses Need This Solution
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.whyPoints.map((w, idx) => {
              const colors = [
                { bg: "bg-orange-50/80", hoverBg: "hover:bg-orange-100/50", border: "hover:border-orange-300", glow: "hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)]", iconText: "text-orange-500", iconRing: "ring-orange-100" },
                { bg: "bg-emerald-50/80", hoverBg: "hover:bg-emerald-100/50", border: "hover:border-emerald-300", glow: "hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)]", iconText: "text-emerald-600", iconRing: "ring-emerald-100" },
                { bg: "bg-purple-50/80", hoverBg: "hover:bg-purple-100/50", border: "hover:border-purple-300", glow: "hover:shadow-[0_8px_30px_rgba(168,85,247,0.15)]", iconText: "text-purple-600", iconRing: "ring-purple-100" },
                { bg: "bg-orange-50/80", hoverBg: "hover:bg-orange-100/50", border: "hover:border-orange-300", glow: "hover:shadow-[0_8px_30px_rgba(249,115,22,0.15)]", iconText: "text-orange-600", iconRing: "ring-orange-100" }
              ];
              const theme = colors[idx % colors.length];
              
              return (
                <motion.div
                  key={idx}
                  {...fadeUp}
                  transition={{ delay: idx * 0.07 }}
                  className={`p-8 border border-transparent rounded-[24px] ${theme.bg} ${theme.border} ${theme.glow} ${theme.hoverBg} hover:-translate-y-1 transition-all duration-500 group backdrop-blur-sm relative overflow-hidden`}
                >
                  <div className={`absolute -right-10 -top-10 w-40 h-40 bg-white/40 rounded-full blur-[30px] group-hover:scale-150 transition-transform duration-700`}></div>
                  <div className={`w-14 h-14 bg-white ring-4 ${theme.iconRing} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 relative z-10`}>
                    <Zap className={`w-6 h-6 ${theme.iconText}`} />
                  </div>
                  <h3 className="text-slate-900 font-bold text-lg mb-3 relative z-10">{w.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed relative z-10">{w.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW WE SOLVE IT ── */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-5 px-4 py-1.5 bg-orange-50 text-orange-700 text-xs font-bold tracking-widest uppercase rounded-full border border-orange-100">
              WebCodian Approach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              How WebCodian Solves It
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {data.solutions.map((s, idx) => {
              const colors = [
                { bg: "bg-orange-50/80", hoverBg: "hover:bg-orange-100/50", border: "hover:border-orange-300", glow: "hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)]", iconText: "text-orange-500", iconBg: "bg-orange-100", iconRing: "ring-orange-50" },
                { bg: "bg-emerald-50/80", hoverBg: "hover:bg-emerald-100/50", border: "hover:border-emerald-300", glow: "hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)]", iconText: "text-emerald-600", iconBg: "bg-emerald-100", iconRing: "ring-emerald-50" },
                { bg: "bg-purple-50/80", hoverBg: "hover:bg-purple-100/50", border: "hover:border-purple-300", glow: "hover:shadow-[0_8px_30px_rgba(168,85,247,0.15)]", iconText: "text-purple-600", iconBg: "bg-purple-100", iconRing: "ring-purple-50" },
                { bg: "bg-orange-50/80", hoverBg: "hover:bg-orange-100/50", border: "hover:border-orange-300", glow: "hover:shadow-[0_8px_30px_rgba(249,115,22,0.15)]", iconText: "text-orange-600", iconBg: "bg-orange-100", iconRing: "ring-orange-50" }
              ];
              const theme = colors[idx % colors.length];
              
              return (
                <motion.div
                  key={idx}
                  {...fadeUp}
                  transition={{ delay: idx * 0.07 }}
                  className={`p-8 border border-transparent rounded-[24px] ${theme.bg} ${theme.border} ${theme.glow} ${theme.hoverBg} hover:-translate-y-1 transition-all duration-500 group backdrop-blur-sm flex gap-6`}
                >
                  <div className={`w-12 h-12 rounded-2xl ${theme.iconBg} ring-4 ${theme.iconRing} ${theme.iconText} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-lg mb-2 group-hover:text-slate-800">{s.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-5 px-4 py-1.5 bg-orange-50 text-orange-700 text-xs font-bold tracking-widest uppercase rounded-full border border-orange-100">
              Key Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              What's Included in Our Solution
            </h2>
            <p className="text-slate-600 text-lg">Enterprise-grade capabilities built into every engagement.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((f, idx) => {
              const isImage = f.icon.startsWith('http');
              const IconComp = featureIcons[idx % featureIcons.length];
              
              const colors = [
                { bg: "bg-orange-50/80", hoverBg: "hover:bg-orange-100/50", border: "hover:border-orange-300", glow: "hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)]", iconText: "text-orange-500", iconRing: "ring-orange-100" },
                { bg: "bg-emerald-50/80", hoverBg: "hover:bg-emerald-100/50", border: "hover:border-emerald-300", glow: "hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)]", iconText: "text-emerald-600", iconRing: "ring-emerald-100" },
                { bg: "bg-orange-50/80", hoverBg: "hover:bg-orange-100/50", border: "hover:border-orange-300", glow: "hover:shadow-[0_8px_30px_rgba(249,115,22,0.15)]", iconText: "text-orange-600", iconRing: "ring-orange-100" },
                { bg: "bg-fuchsia-50/80", hoverBg: "hover:bg-fuchsia-100/50", border: "hover:border-fuchsia-300", glow: "hover:shadow-[0_8px_30px_rgba(217,70,239,0.15)]", iconText: "text-fuchsia-600", iconRing: "ring-fuchsia-100" },
                { bg: "bg-cyan-50/80", hoverBg: "hover:bg-cyan-100/50", border: "hover:border-cyan-300", glow: "hover:shadow-[0_8px_30px_rgba(6,182,212,0.15)]", iconText: "text-cyan-600", iconRing: "ring-cyan-100" },
                { bg: "bg-rose-50/80", hoverBg: "hover:bg-rose-100/50", border: "hover:border-rose-300", glow: "hover:shadow-[0_8px_30px_rgba(225,29,72,0.15)]", iconText: "text-rose-600", iconRing: "ring-rose-100" }
              ];
              const theme = colors[idx % colors.length];
              
              return (
                <motion.div
                  key={idx}
                  {...fadeUp}
                  transition={{ delay: idx * 0.06 }}
                  className={`p-8 rounded-[24px] border border-transparent ${theme.bg} ${theme.border} ${theme.glow} ${theme.hoverBg} hover:-translate-y-1 transition-all duration-500 group backdrop-blur-sm relative overflow-hidden`}
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-white/50 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                  <div className={`w-14 h-14 bg-white shadow-sm ring-4 ${theme.iconRing} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 relative z-10`}>
                    {isImage ? (
                      <img src={f.icon} alt={f.title} className="w-8 h-8 object-contain" />
                    ) : (
                      <IconComp className={`w-7 h-7 ${theme.iconText}`} />
                    )}
                  </div>
                  <h3 className="text-slate-900 font-bold text-lg mb-3 relative z-10">{f.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed relative z-10">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BUSINESS BENEFITS ── */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-5 px-4 py-1.5 bg-orange-50 text-orange-700 text-xs font-bold tracking-widest uppercase rounded-full border border-orange-100">
              Business Benefits
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Measurable Benefits for Your Business
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.benefits.map((b, idx) => {
              const colors = [
                { bg: "bg-orange-50/80", border: "hover:border-orange-300", glow: "hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)]", iconText: "text-orange-500", iconRing: "ring-orange-100" },
                { bg: "bg-emerald-50/80", border: "hover:border-emerald-300", glow: "hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)]", iconText: "text-emerald-600", iconRing: "ring-emerald-100" },
                { bg: "bg-orange-50/80", border: "hover:border-orange-300", glow: "hover:shadow-[0_8px_30px_rgba(249,115,22,0.15)]", iconText: "text-orange-600", iconRing: "ring-orange-100" },
                { bg: "bg-purple-50/80", border: "hover:border-purple-300", glow: "hover:shadow-[0_8px_30px_rgba(168,85,247,0.15)]", iconText: "text-purple-600", iconRing: "ring-purple-100" },
                { bg: "bg-rose-50/80", border: "hover:border-rose-300", glow: "hover:shadow-[0_8px_30px_rgba(225,29,72,0.15)]", iconText: "text-rose-600", iconRing: "ring-rose-100" }
              ];
              const theme = colors[idx % colors.length];
              
              return (
                <motion.div
                  key={idx}
                  {...fadeUp}
                  transition={{ delay: idx * 0.07 }}
                  className={`flex gap-5 p-8 rounded-[24px] border border-transparent ${theme.bg} ${theme.border} ${theme.glow} hover:-translate-y-1 transition-all duration-500 group backdrop-blur-sm`}
                >
                  <div className={`w-12 h-12 rounded-2xl bg-white shadow-sm ring-4 ${theme.iconRing} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                    <Star className={`w-6 h-6 ${theme.iconText}`} />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold mb-2 text-lg">{b.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center">
          <div className="inline-block mb-5 px-4 py-1.5 bg-orange-50 text-orange-700 text-xs font-bold tracking-widest uppercase rounded-full border border-orange-100">
            Technology Stack
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Enterprise-Grade Technologies
          </h2>
          <p className="text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
            We use battle-tested tools and frameworks trusted by the world's leading technology companies.
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {data.techStack.map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="px-6 py-3 bg-slate-50 border border-slate-200 text-slate-800 rounded-xl font-bold text-sm hover:border-orange-500 hover:text-orange-500 hover:bg-orange-50 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEVELOPMENT PROCESS ── */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-5 px-4 py-1.5 bg-orange-50 text-orange-700 text-xs font-bold tracking-widest uppercase rounded-full border border-orange-100">
              Development Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Proven Delivery Framework
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-16 left-[12.5%] w-3/4 h-0.5 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 z-0" />
            {data.process.map((p, idx) => {
              const colors = [
                { bg: "bg-orange-50/80", border: "hover:border-orange-300", glow: "hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)]", numBg: "bg-orange-500", ring: "ring-orange-100" },
                { bg: "bg-emerald-50/80", border: "hover:border-emerald-300", glow: "hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)]", numBg: "bg-emerald-600", ring: "ring-emerald-100" },
                { bg: "bg-orange-50/80", border: "hover:border-orange-300", glow: "hover:shadow-[0_8px_30px_rgba(249,115,22,0.15)]", numBg: "bg-orange-600", ring: "ring-orange-100" },
                { bg: "bg-purple-50/80", border: "hover:border-purple-300", glow: "hover:shadow-[0_8px_30px_rgba(168,85,247,0.15)]", numBg: "bg-purple-600", ring: "ring-purple-100" }
              ];
              const theme = colors[idx % colors.length];
              
              return (
                <motion.div
                  key={idx}
                  {...fadeUp}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative z-10 p-8 rounded-[24px] border border-transparent ${theme.bg} ${theme.border} ${theme.glow} text-center hover:-translate-y-1 transition-all duration-500 group backdrop-blur-sm`}
                >
                  <div className={`w-14 h-14 rounded-2xl ${theme.numBg} text-white flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-md ring-4 ${theme.ring} group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500`}>
                    {p.step}
                  </div>
                  <h3 className="text-slate-900 font-bold text-lg mb-3">{p.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES SERVED ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center">
          <div className="inline-block mb-5 px-4 py-1.5 bg-orange-50 text-orange-700 text-xs font-bold tracking-widest uppercase rounded-full border border-orange-100">
            Industries Served
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trusted Across Every Industry Vertical
          </h2>
          <p className="text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
            We deliver proven solutions across diverse industries with deep domain expertise.
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {data.industries.map((ind, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="px-5 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-lg font-medium text-sm hover:border-orange-400 hover:text-orange-700 hover:bg-orange-50 transition-all"
              >
                {ind}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI OPPORTUNITIES ── */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.25),transparent_60%)]" />
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-block mb-5 px-4 py-1.5 bg-orange-500/20 text-orange-300 text-xs font-bold tracking-widest uppercase rounded-full border border-orange-400/20">
                AI Integration
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                AI & Automation Integration Opportunities
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                We embed AI and intelligent automation directly into every solution we build, giving your business a permanent competitive advantage.
              </p>
              <div className="space-y-5">
                {data.aiPoints.map((ai, idx) => (
                  <motion.div
                    key={idx}
                    {...fadeUp}
                    transition={{ delay: idx * 0.08 }}
                    className="flex gap-4 bg-slate-800/50 border border-slate-700 p-5 rounded-xl hover:border-orange-500/50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{ai.title}</h4>
                      <p className="text-slate-400 text-sm">{ai.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {[
                { title: "Generative AI", icon: <Sparkles className="w-8 h-8 mx-auto text-orange-400 mb-2" /> },
                { title: "LLM Integration", icon: <Network className="w-8 h-8 mx-auto text-purple-400 mb-2" /> },
                { title: "Process Automation", icon: <Cpu className="w-8 h-8 mx-auto text-emerald-400 mb-2" /> },
                { title: "Predictive Analytics", icon: <TrendingUp className="w-8 h-8 mx-auto text-orange-400 mb-2" /> },
                { title: "Computer Vision", icon: <Monitor className="w-8 h-8 mx-auto text-cyan-400 mb-2" /> },
                { title: "NLP & Chatbots", icon: <Users className="w-8 h-8 mx-auto text-rose-400 mb-2" /> }
              ].map((t, i) => (
                <div key={i} className="bg-slate-800/60 border border-slate-700 p-5 rounded-xl text-center hover:border-orange-500/50 hover:bg-slate-800 transition-all group">
                  <div className="group-hover:scale-110 transition-transform duration-300">{t.icon}</div>
                  <div className="text-white font-semibold text-sm">{t.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECURITY ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div {...fadeLeft} className="lg:w-1/2">
              <div className="inline-block mb-5 px-4 py-1.5 bg-orange-50 text-orange-700 text-xs font-bold tracking-widest uppercase rounded-full border border-orange-100">
                Security & Compliance
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                {data.securityTitle}
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">{data.securityDesc}</p>
              <ul className="space-y-4">
                {data.securityPoints.map((pt, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-slate-700 font-medium">{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fadeRight} className="lg:w-1/2 relative">
              <img src={data.securityImg} alt="Security" className="w-full h-[400px] object-cover rounded-3xl shadow-2xl" />
              <div className="absolute -top-6 -right-6 bg-gradient-to-b from-white to-slate-50 border border-slate-100 shadow-xl p-5 rounded-2xl">
                <ShieldCheck className="w-10 h-10 text-green-500 mb-2" />
                <div className="text-slate-900 font-bold text-sm">Enterprise Security</div>
                <div className="text-slate-500 text-xs">ISO 27001 Compliant</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDY ── */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-5 px-4 py-1.5 bg-orange-50 text-orange-700 text-xs font-bold tracking-widest uppercase rounded-full border border-orange-100">
              Case Study
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Real Results. Real Clients.
            </h2>
          </div>
          <div className="bg-gradient-to-b from-white to-slate-50 border border-slate-200 rounded-3xl p-10 md:p-14 max-w-5xl mx-auto">
            <div className="inline-block mb-6 px-4 py-1.5 bg-orange-500 text-white text-xs font-bold tracking-widest uppercase rounded-full">
              {data.caseStudy.label}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-10">{data.caseStudy.client}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-base">
                  <span className="w-7 h-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">!</span>
                  The Challenge
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">{data.caseStudy.challenge}</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-base">
                  <span className="w-7 h-7 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-xs font-bold">⚙</span>
                  Our Solution
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">{data.caseStudy.solution}</p>
              </div>
              <div className="bg-slate-900 text-white p-6 rounded-2xl">
                <h4 className="font-bold text-white mb-3 flex items-center gap-2 text-base">
                  <TrendingUp className="w-5 h-5 text-orange-400" /> The Results
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">{data.caseStudy.result}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GLOBAL DELIVERY & ENGAGEMENT MODELS ── */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-5 px-4 py-1.5 bg-orange-100 text-orange-700 text-xs font-bold tracking-widest uppercase rounded-full border border-orange-200">
              Enterprise Engagement
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Flexible Global Delivery Models
            </h2>
            <p className="text-slate-600 text-lg">
              We align our operational framework with your business goals, ensuring seamless collaboration and accelerated time-to-market.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Dedicated Development Team", desc: "Scale your IT capacity instantly with our managed offshore or nearshore teams acting as an extension of your company.", icon: <Users className="w-8 h-8 text-orange-500" /> },
              { title: "Fixed Price / Turnkey", desc: "End-to-end project execution with clearly defined scopes, timelines, and predictable budgets for complete peace of mind.", icon: <Settings className="w-8 h-8 text-blue-500" /> },
              { title: "Hybrid Agile Delivery", desc: "Flexible iterative development sprints optimized for evolving enterprise requirements and rapid prototyping.", icon: <Zap className="w-8 h-8 text-emerald-500" /> }
            ].map((model, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-slate-200 p-8 rounded-[24px] hover:shadow-xl hover:border-orange-200 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {model.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{model.title}</h3>
                <p className="text-slate-600 leading-relaxed">{model.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUALITY STANDARDS & ECOSYSTEM ── */}
      <section className="py-20 bg-white border-t border-slate-100 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <h3 className="text-center text-sm font-bold tracking-widest text-slate-400 uppercase mb-10">
            Enterprise-Grade Security & Technology Ecosystem
          </h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-60">
            {[
              { label: "ISO Standards Compliant", icon: <ShieldCheck className="w-6 h-6 mr-2" /> },
              { label: "Cloud Native Architecture", icon: <Cloud className="w-6 h-6 mr-2" /> },
              { label: "GDPR & Data Privacy", icon: <Lock className="w-6 h-6 mr-2" /> },
              { label: "Enterprise CI/CD", icon: <GitBranch className="w-6 h-6 mr-2" /> },
              { label: "24/7 Global Support", icon: <Globe className="w-6 h-6 mr-2" /> }
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center text-slate-600 font-semibold text-sm md:text-base whitespace-nowrap">
                {badge.icon} {badge.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS OUTCOMES ── */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {data.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">{stat.metric}</div>
                <div className="text-slate-300 font-semibold text-sm uppercase tracking-wider mb-1">{stat.label}</div>
                <div className="text-slate-500 text-xs">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUPPORT ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-5 px-4 py-1.5 bg-orange-50 text-orange-700 text-xs font-bold tracking-widest uppercase rounded-full border border-orange-100">
              Maintenance & Support
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Post-Launch Partnership
            </h2>
            <p className="text-slate-600 text-lg">We don't disappear after deployment. We're your long-term technology partner.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.supportPoints.map((s, idx) => {
              const colors = [
                { bg: "bg-orange-50/80", hoverBg: "hover:bg-orange-100/50", border: "hover:border-orange-300", glow: "hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)]", iconText: "text-orange-500", iconRing: "ring-orange-100" },
                { bg: "bg-emerald-50/80", hoverBg: "hover:bg-emerald-100/50", border: "hover:border-emerald-300", glow: "hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)]", iconText: "text-emerald-600", iconRing: "ring-emerald-100" },
                { bg: "bg-purple-50/80", hoverBg: "hover:bg-purple-100/50", border: "hover:border-purple-300", glow: "hover:shadow-[0_8px_30px_rgba(168,85,247,0.15)]", iconText: "text-purple-600", iconRing: "ring-purple-100" },
                { bg: "bg-orange-50/80", hoverBg: "hover:bg-orange-100/50", border: "hover:border-orange-300", glow: "hover:shadow-[0_8px_30px_rgba(249,115,22,0.15)]", iconText: "text-orange-600", iconRing: "ring-orange-100" },
                { bg: "bg-fuchsia-50/80", hoverBg: "hover:bg-fuchsia-100/50", border: "hover:border-fuchsia-300", glow: "hover:shadow-[0_8px_30px_rgba(217,70,239,0.15)]", iconText: "text-fuchsia-600", iconRing: "ring-fuchsia-100" },
                { bg: "bg-cyan-50/80", hoverBg: "hover:bg-cyan-100/50", border: "hover:border-cyan-300", glow: "hover:shadow-[0_8px_30px_rgba(6,182,212,0.15)]", iconText: "text-cyan-600", iconRing: "ring-cyan-100" }
              ];
              const theme = colors[idx % colors.length];
              
              return (
                <motion.div
                  key={idx}
                  {...fadeUp}
                  transition={{ delay: idx * 0.07 }}
                  className={`flex gap-5 p-8 border border-transparent rounded-[24px] ${theme.bg} ${theme.border} ${theme.glow} ${theme.hoverBg} hover:-translate-y-1 transition-all duration-500 group backdrop-blur-sm relative overflow-hidden`}
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                  <div className={`w-12 h-12 bg-white rounded-2xl shadow-sm ring-4 ${theme.iconRing} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                    <Clock className={`w-6 h-6 ${theme.iconText}`} />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-slate-900 font-bold mb-2 text-lg">{s.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-5 px-4 py-1.5 bg-orange-50 text-orange-700 text-xs font-bold tracking-widest uppercase rounded-full border border-orange-100">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-5">
            {data.faqs.map((faq, idx) => {
              const colors = [
                { bg: "bg-orange-50/60", hoverBg: "hover:bg-orange-50", border: "hover:border-orange-200" },
                { bg: "bg-emerald-50/60", hoverBg: "hover:bg-emerald-50", border: "hover:border-emerald-200" },
                { bg: "bg-purple-50/60", hoverBg: "hover:bg-purple-50", border: "hover:border-purple-200" }
              ];
              const theme = colors[idx % colors.length];
              
              return (
                <motion.div
                  key={idx}
                  {...fadeUp}
                  transition={{ delay: idx * 0.06 }}
                  className={`p-8 rounded-[24px] border border-transparent ${theme.bg} ${theme.border} ${theme.hoverBg} hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
                >
                  <h3 className="text-slate-900 font-bold text-lg mb-3 flex items-start gap-3">
                    <span className="text-orange-500 font-black text-xl shrink-0">Q.</span>
                    {faq.q}
                  </h3>
                  <p className="text-slate-600 leading-relaxed flex items-start gap-3">
                    <span className="text-slate-400 font-black text-xl shrink-0 opacity-0">Q.</span>
                    {faq.a}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <h3 className="text-xl font-bold text-slate-900 mb-8 text-center">Explore Related Solutions</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {data.relatedServices.map((rel, i) => (
              <Link
                key={i}
                href={rel.href}
                className="px-6 py-3 bg-slate-50 border border-slate-200 text-slate-700 rounded-xl font-medium hover:border-orange-500 hover:text-orange-500 hover:bg-orange-50 transition-all flex items-center gap-2"
              >
                {rel.label} <ChevronRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.2),transparent_70%)]" />
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 text-center">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <div className="inline-block mb-6 px-4 py-1.5 bg-orange-500/20 text-orange-300 text-xs font-bold tracking-widest uppercase rounded-full border border-orange-400/20">
              Get Started
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {data.ctaHeading}
            </h2>
            <p className="text-slate-400 text-xl mb-10 leading-relaxed">
              {data.ctaDesc}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-500 text-white font-bold px-10 py-5 rounded-xl transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-600/30 text-lg">
                Start Your Project <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/get-a-quote" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-10 py-5 rounded-xl transition-all hover:-translate-y-1 text-lg">
                Get a Free Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}


