"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { title: "E-Commerce", icon: "https://webcodian.com/public/web/assets/img/services/shopping.png", slug: "e-commerce" },
  { title: "School & College", icon: "https://webcodian.com/public/web/assets/img/services/school.png", slug: "school-college" },
  { title: "Institute", icon: "https://webcodian.com/public/web/assets/img/services/ux.png", slug: "institute" },
  { title: "Tour & Travel", icon: "https://webcodian.com/public/web/assets/img/services/walking-tour.png", slug: "tour-travel" },
  { title: "NGO", icon: "https://webcodian.com/public/web/assets/img/services/earth.png", slug: "ngo" },
  { title: "Consulting", icon: "https://webcodian.com/public/web/assets/img/services/consultant.png", slug: "consulting" },
  { title: "HealthCare", icon: "https://webcodian.com/public/web/assets/img/services/doctor-consultation.png", slug: "healthcare" },
  { title: "Security Service", icon: "https://webcodian.com/public/web/assets/img/services/guard.png", slug: "security-service" },
  { title: "Manufacuring", icon: "https://webcodian.com/public/web/assets/img/services/manu.png", slug: "manufacturing" },
  { title: "News & Blog", icon: "https://webcodian.com/public/web/assets/img/services/blog.png", slug: "news-blog" },
  { title: "Hotel & Restaurant", icon: "https://webcodian.com/public/web/assets/img/services/hotel.png", slug: "hotel-restaurant" },
  { title: "Real Estate", icon: "https://webcodian.com/public/web/assets/img/services/deal.png", slug: "real-estate" },
];

const colors = [
  { bg: "bg-blue-500/10", glow: "from-blue-500/30", iconBg: "bg-blue-500/20", text: "text-blue-400", border: "from-blue-500 to-cyan-500" },
  { bg: "bg-cyan-500/10", glow: "from-cyan-500/30", iconBg: "bg-cyan-500/20", text: "text-cyan-400", border: "from-cyan-500 to-blue-500" },
];

export function PremiumCategories() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const cats = containerRef.current.querySelectorAll('.category-card');
      
      gsap.fromTo(cats,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, []);

  return (
    <section className="py-24 bg-transparent relative overflow-hidden perspective-[1000px]" ref={containerRef}>
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-semibold text-sm mb-4 tracking-widest shadow-[0_0_15px_rgba(6,182,212,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span>
            OUR CATEGORIES
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-4 max-w-2xl mx-auto"
          >
            We use a systematic approach to maximum and optimize results.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 max-w-2xl mx-auto font-medium"
          >
            We follow the below process to develop any website for various industries.
          </motion.p>
        </div>

        <div 
          className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide"
        >
          {categories.map((cat, index) => {
            const color = colors[index % colors.length];
            return (
              <motion.div 
                key={index} 
                whileHover={{ 

                  y: -5, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 } 
                }}
                className="category-card opacity-0 min-w-[75vw] sm:min-w-[45vw] md:min-w-0 shrink-0 snap-center md:snap-align-none transform-gpu h-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Link href={`/industries/${cat.slug}`} className="block group w-full h-full outline-none">
                  <div className="relative rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center gap-6 shadow-[0_5px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden h-full">
                    
                    {/* Always-on Animated Gradient Border Overlay */}
                    <motion.div 
                      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      className={`absolute inset-0 bg-gradient-to-r ${color.border} bg-[length:200%_200%] opacity-100 rounded-2xl -z-10`}
                    />
                    
                    {/* Inner slightly tinted dark background */}
                    <div className={`absolute inset-[2px] bg-gradient-to-br from-[#0f172a] to-[#0a0f1c] rounded-[14px] -z-10`}></div>

                    {/* Always-on Glow Effect that pulses */}
                    <motion.div 
                      animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                      className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${color.glow} to-transparent blur-2xl rounded-full pointer-events-none z-0`}
                    />

                    <div 
                      className={`w-16 h-16 md:w-20 md:h-20 bg-white/5 backdrop-blur-md rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 border border-white/10 relative z-10`}
                      style={{ transform: "translateZ(30px)" }}
                    >
                      <img src={cat.icon} alt={cat.title} className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:-translate-y-1 transition-transform duration-500 drop-shadow-lg filter brightness-0 invert" />
                    </div>
                    
                    <div style={{ transform: "translateZ(20px)" }} className="relative z-10">
                      <h3 className={`text-base md:text-lg font-bold ${color.text} transition-colors duration-300`}>
                        {cat.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
      
      {/* Hide scrollbar styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
