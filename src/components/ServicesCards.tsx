"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { id: "web-development", title: "Web Development", img: "coding.png", desc: "Build highly scalable, responsive, and secure custom web applications." },
  { id: "software-development", title: "Software Development", img: "soft.png", desc: "Enterprise-grade software tailored to automate your business workflows." },
  { id: "digital-marketing", title: "Digital Marketing", img: "social-media.png", desc: "Data-driven marketing strategies to skyrocket your brand visibility." },
  { id: "app-development", title: "App Development", img: "app.png", desc: "Native and cross-platform mobile experiences for iOS and Android." },
  { id: "seo-smo", title: "SEO/SMO", img: "seo.png", desc: "Advanced search engine optimization and social media growth tactics." },
  { id: "graphic-design", title: "Graphic Design", img: "graphic-design.png", desc: "Stunning brand identities, UI/UX, and creative visual assets." },
  { id: "bulk-sms", title: "Bulk SMS", img: "sms.png", desc: "High-deliverability SMS gateways for instant customer outreach." },
  { id: "maintenance", title: "Maintenance", img: "maintenance.png", desc: "24/7 technical support, updates, and infrastructure monitoring." },
  { id: "bulk-whatsapp-sms", title: "Bulk Whatsapp SMS", img: "whatsapp.png", desc: "Automated WhatsApp marketing campaigns for high conversion rates." },
  { id: "digital-product", title: "Digital Product", img: "product.png", desc: "End-to-end product engineering from ideation to successful launch." },
  { id: "bulk-voice-call", title: "Bulk Voice Call", img: "voice.png", desc: "Automated voice broadcasting solutions for large communications." },
  { id: "video-editing", title: "Video Editing", img: "video.png", desc: "Professional post-production and cinematic video editing services." }
];

export function ServicesCards() {
  return (
    <section className="py-12 md:py-16 bg-[#f8fafc] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 justify-center mb-4">
            <span className="text-[var(--primary)] text-sm font-bold tracking-widest uppercase bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            We provide business-oriented professional solutions.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-gradient-to-b from-white to-slate-50 p-8 rounded-2xl text-center border border-slate-100 hover:border-orange-200 shadow-sm hover:shadow-[0_15px_35px_rgba(37,99,235,0.08)] transition-all duration-300 group flex flex-col items-center h-full"
            >
              <div className="w-[70px] h-[70px] mx-auto bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--primary)] group-hover:rotate-3 transition-all duration-300">
                <img 
                  src={`https://webcodian.com/public/web/assets/img/services/${service.img}`} 
                  alt={service.title} 
                  className="w-9 h-9 object-contain group-hover:brightness-0 group-hover:invert transition-all img-premium"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[var(--primary)] transition-colors">
                <Link href={`/${service.id}`}>{service.title}</Link>
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                {service.desc}
              </p>
              <Link 
                href={`/${service.id}`} 
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-[var(--primary)] transition-colors mt-auto"
              >
                Explore Solution <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

