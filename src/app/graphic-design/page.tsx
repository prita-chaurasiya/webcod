import { PremiumServiceDetail } from "@/components/PremiumServiceDetail";
import { Palette, PenTool, Image as ImageIcon, Layout } from "lucide-react";

export default function GraphicDesignPage() {
  return (
    <main>
      <PremiumServiceDetail 
        title="Graphic Design"
        badgeText="CREATIVE EXCELLENCE"
        description="Stunning visuals that capture your brand's essence. We design compelling graphics that engage your audience and leave a lasting impression."
        heroImage="https://images.unsplash.com/photo-1626785776965-b7529fa28115?auto=format&fit=crop&q=80&w=1000"
        overviewTitle="Bringing Your Brand to Life"
        overviewDescription="In a crowded digital space, aesthetic excellence sets you apart. Our expert designers craft premium logos, marketing materials, and UI designs that communicate your brand values instantly."
        features={[
          {
            title: "Brand Identity",
            description: "Custom logo design, color palettes, and typography that define your brand's unique voice.",
            icon: <Palette className="w-5 h-5" />
          },
          {
            title: "UI/UX Design",
            description: "Beautiful, user-centric interfaces for websites and mobile applications.",
            icon: <Layout className="w-5 h-5" />
          },
          {
            title: "Marketing Collateral",
            description: "High-converting social media posts, banners, brochures, and email templates.",
            icon: <ImageIcon className="w-5 h-5" />
          },
          {
            title: "Illustrations",
            description: "Custom vector illustrations and iconography tailored to your products.",
            icon: <PenTool className="w-5 h-5" />
          }
        ]}
        technologies={[
          { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
          { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
          { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
          { name: "After Effects", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg" },
          { name: "Premiere Pro", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg" }
        ]}
        faqs={[
          { q: "Do you provide source files?", a: "Yes, upon project completion you receive all necessary source files (AI, PSD, Figma) and high-resolution exports." },
          { q: "Can you redesign our existing logo?", a: "Absolutely. We can modernize your current logo while maintaining your established brand recognition." },
          { q: "How many revisions are included?", a: "We typically include 2-3 rounds of revisions to ensure you are completely satisfied with the final design." }
        ]}
      />
    </main>
  );
}
