const fs = require('fs');
const path = require('path');

const aiRoutes = [
  { id: 'generative-ai', title: 'Generative AI Solutions' },
  { id: 'ai-agent-development', title: 'AI Agent Development' },
  { id: 'chatbot-voice-ai', title: 'Chatbot & Voice AI' },
  { id: 'business-automation', title: 'Business Automation' },
  { id: 'ai-saas-product', title: 'AI & SaaS Product' }
];

const otherServiceRoutes = [
  { id: 'web-development', title: 'Web Development' },
  { id: 'software-development', title: 'Software Development' },
  { id: 'custom-software-development', title: 'Custom Software Development' },
  { id: 'app-development', title: 'App Development' },
  { id: 'e-commerce-portal', title: 'E-commerce Portal' },
  { id: 'digital-marketing', title: 'Digital Marketing' },
  { id: 'seo-smo', title: 'SEO / SMO' },
  { id: 'graphic-design', title: 'Graphic Design' },
  { id: 'video-editing', title: 'Video Editing' },
  { id: 'crm-erp', title: 'CRM & ERP' },
  { id: 'telegram-bot', title: 'Telegram Bot' },
  { id: 'digital-product', title: 'Digital Product' },
  { id: 'maintenance', title: 'Maintenance' },
  { id: 'bulk-sms', title: 'Bulk SMS' },
  { id: 'bulk-whatsapp-sms', title: 'Bulk WhatsApp' },
  { id: 'bulk-voice-call', title: 'Bulk Voice Call' },
  { id: 'ai-automation-solutions', title: 'AI & Automation Solutions' }
];

const industryRoutes = [
  { id: 'industry/healthcare', title: 'Healthcare' },
  { id: 'industry/education', title: 'Education' },
  { id: 'industry/ecommerce', title: 'E-commerce' },
  { id: 'industry/real-estate', title: 'Real Estate' },
  { id: 'industry/travel', title: 'Tour & Travel' },
  { id: 'industry/ngo', title: 'NGO' },
  { id: 'industry/consulting', title: 'Consulting' },
  { id: 'industry/security', title: 'Security' },
  { id: 'industry/manufacturing', title: 'Manufacturing' },
  { id: 'industry/news', title: 'News & Blog' },
  { id: 'industry/restaurant', title: 'Restaurant' }
];

const miscRoutes = [
  { id: 'internship', title: 'Internship' },
  { id: 'pay-online', title: 'Pay Online' },
  { id: 'portfolio', title: 'Projects Portfolio' },
  { id: 'blog', title: 'Blog' },
  { id: 'career', title: 'Career' },
  { id: 'support', title: 'Support' },
  { id: 'quote', title: 'Request a Quote' },
  { id: 'industry', title: 'All Industries' }
];

function createAIPage(route) {
  return `"use client";

import { PageBanner } from "@/components/PageBanner";
import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";
import { PremiumDigiatureServiceLayout } from "@/components/PremiumDigiatureServiceLayout";
import { Bot, Zap, Shield, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner 
        title="${route.title}"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "AI & Automation" },
          { label: "${route.title}" }
        ]}
        bgImage="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop"
      />
      
      <PremiumDigiatureServiceLayout activeService="${route.id}">
        <div className="space-y-12">
          {/* Main Content Area */}
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                Next-Generation <span className="text-blue-600">${route.title}</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
                WebCodian delivers cutting-edge ${route.title.toLowerCase()} that empower businesses to automate workflows, scale operations, and drive unprecedented growth through artificial intelligence.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our expert engineers integrate advanced models and machine learning algorithms directly into your existing infrastructure, providing seamless intelligence exactly where you need it most.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[2rem] border border-white shadow-xl shadow-blue-900/5 group">
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-[2rem]"></div>
                <motion.div 
                  animate={{ y: [-10, 10, -10] }} 
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 w-full aspect-square rounded-[1.5rem] overflow-hidden border-4 border-white shadow-md bg-white flex items-center justify-center"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop" 
                    alt="${route.title} Visualization" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent mix-blend-overlay"></div>
                </motion.div>
                
                {/* Floating decorative elements */}
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center z-20">
                  <Cpu className="w-5 h-5 text-blue-600" />
                </motion.div>
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-600 rounded-2xl shadow-xl flex items-center justify-center z-20 rotate-12">
                  <Bot className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Key Benefits Grid */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-blue-600 pl-4">Key Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Zap, title: "Unmatched Speed", desc: "Process complex datasets in seconds rather than hours." },
                { icon: Shield, title: "Enterprise Security", desc: "Data protection protocols built into the core logic." },
                { icon: Cpu, title: "Scalable Architecture", desc: "Designed to grow effortlessly with your user base." },
                { icon: Bot, title: "Intelligent Automation", desc: "Reduce manual human errors by up to 99%." }
              ].map((benefit, idx) => (
                <motion.div whileHover={{ y: -5, scale: 1.02 }} key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">{benefit.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Consultation Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 bg-slate-900 rounded-[2rem] p-8 md:p-12 relative overflow-hidden shadow-2xl"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2eb872]/10 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="relative z-10 grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-2 text-white">
                <h3 className="text-3xl font-black mb-4 leading-tight">Transform Your Business with AI</h3>
                <p className="text-slate-400 mb-8 font-medium">Ready to see how \${route.title} can drive growth and efficiency? Book a free consultation with our AI experts today.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><Zap className="w-4 h-4 text-[#2eb872]" /></div>
                    <span className="text-sm font-semibold">Custom Strategy Tailored to You</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><Shield className="w-4 h-4 text-[#2eb872]" /></div>
                    <span className="text-sm font-semibold">Secure & Scalable Solutions</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3 bg-white rounded-3xl p-6 md:p-8 shadow-xl">
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Full Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 focus:bg-white transition-all text-sm" placeholder="John Doe" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Work Email</label>
                      <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 focus:bg-white transition-all text-sm" placeholder="john@company.com" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Company Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 focus:bg-white transition-all text-sm" placeholder="Acme Corp" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">How can we help?</label>
                    <textarea rows="3" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 focus:bg-white transition-all text-sm resize-none" placeholder="Tell us about your project..." required></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-blue-600/30">
                    Book Free Consultation
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </PremiumDigiatureServiceLayout>

      <PremiumProjectCTA />
    </main>
  );
}
`;
}

