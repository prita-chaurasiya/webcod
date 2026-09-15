"use client";

import { motion } from "framer-motion";

const funfacts = [
  { value: "6 Years", label: "On the market", img: "year.png" },
  { value: "15+", label: "Team Members", img: "team.png" },
  { value: "100%", label: "Satisfaction Rate", img: "satis.png" },
  { value: "24/7 hour", label: "Client Support", img: "cust.png" }
];

export function FunFacts() {
  return (
    <section className="py-24 bg-gray-50 bg-[url('https://webcodian.com/public/web/assets/img/funfacts-bg.jpg')] bg-cover bg-center bg-fixed relative">
      <div className="absolute inset-0 bg-[#e80566]/90" style={{ background: "linear-gradient(75deg, rgba(101,37,138,0.9) 10%, rgba(232,5,102,0.9))" }} />
      
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {funfacts.map((fact, index) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300">
                <img 
                  src={`https://webcodian.com/public/web/assets/img/${fact.img}`} 
                  alt={fact.label} 
                  className="w-10 h-10 object-contain filter brightness-0 invert"
                />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2 font-lato">{fact.value}</h3>
              <p className="text-lg font-medium text-white/90">{fact.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
