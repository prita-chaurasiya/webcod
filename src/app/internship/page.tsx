"use client";

import { motion } from "framer-motion";
import { AboutBreadcrumb } from "@/components/AboutBreadcrumb";
import { PremiumInternshipForm } from "@/components/PremiumInternshipForm";
import { Laptop, Code2, Users, Award, ShieldCheck, Zap } from "lucide-react";

const perks = [
  {
    icon: Code2,
    title: "Live Production Projects",
    desc: "Build and deploy features on actual enterprise client applications with Git, CI/CD, and peer reviews."
  },
  {
    icon: Users,
    title: "1-on-1 Senior Mentorship",
    desc: "Weekly personalized 1:1 architectural reviews, debugging walkthroughs, and career coaching."
  },
  {
    icon: Award,
    title: "Verified Certificate & LOR",
    desc: "Receive an official verifiable certificate with Letter of Recommendation from WebCodian LLP."
  },
  {
    icon: Zap,
    title: "Pre-Placement Offer (PPO)",
    desc: "Top 20% high performers get fast-tracked into full-time software developer and engineer positions."
  }
];

export default function InternshipPage() {
  return (
    <main>
      <AboutBreadcrumb 
        title="TECH INTERNSHIP PROGRAM"
        subtitle="Work on real enterprise applications, learn directly from lead software architects, and fast-track your tech career."
        badge="🚀 2026 COHORT APPLICATIONS OPEN"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "More" },
          { label: "Internship" }
        ]}
        highlights={["Live Client Deployments", "Senior Mentorship", "Verified Certificate", "PPO Opportunities"]}
      />

      {/* Highlights & Benefits Bar */}
      <section className="py-14 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, idx) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#2eb872]/40 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2eb872]/10 text-[#2eb872] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <perk.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{perk.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Step Interactive Form */}
      <PremiumInternshipForm />
    </main>
  );
}
