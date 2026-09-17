"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    content: "N-1/66-F-1, Samne Ghat, Nagwa Lanka, Varanasi, UP 221005",
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+91 9794412733",
    color: "text-[#2eb872]",
    bg: "bg-[#e8f6ef]"
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "info@webcodian.com",
    color: "text-orange-500",
    bg: "bg-orange-50"
  },
  {
    icon: Clock,
    title: "Hours of Operation",
    content: "Mon - Sat: 09:AM - 07:PM \n Sunday: Closed",
    color: "text-purple-500",
    bg: "bg-purple-50"
  }
];

export function PremiumContact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-16 lg:py-20 bg-slate-50 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2eb872]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        <div className="grid lg:grid-cols-5 gap-16">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2eb872] to-blue-400">Touch</span></h2>
              <p className="text-slate-500 text-lg mb-8">
                Have any questions or need help? Contact us immediately. We are ready to start your next big project.
              </p>
            </motion.div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-[#2eb872]/30 hover:shadow-xl transition-all group"
                >
                  <div className={`w-14 h-14 rounded-xl ${info.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <info.icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-1">{info.title}</h4>
                    <p className="text-slate-500 font-medium whitespace-pre-line">{info.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trusted By / Partner Logos */}
            <div className="pt-8 mt-8 border-t border-slate-200/60 hidden md:block">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Trusted Partners & Recruiters</p>
              <div className="flex flex-wrap gap-6 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="font-black text-xl text-slate-600">Microsoft</span>
                <span className="font-black text-xl text-slate-600">Google</span>
                <span className="font-black text-xl text-slate-600">Amazon</span>
                <span className="font-black text-xl text-slate-600">TCS</span>
              </div>
            </div>
          </div>

          {/* Right: Premium Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 perspective-[1000px]"
          >
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100 relative overflow-hidden transform hover:-translate-y-2 hover:rotate-x-2 hover:-rotate-y-1 transition-all duration-500" style={{ transformStyle: "preserve-3d" }}>
              
              <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Get A Free Quotation</h3>
                
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-800 mb-2">Message Sent!</h4>
                    <p className="text-slate-500">We'll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Name <span className="text-red-500">*</span></label>
                        <input type="text" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-900 placeholder:text-slate-400 shadow-sm" placeholder="Enter Name" required />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Email <span className="text-red-500">*</span></label>
                        <input type="email" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-900 placeholder:text-slate-400 shadow-sm" placeholder="Email Address" required />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Mobile No <span className="text-red-500">*</span></label>
                        <input type="tel" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-900 placeholder:text-slate-400 shadow-sm" placeholder="Enter Mobile No" maxLength={10} required />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Business Name <span className="text-red-500">*</span></label>
                        <input type="text" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-900 placeholder:text-slate-400 shadow-sm" placeholder="Enter Your Business Name" required />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Message Here <span className="text-red-500">*</span></label>
                      <textarea className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all bg-slate-50 focus:bg-white text-slate-900 placeholder:text-slate-400 shadow-sm" rows={4} placeholder="Brief Requirements..." required></textarea>
                    </div>

                    <button type="submit" className="w-full bg-[#1f2937] hover:bg-[#111827] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group">
                      Send Message
                      <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
