"use client";

import { motion } from "framer-motion";
import { Eye, Briefcase } from "lucide-react";
import Image from "next/image";

const industries = [
  { name: "Course Selling", img: "course-Selling.jpg" },
  { name: "Exam Portal", img: "exam-portal.jpg" },
  { name: "E-Commerce", img: "E-Commerce.webcodian.jpg" },
  { name: "HealthCare", img: "HealthCare.webcodian.jpg" },
  { name: "NGO", img: "NGO.webcodian.jpg" },
  { name: "Institute", img: "institute.jpeg" },
  { name: "Consultant", img: "Consultant.webcodian.jpg" },
  { name: "College", img: "college.jpeg" },
  { name: "Hotel & Restaurant", img: "Hotel & Restaurant.webcodian.jpg" },
  { name: "Tour And Travel", img: "Tour And Travel.webcodian.jpg" },
  { name: "Transport Gradient", img: "Transport Gradient.webcodian.jpg" },
  { name: "Smart Lab", img: "Smart Lab.webcodian.jpg" },
  { name: "Security Service", img: "Security Service.webcodian.jpg" },
  { name: "Real Estate", img: "Real Estate.webcodian.jpg" },
  { name: "News & Blog", img: "News & Blog.webcodian.jpg" },
  { name: "Matrimonial", img: "Matrimonial.webcodian.jpg" },
  { name: "Manufacturing", img: "Manufacturing.webcodian.jpg" },
  { name: "Courier", img: "corier.jpeg" },
  { name: "Job", img: "job.jpeg" }
];

export function PremiumIndustry() {
  return (
    <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2eb872]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-6"
          >
            <Briefcase className="w-5 h-5 text-[#2eb872]" />
            <span className="text-sm font-bold text-gray-700 uppercase tracking-widest">Our Expertise</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight"
          >
            Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2eb872] to-blue-600">Serve</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto"
          >
            We provide cutting-edge solutions tailored to meet the unique challenges of diverse sectors.
          </motion.p>
        </div>

        {/* 3D Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 perspective-1000">
          {industries.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative h-64 rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            >
              {/* Image */}
              <div className="absolute inset-0 w-full h-full p-4 transition-transform duration-700 group-hover:scale-110">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                 <img 
                    src={`https://webcodian.com/public/web/assets/img/industry/${item.img}`} 
                    alt={item.name}
                    className="w-full h-full object-contain filter drop-shadow-md"
                 />
              </div>

              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 backdrop-blur-[2px]">
                <h3 className="text-xl font-bold text-white mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.name}</h3>
                
                <div className="w-full">
                  <a href="#" className="w-full py-3 bg-[#2eb872] hover:bg-[#259b5f] text-white rounded-xl font-bold flex items-center justify-center gap-2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 shadow-[0_0_20px_rgba(46,184,114,0.4)]">
                    <Eye className="w-4 h-4" /> View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
