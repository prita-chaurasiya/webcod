"use client";

import { motion } from "framer-motion";
import { AboutBreadcrumb } from "@/components/AboutBreadcrumb";
import { PremiumPortfolio } from "@/components/PremiumPortfolio";
import { 
  Building2, MonitorSmartphone, Cpu, LineChart, Code2, 
  Settings, CheckCircle2, Quote, ArrowRight, Server, Database, Globe, Target
} from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    client: "Global FinTech Enterprise",
    industry: "Financial Technology",
    challenge: "The client needed a highly secure, low-latency trading platform capable of processing millions of transactions per second with real-time analytics.",
    solution: "We engineered a microservices-based architecture using Go, Node.js, and AWS, implementing robust end-to-end encryption and a React-based high-performance dashboard.",
    result: "400% increase in transaction throughput and a 99.999% uptime guarantee, resulting in a $5M increase in quarterly revenue.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    client: "National Healthcare Network",
    industry: "Healthcare / Telemedicine",
    challenge: "Existing legacy systems caused severe bottlenecks in patient onboarding, and their telemedicine solution suffered from poor video quality and HIPAA compliance issues.",
    solution: "Developed a HIPAA-compliant custom CRM and integrated WebRTC for seamless, encrypted video consultations accessible via mobile and web apps.",
    result: "Patient onboarding time reduced by 70%, with over 10,000 successful video consultations hosted in the first three months of launch.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  }
];

export default function PortfolioPage() {
  return (
    <main className="bg-slate-50">
      <AboutBreadcrumb 
        title="OUR FEATURED PROJECTS"
        subtitle="Explore our production deliveries across enterprise software, educational institutions, non-profits, and cutting-edge web applications."
        badge="✦ PORTFOLIO & CASE STUDIES"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "More" },
          { label: "Projects" }
        ]}
        highlights={["Enterprise SaaS & Portals", "Custom ERP Solutions", "Full-Stack Web Apps", "100% Client Satisfaction"]}
      />

      {/* Existing Premium Portfolio Component */}
      <div className="bg-white">
        <PremiumPortfolio />
      </div>

      {/* Domain Expertise */}
      <section className="py-24 bg-slate-900 text-white border-y border-slate-800">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Digital Transformation Delivered</h2>
            <p className="text-slate-400 text-lg">We build scalable software solutions across high-impact industry verticals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Cpu, title: "AI & Automation", desc: "Custom LLMs, Predictive Analytics, and Workflow Automation systems." },
              { icon: Globe, title: "Web Platforms", desc: "High-performance SaaS products, portals, and enterprise web applications." },
              { icon: MonitorSmartphone, title: "Mobile Apps", desc: "Native and cross-platform apps for consumer engagement and enterprise mobility." },
              { icon: Building2, title: "ERP & CRM", desc: "Custom resource planning and customer relationship management software." }
            ].map((domain, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl hover:bg-slate-800 transition-colors"
              >
                <div className="w-14 h-14 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                  <domain.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{domain.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{domain.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Studies */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Enterprise Case Studies</h2>
            <p className="text-slate-600 text-lg">Deep dive into how we solve complex engineering challenges.</p>
          </div>

          <div className="space-y-24">
            {caseStudies.map((study, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 1 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:w-1/2 w-full"
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group border border-slate-100">
                    <img src={study.image} alt={study.client} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-slate-900/10 pointer-events-none" />
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 1 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:w-1/2"
                >
                  <div className="mb-6 inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-bold border border-blue-100">
                    {study.industry}
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-8">{study.client}</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2"><Target className="w-5 h-5 text-red-500"/> The Challenge</h4>
                      <p className="text-slate-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2"><Settings className="w-5 h-5 text-blue-500"/> Our Solution</h4>
                      <p className="text-slate-600 leading-relaxed">{study.solution}</p>
                    </div>
                    <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl mt-8">
                      <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2"><LineChart className="w-5 h-5 text-green-500"/> The Results</h4>
                      <p className="text-slate-700 font-medium">{study.result}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Engineering Stack Used in Our Projects</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {["React", "Next.js", "Node.js", "Python", "Django", "PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Kubernetes", "GraphQL", "Flutter", "React Native", "TensorFlow"].map(tech => (
              <span key={tech} className="px-6 py-3 bg-white text-slate-800 rounded-xl font-bold shadow-sm border border-slate-200 flex items-center gap-2 cursor-default hover:border-blue-500 hover:text-blue-600 transition-colors">
                <Code2 className="w-4 h-4" /> {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Client Testimonials</h2>
            <p className="text-slate-600 text-lg">What global enterprise leaders say about WebCodian.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 bg-slate-50 rounded-3xl border border-slate-200 relative">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-blue-100" />
              <p className="text-slate-700 text-lg italic leading-relaxed mb-8 relative z-10">
                "WebCodian didn't just write code; they partnered with us to rethink our entire software architecture. Their ability to deliver a massive ERP overhaul ahead of schedule was nothing short of remarkable."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-slate-300 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80" alt="CEO" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">James Harrison</h4>
                  <p className="text-sm text-slate-500">CTO, Enterprise Logistics Inc.</p>
                </div>
              </div>
            </div>
            <div className="p-10 bg-slate-50 rounded-3xl border border-slate-200 relative">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-blue-100" />
              <p className="text-slate-700 text-lg italic leading-relaxed mb-8 relative z-10">
                "The mobile app they built for us completely transformed our customer engagement metrics. Flawless UI, incredibly fast API response times, and exceptional post-launch support."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-slate-300 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="CEO" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Sarah Jenkins</h4>
                  <p className="text-sm text-slate-500">VP of Product, RetailTech Hub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Ready to Build Your Next Big Project?</h2>
          <p className="text-slate-500 text-xl mb-10 max-w-2xl mx-auto font-medium">
            Let's discuss your architecture, timeline, and vision. Partner with us for guaranteed delivery and premium engineering.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 btn-primary px-10 py-5 rounded-2xl text-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
            Start a Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
