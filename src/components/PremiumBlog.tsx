"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

const blogs = [
  {
    title: "Unlocking Your Career Potential: The Value of Professional Diplomas",
    date: "01-Jan-1970",
    url: "/blog/unlocking-your-career-potential-the-value-of-professional-diplomas",
    image: "https://webcodian.com/public/uploads/blog/72ac7e3c0461fe30db23c958a8ef7c7f.png"
  },
  {
    title: "Mastering Time Management: A Key Skill for Online Learners",
    date: "01-Jan-1970",
    url: "/blog/mastering-time-management-a-key-skill-for-online-learners",
    image: "https://webcodian.com/public/uploads/blog/539b2043499978d8df9fd700a0d2be3f.png"
  },
  {
    title: "The Future of Online Learning: PDTCE's Innovative Approach",
    date: "06-Nov-2023",
    url: "/blog/the-future-of-online-learning-pdtce-s-innovative-approach",
    image: "https://webcodian.com/public/uploads/blog/91908ad90df562f81d86f8d828c50362.png"
  }
];

export function PremiumBlog() {
  return (
    <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-4"
          >
            <img src="https://webcodian.com/public/web/assets/img/star-icon.png" alt="Star" className="w-4 h-4 animate-spin-slow" />
            OUR BLOG
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-[#1f2937]"
          >
            Latest News & Articles
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {blogs.map((blog, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 50 }}
            >
              <Link href={blog.url} className="block group w-full h-full">
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-x-2 group-hover:rotate-y-1 h-full flex flex-col border border-gray-100">
                  
                  {/* Image Container with Zoom */}
                  <div className="relative w-full h-56 overflow-hidden bg-gray-100">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" 
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Calendar className="w-4 h-4 text-[#2eb872]" />
                      {blog.date}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 leading-snug mb-6 group-hover:text-[#2eb872] transition-colors duration-300">
                      {blog.title}
                    </h3>
                    
                    <div className="mt-auto flex items-center gap-2 font-bold text-[#f59e0b] group-hover:text-[#2eb872] transition-colors duration-300">
                      Read More
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
