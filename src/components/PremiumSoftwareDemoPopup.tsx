"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight, MonitorPlay, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface PremiumSoftwareDemoPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PremiumSoftwareDemoPopup({ isOpen, onClose }: PremiumSoftwareDemoPopupProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 4000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col md:flex-row my-auto z-10"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-white border border-slate-100 hover:bg-slate-50 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Side: Visuals & Info */}
            <div className="md:w-5/12 bg-[#0B0F19] p-8 md:p-10 text-white relative overflow-hidden flex flex-col justify-between group">
              {/* Background Graphics */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none animate-pulse" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2eb872]/20 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]" />
              
              {/* Abstract Dashboard UI */}
              <div className="absolute -right-10 -bottom-10 w-72 h-56 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl shadow-2xl p-5 transform rotate-[-12deg] group-hover:rotate-[-5deg] group-hover:scale-105 transition-all duration-700 pointer-events-none">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/50" />
                  <div className="w-3 h-3 rounded-full bg-green-400/50" />
                </div>
                <div className="w-full h-2 bg-white/20 rounded-full mb-4" />
                <div className="w-3/4 h-2 bg-white/10 rounded-full mb-4" />
                <div className="flex gap-3 mt-6">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-xl" />
                  <div className="w-16 h-16 bg-purple-500/20 rounded-xl" />
                </div>
              </div>

              <div className="relative z-10">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#2eb872] font-semibold text-[11px] uppercase tracking-widest mb-6 backdrop-blur-md">
                  <MonitorPlay className="w-3.5 h-3.5" />
                  Live Demo
                </motion.div>
                
                <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl lg:text-4xl font-black text-white mb-4 leading-[1.1] tracking-tight">
                  Experience Our Software in Action.
                </motion.h3>
                
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">
                  Get a personalized walkthrough of our premium software solutions. Discover how WebCodian can streamline your workflow and drive growth.
                </motion.p>
              </div>

              <div className="relative z-10 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2eb872]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2eb872]" />
                  </div>
                  <p className="text-sm text-slate-300">1-on-1 personalized guided tour</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2eb872]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2eb872]" />
                  </div>
                  <p className="text-sm text-slate-300">Tailored to your industry needs</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2eb872]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2eb872]" />
                  </div>
                  <p className="text-sm text-slate-300">Live Q&A with our product experts</p>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="md:w-7/12 bg-white p-8 md:p-10 relative">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <ShieldCheck className="w-10 h-10 text-[#2eb872]" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                  <p className="text-slate-500 max-w-sm">
                    Thank you for your interest. One of our product specialists will contact you shortly to schedule your demo.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-8">
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">Get a Free Software Demo</h4>
                    <p className="text-sm text-slate-500">Please fill out the details below and we&apos;ll be in touch.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">First Name <span className="text-red-500">*</span></label>
                        <input 
                          type="text" 
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-900 text-sm" 
                          placeholder="John" 
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Last Name <span className="text-red-500">*</span></label>
                        <input 
                          type="text" 
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-900 text-sm" 
                          placeholder="Doe" 
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Work Email <span className="text-red-500">*</span></label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-900 text-sm" 
                        placeholder="john@company.com" 
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-900 text-sm" 
                          placeholder="+1 (555) 000-0000" 
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Company Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-900 text-sm" 
                          placeholder="Acme Corp" 
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Product of Interest <span className="text-red-500">*</span></label>
                      <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-900 text-sm appearance-none cursor-pointer">
                        <option value="">Select a product...</option>
                        <option value="crm">CRM & ERP Systems</option>
                        <option value="ecommerce">E-Commerce Portals</option>
                        <option value="lms">Learning Management (LMS)</option>
                        <option value="custom">Custom Software Development</option>
                      </select>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group mt-6"
                    >
                      Request Live Demo
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> Your information is secure and encrypted.
                    </p>
                  </form>
                </>
              )}
            </div>
            
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
