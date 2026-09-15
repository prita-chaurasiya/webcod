"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "anticoronataskforce",
    category: "NGO",
    image: "https://webcodian.com/public/web/assets/img/projects/img1.jpg",
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Satyarthyfoundation",
    category: "NGO",
    image: "https://webcodian.com/public/web/assets/img/projects/img2.jpg",
    color: "from-emerald-500 to-teal-400"
  },
  {
    title: "theearth NGO",
    category: "Non-Profit Organization",
    image: "https://webcodian.com/public/web/assets/img/projects/img3.jpg",
    color: "from-purple-500 to-indigo-400"
  },
  {
    title: "pdtc Institute",
    category: "Education",
    image: "https://webcodian.com/public/web/assets/img/projects/img4.jpg",
    color: "from-rose-500 to-pink-400"
  },
  {
    title: "Hind Jai Public School",
    category: "Education",
    image: "https://webcodian.com/public/web/assets/img/projects/img5.jpg",
    color: "from-amber-500 to-orange-400"
  },
  {
    title: "Healthical",
    category: "Healthcare",
    image: "https://webcodian.com/public/web/assets/img/projects/img5.jpg",
    color: "from-teal-500 to-emerald-400"
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
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
};

export function PremiumPortfolio() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-gradient-to-tl from-[#2eb872]/10 to-emerald-400/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold text-xs mb-4 tracking-widest uppercase shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Our Success Stories
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-[#2eb872]">Projects</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Explore our curated portfolio of digital transformations. We take pride in building scalable, luxurious, and highly performant web applications for diverse industries.
          </motion.p>
        </div>

        {/* Portfolio Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="group relative"
            >
              {/* Project Card */}
              <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
                
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-50 p-4 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="max-w-full max-h-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-5 text-center border-t border-slate-50 flex-grow flex flex-col justify-center">
                  <h3 className="text-lg font-bold text-slate-800 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-500 mt-1">
                    {project.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
