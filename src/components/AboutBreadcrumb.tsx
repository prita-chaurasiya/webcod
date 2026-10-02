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
  badge = "? WEBCODIAN INNOVATION & EXCELLENCE",
  breadcrumbs,
  highlights
}: AboutBreadcrumbProps) {
  const resolvedBreadcrumbs: BreadcrumbItem[] = breadcrumbs && breadcrumbs.length > 0
    ? breadcrumbs
    : [
        { label: "Home", href: "/" },
        { label: title }
      ];

  return (
    <section className="relative pt-32 pb-14 md:pt-36 md:pb-16 border-b border-slate-800 overflow-hidden select-none bg-slate-900">
      
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c"
          alt="Banner Background"
          className="w-full h-full object-cover animate-ken-burns opacity-60"
        />
        {/* Dark overlay for premium text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40" />
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
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-blue-300 text-xs font-bold tracking-wider uppercase mb-4 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>{badge}</span>
            </motion.div>

            {/* Title with White Text */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.1] uppercase"
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
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/20 text-xs text-slate-200 font-medium backdrop-blur-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
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
              className="inline-flex flex-wrap items-center gap-1.5 px-4 py-2.5 rounded-[18px] bg-slate-900/60 backdrop-blur-xl border border-slate-700 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
            >
              {resolvedBreadcrumbs.map((crumb, idx) => {
                const isLast = idx === resolvedBreadcrumbs.length - 1;
                const isFirst = idx === 0;

                return (
                  <div key={idx} className="flex items-center">
                    {crumb.href && !isLast ? (
                      <Link
                        href={crumb.href}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-all duration-200 py-1 px-2 rounded-lg hover:bg-white/10 group"
                      >
                        {isFirst && <Home className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform" />}
                        <span>{crumb.label}</span>
                      </Link>
                    ) : (
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-bold py-1 px-2.5 rounded-lg ${
                          isLast
                            ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                            : "text-slate-400"
                        }`}
                      >
                        {isFirst && <Home className="w-3.5 h-3.5 text-blue-400" />}
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
    </section>
  );
}
