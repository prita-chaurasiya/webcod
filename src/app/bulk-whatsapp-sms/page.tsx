import { PremiumServiceDetail } from "@/components/PremiumServiceDetail";
import { MessageCircle, Image as ImageIcon, CheckCircle, Clock } from "lucide-react";

export default function BulkWhatsAppPage() {
  return (
    <main>
      <PremiumServiceDetail 
        title="Bulk WhatsApp Marketing"
        badgeText="100% ENGAGEMENT"
        description="Engage your audience on the world's most popular messaging app. Send rich media, interactive buttons, and personalized messages to drive higher conversions."
        heroImage="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000"
        overviewTitle="Next-Generation Conversational Marketing"
        overviewDescription="WhatsApp boasts a 98% open rate, making it the ultimate tool for customer engagement. Our bulk WhatsApp services allow you to connect, converse, and convert like never before."
        features={[
          {
            title: "Rich Media Support",
            description: "Send images, videos, PDFs, and interactive buttons along with your text to create engaging campaigns.",
            icon: <ImageIcon className="w-5 h-5" />
          },
          {
            title: "Automated Replies",
            description: "Set up auto-responders and conversational chatbots to handle customer queries 24/7.",
            icon: <MessageCircle className="w-5 h-5" />
          },
          {
            title: "Verified Green Badge",
            description: "We help you acquire the official WhatsApp Green Tick to establish trust and credibility with your customers.",
            icon: <CheckCircle className="w-5 h-5" />
          },
          {
            title: "Campaign Scheduling",
            description: "Schedule your campaigns in advance and send them at the optimal time for maximum engagement.",
            icon: <Clock className="w-5 h-5" />
          }
        ]}
        faqs={[
          { q: "Is it legal to send Bulk WhatsApp messages?", a: "Yes, provided you use the official WhatsApp Business API and send messages to users who have opted in to receive communications from you." },
          { q: "Can I send messages to unsaved contacts?", a: "With the official WhatsApp API, you can send approved template messages to users even if they haven't saved your number." },
          { q: "Do you provide the API integration?", a: "Yes, we provide seamless integration with your existing CRM, website, or custom software." }
        ]}
      />
    </main>
  );
}
