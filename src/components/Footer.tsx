"use client";

import Link from "next/link";
import { BookOpen, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0b1121] text-gray-300 pt-24 pb-8 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2eb872] to-transparent opacity-50" />
      <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_20px_rgba(46,184,114,0.5)]" />
      
      <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-[#2eb872]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-8 relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#2eb872]/20 to-blue-500/20 rounded-xl blur-xl group-hover:opacity-100 transition duration-500 opacity-50"></div>
              <div className="relative bg-white p-3 rounded-2xl shadow-xl">
                <img src="/images/logo.png" alt="WebCodian Logo" className="h-10 w-auto object-contain" />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Welcome to WebCodian LLP, your premier destination for innovative software solutions and cutting-edge computer institute training. Based in the cultural heart of Varanasi.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>, link: "#" },
                { icon: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>, link: "#" },
                { icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></>, link: "#" },
                { icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></>, link: "#" }
              ].map((social, idx) => (
                <a key={idx} href={social.link} className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-[#2eb872] hover:to-blue-600 hover:text-white transition-all duration-300 shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_5px_15px_rgba(46,184,114,0.3)] transform hover:-translate-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Explore Col */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
              Explore
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Our Team", href: "/team" },
                { name: "Our Blog", href: "/blog" },
                { name: "Pay Online", href: "/pay-online" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Website Validity", href: "/website-validity-check" },
                { name: "Contact", href: "/contact" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white flex items-center gap-2 group transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2eb872] shadow-[0_0_10px_rgba(46,184,114,0.8)]"></span>
              Services
            </h3>
            <ul className="space-y-4">
              {["Web Development", "Software Development", "App Development", "Graphic Design", "SEO / SMO", "Maintenance"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/ \/ | /g, '-')}`} className="text-sm text-gray-400 hover:text-white flex items-center gap-2 group transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-[#2eb872] group-hover:translate-x-1 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links Col */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>
              Important Links
            </h3>
            <ul className="space-y-4">
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
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white flex items-center gap-2 group transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} <span className="text-white font-medium">WebCodian LLP</span>. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
            <a href="tel:+919794412733" className="flex items-center gap-2 hover:text-white transition-colors group">
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-[#2eb872]/20 group-hover:text-[#2eb872] transition-colors">
                <Phone className="w-3.5 h-3.5" />
              </div>
              +91 9794412733
            </a>
            <a href="mailto:info@webcodian.com" className="flex items-center gap-2 hover:text-white transition-colors group">
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                <Mail className="w-3.5 h-3.5" />
              </div>
              info@webcodian.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
