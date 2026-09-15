import { PremiumServiceDetail } from "@/components/PremiumServiceDetail";
import { Mic, PhoneCall, Headphones, Activity } from "lucide-react";

export default function BulkVoiceCallPage() {
  return (
    <main>
      <PremiumServiceDetail 
        title="Bulk Voice Call"
        badgeText="PERSONALIZED REACH"
        description="Automated voice broadcasts to deliver your message personally and effectively. Reach thousands of customers simultaneously with a pre-recorded voice message."
        heroImage="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=1000"
        overviewTitle="Give Your Brand a Voice"
        overviewDescription="Voice calls add a human touch to your communications. Whether for political campaigns, event reminders, or promotional offers, our bulk voice call service ensures your audience hears you loud and clear."
        features={[
          {
            title: "Pre-recorded Calls",
            description: "Easily upload and broadcast your high-quality pre-recorded audio messages to your contact list.",
            icon: <Mic className="w-5 h-5" />
          },
          {
            title: "IVR Integration",
            description: "Add interactive key-press options (e.g., 'Press 1 to speak with an agent') to generate immediate leads.",
            icon: <PhoneCall className="w-5 h-5" />
          },
          {
            title: "High Delivery Rate",
            description: "Our robust telecom infrastructure guarantees high connection rates and crystal-clear voice quality.",
            icon: <Headphones className="w-5 h-5" />
          },
          {
            title: "Real-time Analytics",
            description: "Track answered calls, missed calls, and key-press responses in real-time through our dashboard.",
            icon: <Activity className="w-5 h-5" />
          }
        ]}
        faqs={[
          { q: "What audio formats are supported?", a: "We support standard audio formats like MP3 and WAV for your pre-recorded messages." },
          { q: "Can I schedule the voice calls?", a: "Yes, you can schedule your voice campaigns for a specific date and time to maximize pick-up rates." },
          { q: "Do you offer text-to-speech?", a: "Yes, our platform includes a text-to-speech (TTS) engine that can convert your typed messages into natural-sounding voice calls." }
        ]}
      />
    </main>
  );
}
