"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  CheckCircle2, ArrowRight, Zap, ShieldCheck, 
  TrendingUp, Clock, Users, Star, ChevronRight, Sparkles, Network, Cpu, Monitor, Settings
} from "lucide-react";

export interface IndustryService {
  icon: string;
  title: string;
  desc: string;
}

export interface IndustryStat {
  metric: string;
  label: string;
  desc: string;
}

export interface IndustryUseCase {
  title: string;
  desc: string;
  img: string;
}

export interface IndustryCaseStudy {
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
}

export interface IndustryFAQ {
  q: string;
  a: string;
}

export interface IndustryPageData {
  // Hero
  heroTitle: string;
  heroSubtitle: string;
  heroImg: string;
  breadcrumbLabel: string;
  breadcrumbHref: string;

  // Overview
  overviewHeading: string;
  overviewText: string;
  overviewImg: string;
  overviewBullets: string[];

  // Challenges
  challenges: { title: string; desc: string; icon?: string }[];

  // Digital Transformation
  transformationPoints: { title: string; desc: string }[];

  // Solutions
  solutions: { title: string; desc: string }[];

  // Services
  services: IndustryService[];

  // AI Opportunities
  aiOpportunities: { title: string; desc: string }[];

  // Tech stack
  techStack: string[];

  // Dev Process
  devProcess: { step: string; title: string; desc: string }[];

  // Business Benefits
  benefits: { title: string; desc: string }[];

  // Use Cases
  useCases: IndustryUseCase[];

  // Case Study
  caseStudy: IndustryCaseStudy;

  // Stats
  stats: IndustryStat[];

  // Security
  securityTitle: string;
  securityDesc: string;
  securityPoints: string[];
  securityImg: string;

  // FAQ
  faqs: IndustryFAQ[];

  // Related industries
  relatedIndustries: { label: string; href: string }[];

  // CTA
  ctaHeading: string;
  ctaDesc: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 }
};

const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 }
};

