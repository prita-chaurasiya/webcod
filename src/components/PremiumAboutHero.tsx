"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Users, Calendar, ThumbsUp, Headset, CheckCircle2 } from "lucide-react";

export function PremiumAboutHero() {
  // Mouse Parallax Setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const translateX = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const translateY = useTransform(springY, [-0.5, 0.5], [-20, 20]);

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
      className="pt-32 pb-24 lg:pt-40 lg:pb-32 relative overflow-hidden bg-white"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#e8f6ef] rounded-full blur-[100px] opacity-50 transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[80px] opacity-60 transform -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: 3D Image Composition */}
          <motion.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative perspective-1000 w-full flex justify-center lg:justify-start"
          >
            <div className="relative z-10 w-full max-w-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="WebCodian Team" 
                style={{ transform: "translateZ(30px)" }}
                className="w-full h-auto object-cover rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100"
              />
              
              {/* Floating Stat 1 */}
              <motion.div 
                style={{ transform: "translateZ(80px)" }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#2eb872]/10 flex items-center justify-center text-[#2eb872]">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800">7 Years</h4>
                  <p className="text-sm text-gray-500 font-medium">On the market</p>
                </div>
              </motion.div>

              {/* Floating Stat 2 */}
              <motion.div 
                style={{ transform: "translateZ(60px)" }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-8 bottom-12 bg-[#1f2937]/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-gray-700 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#2eb872]">
                  <ThumbsUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">100%</h4>
                  <p className="text-sm text-gray-400 font-medium">Satisfaction rate</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <div className="pt-8 lg:pt-0">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e8f6ef] text-[#2eb872] font-semibold text-sm mb-6"
            >
              <img src="https://webcodian.com/public/web/assets/img/star-icon.png" alt="Star" className="w-4 h-4 animate-spin-slow" />
              ABOUT US
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-[#1f2937] leading-tight mb-6"
            >
              Welcome to Varanasi's <br className="hidden md:block"/>
              <span className="text-[#2eb872]">premier software company!</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed mb-8"
            >
              We specialize in pioneering software, website, and SEO/SMO solutions for businesses of all scales. With our skilled team, we craft advanced products to optimize operations, enhance productivity, and realize our clients' objectives. Our focus on intuitive design, excellence, and customer contentment sets us apart.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-800">12+ Team members</h5>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                  <Headset className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-800">24/7 Client Support</h5>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
