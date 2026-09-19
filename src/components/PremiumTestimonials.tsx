"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const headerElements = containerRef.current.querySelectorAll('.testimonial-header');
      const cards = containerRef.current.querySelectorAll('.testimonial-card-wrap');

      gsap.fromTo(headerElements,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.fromTo(cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, []);

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
    <section className="py-20 md:py-24 relative overflow-hidden bg-transparent" ref={containerRef}>
      <div className="absolute inset-0 bg-[#0a0f1c] pointer-events-none -z-10" />
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="testimonial-header opacity-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-semibold text-sm mb-4 md:mb-6 shadow-[0_0_15px_rgba(6,182,212,0.15)] uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Client Testimonial
            </div>
            <h2 className="testimonial-header opacity-0 text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-[1.15] tracking-tight">
              Trusted by 1,500+ Businesses — Here&apos;s What They Say
            </h2>
            <div className="testimonial-header opacity-0 flex items-center gap-4 mb-6">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-lg">4.9/5</span>
                <span className="text-slate-400 font-medium">Based on Google Reviews</span>
              </div>
            </div>
            <p className="testimonial-header opacity-0 text-base md:text-lg text-slate-400 leading-relaxed font-medium">
              Our clients range from early-stage startups to established enterprises. Their success stories speak louder than any claim we could make.
            </p>
          </div>
          
          <div className="flex gap-3 pb-2 shrink-0 testimonial-header opacity-0">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-slate-300 hover:bg-cyan-500 hover:border-cyan-500 hover:text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all group shrink-0 backdrop-blur-sm"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-slate-300 hover:bg-cyan-500 hover:border-cyan-500 hover:text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all group shrink-0 backdrop-blur-sm"
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
                  className={`testimonial-card-wrap opacity-0 shrink-0 px-3 md:px-4 ${cardsPerView === 1 ? 'w-full' : 'w-1/2'}`}
                >
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-10 lg:p-12 shadow-sm relative overflow-hidden flex flex-col justify-between h-full min-h-[350px] md:min-h-[420px] border border-white/10 hover:border-cyan-500/30 transition-colors group">
                    
                    {/* Faint World Map Watermark */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none filter invert" style={{
                      backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat"
                    }}></div>

                    <div className="relative z-10 text-center mb-8">
                      {/* Logo Placeholder */}
                      <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-4 border border-white/10 group-hover:border-cyan-500/50 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                        <span className="font-black text-xl md:text-2xl text-cyan-400">{testimonial.company.charAt(0)}</span>
                      </div>
                      <h4 className="text-cyan-400 font-bold uppercase tracking-wider text-xs md:text-sm mb-6 md:mb-8 group-hover:text-cyan-300 transition-colors">
                        {testimonial.company}
                      </h4>
                      
                      <p className="text-slate-300 text-base md:text-lg lg:text-xl leading-relaxed font-medium">
                        &quot;{testimonial.text}&quot;
                      </p>
                    </div>
                    
                    <div className="relative z-10 text-center mt-auto border-t border-white/10 pt-6">
                      <div className="flex justify-center gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-3 h-3 md:w-4 md:h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <h5 className="font-bold text-white text-sm md:text-base">{testimonial.name}</h5>
                      <span className="text-xs md:text-sm text-slate-400">{testimonial.role}</span>
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
                  currentIndex === idx ? "w-8 bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]" : "w-2 bg-slate-600 hover:bg-slate-400"
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
