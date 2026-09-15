"use client";

import Link from "next/link";
import { BookOpen, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1f2937] text-gray-300 pt-20 pb-8 border-t-4 border-[#2eb872]">
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div>
            <Link href="/" className="inline-block mb-6 bg-white p-2 rounded-xl">
              <img src="/images/logo.png" alt="WebCodian Logo" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Welcome to WebCodian LLP, your premier destination for innovative software solutions and cutting-edge website development. Based in the cultural heart of Varanasi.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#2eb872] hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#2eb872] hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#2eb872] hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#2eb872] hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Explore Col */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2eb872]"></span>
              Explore
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Our Team", href: "/team" },
                { name: "Our Blog", href: "/blog" },
                { name: "Pay Online", href: "/pay-online" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Website Validity", href: "/website-validity-check" },
                { name: "Contact", href: "/contact" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-[#2eb872] flex items-center gap-2 group transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-[#2eb872]" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2eb872]"></span>
              Services
            </h3>
            <ul className="space-y-3">
              {["Web Development", "Software Development", "App Development", "Graphic Design", "SEO / SMO", "Maintenance"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/ \/ | /g, '-')}`} className="text-sm hover:text-[#2eb872] flex items-center gap-2 group transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-[#2eb872]" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links Col */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2eb872]"></span>
              Important Links
            </h3>
            <ul className="space-y-3">
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
                  <Link href={item.href} className="text-sm hover:text-[#2eb872] flex items-center gap-2 group transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-[#2eb872]" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} WebCodian LLP. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-[#2eb872]" /> +91 9794412733</span>
            <span className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-[#2eb872]" /> info@webcodian.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
