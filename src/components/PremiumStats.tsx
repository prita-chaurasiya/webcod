"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Calendar, Users, ThumbsUp, Headset } from "lucide-react";

const stats = [
  { icon: Calendar, value: 6, label: "Years", sublabel: "On the market" },
  { icon: Users, value: 15, suffix: "+", label: "Team Members", sublabel: "Experienced staff" },
  { icon: ThumbsUp, value: 100, suffix: "%", label: "Satisfaction Rate", sublabel: "Happy clients" },
  { icon: Headset, value: 24, suffix: "/7 hour", label: "Client Support", sublabel: "Always available" },
];

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const [count, setCount] = useState(from);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function (easeOutQuart)
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(easeProgress * (to - from) + from));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        }
      };

      animationFrame = requestAnimationFrame(step);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, from, to, duration]);

  return <span ref={nodeRef}>{count}</span>;
}

export function PremiumStats() {
  return (
    <section className="py-12 relative bg-[#1f2937] overflow-hidden">
      {/* Decorative Network Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="var(--primary)" />
              <circle cx="80" cy="80" r="3" fill="var(--primary)" />
              <circle cx="80" cy="20" r="1.5" fill="var(--primary)" />
              <circle cx="20" cy="80" r="2.5" fill="var(--primary)" />
              <line x1="20" y1="20" x2="80" y2="80" stroke="var(--primary)" strokeWidth="0.5" />
              <line x1="20" y1="80" x2="80" y2="20" stroke="var(--primary)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-x divide-gray-800/50">
          {stats.map((stat, index) => {
            const lightBg = [
              "bg-orange-500/10",
              "bg-emerald-500/10",
              "bg-purple-500/10",
              "bg-orange-500/10"
            ];
            const hoverBorder = [
              "group-hover:border-orange-400/50",
              "group-hover:border-emerald-400/50",
              "group-hover:border-purple-400/50",
              "group-hover:border-orange-400/50"
            ];
            const iconColor = [
              "text-orange-400",
              "text-emerald-400",
              "text-purple-400",
              "text-orange-400"
            ];
            const glow = [
              "group-hover:shadow-[0_8px_30px_rgba(59,130,246,0.2)]",
              "group-hover:shadow-[0_8px_30px_rgba(16,185,129,0.2)]",
              "group-hover:shadow-[0_8px_30px_rgba(168,85,247,0.2)]",
              "group-hover:shadow-[0_8px_30px_rgba(249,115,22,0.2)]"
            ];
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-start gap-4 lg:gap-6 p-6 rounded-2xl ${lightBg[index]} border border-white/5 ${hoverBorder[index]} ${glow[index]} hover:-translate-y-2 transition-all duration-500 backdrop-blur-md group`}
              >
                <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-[18px] bg-gray-900 flex items-center justify-center shrink-0 border border-gray-700 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 shadow-md`}>
                  <stat.icon className={`w-6 h-6 lg:w-8 lg:h-8 ${iconColor[index]}`} />
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-white flex items-baseline drop-shadow-sm">
                    <Counter from={0} to={stat.value} duration={2.5} />
                    {stat.suffix && <span className="text-xl lg:text-2xl ml-1">{stat.suffix}</span>}
                  </div>
                  <div className="text-lg font-bold text-gray-200 mt-1">{stat.label}</div>
                  <div className="text-sm text-gray-400 mt-1">{stat.sublabel}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
