"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, QrCode, ShieldCheck, Copy, Check, CreditCard, Lock, IndianRupee } from "lucide-react";

export function PremiumPayment() {
  const [activeTab, setActiveTab] = useState<"razorpay" | "paypal">("razorpay");
  const [copied, setCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("259794412733");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2eb872]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Bank & QR */}
          <div className="space-y-12">
            
            {/* Bank Transfer Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="perspective-[1000px]"
            >
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5 text-[#2eb872]" />
                <h3 className="text-xl font-bold text-slate-800 uppercase tracking-wider">Bank Transfer</h3>
              </div>
              
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden transform hover:-translate-y-2 hover:rotate-y-2 transition-all duration-500 border border-slate-700">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#2eb872]/20 rounded-full blur-3xl pointer-events-none"></div>
                
                <div className="flex justify-between items-start mb-12 relative z-10">
                  <div className="w-16 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium tracking-widest text-slate-400">WEBCODIAN LLP</span>
                </div>

                <div className="space-y-6 relative z-10">
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Account Number</span>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-mono tracking-widest text-white">2597 9441 2733</span>
                      <button 
                        onClick={handleCopy}
                        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2eb872] transition-colors"
                        title="Copy Account Number"
                      >
                        {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4 text-white" />}
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <span className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">IFS Code</span>
                      <span className="text-lg font-mono text-slate-300">INDB0000037</span>
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Branch</span>
                      <span className="text-lg text-slate-300 font-medium">SIGRA, VARANASI</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* QR Codes */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <QrCode className="w-5 h-5 text-blue-500" />
                <h3 className="text-xl font-bold text-slate-800 uppercase tracking-wider">QR Payment</h3>
              </div>

              <div className="grid grid-cols-2 gap-6 perspective-[1000px]">
                <div className="bg-white p-6 rounded-[2rem] shadow-lg border border-slate-100 transform hover:scale-105 hover:rotate-x-2 transition-all duration-300 flex flex-col items-center justify-center">
                  <div className="w-32 h-32 bg-slate-50 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                     {/* Replace with actual QR if available, using a placeholder icon for now */}
                     <QrCode className="w-16 h-16 text-slate-300" />
                  </div>
                  <span className="text-sm font-bold text-slate-600">Scan to Pay</span>
                </div>
                <div className="bg-white p-6 rounded-[2rem] shadow-lg border border-slate-100 transform hover:scale-105 hover:-rotate-x-2 transition-all duration-300 flex flex-col items-center justify-center">
                  <div className="w-32 h-32 bg-slate-50 rounded-xl mb-4 flex items-center justify-center overflow-hidden p-2">
                     <img src="https://webcodian.com/public/web/assets/img/phonepay.jpeg" alt="PhonePe QR" className="w-full h-full object-contain mix-blend-multiply" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<QrCode class="w-16 h-16 text-slate-300" />' }} />
                  </div>
                  <span className="text-sm font-bold text-purple-600">PhonePe</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Secure Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="perspective-[1000px]"
          >
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

              {/* Tabs */}
              <div className="flex items-center gap-4 p-2 bg-slate-50 rounded-2xl mb-10 relative z-10">
                <button 
                  onClick={() => setActiveTab("razorpay")}
                  className={`flex-1 py-3 px-6 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${activeTab === "razorpay" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                >
                  <CreditCard className="w-4 h-4" />
                  Razorpay
                </button>
                <button 
                  onClick={() => setActiveTab("paypal")}
                  className={`flex-1 py-3 px-6 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${activeTab === "paypal" ? "bg-white text-blue-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                >
                  {/* Simplistic PayPal icon using text/lock */}
                  <Lock className="w-4 h-4" />
                  PayPal
                </button>
              </div>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                    <ShieldCheck className="w-12 h-12 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Redirecting...</h3>
                  <p className="text-slate-500">Connecting to secure payment gateway.</p>
                </motion.div>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.form 
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6 relative z-10"
                  >
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Enter Amount <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                          <IndianRupee className="w-5 h-5 text-slate-400" />
                        </div>
                        <input type="number" className="w-full pl-12 pr-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-900 text-lg font-bold placeholder:text-slate-300" placeholder="0.00" required />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                      <input type="text" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-900 placeholder:text-slate-400 shadow-sm" placeholder="Enter Name" required />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Mobile No <span className="text-red-500">*</span></label>
                        <input type="tel" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-900 placeholder:text-slate-400 shadow-sm" placeholder="Mobile Number" maxLength={10} required />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Email <span className="text-red-500">*</span></label>
                        <input type="email" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-900 placeholder:text-slate-400 shadow-sm" placeholder="Email Address" required />
                      </div>
                    </div>

                    <div className="pt-4">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center mt-1">
                          <input type="checkbox" className="peer sr-only" required />
                          <div className="w-5 h-5 border-2 border-slate-300 rounded peer-checked:bg-[#2eb872] peer-checked:border-[#2eb872] transition-all"></div>
                          <Check className="w-3.5 h-3.5 text-white absolute opacity-0 peer-checked:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-sm text-slate-500 font-medium leading-relaxed">
                          I agree to the <a href="/links/privacy-policy" className="text-[#2eb872] hover:underline">Privacy Policy</a>, <a href="/links/terms-condition" className="text-[#2eb872] hover:underline">Terms & Condition</a>, and <a href="/links/cancellation-and-refund-policy" className="text-[#2eb872] hover:underline">Cancellation and Refund Policy</a>.
                        </span>
                      </label>
                    </div>

                    <div className="pt-4">
                      <button type="submit" className={`w-full text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group ${activeTab === 'razorpay' ? 'bg-blue-600 hover:bg-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.3)]' : 'bg-[#003087] hover:bg-[#001c52] shadow-[0_0_20px_rgba(0,48,135,0.3)]'}`}>
                        <Lock className="w-5 h-5" />
                        Pay Securely with {activeTab === "razorpay" ? "Razorpay" : "PayPal"}
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-6">
                      <ShieldCheck className="w-4 h-4 text-green-500" />
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">256-bit Secure Encryption</span>
                    </div>

                  </motion.form>
                </AnimatePresence>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
