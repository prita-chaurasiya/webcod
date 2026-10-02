"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Mail, Phone, BookOpen, MessageSquare } from "lucide-react";
import Image from "next/image";

export function HomeAutoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds on the home page, but only once per session
    const hasSeenPopup = sessionStorage.getItem("hasSeenEnquiryPopup");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenEnquiryPopup", "true");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        />

        {/* Premium Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-[850px] card-premium shadow-2xl flex flex-col md:flex-row z-10 max-h-[95vh] overflow-y-auto rounded-3xl overflow-hidden"
        >
          {/* Close Button */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-50 text-slate-400 hover:text-slate-900 bg-white/80 backdrop-blur-md hover:bg-slate-100 rounded-full p-2 transition-all shadow-sm"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Column - Image & Branding */}
          <div className="hidden md:flex w-2/5 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center relative p-8 flex-col justify-between overflow-hidden shadow-[inset_-10px_0_30px_rgba(0,0,0,0.2)]">
            {/* Premium Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-orange-900/70 to-indigo-900/40 z-0 backdrop-blur-[2px]"></div>
            
            {/* Animated Light Effect */}
            <div className="absolute inset-0 opacity-30 z-0">
              <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] animate-[spin_120s_linear_infinite]" />
            </div>
            
            <div className="relative z-10">
              <img src="/images/logo.png" alt="WebCodian" className="h-10 mb-8 filter brightness-0 invert" />
              <h2 className="text-3xl font-bold text-white mb-4 leading-tight">Start Your Digital Journey.</h2>
              <p className="text-orange-100/80">Get expert consultation for web development, marketing, and IT training.</p>
            </div>
            
            <div className="relative z-10">
              <div className="flex -space-x-3 mb-3">
                <img className="w-10 h-10 rounded-full border-2 border-indigo-900" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-indigo-900" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-indigo-900" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="User" />
                <div className="w-10 h-10 rounded-full border-2 border-indigo-900 bg-white flex items-center justify-center text-xs font-bold text-indigo-900">+5k</div>
              </div>
              <p className="text-xs text-orange-200 font-medium">Trusted by thousands of clients worldwide.</p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full md:w-3/5 p-6 md:p-10 bg-white">
            <div className="md:hidden text-center mb-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Get Free Enquiry</h2>
              <p className="text-slate-500 text-sm">Fill out the form below and we'll contact you shortly.</p>
            </div>

            <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-orange-500 transition-colors">
                    <User className="h-5 w-5" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-slate-400 font-medium"
                    required
                  />
                </div>

                {/* E-mail */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-orange-500 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-slate-400 font-medium"
                    required
                  />
                </div>

                {/* Contact */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-orange-500 transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Mobile Number" 
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-slate-400 font-medium"
                    required
                  />
                </div>

                {/* Course/Service */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-orange-500 transition-colors">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Course or Service" 
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-slate-400 font-medium"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div className="relative group">
                <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none text-slate-400 group-focus-within:text-orange-500 transition-colors">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <textarea 
                  placeholder="How can we help you?" 
                  rows={3}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-slate-400 font-medium resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full mt-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--primary)]/30 active:translate-y-0"
              >
                <span>Submit Enquiry</span>
                <Send className="w-5 h-5" />
              </button>
              
              <p className="text-center text-xs text-slate-400 mt-2">
                By submitting this form, you agree to our privacy policy.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

