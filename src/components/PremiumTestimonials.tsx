"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    company: "SKY PARK CITY",
    text: "We are highly satisfied with the real estate software developed for Sky Park City. The solution is modern, efficient, and easy to use, helping us manage our operations more effectively. The team's professionalism and timely support made the entire experience smooth.",
    name: "Rahul Sharma",
    role: "Director"
  },
  {
    id: 2,
    company: "TECH INNOVATE",
    text: "We have been using the software platform built by WebCodian for over a year now, and it has significantly improved our workflow. The team understood our unique requirements perfectly and delivered a high-quality product on time.",
    name: "Priya Patel",
    role: "CEO"
  },
  {
    id: 3,
    company: "GLOBAL LOGISTICS",
    text: "Working with the WebCodian team was a great experience. They built a powerful and easy-to-use ERP software that met all our complex business requirements. Their commitment to quality and timely delivery is truly appreciated.",
    name: "Amit Kumar",
    role: "Operations Manager"
  },
  {
    id: 4,
    company: "FINTECH SOLUTIONS",
    text: "The financial tracking application provided by WebCodian significantly increased our operational efficiency. Their expertise in secure software architecture is top-tier. Highly recommended for any scaling enterprise.",
    name: "Vikas Verma",
    role: "CTO"
  }
];

export function PremiumTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(2);

  // Responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(window.innerWidth < 768 ? 1 : 2);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  // Auto-play
  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered, nextSlide]);

  return (
    <section className="py-20 md:py-24 relative overflow-hidden" style={{
      background: "linear-gradient(135deg, #eef2ff 0%, #fcfcfc 40%, #f3e8ff 100%)"
    }}>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-16 gap-6">
          <div className="max-w-3xl">
            <span className="inline-block bg-black text-white text-[10px] md:text-xs font-bold tracking-widest px-3 md:px-4 py-1.5 md:py-2 uppercase mb-4 md:mb-6 shadow-sm rounded-sm">
              Client Testimonial
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 leading-[1.15] tracking-tight">
              Trusted by 1,500+ Businesses — Here's What They Say
            </h2>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-800 text-lg">4.9/5</span>
                <span className="text-slate-500 font-medium">Based on Google Reviews</span>
              </div>
            </div>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
              Our clients range from early-stage startups to established enterprises. Their success stories speak louder than any claim we could make.
            </p>
          </div>
          
          <div className="flex gap-3 pb-2 shrink-0">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-white hover:text-[#2eb872] hover:shadow-md transition-all group shrink-0"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-white hover:text-[#2eb872] hover:shadow-md transition-all group shrink-0"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Slider Section */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          <div className="overflow-hidden w-full pb-8 pt-4">
            <motion.div 
              className="flex"
              animate={{ x: `-${currentIndex * (100 / cardsPerView)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className={`shrink-0 px-3 md:px-4 ${cardsPerView === 1 ? 'w-full' : 'w-1/2'}`}
                >
                  <div className="bg-white rounded-2xl p-6 md:p-10 lg:p-12 shadow-lg shadow-slate-200/50 relative overflow-hidden flex flex-col justify-between h-full min-h-[350px] md:min-h-[420px] border border-slate-100">
                    
                    {/* Faint World Map Watermark */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                      backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat"
                    }}></div>

                    <div className="relative z-10 text-center mb-8">
                      {/* Logo Placeholder */}
                      <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-4 border border-slate-100 shadow-inner">
                        <span className="font-black text-xl md:text-2xl text-[#2eb872]">{testimonial.company.charAt(0)}</span>
                      </div>
                      <h4 className="text-[#2eb872] font-bold uppercase tracking-wider text-xs md:text-sm mb-6 md:mb-8">
                        {testimonial.company}
                      </h4>
                      
                      <p className="text-slate-700 text-base md:text-lg lg:text-xl leading-relaxed font-medium">
                        "{testimonial.text}"
                      </p>
                    </div>
                    
                    <div className="relative z-10 text-center mt-auto border-t border-slate-100 pt-6">
                      <div className="flex justify-center gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-3 h-3 md:w-4 md:h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <h5 className="font-bold text-slate-900 text-sm md:text-base">{testimonial.name}</h5>
                      <span className="text-xs md:text-sm text-slate-500">{testimonial.role}</span>
                    </div>

                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4 md:mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-8 bg-[#2eb872]" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
