const fs = require('fs');
const path = require('path');

const pages = [
  { slug: "api-development-and-system-integration", title: "API Development & System Integration", desc: "Seamlessly connect disparate systems to create unified digital ecosystems." },
  { slug: "cloud-deployment-and-devops-services", title: "Cloud Deployment & DevOps", desc: "Scale your infrastructure globally with automated CI/CD and secure cloud environments." },
  { slug: "data-analytics-and-emerging-technologies", title: "Data Analytics & Emerging Tech", desc: "Turn raw data into actionable enterprise intelligence using predictive algorithms." },
  { slug: "enterprise-software", title: "Enterprise Software Development", desc: "Custom business logic and scalable microservices for global enterprises." },
  { slug: "ppt-design", title: "Presentation (PPT) Design", desc: "Corporate presentation design that wins pitches and impresses stakeholders." },
  { slug: "software-testing-and-qa-services", title: "Software Testing & QA", desc: "Rigorous automated and manual testing to ensure zero-defect product launches." },
  { slug: "ui-ux-design-and-prototyping", title: "UI/UX Design & Prototyping", desc: "Human-centric design strategies for engaging digital product experiences." },
  { slug: "blockchain-development", title: "Blockchain & Web3 Development", desc: "Decentralized architecture and secure distributed ledger technologies." },
  { slug: "smart-contract-development", title: "Smart Contract Development", desc: "Audited, secure, and self-executing contracts for the modern Web3 economy." },
  { slug: "wallet-development", title: "Crypto Wallet Development", desc: "Non-custodial and custodial secure crypto wallet infrastructures." },
  { slug: "exchange-software-development", title: "Crypto Exchange Development", desc: "High-liquidity, high-frequency trading platforms built for scale." },
  { slug: "ai-chatbot-development", title: "AI & Chatbot Development", desc: "Intelligent conversational agents that automate customer success." },
  { slug: "logo-design", title: "Logo & Brand Identity", desc: "Memorable corporate branding designed for modern enterprises." },
  { slug: "web-application-development", title: "Web Application Development", desc: "Robust, scalable, and secure web applications built on modern frameworks." },
];

