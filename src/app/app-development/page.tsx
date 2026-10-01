import { PremiumSolutionDetail } from "@/components/PremiumSolutionDetail";
import { Smartphone, MonitorPlay, Code2, Layers, ShieldCheck, Zap } from "lucide-react";

export default function AppDevelopmentPage() {
  return (
    <main>
      <PremiumSolutionDetail 
        title="Mobile App Development"
        heroHeading={
          <>Enterprise Mobile Engineering by <span className="text-[var(--primary)]">WebCodian</span></>
        }
        subtitle="Transforming Ideas into Native & Hybrid Apps"
        heroDescription={
          <>
            <p>Our app development team builds intuitive, fast, and scalable mobile apps designed to grow your business and engage your audience on any device.</p>
            <p>WebCodian stands as a premier Mobile App Development partner that bridges the gap between vision and reality. Whether you need an iOS, Android, or Cross-Platform application, we architect mobile experiences that capture market share.</p>
            <p>From custom UI/UX design to backend integration, API development, and secure deployment on App Stores, we handle the complete lifecycle of mobile application development for enterprise and startup clients.</p>
          </>
        }
        heroImage="/videos/app-dev.mp4"
        whyHeading={
          <>Why Choose <span className="text-blue-600">Us?</span></>
        }
        whyDescription="We deliver high-end mobile engineering with strict quality assurance. Here is why industry leaders trust our app development services:"
        whyImage="https://takshitsolutions.com/img/a2.svg"
        features={[
          {
            title: "Tailored Solutions",
            description: "Custom app architecture designed strictly for your unique business logic and audience.",
            icon: <Layers className="w-5 h-5" />
          },
          {
            title: "Experienced Team",
            description: "Dedicated mobile developers proficient in Flutter, React Native, Swift, and Kotlin.",
            icon: <Code2 className="w-5 h-5" />
          },
          {
            title: "High Performance",
            description: "Lightning-fast mobile applications optimized for minimal battery and memory usage.",
            icon: <Zap className="w-5 h-5" />
          },
          {
            title: "Cross-Platform Delivery",
            description: "Write once, deploy everywhere frameworks that reduce time-to-market and costs.",
            icon: <Smartphone className="w-5 h-5" />
          },
          {
            title: "Bank-Grade Security",
            description: "Secure data encryption and compliance with GDPR, HIPAA, and industry standards.",
            icon: <ShieldCheck className="w-5 h-5" />
          },
          {
            title: "Continuous Support",
            description: "Post-launch maintenance, bug fixes, and seamless OS update integration.",
            icon: <MonitorPlay className="w-5 h-5" />
          }
        ]}
      />
    </main>
  );
}
