"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "Codeigniter", img: "ci.png" },
  { name: "Laravel", img: "lvv.png" },
  { name: "Magento", img: "mzg.png" },
  { name: "Python", img: "python.png" },
  { name: "Wordpress", img: "wordpress.png" },
  { name: "Node.js", img: "node.png" },
  { name: "shopify", img: "shop.png" },
  { name: "Flutter", img: "fl.png" },
  { name: "Kotlin", img: "Kot.png" },
  { name: "Java", img: "java.png" },
  { name: "Javascript", img: "javascript.png" },
  { name: "React-Js", img: "react.png" }
];

export function TechnologyBelt() {
  return (
    <section className="py-20 bg-[#f1f8fb] border-y border-gray-100">
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 justify-center mb-4">
            <img src="https://webcodian.com/public/web/assets/img/star-icon.png" alt="star" className="w-5 h-5" />
            <span className="text-[#e80566] text-[15px] font-semibold tracking-wide uppercase">Technology We Use</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white p-6 rounded border border-transparent shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-4 group"
            >
              <div className="h-12 w-full flex items-center justify-center">
                <img 
                  src={`https://webcodian.com/public/web/assets/img/services/${tech.img}`} 
                  alt={tech.name} 
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <h4 className="text-[15px] font-semibold text-[#252525] font-lato">{tech.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
