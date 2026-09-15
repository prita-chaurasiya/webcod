import { PremiumAboutHero } from "@/components/PremiumAboutHero";
import { PremiumAboutValues } from "@/components/PremiumAboutValues";
import { PremiumWhyChooseUs } from "@/components/PremiumWhyChooseUs";
import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";

export default function AboutPage() {
  return (
    <main>
      <PremiumAboutHero />
      <PremiumAboutValues />
      <PremiumWhyChooseUs />
      <PremiumProjectCTA />
    </main>
  );
}
