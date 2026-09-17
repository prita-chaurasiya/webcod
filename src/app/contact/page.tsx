import { AboutBreadcrumb } from "@/components/AboutBreadcrumb";
import { PremiumContact } from "@/components/PremiumContact";

export default function ContactPage() {
  return (
    <main>
      <AboutBreadcrumb 
        title="CONTACT US"
        subtitle="Connect with WebCodian LLP. Let's engineer your next digital product, automate your workflows, or discuss tech training."
        badge="✦ FAST RESPONSE & ASSISTANCE"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" }
        ]}
        highlights={["Varanasi Headquarters", "+91 9794412733", "Fast Project Quotations", "Google Verified"]}
      />
      <PremiumContact />
    </main>
  );
}
