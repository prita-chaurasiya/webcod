import { PremiumServiceDetail } from "@/components/PremiumServiceDetail";
import { MessageSquare, Zap, BarChart3, Puzzle } from "lucide-react";

export default function BulkSMSPage() {
  return (
    <main>
      <PremiumServiceDetail 
        title="Bulk SMS Services"
        badgeText="INSTANT REACH"
        description="Reach thousands of customers instantly with our reliable and lightning-fast bulk SMS gateway. Communicate effectively with a 98% open rate."
        heroImage="https://images.unsplash.com/photo-1577563908411-50cb98976fea?auto=format&fit=crop&q=80&w=1000"
        overviewTitle="Direct, Fast, and Reliable"
        overviewDescription="SMS remains one of the most effective communication channels globally. Whether you need to send OTPs, alerts, or marketing campaigns, our enterprise-grade SMS gateway ensures your message is delivered securely and on time."
        features={[
          {
            title: "Promotional SMS",
            description: "Send offers, discounts, and marketing campaigns to your target audience instantly to boost sales.",
            icon: <MessageSquare className="w-5 h-5" />
          },
          {
            title: "Transactional SMS",
            description: "Automated alerts, OTPs, and notifications sent 24/7 without any DND restrictions.",
            icon: <Zap className="w-5 h-5" />
          },
          {
            title: "Real-time Reports",
            description: "Track the status of every SMS sent with our detailed, real-time delivery tracking and analytics.",
            icon: <BarChart3 className="w-5 h-5" />
          },
          {
            title: "Seamless API Integration",
            description: "Easily integrate our robust SMS APIs into your existing website, application, or CRM.",
            icon: <Puzzle className="w-5 h-5" />
          }
        ]}
        faqs={[
          { q: "What is the difference between Promotional and Transactional SMS?", a: "Promotional SMS is used for marketing and cannot be sent to DND (Do Not Disturb) numbers. Transactional SMS is used for alerts/OTPs and bypasses DND restrictions." },
          { q: "How fast are the messages delivered?", a: "Our premium gateways offer an average delivery time of less than 5 seconds for transactional routes." },
          { q: "Do you provide API documentation?", a: "Yes, we provide comprehensive API documentation with code snippets in various languages for quick and easy integration." }
        ]}
      />
    </main>
  );
}
