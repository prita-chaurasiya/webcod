"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "anticoronataskforce",
    category: "NGO",
    image: "https://webcodian.com/public/web/assets/img/projects/img1.jpg",
    span: "md:col-span-2 md:row-span-2",
    color: "from-blue-500/80 to-cyan-400/80"
  },
  {
    title: "Satyarthyfoundation",
    category: "NGO",
    image: "https://webcodian.com/public/web/assets/img/projects/img2.jpg",
    span: "md:col-span-1 md:row-span-1",
    color: "from-emerald-500/80 to-teal-400/80"
  },
  {
    title: "theearth NGO",
    category: "Non-Profit Organization",
    image: "https://webcodian.com/public/web/assets/img/projects/img3.jpg",
    span: "md:col-span-1 md:row-span-1",
    color: "from-purple-500/80 to-indigo-400/80"
  },
  {
    title: "pdtc Institute",
    category: "Education",
    image: "https://webcodian.com/public/web/assets/img/projects/img4.jpg",
    span: "md:col-span-1 md:row-span-1",
    color: "from-rose-500/80 to-pink-400/80"
  },
  {
    title: "Hind Jai Public School",
    category: "Education",
    image: "https://webcodian.com/public/web/assets/img/projects/img5.jpg",
    span: "md:col-span-1 md:row-span-1",
    color: "from-amber-500/80 to-orange-400/80"
  },
  {
    title: "Healthical",
    category: "Healthcare",
    image: "https://webcodian.com/public/web/assets/img/projects/img5.jpg",
    span: "md:col-span-2 md:row-span-1",
    color: "from-teal-500/80 to-emerald-400/80"
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
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function PremiumPortfolio() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-[100px] mix-blend-multiply animate-[pulse_8s_ease-in-out_infinite_alternate]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-gradient-to-tl from-[#2eb872]/10 to-emerald-100 rounded-full blur-[120px] mix-blend-multiply animate-[pulse_12s_ease-in-out_infinite_alternate-reverse]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header - Editorial Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs mb-6 tracking-widest uppercase shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2eb872] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2eb872]"></span>
              </span>
              Selected Works
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight"
            >
              Building The <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">Future.</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:max-w-sm"
          >
            <p className="text-lg text-slate-500 leading-relaxed font-medium">
              Explore our curated portfolio of digital transformations. We take pride in building scalable, luxurious, and highly performant web applications for diverse industries.
            </p>
          </motion.div>
        </div>

        {/* Editorial Portfolio Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[300px] gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className={`group relative rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl ${project.span}`}
            >
              {/* Image Container */}
              <div className="absolute inset-0 w-full h-full p-8 flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="max-w-full max-h-full object-contain filter drop-shadow-xl"
                />
              </div>

              {/* Glass Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 backdrop-blur-[2px]`}>
                
                <div className="flex items-end justify-between translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div>
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold tracking-wider uppercase mb-3 border border-white/20">
                      {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">
                      {project.title}
                    </h3>
                  </div>
                  
                  <Link href="/contact" className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                    <ArrowUpRight className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            View All Projects <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
