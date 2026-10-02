"use client";

import Link from "next/link";
import { Phone, Mail, ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-50 text-slate-600 pt-20 pb-8 overflow-hidden mt-auto border-t border-slate-200">
      {/* Premium Light Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      
      <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6 relative group">
              <div className="relative bg-white/50 backdrop-blur-md border border-slate-200/50 p-4 rounded-[18px] shadow-sm transition-all group-hover:border-blue-200 group-hover:bg-blue-50/50">
                <img src="/images/logo.png" alt="WebCodian Logo" className="h-9 w-auto object-contain img-premium opacity-90" />
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-[280px]">
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
                  className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
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
            <h3 className="text-base font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shadow-sm shadow-blue-500/50"></span>
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
                  <Link href={item.href} className="text-sm font-medium text-slate-500 hover:text-[var(--primary)] flex items-center group transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--primary)] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 group-hover:mr-2 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shadow-sm shadow-blue-500/50"></span>
              Services
            </h3>
            <ul className="space-y-3.5">
              {["Web Development", "Software Development", "App Development", "Graphic Design", "SEO / SMO", "Maintenance"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/ \/ | /g, '-')}`} className="text-sm font-medium text-slate-500 hover:text-[var(--primary)] flex items-center group transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--primary)] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 group-hover:mr-2 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links Col */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shadow-sm shadow-blue-500/50"></span>
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
                  <Link href={item.href} className="text-sm font-medium text-slate-500 hover:text-[var(--primary)] flex items-center group transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--primary)] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 group-hover:mr-2 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-500 font-medium">
            &copy; {currentYear} <span className="text-slate-900 font-bold">WebCodian LLP</span>. All Rights Reserved.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-600">
            <a href="tel:+919794412733" className="flex items-center gap-2.5 hover:text-[var(--primary)] transition-colors group bg-gradient-to-b from-white to-slate-50 border border-slate-200 px-4 py-2 rounded-full shadow-sm hover:border-[var(--primary)]">
              <Phone className="w-4 h-4 text-slate-400 group-hover:text-[var(--primary)] transition-colors" />
              +91 9794412733
            </a>
            <a href="mailto:info@webcodian.com" className="flex items-center gap-2.5 hover:text-[var(--primary)] transition-colors group bg-gradient-to-b from-white to-slate-50 border border-slate-200 px-4 py-2 rounded-full shadow-sm hover:border-[var(--primary)]">
              <Mail className="w-4 h-4 text-slate-400 group-hover:text-[var(--primary)] transition-colors" />
              info@webcodian.com
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

