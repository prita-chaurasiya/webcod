"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const allIndustries = [
  { name: "E-Commerce", href: "/industry/e-commerce", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=100&q=80" },
  { name: "HealthCare", href: "/industry/healthcare", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&q=80" },
  { name: "NGO", href: "/industry/ngo", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&q=80" },
  { name: "Institute", href: "/industry/institute", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=150&auto=format&fit=crop&q=80" },
  { name: "Consulting", href: "/industry/consulting", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=100&q=80" },
  { name: "Education (EdTech)", href: "/industry/education", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=100&q=80" },
  { name: "Hotel & Restaurant", href: "/industry/hotel-restaurant", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=100&q=80" },
  { name: "Tour And Travel", href: "/industry/tour-travel", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&q=80" },
  { name: "Security Service", href: "/industry/security-service", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&q=80" },
  { name: "Real Estate", href: "/industry/real-estate", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&q=80" },
  { name: "News & Blog", href: "/industry/news-blog", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=100&q=80" },
  { name: "Manufacturing", href: "/industry/manufacturing", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=150&auto=format&fit=crop&q=80" }
];

export function PremiumIndustry() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="inline-block bg-white text-[var(--heading)] text-xs font-bold tracking-widest px-4 py-2 uppercase mb-6 shadow-sm">
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
              <Link href={ind.href} className="block group">
                <div className="flex items-center bg-white border border-slate-200 rounded-full pr-6 pl-1.5 py-1.5 shadow-sm hover:shadow-md hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-all duration-300 min-w-[200px]">
                  
                  {/* Left Circle Image Container */}
                  <div className="relative w-10 h-10 md:w-12 md:h-12 shrink-0">
                    <div className="absolute inset-0 bg-slate-100 rounded-full overflow-hidden transition-transform duration-500 origin-center group-hover:scale-[1.8] group-hover:z-50 group-hover:shadow-lg border-2 border-white group-hover:border-[var(--primary)] z-10">
                      <img 
                        src={ind.image} 
                        alt={ind.name}
                        className="w-full h-full object-cover img-premium"
                      />
                    </div>
                  </div>
                  
                  {/* Text */}
                  <span className="ml-4 font-medium text-slate-700 group-hover:text-[var(--heading)] transition-colors duration-300 whitespace-nowrap relative z-0">
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
            className="inline-flex items-center gap-2 text-[var(--primary)] font-bold uppercase tracking-wider text-sm hover:text-[#25945c] transition-colors group"
          >
            VIEW ALL INDUSTRY
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
