"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Briefcase, Rocket, Sparkles, ChevronDown } from "lucide-react";
import Link from "next/link";

export function PremiumCareerHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#2eb872] rounded-full blur-[120px] opacity-20 mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#f59e0b] rounded-full blur-[150px] opacity-10 mix-blend-screen animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[url('https://webcodian.com/public/web/assets/img/shape/vector-shape9.png')] bg-no-repeat bg-left-top opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto perspective-1000">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white font-semibold text-sm mb-8 border border-white/20"
          >
            <Sparkles className="w-4 h-4 text-[#f59e0b]" />
            CAREERS AT WEBCODIAN
          </motion.div>
          
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative"
          >
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              style={{ transform: "translateZ(50px)" }}
              className="text-5xl md:text-7xl font-black text-white leading-tight mb-6"
            >
              Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2eb872] to-[#f59e0b]">Future</span><br/>
              With Us
            </motion.h1>

            {/* Floating Elements */}
            <motion.div 
              style={{ transform: "translateZ(80px)" }}
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -left-12 hidden md:flex w-20 h-20 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 items-center justify-center text-[#2eb872] shadow-[0_0_30px_rgba(46,184,114,0.3)]"
            >
              <Rocket className="w-10 h-10" />
            </motion.div>
            
            <motion.div 
              style={{ transform: "translateZ(100px)" }}
              animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -right-8 hidden md:flex w-24 h-24 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 items-center justify-center text-[#f59e0b] shadow-[0_0_30px_rgba(245,158,11,0.3)]"
            >
              <Briefcase className="w-12 h-12" />
            </motion.div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto mt-8"
          >
            Join Varanasi's premier software company. We are looking for passionate minds who want to create cutting-edge digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              href="#open-roles"
              className="inline-flex items-center gap-2 bg-[#2eb872] hover:bg-[#259b5f] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(46,184,114,0.4)] hover:shadow-[0_0_30px_rgba(46,184,114,0.6)] hover:-translate-y-1"
            >
              View Open Roles
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </Link>
          </motion.div>

        </div>
      </div>
      
      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto text-white fill-current">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}
