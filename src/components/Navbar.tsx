"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BookOpen, Menu, X, ChevronDown, Headset, ArrowRight, HeartPulse, GraduationCap, ShoppingCart, Building2, Plane, HeartHandshake, Briefcase, ShieldCheck, Factory, Newspaper, Utensils, MessageSquareText, Rocket, Laptop, Truck, TestTube, Users, Package, Search, Building, CreditCard, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const webSoftwareServices = [
  { name: "Web Development", href: "/web-development" },
  { name: "Software Development", href: "/software-development" },
  { name: "Custom Software Development", href: "/custom-software-development" }
];

const aiAutomationServices = [
  { name: "Generative AI Solutions", href: "/generative-ai" },
  { name: "AI Agent Development", href: "/ai-agent-development" },
  { name: "Chatbot & Voice AI", href: "/chatbot-voice-ai" },
  { name: "Business Automation", href: "/business-automation" },
  { name: "AI & SaaS Product", href: "/ai-saas-product" }
];

const mobileCommerceServices = [
  { name: "App Development", href: "/app-development" },
  { name: "E-commerce Portal", href: "/e-commerce-portal" }
];

const digitalServices = [
  { name: "Digital Marketing", href: "/digital-marketing" },
  { name: "SEO / SMO", href: "/seo-smo" },
  { name: "Graphic Design", href: "/graphic-design" },
  { name: "Video Editing", href: "/video-editing" }
];

const businessSystems = [
  { name: "CRM & ERP", href: "/crm-erp" },
  { name: "Telegram Bot", href: "/telegram-bot" },
  { name: "Digital Product", href: "/digital-product" },
  { name: "Maintenance", href: "/maintenance" },
  { name: "Bulk SMS", href: "/bulk-sms" },
  { name: "Bulk WhatsApp", href: "/bulk-whatsapp-sms" },
  { name: "Bulk Voice Call", href: "/bulk-voice-call" }
];

