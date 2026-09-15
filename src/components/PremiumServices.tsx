"use client";

import { motion } from "framer-motion";
import { 
  Monitor, Code2, TrendingUp, Smartphone, 
  Search, Palette, MessageSquare, Wrench, 
  MessageCircle, Box, PhoneCall, Video
} from "lucide-react";
import Link from "next/link";

const services = [
  { title: "Web Development", icon: Monitor, slug: "web-development" },
  { title: "Software Development", icon: Code2, slug: "software-development" },
  { title: "Digital Marketing", icon: TrendingUp, slug: "digital-marketing" },
  { title: "App Development", icon: Smartphone, slug: "app-development" },
  { title: "SEO/SMO", icon: Search, slug: "seo-smo" },
  { title: "Graphic Design", icon: Palette, slug: "graphic-design" },
  { title: "Bulk SMS", icon: MessageSquare, slug: "bulk-sms" },
  { title: "Maintenance", icon: Wrench, slug: "maintenance" },
  { title: "Bulk Whatsapp SMS", icon: MessageCircle, slug: "bulk-whatsapp-sms" },
  { title: "Digital Product", icon: Box, slug: "digital-product" },
  { title: "Bulk Voice Call", icon: PhoneCall, slug: "bulk-voice-call" },
  { title: "Video Editing", icon: Video, slug: "video-editing" },
];

const containerVariants: any = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 60, damping: 15 } }
};

export function PremiumServices() {
  return (
    <section className="py-24 bg-white relative overflow-hidden perspective-[1000px]">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#2eb872]/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-60 -left-20 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-slate-500 font-semibold text-sm mb-4 tracking-widest shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#2eb872] animate-pulse"></span>
            CORE EXPERTISE
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Business-Oriented <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2eb872] to-blue-600">Digital Solutions</span>
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                rotateX: 5, 
                rotateY: -5,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 } 
              }}
              className="transform-gpu"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Link href={`/${service.slug}`} className="block h-full outline-none">
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] border border-slate-100 hover:border-[#2eb872]/40 transition-all duration-300 relative overflow-hidden h-full flex flex-col items-center text-center group">
                  
                  {/* Glowing Hover Background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#2eb872]/0 to-[#2eb872]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  
                  {/* Icon Container (3D pop) */}
                  <div 
                    className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br from-[#2eb872] to-[#25995e] transition-colors duration-300 shadow-inner group-hover:shadow-lg border border-slate-100 group-hover:border-transparent"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <service.icon className="w-10 h-10 text-slate-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  {/* Text (3D pop) */}
                  <div style={{ transform: "translateZ(20px)" }}>
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  
                  <div 
                    className="mt-auto pt-4 flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-[#2eb872] transition-colors"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    Read More 
                    <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ArrowRightIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  )
}
