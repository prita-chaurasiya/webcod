"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const technologiesRow1 = [
  { name: "Codeigniter", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" },
  { name: "Laravel", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "Magento", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg" },
  { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Wordpress", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
];

const technologiesRow2 = [
  { name: "shopify", img: "https://cdn.simpleicons.org/shopify/95BF47" },
  { name: "Flutter", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Kotlin", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Javascript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React-Js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
];

export function PremiumTechStack() {
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
    
    if (containerRef.current) {
      const texts = containerRef.current.querySelectorAll('.tech-header-text');
      
      gsap.fromTo(texts,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, []);

  if (!isClient) return null;

  const rowVariantsLeft: any = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  const rowVariantsRight: any = {
    animate: {
      x: [-1035, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="py-24 bg-transparent overflow-hidden relative" ref={containerRef}>
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-[#0a0f1c] via-transparent to-[#0a0f1c] w-full" />
      
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-20 mb-16">
        <div className="text-center">
          <div 
            className="inline-flex items-center gap-2 mb-4 tech-header-text opacity-0"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 shadow-sm border border-white/10 p-1.5">
              <img src="/images/logo.png" alt="Icon" className="w-full h-full object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
            </div>
            <span className="text-cyan-400 font-extrabold text-lg uppercase tracking-wider">
              TECHNOLOGY WE USE
            </span>
          </div>
          <h2 
            className="text-4xl md:text-5xl font-black text-white tech-header-text opacity-0"
          >
            Powered by modern technologies
          </h2>
        </div>
      </div>

      {/* Marquee Rows */}
      <div className="relative w-full flex flex-col gap-6 perspective-[1000px] z-0">
        
        {/* Row 1 - Moves Left */}
        <div className="flex w-[2070px]">
          <motion.div
            variants={rowVariantsLeft}
            animate="animate"
            className="flex gap-6 items-center"
          >
            {[...technologiesRow1, ...technologiesRow1, ...technologiesRow1].map((tech, idx) => (
              <div
                key={idx}
                className="w-48 h-48 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 rounded-3xl p-6 flex flex-col items-center justify-center gap-6 shadow-sm hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 backdrop-blur-sm"
              >
                <img src={tech.img} alt={tech.name} className="w-20 h-20 object-contain drop-shadow-md" />
                <div className="font-extrabold text-lg text-slate-200">{tech.name}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Moves Right */}
        <div className="flex w-[2070px]">
          <motion.div
            variants={rowVariantsRight}
            animate="animate"
            className="flex gap-6 items-center"
          >
            {[...technologiesRow2, ...technologiesRow2, ...technologiesRow2].map((tech, idx) => (
              <div
                key={idx}
                className="w-48 h-48 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/30 rounded-3xl p-6 flex flex-col items-center justify-center gap-6 shadow-sm hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 backdrop-blur-sm"
              >
                <img src={tech.img} alt={tech.name} className="w-20 h-20 object-contain drop-shadow-md" />
                <div className="font-extrabold text-lg text-slate-200">{tech.name}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
