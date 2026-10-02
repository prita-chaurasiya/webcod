"use client";

import { useState, useEffect } from "react";
import { Phone, Calendar, ArrowUp } from "lucide-react";

export function FloatingActionButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* Side Action Buttons */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col z-50">
        <a 
          href="tel:+1234567890" 
          className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          aria-label="Call Us"
        >
          <Phone className="w-5 h-5" />
        </a>
        <a 
          href="https://wa.me/1234567890" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center bg-[#25D366] text-white hover:bg-[#20b858] transition-colors"
          aria-label="WhatsApp"
        >
          {/* WhatsApp SVG Icon */}
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </a>
        <a 
          href="/contact" 
          className="w-12 h-12 flex items-center justify-center bg-purple-600 text-white hover:bg-purple-700 transition-colors"
          aria-label="Schedule Meeting"
        >
          <Calendar className="w-5 h-5" />
        </a>
      </div>

      {/* Scroll to Top Button */}
      <div 
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 transform ${
          showScrollTop ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <button 
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:bg-blue-600 hover:-translate-y-1 transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
    </>
  );
}
