import { PremiumServiceDetail } from "@/components/PremiumServiceDetail";
import { Megaphone, Target, Mail, BarChart } from "lucide-react";

export default function DigitalMarketingPage() {
  return (
    <main>
      <PremiumServiceDetail 
        title="Digital Marketing"
        badgeText="ROI DRIVEN"
        description="Data-driven marketing campaigns designed to drive traffic, capture leads, and scale your sales to new heights. We connect your brand with the right audience."
        heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
        overviewTitle="Maximize Your Digital Footprint"
        overviewDescription="In today's digital landscape, visibility is everything. Our strategic digital marketing services combine creativity and data analytics to deliver measurable business growth."
        features={[
          {
            title: "PPC Campaigns",
            description: "Highly targeted Pay-Per-Click advertising on Google and social media that delivers immediate traffic and high conversions.",
            icon: <Target className="w-5 h-5" />
          },
          {
            title: "Content Marketing",
            description: "Engaging, value-driven content that builds authority, educates your audience, and drives organic growth.",
            icon: <Megaphone className="w-5 h-5" />
          },
          {
            title: "Email Marketing",
            description: "Automated, personalized email sequences that nurture leads and turn prospects into loyal customers.",
            icon: <Mail className="w-5 h-5" />
          },
          {
            title: "Analytics & Reporting",
            description: "Deep data insights and transparent reporting so you always know the exact ROI of your marketing spend.",
            icon: <BarChart className="w-5 h-5" />
          }
        ]}
        technologies={[
          { name: "Google Ads", icon: "📊" },
          { name: "Meta Ads", icon: "🌐" },
          { name: "HubSpot", icon: "🧡" },
          { name: "Mailchimp", icon: "📧" },
          { name: "Google Analytics", icon: "📈" },
          { name: "Semrush", icon: "🔍" }
        ]}
        faqs={[
          { q: "How quickly will I see results from digital marketing?", a: "PPC campaigns can generate traffic immediately, while organic strategies like SEO and Content Marketing typically show significant results within 3 to 6 months." },
          { q: "Do you provide monthly reports?", a: "Yes, we provide detailed, easy-to-understand monthly reports outlining traffic, leads, conversions, and ROI." },
          { q: "Can you manage marketing for B2B companies?", a: "Absolutely. We tailor our strategies based on your industry, whether B2B or B2C, using platforms like LinkedIn for B2B lead generation." }
        ]}
      />
    </main>
  );
}
