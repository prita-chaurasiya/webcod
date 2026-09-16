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

const colors = [
  { bg: "bg-blue-50/50", iconBg: "bg-blue-100", text: "text-blue-700", border: "border-blue-100", highlight: "rgba(147,197,253,0.3)" },
  { bg: "bg-emerald-50/50", iconBg: "bg-emerald-100", text: "text-emerald-700", border: "border-emerald-100", highlight: "rgba(110,231,183,0.3)" },
  { bg: "bg-purple-50/50", iconBg: "bg-purple-100", text: "text-purple-700", border: "border-purple-100", highlight: "rgba(216,180,254,0.3)" },
  { bg: "bg-orange-50/50", iconBg: "bg-orange-100", text: "text-orange-700", border: "border-orange-100", highlight: "rgba(253,186,116,0.3)" },
  { bg: "bg-pink-50/50", iconBg: "bg-pink-100", text: "text-pink-700", border: "border-pink-100", highlight: "rgba(249,168,212,0.3)" },
  { bg: "bg-cyan-50/50", iconBg: "bg-cyan-100", text: "text-cyan-700", border: "border-cyan-100", highlight: "rgba(103,232,249,0.3)" },
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

function ServiceCard({ service, color, index, hoveredIndex, setHoveredIndex }: any) {
  const isHovered = hoveredIndex === index;
  const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Normalized values for tilt (-0.5 to 0.5)
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 400 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  const smoothTiltX = useSpring(tiltX, springConfig);
  const smoothTiltY = useSpring(tiltY, springConfig);

  // Maximum rotation of 2 degrees
  const rotateX = useTransform(smoothTiltY, [-0.5, 0.5], ["2deg", "-2deg"]);
  const rotateY = useTransform(smoothTiltX, [-0.5, 0.5], ["-2deg", "2deg"]);

  const background = useMotionTemplate`radial-gradient(350px circle at ${smoothMouseX}px ${smoothMouseY}px, ${color.highlight}, transparent 80%)`;

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
      // Disable 3D tilt if prefers-reduced-motion is enabled, or on mobile where hover isn't real
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative transform-gpu md:hover:-translate-y-1.5 transition-all duration-500 h-full ${
        isOtherHovered ? 'opacity-95 blur-[0.5px]' : 'opacity-100'
      }`}
    >
      <Link href={`/${service.slug}`} className="block h-full outline-none group rounded-[2rem]">
        <div 
          className={`relative ${color.bg} backdrop-blur-sm rounded-[2rem] p-8 border border-white/60 shadow-[0_2px_10px_rgba(0,0,0,0.02)] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] group-hover:border-white transition-all duration-500 overflow-hidden h-full flex flex-col items-center text-center`}
        >
          {/* Hover highlight layer (follows mouse on desktop) */}
          <motion.div 
            className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block"
            style={{ background }}
          />

          {/* Ambient inner glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-50"></div>
          
          {/* Icon Badge */}
          <motion.div 
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
            className={`w-20 h-20 rounded-2xl ${color.iconBg} flex items-center justify-center mb-6 shadow-sm border border-white/50 relative z-10 group-hover:-translate-y-1 transition-transform duration-300`}
          >
            <service.icon className={`w-10 h-10 ${color.text} transition-colors duration-300 group-hover:scale-105`} strokeWidth={1.5} />
            {/* Subtle inner highlight for icon badge */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 to-white/60 pointer-events-none"></div>
          </motion.div>
          
          {/* Title */}
          <div className="relative z-10 mb-4 flex-1 flex items-start justify-center">
            <h3 className="text-xl font-bold text-slate-800 tracking-tight group-hover:text-slate-950 transition-colors">
              {service.title}
            </h3>
          </div>
          
          {/* Read More Interaction */}
          <div className={`mt-auto flex items-center gap-2 text-sm font-bold opacity-70 group-hover:opacity-100 ${color.text} transition-all relative z-10 group-hover:-translate-y-[1px]`}>
            <span>Read More</span>
            <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function PremiumServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#FAFAFC] relative overflow-hidden perspective-[1000px]">
      {/* Premium Ambient Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-20 w-[800px] h-[800px] bg-blue-400/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#2eb872]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200/60 text-slate-500 font-semibold text-xs tracking-widest shadow-sm shadow-slate-200/50 mb-6 uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            Core Expertise
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]"
          >
            Business-Oriented <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {services.map((service, index) => {
            const color = colors[index % colors.length];
            return (
              <ServiceCard 
                key={index}
                service={service}
                color={color}
                index={index}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            );
          })}
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
