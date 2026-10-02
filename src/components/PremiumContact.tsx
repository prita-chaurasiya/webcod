"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Briefcase, UserPlus, ArrowRight } from "lucide-react";
import { useState } from "react";

export function PremiumContact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="w-full bg-white font-['Manrope']">
      
      {/* 1. By the Numbers */}
      <section className="py-16 md:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12">
            <span className="text-[var(--primary)]">WebCodian</span> by the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { num: "24/7", text: "Dedicated Support", icon: <Clock className="w-8 h-8 text-[var(--primary)]" /> },
              { num: "15+", text: "Years of Experience", icon: <Briefcase className="w-8 h-8 text-[var(--primary)]" /> },
              { num: "500+", text: "Projects Delivered", icon: <Send className="w-8 h-8 text-[var(--primary)]" /> },
              { num: "20+", text: "Countries Served", icon: <MapPin className="w-8 h-8 text-[var(--primary)]" /> },
              { num: "200+", text: "Clients Served", icon: <UserPlus className="w-8 h-8 text-[var(--primary)]" /> },
              { num: "50+", text: "Expert Team", icon: <Phone className="w-8 h-8 text-[var(--primary)]" /> }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-6 bg-gradient-to-b from-white to-slate-50 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-transform border border-slate-50 group">
                <div className="w-16 h-16 mb-4 rounded-full bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h4 className="text-2xl font-bold text-[var(--primary)] mb-1">{stat.num}</h4>
                <p className="text-sm font-semibold text-slate-600">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Ready to Get Started Form + WhatsApp */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Form */}
            <div className="lg:w-2/3 bg-[#F8F9FA] rounded-[24px] p-8 md:p-12 shadow-sm border border-slate-100">
              <h2 className="text-3xl font-bold text-[#1e293b] mb-8">Ready To Get Started?</h2>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Message Sent Successfully!</h3>
                  <p className="text-slate-600 mt-2">Our team will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Select Product <span className="text-red-500">*</span></label>
                    <select className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white text-slate-700 focus:outline-none focus:border-[var(--primary)]" required>
                      <option value="">Please Select Product</option>
                      <option value="software">Custom Software</option>
                      <option value="web">Web Development</option>
                      <option value="app">Mobile App</option>
                      <option value="ai">AI / ML</option>
                    </select>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Name <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Type Name Here" className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white text-slate-700 focus:outline-none focus:border-[var(--primary)]" required />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone number <span className="text-red-500">*</span></label>
                    <div className="flex">
                      <div className="px-4 py-4 bg-gradient-to-b from-white to-slate-50 border border-slate-200 border-r-0 rounded-l-xl flex items-center gap-2 text-slate-700 font-semibold">
                        🇮🇳 +91
                      </div>
                      <input type="tel" placeholder="Mobile number" className="w-full px-5 py-4 rounded-r-xl border border-slate-200 bg-white text-slate-700 focus:outline-none focus:border-[var(--primary)]" required />
                    </div>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email <span className="text-red-500">*</span></label>
                    <input type="email" placeholder="Type Email Here" className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white text-slate-700 focus:outline-none focus:border-[var(--primary)]" required />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">How can I help you? <span className="text-red-500">*</span></label>
                    <textarea rows={5} placeholder="Tell us about your project requirements, timeline, or questions..." className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white text-slate-700 focus:outline-none focus:border-[var(--primary)]" required></textarea>
                  </div>
                  <div className="col-span-2">
                    <button type="submit" className="bg-[var(--primary)] hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-xl transition-colors">
                      Submit
                    </button>
                    <p className="text-xs text-slate-500 mt-4">
                      <strong>Note:</strong> This form is only for client enquiries and business-related queries. Please do not use this form for job applications.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* WhatsApp QR */}
            <div className="lg:w-1/3 flex flex-col items-center justify-center bg-gradient-to-b from-white to-slate-50 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-[24px] p-10 text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative w-32 h-32 rounded-full bg-[#25D366]/10 flex items-center justify-center mb-6">
                <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
                <Phone className="w-16 h-16 text-[#25D366]" />
              </div>
              
              <h4 className="text-2xl font-bold text-slate-800 mb-2">
                Chat on <span className="text-[#25D366]">WhatsApp</span>
              </h4>
              <p className="text-slate-500 mb-8 font-medium">Get instant answers to your queries.</p>
              
              <a 
                href="https://wa.me/919794412733" 
                target="_blank"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fa952] text-white font-bold py-4 px-8 rounded-full shadow-[0_10px_20px_rgba(37,211,102,0.3)] hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                Start Chat Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Direct Department Contacts */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Direct <span className="text-[var(--primary)]">Department</span> Contacts
            </h2>
            <p className="text-slate-600">Reach out directly to our specialized teams for new business enquiries or career opportunities.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Sales */}
            <div className="bg-gradient-to-b from-white to-slate-50 rounded-2xl p-8 border-t-4 border-[#0284c7] shadow-sm flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 text-[#0284c7] rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Sales & Business</h3>
              </div>
              <p className="text-slate-600 text-sm mb-6 flex-grow">For project estimations, custom software development, and new business enquiries.</p>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <div>
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">Primary</span>
                    <a href="tel:+919794412733" className="font-bold text-slate-800 hover:text-[#0284c7]">+91 9794412733</a>
                  </div>
                  <div className="flex gap-2">
                    <a href="tel:+919794412733" className="w-10 h-10 bg-gradient-to-b from-white to-slate-50 border border-slate-200 rounded-lg flex items-center justify-center text-[#0284c7] hover:bg-blue-50 transition-colors"><Phone className="w-4 h-4" /></a>
                    <a href="https://wa.me/919794412733" target="_blank" className="w-10 h-10 bg-[#25D366] rounded-lg flex items-center justify-center text-white hover:bg-green-600 transition-colors">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Careers */}
            <div className="bg-gradient-to-b from-white to-slate-50 rounded-2xl p-8 border-t-4 border-[#10b981] shadow-sm flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-50 text-[#10b981] rounded-xl flex items-center justify-center">
                  <UserPlus className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Careers & Recruitment</h3>
              </div>
              <p className="text-slate-600 text-sm mb-6 flex-grow">Looking to join our engineering team? Submit your CV or explore open job roles.</p>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <div>
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-1">HR & Hiring Email</span>
                    <a href="mailto:info@webcodian.com" className="font-bold text-slate-800 hover:text-[#10b981]">info@webcodian.com</a>
                  </div>
                  <div className="flex gap-2">
                    <a href="mailto:info@webcodian.com" className="w-10 h-10 bg-gradient-to-b from-white to-slate-50 border border-slate-200 rounded-lg flex items-center justify-center text-[#10b981] hover:bg-green-50 transition-colors"><Mail className="w-4 h-4" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Map & Locations */}
      <section className="py-16 bg-[#ebf1fe]">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">
            <span className="text-[var(--primary)]">Contact</span> Information
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg bg-white">
              <iframe
                title="Google Maps Location"
                src="https://maps.google.com/maps?cid=2200519266001042772&hl=en&gl=IN&source=embed&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
            {/* Location Cards */}
            <div className="space-y-8">
              <div className="bg-gradient-to-b from-white to-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full justify-between">
                <div>
                  <h4 className="text-xl font-bold text-slate-800 flex items-center gap-2 mb-6">
                    🇮🇳 <span>India</span>
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <Phone className="w-5 h-5 text-[var(--primary)] shrink-0 mt-1" />
                      <a href="tel:+919794412733" className="text-slate-600 font-semibold hover:text-[#0284c7]">+91 9794412733</a>
                    </li>
                    <li className="flex gap-4">
                      <Mail className="w-5 h-5 text-[var(--primary)] shrink-0 mt-1" />
                      <a href="mailto:info@webcodian.com" className="text-slate-600 font-semibold hover:text-[#0284c7]">info@webcodian.com</a>
                    </li>
                    <li className="flex gap-4">
                      <MapPin className="w-5 h-5 text-[var(--primary)] shrink-0 mt-1" />
                      <div>
                        <strong className="block text-slate-800 mb-1">Corporate Office</strong>
                        <span className="text-slate-600 text-sm">N-1/66-F-1, Samne Ghat, Nagwa Lanka, Varanasi, UP 221005</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}


