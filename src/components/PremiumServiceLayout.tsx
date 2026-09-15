"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

interface PremiumServiceLayoutProps {
  title: string;
  description: string;
  features: string[];
}

export function PremiumServiceLayout({ title, description, features }: PremiumServiceLayoutProps) {
  return (
    <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
        
        <div className="grid lg:grid-cols-3 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">{title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {description}
              </p>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Offerings</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-[#e8f6ef] rounded-xl group hover:bg-[#d1ecd9] transition-colors"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#2eb872] shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sticky Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 perspective-1000"
          >
            <div className="sticky top-24 bg-gradient-to-br from-[#1f2937] to-black rounded-3xl p-8 shadow-2xl relative overflow-hidden transform hover:-translate-y-2 hover:rotate-y-2 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2eb872]/20 rounded-full blur-2xl pointer-events-none"></div>
              
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Need this service?</h3>
              <p className="text-gray-400 mb-8 relative z-10">
                Contact our experts today to discuss how we can help you achieve your goals with {title}.
              </p>
              
              <Link href="/contact" className="w-full bg-[#2eb872] hover:bg-[#259b5f] text-white px-6 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(46,184,114,0.3)] hover:shadow-[0_0_30px_rgba(46,184,114,0.5)] flex items-center justify-center gap-2 group relative z-10">
                Get A Quote
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
