import { PageBanner } from "@/components/PageBanner";
import { PremiumSeoSmo } from "@/components/PremiumSeoSmo";

export default function Page() {
  return (
    <main>
      <PageBanner 
        title="SEO & SMO" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "#" },
          { label: "SEO & SMO", href: "/seo-smo" }
        ]} 
      />
      <PremiumSeoSmo />
    </main>
  );
}
