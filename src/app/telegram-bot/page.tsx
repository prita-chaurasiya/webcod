import { PremiumServiceDetail } from "@/components/PremiumServiceDetail";
import { CheckCircle2, Star, Zap, Shield } from "lucide-react";

export default function Page() {
  return (
    <main>
      <PremiumServiceDetail 
        title="Telegram Bot"
        badgeText="PREMIUM SERVICE"
        description="Exceptional quality and unparalleled performance tailored to your specific needs."
        heroImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
        overviewTitle="Elevate Your Business with Telegram Bot"
        overviewDescription="Our telegram bot services are designed to give you a competitive edge. We blend innovative strategies with proven methodologies to deliver results that matter."
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
