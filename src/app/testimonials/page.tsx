import { PageBanner } from "@/components/PageBanner";
import { PremiumTestimonials } from "@/components/PremiumTestimonials";
import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageBanner 
        title="Client Testimonials" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Client Testimonials" }
        ]} 
        bgImage="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2000&auto=format&fit=crop"
      />
      
      <div className="py-12 bg-[#f8fafc]">
        {/* We reuse the premium testimonials grid here */}
        <PremiumTestimonials />
      </div>

      <PremiumProjectCTA />
    </main>
  );
}
