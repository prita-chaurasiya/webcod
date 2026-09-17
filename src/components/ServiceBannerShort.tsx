"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface ServiceBannerShortProps {
  title: string;
  breadcrumbs: Breadcrumb[];
  bgImage?: string;
}

export function ServiceBannerShort({ title, breadcrumbs, bgImage = "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop" }: ServiceBannerShortProps) {
  return (
    <section className="relative w-full h-[300px] md:h-[350px] overflow-hidden flex flex-col justify-center bg-slate-900 mt-0 lg:mt-[-90px] pt-20">
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Banner Background"
          className="w-full h-full object-cover opacity-50"
        />
        {/* Gradient overlay to replicate the reddish/purple tint from the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 via-slate-900/40 to-slate-900/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 mt-10">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-5"
        >
          {title}
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[13px] font-semibold text-white/80"
        >
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <div key={index} className="flex items-center gap-2">
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors uppercase">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={`uppercase ${isLast ? 'text-white' : ''}`}>
                    {crumb.label}
                  </span>
                )}
                {!isLast && <span className="text-white/40 font-light mx-1">/</span>}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
