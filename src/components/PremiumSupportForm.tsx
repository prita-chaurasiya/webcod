"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function PremiumSupportForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden">
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#ff5722] to-orange-400"></div>
      
      {isSubmitted ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center text-center py-12"
        >
          <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
          <p className="text-slate-500">Our support team will get back to you shortly.</p>
        </motion.div>
      ) : (
        <>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Submit a Request</h3>
          <p className="text-slate-500 mb-8">Fill out the form below and we'll be in touch.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Full Name</label>
                <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#ff5722]/20 focus:border-[#ff5722] transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email Address</label>
                <input required type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#ff5722]/20 focus:border-[#ff5722] transition-all outline-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Support Type</label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#ff5722]/20 focus:border-[#ff5722] transition-all outline-none appearance-none">
                <option>Technical Issue</option>
                <option>Course Inquiry</option>
                <option>Billing Question</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Message</label>
              <textarea required rows={4} placeholder="How can we help you?" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#ff5722]/20 focus:border-[#ff5722] transition-all outline-none resize-none"></textarea>
            </div>

            <motion.button 
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="w-full flex items-center justify-center gap-2 py-4 bg-[#ff5722] text-white font-bold rounded-xl shadow-[0_4px_15px_rgba(255,87,34,0.3)] hover:shadow-[0_8px_25px_rgba(255,87,34,0.4)] transition-all mt-4"
            >
              <Send className="w-5 h-5" />
              Submit Request
            </motion.button>
          </form>
        </>
      )}
    </div>
  );
}
