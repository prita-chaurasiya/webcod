"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Home, Sparkles } from "lucide-react";

export interface Breadcrumb {
  label: string;
  href?: string;
}

export interface PageBannerProps {
  title: string;
  breadcrumbs: Breadcrumb[];
  bgImage?: string;
  subtitle?: string;
  badge?: string;
}

const premiumImages = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop"
];

export function PageBanner({ 
  title, 
  breadcrumbs = [], 
  subtitle,
  badge = "✦ WEBCODIAN ENTERPRISE SERVICES",
  bgImage
}: PageBannerProps) {
  const resolvedBreadcrumbs = breadcrumbs && breadcrumbs.length > 0
    ? breadcrumbs
    : [
        { label: "Home", href: "/" },
        { label: title }
      ];

  // Deterministic image selection based on title length and char codes
  const imageIndex = title ? title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % premiumImages.length : 0;
  const finalBgImage = bgImage || premiumImages[imageIndex];

  return (
    <section className="relative pt-32 pb-14 md:pt-36 md:pb-16 border-b border-blue-100 overflow-hidden select-none bg-white">
      
      {/* Background Image with White Fade */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${finalBgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-white via-white/95 to-white/60" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-50/30 to-white/90" />

      {/* Animated Ambient Glows */}
      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-24 left-1/4 w-[480px] h-[340px] bg-[var(--primary)]/15 rounded-full blur-[100px] pointer-events-none z-0"
      />
      <motion.div
        animate={{
          x: [0, -35, 0],
          y: [0, 25, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 -right-20 w-[420px] h-[360px] bg-blue-600/15 rounded-full blur-[110px] pointer-events-none z-0"
      />

      {/* Cyber Grid Pattern Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.4) 1px, transparent 1px)`,
          backgroundSize: "28px 28px"
        }}
      />

      {/* Animated Laser Scanning Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/10 overflow-hidden">
        <motion.div
          animate={{
            x: ["-100%", "200%"]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-1/3 h-full bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent shadow-[0_0_12px_var(--primary)]"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          
          {/* Left: Badge, Title & Subtitle */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 backdrop-blur-md border border-[var(--primary)]/30 text-[var(--primary)] text-xs font-bold tracking-wider uppercase mb-4 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-50 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-50"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[var(--primary)]" />
              <span>{badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-[var(--heading)] tracking-tight leading-[1.15]"
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="mt-3 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl"
              >
                {subtitle}
              </motion.p>
            )}
          </div>

          {/* Right: Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
            className="shrink-0"
          >
            <nav 
              aria-label="Breadcrumb"
              className="inline-flex flex-wrap items-center gap-1.5 px-4 py-2.5 rounded-[18px] bg-white/80 backdrop-blur-xl border border-blue-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
            >
              {resolvedBreadcrumbs.map((crumb, idx) => {
                const isLast = idx === resolvedBreadcrumbs.length - 1;
                const isFirst = idx === 0;

                return (
                  <div key={idx} className="flex items-center">
                    {crumb.href && !isLast ? (
                      <Link
                        href={crumb.href}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[var(--heading)] transition-all duration-200 py-1 px-2 rounded-lg hover:bg-white/10 group"
                      >
                        {isFirst && <Home className="w-3.5 h-3.5 text-[var(--primary)] group-hover:scale-110 transition-transform" />}
                        <span>{crumb.label}</span>
                      </Link>
                    ) : (
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-bold py-1 px-2.5 rounded-lg ${
                          isLast
                            ? "bg-[var(--primary)]/20 text-[var(--primary)] border border-[var(--primary)]/30 shadow-[0_0_12px_rgba(46,184,114,0.25)]"
                            : "text-slate-600"
                        }`}
                      >
                        {isFirst && <Home className="w-3.5 h-3.5 text-[var(--primary)]" />}
                        <span>{crumb.label}</span>
                      </span>
                    )}

                    {!isLast && (
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500 mx-1 shrink-0" />
                    )}
                  </div>
                );
              })}
            </nav>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--primary)]/30 to-transparent" />
    </section>
  );
}
