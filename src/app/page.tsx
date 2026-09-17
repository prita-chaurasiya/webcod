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
import { PremiumVision } from "@/components/PremiumVision";
import { HomeAutoPopup } from "@/components/HomeAutoPopup";
import { PremiumHomeAbout } from "@/components/PremiumHomeAbout";
import { PremiumIndustry } from "@/components/PremiumIndustry";

export default function Home() {
  return (
    <>
      <HomeAutoPopup />
      <EduHero />
      <PremiumHomeAbout />
      <PremiumServices />
      <PremiumInstitute />
      <PremiumProcess />
      <PremiumIndustry />
      <PremiumTechStack />
      <PremiumCategories />
      <PremiumWhyChooseUs />
      <PremiumStats />
      <PremiumTestimonials />
      <PremiumBlog />
      <PremiumVision />
      <PremiumProjectCTA />
    </>
  );
}
