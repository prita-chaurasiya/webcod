"use client";

import { motion } from "framer-motion";

const categories = [
  { name: "E-Commerce", img: "shopping.png" },
  { name: "School & College", img: "school.png" },
  { name: "Institute", img: "ux.png" },
  { name: "Tour & Travel", img: "walking-tour.png" },
  { name: "NGO", img: "earth.png" },
  { name: "Consulting", img: "consultant.png" },
  { name: "HealthCare", img: "doctor-consultation.png" },
  { name: "Security Service", img: "guard.png" },
  { name: "Manufacturing", img: "manu.png" },
  { name: "News & Blog", img: "blog.png" },
  { name: "Hotel & Restaurant", img: "hotel.png" },
  { name: "Real Estate", img: "deal.png" }
];

export function Categories() {
  return (
    <section className="py-20 bg-[#f1f8fb]">
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 justify-center mb-4">
            <img src="https://webcodian.com/public/web/assets/img/star-icon.png" alt="star" className="w-5 h-5" />
            <span className="text-[#e80566] text-[15px] font-semibold tracking-wide uppercase">Our Categories</span>
          </div>
          <p className="text-[16px] text-gray-600 max-w-2xl mx-auto">
            We use a systematic approach to maximum and optimize results. We follow the below process to develop any website.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white p-6 rounded text-center border border-transparent shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-[60px] h-[60px] mx-auto bg-[#f8f9fa] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#e80566] transition-colors duration-300">
                <img 
                  src={`https://webcodian.com/public/web/assets/img/services/${category.img}`} 
                  alt={category.name} 
                  className="w-8 h-8 object-contain group-hover:brightness-0 group-hover:invert transition-all"
                />
              </div>
              <h3 className="text-[17px] font-bold text-[#252525] font-lato group-hover:text-[#e80566] transition-colors">
                {category.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
