import { PageBanner } from "@/components/PageBanner";
import { PremiumWebDev } from "@/components/PremiumWebDev";

export default function Page() {
  return (
    <main>
      <PageBanner 
        title="Web Development" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Web Development", href: "/web-development" }
        ]} 
      />
      <PremiumWebDev />
    </main>
  );
}
