import { TestimonialHero } from "@/components/TestimonialHero";
import { PremiumTestimonials } from "@/components/PremiumTestimonials";
import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <TestimonialHero />
      
      <div className="py-12 bg-[#f8fafc]">
        <PremiumTestimonials />
      </div>

      <PremiumProjectCTA />
    </main>
  );
}