export function IndustryPageTemplate({ data }: { data: IndustryPageData }) {
  return (
    <div className="bg-white overflow-hidden">

      {/* ── Hero Banner ── */}
      <section className="relative min-h-[75vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={data.heroImg} alt={data.heroTitle} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/92 via-slate-900/70 to-slate-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
        </div>

        {/* Animated glow */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-1/3 w-[500px] h-[300px] bg-orange-500/20 rounded-full blur-[100px] pointer-events-none z-0"
        />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          {/* Breadcrumb */}
          <motion.nav
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex items-center gap-2 text-sm text-white/60 mb-8 font-medium"
        >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/industry" className="hover:text-white transition-colors">Industries</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{data.breadcrumbLabel}</span>
          </motion.nav>

          <div className="max-w-3xl">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="inline-block mb-5 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-bold tracking-widest uppercase">
              Enterprise Solution · {data.breadcrumbLabel}
            </motion.div>

            <motion.h1
              {...fadeInUp}
              transition={{ delay: 0.15 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              {data.heroTitle}
            </motion.h1>

            <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
              {data.heroSubtitle}
            </motion.p>

            <motion.div {...fadeInUp} transition={{ delay: 0.25 }} className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-600/30">
                Get a Free Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/portfolio" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-xl backdrop-blur-sm transition-all hover:-translate-y-1">
                View Case Studies
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="flex flex-wrap gap-6 mt-12 pt-10 border-t border-white/10">
              {["ISO 27001 Compliant", "GDPR Ready", "99.9% SLA Uptime", "Agile Delivery"].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-white/70 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  {badge}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Industry Overview ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div {...fadeInLeft} className="lg:w-1/2">
              <div className="inline-block mb-5 px-4 py-1.5 bg-orange-50 text-orange-700 text-xs font-bold tracking-widest uppercase rounded-full border border-orange-100">
                Industry Overview
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
            <motion.div {...fadeInRight} className="lg:w-1/2 relative">
              <img src={data.overviewImg} alt={data.overviewHeading} className="w-full h-[480px] object-cover rounded-3xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-b from-white to-slate-50 p-5 rounded-2xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
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

      {/* ── Industry Challenges ── */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-5 px-4 py-1.5 bg-white/10 text-orange-300 text-xs font-bold tracking-widest uppercase rounded-full border border-white/10">
              Industry Challenges
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Key Challenges Facing the Industry
            </h2>
            <p className="text-slate-400 text-lg">Understanding the pain points is the first step to engineering world-class solutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {data.challenges.map((c, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.08 }}
                className="flex gap-5 bg-slate-800/50 border border-slate-700 p-7 rounded-2xl hover:border-orange-500/50 hover:bg-slate-800 transition-all"
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

      {/* ── Digital Transformation ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-5 px-4 py-1.5 bg-orange-50 text-orange-700 text-xs font-bold tracking-widest uppercase rounded-full border border-orange-100">
              Digital Transformation
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Transformation Opportunities We Unlock
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.transformationPoints.map((t, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.08 }}
                className="p-8 border border-slate-200 rounded-2xl hover:border-orange-500 hover:shadow-xl hover:-translate-y-1 transition-all group bg-gradient-to-b from-white to-slate-50"
              >
                <div className="w-12 h-12 bg-orange-50 group-hover:bg-orange-500 text-orange-500 group-hover:text-white rounded-xl flex items-center justify-center mb-5 transition-all">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-3">{t.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How WebCodian Solves It ── */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-5 px-4 py-1.5 bg-orange-50 text-orange-700 text-xs font-bold tracking-widest uppercase rounded-full border border-orange-100">
              Our Approach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              How WebCodian Solves These Challenges
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {data.solutions.map((s, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.08 }}
                className="bg-gradient-to-b from-white to-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-5"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
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

      {/* ── Industry-Specific Services ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-5 px-4 py-1.5 bg-orange-50 text-orange-700 text-xs font-bold tracking-widest uppercase rounded-full border border-orange-100">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Industry-Specific Services
            </h2>
            <p className="text-slate-600 text-lg">Purpose-built digital solutions engineered for your industry's unique demands.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.services.map((s, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.07 }}
                className="group p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:bg-white hover:border-orange-500 hover:shadow-xl hover:-translate-y-1 transition-all cursor-default"
              >
                <div className="text-4xl mb-5">{s.icon}</div>
                <h3 className="text-slate-900 font-bold text-lg mb-3 group-hover:text-orange-700 transition-colors">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI & Automation Opportunities ── */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.25),transparent_60%)]" />
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-block mb-5 px-4 py-1.5 bg-orange-500/20 text-orange-300 text-xs font-bold tracking-widest uppercase rounded-full border border-orange-400/20">
                AI & Automation
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                AI-Powered Innovation for the Industry
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                We harness the power of Generative AI, Machine Learning, and Intelligent Process Automation to deliver measurable competitive advantages for your business.
              </p>
              <div className="space-y-5">
                {data.aiOpportunities.map((ai, idx) => (
                  <motion.div
                    key={idx}
                    {...fadeInUp}
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
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Machine Learning", icon: <Cpu className="w-8 h-8 mx-auto text-emerald-400 mb-2" /> },
                  { title: "Generative AI", icon: <Sparkles className="w-8 h-8 mx-auto text-orange-400 mb-2" /> },
                  { title: "Process Automation", icon: <Settings className="w-8 h-8 mx-auto text-orange-400 mb-2" /> },
                  { title: "Predictive Analytics", icon: <TrendingUp className="w-8 h-8 mx-auto text-purple-400 mb-2" /> },
                  { title: "Computer Vision", icon: <Monitor className="w-8 h-8 mx-auto text-cyan-400 mb-2" /> },
                  { title: "NLP & Chatbots", icon: <Users className="w-8 h-8 mx-auto text-rose-400 mb-2" /> }
                ].map((tech, i) => (
                  <div key={i} className="bg-slate-800/60 border border-slate-700 p-5 rounded-xl text-center hover:border-orange-500/50 transition-all group">
                    <div className="group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                    <div className="text-white font-semibold text-sm">{tech.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Technology Stack ── */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center">
          <div className="inline-block mb-5 px-4 py-1.5 bg-orange-50 text-orange-700 text-xs font-bold tracking-widest uppercase rounded-full border border-orange-100">
            Technology Stack
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Enterprise-Grade Technologies
          </h2>
          <p className="text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
            We use the exact same tech stack as Fortune 500 engineering teams to build scalable, maintainable solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {data.techStack.map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="px-6 py-3 bg-slate-50 border border-slate-200 text-slate-800 rounded-xl font-bold text-sm hover:border-orange-500 hover:text-orange-500 hover:bg-orange-50 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Development Process ── */}
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
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-16 left-[12.5%] w-3/4 h-0.5 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 z-0" />
            {data.devProcess.map((phase, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="relative z-10 bg-gradient-to-b from-white to-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200 text-center hover:border-orange-500 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-5 shadow-lg shadow-orange-600/30">
                  {phase.step}
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-3">{phase.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Business Benefits ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-5 px-4 py-1.5 bg-orange-50 text-orange-700 text-xs font-bold tracking-widest uppercase rounded-full border border-orange-100">
              Business Benefits
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Measurable Impact on Your Business
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.benefits.map((b, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.07 }}
                className="flex gap-4 p-7 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:border-orange-200 hover:shadow-md transition-all"
              >
                <Star className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-slate-900 font-bold mb-2">{b.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-5 px-4 py-1.5 bg-white/10 text-orange-300 text-xs font-bold tracking-widest uppercase rounded-full border border-white/10">
              Real-World Applications
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Industry Use Cases
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.useCases.map((uc, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.08 }}
                className="group bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img src={uc.img} alt={uc.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-7">
                  <h3 className="text-white font-bold text-lg mb-3">{uc.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{uc.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Study ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-5 px-4 py-1.5 bg-orange-50 text-orange-700 text-xs font-bold tracking-widest uppercase rounded-full border border-orange-100">
              Case Study
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Real Results. Real Clients.
            </h2>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10 md:p-14 max-w-5xl mx-auto">
            <div className="inline-block mb-6 px-4 py-1.5 bg-orange-500 text-white text-xs font-bold tracking-widest uppercase rounded-full">
              {data.caseStudy.industry}
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
              <div className="bg-orange-500 text-white p-6 rounded-2xl">
                <h4 className="font-bold text-white mb-3 flex items-center gap-2 text-base">
                  <TrendingUp className="w-5 h-5" /> The Results
                </h4>
                <p className="text-orange-100 text-sm leading-relaxed">{data.caseStudy.result}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Success Metrics ── */}
      <section className="py-20 bg-orange-500 text-white">
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
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.metric}</div>
                <div className="text-orange-200 font-semibold text-sm uppercase tracking-wider mb-1">{stat.label}</div>
                <div className="text-orange-200/70 text-xs">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Security & Compliance ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div {...fadeInLeft} className="lg:w-1/2">
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
            <motion.div {...fadeInRight} className="lg:w-1/2 relative">
              <img src={data.securityImg} alt="Security" className="w-full h-[400px] object-cover rounded-3xl shadow-2xl" />
              <div className="absolute -top-6 -right-6 bg-gradient-to-b from-white to-slate-50 border border-slate-100 shadow-xl p-5 rounded-2xl">
                <ShieldCheck className="w-10 h-10 text-green-500 mb-2" />
                <div className="text-slate-900 font-bold text-sm">Enterprise Security</div>
                <div className="text-slate-500 text-xs">Zero-Trust Architecture</div>
              </div>
            </motion.div>
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
            {data.faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.06 }}
                className="bg-gradient-to-b from-white to-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm"
              >
                <h3 className="text-slate-900 font-bold text-lg mb-3">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Industries ── */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <h3 className="text-xl font-bold text-slate-900 mb-8 text-center">Explore Other Industries</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {data.relatedIndustries.map((rel, i) => (
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
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <div className="inline-block mb-6 px-4 py-1.5 bg-orange-500/20 text-orange-300 text-xs font-bold tracking-widest uppercase rounded-full border border-orange-400/20">
              Get Started Today
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

