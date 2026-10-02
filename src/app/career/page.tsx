"use client";

import { motion } from "framer-motion";
import { AboutBreadcrumb } from "@/components/AboutBreadcrumb";
import { PremiumPerks } from "@/components/PremiumPerks";
import { PremiumJobs } from "@/components/PremiumJobs";
import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";
import { 
  Building2, MonitorPlay, Zap, Heart, 
  BrainCircuit, Coffee, Rocket, ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function CareerPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <AboutBreadcrumb 
        title="JOIN OUR INNOVATION TEAM"
        subtitle="Shape the future of intelligent software and digital experiences. Explore open roles, exceptional benefits, and our collaborative tech culture."
        badge="🚀 WE ARE HIRING TALENT"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "More" },
          { label: "Career" }
        ]}
        highlights={["Competitive Compensation", "Flexible Work Environment", "Latest Tech Stack", "Direct Leadership Mentorship"]}
      />

      {/* Why Join Us & Culture */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-sm font-bold border border-orange-100">
                <Heart className="w-4 h-4" /> Life at WebCodian
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Build the Future of Enterprise Software
              </h2>
              <div className="text-slate-600 text-lg leading-relaxed space-y-6 mb-8">
                <p>
                  At WebCodian, we don't just write code—we engineer solutions that power global enterprises. We are a collective of driven architects, designers, and innovators passionate about pushing the boundaries of technology.
                </p>
                <p>
                  We foster a culture of continuous learning, radical transparency, and engineering autonomy. Whether you're building high-frequency trading platforms, advanced AI agents, or beautiful consumer apps, your work here will have a massive impact.
                </p>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-1 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="text-3xl font-bold text-orange-500 mb-2">98%</div>
                  <div className="text-slate-700 font-medium">Employee Retention Rate</div>
                </div>
                <div className="flex-1 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="text-3xl font-bold text-orange-500 mb-2">4.9/5</div>
                  <div className="text-slate-700 font-medium">Glassdoor Rating</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" alt="Office Culture" className="w-full h-[250px] object-cover rounded-3xl mt-12 shadow-xl" />
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80" alt="Team Meeting" className="w-full h-[250px] object-cover rounded-3xl shadow-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Existing Perks */}
      <div className="bg-slate-50 border-t border-slate-200">
        <PremiumPerks />
      </div>

      {/* Hiring Process */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Hiring Process</h2>
            <p className="text-slate-400 text-lg">We value your time. Our streamlined process ensures transparency and fast decision making.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-800 -z-0"></div>
            
            {[
              { step: "1", title: "Application Review", desc: "Our engineering managers review your resume, GitHub, and portfolio." },
              { step: "2", title: "Technical Screen", desc: "A 45-minute discussion on architecture, logic, and problem-solving." },
              { step: "3", title: "Culture Fit & Founders", desc: "Meet the leadership team to align on vision, culture, and growth." },
              { step: "4", title: "Offer Extended", desc: "Welcome to WebCodian! We move fast and make highly competitive offers." }
            ].map((phase, idx) => (
              <div key={idx} className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto bg-slate-900 border-4 border-slate-700 text-orange-400 rounded-full flex items-center justify-center text-3xl font-bold mb-6 shadow-xl">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <div className="bg-white py-12">
        <PremiumJobs />
      </div>

      {/* Internship CTA */}
      <section className="py-20 bg-orange-50 border-y border-orange-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="bg-gradient-to-b from-white to-slate-50 rounded-[40px] p-10 md:p-16 shadow-xl border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-2/3">
              <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Looking for an Internship?</h2>
              <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
                Are you a student looking to transition into an enterprise software engineer? Join our intensive 6-month live-project training program. Top performers receive a Pre-Placement Offer (PPO).
              </p>
            </div>
            <div>
              <Link href="/internship" className="inline-flex items-center gap-2 bg-orange-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/30 whitespace-nowrap">
                Explore Internship <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PremiumProjectCTA />
    </main>
  );
}

