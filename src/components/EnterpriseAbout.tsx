"use client";

import { motion } from "framer-motion";
import { 
  Globe2, Target, Lightbulb, Users, Award, Briefcase, 
  CheckCircle2, Building, ShieldCheck, MapPin, BarChart3,
  Rocket, Code, Shield, Cpu, Zap
} from "lucide-react";
import { EnterpriseSection } from "./EnterpriseSection";
import { EnterpriseSectionHeader } from "./EnterpriseSectionHeader";
import Link from "next/link";

export function EnterpriseAbout() {
  return (
    <div className="w-full bg-slate-50 overflow-hidden">
      
      {/* SECTION 1: Company Story */}
      <EnterpriseSection padding="large">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-blue-50 text-[var(--primary)] font-bold text-sm tracking-widest uppercase">
              Who We Are
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--heading)] tracking-tight leading-[1.1]">
              A Global Leader in Software & Digital Transformation.
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Founded on the principles of innovation and engineering excellence, WebCodian has grown into a premier international software development and IT consulting firm. We partner with forward-thinking enterprises, startups, and institutions to navigate the complex digital landscape.
              </p>
              <p>
                From custom SaaS architectures and AI automation to comprehensive IT education and team augmentation, our global delivery model ensures scalable, secure, and future-ready solutions that drive measurable business growth.
              </p>
            </div>
            
            <div className="flex gap-12 pt-6 border-t border-slate-200">
              <div>
                <div className="text-4xl font-bold text-[var(--heading)] mb-2">15+</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[var(--heading)] mb-2">500+</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Enterprise Clients</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2000&auto=format&fit=crop" 
              alt="WebCodian Global Office" 
              className="rounded-[24px] shadow-2xl w-full h-[600px] object-cover"
            />
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-b from-white to-slate-50 p-8 rounded-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] max-w-sm border border-slate-100 hidden md:block">
              <div className="flex gap-4 items-start">
                <ShieldCheck className="w-10 h-10 text-[var(--primary)] shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-[var(--heading)] mb-2">ISO 9001 Certified</h4>
                  <p className="text-slate-600 text-sm">Committed to the highest global standards of quality and security in software engineering.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </EnterpriseSection>

      {/* SECTION 2: Vision & Mission (Custom UI based on Taksh IT Reference) */}
      <EnterpriseSection background="white" padding="large">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Circular Graphic Left */}
          <div className="relative w-full max-w-[500px] aspect-square mx-auto flex items-center justify-center">
            {/* The circular background */}
            <div className="absolute inset-0 bg-[#FFF5EE] rounded-full shadow-inner m-12 z-0"></div>
            
            {/* Center Logo */}
            <div className="relative z-10 w-24 h-24 flex items-center justify-center">
              <span className="text-6xl font-bold text-slate-800 tracking-tighter">W<span className="text-[var(--primary)]">.</span></span>
            </div>
            
            {/* Orbiting Elements */}
            <div className="absolute inset-0 z-20 animate-[spin_30s_linear_infinite]">
              {/* Top - Products */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center -mt-6">
                <span className="text-sm font-bold text-slate-800 mb-2 whitespace-nowrap animate-[spin_30s_linear_infinite_reverse]">Products</span>
                <div className="w-16 h-16 bg-[#1e293b] rounded-full border-4 border-white flex items-center justify-center shadow-lg animate-[spin_30s_linear_infinite_reverse]">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
              </div>
              
              {/* Bottom Right - Customer */}
              <div className="absolute bottom-12 right-0 flex flex-col items-center translate-x-4">
                <div className="w-16 h-16 bg-[#1e293b] rounded-full border-4 border-white flex items-center justify-center shadow-lg animate-[spin_30s_linear_infinite_reverse]">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-bold text-slate-800 mt-2 whitespace-nowrap animate-[spin_30s_linear_infinite_reverse]">Customer</span>
              </div>

              {/* Bottom Left - Team */}
              <div className="absolute bottom-12 left-0 flex flex-col items-center -translate-x-4">
                <div className="w-16 h-16 bg-[#1e293b] rounded-full border-4 border-white flex items-center justify-center shadow-lg animate-[spin_30s_linear_infinite_reverse]">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-bold text-slate-800 mt-2 whitespace-nowrap animate-[spin_30s_linear_infinite_reverse]">Team</span>
              </div>

              {/* Curved Arrows (Simulated with SVG) */}
              <svg className="absolute inset-0 w-full h-full text-[var(--primary)] opacity-80 p-8" viewBox="0 0 100 100">
                <path d="M 10 50 A 40 40 0 0 1 30 15" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M 70 15 A 40 40 0 0 1 90 50" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M 80 85 A 40 40 0 0 1 20 85" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>

          {/* Text Content Right */}
          <div className="relative">
            <h2 className="absolute -top-16 left-0 text-[120px] font-bold text-slate-50 uppercase pointer-events-none select-none z-0">Mission</h2>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-[var(--heading)] mb-6">
                Our <span className="text-[var(--primary)]">Mission</span>
              </h3>
              <p className="text-lg text-slate-600 leading-[1.8]">
                Our mission is to translate complex operational challenges into dependable, high-performing software systems. From initial architectural planning to deployment and lifecycle support, we help organizations adopt modern technologies with confidence. We focus on building scalable applications, simplifying intricate operational workflows, and delivering long-term technical value for our clients.
              </p>
            </div>
          </div>

        </div>
      </EnterpriseSection>

      {/* SECTION 2.5: Leadership */}
      <EnterpriseSection background="slate" padding="large">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-[var(--heading)] mb-4">
            Our <span className="text-[var(--primary)]">Leadership & Team</span>
          </h2>
          <p className="text-lg text-slate-600">
            Experienced professionals driving technology consulting, client partnership, and regulatory alignment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Leader 1 */}
          <div className="bg-gradient-to-b from-white to-slate-50 p-8 rounded-[12px] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-center md:items-start hover:shadow-md transition-shadow">
            <div className="relative shrink-0">
              {/* Outer decorative circle */}
              <div className="absolute -inset-3 border-2 border-blue-100 rounded-full border-t-[var(--primary)] border-r-[#0284c7] rotate-45"></div>
              {/* Inner decorative dot */}
              <div className="absolute top-0 right-0 w-3 h-3 bg-[#0284c7] rounded-full z-10"></div>
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" alt="Leader" className="w-24 h-24 rounded-full object-cover relative z-0 border-4 border-white shadow-sm" />
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold text-[var(--heading)]">Sachin Kumar</h4>
              <p className="text-[var(--primary)] font-semibold text-sm mb-4">Chief Marketing Officer</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Oversees enterprise client partnerships, technical strategy alignment, and global market expansion, driving sustained business growth and delivery accountability.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[#0284c7] font-bold text-sm hover:underline">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Leader 2 */}
          <div className="bg-gradient-to-b from-white to-slate-50 p-8 rounded-[12px] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-center md:items-start hover:shadow-md transition-shadow">
            <div className="relative shrink-0">
              <div className="absolute -inset-3 border-2 border-blue-100 rounded-full border-t-[var(--primary)] border-r-[#0284c7] rotate-45"></div>
              <div className="absolute top-0 right-0 w-3 h-3 bg-[#0284c7] rounded-full z-10"></div>
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" alt="Leader" className="w-24 h-24 rounded-full object-cover relative z-0 border-4 border-white shadow-sm" />
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold text-[var(--heading)]">Vaselina Valkova</h4>
              <p className="text-[var(--primary)] font-semibold text-sm mb-4">Legal & Compliance Consultant</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Specializes in digital finance, cross-border technology compliance, regulatory structuring, and risk assessment for fintech and decentralized ecosystems.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[#0284c7] font-bold text-sm hover:underline">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </EnterpriseSection>

      {/* SECTION 3: Core Values */}
      <EnterpriseSection padding="large">
        <EnterpriseSectionHeader 
          badge="Core Values"
          title="The Principles That Define Us"
          subtitle="Our culture is built on a foundation of integrity, technical excellence, and an unwavering commitment to client success."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Shield />, title: "Integrity First", desc: "Uncompromising ethics and transparency in every partnership." },
            { icon: <Cpu />, title: "Engineering Excellence", desc: "Writing clean, scalable, and secure code that stands the test of time." },
            { icon: <Zap />, title: "Agile Innovation", desc: "Adapting swiftly to emerging technologies to keep our clients ahead." },
            { icon: <Users />, title: "Client Centricity", desc: "Your success is our success. We treat your business as our own." },
          ].map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-b from-white to-slate-50 p-8 rounded-[24px] border border-slate-100 shadow-sm hover:border-[var(--primary)] hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-slate-50 text-slate-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                {val.icon}
              </div>
              <h4 className="text-xl font-bold text-[var(--heading)] mb-3">{val.title}</h4>
              <p className="text-slate-600">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </EnterpriseSection>

      {/* SECTION 4: Global Presence */}
      <EnterpriseSection background="navy" padding="large">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 text-white font-bold text-sm tracking-widest uppercase">
              Global Reach
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              Delivering Excellence Across Borders.
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              With a robust Global Delivery Model, we provide round-the-clock development, support, and consulting services to clients spanning North America, Europe, the Middle East, and Asia.
            </p>
            
            <div className="space-y-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">India Headquarters</h4>
                  <p className="text-slate-600">Varanasi & Noida - Development & Education Hubs</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Globe2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Global Client Base</h4>
                  <p className="text-slate-600">Serving enterprises in USA, UK, UAE, and Australia</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" 
              alt="Global Operations" 
              className="rounded-[24px] shadow-2xl opacity-80"
            />
          </motion.div>
        </div>
      </EnterpriseSection>

      {/* SECTION 5: CTA */}
      <EnterpriseSection padding="large">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 bg-slate-50 rounded-[32px] p-8 md:p-12 lg:p-16 border border-slate-100 shadow-sm">
          {/* Left: Illustration */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" 
              alt="Accelerate Digital Transformation" 
              className="w-full max-w-[500px] drop-shadow-xl rounded-2xl "
            />
          </div>
          
          {/* Right: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Ready to <span className="text-[var(--primary)]">Accelerate</span> Your Digital Transformation?
            </h2>
            <p className="text-lg text-slate-600 mb-8 font-medium leading-relaxed">
              Partner with WebCodian to engineer scalable, intelligent, and secure software solutions that dominate the market. Let's discuss your project today.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--primary)] hover:bg-white text-white rounded-[18px] font-bold text-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              Consult Our Experts <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </EnterpriseSection>
    </div>
  );
}

