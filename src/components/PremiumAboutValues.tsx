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
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    id: 2,
    title: "Our Mission",
    description: "Empowering businesses through innovative technology, fostering growth, and delivering tailored solutions for sustained success in the digital realm.",
    icon: Target,
    points: ["Creating. Results.", "Expect more", "Good thinking", "In real we trust"],
    color: "text-orange-500",
    bg: "bg-orange-50"
  },
  {
    id: 3,
    title: "Who we are",
    description: "Experienced team crafting innovative software solutions, dedicated to empowering businesses and driving digital transformation for optimal success.",
    icon: Users,
    points: ["Stay real. Always.", "We have you covered", "We turn heads", "Your brand, promoted"],
    color: "text-[#2eb872]",
    bg: "bg-[#e8f6ef]"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

export function PremiumAboutValues() {
  return (
    <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000"
        >
          {values.map((value) => (
            <motion.div key={value.id} variants={itemVariants} className="h-full">
              <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-x-2 hover:-rotate-y-2 h-full flex flex-col border border-gray-100 group relative overflow-hidden">
                
                {/* Glow effect */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${value.bg} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className={`w-16 h-16 rounded-2xl ${value.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  <value.icon className={`w-8 h-8 ${value.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-500 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-500 mb-8 leading-relaxed relative z-10">
                  {value.description}
                </p>
                
                <ul className="mt-auto space-y-3 relative z-10">
                  {value.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle2 className={`w-5 h-5 ${value.color}`} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
