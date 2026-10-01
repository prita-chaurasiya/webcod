"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PremiumProjectCTA } from "./PremiumProjectCTA";

interface SolutionFeature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface PremiumSolutionDetailProps {
  title: string;
  subtitle: string;
  heroHeading: React.ReactNode;
  heroDescription: React.ReactNode;
  heroImage: string;
  whyHeading: React.ReactNode;
  whyDescription: string;
  whyImage: string;
  features: SolutionFeature[];
}

export function PremiumSolutionDetail({
  title,
  subtitle,
  heroHeading,
  heroDescription,
  heroImage,
  whyHeading,
  whyDescription,
  whyImage,
  features,
}: PremiumSolutionDetailProps) {
  return (
    <div className="bg-white min-h-screen font-sans overflow-hidden">
      
      {/* 1. Hero Section (Like Screenshot 1) */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#f4f9fb] overflow-hidden">
        {/* Subtle background blob */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-blue-50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-[55%] text-left"
            >
              <h1 className="text-4xl md:text-[44px] lg:text-[52px] font-bold text-slate-900 leading-[1.2] mb-8 tracking-[-0.02em]">
                {heroHeading}
              </h1>
              
              <h2 className="text-xl md:text-2xl font-bold text-[#c25916] mb-6 leading-snug">
                {subtitle}
              </h2>
              
              <div className="text-slate-600 text-base md:text-[17px] mb-8 leading-[1.7] space-y-5 font-medium max-w-3xl">
                {heroDescription}
              </div>
              
            </motion.div>

            {/* Right Illustration */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:w-[45%] w-full flex justify-center lg:justify-end"
            >
              <img src={heroImage} alt={title} className="w-full max-w-[600px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Why Choose / Features Section (Like Screenshot 2) */}
      <section className="py-20 lg:py-32 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left Illustration */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-[40%] w-full flex justify-center lg:justify-start order-2 lg:order-1"
            >
              <img src={whyImage} alt="Why Choose Us" className="w-full max-w-[500px] h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-700" />
            </motion.div>
            
            {/* Right Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-[60%] order-1 lg:order-2"
            >
              <h3 className="text-3xl md:text-[38px] font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                {whyHeading}
              </h3>
              <p className="text-slate-600 text-lg mb-12 font-medium">
                {whyDescription}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
                {features.map((feature, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    key={idx} 
                    className="bg-white p-6 rounded-[20px] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] hover:border-blue-100 transition-all duration-300 flex items-start gap-5 group"
                  >
                    <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center shrink-0 text-[#c25916] group-hover:bg-[#c25916] group-hover:text-white transition-colors duration-300 border border-orange-100/50">
                      {feature.icon || (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-[17px] mb-2">{feature.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed font-medium">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Reused Premium CTA */}
      <PremiumProjectCTA />

    </div>
  );
}
