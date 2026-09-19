"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Award, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function PremiumVision() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const leftContent = containerRef.current.querySelector('.vision-left');
      const rightContent = containerRef.current.querySelector('.vision-right');

      if (leftContent) {
        gsap.fromTo(leftContent,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              toggleActions: "play none none none"
            }
          }
        );
      }

      if (rightContent) {
        gsap.fromTo(rightContent,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    }
  }, []);

  return (
    <section className="relative py-32 bg-[#0a0f1c] overflow-hidden" ref={containerRef}>
      {/* Animated Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-blue-600/10 to-cyan-500/10 rounded-full blur-[100px] mix-blend-screen opacity-50 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-cyan-600/10 to-blue-600/10 rounded-full blur-[100px] mix-blend-screen opacity-50 animate-pulse" style={{ animationDuration: '10s' }} />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div
            className="vision-left opacity-0"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white text-sm font-semibold tracking-widest uppercase mb-8 shadow-2xl">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              The WebCodian Vision
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8">
              Elevating Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Excellence</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10 max-w-xl">
              We don&apos;t just build websites; we craft digital legacies. At the WebCodian Computer Institute, we are committed to transforming passionate learners into elite industry professionals through world-class training and real-world exposure.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-sm p-4 rounded-2xl">
                <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Premium Quality</h4>
                  <p className="text-sm text-gray-500">Unmatched precision</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-sm p-4 rounded-2xl">
                <div className="w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Industry Ready</h4>
                  <p className="text-sm text-gray-500">Future-proof skills</p>
                </div>
              </div>
            </div>

            <Link href="/about">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-transparent rounded-full border-2 border-cyan-500 hover:bg-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 overflow-hidden">
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                <span className="relative flex items-center gap-3">
                  Discover Our Story
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </Link>
          </div>

          {/* Right Floating Elements (Glassmorphism & 3D) */}
          <div
            className="vision-right opacity-0 relative h-[600px] hidden lg:block perspective-1000"
          >
            {/* Center Main Glass Card */}
            <motion.div 
              animate={{ y: [-10, 10, -10], rotateY: [-5, 5, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between z-20 hover:border-cyan-500/30 transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
                <Star className="w-8 h-8 text-white fill-white/50" />
              </div>
              <div>
                <div className="text-5xl font-black text-white mb-2">100%</div>
                <div className="text-lg text-gray-300 font-medium">Job Assistance & Placement Support</div>
              </div>
            </motion.div>

            {/* Top Right Floating Card */}
            <motion.div 
              animate={{ y: [15, -15, 15], rotateZ: [2, -2, 2] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 right-0 w-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl z-10"
            >
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                Innovation Labs
              </h4>
              <p className="text-sm text-gray-400">Access to state-of-the-art software tools and cloud environments.</p>
            </motion.div>

            {/* Bottom Left Floating Card */}
            <motion.div 
              animate={{ y: [-15, 15, -15], rotateZ: [-3, 3, -3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-10 left-0 w-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl z-30"
            >
               <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                Expert Mentors
              </h4>
              <p className="text-sm text-gray-400">Learn directly from senior developers building live projects.</p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
