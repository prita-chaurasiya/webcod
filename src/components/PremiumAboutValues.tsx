"use client";

import { motion } from "framer-motion";
import { CheckCircle2, History, Target, Users } from "lucide-react";

const values = [
  {
    id: 1,
    title: "Our History",
    description: "We're dedicated developers and designers, delivering top-notch solutions empowering businesses of all sizes to thrive digitally and succeed.",
    icon: History,
    points: ["Activate Listening", "Brilliant minds", "Better. Best. Wow!", "Branding it better!"],
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    textColor: "text-blue-600"
  },
  {
    id: 2,
    title: "Our Mission",
    description: "Empowering businesses through innovative technology, fostering growth, and delivering tailored solutions for sustained success in the digital realm.",
    icon: Target,
    points: ["Creating. Results.", "Expect more", "Good thinking", "In real we trust"],
    color: "from-orange-500 to-orange-600",
    bg: "bg-orange-50",
    textColor: "text-orange-600"
  },
  {
    id: 3,
    title: "Who we are",
    description: "Experienced team crafting innovative software solutions, dedicated to empowering businesses and driving digital transformation for optimal success.",
    icon: Users,
    points: ["Stay real. Always.", "We have you covered", "We turn heads", "Your brand, promoted"],
    color: "from-[#2eb872] to-emerald-600",
    bg: "bg-[#e8f6ef]",
    textColor: "text-[#2eb872]"
  }
];

const containerVariants: any = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export function PremiumAboutValues() {
  return (
    <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight"
          >
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-800">Values</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 font-medium"
          >
            The foundational principles that guide our work, shape our culture, and drive our commitment to excellence.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {values.map((value) => (
            <motion.div key={value.id} variants={itemVariants} className="h-full">
              <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-slate-100 group relative overflow-hidden">
                
                <div className={`w-16 h-16 rounded-2xl ${value.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  <value.icon className={`w-8 h-8 ${value.textColor}`} />
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-4 relative z-10">
                  {value.title}
                </h3>
                
                <p className="text-slate-500 mb-8 leading-relaxed font-medium relative z-10">
                  {value.description}
                </p>
                
                <div className="mt-auto space-y-4 relative z-10 pt-6 border-t border-slate-50">
                  {value.points.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center bg-gradient-to-br ${value.color} shadow-sm shrink-0`}>
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-slate-700 font-bold text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
