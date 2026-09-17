"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Premium3DEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    let requestId: number;
    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame to throttle for better performance
      cancelAnimationFrame(requestId);
      requestId = requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 30,
          y: (e.clientY / window.innerHeight - 0.5) * 30,
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestId);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Interactive glowing orbs */}
      <motion.div 
        animate={{ 
          x: mousePosition.x * -2, 
          y: mousePosition.y * -2 
        }} 
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
        className="absolute top-0 left-0 w-[40vw] h-[40vw] bg-blue-500/5 rounded-full blur-[120px]"
      />
      <motion.div 
        animate={{ 
          x: mousePosition.x * 2, 
          y: mousePosition.y * 2 
        }} 
        transition={{ type: "spring", stiffness: 40, damping: 30 }}
        className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-[#2eb872]/5 rounded-full blur-[120px]"
      />
      
      {/* Floating 3D-like glass particles */}
      {Array.from({ length: 20 }).map((_, i) => {
        const size = Math.random() * 20 + 5;
        return (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
              opacity: [0, 0.4, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
            className="absolute rounded-xl bg-blue-500/10 backdrop-blur-[2px] border border-blue-500/20"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              // Parallax effect based on mouse
              transform: `translate(${mousePosition.x * (Math.random() * 2 - 1)}px, ${mousePosition.y * (Math.random() * 2 - 1)}px)`
            }}
          />
        );
      })}
    </div>
  );
}
