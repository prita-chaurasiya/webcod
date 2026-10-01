"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BookOpen, Menu, X, ChevronDown, Headset, ArrowRight, HeartPulse, GraduationCap, ShoppingCart, Building2, Plane, HeartHandshake, Briefcase, ShieldCheck, Factory, Newspaper, Utensils, MessageSquareText, Rocket, Laptop, Truck, TestTube, Users, Package, Search, Building, CreditCard, Award, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const webSoftwareServices = [
  { name: "Web Development", href: "/web-development" },
  { name: "Software Development", href: "/software-development" },
  { name: "Custom Software Development", href: "/custom-software-development" },
  { name: "Enterprise Software", href: "/enterprise-software" },
  { name: "Web Application Dev", href: "/web-application-development" },
  { name: "Website Design & Dev", href: "/website-development" }
];

const aiAutomationServices = [
  { name: "Generative AI Solutions", href: "/generative-ai" },
  { name: "AI Agent Development", href: "/ai-agent-development" },
  { name: "Chatbot & Voice AI", href: "/chatbot-voice-ai" },
  { name: "Business Automation", href: "/business-automation" },
  { name: "AI & SaaS Product", href: "/ai-saas-product" },
  { name: "AI & Chatbot Dev", href: "/ai-chatbot-development" },
  { name: "Data Analytics & Tech", href: "/data-analytics-and-emerging-technologies" }
];

const mobileCommerceServices = [
  { name: "App Development", href: "/app-development" },
  { name: "Mobile App Dev", href: "/mobile-app" },
  { name: "E-commerce Portal", href: "/e-commerce-portal" }
];

