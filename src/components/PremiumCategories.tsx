"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  { title: "E-Commerce", icon: "https://webcodian.com/public/web/assets/img/services/shopping.png", slug: "e-commerce" },
  { title: "School & College", icon: "https://webcodian.com/public/web/assets/img/services/school.png", slug: "school-college" },
  { title: "Institute", icon: "https://webcodian.com/public/web/assets/img/services/ux.png", slug: "institute" },
  { title: "Tour & Travel", icon: "https://webcodian.com/public/web/assets/img/services/walking-tour.png", slug: "tour-travel" },
  { title: "NGO", icon: "https://webcodian.com/public/web/assets/img/services/earth.png", slug: "ngo" },
  { title: "Consulting", icon: "https://webcodian.com/public/web/assets/img/services/consultant.png", slug: "consulting" },
  { title: "HealthCare", icon: "https://webcodian.com/public/web/assets/img/services/doctor-consultation.png", slug: "healthcare" },
  { title: "Security Service", icon: "https://webcodian.com/public/web/assets/img/services/guard.png", slug: "security-service" },
  { title: "Manufacuring", icon: "https://webcodian.com/public/web/assets/img/services/manu.png", slug: "manufacturing" },
  { title: "News & Blog", icon: "https://webcodian.com/public/web/assets/img/services/blog.png", slug: "news-blog" },
  { title: "Hotel & Restaurant", icon: "https://webcodian.com/public/web/assets/img/services/hotel.png", slug: "hotel-restaurant" },
  { title: "Real Estate", icon: "https://webcodian.com/public/web/assets/img/services/deal.png", slug: "real-estate" },
];

const containerVariants: any = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } }
};

export function PremiumCategories() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-500 font-semibold text-sm mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            OUR CATEGORIES
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-[#1f2937] mb-4 max-w-2xl mx-auto"
          >
            We use a systematic approach to maximum and optimize results.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            We follow the below process to develop any website for various industries.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 perspective-1000"
        >
          {categories.map((cat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link href={`/industries/${cat.slug}`} className="block group w-full h-full">
                <div className="bg-[#f8fafc] rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-6 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-100 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-x-1 group-hover:rotate-y-1 relative overflow-hidden h-full">
                  
                  {/* Subtle Light Sweep */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -translate-x-full group-hover:translate-x-full ease-in-out"></div>

                  <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-transform duration-500">
                    <img src={cat.icon} alt={cat.title} className="w-12 h-12 object-contain group-hover:-translate-y-1 transition-transform duration-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                    {cat.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
