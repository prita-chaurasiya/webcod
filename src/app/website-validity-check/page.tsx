import { PageBanner } from "@/components/PageBanner";
import { PremiumFormLayout } from "@/components/PremiumFormLayout";

export default function Page() {
  return (
    <main>
      <PageBanner 
        title="Website Validity Check" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Website Validity Check", href: "/website-validity-check" }
        ]} 
      />
      <PremiumFormLayout 
        title="Website Validity Check"
        subtitle="Check the maintenance and hosting validity of your WebCodian project."
        submitText="Check Status"
        fields={[{"name":"domain","label":"Domain Name","type":"text","placeholder":"www.example.com","required":true}]}
      />
    </main>
  );
}