const digitalServices = [
  { name: "Digital Marketing", href: "/digital-marketing" },
  { name: "SEO / SMO", href: "/seo-smo" },
  { name: "Graphic Design", href: "/graphic-design" },
  { name: "Logo & Brand Identity", href: "/logo-design" },
  { name: "UI/UX Design", href: "/ui-ux-design-and-prototyping" },
  { name: "Presentation (PPT)", href: "/ppt-design" },
  { name: "Video Production", href: "/video-marketing" },
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
      <header className={`pointer-events-auto mx-auto w-full transition-all duration-300 rounded-none lg:rounded-[32px] flex items-center h-[80px] lg:max-w-[1400px] nav-glass ${isScrolled ? "scrolled shadow-lg bg-white/95 backdrop-blur-xl" : "bg-white/90 backdrop-blur-md"}`}>
        <div className="px-5 lg:px-8 w-full flex items-center justify-between h-full">
          
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center mr-4 group/logo">
            <img src="/images/logo.png" alt="WebCodian Logo" className="w-auto object-contain h-12 transition-transform duration-300 group-hover/logo:scale-[1.02]" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 shrink-0 h-full">
            <Link href="/" className="relative text-[15px] font-bold font-heading tracking-wide text-[var(--heading)] hover:text-[var(--primary)] transition-colors group/navlink h-full flex items-center">
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--primary)] scale-x-0 group-hover/navlink:scale-x-100 origin-left transition-transform duration-300 rounded-t-full"></span>
            </Link>
            
            {/* Company Mega Menu */}
            <div className="relative group py-2 h-full flex items-center" onMouseEnter={() => setActiveDropdown("about")} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="flex items-center gap-1.5 text-[13px] 2xl:text-[14px] font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors h-full relative">
                Company <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                <span className="absolute -bottom-6 left-0 w-full h-0.5 bg-[var(--primary)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-t-full"></span>
              </button>
              <AnimatePresence>
                {activeDropdown === "about" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: 15 }} 
                    transition={{ duration: 0.3, ease: "easeOut" }} 
                    className="absolute top-full left-0 mt-2 w-[700px] bg-white/95 backdrop-blur-xl border border-gray-100/50 rounded-[32px] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.12)] overflow-hidden"
                  >
                    <div className="flex h-auto min-h-[300px]">
                      {/* Left Side: Brand Identity */}
                      <div className="w-[45%] bg-slate-900 p-8 flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
                        <div className="relative z-10">
                          <h3 className="text-xl font-bold text-white mb-2">WebCodian</h3>
                          <p className="text-xs text-slate-300 leading-relaxed mb-6 font-medium">
                            Premium software development and AI automation for forward-thinking enterprises.
                          </p>
                          <Link href="/about" className="inline-flex items-center gap-2 text-xs font-bold text-white border border-white/20 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors">
                            Our Story <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                      
                      {/* Right Side: Links */}
                      <div className="w-[55%] p-6 py-8 flex flex-col justify-center bg-white">
                        <div className="grid grid-cols-1 gap-2">
                          {[
                            { label: "About Us", sub: "Company legacy & profile", href: "/about", icon: Building2 },
                            { label: "Our Team", sub: "Digital architects", href: "/team", icon: Users },
                            { label: "Vision & Mission", sub: "Innovation roadmap", href: "/vision-mission", icon: Rocket },
                            { label: "Testimonials", sub: "Client feedback", href: "/testimonials", icon: Award }
                          ].map((item) => (
                            <Link 
                              key={item.label} 
                              href={item.href} 
                              className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-all duration-200 group/item border border-transparent hover:border-slate-100"
                            >
                              <div className="w-10 h-10 rounded-[14px] bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover/item:border-blue-200 group-hover/item:bg-blue-50 transition-colors">
                                <item.icon className="w-4 h-4 text-slate-600 group-hover/item:text-blue-600 transition-colors" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-bold text-slate-800 group-hover/item:text-blue-700 transition-colors">{item.label}</h4>
                                <p className="text-[11px] font-medium text-slate-500 truncate mt-0.5">{item.sub}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* AI & Automation Mega Menu */}
            <div className="relative group py-2 h-full flex items-center" onMouseEnter={() => setActiveDropdown("ai-automation")} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="flex items-center gap-1 text-[13px] 2xl:text-[14px] font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors h-full relative">
                AI & Automation <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                <span className="absolute -bottom-6 left-0 w-full h-0.5 bg-[var(--primary)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-t-full"></span>
              </button>
              <AnimatePresence>
                {activeDropdown === "ai-automation" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: 15 }} 
                    transition={{ duration: 0.3, ease: "easeOut" }} 
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white/95 backdrop-blur-xl border border-gray-100/50 rounded-[32px] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.12)] overflow-hidden"
                  >
                    <div className="flex h-auto min-h-[340px]">
                      {/* Left Side: Brand Identity */}
                      <div className="w-[40%] bg-slate-900 p-8 flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center mix-blend-luminosity"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
                        <div className="relative z-10">
                          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 border border-blue-500/30">
                            <Bot className="w-5 h-5 text-blue-400" />
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">AI Innovation</h3>
                          <p className="text-xs text-slate-300 leading-relaxed mb-6 font-medium">
                            Intelligent systems and automation designed around modern business workflows.
                          </p>
                          <Link href="/ai-automation-solutions" className="inline-flex items-center gap-2 text-xs font-bold text-white border border-white/20 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors">
                            Explore AI <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                      
                      {/* Right Side: Links */}
                      <div className="w-[60%] p-6 py-8 flex flex-col justify-center bg-white">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                          {aiAutomationServices.map((item) => (
                            <Link 
                              key={item.name} 
                              href={item.href} 
                              className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-all duration-200 group/item border border-transparent hover:border-slate-100"
                            >
                              <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover/item:border-blue-200 group-hover/item:bg-blue-50 transition-colors">
                                <div className="w-2 h-2 rounded-full bg-slate-300 group-hover/item:bg-blue-500 transition-colors" />
                              </div>
                              <span className="text-xs font-bold text-slate-700 group-hover/item:text-blue-700 transition-colors leading-tight">
                                {item.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Mega Menu */}
            <div className="relative group py-2" onMouseEnter={() => setActiveDropdown("solutions")} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="flex items-center gap-1 text-[13px] 2xl:text-[14px] font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                Solutions <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <AnimatePresence>
                {activeDropdown === "solutions" && (
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.3, ease: "easeOut" }} className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[1000px] bg-white/95 backdrop-blur-xl border border-gray-100/50 rounded-[32px] p-10 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.12)]">
                    <div className="flex gap-8">
                      <div className="w-1/3 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-2">Our Solutions</h3>
                          <p className="text-sm font-medium text-slate-500 mb-6">Explore our comprehensive suite of enterprise software, mobile apps, and digital platforms.</p>
                        </div>
                        <div className="relative rounded-[18px] overflow-hidden shadow-sm h-[220px]">
                           <img src="/images/solutions-vector.jpg" alt="Digital Solutions Illustration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                           <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/80 to-transparent flex items-end p-5">
                             <Link href="/solutions" className="text-white font-bold text-sm flex items-center gap-2 hover:translate-x-1 transition-transform">
                               View All Solutions <ArrowRight className="w-4 h-4" />
                             </Link>
                           </div>
                        </div>
                      </div>
                      <div className="w-2/3 grid grid-cols-4 gap-6 xl:gap-8 border-l border-slate-100 pl-8">
                        <div>
                          <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-5">Web & Software</h4>
                          <div className="flex flex-col gap-3">
                            {webSoftwareServices.map(item => <Link key={item.name} href={item.href} className="text-sm font-bold text-slate-700 hover:text-[var(--primary)] hover:translate-x-1 transition-all">{item.name}</Link>)}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-[11px] font-bold uppercase tracking-widest text-blue-500 mb-5">AI & Auto</h4>
                          <div className="flex flex-col gap-3">
                            {aiAutomationServices.map(item => <Link key={item.name} href={item.href} className="text-sm font-bold text-slate-700 hover:text-blue-600 hover:translate-x-1 transition-all">{item.name}</Link>)}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-5">Mobile</h4>
                          <div className="flex flex-col gap-3">
                            {mobileCommerceServices.map(item => <Link key={item.name} href={item.href} className="text-sm font-bold text-slate-700 hover:text-[var(--primary)] hover:translate-x-1 transition-all">{item.name}</Link>)}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-5">Systems</h4>
                          <div className="flex flex-col gap-3">
                            {businessSystems.map(item => <Link key={item.name} href={item.href} className="text-sm font-bold text-slate-700 hover:text-[var(--primary)] hover:translate-x-1 transition-all">{item.name}</Link>)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Mega Menu */}
            <div className="relative group py-2" onMouseEnter={() => setActiveDropdown("industries")} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="flex items-center gap-1 text-[13px] 2xl:text-[14px] font-semibold text-[#4b5563] hover:text-[var(--primary)] transition-colors">
                Industries <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <AnimatePresence>
                {activeDropdown === "industries" && (
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.3, ease: "easeOut" }} className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[950px] bg-white/95 backdrop-blur-xl border border-gray-100/50 rounded-[32px] p-8 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.12)] flex gap-8">
                    <div className="w-1/3 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Industries</h3>
                        <p className="text-sm font-medium text-slate-500 mb-6">Tailored digital solutions for your specific domain.</p>
                      </div>
                      <div className="relative rounded-[18px] overflow-hidden shadow-sm h-[200px] group/img">
                         <img src="/images/industries-vector.jpg" alt="Industries Illustration" className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700" />
                         <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/80 to-transparent flex items-end p-5">
                           <Link href="/industry" className="text-white font-bold text-sm flex items-center gap-2 hover:translate-x-1 transition-transform">
                             View All Industries <ArrowRight className="w-4 h-4" />
                           </Link>
                         </div>
                      </div>
                    </div>
                    <div className="w-3/4 grid grid-cols-2 gap-x-4 gap-y-2 border-l border-slate-100 pl-8">
                      {industries.map((ind) => (
                        <Link key={ind.name} href={ind.href} className="flex items-start gap-3 p-3 rounded-[18px] hover:bg-slate-50 transition-colors group/ind">
                          <div className="w-10 h-10 rounded-[18px] bg-white border border-slate-100 flex items-center justify-center shrink-0 group-hover/ind:border-[var(--primary)]/30 group-hover/ind:bg-[var(--primary)]/5 transition-colors">
                            <ind.icon className="w-5 h-5 text-slate-600 group-hover/ind:text-[var(--primary)] transition-colors" />
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-slate-900 group-hover/ind:text-[var(--primary)] transition-colors">{ind.name}</h5>
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
              <button className="flex items-center gap-1.5 text-[14px] font-semibold text-slate-600 hover:text-[var(--primary)] transition-colors relative">
                More <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover/navlink:rotate-180" />
                <span className="absolute -bottom-6 left-0 w-full h-0.5 bg-[var(--primary)] scale-x-0 group-hover/navlink:scale-x-100 origin-left transition-transform duration-300 rounded-t-full"></span>
              </button>
              <AnimatePresence>
                {activeDropdown === "more" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 12, scale: 0.98 }} 
                    animate={{ opacity: 1, y: 0, scale: 1 }} 
                    exit={{ opacity: 0, y: 10, scale: 0.98 }} 
                    transition={{ duration: 0.22, ease: "easeOut" }} 
                    className="absolute top-full right-0 mt-3 w-80 bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-[18px] shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-2.5 z-50 overflow-hidden"
                  >
                    <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Explore WebCodian</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-50 text-[var(--primary)] border border-slate-100">Quick Access</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      {[
                        { label: "Internship", sub: "Hands-on tech training & PPO", href: "/internship", icon: GraduationCap, color: "text-[var(--primary)] bg-slate-50" },
                        { label: "Pay Online", sub: "Instant secure fee & invoice payment", href: "/pay-online", icon: CreditCard, color: "text-blue-600 bg-blue-50" },
                        { label: "Projects", sub: "Enterprise deliveries & case studies", href: "/portfolio", icon: Laptop, color: "text-[var(--primary)] bg-slate-50" },
                        { label: "Blog", sub: "Tech guides, tutorials & articles", href: "/blog", icon: BookOpen, color: "text-[var(--primary)] bg-slate-50" },
                        { label: "Career", sub: "Open developer & designer roles", href: "/career", icon: Briefcase, color: "text-[var(--primary)] bg-slate-50" },
                        { label: "Support", sub: "24/7 client desk & ticket tracking", href: "/support", icon: Headset, color: "text-[var(--primary)] bg-slate-50" }
                      ].map((item) => (
                        <Link 
                          key={item.label} 
                          href={item.href} 
                          className="flex items-center gap-3 p-2.5 rounded-[18px] hover:bg-slate-50 transition-all duration-200 group/item"
                        >
                          <div className={`w-9 h-9 rounded-lg ${item.color} flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform`}>
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-bold text-slate-800 group-hover/item:text-[var(--primary)] transition-colors">{item.label}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-slate-500 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-[11px] text-slate-500 truncate">{item.sub}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link href="/contact" className="relative text-[14px] font-semibold text-slate-600 hover:text-[var(--primary)] transition-colors group/navlink h-full flex items-center">
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--primary)] scale-x-0 group-hover/navlink:scale-x-100 origin-left transition-transform duration-300 rounded-t-full"></span>
            </Link>
          </nav>

          {/* Action Buttons & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0 ml-4">
            {/* Request a Quote Button */}
            <Link href="/quote" className="!hidden xl:!inline-flex items-center gap-2 btn-primary !px-5 !py-2.5 !text-[14px] group/cta shadow-sm">
              <MessageSquareText className="w-4 h-4 text-white group-hover/cta:scale-110 transition-transform" />
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
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-white/40 backdrop-blur-sm z-[90] xl:hidden pointer-events-auto" onClick={() => setMobileMenuOpen(false)} />
              
              <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed top-0 right-0 bottom-0 h-[100dvh] w-[85vw] max-w-sm bg-white z-[100] shadow-lg flex flex-col xl:hidden pointer-events-auto rounded-l-[32px]">
                <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white/50 backdrop-blur-md">
                  <img src="/images/logo.png" alt="WebCodian Logo" className="h-8 w-auto img-premium" />
                  <button onClick={() => setMobileMenuOpen(false)} className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-6 space-y-2">
                  <Link href="/" className="px-2 py-3 text-base font-bold text-slate-900 border-b border-gray-50 block" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                  
                  {/* About Accordion */}
                  <div className="flex flex-col border-b border-gray-50">
                    <button onClick={() => setActiveDropdown(activeDropdown === "mobile-about" ? null : "mobile-about")} className="flex items-center justify-between px-2 py-3 text-base font-bold text-slate-900 w-full hover:bg-slate-50 transition-colors">
                      Company
                      <ChevronDown className={`w-4 h-4 transition-transform text-slate-500 ${activeDropdown === "mobile-about" ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === "mobile-about" && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="pl-6 pb-2 flex flex-col space-y-1 pt-1 border-l-2 border-[var(--primary)]/20 ml-2 mt-1">
                            <Link href="/about" className="py-2 text-sm font-semibold text-slate-600 hover:text-[var(--primary)]" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                            <Link href="/team" className="py-2 text-sm font-semibold text-slate-600 hover:text-[var(--primary)]" onClick={() => setMobileMenuOpen(false)}>Our Team</Link>
                            <Link href="/vision-mission" className="py-2 text-sm font-semibold text-slate-600 hover:text-[var(--primary)]" onClick={() => setMobileMenuOpen(false)}>Vision & Mission</Link>
                            <Link href="/testimonials" className="py-2 text-sm font-semibold text-slate-600 hover:text-[var(--primary)]" onClick={() => setMobileMenuOpen(false)}>Client Testimonials</Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* AI & Automation Accordion */}
                  <div className="flex flex-col border-b border-gray-50">
                    <button onClick={() => setActiveDropdown(activeDropdown === "mobile-ai" ? null : "mobile-ai")} className="flex items-center justify-between px-2 py-3 text-base font-bold text-slate-900 w-full hover:bg-slate-50 transition-colors">
                      AI & Automation
                      <ChevronDown className={`w-4 h-4 transition-transform text-slate-500 ${activeDropdown === "mobile-ai" ? "rotate-180" : ""}`} />
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
                      <ChevronDown className={`w-4 h-4 transition-transform text-slate-500 ${activeDropdown === "mobile-solutions" ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === "mobile-solutions" && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="pl-6 pb-2 flex flex-col space-y-1 pt-1 border-l-2 border-[var(--primary)]/20 ml-2 mt-1">
                            {[...webSoftwareServices, ...mobileCommerceServices, ...digitalServices, ...businessSystems].map((item) => (
                              <Link key={item.name} href={item.href} className="py-2 text-sm font-semibold text-slate-600 hover:text-[var(--primary)]" onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
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
                      <ChevronDown className={`w-4 h-4 transition-transform text-slate-500 ${activeDropdown === "mobile-industries" ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === "mobile-industries" && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="pl-6 pb-2 flex flex-col space-y-1 pt-1 border-l-2 border-[var(--primary)]/20 ml-2 mt-1">
                            {industries.map((ind) => (
                              <Link key={ind.name} href={ind.href} className="py-2 text-sm font-semibold text-slate-600 hover:text-[var(--primary)]" onClick={() => setMobileMenuOpen(false)}>{ind.name}</Link>
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
                  <Link href="/quote" className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[var(--primary)] text-white font-bold rounded-[18px] shadow-xl hover:bg-[#259b5f] hover:-translate-y-1 transition-all" onClick={() => setMobileMenuOpen(false)}>
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
