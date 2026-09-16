"use client";

import { motion } from "framer-motion";
import { BookOpen, Laptop, ShoppingCart, HeartPulse, HeartHandshake, Building, Briefcase, GraduationCap, Utensils, Plane, Truck, TestTube, ShieldCheck, Building2, Newspaper, Users, Factory, Package, Search } from "lucide-react";
import Link from "next/link";

const allIndustries = [
  { name: "Course Selling", icon: BookOpen, color: "text-red-700", bgClass: "text-red-700" },
  { name: "Online Exam Portal", icon: Laptop, color: "text-slate-900", bgClass: "text-slate-900" },
  { name: "E-Commerce", icon: ShoppingCart, color: "text-sky-400", bgClass: "text-sky-400" },
  { name: "HealthCare", icon: HeartPulse, color: "text-teal-400", bgClass: "text-teal-400" },
  { name: "NGO", icon: HeartHandshake, color: "text-green-500", bgClass: "text-green-500" },
  { name: "Institute", icon: Building, color: "text-black", bgClass: "text-black" },
  { name: "Consultant", icon: Briefcase, color: "text-blue-600", bgClass: "text-blue-600" },
  { name: "Education", icon: GraduationCap, color: "text-sky-500", bgClass: "text-sky-500" },
  { name: "Hotel & Restaurant", icon: Utensils, color: "text-amber-900", bgClass: "text-amber-900" },
  { name: "Tour And Travel", icon: Plane, color: "text-blue-800", bgClass: "text-blue-800" },
  { name: "Transport", icon: Truck, color: "text-cyan-400", bgClass: "text-cyan-400" },
  { name: "Smart Lab", icon: TestTube, color: "text-teal-500", bgClass: "text-teal-500" },
  { name: "Security Service", icon: ShieldCheck, color: "text-cyan-500", bgClass: "text-cyan-500" },
  { name: "Real Estate", icon: Building2, color: "text-slate-500", bgClass: "text-slate-500" },
  { name: "News & Blog", icon: Newspaper, color: "text-blue-900", bgClass: "text-blue-900" },
  { name: "Matrimonial", icon: Users, color: "text-rose-900", bgClass: "text-rose-900" },
  { name: "Manufacturing", icon: Factory, color: "text-cyan-600", bgClass: "text-cyan-600" },
  { name: "Courier system", icon: Package, color: "text-amber-500", bgClass: "text-amber-500" },
  { name: "Job Portal", icon: Search, color: "text-indigo-900", bgClass: "text-indigo-900" }
];

export function PremiumIndustry() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden border-y border-slate-100">
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
        
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-3 rounded-full bg-white shadow-sm border border-slate-200 text-slate-500 font-bold text-[10px] uppercase tracking-widest mb-4">Industries We Serve</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Our Global Presence & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2eb872] to-blue-600">Expertise</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Tailored digital solutions and intelligent platforms for over 19 diverse sectors.
          </p>
        </div>

        {/* Global Presence Style / Grid Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allIndustries.map((ind, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative rounded-3xl overflow-hidden bg-slate-200 aspect-square flex flex-col justify-end shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Placeholder Background (since we don't have the exact image files) */}
              <div className="absolute inset-0 bg-slate-300 group-hover:scale-110 transition-transform duration-700">
                <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-400 opacity-50 mix-blend-multiply"></div>
              </div>

              {/* Wavy Overlay matching the screenshot style */}
              <div className={`relative w-full h-24 ${ind.bgClass}`}>
                <svg viewBox="0 0 400 150" preserveAspectRatio="none" className="absolute bottom-0 w-full h-32 -translate-y-4 drop-shadow-md">
                  <path d="M0,50 C150,150 250,-50 400,50 L400,150 L0,150 Z" fill="currentColor" />
                  <path d="M0,70 C150,170 250,-30 400,70 L400,150 L0,150 Z" fill="currentColor" opacity="0.3" />
                </svg>
                
                {/* Text and Icon on top of the wave */}
                <div className="absolute bottom-4 left-0 w-full px-5 flex items-center gap-3 text-white">
                  <div className="w-10 h-10 rounded-full bg-white text-slate-800 flex items-center justify-center shrink-0 shadow-lg border-2 border-white/20 relative z-10 group-hover:text-[#2eb872] transition-colors">
                    <ind.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-black relative z-10 drop-shadow-sm tracking-tight">{ind.name}</h3>
                </div>
                
                {/* Tech/Hexagon background pattern on the right side of the wave */}
                <div className="absolute right-2 bottom-2 opacity-20 pointer-events-none">
                  <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
                    <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" stroke="white" strokeWidth="2"/>
                    <circle cx="50" cy="50" r="10" fill="white" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
