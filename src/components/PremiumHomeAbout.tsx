"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";

export function PremiumHomeAbout() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
      
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-[1.2]">
                Empowering the Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2eb872] to-teal-500">World-Class IT Training & Development</span>
              </h2>
              
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                <p>
                  Founded with a mission to make world-class technology accessible to businesses and students of all sizes, <strong>WebCodian</strong> has grown into one of India's most trusted computer institutes and custom software development companies.
                </p>
                <p>
                  Headquartered in India, our team of expert developers, educators, and strategists has trained thousands of students and delivered exceptional projects across multiple industry verticals. We believe technology should solve real problems. Whether you're a student starting your career or an enterprise modernizing legacy systems, we bring the same level of commitment and craftsmanship to every engagement.
                </p>
              </div>
            </motion.div>

            {/* Feature Block */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-start gap-6 pt-6 mt-6 border-t border-slate-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#2eb872]/10 flex items-center justify-center shrink-0 border border-[#2eb872]/20 shadow-sm">
                <Code2 className="w-8 h-8 text-[#2eb872]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Custom Software & Training Excellence</h3>
                <p className="text-slate-500 leading-relaxed mb-4">
                  We deliver secure, scalable software solutions that simplify operations, boost team productivity, and support sustainable business growth. Every line of code is written with your long-term success in mind.
                </p>
                <Link href="/about" className="inline-flex items-center gap-2 text-[#2eb872] font-bold hover:text-teal-700 transition-colors group">
                  Read our full story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Image Composition */}
          <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px] flex items-center justify-center lg:justify-end">
            
            {/* Main large image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-full max-w-[500px] h-[400px] lg:h-[500px] rounded-[32px] overflow-hidden shadow-2xl z-10 ml-auto border border-slate-100"
            >
              <div className="absolute inset-0 bg-slate-900">
                <img 
                  src="/images/portfolio-5.jpg" // We'll use a placeholder or an existing image here
                  alt="WebCodian Development" 
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700 hover:scale-105 transform"
                  onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop'; }}
                />
              </div>
              {/* Bottom Gradient for text visibility if any */}
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none"></div>
            </motion.div>

            {/* Overlapping floating image */}
            <motion.div 
              initial={{ opacity: 0, y: -40, x: -40 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="absolute top-10 lg:top-16 left-0 lg:left-0 w-64 lg:w-72 h-48 lg:h-56 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] z-20 border-[6px] border-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop" 
                alt="Technology Network" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 left-10 lg:-left-10 z-30 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-[#2eb872]/10 flex items-center justify-center">
                <span className="text-[#2eb872] font-black text-xl">10+</span>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">Years of</p>
                <p className="text-xs text-slate-500 font-medium">Excellence</p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
