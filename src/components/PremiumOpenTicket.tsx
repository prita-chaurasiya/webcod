"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, UploadCloud, Ticket, Phone, Mail, MessageCircle, Clock, CheckCircle2 } from "lucide-react";

export function PremiumOpenTicket() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Ambient Lights */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-[#2eb872]/10 to-teal-400/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-gradient-to-tr from-blue-400/10 to-indigo-400/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-6 max-w-5xl relative z-10">
        
        {/* Fast Support Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {[
            {
              icon: Phone,
              title: "Direct Hotline",
              val: "+91 9794412733",
              href: "tel:+919794412733",
              color: "text-emerald-600",
              bg: "bg-emerald-50",
              border: "border-emerald-100"
            },
            {
              icon: MessageCircle,
              title: "WhatsApp Priority",
              val: "+91 9794412733",
              href: "https://wa.me/919794412733",
              color: "text-green-600",
              bg: "bg-green-50",
              border: "border-green-100"
            },
            {
              icon: Mail,
              title: "Email Support",
              val: "info@webcodian.com",
              href: "mailto:info@webcodian.com",
              color: "text-blue-600",
              bg: "bg-blue-50",
              border: "border-blue-100"
            },
            {
              icon: Clock,
              title: "Operational Hours",
              val: "Mon - Sat: 9AM - 7PM",
              href: "#",
              color: "text-purple-600",
              bg: "bg-purple-50",
              border: "border-purple-100"
            }
          ].map((ch, idx) => (
            <motion.a
              key={ch.title}
              href={ch.href}
              target={ch.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`p-5 rounded-2xl bg-white border ${ch.border} shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 block group`}
            >
              <div className={`w-10 h-10 rounded-xl ${ch.bg} ${ch.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <ch.icon className="w-5 h-5" />
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{ch.title}</p>
              <p className="text-sm font-bold text-slate-800 group-hover:text-[#2eb872] transition-colors truncate">{ch.val}</p>
            </motion.a>
          ))}
        </div>

        {/* Ticket Form Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 relative overflow-hidden"
        >
          {/* Top Decorative bar */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-teal-400 to-[#2eb872]" />

          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-[#2eb872]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#2eb872]">
              <Ticket className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
              Raise a Support Ticket
            </h2>
            <p className="text-slate-500 font-medium max-w-lg mx-auto">
              Our engineering team responds to all tickets within 15 minutes during operating hours.
            </p>
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-16 text-center"
            >
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Ticket Successfully Created!</h3>
              <p className="text-slate-500 mb-8 max-w-md mx-auto">
                Ticket #WCD-{Math.floor(100000 + Math.random() * 900000)} has been queued. Our technical team has been notified.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-8 py-3 bg-slate-900 hover:bg-[#2eb872] text-white rounded-xl font-bold transition-all text-sm"
              >
                Create Another Ticket
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Client ID */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700">Client ID / Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. WCD-1029 or Your Name" 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all font-medium text-slate-700 placeholder-slate-400"
                  />
                </div>

                {/* Email ID */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700">Email Address <span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    required
                    placeholder="Enter Registered Email" 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all font-medium text-slate-700 placeholder-slate-400"
                  />
                </div>

                {/* Phone No */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700">Phone Number <span className="text-red-500">*</span></label>
                  <input 
                    type="tel" 
                    required
                    maxLength={10}
                    placeholder="Enter 10-digit mobile" 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all font-medium text-slate-700 placeholder-slate-400"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700">Subject <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    required
                    placeholder="Brief description of the problem" 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all font-medium text-slate-700 placeholder-slate-400"
                  />
                </div>

                {/* Department */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700">Department <span className="text-red-500">*</span></label>
                  <select defaultValue="technical" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all font-medium text-slate-700">
                    <option value="technical">Technical Support & Bugs</option>
                    <option value="billing">Billing & Invoices</option>
                    <option value="server">Server & Cloud Maintenance</option>
                    <option value="sales">New Feature Request</option>
                  </select>
                </div>

                {/* Priority */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700">Priority Level <span className="text-red-500">*</span></label>
                  <select defaultValue="medium" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all font-medium text-slate-700">
                    <option value="low">Low (General Query)</option>
                    <option value="medium">Medium (Non-blocking Issue)</option>
                    <option value="high">High (Production Impairment)</option>
                    <option value="urgent">Urgent (System Down)</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Detailed Message <span className="text-red-500">*</span></label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Describe your issue or question in detail..." 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all font-medium text-slate-700 placeholder-slate-400 resize-none"
                />
              </div>

              {/* Attach File */}
              <div className="space-y-3">
                <label className="block text-sm font-bold text-slate-700">Attach Screenshot or Document (Optional)</label>
                <div className="relative border-2 border-dashed border-slate-300 bg-slate-50 rounded-2xl p-5 flex items-center hover:bg-slate-100 hover:border-[#2eb872] transition-colors cursor-pointer group">
                  <input 
                    type="file" 
                    multiple 
                    accept="image/*,.pdf"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex items-center gap-4 w-full">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-400 group-hover:text-[#2eb872] group-hover:scale-110 transition-all">
                      <UploadCloud className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-slate-800 font-bold text-sm">Click to browse or drop screenshots here</p>
                      <p className="text-slate-400 text-xs">Supports PNG, JPG, PDF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full sm:w-auto relative overflow-hidden group inline-flex items-center justify-center px-10 py-4 font-bold text-white bg-slate-900 hover:bg-[#2eb872] rounded-xl shadow-xl hover:shadow-[#2eb872]/20 hover:-translate-y-0.5 transition-all duration-300 gap-2 text-base"
                >
                  <span>Submit Support Ticket</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          )}

        </motion.div>
      </div>
    </section>
  );
}
