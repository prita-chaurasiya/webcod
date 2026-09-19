"use client";

import { motion } from "framer-motion";
import { Send, User, Mail, Phone, BookOpen, Clock, MessageSquare, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function PremiumCourseEnquiry() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-[#0a0f1c] select-none">
      {/* Background Ambient Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-[20%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 -right-[20%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 relative overflow-hidden"
        >
          {/* Top Decorative bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400"></div>

          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              Course Enquiry Form
            </h2>
            <p className="text-slate-400 font-medium">
              Join WebCodian and accelerate your career with our industry-led programs.
            </p>
          </div>

          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Enquiry Submitted!</h3>
              <p className="text-slate-400">Our admission counselor will contact you shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider pl-1">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-500/70" />
                    <input 
                      type="text" 
                      required
                      placeholder="John Doe" 
                      className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-white placeholder-slate-500 backdrop-blur-sm"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider pl-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-500/70" />
                    <input 
                      type="email" 
                      required
                      placeholder="john@example.com" 
                      className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-white placeholder-slate-500 backdrop-blur-sm"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider pl-1">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-500/70" />
                    <input 
                      type="tel" 
                      required
                      placeholder="+91 98765 43210" 
                      className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-white placeholder-slate-500 backdrop-blur-sm"
                    />
                  </div>
                </div>

                {/* Course Interested In */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider pl-1">Course Interested In *</label>
                  <div className="relative">
                    <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-500/70" />
                    <select 
                      required
                      className="w-full pl-12 pr-4 py-3.5 bg-[#0a0f1c] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-white appearance-none"
                    >
                      <option value="" disabled selected>Select a Course</option>
                      <option value="full-stack">Full Stack Web Development</option>
                      <option value="data-science">Data Science & AI</option>
                      <option value="digital-marketing">Advanced Digital Marketing</option>
                      <option value="graphic-design">Graphic & UI/UX Design</option>
                      <option value="video-editing">Professional Video Editing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Batch */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider pl-1">Preferred Batch Timing</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-500/70" />
                    <select 
                      className="w-full pl-12 pr-4 py-3.5 bg-[#0a0f1c] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-white appearance-none"
                    >
                      <option value="" disabled selected>Select Preferred Timing</option>
                      <option value="morning">Morning Batch (8 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon Batch (12 PM - 4 PM)</option>
                      <option value="evening">Evening Batch (5 PM - 9 PM)</option>
                      <option value="weekend">Weekend Special Batch</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider pl-1">Any Questions? (Optional)</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-cyan-500/70" />
                    <textarea 
                      rows={4}
                      placeholder="Tell us about your career goals..." 
                      className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-white placeholder-slate-500 backdrop-blur-sm resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative overflow-hidden group inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 disabled:opacity-70"
                >
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                  <span className="relative flex items-center gap-2 text-lg">
                    {isSubmitting ? (
                      <span className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full"></span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Enquiry
                      </>
                    )}
                  </span>
                </button>
                <p className="text-center text-slate-500 text-xs mt-4">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </form>
          )}

        </motion.div>
      </div>
    </section>
  );
}
