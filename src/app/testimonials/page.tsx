import { AboutBreadcrumb } from "@/components/AboutBreadcrumb";
import { PremiumTestimonials } from "@/components/PremiumTestimonials";
import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50">
      <AboutBreadcrumb title="CLIENT TESTIMONIALS" />
      
      <div className="py-12 bg-[#f8fafc]">
        {/* We reuse the premium testimonials grid here */}
        <PremiumTestimonials />
      </div>

      <PremiumProjectCTA />
    </main>
  );
}
