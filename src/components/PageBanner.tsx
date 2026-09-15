"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageBannerProps {
  title: string;
  breadcrumbs: Breadcrumb[];
}

export function PageBanner({ title, breadcrumbs = [] }: PageBannerProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[#1f2937] overflow-hidden flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#2eb872] opacity-10 rounded-full blur-[100px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500 opacity-10 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-700"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "50px 50px" }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <motion.div 
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="text-center max-w-4xl mx-auto perspective-1000"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            style={{ transform: "translateZ(50px)" }}
            className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight"
          >
            {title}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ transform: "translateZ(30px)" }}
            className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/10 shadow-xl"
          >
            <ol className="flex items-center space-x-2 text-sm md:text-base font-medium">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <li key={index} className="flex items-center">
                    {index === 0 ? (
                      <Link href={crumb.href} className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">
                        <Home className="w-4 h-4" />
                        {crumb.label}
                      </Link>
                    ) : (
                      <Link 
                        href={crumb.href} 
                        className={`px-4 py-2 rounded-full transition-all ${isLast ? "bg-[#2eb872] text-white shadow-[0_0_15px_rgba(46,184,114,0.4)]" : "text-gray-300 hover:text-white hover:bg-white/10"}`}
                        aria-current={isLast ? "page" : undefined}
                      >
                        {crumb.label}
                      </Link>
                    )}
                    {!isLast && (
                      <ChevronRight className="w-4 h-4 text-gray-500 mx-1 shrink-0" />
                    )}
                  </li>
                );
              })}
            </ol>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom Wave Divider matching main theme */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto text-white fill-current">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}
