import { PageBanner } from "@/components/PageBanner";
import { PremiumSupportForm } from "@/components/PremiumSupportForm";

export default function SupportPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <PageBanner 
        title="Customer Support" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Support", href: "/support" }
        ]} 
      />
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left side: Info */}
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-orange-100 text-[#ff5722] font-bold text-sm mb-6">
                24/7 Assistance
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                How can we help you today?
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Whether you have a question about our courses, need technical support for a project, or just want to get in touch, our dedicated support team is ready to assist you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Phone Support</h4>
                    <p className="text-slate-500 text-sm">Call us directly for immediate assistance during business hours.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Support</h4>
                    <p className="text-slate-500 text-sm">Send us a detailed message and we'll reply within 24 hours.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Form */}
            <div>
              <PremiumSupportForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
