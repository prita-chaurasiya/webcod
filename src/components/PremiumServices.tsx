"use client";

import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { 
  Monitor, Code2, TrendingUp, Smartphone, 
  Search, Palette, MessageSquare, Wrench, 
  MessageCircle, Box, PhoneCall, Video
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const services = [
  { title: "Web Development", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800", slug: "web-development" },
  { title: "Software Development", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800", slug: "software-development" },
  { title: "Digital Marketing", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800", slug: "digital-marketing" },
  { title: "App Development", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800", slug: "app-development" },
  { title: "SEO/SMO", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800", slug: "seo-smo" },
  { title: "Graphic Design", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800", slug: "graphic-design" },
  { title: "Bulk SMS", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800", slug: "bulk-sms" },
  { title: "Maintenance", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800", slug: "maintenance" },
  { title: "Bulk Whatsapp SMS", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800", slug: "bulk-whatsapp-sms" },
  { title: "Digital Product", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", slug: "digital-product" },
  { title: "Bulk Voice Call", image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=800", slug: "bulk-voice-call" },
  { title: "Video Editing", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800", slug: "video-editing" },
];

const containerVariants: any = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, ease: "easeOut" }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

function ServiceCard({ service, index, hoveredIndex, setHoveredIndex }: any) {
  const isHovered = hoveredIndex === index;
  const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 400 };
  
  const smoothTiltX = useSpring(tiltX, springConfig);
  const smoothTiltY = useSpring(tiltY, springConfig);

  const rotateX = useTransform(smoothTiltY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(smoothTiltX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    mouseX.set(x);
    mouseY.set(y);
    tiltX.set(x / width - 0.5);
    tiltY.set(y / height - 0.5);
  };

  const handleMouseLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
    setHoveredIndex(null);
  };

  return (
    <motion.div
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHoveredIndex(index)}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative transform-gpu md:hover:-translate-y-2 transition-all duration-500 h-[320px] md:h-[400px] shrink-0 w-[85vw] snap-center md:w-auto md:shrink md:snap-none ${
        isOtherHovered ? 'opacity-80 grayscale-[30%]' : 'opacity-100'
      }`}
    >
      <Link href={`/${service.slug}`} className="block h-full outline-none group rounded-[24px]">
        <div 
          className="relative rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(37,99,235,0.04)] group-hover:shadow-[0_20px_40px_rgba(37,99,235,0.2)] transition-all duration-500 h-full flex flex-col bg-gradient-to-b from-white to-slate-50 border border-slate-200"
        >
          {/* Image Container (Top Half) */}
          <div className="h-[55%] w-full overflow-hidden relative bg-slate-100">
            <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition-colors duration-500 z-10 mix-blend-multiply"></div>
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
          </div>
          
          {/* Content Container (Bottom Half) */}
          <div className="flex-1 flex flex-col justify-center p-6 relative z-20 bg-white">
            <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-orange-500 transition-colors">
              {service.title}
            </h3>
            
            {/* Read More Interaction */}
            <div className="flex items-center gap-2 text-sm font-bold text-orange-500 transition-all duration-300">
              <span>Explore Solutions</span>
              <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function PremiumServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-12 bg-[#FAFAFC] relative overflow-hidden perspective-[1000px]">
      {/* Premium Ambient Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-20 w-[800px] h-[800px] bg-orange-400/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-b from-white to-slate-50 border border-slate-200/60 text-slate-500 font-semibold text-xs tracking-widest shadow-sm shadow-slate-200/50 mb-6 uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            Core Expertise
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]"
          >
            Business-Oriented <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-500 to-cyan-500">
              Digital Solutions
            </span>
          </motion.h2>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex md:grid overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory md:snap-none md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 scroll-smooth [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              service={service}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
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

