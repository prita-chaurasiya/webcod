"use client";

import { motion } from "framer-motion";

interface AboutBreadcrumbProps {
  title: string;
}

export function AboutBreadcrumb({ title }: AboutBreadcrumbProps) {
  return (
    <section className="relative w-full h-[250px] md:h-[350px] bg-[#020617] overflow-hidden flex flex-col items-center justify-center">
      {/* Background SVG Waves - Left */}
      <div className="absolute top-0 left-0 w-1/2 h-full opacity-40 pointer-events-none">
        <svg 
          className="w-full h-full text-blue-600/40" 
          viewBox="0 0 500 500" 
          preserveAspectRatio="none"
        >
          {Array.from({ length: 15 }).map((_, i) => (
            <path 
              key={i} 
              d={`M ${-50 + i * 15} 0 C ${200 + i * 15} 150, ${-50 + i * 15} 350, ${150 + i * 15} 500`} 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
            />
          ))}
        </svg>
      </div>

      {/* Background SVG Waves - Right */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-40 pointer-events-none">
        <svg 
          className="w-full h-full text-blue-600/40" 
          viewBox="0 0 500 500" 
          preserveAspectRatio="none"
          style={{ transform: 'scaleX(-1)' }}
        >
          {Array.from({ length: 15 }).map((_, i) => (
            <path 
              key={i} 
              d={`M ${-50 + i * 15} 0 C ${200 + i * 15} 150, ${-50 + i * 15} 350, ${150 + i * 15} 500`} 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
            />
          ))}
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 mt-16 md:mt-0">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-black text-white uppercase tracking-wider mb-6 text-center"
        >
          {title}
        </motion.h1>
        
        {/* Horizontal Line matching the website's accent color (orange) */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-[85%] md:w-[70%] max-w-5xl h-[3px] bg-accent rounded-full"
        />
      </div>
    </section>
  );
}
