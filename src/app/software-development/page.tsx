import { PageBanner } from "@/components/PageBanner";
import { PremiumSoftwareDev } from "@/components/PremiumSoftwareDev";

export default function Page() {
  return (
    <main>
      <PageBanner 
        title="Software Development" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Software Development", href: "/software-development" }
        ]} 
      />
      <PremiumSoftwareDev />
    </main>
  );
}
