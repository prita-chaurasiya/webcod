"use client";

import { motion } from "framer-motion";
import { Clock, Laptop, HeartPulse, GraduationCap, Sparkles } from "lucide-react";

const perks = [
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "We value output over hours. Work when you are most productive and maintain a healthy work-life balance.",
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "group-hover:border-blue-500/50"
  },
  {
    icon: Laptop,
    title: "Modern Tech Stack",
    description: "Work with the latest frameworks, tools, and hardware. We provide everything you need to do your best work.",
    color: "text-[#2eb872]",
    bg: "bg-[#e8f6ef]",
    border: "group-hover:border-[#2eb872]/50"
  },
  {
    icon: HeartPulse,
    title: "Health & Wellness",
    description: "Comprehensive health coverage and wellness programs because your well-being is our top priority.",
    color: "text-red-500",
    bg: "bg-red-50",
    border: "group-hover:border-red-500/50"
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Annual budgets for courses, conferences, and certifications. We invest heavily in your professional growth.",
    color: "text-[#f59e0b]",
    bg: "bg-orange-50",
    border: "group-hover:border-[#f59e0b]/50"
  }
];

export function PremiumPerks() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e8f6ef] text-[#2eb872] font-semibold text-sm mb-4"
          >
            <Sparkles className="w-4 h-4" />
            PERKS & BENEFITS
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-[#1f2937] mb-6"
          >
            Why You'll Love It Here
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 perspective-1000">
          {perks.map((perk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 50 }}
            >
              <div className={`group bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 ${perk.border} transform hover:-translate-y-2 hover:rotate-x-2 flex items-start gap-6 h-full relative overflow-hidden`}>
                
                {/* Subtle background glow on hover */}
                <div className={`absolute -right-10 -top-10 w-40 h-40 ${perk.bg} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className={`w-16 h-16 rounded-2xl ${perk.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  <perk.icon className={`w-8 h-8 ${perk.color}`} />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-500 transition-all">
                    {perk.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-lg">
                    {perk.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
