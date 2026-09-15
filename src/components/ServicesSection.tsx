"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Smartphone, Megaphone, LineChart, Layout, Server, Database, MessageSquare, Video, PenTool } from "lucide-react";

const services = [
  {
    id: "web",
    title: "Web Development",
    icon: Layout,
    description: "Custom websites and web applications built with modern frameworks to ensure performance, security, and scalability.",
    technologies: ["React", "Next.js", "Node.js", "WordPress"],
  },
  {
    id: "software",
    title: "Software Development",
    icon: Code,
    description: "End-to-end software solutions tailored to your business processes. We build robust architectures that grow with you.",
    technologies: ["Python", "Java", "Laravel", "MySQL"],
  },
  {
    id: "app",
    title: "App Development",
    icon: Smartphone,
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    technologies: ["Flutter", "React Native", "Kotlin", "Swift"],
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    icon: Megaphone,
    description: "Data-driven marketing strategies to increase brand visibility, generate leads, and maximize your ROI.",
    technologies: ["Google Ads", "Social Media", "Email Campaigns"],
  },
  {
    id: "seo",
    title: "SEO / SMO",
    icon: LineChart,
    description: "Comprehensive search engine optimization and social media optimization to rank higher and engage better.",
    technologies: ["On-page", "Off-page", "Technical SEO", "Analytics"],
  },
];

export function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="py-32 relative bg-black">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white font-space-grotesk mb-6">
            Everything You Need to Build Your Digital Future.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A complete suite of digital services designed to transform your business and accelerate growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Services List (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-2">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service)}
                className={`w-full text-left px-8 py-6 rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                  activeService.id === service.id
                    ? "bg-primary text-white shadow-[0_0_30px_rgba(79,70,229,0.3)]"
                    : "glass text-muted-foreground hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="text-xl font-bold font-space-grotesk">{service.title}</span>
                <service.icon className={`w-6 h-6 transition-transform ${activeService.id === service.id ? "scale-110" : "group-hover:scale-110"}`} />
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          <div className="lg:col-span-7 h-[500px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 glass rounded-3xl p-12 border border-white/10 flex flex-col justify-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mb-8">
                  <activeService.icon className="w-10 h-10 text-primary" />
                </div>
                
                <h3 className="text-4xl font-bold text-white mb-6 font-space-grotesk">
                  {activeService.title}
                </h3>
                
                <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                  {activeService.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Core Capabilities & Tech</h4>
                  <div className="flex flex-wrap gap-3">
                    {activeService.technologies.map((tech, i) => (
                      <span key={i} className="px-4 py-2 rounded-full border border-white/20 text-sm text-white/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-12">
                  <a href={`/services/${activeService.id}`} className="text-primary font-semibold hover:text-white transition-colors flex items-center gap-2">
                    Explore {activeService.title} <span className="text-xl">→</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
