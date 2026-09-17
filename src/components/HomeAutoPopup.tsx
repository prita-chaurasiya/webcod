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
          className="relative w-full max-w-[500px] bg-[#1d74b8] shadow-2xl flex flex-col z-10 p-6 md:p-8"
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
            <h2 className="text-3xl font-normal text-white mb-4">
              Get Enquiry
            </h2>
            <hr className="border-t border-white/40" />
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="flex flex-col text-center">
                <label className="text-white text-sm mb-1.5">Name</label>
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full px-3 py-2.5 bg-[#f2f2f2] text-slate-800 focus:outline-none placeholder:text-slate-400"
                  required
                />
              </div>

              {/* E-mail */}
              <div className="flex flex-col text-center">
                <label className="text-white text-sm mb-1.5">E-mail</label>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-3 py-2.5 bg-[#f2f2f2] text-slate-800 focus:outline-none placeholder:text-slate-400"
                  required
                />
              </div>

              {/* Contact */}
              <div className="flex flex-col text-center">
                <label className="text-white text-sm mb-1.5">Contact</label>
                <input 
                  type="tel" 
                  placeholder="Mobile No" 
                  className="w-full px-3 py-2.5 bg-[#f2f2f2] text-slate-800 focus:outline-none placeholder:text-slate-400"
                  required
                />
              </div>

              {/* Course */}
              <div className="flex flex-col text-center">
                <label className="text-white text-sm mb-1.5">Course</label>
                <input 
                  type="text" 
                  placeholder="Course Interested" 
                  className="w-full px-3 py-2.5 bg-[#f2f2f2] text-slate-800 focus:outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col text-center mt-2">
              <label className="text-white text-sm mb-1.5">Message</label>
              <textarea 
                rows={5}
                className="w-full px-3 py-2.5 bg-[#f2f2f2] text-slate-800 focus:outline-none resize-y"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-4">
              <button 
                type="submit"
                className="bg-[#4fb2d9] hover:bg-[#3ca4cc] text-white font-bold tracking-wider py-3 px-12 transition-colors shadow-sm uppercase"
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
