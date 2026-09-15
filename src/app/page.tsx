import { EduHero } from "@/components/EduHero";
import { PremiumServices } from "@/components/PremiumServices";
import { PremiumInstitute } from "@/components/PremiumInstitute";
import { PremiumProcess } from "@/components/PremiumProcess";
import { PremiumCategories } from "@/components/PremiumCategories";
import { PremiumTechStack } from "@/components/PremiumTechStack";
import { PremiumStats } from "@/components/PremiumStats";
import { PremiumWhyChooseUs } from "@/components/PremiumWhyChooseUs";
import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";
import { PremiumTestimonials } from "@/components/PremiumTestimonials";
import { PremiumBlog } from "@/components/PremiumBlog";

export default function Home() {
  return (
    <>
      <EduHero />
      <PremiumServices />
      <PremiumInstitute />
      <PremiumProcess />
      <PremiumTechStack />
      <PremiumCategories />
      <PremiumWhyChooseUs />
      <PremiumStats />
      <PremiumTestimonials />
      <PremiumBlog />
      <PremiumProjectCTA />
    </>
  );
}
