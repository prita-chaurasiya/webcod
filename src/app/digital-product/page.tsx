import { PremiumServiceDetail } from "@/components/PremiumServiceDetail";
import { Lightbulb, Rocket, Users, TrendingUp } from "lucide-react";

export default function DigitalProductPage() {
  return (
    <main>
      <PremiumServiceDetail 
        title="Digital Product"
        badgeText="END-TO-END"
        description="End-to-end digital product creation, from initial ideation to launch and beyond. We build scalable, user-centric software that solves real problems."
        heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
        overviewTitle="Build Products That Matter"
        overviewDescription="Creating a successful digital product requires more than just code. It requires strategy, design thinking, and rapid iteration. We partner with you to turn your vision into a market-ready reality."
        features={[
          {
            title: "Product Strategy",
            description: "In-depth market research, user persona creation, and roadmap planning to ensure product-market fit.",
            icon: <Lightbulb className="w-5 h-5" />
          },
          {
            title: "MVP Development",
            description: "Rapid development of Minimum Viable Products to test your core assumptions with real users quickly.",
            icon: <Rocket className="w-5 h-5" />
          },
          {
            title: "User Testing",
            description: "Continuous gathering of user feedback and data to iteratively improve the product experience.",
            icon: <Users className="w-5 h-5" />
          },
          {
            title: "Scaling & Maintenance",
            description: "Robust architecture and ongoing support to ensure your product scales seamlessly as your user base grows.",
            icon: <TrendingUp className="w-5 h-5" />
          }
        ]}
        technologies={[
          { name: "Figma", icon: "🎨" },
          { name: "Node.js", icon: "🟩" },
          { name: "React", icon: "⚛️" },
          { name: "AWS", icon: "☁️" },
          { name: "Docker", icon: "🐳" },
          { name: "MongoDB", icon: "🍃" }
        ]}
        faqs={[
          { q: "What is an MVP?", a: "A Minimum Viable Product (MVP) is the first version of your product with just enough features to satisfy early customers and provide feedback for future development." },
          { q: "Will I own the source code?", a: "Yes, once the project is completed and fully paid, the complete source code and intellectual property rights are transferred to you." },
          { q: "Do you offer post-launch support?", a: "Absolutely. We offer various maintenance packages to handle updates, scaling, and feature additions after the initial launch." }
        ]}
      />
    </main>
  );
}
