"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  CheckCircle2, ArrowRight, Zap, ShieldCheck,
  TrendingUp, Star, ChevronRight, Clock, Users, BarChart3
} from "lucide-react";

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
          <img src={data.heroImg} alt={data.heroTitle} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/75 to-slate-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
        </div>
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-20 left-1/3 w-[500px] h-[300px] bg-blue-500/15 rounded-full blur-[100px] pointer-events-none z-0"
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
              className="inline-block mb-5 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-widest uppercase"
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
              <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/30">
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
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
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
              <div className="inline-block mb-5 px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase rounded-full border border-blue-100">
                Business Overview
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                {data.overviewHeading}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">{data.overviewText}</p>
              <ul className="space-y-3">
                {data.overviewBullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fadeRight} className="lg:w-1/2 relative">
              <img src={data.overviewImg} alt={data.overviewHeading} className="w-full h-[450px] object-cover rounded-3xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
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
            <div className="inline-block mb-5 px-4 py-1.5 bg-white/10 text-blue-300 text-xs font-bold tracking-widest uppercase rounded-full border border-white/10">
              Business Challenges
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Challenges We Solve
            </h2>
            <p className="text-slate-400 text-lg">Modern businesses face complex digital challenges. Here's what we address.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {data.challenges.map((c, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ delay: idx * 0.08 }}
                className="flex gap-5 bg-slate-800/50 border border-slate-700 p-7 rounded-2xl hover:border-blue-500/50 hover:bg-slate-800 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 text-lg font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{c.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY BUSINESSES NEED THIS ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-5 px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase rounded-full border border-blue-100">
              Why Invest
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why Businesses Need This Solution
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.whyPoints.map((w, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ delay: idx * 0.07 }}
                className="p-8 border border-slate-200 rounded-2xl hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all group bg-white"
              >
                <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white rounded-xl flex items-center justify-center mb-5 transition-all">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-3">{w.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE SOLVE IT ── */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-5 px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase rounded-full border border-blue-100">
              WebCodian Approach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              How WebCodian Solves It
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {data.solutions.map((s, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ delay: idx * 0.07 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-5"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-5 px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase rounded-full border border-blue-100">
              Key Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              What's Included in Our Solution
            </h2>
            <p className="text-slate-600 text-lg">Enterprise-grade capabilities built into every engagement.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((f, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ delay: idx * 0.06 }}
                className="group p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:bg-white hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all cursor-default"
              >
                <div className="text-4xl mb-5">{f.icon}</div>
                <h3 className="text-slate-900 font-bold text-lg mb-3 group-hover:text-blue-700 transition-colors">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS BENEFITS ── */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-5 px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase rounded-full border border-blue-100">
              Business Benefits
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Measurable Benefits for Your Business
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.benefits.map((b, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ delay: idx * 0.07 }}
                className="flex gap-4 p-7 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all"
              >
                <Star className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-slate-900 font-bold mb-2">{b.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center">
          <div className="inline-block mb-5 px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase rounded-full border border-blue-100">
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
                className="px-6 py-3 bg-slate-50 border border-slate-200 text-slate-800 rounded-xl font-bold text-sm hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all cursor-default"
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
            <div className="inline-block mb-5 px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase rounded-full border border-blue-100">
              Development Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Proven Delivery Framework
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-16 left-[12.5%] w-3/4 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 z-0" />
            {data.process.map((p, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ delay: idx * 0.1 }}
                className="relative z-10 bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center hover:border-blue-500 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-5 shadow-lg shadow-blue-600/30">
                  {p.step}
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-3">{p.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES SERVED ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center">
          <div className="inline-block mb-5 px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase rounded-full border border-blue-100">
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
                className="px-5 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-lg font-medium text-sm hover:border-blue-400 hover:text-blue-700 hover:bg-blue-50 transition-all"
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
              <div className="inline-block mb-5 px-4 py-1.5 bg-blue-500/20 text-blue-300 text-xs font-bold tracking-widest uppercase rounded-full border border-blue-400/20">
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
                    className="flex gap-4 bg-slate-800/50 border border-slate-700 p-5 rounded-xl hover:border-blue-500/50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
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
              {["Generative AI", "LLM Integration", "Process Automation", "Predictive Analytics", "Computer Vision", "NLP & Chatbots"].map((t, i) => (
                <div key={i} className="bg-slate-800/60 border border-slate-700 p-5 rounded-xl text-center hover:border-blue-500/50 transition-colors">
                  <div className="text-2xl mb-2">🤖</div>
                  <div className="text-white font-semibold text-sm">{t}</div>
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
              <div className="inline-block mb-5 px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase rounded-full border border-blue-100">
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
              <div className="absolute -top-6 -right-6 bg-white border border-slate-100 shadow-xl p-5 rounded-2xl">
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
            <div className="inline-block mb-5 px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase rounded-full border border-blue-100">
              Case Study
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Real Results. Real Clients.
            </h2>
          </div>
          <div className="bg-white border border-slate-200 rounded-3xl p-10 md:p-14 max-w-5xl mx-auto">
            <div className="inline-block mb-6 px-4 py-1.5 bg-blue-600 text-white text-xs font-bold tracking-widest uppercase rounded-full">
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
                  <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">⚙</span>
                  Our Solution
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">{data.caseStudy.solution}</p>
              </div>
              <div className="bg-slate-900 text-white p-6 rounded-2xl">
                <h4 className="font-bold text-white mb-3 flex items-center gap-2 text-base">
                  <TrendingUp className="w-5 h-5 text-blue-400" /> The Results
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">{data.caseStudy.result}</p>
              </div>
            </div>
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
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{stat.metric}</div>
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
            <div className="inline-block mb-5 px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase rounded-full border border-blue-100">
              Maintenance & Support
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Post-Launch Partnership
            </h2>
            <p className="text-slate-600 text-lg">We don't disappear after deployment. We're your long-term technology partner.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.supportPoints.map((s, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ delay: idx * 0.07 }}
                className="flex gap-4 p-7 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:border-blue-200 hover:shadow-md transition-all"
              >
                <Clock className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-slate-900 font-bold mb-2">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-5 px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase rounded-full border border-blue-100">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-5">
            {data.faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ delay: idx * 0.06 }}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm"
              >
                <h3 className="text-slate-900 font-bold text-lg mb-3">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <h3 className="text-xl font-bold text-slate-900 mb-8 text-center">Explore Related Solutions</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {data.relatedServices.map((rel, i) => (
              <Link
                key={i}
                href={rel.href}
                className="px-6 py-3 bg-slate-50 border border-slate-200 text-slate-700 rounded-xl font-medium hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all flex items-center gap-2"
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
            <div className="inline-block mb-6 px-4 py-1.5 bg-blue-500/20 text-blue-300 text-xs font-bold tracking-widest uppercase rounded-full border border-blue-400/20">
              Get Started
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {data.ctaHeading}
            </h2>
            <p className="text-slate-400 text-xl mb-10 leading-relaxed">
              {data.ctaDesc}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-5 rounded-xl transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/30 text-lg">
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
