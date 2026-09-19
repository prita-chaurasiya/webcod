"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

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
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-[500px] bg-[#0a0f1c] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col z-10 p-6 md:p-8"
        >
          {/* Close Button */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-20 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Get <span className="text-cyan-400">Enquiry</span>
            </h2>
            <hr className="border-t border-white/10" />
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="flex flex-col text-center">
                <label className="text-slate-300 text-sm mb-1.5 font-medium">Name</label>
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder:text-slate-500 transition-all"
                  required
                />
              </div>

              {/* E-mail */}
              <div className="flex flex-col text-center">
                <label className="text-slate-300 text-sm mb-1.5 font-medium">E-mail</label>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder:text-slate-500 transition-all"
                  required
                />
              </div>

              {/* Contact */}
              <div className="flex flex-col text-center">
                <label className="text-slate-300 text-sm mb-1.5 font-medium">Contact</label>
                <input 
                  type="tel" 
                  placeholder="Mobile No" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder:text-slate-500 transition-all"
                  required
                />
              </div>

              {/* Course */}
              <div className="flex flex-col text-center">
                <label className="text-slate-300 text-sm mb-1.5 font-medium">Course</label>
                <input 
                  type="text" 
                  placeholder="Course Interested" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder:text-slate-500 transition-all"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col text-center mt-2">
              <label className="text-slate-300 text-sm mb-1.5 font-medium">Message</label>
              <textarea 
                rows={4}
                placeholder="Message"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder:text-slate-500 transition-all resize-y"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-4">
              <button 
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-400 text-white font-extrabold tracking-wider py-3 px-12 rounded-xl transition-colors shadow-[0_0_15px_rgba(6,182,212,0.3)] uppercase"
              >
                Submit
              </button>
            </div>

          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
