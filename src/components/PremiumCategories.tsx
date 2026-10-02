"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  { title: "E-Commerce", icon: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400", slug: "e-commerce" },
  { title: "School & College", icon: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400", slug: "school-college" },
  { title: "Institute", icon: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400", slug: "institute" },
  { title: "Tour & Travel", icon: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=400", slug: "tour-travel" },
  { title: "NGO", icon: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=400", slug: "ngo" },
  { title: "Consulting", icon: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400", slug: "consulting" },
  { title: "HealthCare", icon: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400", slug: "healthcare" },
  { title: "Security Service", icon: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=400", slug: "security-service" },
  { title: "Manufacturing", icon: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80&w=400", slug: "manufacturing" },
  { title: "News & Blog", icon: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=400", slug: "news-blog" },
  { title: "Hotel & Restaurant", icon: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400", slug: "hotel-restaurant" },
  { title: "Real Estate", icon: "https://images.unsplash.com/photo-1560518883-ce09059eeefa?auto=format&fit=crop&q=80&w=400", slug: "real-estate" },
];

const colors = [
  { bg: "bg-blue-50/70", glow: "from-blue-200/50", iconBg: "bg-blue-100", text: "text-blue-700", border: "from-blue-400 to-cyan-400" },
  { bg: "bg-slate-50/70", glow: "from-emerald-200/50", iconBg: "bg-slate-50", text: "text-[var(--primary)]", border: "from-emerald-400 to-teal-400" },
  { bg: "bg-slate-50/70", glow: "from-orange-200/50", iconBg: "bg-slate-50", text: "text-[var(--primary)]", border: "from-orange-400 to-amber-400" },
  { bg: "bg-slate-50/70", glow: "from-purple-200/50", iconBg: "bg-slate-50", text: "text-[var(--primary)]", border: "from-purple-400 to-fuchsia-400" },
  { bg: "bg-slate-50/70", glow: "from-pink-200/50", iconBg: "bg-slate-50", text: "text-[var(--primary)]", border: "from-pink-400 to-rose-400" },
  { bg: "bg-indigo-50/70", glow: "from-indigo-200/50", iconBg: "bg-indigo-100", text: "text-indigo-700", border: "from-indigo-400 to-blue-400" },
];

const containerVariants: any = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 60, damping: 15 } }
};

export function PremiumCategories() {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden perspective-[1000px]">
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-[var(--primary)] font-semibold text-sm mb-4 tracking-widest shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-slate-50 animate-pulse"></span>
            OUR CATEGORIES
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-4 max-w-2xl mx-auto"
          >
            We use a systematic approach to maximum and optimize results.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            We follow the below process to develop any website for various industries.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide"
        >
          {categories.map((cat, index) => {
            const color = colors[index % colors.length];
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 } 
                }}
                className="min-w-[75vw] sm:min-w-[45vw] md:min-w-0 shrink-0 snap-center md:snap-align-none transform-gpu h-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Link href={`/industries/${cat.slug}`} className="block group w-full h-full outline-none">
                  <div className="relative rounded-[18px] p-6 md:p-8 flex flex-col items-center justify-center text-center gap-6 shadow-[0_5px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden h-full">
                    
                    {/* Always-on Animated Gradient Border Overlay */}
                    <motion.div 
                      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      className={`absolute inset-0 bg-gradient-to-r ${color.border} bg-[length:200%_200%] opacity-100 rounded-[18px] -z-10`}
                    />
                    
                    {/* Inner slightly tinted white background */}
                    <div className={`absolute inset-[2px] bg-gradient-to-br from-white to-slate-50/95 rounded-[14px] -z-10`}></div>

                    {/* Always-on Glow Effect that pulses */}
                    <motion.div 
                      animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                      className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${color.glow} to-transparent blur-2xl rounded-full pointer-events-none z-0`}
                    />

                    <div 
                      className={`w-20 h-20 md:w-24 md:h-24 bg-gradient-to-b from-white to-slate-50 rounded-[18px] shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 border border-slate-100 relative z-10 overflow-hidden`}
                      style={{ transform: "translateZ(30px)" }}
                    >
                      <img src={cat.icon} alt={cat.title} className="w-full h-full object-cover transition-transform duration-500 img-premium" />
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
        </motion.div>

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

