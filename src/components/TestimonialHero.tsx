"use client";

import React from "react";
import { motion } from "framer-motion";

export function TestimonialHero() {
  return (
    <section className="bg-slate-50 py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left: Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 flex justify-center relative"
          >
            <div className="absolute inset-0 bg-[var(--primary)]/5 blur-[100px] rounded-full"></div>
            <img 
              src="/ai_automation_vector_1790849211484.jpg" 
              alt="TestimonialHero"
              className="w-full max-w-[600px] drop-shadow-2xl rounded-3xl mix-blend-multiply relative z-10 hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-6 leading-tight"
              dangerouslySetInnerHTML={{ __html: `Client <span className="text-[var(--primary)]">Testimonials</span>` }}
            />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg text-slate-600 leading-relaxed font-medium mb-6"
            >
              At WebCodian, our success is measured by the success of our clients. We are dedicated to providing innovative, tailored software solutions and exceptional IT training.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg text-slate-600 leading-relaxed font-medium"
            >
              Read how we've helped startups, established enterprises, and ambitious students achieve their goals and transform their digital strategies into reality. Partner with us to write your own success story!
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
