"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Layout, Code, TestTube2, Rocket, HeartHandshake } from "lucide-react";

const processes = [
  { id: "01", title: "Discover", desc: "Understanding your vision, business goals, and target audience.", icon: <Search className="w-6 h-6" /> },
  { id: "02", title: "Plan", desc: "Crafting a strategic roadmap and technical architecture.", icon: <PenTool className="w-6 h-6" /> },
  { id: "03", title: "Design", desc: "Creating intuitive, user-centric, and premium UI/UX designs.", icon: <Layout className="w-6 h-6" /> },
  { id: "04", title: "Develop", desc: "Writing clean, scalable, and highly performant code.", icon: <Code className="w-6 h-6" /> },
  { id: "05", title: "Test", desc: "Rigorous QA testing to ensure bug-free functionality.", icon: <TestTube2 className="w-6 h-6" /> },
  { id: "06", title: "Launch", desc: "Deploying your solution to production securely.", icon: <Rocket className="w-6 h-6" /> },
  { id: "07", title: "Support", desc: "Continuous monitoring, maintenance, and growth.", icon: <HeartHandshake className="w-6 h-6" /> },
];

export function PremiumProcess() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-50/50 pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 font-semibold text-sm mb-4 tracking-widest"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            HOW WE WORK
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900"
          >
            Our Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600">Process</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 hidden lg:block rounded-full overflow-hidden">
             <motion.div 
               initial={{ width: "0%" }}
               whileInView={{ width: "100%" }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="h-full bg-gradient-to-r from-emerald-500 via-blue-500 to-indigo-500"
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-4 relative z-10">
            {processes.map((process, idx) => (
              <motion.div 
                key={process.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, type: "spring", stiffness: 60 }}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Number Badge */}
                <div className="w-16 h-16 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center mb-6 shadow-xl relative z-10 group-hover:border-emerald-500 group-hover:scale-110 transition-all duration-300">
                  <span className="text-xl font-bold text-slate-400 group-hover:text-emerald-500 transition-colors">{process.id}</span>
                </div>
                
                {/* Content Card */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 group-hover:shadow-xl group-hover:border-emerald-100 transition-all duration-300 h-full w-full">
                  <div className="text-emerald-500 flex justify-center mb-4 group-hover:scale-110 transition-transform">
                    {process.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{process.title}</h3>
                  <p className="text-sm text-slate-500">{process.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
