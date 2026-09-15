"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

const slides = [
  {
    id: 1,
    subtitle: "Digital Offerings",
    heading: "Webcodian IT Solutions Services",
    text: "Welcome to Webcodian LLP, your premier destination for innovative software solutions and cutting-edge website development. Based in the cultural heart of Varanasi, we specialize in crafting tailor-made digital experiences that empower businesses to thrive in the ever-evolving digital landscape.",
    image: "https://webcodian.com/public/web/assets/img/case-study/1.png"
  },
  {
    id: 2,
    subtitle: "Advancing Innovators",
    heading: "Innovative Developers Steering Progress",
    text: "Are you passionate about pushing the boundaries of technology and creating groundbreaking solutions that transform industries? Join us at Webcodian LLP as an Innovative Developer and embark on an exciting journey of innovation, creativity, and collaboration.",
    image: "https://webcodian.com/public/web/assets/img/case-study/2.png"
  }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden pt-[150px] pb-[100px]" style={{ background: "linear-gradient(75deg, #65258a 10%, #e80566)" }}>
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            {/* Left Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 mb-4">
                <img src="https://webcodian.com/public/web/assets/img/star-icon.png" alt="star" className="w-5 h-5" />
                <span className="text-[15px] font-semibold tracking-wide uppercase">{slides[currentSlide].subtitle}</span>
              </div>
              
              <h1 className="text-[40px] md:text-[50px] font-bold leading-[1.2] mb-6 font-lato">
                {slides[currentSlide].heading}
              </h1>
              
              <p className="text-[15px] leading-[1.8] mb-8 text-white/90 max-w-[90%] font-lato">
                {slides[currentSlide].text}
              </p>
              
              <div className="flex flex-wrap items-center gap-6">
                <Link 
                  href="/about" 
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#252525] font-semibold rounded hover:bg-[#252525] hover:text-white transition-colors duration-300 shadow-md"
                >
                  <ArrowRight className="w-4 h-4" /> About Us
                </Link>
                <a 
                  href="https://www.youtube.com/watch?v=Y5KCDWi7h9o" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-white font-semibold hover:text-white/80 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Play className="w-4 h-4 fill-white" />
                  </div>
                  Watch Video
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
              <img 
                src={slides[currentSlide].image} 
                alt="Hero Image" 
                className="max-w-full h-auto drop-shadow-2xl" 
                style={{ transform: "perspective(400px) rotateY(-5deg) rotateX(5deg)" }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
