"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Home, Sparkles, CheckCircle2 } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface AboutBreadcrumbProps {
  title: string;
  subtitle?: string;
  badge?: string;
  breadcrumbs?: BreadcrumbItem[];
  highlights?: string[];
}

export function AboutBreadcrumb({
  title,
  subtitle,
  badge = "✦ WEBCODIAN INNOVATION & EXCELLENCE",
  breadcrumbs,
  highlights
}: AboutBreadcrumbProps) {
  // If no breadcrumbs provided, auto-generate from title
  const resolvedBreadcrumbs: BreadcrumbItem[] = breadcrumbs && breadcrumbs.length > 0
    ? breadcrumbs
    : [
        { label: "Home", href: "/" },
        { label: title }
      ];

  return (
    <section className="relative pt-32 pb-14 md:pt-36 md:pb-16 bg-[#060913] border-b border-white/10 overflow-hidden select-none">
      {/* Dynamic Animated Ambient Glows */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -25, 0],
          scale: [1, 1.12, 1]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-24 left-1/4 w-[500px] h-[360px] bg-cyan-500/18 rounded-full blur-[110px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.18, 1]
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 -right-20 w-[450px] h-[380px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -bottom-10 left-1/3 w-[350px] h-[200px] bg-cyan-400/10 rounded-full blur-[90px] pointer-events-none"
      />

      {/* Cyber Grid Pattern Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: "28px 28px"
        }}
      />

      {/* Animated Glowing Laser Scanning Line across top border */}
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
          className="w-1/3 h-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_12px_rgba(6,182,212,0.8)]"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          
          {/* Left Column: Badge, Title & Subtitle */}
          <div className="max-w-3xl">
            {/* Animated Luxury Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-md border border-cyan-500/30 text-cyan-400 text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-4 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{badge}</span>
            </motion.div>

            {/* Title with Gradient Polish */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-white tracking-tight leading-[1.1] uppercase"
            >
              {title}
            </motion.h1>

            {/* Subtitle if provided */}
            {subtitle ? (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="mt-3 text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl"
              >
                {subtitle}
              </motion.p>
            ) : null}

            {/* Optional Highlights Chips */}
            {highlights && highlights.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
                className="flex flex-wrap items-center gap-2.5 mt-4"
              >
                {highlights.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] sm:text-xs text-slate-300 font-medium backdrop-blur-sm"
                  >
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400" />
                    {item}
                  </span>
                ))}
              </motion.div>
            )}
          </div>

          {/* Right Column: Luxury Interactive Breadcrumb Trail */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
            className="shrink-0"
          >
            <nav 
              aria-label="Breadcrumb"
              className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/5 shadow-sm"
            >
              {resolvedBreadcrumbs.map((crumb, idx) => {
                const isLast = idx === resolvedBreadcrumbs.length - 1;
                const isFirst = idx === 0;

                return (
                  <div key={idx} className="flex items-center">
                    {crumb.href && !isLast ? (
                      <Link
                        href={crumb.href}
                        className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-slate-400 hover:text-white transition-colors duration-200 group"
                      >
                        {isFirst && <Home className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400 group-hover:text-white transition-colors" />}
                        <span>{crumb.label}</span>
                      </Link>
                    ) : (
                      <span
                        className={`inline-flex items-center gap-1.5 text-[11px] sm:text-xs ${
                          isLast
                            ? "text-cyan-400 font-semibold"
                            : "text-slate-400 font-medium"
                        }`}
                      >
                        {isFirst && <Home className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
                        <span>{crumb.label}</span>
                      </span>
                    )}

                    {!isLast && (
                      <span className="text-slate-500/50 mx-2 text-[10px] sm:text-xs font-light">/</span>
                    )}
                  </div>
                );
              })}
            </nav>
          </motion.div>

        </div>
      </div>

      {/* Bottom Glowing Accent Border Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </section>
  );
}
