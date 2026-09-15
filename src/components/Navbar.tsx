"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BookOpen, Menu, X, ChevronDown, MoreHorizontal, Headset } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  "Web Development", "Software Development", "Digital Marketing", 
  "App Development", "SEO / SMO", "Graphic Design", "Bulk SMS", 
  "Maintenance", "Bulk WhatsApp SMS", "Digital Product", 
  "Bulk Voice Call", "Video Editing"
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
    <header className={`sticky w-full z-40 transition-all duration-300 top-0 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-white py-4"}`}>
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center">
          <img src="/images/logo.png" alt="WebCodian Logo" className="h-16 lg:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <Link href="/" className="text-[14px] font-bold text-[#2eb872]">Home</Link>
          
          {/* About Dropdown */}
          <div className="relative group py-2" onMouseEnter={() => setActiveDropdown("about")} onMouseLeave={() => setActiveDropdown(null)}>
            <button className="flex items-center gap-1 text-[14px] font-semibold text-[#4b5563] hover:text-[#2eb872] transition-colors">
              About <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <AnimatePresence>
              {activeDropdown === "about" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }} className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 rounded-lg shadow-xl overflow-hidden">
                  <div className="flex flex-col">
                    <Link href="/about" className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#2eb872] hover:bg-[#f0fdf4] transition-colors">About Us</Link>
                    <Link href="/team" className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#2eb872] hover:bg-[#f0fdf4] transition-colors">Our Team</Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Services Dropdown */}
          <div className="relative group py-2" onMouseEnter={() => setActiveDropdown("services")} onMouseLeave={() => setActiveDropdown(null)}>
            <button className="flex items-center gap-1 text-[14px] font-semibold text-[#4b5563] hover:text-[#2eb872] transition-colors">
              Services <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <AnimatePresence>
              {activeDropdown === "services" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }} className="absolute top-full left-0 md:left-1/2 md:-translate-x-1/2 mt-2 w-[600px] bg-white border border-gray-100 rounded-xl p-6 grid grid-cols-2 gap-4 shadow-xl">
                  {services.map((item) => (
                    <Link key={item} href={`/${item.toLowerCase().replace(/ \/ | /g, '-')}`} className="text-sm font-medium text-gray-600 hover:text-[#2eb872] hover:translate-x-1 transition-all">{item}</Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/industry" className="text-[14px] font-semibold text-[#4b5563] hover:text-[#2eb872] transition-colors">Industry</Link>
          <Link href="/internship" className="text-[14px] font-semibold text-[#4b5563] hover:text-[#2eb872] transition-colors">Internship</Link>
          <Link href="/pay-online" className="text-[14px] font-semibold text-[#4b5563] hover:text-[#2eb872] transition-colors">Pay Online</Link>
          <Link href="/blog" className="text-[14px] font-semibold text-[#4b5563] hover:text-[#2eb872] transition-colors">Blog</Link>
          <Link href="/contact" className="text-[14px] font-semibold text-[#4b5563] hover:text-[#2eb872] transition-colors">Contact</Link>
          <Link href="/career" className="text-[14px] font-semibold text-[#4b5563] hover:text-[#2eb872] transition-colors">Career</Link>
          
          {/* More Dropdown (Support) */}
          <div className="relative group py-2" onMouseEnter={() => setActiveDropdown("more")} onMouseLeave={() => setActiveDropdown(null)}>
            <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 text-[#ff5722] hover:text-[#f4511e] transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
            <AnimatePresence>
              {activeDropdown === "more" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }} className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden p-3 origin-top-right">
                  <Link href="/support" className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[#ff5722] text-white font-bold rounded-lg shadow-sm hover:bg-[#f4511e] hover:shadow-md hover:-translate-y-0.5 transition-all">
                    <Headset className="w-4 h-4" />
                    Support
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-[#1f2937]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
              <Link href="/" className="px-2 py-3 text-base font-bold text-gray-900 border-b border-gray-50" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              
              {/* About Accordion */}
              <div className="flex flex-col border-b border-gray-50">
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === "mobile-about" ? null : "mobile-about")}
                  className="flex items-center justify-between px-2 py-3 text-base font-bold text-gray-900 w-full"
                >
                  About
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "mobile-about" ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === "mobile-about" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-6 pb-3 flex flex-col space-y-4 pt-1 border-l-2 border-[#2eb872]/20 ml-2">
                        <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-[#2eb872]" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                        <Link href="/team" className="text-sm font-medium text-gray-600 hover:text-[#2eb872]" onClick={() => setMobileMenuOpen(false)}>Our Team</Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services Accordion */}
              <div className="flex flex-col border-b border-gray-50">
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === "mobile-services" ? null : "mobile-services")}
                  className="flex items-center justify-between px-2 py-3 text-base font-bold text-gray-900 w-full"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "mobile-services" ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === "mobile-services" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-6 pb-3 flex flex-col space-y-4 pt-1 border-l-2 border-[#2eb872]/20 ml-2">
                        {services.map((item) => (
                          <Link 
                            key={item} 
                            href={`/${item.toLowerCase().replace(/ \/ | /g, '-')}`} 
                            className="text-sm font-medium text-gray-600 hover:text-[#2eb872]"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/industry" className="px-2 py-3 text-base font-bold text-gray-900 border-b border-gray-50" onClick={() => setMobileMenuOpen(false)}>Industry</Link>
              <Link href="/internship-form" className="px-2 py-3 text-base font-bold text-gray-900 border-b border-gray-50" onClick={() => setMobileMenuOpen(false)}>Internship</Link>
              <Link href="/pay-online" className="px-2 py-3 text-base font-bold text-gray-900 border-b border-gray-50" onClick={() => setMobileMenuOpen(false)}>Pay Online</Link>
              <Link href="/blogs" className="px-2 py-3 text-base font-bold text-gray-900 border-b border-gray-50" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
              <Link href="/contact" className="px-2 py-3 text-base font-bold text-gray-900 border-b border-gray-50" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <Link href="/career" className="px-2 py-3 text-base font-bold text-gray-900 border-b border-gray-50" onClick={() => setMobileMenuOpen(false)}>Career</Link>
              
              <div className="pt-4 pb-2">
                <Link href="/support" className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#ff5722] text-white font-bold rounded-xl shadow-[0_4px_15px_rgba(255,87,34,0.3)] hover:bg-[#f4511e] transition-all" onClick={() => setMobileMenuOpen(false)}>
                  <Headset className="w-5 h-5" />
                  Support
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
