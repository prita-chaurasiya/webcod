"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BookOpen, Menu, X, ChevronDown, Headset, ArrowRight, HeartPulse, GraduationCap, ShoppingCart, Building2, Plane, HeartHandshake, Briefcase, ShieldCheck, Factory, Newspaper, Utensils, MessageSquareText, Rocket, Laptop, Truck, TestTube, Users, Package, Search, Building } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <div className="sticky w-full z-50 top-0 lg:top-4 lg:px-4 pointer-events-none">
      <header className={`pointer-events-auto mx-auto w-full transition-all duration-500 rounded-none lg:rounded-[32px] border-b lg:border border-transparent flex items-center ${isScrolled ? "bg-white/80 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-slate-200/50 h-[72px] lg:max-w-[1400px]" : "bg-white lg:bg-white/90 backdrop-blur-xl shadow-sm border-slate-100 h-[90px] lg:max-w-[1500px]"}`}>
        <div className="px-5 lg:px-8 w-full flex items-center justify-between h-full">
          
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center mr-4 group/logo">
            <img src="/images/logo.png" alt="WebCodian Logo" className={`w-auto object-contain transition-all duration-500 ${isScrolled ? "h-11 scale-95" : "h-14 scale-100"} group-hover/logo:scale-[1.02]`} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 shrink-0 h-full">
            <Link href="/" className="relative text-[14px] font-bold text-slate-800 hover:text-[#2eb872] transition-colors group/navlink h-full flex items-center">
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2eb872] scale-x-0 group-hover/navlink:scale-x-100 origin-left transition-transform duration-300 rounded-t-full"></span>
            </Link>
            
            {/* About Dropdown */}
            <div className="relative group/navlink h-full flex items-center" onMouseEnter={() => setActiveDropdown("about")} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="flex items-center gap-1.5 text-[14px] font-semibold text-slate-600 hover:text-[#2eb872] transition-colors relative">
                About <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover/navlink:rotate-180" />
                <span className="absolute -bottom-6 left-0 w-full h-0.5 bg-[#2eb872] scale-x-0 group-hover/navlink:scale-x-100 origin-left transition-transform duration-300 rounded-t-full"></span>
              </button>
              <AnimatePresence>
                {activeDropdown === "about" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }} className="absolute top-full left-0 mt-2 w-52 bg-white border border-gray-100 rounded-lg shadow-xl overflow-hidden">
                    <div className="flex flex-col">
                      <Link href="/about" className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#2eb872] hover:bg-[#f0fdf4] transition-colors">About Us</Link>
                      <Link href="/team" className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#2eb872] hover:bg-[#f0fdf4] transition-colors">Our Team</Link>
                      <Link href="/vision-mission" className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#2eb872] hover:bg-[#f0fdf4] transition-colors">Vision & Mission</Link>
                      <Link href="/testimonials" className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#2eb872] hover:bg-[#f0fdf4] transition-colors">Client Testimonials</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* AI & Automation Mega Menu */}
            <div className="relative group py-2" onMouseEnter={() => setActiveDropdown("ai-automation")} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="flex items-center gap-1 text-[13px] 2xl:text-[14px] font-semibold text-[#4b5563] hover:text-[#2eb872] transition-colors">
                AI & Automation <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <AnimatePresence>
                {activeDropdown === "ai-automation" && (
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.3, ease: "easeOut" }} className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[850px] bg-white/95 backdrop-blur-xl border border-gray-100/50 rounded-[32px] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.12)] overflow-hidden">
                    <div className="flex h-[360px]">
                      <div className="w-1/3 bg-slate-50/80 p-10 flex flex-col justify-center border-r border-gray-100/50 relative overflow-hidden">
                        <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
                        <h3 className="text-2xl font-black text-slate-900 mb-4 relative z-10">AI & Automation</h3>
                        <p className="text-sm text-slate-500 leading-relaxed mb-8 font-medium relative z-10">Intelligent systems and automation designed around modern business workflows.</p>
                        <Link href="/ai-automation-solutions" className="inline-flex items-center gap-2 text-sm font-bold text-white bg-slate-900 px-6 py-3 rounded-xl hover:bg-slate-800 transition-all w-fit relative z-10 shadow-md hover:shadow-lg group/btn">
                          Explore AI <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                      <div className="w-1/3 p-8 flex flex-col justify-center space-y-1">
                        {aiAutomationServices.map((item) => (
                          <Link key={item.name} href={item.href} className="group/link flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                            <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover/link:border-blue-200 transition-colors shrink-0">
                              <div className="w-2 h-2 rounded-full bg-slate-300 group-hover/link:bg-blue-500 transition-colors" />
                            </div>
                            <span className="text-sm font-bold text-slate-700 group-hover/link:text-blue-600 transition-colors">{item.name}</span>
                          </Link>
                        ))}
                      </div>
                      <div className="w-1/3 relative p-5">
                        <div className="w-full h-full rounded-[24px] bg-[#0A0F1C] overflow-hidden relative group/img border border-slate-800/50 shadow-inner">
                          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay group-hover/img:scale-110 transition-transform duration-1000" />
                          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-[40px] animate-pulse"></div>
                          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-[40px] animate-pulse delay-700"></div>
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
              <button className="flex items-center gap-1 text-[13px] 2xl:text-[14px] font-semibold text-[#4b5563] hover:text-[#2eb872] transition-colors">
                Solutions <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <AnimatePresence>
                {activeDropdown === "solutions" && (
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.3, ease: "easeOut" }} className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[1000px] bg-white/95 backdrop-blur-xl border border-gray-100/50 rounded-[32px] p-10 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.12)]">
                    <div className="grid grid-cols-5 gap-6 xl:gap-8">
                      <div>
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-5">Web & Software</h4>
                        <div className="flex flex-col gap-4">
                          {webSoftwareServices.map(item => <Link key={item.name} href={item.href} className="text-sm font-bold text-slate-700 hover:text-[#2eb872] hover:translate-x-1 transition-all">{item.name}</Link>)}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-blue-500 mb-5">AI & Auto</h4>
                        <div className="flex flex-col gap-4">
                          {aiAutomationServices.map(item => <Link key={item.name} href={item.href} className="text-sm font-bold text-slate-700 hover:text-blue-600 hover:translate-x-1 transition-all">{item.name}</Link>)}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-5">Mobile & Commerce</h4>
                        <div className="flex flex-col gap-4">
                          {mobileCommerceServices.map(item => <Link key={item.name} href={item.href} className="text-sm font-bold text-slate-700 hover:text-[#2eb872] hover:translate-x-1 transition-all">{item.name}</Link>)}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-5">Digital</h4>
                        <div className="flex flex-col gap-4">
                          {digitalServices.map(item => <Link key={item.name} href={item.href} className="text-sm font-bold text-slate-700 hover:text-[#2eb872] hover:translate-x-1 transition-all">{item.name}</Link>)}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-5">Business Systems</h4>
                        <div className="flex flex-col gap-4">
                          {businessSystems.map(item => <Link key={item.name} href={item.href} className="text-sm font-bold text-slate-700 hover:text-[#2eb872] hover:translate-x-1 transition-all">{item.name}</Link>)}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Mega Menu */}
            <div className="relative group py-2" onMouseEnter={() => setActiveDropdown("industries")} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="flex items-center gap-1 text-[13px] 2xl:text-[14px] font-semibold text-[#4b5563] hover:text-[#2eb872] transition-colors">
                Industries <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <AnimatePresence>
                {activeDropdown === "industries" && (
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.3, ease: "easeOut" }} className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[850px] bg-white/95 backdrop-blur-xl border border-gray-100/50 rounded-[32px] p-8 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.12)] flex gap-8">
                    <div className="w-1/4">
                      <h3 className="text-2xl font-black text-slate-900 mb-4">Industries</h3>
                      <p className="text-sm font-medium text-slate-500 mb-6">Tailored digital solutions for your specific domain.</p>
                      <Link href="/industry" className="text-sm font-bold text-[#2eb872] flex items-center gap-1 hover:gap-2 transition-all">
                        View All <span>→</span>
                      </Link>
                    </div>
                    <div className="w-3/4 grid grid-cols-2 gap-x-4 gap-y-2 border-l border-slate-100 pl-8">
                      {industries.map((ind) => (
                        <Link key={ind.name} href={ind.href} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group/ind">
                          <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center shrink-0 group-hover/ind:border-[#2eb872]/30 group-hover/ind:bg-[#2eb872]/5 transition-colors">
                            <ind.icon className="w-5 h-5 text-slate-600 group-hover/ind:text-[#2eb872] transition-colors" />
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-slate-900 group-hover/ind:text-[#2eb872] transition-colors">{ind.name}</h5>
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
              <button className="flex items-center gap-1.5 text-[14px] font-semibold text-slate-600 hover:text-[#2eb872] transition-colors relative">
                More <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover/navlink:rotate-180" />
                <span className="absolute -bottom-6 left-0 w-full h-0.5 bg-[#2eb872] scale-x-0 group-hover/navlink:scale-x-100 origin-left transition-transform duration-300 rounded-t-full"></span>
              </button>
              <AnimatePresence>
                {activeDropdown === "more" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }} className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-100 rounded-lg shadow-xl overflow-hidden">
                    <div className="flex flex-col">
                      {[
                        { label: "Internship", href: "/internship" },
                        { label: "Pay Online", href: "/pay-online" },
                        { label: "Projects", href: "/portfolio" },
                        { label: "Blog", href: "/blog" },
                        { label: "Career", href: "/career" },
                        { label: "Support", href: "/support" }
                      ].map(link => (
                        <Link key={link.label} href={link.href} className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#2eb872] hover:bg-[#f0fdf4] transition-colors">
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link href="/contact" className="relative text-[14px] font-semibold text-slate-600 hover:text-[#2eb872] transition-colors group/navlink h-full flex items-center">
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2eb872] scale-x-0 group-hover/navlink:scale-x-100 origin-left transition-transform duration-300 rounded-t-full"></span>
            </Link>
          </nav>

          {/* Action Buttons & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0 ml-4">
            {/* Request a Quote Button */}
            <Link href="/quote" className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white px-7 py-3.5 rounded-full text-[14px] font-bold transition-all duration-300 shadow-[0_8px_20px_rgba(15,23,42,0.15)] hover:shadow-[0_12px_25px_rgba(15,23,42,0.25)] hover:-translate-y-0.5 active:scale-95 group/cta">
              <MessageSquareText className="w-4 h-4 text-[#2eb872] group-hover/cta:text-white transition-colors" />
              Request a Quote
            </Link>

            <button className="xl:hidden text-[#1f2937] p-2 bg-slate-50 rounded-full" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Premium Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[90] xl:hidden pointer-events-auto" onClick={() => setMobileMenuOpen(false)} />
              
              <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed top-0 right-0 bottom-0 h-[100dvh] w-[85vw] max-w-sm bg-white z-[100] shadow-2xl flex flex-col xl:hidden pointer-events-auto rounded-l-[32px]">
                <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white/50 backdrop-blur-md">
                  <img src="/images/logo.png" alt="WebCodian Logo" className="h-8 w-auto" />
                  <button onClick={() => setMobileMenuOpen(false)} className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-6 space-y-2">
                  <Link href="/" className="px-2 py-3 text-base font-bold text-slate-900 border-b border-gray-50 block" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                  
                  {/* About Accordion */}
                  <div className="flex flex-col border-b border-gray-50">
                    <button onClick={() => setActiveDropdown(activeDropdown === "mobile-about" ? null : "mobile-about")} className="flex items-center justify-between px-2 py-3 text-base font-bold text-slate-900 w-full hover:bg-slate-50 transition-colors">
                      About
                      <ChevronDown className={`w-4 h-4 transition-transform text-slate-400 ${activeDropdown === "mobile-about" ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === "mobile-about" && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="pl-6 pb-2 flex flex-col space-y-1 pt-1 border-l-2 border-[#2eb872]/20 ml-2 mt-1">
                            <Link href="/about" className="py-2 text-sm font-semibold text-slate-600 hover:text-[#2eb872]" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                            <Link href="/team" className="py-2 text-sm font-semibold text-slate-600 hover:text-[#2eb872]" onClick={() => setMobileMenuOpen(false)}>Our Team</Link>
                            <Link href="/vision-mission" className="py-2 text-sm font-semibold text-slate-600 hover:text-[#2eb872]" onClick={() => setMobileMenuOpen(false)}>Vision & Mission</Link>
                            <Link href="/testimonials" className="py-2 text-sm font-semibold text-slate-600 hover:text-[#2eb872]" onClick={() => setMobileMenuOpen(false)}>Client Testimonials</Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* AI & Automation Accordion */}
                  <div className="flex flex-col border-b border-gray-50">
                    <button onClick={() => setActiveDropdown(activeDropdown === "mobile-ai" ? null : "mobile-ai")} className="flex items-center justify-between px-2 py-3 text-base font-bold text-slate-900 w-full hover:bg-slate-50 transition-colors">
                      AI & Automation
                      <ChevronDown className={`w-4 h-4 transition-transform text-slate-400 ${activeDropdown === "mobile-ai" ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === "mobile-ai" && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="pl-6 pb-2 flex flex-col space-y-1 pt-1 border-l-2 border-blue-200 ml-2 mt-1">
                            {aiAutomationServices.map((item) => (
                              <Link key={item.name} href={item.href} className="py-2 text-sm font-semibold text-slate-600 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Solutions Accordion */}
                  <div className="flex flex-col border-b border-gray-50">
                    <button onClick={() => setActiveDropdown(activeDropdown === "mobile-solutions" ? null : "mobile-solutions")} className="flex items-center justify-between px-2 py-3 text-base font-bold text-slate-900 w-full hover:bg-slate-50 transition-colors">
                      Solutions
                      <ChevronDown className={`w-4 h-4 transition-transform text-slate-400 ${activeDropdown === "mobile-solutions" ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === "mobile-solutions" && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="pl-6 pb-2 flex flex-col space-y-1 pt-1 border-l-2 border-[#2eb872]/20 ml-2 mt-1">
                            {[...webSoftwareServices, ...mobileCommerceServices, ...digitalServices, ...businessSystems].map((item) => (
                              <Link key={item.name} href={item.href} className="py-2 text-sm font-semibold text-slate-600 hover:text-[#2eb872]" onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Industries Accordion */}
                  <div className="flex flex-col border-b border-gray-50">
                    <button onClick={() => setActiveDropdown(activeDropdown === "mobile-industries" ? null : "mobile-industries")} className="flex items-center justify-between px-2 py-3 text-base font-bold text-slate-900 w-full hover:bg-slate-50 transition-colors">
                      Industries
                      <ChevronDown className={`w-4 h-4 transition-transform text-slate-400 ${activeDropdown === "mobile-industries" ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === "mobile-industries" && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="pl-6 pb-2 flex flex-col space-y-1 pt-1 border-l-2 border-[#2eb872]/20 ml-2 mt-1">
                            {industries.map((ind) => (
                              <Link key={ind.name} href={ind.href} className="py-2 text-sm font-semibold text-slate-600 hover:text-[#2eb872]" onClick={() => setMobileMenuOpen(false)}>{ind.name}</Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link href="/internship" className="px-2 py-3 text-base font-bold text-slate-900 border-b border-gray-50 block" onClick={() => setMobileMenuOpen(false)}>Internship</Link>
                  <Link href="/pay-online" className="px-2 py-3 text-base font-bold text-slate-900 border-b border-gray-50 block" onClick={() => setMobileMenuOpen(false)}>Pay Online</Link>
                  <Link href="/portfolio" className="px-2 py-3 text-base font-bold text-slate-900 border-b border-gray-50 block" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
                  <Link href="/blog" className="px-2 py-3 text-base font-bold text-slate-900 border-b border-gray-50 block" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
                  <Link href="/contact" className="px-2 py-3 text-base font-bold text-slate-900 border-b border-gray-50 block" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                  <Link href="/career" className="px-2 py-3 text-base font-bold text-slate-900 border-b border-gray-50 block" onClick={() => setMobileMenuOpen(false)}>Career</Link>
                  <Link href="/support" className="px-2 py-3 text-base font-bold text-slate-900 border-b border-gray-50 block" onClick={() => setMobileMenuOpen(false)}>Support</Link>
                  
                </div>
                
                <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col gap-3">
                  <Link href="/quote" className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#2eb872] text-white font-bold rounded-2xl shadow-xl hover:bg-[#259b5f] hover:-translate-y-1 transition-all" onClick={() => setMobileMenuOpen(false)}>
                    <MessageSquareText className="w-5 h-5" />
                    Request a Quote
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
