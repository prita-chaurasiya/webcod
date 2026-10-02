"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export interface PremiumFeatureCardProps {
  number: string;
  imageTitle: string;
  imageSrc: string;
  category: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
  reverse?: boolean;
}

export function PremiumFeatureCard({
  number,
  imageTitle,
  imageSrc,
  category,
  title,
  description,
  linkText,
  href,
  reverse = false
}: PremiumFeatureCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} bg-gradient-to-b from-white to-slate-50 rounded-[2rem] border border-slate-200 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500`}
    >
      {/* Image Side */}
      <div className="w-full md:w-1/2 relative min-h-[350px] md:min-h-[400px] overflow-hidden group">
        <img 
          src={imageSrc} 
          alt={imageTitle} 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
        />
        {/* Gradients for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/90 via-[#0a192f]/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f]/50 to-transparent"></div>
        
        {/* Floating Number & Title */}
        <div className="absolute bottom-8 left-8 text-white z-10">
          <div className="text-[120px] font-bold leading-none opacity-20 -mb-8 tracking-tighter mix-blend-overlay">
            {number}
          </div>
          <div className="text-3xl font-bold tracking-tight drop-shadow-md">
            {imageTitle}
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full md:w-1/2 p-10 md:p-14 lg:p-16 flex flex-col justify-center">
        <div className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">
          {category}
        </div>
        <h3 className="text-3xl lg:text-4xl font-bold text-[#0f2c59] mb-6 leading-[1.1] tracking-tight">
          {title}
        </h3>
        <p className="text-slate-600 mb-10 leading-relaxed font-medium text-lg">
          {description}
        </p>
        <Link 
          href={href} 
          className="inline-flex items-center gap-2 text-blue-700 font-bold text-lg hover:text-blue-900 transition-colors group w-fit"
        >
          {linkText} 
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

