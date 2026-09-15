"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function QuickIntro() {
  return (
    <section className="py-20 bg-[#f9f9f9] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img 
              src="https://webcodian.com/public/web/assets/img/project-start1.png" 
              alt="Start Project" 
              className="max-w-full h-auto animate-[bounce_5s_infinite_ease-in-out]" 
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#252525] font-lato mb-6 leading-tight">
              Start Your Project With Us Today!
            </h2>
            <p className="text-[16px] text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Join us to turn your ideas into reality. Our team is ready to bring your vision to life with expertise and dedication.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#e80566] text-white font-semibold rounded hover:bg-[#252525] transition-colors duration-300 shadow-[0_5px_15px_rgba(232,5,102,0.3)] hover:shadow-[0_8px_20px_rgba(37,37,37,0.3)]"
            >
              Get a Quote
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
