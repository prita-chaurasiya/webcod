"use client";

import Link from "next/link";
import { Phone, Mail, ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#070b14] text-slate-300 pt-20 pb-8 overflow-hidden mt-auto border-t border-white/5">
      {/* Premium Background Effects & Top Separator */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-cyan-500/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6 relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-lg group-hover:opacity-100 transition duration-500 opacity-40"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl shadow-xl transition-all group-hover:bg-white/10 group-hover:border-white/20">
                <img src="/images/logo.png" alt="WebCodian Logo" className="h-9 w-auto object-contain brightness-0 invert" />
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-[280px]">
              Welcome to WebCodian LLP, your premier destination for innovative software solutions and cutting-edge IT training. Based in the cultural heart of Varanasi.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>, link: "#" },
                { icon: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>, link: "#" },
                { icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></>, link: "#" },
                { icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></>, link: "#" }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.link} 
                  className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Explore Col */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
              Explore
            </h3>
            <ul className="space-y-3.5">
              {[
                { name: "Our Team", href: "/team" },
                { name: "Our Blog", href: "/blog" },
                { name: "Pay Online", href: "/pay-online" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Website Validity", href: "/website-validity-check" },
                { name: "Contact", href: "/contact" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm font-medium text-slate-400 hover:text-white flex items-center group transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 group-hover:mr-2 group-hover:text-blue-400 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 group-hover:text-blue-100 transition-transform duration-300">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span>
              Services
            </h3>
            <ul className="space-y-3.5">
              {["Web Development", "Software Development", "App Development", "Graphic Design", "SEO / SMO", "Maintenance"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/ \/ | /g, '-')}`} className="text-sm font-medium text-slate-400 hover:text-white flex items-center group transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 group-hover:mr-2 group-hover:text-cyan-400 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 group-hover:text-cyan-100 transition-transform duration-300">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links Col */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
              Important Links
            </h3>
            <ul className="space-y-3.5">
              {[
                { name: "Internship Registration", href: "/internship-form" },
                { name: "Employee Verification", href: "/employee-verification" },
                { name: "Partner Registration", href: "/partner-registration-form" },
                { name: "Client Registration", href: "/client-registration-form" },
                { name: "Client Support", href: "/client-support" },
                { name: "Privacy Policy", href: "/links/privacy-policy" },
                { name: "Terms & Condition", href: "/links/terms-condition" },
                { name: "Cancellation & Refund", href: "/links/cancellation-and-refund-policy" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm font-medium text-slate-400 hover:text-white flex items-center group transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 group-hover:mr-2 group-hover:text-blue-400 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 group-hover:text-blue-100 transition-transform duration-300">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-500 font-medium">
            &copy; {currentYear} <span className="text-slate-300">WebCodian LLP</span>. All Rights Reserved.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-400">
            <a href="tel:+919794412733" className="flex items-center gap-2.5 hover:text-cyan-400 transition-colors group bg-white/5 border border-white/5 px-3 py-1.5 rounded-full">
              <Phone className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              +91 9794412733
            </a>
            <a href="mailto:info@webcodian.com" className="flex items-center gap-2.5 hover:text-blue-400 transition-colors group bg-white/5 border border-white/5 px-3 py-1.5 rounded-full">
              <Mail className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 transition-colors" />
              info@webcodian.com
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
