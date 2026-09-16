"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function HomeAutoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds on the home page
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
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
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-[800px] bg-white rounded-[24px] shadow-2xl flex flex-col md:flex-row overflow-hidden z-10"
        >
          {/* Close Button */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-20 text-gray-400 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Side Visual */}
          <div className="md:w-1/2 bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 relative overflow-hidden flex flex-col p-8 items-center justify-center min-h-[300px]">
            {/* You would place the exact image here if available, using a placeholder gradient instead */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            
            <div className="relative z-10 text-center">
              <div className="bg-white text-slate-900 font-black px-6 py-4 rounded-xl shadow-xl transform -rotate-2 mb-6">
                <span className="block text-2xl uppercase tracking-wider mb-1">Don't Delay Your</span>
                <span className="block text-3xl uppercase tracking-widest text-blue-600">Business Idea</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-4 shadow-sm uppercase tracking-wide">
                Launch Your Business in 5 Days
              </h3>
              <ul className="text-white/90 text-sm font-semibold space-y-2 text-left inline-block">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" /> 100% ACCURACY
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" /> DEDICATED SUPPORT
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" /> AFFORDABLE PRICE
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="md:w-1/2 bg-white p-8 md:p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
              Get a Free<br/>Software Demo
            </h2>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
              <div>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-full px-0 py-3 border-b border-gray-300 focus:border-blue-500 focus:outline-none bg-transparent transition-colors text-sm text-gray-800 placeholder-gray-400"
                  required
                />
              </div>

              <div className="flex">
                <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-300 bg-gray-50/50">
                  <span className="text-base">🇮🇳</span>
                  <span className="text-sm font-medium text-gray-700">+91</span>
                </div>
                <input 
                  type="tel" 
                  placeholder="Mobile Number" 
                  className="w-full px-3 py-3 border-b border-gray-300 focus:border-blue-500 focus:outline-none bg-transparent transition-colors text-sm text-gray-800 placeholder-gray-400"
                  required
                />
              </div>

              <div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-0 py-3 border-b border-gray-300 focus:border-blue-500 focus:outline-none bg-transparent transition-colors text-sm text-gray-800 placeholder-gray-400"
                  required
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-[#5d9bfa] hover:bg-blue-600 text-white font-semibold py-3.5 rounded-lg mt-6 transition-colors shadow-sm"
              >
                Book Now
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
