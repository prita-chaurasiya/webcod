"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, Search, LineChart, Globe, Users, 
  MessageCircle, BarChart3, Target, Share2, 
  Code, Layout, Building2, GraduationCap, 
  HeartHandshake, ShieldCheck, Factory, PlayCircle, 
  Newspaper, ShoppingBag, PlusCircle, ArrowUpRight
} from "lucide-react";
import Link from "next/link";

const services = [
  { title: "Social Media Audit", icon: <Share2 className="w-6 h-6 text-emerald-500" /> },
  { title: "Community Engagement", icon: <Users className="w-6 h-6 text-blue-500" /> },
  { title: "Social Media Advertising", icon: <Target className="w-6 h-6 text-indigo-500" /> },
  { title: "On-Page Optimization", icon: <Layout className="w-6 h-6 text-emerald-500" /> },
  { title: "Off-Page Optimization", icon: <Globe className="w-6 h-6 text-blue-500" /> },
  { title: "Keyword Research", icon: <Search className="w-6 h-6 text-indigo-500" /> }
];

const technologies = [
  { title: "Google Analytics", icon: <BarChart3 className="w-10 h-10 text-emerald-500" /> },
  { title: "Keyword Tools", icon: <Search className="w-10 h-10 text-blue-500" /> },
  { title: "Schema Markup", icon: <Code className="w-10 h-10 text-indigo-500" /> },
  { title: "Social Platforms", icon: <MessageCircle className="w-10 h-10 text-emerald-500" /> }
];

const categories = [
  { title: "E-Commerce", icon: <ShoppingBag className="w-8 h-8 text-blue-500" /> },
  { title: "School & College", icon: <GraduationCap className="w-8 h-8 text-emerald-500" /> },
  { title: "Institute", icon: <Building2 className="w-8 h-8 text-indigo-500" /> },
  { title: "Tour & Travel", icon: <Globe className="w-8 h-8 text-blue-500" /> },
  { title: "NGO", icon: <HeartHandshake className="w-8 h-8 text-emerald-500" /> },
  { title: "Consulting", icon: <Users className="w-8 h-8 text-indigo-500" /> },
  { title: "HealthCare", icon: <PlusCircle className="w-8 h-8 text-blue-500" /> },
  { title: "Security Service", icon: <ShieldCheck className="w-8 h-8 text-emerald-500" /> },
  { title: "Manufacturing", icon: <Factory className="w-8 h-8 text-indigo-500" /> },
  { title: "News & Blog", icon: <Newspaper className="w-8 h-8 text-blue-500" /> },
  { title: "Landing Page", icon: <Layout className="w-8 h-8 text-emerald-500" /> },
  { title: "Crowd Funding", icon: <Target className="w-8 h-8 text-indigo-500" /> }
];

const faqs = [
  {
    question: "How long does it take to see results from SEO efforts?",
    answer: "The timeline varies depending on the competitiveness of your industry, the current state of your website, and the strategies implemented. While some improvements may be noticeable within a few weeks, significant results typically take several months to achieve."
  },
  {
    question: "What social media platforms do you focus on for SMO?",
    answer: "We focus on a variety of social media platforms including Facebook, Twitter, LinkedIn, Instagram, Pinterest, and YouTube. The specific platforms we prioritize depend on factors such as your target audience, industry, and marketing objectives."
  },
  {
    question: "How do you determine the best keywords for my website?",
    answer: "We conduct comprehensive keyword research to identify relevant keywords and phrases that have high search volume and low competition. We analyze factors such as search intent, user behavior, and industry trends to determine the best keywords."
  },
  {
    question: "Can you help improve my website's local search visibility?",
    answer: "Yes, we offer local SEO services to improve your website's visibility in local search results. This includes optimizing your website for local keywords, creating and optimizing Google My Business listings, and managing online reviews and citations."
  }
];

export function PremiumSeoSmo() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 overflow-hidden relative">
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-300/20 rounded-full blur-[100px] mix-blend-multiply" />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-blue-300/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-300/20 rounded-full blur-[150px] mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24 pt-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-slate-200 backdrop-blur-md mb-6 shadow-sm">
            <LineChart className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-medium bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Digital Growth Specialists</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 drop-shadow-sm">
            Dominate the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-blue-600 to-indigo-600">
              Digital Landscape
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
            At Webcodian LLP, we understand the importance of appearing at the top of search engine results. With our comprehensive SEO services, we help businesses improve their online presence, increase organic traffic, and outrank competitors.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold rounded-full shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] transition-all duration-300"
            >
              Start Growing Today
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* About & Enhancing Visibility - Split Layout */}
        <div className="mb-32 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
              Enhancing Visibility:<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                SEO and SMO Solutions
              </span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Boosting online presence through strategic SEO and SMO techniques, elevating brand visibility and engagement in the digital landscape.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-emerald-100 rounded-xl text-emerald-600">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Effective SEO Strategies</h4>
                  <p className="text-slate-600">Implementing result-oriented SEO tactics to elevate website rankings and drive organic traffic.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Boosting Online Visibility</h4>
                  <p className="text-slate-600">Enhancing online visibility through SEO techniques, ensuring better search engine rankings.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-blue-400 rounded-3xl blur-2xl opacity-30" />
            <div className="relative bg-white/60 backdrop-blur-xl border border-white rounded-3xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                {services.map((svc, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow hover:border-emerald-200">
                    <div className="mb-3">{svc.icon}</div>
                    <h5 className="font-semibold text-slate-900 text-sm">{svc.title}</h5>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technology Arsenal */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Technology We Use</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all duration-300 group"
              >
                <div className="w-20 h-20 mx-auto bg-slate-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <h4 className="font-bold text-slate-900 text-lg">{tech.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Categories Bento Box */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Our Categories</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">We use a systematic approach to maximize and optimize results across diverse industries.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {categories.map((cat, idx) => (
              <motion.div key={idx} variants={itemVariants} whileHover={{ scale: 1.05 }}>
                <div className="bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg hover:bg-white transition-all h-full flex flex-col items-center justify-center gap-3">
                  <div className="bg-slate-50 p-3 rounded-full shadow-inner">
                    {cat.icon}
                  </div>
                  <span className="font-semibold text-slate-800 text-sm">{cat.title}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={false}
                animate={{ backgroundColor: openFaq === idx ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.6)" }}
                className="border border-slate-200 rounded-2xl overflow-hidden backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className={`font-medium text-lg pr-4 transition-colors duration-300 ${openFaq === idx ? "text-slate-900" : "text-slate-700 group-hover:text-slate-900"}`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`p-2 rounded-full transition-colors duration-300 ${openFaq === idx ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"}`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-6 pt-0 text-slate-600 text-lg leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
