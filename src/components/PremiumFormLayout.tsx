"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { useState } from "react";

interface PremiumFormLayoutProps {
  title: string;
  subtitle: string;
  fields: { name: string; label: string; type: string; placeholder: string; required: boolean }[];
  submitText: string;
}

export function PremiumFormLayout({ title, subtitle, fields, submitText }: PremiumFormLayoutProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e8f6ef] text-[var(--primary)] font-semibold text-sm">
              <Sparkles className="w-4 h-4" />
              SECURE PORTAL
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
              {title}
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              {subtitle}
            </p>
            <div className="flex items-center gap-4 text-gray-600 font-medium">
               <ShieldCheck className="w-8 h-8 text-blue-500" />
               Your data is 256-bit encrypted and secure.
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="perspective-1000"
          >
            <div className="bg-white rounded-[18px] p-8 md:p-10 shadow-lg border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-3xl pointer-events-none"></div>
              
              {isSubmitted ? (
                 <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center text-center py-12"
                 >
                   <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                     <ShieldCheck className="w-10 h-10 text-[var(--primary)]" />
                   </div>
                   <h3 className="text-2xl font-bold text-gray-800 mb-2">Request Submitted</h3>
                   <p className="text-gray-500">We have received your details securely.</p>
                 </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  {fields.map((field, idx) => (
                    <div key={idx}>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {field.label} {field.required && <span className="text-[var(--primary)]">*</span>}
                      </label>
                      {field.type === "textarea" ? (
                        <textarea 
                          name={field.name}
                          rows={4}
                          className="w-full px-5 py-4 rounded-[18px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all bg-gray-50 focus:bg-white text-gray-900 resize-y" 
                          placeholder={field.placeholder} 
                          required={field.required} 
                        ></textarea>
                      ) : (
                        <input 
                          type={field.type} 
                          name={field.name}
                          className="w-full px-5 py-4 rounded-[18px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all bg-gray-50 focus:bg-white text-gray-900" 
                          placeholder={field.placeholder} 
                          required={field.required} 
                        />
                      )}
                    </div>
                  ))}
                  <button type="submit" className="btn-primary w-full mt-8 rounded-[18px] py-4 group">
                    {submitText}
                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
