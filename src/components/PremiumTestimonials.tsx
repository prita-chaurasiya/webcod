"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "CEO, TechInnovate",
    text: "WebCodian transformed our business with their exceptional software development services. Their team is highly professional and delivered our ERP solution on time. The systematic approach they follow is truly impressive.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Founder, EduGrowth",
    text: "The digital marketing strategies provided by WebCodian significantly increased our online presence. Their expertise in SEO and SMO helped us reach a global audience. Highly recommended for any growing business.",
    rating: 5
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "Operations Manager",
    text: "We partnered with WebCodian for a complex e-commerce platform. Their web development and UI/UX team delivered a visually stunning and highly functional website. The 24/7 client support is a lifesaver.",
    rating: 5
  }
];

export function PremiumTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = testimonials[currentSlide];

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Decorative Vector Shapes */}
      <img src="https://webcodian.com/public/web/assets/img/shape/vector-shape9.png" alt="Shape 9" className="absolute top-10 left-10 opacity-50 animate-pulse pointer-events-none" />
      <img src="https://webcodian.com/public/web/assets/img/shape/vector-shape10.png" alt="Shape 10" className="absolute bottom-10 right-10 opacity-50 animate-pulse pointer-events-none delay-1000" />
      
      <div className="container mx-auto px-4 lg:px-6 max-w-5xl relative z-10">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e8f6ef] text-[#2eb872] font-semibold text-sm mb-4"
          >
            <img src="https://webcodian.com/public/web/assets/img/star-icon.png" alt="Star" className="w-4 h-4 animate-spin-slow" />
            TESTIMONIAL
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-[#1f2937]"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(5px)" }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 text-center relative overflow-hidden group"
            >
              {/* Large background quote icon */}
              <Quote className="absolute top-8 left-8 w-24 h-24 text-gray-50 opacity-50 rotate-180 pointer-events-none" />
              
              <div className="flex justify-center gap-1 mb-8 relative z-10">
                {[...Array(slide.rating)].map((_, i) => (
                  <img key={i} src="https://webcodian.com/public/web/assets/img/star-icon.png" alt="Star" className="w-6 h-6 animate-[pulse_2s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed mb-10 relative z-10 max-w-3xl mx-auto">
                "{slide.text}"
              </p>
              
              <div className="relative z-10">
                <h4 className="text-2xl font-bold text-[#1f2937] mb-1">{slide.name}</h4>
                <span className="text-[#2eb872] font-semibold">{slide.role}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button 
              onClick={() => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#2eb872] hover:border-[#2eb872] hover:shadow-lg transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === idx ? "bg-[#2eb872] scale-125" : "bg-gray-300 hover:bg-gray-400"}`}
                />
              ))}
            </div>
            <button 
              onClick={() => setCurrentSlide((prev) => (prev + 1) % testimonials.length)}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#2eb872] hover:border-[#2eb872] hover:shadow-lg transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
