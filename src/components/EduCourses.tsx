"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Clock, BookOpen, Star, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const categories = ["All", "Web Development", "App Development", "Digital Marketing", "Graphic Design", "Data Science"];

const courses = [
  {
    id: 1,
    title: "Full Stack Web Development (MERN / LAMP)",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80",
    instructor: "Expert Faculty",
    avatar: "/images/star-icon.png",
    duration: "6 Months",
    lectures: "Live Projects",
    price: "Premium",
    originalPrice: null,
    rating: 4.9,
    badgeColor: "bg-blue-100 text-blue-700"
  },
  {
    id: 2,
    title: "Advanced React Native App Development",
    category: "App Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80",
    instructor: "Expert Faculty",
    avatar: "/images/star-icon.png",
    duration: "4 Months",
    lectures: "Live Projects",
    price: "Premium",
    originalPrice: null,
    rating: 4.9,
    badgeColor: "bg-slate-50 text-[var(--primary)]"
  },
  {
    id: 3,
    title: "Complete Digital Marketing & SEO Masterclass",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
    instructor: "Expert Faculty",
    avatar: "/images/star-icon.png",
    duration: "3 Months",
    lectures: "Real Campaigns",
    price: "Premium",
    originalPrice: null,
    rating: 4.8,
    badgeColor: "bg-slate-50 text-[var(--primary)]"
  },
  {
    id: 4,
    title: "Professional UI/UX & Graphic Design",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80",
    instructor: "Expert Faculty",
    avatar: "/images/star-icon.png",
    duration: "3 Months",
    lectures: "Portfolio Ready",
    price: "Premium",
    originalPrice: null,
    rating: 5.0,
    badgeColor: "bg-slate-50 text-[var(--primary)]"
  },
  {
    id: 5,
    title: "Python & Data Science Bootcamp",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80",
    instructor: "Expert Faculty",
    avatar: "/images/star-icon.png",
    duration: "6 Months",
    lectures: "Corporate Solutions",
    price: "Premium",
    originalPrice: null,
    rating: 4.9,
    badgeColor: "bg-slate-50 text-[var(--primary)]"
  },
  {
    id: 6,
    title: "E-Commerce Development with Shopify",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
    instructor: "Expert Faculty",
    avatar: "/images/star-icon.png",
    duration: "2 Months",
    lectures: "Live Stores",
    price: "Premium",
    originalPrice: null,
    rating: 4.8,
    badgeColor: "bg-blue-100 text-blue-700"
  }
];

export function EduCourses() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses = activeCategory === "All" 
    ? courses 
    : courses.filter(c => c.category === activeCategory);

  return (
    <section className="py-12 md:py-16 bg-slate-50 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              Explore Our <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-blue-500">Premium Courses</span>
            </h2>
          </div>
          
          <div className="relative w-full md:w-[350px]">
            <input 
              type="text" 
              placeholder="Search your course..." 
              className="w-full pl-5 pr-12 py-4 bg-white border border-slate-200 rounded-[18px] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all text-sm font-medium placeholder:text-slate-500 shadow-sm"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-50 text-slate-500 rounded-lg flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Categories Tab Bar */}
        <div className="bg-white rounded-[18px] p-2 mb-12 flex items-center justify-between overflow-x-auto hide-scrollbar gap-2 shadow-sm border border-slate-100">
          <div className="flex items-center flex-nowrap gap-2 w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-6 py-3 rounded-[18px] font-bold text-sm transition-all duration-300 ${
                  activeCategory === cat 
                    ? "btn-primary shadow-md" 
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 perspective-[1000px]">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateX: -10 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transform hover:-translate-y-2 hover:rotate-y-2 transition-all duration-500 flex flex-col group"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Image */}
                <div className="relative h-[240px] overflow-hidden m-4 rounded-[1.5rem]">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 img-premium"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-[#f59e0b] fill-current" /> {course.rating}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 pt-4 flex flex-col flex-1">
                  
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-md ${course.badgeColor}`}>
                      {course.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 leading-snug mb-4 hover:text-[var(--primary)] transition-colors cursor-pointer line-clamp-2">
                    {course.title}
                  </h3>

                  {/* Meta */}
                  <div className="flex items-center gap-6 text-sm text-slate-500 font-medium mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                        <Clock className="w-4 h-4 text-blue-500" />
                      </div>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#e8f6ef] flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-[var(--primary)]" />
                      </div>
                      <span>{course.lectures}</span>
                    </div>
                  </div>

                  {/* Footer (Price & Action) */}
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-xs font-semibold text-slate-500 block mb-1">Fee Status</span>
                      <span className="text-xl font-extrabold text-slate-900">{course.price}</span>
                    </div>
                    <button className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[var(--primary)] transition-colors duration-300">
                      <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-[var(--heading)] transition-colors" />
                    </button>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center">
          <button className="px-8 py-4 border-2 border-slate-200 text-slate-700 font-bold rounded-[18px] hover:border-[var(--primary)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/5 transition-all duration-300">
            View Full Curriculum
          </button>
        </div>

      </div>
    </section>
  );
}