const template = (title, desc) => {
  return `"use client";

import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";
import { Headphones, Shield, Cpu, Activity, Globe, Layers, Settings, BarChart, ShieldCheck, Cloud, Brain, Network } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="bg-white min-h-screen font-sans">
      
      {/* 1. Breadcrumb Section */}
      <div 
        className="relative py-24 lg:py-32 bg-[#3b70e0] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "linear-gradient(rgba(10, 40, 50, 0.7), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')" }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
             <span className="px-4 py-1.5 rounded-full bg-white/10 text-white border border-white/20 font-bold text-sm tracking-widest uppercase mb-6 shadow-sm backdrop-blur-md">
                Enterprise Solution
             </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight max-w-4xl tracking-tight">
              ${title}
            </h1>
            <ul className="flex items-center gap-2 text-white/90 font-medium uppercase text-sm tracking-wider">
              <li><Link href="/" className="hover:text-white transition-colors">HOME</Link></li>
              <li className="text-white/60">/</li>
              <li className="text-white font-bold capitalize">Solutions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2. Hero Content */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="mb-6 relative inline-block">
                <span className="bg-blue-600 text-white px-5 py-2 rounded-r-full font-bold text-sm tracking-wider uppercase shadow-md relative z-10">Overview</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Transforming Businesses With <span className="text-blue-600">${title}</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
                ${desc}
              </p>
              <p className="text-slate-500 mb-8 leading-relaxed">
                At WebCodian, we engineer premium software solutions tailored for enterprise scalability. Our expert teams deliver robust digital architecture that drives operational efficiency and global growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] transition-all">
                  Discuss Your Project
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop" alt="Hero" className="rounded-[2.5rem] shadow-2xl img-premium border-4 border-slate-50" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Business Challenges We Solve */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#0f2c59] mb-6">Business Challenges We Solve</h2>
            <p className="text-xl text-slate-600 font-medium">Overcome technical debt and scale your operations effortlessly.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Layers, title: "System Fragmentation", desc: "Eliminate data silos by integrating disparate business systems into a unified architecture." },
              { icon: Settings, title: "Operational Inefficiency", desc: "Automate manual workflows to drastically reduce human error and overhead costs." },
              { icon: BarChart, title: "Scaling Bottlenecks", desc: "Future-proof your business with architecture that handles exponential transaction volume." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2rem] border border-slate-200 hover:border-blue-300 transition-colors shadow-sm group">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#0f2c59] mb-6">Premium Capabilities</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["High Performance", "Bank-grade Security", "Custom Architecture", "24/7 Global Support"].map((feat, i) => (
               <div key={i} className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-2xl hover:bg-blue-600 hover:text-white transition-all group border border-slate-200">
                  <ShieldCheck className="w-10 h-10 text-blue-600 group-hover:text-white mb-4 transition-colors" />
                  <span className="font-bold text-lg text-center">{feat}</span>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Business Benefits */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" alt="Benefits" className="rounded-[2.5rem] shadow-xl border-4 border-white" />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8">Unfair Business Advantage</h2>
              <ul className="space-y-6">
                {[
                  "Accelerate go-to-market speed by up to 60%",
                  "Decrease operational infrastructure costs",
                  "Enhance customer satisfaction and retention",
                  "Achieve 99.99% system uptime guarantees"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
                    <ShieldCheck className="w-8 h-8 text-blue-600 flex-shrink-0" />
                    <span className="text-lg font-bold text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Development Process */}
      <section className="py-24 lg:py-32 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Enterprise Methodology</h2>
            <p className="text-xl text-slate-400">A rigorous approach to engineering digital excellence.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Deep architectural planning and requirement gathering." },
              { step: "02", title: "Prototyping", desc: "Rapid wireframing and technical proof of concepts." },
              { step: "03", title: "Development", desc: "Agile sprints with continuous integration." },
              { step: "04", title: "Deployment", desc: "Zero-downtime launches and automated scaling." }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800 p-8 rounded-[2rem] border border-slate-700 hover:bg-slate-700 transition-colors">
                <div className="text-5xl font-black text-slate-600 mb-6">{item.step}</div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-slate-400 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Technology Stack */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#0f2c59]">Modern Technology Stack</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {["React", "Next.js", "Node.js", "Python", "AWS", "Docker", "Kubernetes", "PostgreSQL", "Redis", "GraphQL"].map((tech) => (
              <div key={tech} className="bg-slate-50 px-8 py-4 rounded-full border border-slate-200 shadow-sm font-black text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-colors">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Industries We Serve */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#0f2c59] mb-6">Industries We Empower</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Cloud, name: "Healthcare" },
              { icon: BarChart, name: "Finance" },
              { icon: Network, name: "Retail" },
              { icon: Brain, name: "Logistics" }
            ].map((ind, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl hover:bg-blue-600 hover:text-white transition-all group border border-slate-200 cursor-default shadow-sm">
                <ind.icon className="w-10 h-10 text-blue-600 group-hover:text-white mb-4 transition-colors" />
                <span className="font-bold text-lg">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Security & Compliance */}
      <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px]"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-white mb-6">Data Privacy & Security</h2>
              <p className="text-lg text-blue-200 mb-8 font-medium">We architect our systems to strictly comply with global data protection laws and security standards.</p>
              <ul className="space-y-4">
                {["End-to-End Encryption", "SOC2 Compliance Readiness", "Automated Penetration Testing", "Role-Based Access Control"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-blue-400" />
                    <span className="font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop" alt="Security" className="rounded-3xl shadow-2xl border-4 border-blue-800" />
            </div>
          </div>
        </div>
      </section>

      {/* 10. Quality Assurance */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl font-black text-[#0f2c59] mb-8">Rigorous Quality Assurance</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">Every line of code is heavily vetted through automated pipelines, regression testing, and peer reviews to ensure zero-defect deployments.</p>
        </div>
      </section>

      {/* 11. Client Success Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-blue-50 p-12 lg:p-20 rounded-[3rem] text-center border border-blue-100 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Client Success Story</h2>
            <p className="text-xl text-slate-600 font-medium italic max-w-4xl mx-auto mb-10">
              "WebCodian transformed our legacy infrastructure. Their technical excellence and rapid execution saved us thousands of hours in manual overhead."
            </p>
            <div className="font-bold text-slate-800 uppercase tracking-widest text-sm">— Global Enterprise Partner</div>
          </div>
        </div>
      </section>

      {/* 12. Maintenance & Support */}
      <section className="py-24 bg-slate-900 text-white">
         <div className="container mx-auto px-4 max-w-7xl text-center">
            <h2 className="text-3xl font-black mb-8">24/7 Premium Support</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-medium">We offer dedicated DevOps monitoring, SLA-backed maintenance, and continuous optimization post-launch.</p>
         </div>
      </section>

      {/* 13. Enterprise Use Cases */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#0f2c59]">Proven Use Cases</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-[2rem] p-10 border border-slate-200">
               <h3 className="text-2xl font-black mb-4 text-slate-900">B2B Integrations</h3>
               <p className="text-slate-600 text-lg font-medium">Securely integrating vendor supply chains with internal ERPs.</p>
            </div>
            <div className="bg-slate-50 rounded-[2rem] p-10 border border-slate-200">
               <h3 className="text-2xl font-black mb-4 text-slate-900">SaaS Scaling</h3>
               <p className="text-slate-600 text-lg font-medium">Refactoring monolithic applications into scalable microservices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQs */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#0f2c59]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "How do you ensure data security?", a: "We employ military-grade encryption and follow strict international compliance frameworks during all phases." },
              { q: "What is your typical engagement model?", a: "We offer both dedicated team augmentation and end-to-end project delivery models tailored to your needs." },
              { q: "Do you provide post-launch support?", a: "Yes, we provide comprehensive SLA-based support and maintenance packages." }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <h4 className="font-bold text-lg text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-slate-600 font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. CTA */}
      <PremiumProjectCTA />
    </main>
  );
}`;
};

pages.forEach(page => {
  const dir = path.join('d:/webcod/src/app', page.slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const filePath = path.join(dir, 'page.tsx');
  fs.writeFileSync(filePath, template(page.title, page.desc));
  console.log('Generated:', filePath);
});
