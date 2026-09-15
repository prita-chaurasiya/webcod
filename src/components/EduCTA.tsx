"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function EduCTA() {
  return (
    <section className="pb-24 pt-10 bg-white">
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#f0fdf4] rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between relative overflow-hidden"
        >
          {/* Top Right Decorative Shape */}
          <div className="absolute top-6 right-10 opacity-60">
            <svg width="40" height="40" viewBox="0 0 100 100" className="fill-[#fcd34d]">
              <path strokeDasharray="10,10" strokeWidth="6" stroke="transparent" d="M10 50 Q 25 10, 50 20 T 90 50" />
              <path d="M 10 20 Q 20 10, 30 20 Q 20 30, 10 20 M 40 10 Q 50 0, 60 10 Q 50 20, 40 10 M 70 20 Q 80 10, 90 20 Q 80 30, 70 20" />
            </svg>
          </div>

          {/* Bottom Left Decorative Shape */}
          <div className="absolute bottom-6 left-10 opacity-60">
            <svg width="40" height="40" viewBox="0 0 100 100" className="fill-[#fcd34d]">
              <path d="M 10 20 Q 20 10, 30 20 Q 20 30, 10 20 M 40 10 Q 50 0, 60 10 Q 50 20, 40 10" />
            </svg>
          </div>

          <div className="relative z-10 w-full md:w-3/5 text-center md:text-left mb-10 md:mb-0">
            <span className="text-[#2eb872] font-bold text-lg mb-4 block">
              Become A Instructor
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1f2937] leading-[1.3] font-sans">
              You can join with WebCodian <br className="hidden md:block" />
              as a <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10 text-[#2eb872]">instructor?</span>
                <svg className="absolute w-full h-3 -bottom-1 left-0 z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M 0,8 Q 50,2 100,8" fill="none" stroke="#2eb872" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full md:w-auto">
            {/* Hand drawn arrow pointing to button */}
            <div className="hidden lg:block opacity-60 w-32 -mt-4">
              <svg viewBox="0 0 200 100" className="stroke-[#2eb872] fill-none w-full" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20,80 Q100,20 180,40 M150,30 L180,40 L160,60" />
              </svg>
            </div>
            
            <Link 
              href="/instructor-registration" 
              className="px-8 py-4 bg-[#2eb872] text-white font-bold rounded-lg hover:bg-[#25995e] transition-colors duration-300 shadow-[0_5px_15px_rgba(46,184,114,0.3)] whitespace-nowrap"
            >
              Drop Information
            </Link>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
