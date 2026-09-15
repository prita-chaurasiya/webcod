import { PageBanner } from "@/components/PageBanner";
import { PremiumContact } from "@/components/PremiumContact";

export default function ContactPage() {
  return (
    <main>
      <PageBanner 
        title="Contact Us" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" }
        ]} 
      />
      <PremiumContact />
    </main>
  );
}
