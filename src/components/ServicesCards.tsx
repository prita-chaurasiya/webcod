"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { id: "web-development", title: "Web Development", img: "coding.png" },
  { id: "software-development", title: "Software Development", img: "soft.png" },
  { id: "digital-marketing", title: "Digital Marketing", img: "social-media.png" },
  { id: "app-development", title: "App Development", img: "app.png" },
  { id: "seo-smo", title: "SEO/SMO", img: "seo.png" },
  { id: "graphic-design", title: "Graphic Design", img: "graphic-design.png" },
  { id: "bulk-sms", title: "Bulk SMS", img: "sms.png" },
  { id: "maintenance", title: "Maintenance", img: "maintenance.png" },
  { id: "bulk-whatsapp-sms", title: "Bulk whatsapp SMS", img: "whatsapp.png" },
  { id: "digital-product", title: "Digital Product", img: "product.png" },
  { id: "bulk-voice-call", title: "Bulk Voice Call", img: "voice.png" },
  { id: "video-editing", title: "Video Editing", img: "video.png" }
];

export function ServicesCards() {
  return (
    <section className="py-20 bg-[#f1f8fb] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 justify-center mb-4">
            <img src="https://webcodian.com/public/web/assets/img/star-icon.png" alt="star" className="w-5 h-5" />
            <span className="text-[#e80566] text-[15px] font-semibold tracking-wide uppercase">Our Services</span>
          </div>
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#252525] font-lato">
            We provide business-oriented professional solutions.
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white p-6 rounded text-center border border-transparent hover:border-[#e80566]/30 shadow-[0_5px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all duration-300 group flex flex-col items-center h-full"
            >
              <div className="w-[60px] h-[60px] mx-auto bg-[#f8f9fa] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#e80566] transition-colors duration-300">
                <img 
                  src={`https://webcodian.com/public/web/assets/img/services/${service.img}`} 
                  alt={service.title} 
                  className="w-8 h-8 object-contain group-hover:brightness-0 group-hover:invert transition-all"
                />
              </div>
              <h3 className="text-[17px] font-bold text-[#252525] mb-4 flex-grow font-lato group-hover:text-[#e80566] transition-colors">
                <Link href={`/${service.id}`}>{service.title}</Link>
              </h3>
              <Link 
                href={`/${service.id}`} 
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-gray-500 hover:text-[#e80566] transition-colors mt-auto"
              >
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
