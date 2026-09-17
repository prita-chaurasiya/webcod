import { AboutBreadcrumb } from "@/components/AboutBreadcrumb";
import { PremiumTestimonials } from "@/components/PremiumTestimonials";
import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <AboutBreadcrumb 
        title="CLIENT TESTIMONIALS"
        subtitle="Hear directly from founders, enterprise directors, and students who have transformed their operations and careers with WebCodian."
        badge="✦ TRUSTED BY HUNDREDS"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Testimonials" }
        ]}
        highlights={["4.8★ Rating on Google", "100+ Enterprise Reviews", "Verified Feedback", "Long-term Partnerships"]}
      />
      
      <div className="py-12 bg-[#f8fafc]">
        <PremiumTestimonials />
      </div>

      <PremiumProjectCTA />
    </main>
  );
}
