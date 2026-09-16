"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  breadcrumbs: Breadcrumb[];
  bgImage?: string;
}

export function PageBanner({ title, breadcrumbs = [], bgImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop" }: PageBannerProps) {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-[#0B0F19] overflow-hidden flex items-center min-h-[400px]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Page Banner Background"
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale"
        />
        {/* Deep Tech gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0F19] via-[#0B0F19]/90 to-[#2eb872]/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-100" />
        
        {/* Subtle glowing orbs */}
        <motion.div animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
        <motion.div animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }} transition={{ duration: 6, repeat: Infinity, delay: 1 }} className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight mb-8 leading-[1.1]"
          >
            {title}
          </motion.h1>

          {/* Breadcrumbs Pill */}
          <motion.nav 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="inline-flex items-center px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm shadow-xl"
          >
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <div key={index} className="flex items-center uppercase tracking-widest text-[11px] font-bold">
                  {index === 0 ? (
                    <Link 
                      href={crumb.href || "/"} 
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <Link 
                      href={crumb.href || "#"} 
                      className={`transition-colors ${isLast ? "text-[#2eb872] pointer-events-none" : "text-slate-300 hover:text-white"}`}
                      aria-current={isLast ? "page" : undefined}
                    >
                      {crumb.label}
                    </Link>
                  )}
                  {!isLast && (
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 mx-3 shrink-0" />
                  )}
                </div>
              );
            })}
          </motion.nav>
        </div>
      </div>
    </section>
  );
}
