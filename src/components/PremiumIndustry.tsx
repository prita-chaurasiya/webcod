"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const allIndustries = [
  { name: "Course Selling", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&q=80" },
  { name: "Online Exam Portal", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=100&q=80" },
  { name: "E-Commerce", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&q=80" },
  { name: "HealthCare", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=100&q=80" },
  { name: "NGO", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=100&q=80" },
  { name: "Institute", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=100&q=80" },
  { name: "Consultant", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&q=80" },
  { name: "Education (EdTech)", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=100&q=80" },
  { name: "Hotel & Restaurant", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=100&q=80" },
  { name: "Tour And Travel", image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=100&q=80" },
  { name: "Transport", image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c1590a?w=100&q=80" },
  { name: "Smart Lab", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=100&q=80" },
  { name: "Security Service", image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=100&q=80" },
  { name: "Real Estate", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=100&q=80" },
  { name: "News & Blog", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=100&q=80" },
  { name: "Matrimonial", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=100&q=80" },
  { name: "Manufacturing", image: "https://images.unsplash.com/photo-1565514020179-026b92b2d707?w=100&q=80" },
  { name: "Courier system", image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=100&q=80" },
  { name: "Job Portal", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&q=80" }
];

export function PremiumIndustry() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="inline-block bg-black text-white text-xs font-bold tracking-widest px-4 py-2 uppercase mb-6 shadow-sm">
            INDUSTRY SECTOR
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-slate-900 mb-6 tracking-tight leading-tight">
            Industries We Empower with Technology
          </h2>
          <p className="text-lg text-slate-500 max-w-4xl mx-auto leading-relaxed">
            We've built production-grade software for some of the most demanding industries in the world. Our domain knowledge means less ramp-up time and better product decisions for you.
          </p>
        </div>

        {/* Pill Layout */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-8 px-4">
          {allIndustries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="relative"
            >
              <Link href={`/industry/${ind.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="block group">
                <div className="flex items-center bg-white border border-slate-200 rounded-full pr-6 pl-1.5 py-1.5 shadow-sm hover:shadow-md hover:bg-[#2eb872] hover:border-[#2eb872] transition-all duration-300 min-w-[200px]">
                  
                  {/* Left Circle Image Container */}
                  <div className="relative w-10 h-10 md:w-12 md:h-12 shrink-0">
                    <div className="absolute inset-0 bg-slate-100 rounded-full overflow-hidden transition-transform duration-500 origin-center group-hover:scale-[1.8] group-hover:z-50 group-hover:shadow-2xl border-2 border-white group-hover:border-[#2eb872] z-10">
                      <img 
                        src={ind.image} 
                        alt={ind.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Text */}
                  <span className="ml-4 font-medium text-slate-700 group-hover:text-white transition-colors duration-300 whitespace-nowrap relative z-0">
                    {ind.name}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12 md:mt-16">
          <Link 
            href="/industry" 
            className="inline-flex items-center gap-2 text-[#2eb872] font-bold uppercase tracking-wider text-sm hover:text-[#25945c] transition-colors group"
          >
            VIEW ALL INDUSTRY
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
