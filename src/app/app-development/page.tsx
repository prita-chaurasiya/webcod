import { PremiumServiceDetail } from "@/components/PremiumServiceDetail";
import { Smartphone, Code, Layers, PenTool } from "lucide-react";

export default function AppDevelopmentPage() {
  return (
    <main>
      <PremiumServiceDetail 
        title="Mobile App Development"
        badgeText="IOS & ANDROID"
        description="Engaging, high-performance mobile applications for iOS and Android that your users will love. We turn your ideas into seamless digital experiences."
        heroImage="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000"
        overviewTitle="Transforming Ideas into Native & Hybrid Apps"
        overviewDescription="Our app development team builds intuitive, fast, and scalable mobile apps designed to grow your business and engage your audience on any device."
        features={[
          {
            title: "iOS Development",
            description: "Custom iPhone and iPad applications using Swift, designed for the ultimate Apple ecosystem experience.",
            icon: <Smartphone className="w-5 h-5" />
          },
          {
            title: "Android Development",
            description: "Robust and scalable Android apps using Kotlin, built to run seamlessly across thousands of device types.",
            icon: <Code className="w-5 h-5" />
          },
          {
            title: "Cross-Platform Apps",
            description: "Cost-effective React Native and Flutter apps that deliver near-native performance on both platforms.",
            icon: <Layers className="w-5 h-5" />
          },
          {
            title: "UI/UX Design",
            description: "Stunning, user-centric interfaces that keep your users engaged and drive higher retention rates.",
            icon: <PenTool className="w-5 h-5" />
          }
        ]}
        technologies={[
          { name: "React Native", icon: "⚛️" },
          { name: "Flutter", icon: "🦋" },
          { name: "Swift", icon: "🍏" },
          { name: "Kotlin", icon: "🤖" },
          { name: "Firebase", icon: "🔥" },
          { name: "GraphQL", icon: "🔗" }
        ]}
        faqs={[
          { q: "Do you develop for both iOS and Android?", a: "Yes, we offer both native and cross-platform app development to ensure your app reaches the widest possible audience on all devices." },
          { q: "How long does it take to build an app?", a: "A standard mobile app takes 3 to 6 months depending on the complexity, features, and platform requirements." },
          { q: "Will you help upload the app to the App Store and Google Play?", a: "Absolutely. We handle the entire deployment process, ensuring your app meets all guidelines and is successfully published." }
        ]}
      />
    </main>
  );
}
