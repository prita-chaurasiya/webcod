import { PremiumServiceDetail } from "@/components/PremiumServiceDetail";
import { Video, Film, PlayCircle, MonitorPlay } from "lucide-react";

export default function VideoEditingPage() {
  return (
    <main>
      <PremiumServiceDetail 
        title="Video Editing"
        badgeText="CINEMATIC QUALITY"
        description="Engage your audience with professional video content. We transform raw footage into compelling stories that drive conversions."
        heroImage="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1000"
        overviewTitle="Storytelling Through Motion"
        overviewDescription="Video is the most powerful medium on the internet today. Our expert editing team creates high-impact videos for YouTube, social media, corporate presentations, and advertising campaigns."
        features={[
          {
            title: "Commercials & Ads",
            description: "High-energy, conversion-focused video ads for Facebook, Instagram, and YouTube.",
            icon: <PlayCircle className="w-5 h-5" />
          },
          {
            title: "Corporate Videos",
            description: "Professional brand stories, interviews, and product demonstrations.",
            icon: <Film className="w-5 h-5" />
          },
          {
            title: "Social Media Reels",
            description: "Trendy, fast-paced short-form content optimized for TikTok and Instagram Reels.",
            icon: <Video className="w-5 h-5" />
          },
          {
            title: "VFX & Motion Graphics",
            description: "Custom animations, lower thirds, and visual effects to elevate your production.",
            icon: <MonitorPlay className="w-5 h-5" />
          }
        ]}
        technologies={[
          { name: "Premiere Pro", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg" },
          { name: "After Effects", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg" },
          { name: "DaVinci Resolve", icon: "https://cdn.simpleicons.org/davinciresolve/CA1221" },
          { name: "Final Cut Pro", icon: "https://cdn.simpleicons.org/finalcutpro/323330" }
        ]}
        faqs={[
          { q: "Can you edit raw footage we filmed on our phones?", a: "Yes, we can stabilize, color-correct, and enhance smartphone footage to make it look highly professional." },
          { q: "Do you provide background music?", a: "Yes, we include licensed, royalty-free music and sound effects as part of our editing service." },
          { q: "How long does a video edit take?", a: "Turnaround times depend on the project's complexity, but standard social media videos are typically delivered within 48-72 hours." }
        ]}
      />
    </main>
  );
}
