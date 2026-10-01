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

const premiumImages = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=2000&auto=format&fit=crop"
];

export function ServiceBannerShort({ title, breadcrumbs, bgImage }: ServiceBannerShortProps) {
  // Deterministic image selection based on title length and char codes
  const imageIndex = title ? title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % premiumImages.length : 0;
  const finalBgImage = bgImage || premiumImages[imageIndex];

  return (
    <section className="relative w-full h-[300px] md:h-[350px] overflow-hidden flex flex-col justify-center bg-white mt-0 lg:mt-[-90px] pt-20">
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

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 mt-10">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[var(--heading)] mb-5"
        >
          {title}
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-blue-100 text-[13px] font-semibold text-[var(--heading)]/80"
        >
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <div key={index} className="flex items-center gap-2">
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-[var(--heading)] transition-colors uppercase">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={`uppercase ${isLast ? 'text-[var(--heading)]' : ''}`}>
                    {crumb.label}
                  </span>
                )}
                {!isLast && <span className="text-[var(--heading)]/40 font-light mx-1">/</span>}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
