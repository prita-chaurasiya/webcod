"use client";

import Link from "next/link";
import { 
  Brain, Bot, Settings, Eye, Cloud, MessagesSquare, LineChart,
  Landmark, Bitcoin, Network, ShoppingCart, HeartPulse, GraduationCap,
  Building2, Gamepad2, CloudCog
} from "lucide-react";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  activeService: string;
}

const aiServices = [
  { id: "generative-ai", name: "Generative AI Solutions", icon: Brain, href: "/generative-ai" },
  { id: "ai-agent-development", name: "AI Agents Development", icon: Settings, href: "/ai-agent-development" },
  { id: "chatbot-voice-ai", name: "Chatbot & Voice AI", icon: Bot, href: "/chatbot-voice-ai" },
  { id: "business-automation", name: "Business Automation", icon: Network, href: "/business-automation" },
  { id: "predictive-analytics", name: "Predictive Analytics", icon: LineChart, href: "/predictive-analytics" },
  { id: "computer-vision", name: "Computer Vision", icon: Eye, href: "/computer-vision" },
  { id: "ai-saas-product", name: "AI & SAAS Products", icon: Cloud, href: "/ai-saas-product" },
];

const industries = [
  { name: "FinTech", icon: Landmark },
  { name: "Blockchain & Crypto", icon: Bitcoin },
  { name: "Direct Selling (MLM)", icon: Network },
  { name: "eCommerce", icon: ShoppingCart },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Education (EdTech)", icon: GraduationCap },
  { name: "Real Estate", icon: Building2 },
  { name: "Gaming & NFT Platforms", icon: Gamepad2 },
  { name: "SaaS (Software as a Service)", icon: CloudCog },
];

export function PremiumDigiatureServiceLayout({ children, activeService }: LayoutProps) {
  return (
    <div className="bg-[#f8f9fc] py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Main Content (Left Side) */}
          <div className="w-full lg:w-2/3 xl:w-[70%]">
            {children}
          </div>

          {/* Sidebar (Right Side) matching the screenshot exactly */}
          <div className="w-full lg:w-1/3 xl:w-[30%] sticky top-28 bg-[#f4f7fc] rounded-3xl p-6 lg:p-8 shadow-sm border border-white">
            
            {/* AI & Automation Section */}
            <div className="mb-10">
              <h3 className="text-xl font-black text-slate-900 mb-6 tracking-tight">Ai & Automation</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
                {aiServices.map((service, idx) => {
                  const isActive = activeService === service.id;
                  return (
                    <Link 
                      key={service.id} 
                      href={service.href}
                      className={`flex items-center gap-3 px-5 py-3.5 rounded-full text-[13px] font-bold transition-all duration-300 border ${
                        isActive 
                          ? "bg-blue-600 text-white border-blue-600 shadow-md scale-105" 
                          : "bg-white text-slate-700 border-white hover:border-blue-200 hover:shadow-md hover:scale-105"
                      }`}
                    >
                      <service.icon className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-blue-600"}`} />
                      <span className="leading-tight">{service.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Industries Section */}
            <div className="mb-10">
              <h3 className="text-xl font-black text-slate-900 mb-6 tracking-tight">Industries</h3>
              <div className="flex flex-wrap gap-2.5">
                {industries.map((ind, idx) => (
                  <div 
                    key={idx}
                    className="inline-flex items-center gap-2 bg-white px-4 py-2.5 rounded-full text-xs font-bold text-slate-700 shadow-sm border border-white hover:border-blue-200 hover:shadow-md hover:text-blue-600 hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    <ind.icon className="w-3.5 h-3.5 text-blue-600" />
                    {ind.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Support CTA Banner */}
            <div className="relative mt-12 bg-[#0B0F19] rounded-3xl p-8 text-white shadow-xl overflow-visible border border-slate-800">
              {/* Blur accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-[40px] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-[40px] pointer-events-none"></div>
              
              <h4 className="text-xl md:text-2xl font-bold leading-[1.2] relative z-10 max-w-[90%] tracking-tight">
                To get premium support by industries expert.
              </h4>
              
              {/* Floating WhatsApp Button */}
              <Link 
                href="https://wa.me/1234567890" 
                target="_blank"
                className="absolute -right-4 -bottom-4 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 z-20 border-4 border-[#f4f7fc]"
              >
                <MessagesSquare className="w-6 h-6 text-white fill-white" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