function createPremiumServicePage(route) {
  return `import { PremiumServiceDetail } from "@/components/PremiumServiceDetail";
import { CheckCircle2, Star, Zap, Shield } from "lucide-react";

export default function Page() {
  return (
    <main>
      <PremiumServiceDetail 
        title="${route.title}"
        badgeText="PREMIUM SERVICE"
        description="Exceptional quality and unparalleled performance tailored to your specific needs."
        heroImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
        overviewTitle="Elevate Your Business with ${route.title}"
        overviewDescription="Our ${route.title.toLowerCase()} services are designed to give you a competitive edge. We blend innovative strategies with proven methodologies to deliver results that matter."
        features={[
          { title: "Strategic Approach", description: "Customized strategies aligned with your core business objectives.", icon: <Star className="w-5 h-5" /> },
          { title: "Rapid Execution", description: "Agile methodologies ensuring quick turnaround without compromising quality.", icon: <Zap className="w-5 h-5" /> },
          { title: "Reliability", description: "Built with industry-leading standards for maximum uptime and stability.", icon: <Shield className="w-5 h-5" /> },
          { title: "Expert Support", description: "24/7 dedicated support from our team of seasoned professionals.", icon: <CheckCircle2 className="w-5 h-5" /> }
        ]}
        faqs={[
          { q: "How do I get started?", a: "Simply contact us through our form, and our team will schedule a free consultation." },
          { q: "Do you offer custom packages?", a: "Yes, all our services can be tailored to meet your unique requirements." }
        ]}
      />
    </main>
  );
}
`;
}

function createGenericPage(route) {
  return `import { PageBanner } from "@/components/PageBanner";
import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageBanner 
        title="\${route.title}"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "\${route.title}" }
        ]}
      />
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-4xl font-black text-slate-900 mb-6">\${route.title}</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          We are currently crafting an incredible digital experience for this page. 
          Please contact our team via the form below for immediate assistance regarding \${route.title}.
        </p>
      </div>
      <PremiumProjectCTA />
    </main>
  );
}
`;
}

function createIndustryPage(route) {
  return `import { PageBanner } from "@/components/PageBanner";
import { PremiumIndustry } from "@/components/PremiumIndustry";
import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageBanner 
        title="${route.title} Solutions"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industry" },
          { label: "${route.title}" }
        ]}
      />
      <PremiumIndustry />
      <PremiumProjectCTA />
    </main>
  );
}
`;
}

const allRoutes = [
  ...aiRoutes.map(r => ({ ...r, generator: createAIPage })),
  ...otherServiceRoutes.map(r => ({ ...r, generator: createPremiumServicePage })),
  ...industryRoutes.map(r => ({ ...r, generator: createIndustryPage })),
  ...miscRoutes.map(r => ({ ...r, generator: createGenericPage }))
];

allRoutes.forEach(route => {
  const fullPath = path.join(__dirname, 'src', 'app', route.id);
  const filePath = path.join(fullPath, 'page.tsx');
  
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
  
  const isAIPage = aiRoutes.some(ai => ai.id === route.id);
  const isOtherServicePage = otherServiceRoutes.some(os => os.id === route.id);
  
  const manuallyCrafted = ['web-development', 'software-development', 'app-development', 'digital-marketing', 'seo-smo', 'graphic-design', 'video-editing'];
  
  if ((!fs.existsSync(filePath) || isAIPage || isOtherServicePage) && !manuallyCrafted.includes(route.id)) {
    fs.writeFileSync(filePath, route.generator(route));
    console.log("Created/Overwrote " + route.id);
  } else {
    console.log("Skipped " + route.id + " (already exists or manually crafted)");
  }
});
console.log("Scaffolding complete!");
