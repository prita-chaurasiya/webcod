"use client";

import { motion } from "framer-motion";
import { AboutBreadcrumb } from "@/components/AboutBreadcrumb";
import { PremiumPayment } from "@/components/PremiumPayment";
import { 
  ShieldCheck, Lock, CreditCard, Landmark, 
  Smartphone, FileText, CheckCircle2, HelpCircle
} from "lucide-react";

export default function PayOnlinePage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <AboutBreadcrumb 
        title="SECURE ONLINE PAYMENT"
        subtitle="Complete your project invoices, service milestones, or IT course fees securely via UPI, QR Code, IMPS, or Cards."
        badge="🔒 256-BIT ENCRYPTED GATEWAY"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "More" },
          { label: "Pay Online" }
        ]}
        highlights={["Instant Digital Receipt", "Zero Extra Surcharges", "All UPI Apps Supported", "Official Business Account"]}
      />

      {/* Security Banner */}
      <section className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center text-orange-400">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Bank-Grade Security Standards</h3>
                <p className="text-slate-400 text-sm">All transactions are encrypted with 256-bit AES SSL and routed through PCI-DSS compliant gateways.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center text-green-400">
                <Lock className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Strict Data Privacy</h3>
                <p className="text-slate-400 text-sm">We never store your card details or banking passwords on our servers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Component */}
      <div className="bg-white py-16" id="pay">
        <PremiumPayment />
      </div>

      {/* Payment Categories */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What are you paying for?</h2>
            <p className="text-slate-600 text-lg">Select the appropriate reference in the payment form based on your transaction type.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Client Project Invoices", desc: "For enterprise software, web development, and digital marketing services. Please mention your Invoice ID in the description." },
              { title: "Internship & Course Fees", desc: "For IT training, bootcamp enrollment, or certification fees. Mention your Student ID or Registered Phone Number." },
              { title: "Server & Maintenance", desc: "For ongoing hosting, domain renewals, or SLA maintenance contracts. Mention your domain name." }
            ].map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-b from-white to-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm"
              >
                <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{cat.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Methods & Invoicing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Supported Payment Methods</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-orange-500 shrink-0">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">UPI & QR Code (Recommended)</h4>
                    <p className="text-slate-600">Google Pay, PhonePe, Paytm, Amazon Pay, and BHIM UPI with zero extra transaction fees.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-orange-500 shrink-0">
                    <Landmark className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">NEFT / RTGS / IMPS</h4>
                    <p className="text-slate-600">Direct wire transfers to our official WebCodian corporate current account.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-orange-500 shrink-0">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Debit & Credit Cards</h4>
                    <p className="text-slate-600">Visa, Mastercard, and RuPay cards are processed securely. (Note: standard gateway charges may apply).</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 bg-slate-900 text-white rounded-[40px] p-10 md:p-14 shadow-2xl relative overflow-hidden">
              <FileText className="absolute top-0 right-0 w-64 h-64 text-slate-800 -translate-y-10 translate-x-10" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6">Invoice Generation Process</h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Every successful transaction is immediately recorded in our billing ledger. Upon realization of the payment in our bank account:
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-slate-300">
                    <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                    A system-generated receipt is sent to your registered email ID within 24 hours.
                  </li>
                  <li className="flex gap-3 text-slate-300">
                    <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                    For enterprise B2B payments, a formal GST Tax Invoice will be issued by your dedicated account manager.
                  </li>
                  <li className="flex gap-3 text-slate-300">
                    <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                    Your project milestone status or student enrollment status is instantly updated on our internal CRM.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Policy */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center justify-center gap-3">
              <HelpCircle className="text-orange-500" /> Billing FAQ & Refund Policy
            </h2>
          </div>
          <div className="space-y-6">
            {[
              { q: "What is your refund policy?", a: "Refunds for IT services and training programs are processed strictly according to the terms signed in your Service Level Agreement (SLA) or enrollment form. Generally, milestone payments for custom software development are non-refundable once the engineering phase has commenced." },
              { q: "My payment failed but money was deducted. What should I do?", a: "This is a bank routing issue. In 99% of cases, the money automatically reverses to your bank account within 3-5 business days. You can share a screenshot of the transaction with our support team, and we will verify the status from our gateway ledger." },
              { q: "Can I pay in EMIs?", a: "Yes, we offer flexible milestone-based payment schedules for large enterprise projects, and structured installment options for our IT training programs." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-gradient-to-b from-white to-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

