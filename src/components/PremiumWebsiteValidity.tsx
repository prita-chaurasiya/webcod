"use client";

import { motion } from "framer-motion";
import { Search, ShieldCheck } from "lucide-react";
import { useState } from "react";

export function PremiumWebsiteValidity() {
  const [clientId, setClientId] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for checking status goes here
    console.log("Searching for Client ID:", clientId);
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden min-h-[70vh] flex items-center justify-center">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-tl from-[#2eb872]/20 to-teal-400/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full max-w-2xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden"
        >
          {/* Top Decorative bar */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-[#2eb872]"></div>

          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600 shadow-inner">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Check Domain Status
            </h2>
            <p className="text-slate-500 font-medium">
              Verify your WebCodian project&apos;s validity, hosting, and maintenance status instantly.
            </p>
          </div>

          <form onSubmit={handleSearch} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="clientId" className="block text-sm font-bold text-slate-700">
                Client ID or Domain Name
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  id="clientId"
                  value={clientId}
                  onChange={(e) => setClientId(e.target.value)}
                  placeholder="Enter Client ID (e.g. WC-1234)" 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-medium text-slate-700"
                  required
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full relative overflow-hidden group inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
              <span className="relative flex items-center gap-2 text-lg">
                <Search className="w-5 h-5" />
                Search Status
              </span>
            </button>
          </form>

        </motion.div>
      </div>
    </section>
  );
}
