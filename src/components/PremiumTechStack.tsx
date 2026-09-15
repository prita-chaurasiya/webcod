"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const technologiesRow1 = [
  { name: "React.js", color: "text-blue-500", icon: "⚛️" },
  { name: "Node.js", color: "text-green-500", icon: "🟢" },
  { name: "Python", color: "text-yellow-500", icon: "🐍" },
  { name: "Laravel", color: "text-red-500", icon: "🔥" },
  { name: "Flutter", color: "text-blue-400", icon: "📱" },
  { name: "Kotlin", color: "text-purple-500", icon: "☕" },
];

const technologiesRow2 = [
  { name: "Java", color: "text-orange-500", icon: "☕" },
  { name: "JavaScript", color: "text-yellow-400", icon: "📜" },
  { name: "WordPress", color: "text-blue-600", icon: "📝" },
  { name: "Shopify", color: "text-green-600", icon: "🛍️" },
  { name: "Magento", color: "text-orange-600", icon: "🛒" },
  { name: "CodeIgniter", color: "text-red-600", icon: "🔥" },
];

export function PremiumTechStack() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const rowVariantsLeft = {
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

  const rowVariantsRight = {
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
    <section className="py-24 bg-slate-900 border-y border-slate-800 overflow-hidden relative">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-slate-900 via-transparent to-slate-900 w-full" />
      
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-20 mb-16">
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-semibold text-sm mb-4 tracking-widest"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            TECHNOLOGY WE USE
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white"
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
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1, rotateX: 10, rotateY: 10, zIndex: 30 }}
                className="w-48 bg-slate-800/80 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 flex flex-col items-center justify-center gap-4 shadow-xl cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="text-5xl" style={{ transform: "translateZ(30px)" }}>{tech.icon}</div>
                <div className={`font-bold text-lg ${tech.color}`} style={{ transform: "translateZ(20px)" }}>{tech.name}</div>
              </motion.div>
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
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1, rotateX: -10, rotateY: -10, zIndex: 30 }}
                className="w-48 bg-slate-800/80 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 flex flex-col items-center justify-center gap-4 shadow-xl cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="text-5xl" style={{ transform: "translateZ(30px)" }}>{tech.icon}</div>
                <div className={`font-bold text-lg ${tech.color}`} style={{ transform: "translateZ(20px)" }}>{tech.name}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