const industries = [
  { name: "Healthcare", href: "/industry/healthcare", icon: HeartPulse, desc: "Digital health & telemedicine" },
  { name: "Education", href: "/industry/education", icon: GraduationCap, desc: "EdTech & learning platforms" },
  { name: "E-commerce", href: "/industry/ecommerce", icon: ShoppingCart, desc: "Retail & online stores" },
  { name: "Real Estate", href: "/industry/real-estate", icon: Building2, desc: "Property & CRM systems" },
  { name: "Tour & Travel", href: "/industry/travel", icon: Plane, desc: "Booking & hospitality" },
  { name: "NGO", href: "/industry/ngo", icon: HeartHandshake, desc: "Non-profit management" },
  { name: "Consulting", href: "/industry/consulting", icon: Briefcase, desc: "Professional services" },
  { name: "Security", href: "/industry/security", icon: ShieldCheck, desc: "Security services" },
  { name: "Manufacturing", href: "/industry/manufacturing", icon: Factory, desc: "Industry 4.0 & automation" },
  { name: "News & Blog", href: "/industry/news", icon: Newspaper, desc: "Media & publishing" },
  { name: "Restaurant", href: "/industry/restaurant", icon: Utensils, desc: "Food & beverage POS" }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <div className="sticky w-full z-50 top-0 lg:top-4 lg:px-4 pointer-events-none">
        <header className={`pointer-events-auto mx-auto w-full transition-all duration-500 rounded-none lg:rounded-[32px] border-b lg:border border-transparent flex items-center ${isScrolled ? "bg-[#0a0f1c]/80 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-white/10 h-[72px] lg:max-w-[1400px]" : "bg-[#0a0f1c]/90 backdrop-blur-xl shadow-sm border-white/5 h-[90px] lg:max-w-[1500px]"}`}>
        <div className="px-5 lg:px-8 w-full flex items-center justify-between h-full">
          
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center mr-4 group/logo max-w-[70vw]">
            <img src="/images/logo.png" alt="WebCodian Logo" className={`w-auto max-w-full object-contain transition-all duration-500 ${isScrolled ? "h-9 sm:h-11 scale-95" : "h-10 sm:h-14 scale-100"} group-hover/logo:scale-[1.02]`} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 shrink-0 h-full">
            <Link href="/" className="relative text-[14px] font-bold text-slate-300 hover:text-cyan-400 transition-colors group/navlink h-full flex items-center">
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 scale-x-0 group-hover/navlink:scale-x-100 origin-left transition-transform duration-300 rounded-t-full"></span>
            </Link>
            
            {/* About Dropdown */}
            <div className="relative group/navlink h-full flex items-center" onMouseEnter={() => setActiveDropdown("about")} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="flex items-center gap-1.5 text-[14px] font-semibold text-slate-300 hover:text-cyan-400 transition-colors relative">
                About <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover/navlink:rotate-180" />
                <span className="absolute -bottom-6 left-0 w-full h-0.5 bg-cyan-400 scale-x-0 group-hover/navlink:scale-x-100 origin-left transition-transform duration-300 rounded-t-full"></span>
              </button>
              <AnimatePresence>
                {activeDropdown === "about" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 12, scale: 0.98 }} 
                    animate={{ opacity: 1, y: 0, scale: 1 }} 
                    exit={{ opacity: 0, y: 10, scale: 0.98 }} 
                    transition={{ duration: 0.22, ease: "easeOut" }} 
                    className="absolute top-full left-0 mt-3 w-80 bg-[#0a0f1c]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-2.5 z-50 overflow-hidden"
                  >
                    <div className="px-3 py-2 border-b border-white/5 flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">About WebCodian</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Company</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      {[
                        { label: "About Us", sub: "Company legacy, profile & certifications", href: "/about", icon: Building2 },
                        { label: "Our Team", sub: "Senior engineers & digital architects", href: "/team", icon: Users },
                        { label: "Vision & Mission", sub: "Core philosophies & innovation roadmap", href: "/vision-mission", icon: Rocket },
                        { label: "Testimonials", sub: "Verified client feedback & reviews", href: "/testimonials", icon: Award }
                      ].map((item) => (
                        <Link 
                          key={item.label} 
                          href={item.href} 
                          className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-all duration-200 group/item"
                        >
                          <div className={`w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:scale-110 group-hover/item:border-cyan-500/30 transition-all`}>
                            <item.icon className="w-4 h-4 text-cyan-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-bold text-slate-200 group-hover/item:text-cyan-400 transition-colors">{item.label}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-cyan-400 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-[11px] text-slate-400 truncate">{item.sub}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* AI & Automation Mega Menu */}
            <div className="relative group py-2" onMouseEnter={() => setActiveDropdown("ai-automation")} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="flex items-center gap-1 text-[13px] 2xl:text-[14px] font-semibold text-slate-300 hover:text-cyan-400 transition-colors">
                AI & Automation <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <AnimatePresence>
                {activeDropdown === "ai-automation" && (
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.3, ease: "easeOut" }} className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[850px] bg-[#0a0f1c]/95 backdrop-blur-xl border border-white/10 rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,0.5)] overflow-hidden">
                    <div className="flex h-[360px]">
                      <div className="w-1/3 bg-white/5 p-10 flex flex-col justify-center border-r border-white/10 relative overflow-hidden">
                        <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"></div>
                        <h3 className="text-2xl font-black text-white mb-4 relative z-10">AI & Automation</h3>
                        <p className="text-sm text-slate-400 leading-relaxed mb-8 font-medium relative z-10">Intelligent systems and automation designed around modern business workflows.</p>
                        <Link href="/ai-automation-solutions" className="inline-flex items-center gap-2 text-sm font-bold text-white bg-cyan-500/10 border border-cyan-500/30 px-6 py-3 rounded-xl hover:bg-cyan-500/20 transition-all w-fit relative z-10 shadow-[0_0_15px_rgba(6,182,212,0.15)] group/btn">
                          Explore AI <ArrowRight className="w-4 h-4 text-cyan-400 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                      <div className="w-1/3 p-8 flex flex-col justify-center space-y-1">
                        {aiAutomationServices.map((item) => (
                          <Link key={item.name} href={item.href} className="group/link flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
                            <div className="w-8 h-8 rounded-full bg-white/5 shadow-sm border border-white/10 flex items-center justify-center group-hover/link:border-cyan-500/30 transition-colors shrink-0">
                              <div className="w-2 h-2 rounded-full bg-slate-500 group-hover/link:bg-cyan-400 transition-colors" />
                            </div>
                            <span className="text-sm font-bold text-slate-300 group-hover/link:text-cyan-400 transition-colors">{item.name}</span>
                          </Link>
                        ))}
                      </div>
                      <div className="w-1/3 relative p-5">
                        <div className="w-full h-full rounded-[24px] bg-[#0A0F1C] overflow-hidden relative group/img border border-white/10 shadow-inner">
                          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay group-hover/img:scale-110 transition-transform duration-1000" />
                          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/20 rounded-full blur-[40px] animate-pulse"></div>
                          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-[40px] animate-pulse delay-700"></div>
                          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center mb-4 group-hover/img:-translate-y-2 transition-transform duration-500">
                              <div className="w-6 h-6 border-2 border-cyan-400 rounded-full animate-[spin_4s_linear_infinite] border-t-transparent"></div>
                              <div className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
                            </div>
                            <h4 className="text-white font-bold text-lg mb-1">Neural Engine</h4>
                            <p className="text-slate-400 text-xs font-medium">Processing real-time data</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Mega Menu */}
            <div className="relative group py-2" onMouseEnter={() => setActiveDropdown("solutions")} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="flex items-center gap-1 text-[13px] 2xl:text-[14px] font-semibold text-slate-300 hover:text-cyan-400 transition-colors">
                Solutions <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <AnimatePresence>
                {activeDropdown === "solutions" && (
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.3, ease: "easeOut" }} className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[1000px] bg-[#0a0f1c]/95 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                    <div className="grid grid-cols-5 gap-6 xl:gap-8">
                      <div>
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-500 mb-5">Web & Software</h4>
                        <div className="flex flex-col gap-4">
                          {webSoftwareServices.map(item => <Link key={item.name} href={item.href} className="text-sm font-bold text-slate-300 hover:text-cyan-400 hover:translate-x-1 transition-all">{item.name}</Link>)}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-500 mb-5">AI & Auto</h4>
                        <div className="flex flex-col gap-4">
                          {aiAutomationServices.map(item => <Link key={item.name} href={item.href} className="text-sm font-bold text-slate-300 hover:text-cyan-400 hover:translate-x-1 transition-all">{item.name}</Link>)}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-500 mb-5">Mobile & Commerce</h4>
                        <div className="flex flex-col gap-4">
                          {mobileCommerceServices.map(item => <Link key={item.name} href={item.href} className="text-sm font-bold text-slate-300 hover:text-cyan-400 hover:translate-x-1 transition-all">{item.name}</Link>)}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-500 mb-5">Digital</h4>
                        <div className="flex flex-col gap-4">
                          {digitalServices.map(item => <Link key={item.name} href={item.href} className="text-sm font-bold text-slate-300 hover:text-cyan-400 hover:translate-x-1 transition-all">{item.name}</Link>)}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-500 mb-5">Business Systems</h4>
                        <div className="flex flex-col gap-4">
                          {businessSystems.map(item => <Link key={item.name} href={item.href} className="text-sm font-bold text-slate-300 hover:text-cyan-400 hover:translate-x-1 transition-all">{item.name}</Link>)}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Mega Menu */}
            <div className="relative group py-2" onMouseEnter={() => setActiveDropdown("industries")} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="flex items-center gap-1 text-[13px] 2xl:text-[14px] font-semibold text-slate-300 hover:text-cyan-400 transition-colors">
                Industries <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <AnimatePresence>
                {activeDropdown === "industries" && (
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.3, ease: "easeOut" }} className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[850px] bg-[#0a0f1c]/95 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.5)] flex gap-8">
                    <div className="w-1/4">
                      <h3 className="text-2xl font-black text-white mb-4">Industries</h3>
                      <p className="text-sm font-medium text-slate-400 mb-6">Tailored digital solutions for your specific domain.</p>
                      <Link href="/industry" className="text-sm font-bold text-cyan-400 flex items-center gap-1 hover:gap-2 transition-all">
                        View All <span>→</span>
                      </Link>
                    </div>
                    <div className="w-3/4 grid grid-cols-2 gap-x-4 gap-y-2 border-l border-white/10 pl-8">
                      {industries.map((ind) => (
                        <Link key={ind.name} href={ind.href} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/ind">
                          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/ind:border-cyan-500/30 group-hover/ind:bg-cyan-500/10 transition-colors">
                            <ind.icon className="w-5 h-5 text-slate-400 group-hover/ind:text-cyan-400 transition-colors" />
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-slate-200 group-hover/ind:text-cyan-400 transition-colors">{ind.name}</h5>
                            <p className="text-xs font-medium text-slate-500 mt-0.5">{ind.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* More Dropdown */}
            <div className="relative group/navlink h-full flex items-center" onMouseEnter={() => setActiveDropdown("more")} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="flex items-center gap-1.5 text-[14px] font-semibold text-slate-300 hover:text-cyan-400 transition-colors relative">
                More <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover/navlink:rotate-180" />
                <span className="absolute -bottom-6 left-0 w-full h-0.5 bg-cyan-400 scale-x-0 group-hover/navlink:scale-x-100 origin-left transition-transform duration-300 rounded-t-full"></span>
              </button>
              <AnimatePresence>
                {activeDropdown === "more" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 12, scale: 0.98 }} 
                    animate={{ opacity: 1, y: 0, scale: 1 }} 
                    exit={{ opacity: 0, y: 10, scale: 0.98 }} 
                    transition={{ duration: 0.22, ease: "easeOut" }} 
                    className="absolute top-full right-0 mt-3 w-80 bg-[#0a0f1c]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-2.5 z-50 overflow-hidden"
                  >
                    <div className="px-3 py-2 border-b border-white/10 flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">Explore WebCodian</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Quick Access</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      {[
                        { label: "Internship", sub: "Hands-on tech training & PPO", href: "/internship", icon: GraduationCap },
                        { label: "Pay Online", sub: "Instant secure fee & invoice payment", href: "/pay-online", icon: CreditCard },
                        { label: "Projects", sub: "Enterprise deliveries & case studies", href: "/portfolio", icon: Laptop },
                        { label: "Blog", sub: "Tech guides, tutorials & articles", href: "/blog", icon: BookOpen },
                        { label: "Career", sub: "Open developer & designer roles", href: "/career", icon: Briefcase },
                        { label: "Support", sub: "24/7 client desk & ticket tracking", href: "/support", icon: Headset }
                      ].map((item) => (
                        <Link 
                          key={item.label} 
                          href={item.href} 
                          className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-all duration-200 group/item"
                        >
                          <div className={`w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:scale-110 group-hover/item:border-cyan-500/30 transition-transform`}>
                            <item.icon className="w-4 h-4 text-cyan-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-bold text-slate-200 group-hover/item:text-cyan-400 transition-colors">{item.label}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-cyan-400 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-[11px] text-slate-400 truncate">{item.sub}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link href="/contact" className="relative text-[14px] font-semibold text-slate-300 hover:text-cyan-400 transition-colors group/navlink h-full flex items-center">
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 scale-x-0 group-hover/navlink:scale-x-100 origin-left transition-transform duration-300 rounded-t-full"></span>
            </Link>
          </nav>
          
          {/* Action Buttons & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0 ml-4">
            {/* Request a Quote Button */}
            <Link href="/quote" className="hidden lg:flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500/20 text-cyan-400 px-7 py-3.5 rounded-full text-[14px] font-bold transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:-translate-y-0.5 active:scale-95 group/cta backdrop-blur-md">
              <MessageSquareText className="w-4 h-4" />
              Request a Quote
            </Link>

            <button className="xl:hidden text-white p-2 bg-white/10 rounded-full border border-white/20" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>
    </div>

    {/* Premium Mobile Drawer */}
    <AnimatePresence>
      {mobileMenuOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[90] xl:hidden pointer-events-auto" onClick={() => setMobileMenuOpen(false)} />
          
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed top-0 right-0 h-[100dvh] w-[85vw] max-w-sm z-[100] shadow-2xl xl:hidden pointer-events-auto rounded-l-[32px] border-l border-white/10" style={{ backgroundColor: '#0a0f1c' }}>
            <div className="absolute top-0 left-0 right-0 h-[80px] px-6 border-b border-white/10 flex items-center justify-between bg-white/5 backdrop-blur-md z-10">
              <img src="/images/logo.png" alt="WebCodian Logo" className="h-8 w-auto max-w-[50vw] object-contain" />
              <button onClick={() => setMobileMenuOpen(false)} className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="absolute top-[80px] bottom-[100px] left-0 right-0 overflow-y-auto px-6 py-6 space-y-2" style={{ WebkitOverflowScrolling: "touch" }}>
              <Link href="/" className="px-2 py-3 text-base font-bold text-slate-300 hover:text-cyan-400 border-b border-white/5 block transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              
              {/* About Accordion */}
              <div className="flex flex-col border-b border-white/5">
                <button onClick={() => setActiveDropdown(activeDropdown === "mobile-about" ? null : "mobile-about")} className="flex items-center justify-between px-2 py-3 text-base font-bold text-slate-300 hover:text-cyan-400 w-full hover:bg-white/5 rounded-xl transition-colors">
                  About
                  <ChevronDown className={`w-4 h-4 transition-transform text-slate-400 ${activeDropdown === "mobile-about" ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === "mobile-about" && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="pl-6 pb-2 flex flex-col space-y-1 pt-1 border-l-2 border-cyan-500/20 ml-2 mt-1">
                        <Link href="/about" className="py-2 text-sm font-semibold text-slate-400 hover:text-cyan-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                        <Link href="/team" className="py-2 text-sm font-semibold text-slate-400 hover:text-cyan-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Our Team</Link>
                        <Link href="/vision-mission" className="py-2 text-sm font-semibold text-slate-400 hover:text-cyan-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Vision & Mission</Link>
                        <Link href="/testimonials" className="py-2 text-sm font-semibold text-slate-400 hover:text-cyan-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Client Testimonials</Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* AI & Automation Accordion */}
              <div className="flex flex-col border-b border-white/5">
                <button onClick={() => setActiveDropdown(activeDropdown === "mobile-ai" ? null : "mobile-ai")} className="flex items-center justify-between px-2 py-3 text-base font-bold text-slate-300 hover:text-cyan-400 w-full hover:bg-white/5 rounded-xl transition-colors">
                  AI & Automation
                  <ChevronDown className={`w-4 h-4 transition-transform text-slate-400 ${activeDropdown === "mobile-ai" ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === "mobile-ai" && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="pl-6 pb-2 flex flex-col space-y-1 pt-1 border-l-2 border-cyan-500/20 ml-2 mt-1">
                        {aiAutomationServices.map((item) => (
                          <Link key={item.name} href={item.href} className="py-2 text-sm font-semibold text-slate-400 hover:text-cyan-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Solutions Accordion */}
              <div className="flex flex-col border-b border-white/5">
                <button onClick={() => setActiveDropdown(activeDropdown === "mobile-solutions" ? null : "mobile-solutions")} className="flex items-center justify-between px-2 py-3 text-base font-bold text-slate-300 hover:text-cyan-400 w-full hover:bg-white/5 rounded-xl transition-colors">
                  Solutions
                  <ChevronDown className={`w-4 h-4 transition-transform text-slate-400 ${activeDropdown === "mobile-solutions" ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === "mobile-solutions" && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="pl-6 pb-2 flex flex-col space-y-1 pt-1 border-l-2 border-cyan-500/20 ml-2 mt-1">
                        {[...webSoftwareServices, ...mobileCommerceServices, ...digitalServices, ...businessSystems].map((item) => (
                          <Link key={item.name} href={item.href} className="py-2 text-sm font-semibold text-slate-400 hover:text-cyan-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries Accordion */}
              <div className="flex flex-col border-b border-white/5">
                <button onClick={() => setActiveDropdown(activeDropdown === "mobile-industries" ? null : "mobile-industries")} className="flex items-center justify-between px-2 py-3 text-base font-bold text-slate-300 hover:text-cyan-400 w-full hover:bg-white/5 rounded-xl transition-colors">
                  Industries
                  <ChevronDown className={`w-4 h-4 transition-transform text-slate-400 ${activeDropdown === "mobile-industries" ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === "mobile-industries" && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="pl-6 pb-2 flex flex-col space-y-1 pt-1 border-l-2 border-cyan-500/20 ml-2 mt-1">
                        {industries.map((ind) => (
                          <Link key={ind.name} href={ind.href} className="py-2 text-sm font-semibold text-slate-400 hover:text-cyan-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>{ind.name}</Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/internship" className="px-2 py-3 text-base font-bold text-slate-300 hover:text-cyan-400 border-b border-white/5 block transition-colors" onClick={() => setMobileMenuOpen(false)}>Internship</Link>
              <Link href="/pay-online" className="px-2 py-3 text-base font-bold text-slate-300 hover:text-cyan-400 border-b border-white/5 block transition-colors" onClick={() => setMobileMenuOpen(false)}>Pay Online</Link>
              <Link href="/portfolio" className="px-2 py-3 text-base font-bold text-slate-300 hover:text-cyan-400 border-b border-white/5 block transition-colors" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
              <Link href="/blog" className="px-2 py-3 text-base font-bold text-slate-300 hover:text-cyan-400 border-b border-white/5 block transition-colors" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
              <Link href="/contact" className="px-2 py-3 text-base font-bold text-slate-300 hover:text-cyan-400 border-b border-white/5 block transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <Link href="/career" className="px-2 py-3 text-base font-bold text-slate-300 hover:text-cyan-400 border-b border-white/5 block transition-colors" onClick={() => setMobileMenuOpen(false)}>Career</Link>
              <Link href="/support" className="px-2 py-3 text-base font-bold text-slate-300 hover:text-cyan-400 border-b border-white/5 block transition-colors" onClick={() => setMobileMenuOpen(false)}>Support</Link>
              
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-[100px] p-6 bg-white/5 border-t border-white/10 flex flex-col gap-3">
              <Link href="/quote" className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold rounded-2xl shadow-xl hover:bg-cyan-500/20 hover:-translate-y-1 transition-all" onClick={() => setMobileMenuOpen(false)}>
                <MessageSquareText className="w-5 h-5" />
                Request a Quote
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
}
