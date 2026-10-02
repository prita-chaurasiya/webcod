"use client";

import { motion } from "framer-motion";
import { AboutBreadcrumb } from "@/components/AboutBreadcrumb";
import { PremiumOpenTicket } from "@/components/PremiumOpenTicket";
import { 
  LifeBuoy, MessageSquare, PhoneCall, FileText, 
  Settings, CreditCard, GraduationCap, Server, Search, CheckCircle2 
} from "lucide-react";
import Link from "next/link";

const supportCategories = [
  { icon: Settings, title: "Technical Support", desc: "Software bugs, server downtime, API failures, or deployment issues." },
  { icon: CreditCard, title: "Billing & Invoices", desc: "Payment confirmations, invoice requests, or subscription upgrades." },
  { icon: Server, title: "Project Support", desc: "Change requests, phase approvals, and architecture consultations." },
  { icon: GraduationCap, title: "Student / Intern Support", desc: "LMS access, certificate verification, or placement assistance." }
];

const faq = [
  { q: "What is your average response time?", a: "For enterprise clients with an active SLA, our initial response time is under 15 minutes for critical issues (Severity 1). General queries are typically addressed within 2 hours." },
  { q: "How do I track my ticket status?", a: "Once you submit a ticket below, you will receive an email with a unique tracking ID and a secure portal link to monitor live updates from our engineering team." },
  { q: "Do you offer 24/7 support?", a: "Yes, our Level-3 engineering team operates on a 24/7 rotation for critical server outages and production down emergencies." },
  { q: "How can I escalate an urgent issue?", a: "If your ticket hasn't been resolved within the SLA timeframe, you can reply to the ticket email with 'ESCALATE' in the subject line, which alerts the Lead Architect immediately." }
];

export default function SupportPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <AboutBreadcrumb 
        title="CLIENT SUPPORT DESK"
        subtitle="Encountered an issue, need server maintenance, or want quick technical help? Raise a ticket or reach our live support channels."
        badge="⚡ 24/7 DEDICATED ASSISTANCE"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "More" },
          { label: "Support" }
        ]}
        highlights={["Average Response: <15 mins", "Dedicated Ticket Tracking", "Senior Dev Escalation", "100% SLA Guarantee"]}
      />

      {/* Support Search / Knowledge Base */}
      <section className="py-16 bg-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">How can we help you today?</h2>
          <div className="relative max-w-2xl mx-auto">
            <input 
              type="text" 
              placeholder="Search for articles, guides, or error codes..." 
              className="w-full pl-6 pr-16 py-5 rounded-2xl bg-white text-slate-900 focus:outline-none focus:ring-4 focus:ring-orange-400/50 shadow-2xl text-lg" 
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center hover:bg-orange-700 transition-colors">
              <Search className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm font-medium text-orange-200">
            <span>Popular:</span>
            <span className="px-3 py-1 bg-orange-500/30 rounded-full cursor-pointer hover:bg-white hover:text-orange-500 transition-colors">Reset Password</span>
            <span className="px-3 py-1 bg-orange-500/30 rounded-full cursor-pointer hover:bg-white hover:text-orange-500 transition-colors">Server Down</span>
            <span className="px-3 py-1 bg-orange-500/30 rounded-full cursor-pointer hover:bg-white hover:text-orange-500 transition-colors">Certificate Verify</span>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 border border-slate-200 rounded-3xl hover:border-orange-500 hover:shadow-xl hover:-translate-y-1 transition-all group bg-slate-50 hover:bg-white cursor-pointer text-center"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-b from-white to-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <cat.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{cat.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticket Form */}
      <div className="bg-slate-50 border-t border-slate-200 py-10" id="ticket">
        <div className="container mx-auto px-4 text-center max-w-3xl mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Raise a Support Ticket</h2>
          <p className="text-slate-600 text-lg">Please provide as much detail as possible. Our L2/L3 engineers will review and respond shortly.</p>
        </div>
        <PremiumOpenTicket />
      </div>

      {/* Contact Channels */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="bg-slate-900 rounded-[40px] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row gap-12 items-center justify-between">
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
              <LifeBuoy className="w-full h-full object-cover scale-150 translate-x-1/4" />
            </div>
            
            <div className="relative z-10 lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Need Immediate Assistance?</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                If you are an enterprise client facing a critical Sev-1 outage, bypass the ticket system and reach our emergency escalation hotline immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+918000000000" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-orange-50 transition-colors">
                  <PhoneCall className="w-5 h-5 text-orange-500" /> Call Hotline
                </a>
                <a href="mailto:support@webcodian.com" className="inline-flex items-center justify-center gap-2 bg-slate-800 text-white border border-slate-700 font-bold px-8 py-4 rounded-xl hover:bg-slate-700 transition-colors">
                  <MessageSquare className="w-5 h-5" /> Email Support
                </a>
              </div>
            </div>
            
            <div className="relative z-10 lg:w-1/3 bg-slate-800/50 p-8 rounded-3xl border border-slate-700 backdrop-blur-sm w-full">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-orange-400" /> Quick Resources
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors cursor-pointer">
                  <CheckCircle2 className="w-4 h-4 text-green-400"/> API Documentation
                </li>
                <li className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors cursor-pointer">
                  <CheckCircle2 className="w-4 h-4 text-green-400"/> Server Status Page
                </li>
                <li className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors cursor-pointer">
                  <CheckCircle2 className="w-4 h-4 text-green-400"/> Internship LMS Portal
                </li>
                <li className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors cursor-pointer">
                  <CheckCircle2 className="w-4 h-4 text-green-400"/> Client Payment Gateway
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faq.map((f, idx) => (
              <div key={idx} className="bg-gradient-to-b from-white to-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{f.q}</h3>
                <p className="text-slate-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

