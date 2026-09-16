"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    setIsClient(true);
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
    <section className="py-24 bg-[#f8fafc] overflow-hidden relative">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-[#f8fafc] via-transparent to-[#f8fafc] w-full" />
      
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-20 mb-16">
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm border border-slate-100 p-1.5">
              <img src="/images/logo.png" alt="Icon" className="w-full h-full object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
            </div>
            <span className="text-[#f4511e] font-extrabold text-lg uppercase tracking-wider">
              TECHNOLOGY WE USE
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900"
          >
            Powered by modern technologies
          </motion.h2>
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
                className="w-48 h-48 bg-white hover:bg-blue-50/50 border border-slate-100 hover:border-blue-100 rounded-3xl p-6 flex flex-col items-center justify-center gap-6 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <img src={tech.img} alt={tech.name} className="w-20 h-20 object-contain" />
                <div className="font-extrabold text-lg text-slate-800">{tech.name}</div>
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
                className="w-48 h-48 bg-white hover:bg-emerald-50/50 border border-slate-100 hover:border-emerald-100 rounded-3xl p-6 flex flex-col items-center justify-center gap-6 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <img src={tech.img} alt={tech.name} className="w-20 h-20 object-contain" />
                <div className="font-extrabold text-lg text-slate-800">{tech.name}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
