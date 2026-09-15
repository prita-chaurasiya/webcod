import { PageBanner } from "@/components/PageBanner";
import { PremiumFormLayout } from "@/components/PremiumFormLayout";

export default function Page() {
  return (
    <main>
      <PageBanner 
        title="Partner Registration" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Partner Registration", href: "/partner-registration-form" }
        ]} 
      />
      <PremiumFormLayout 
        title="Partner Registration"
        subtitle="Join hands with WebCodian and grow your business as an official partner."
        submitText="Register as Partner"
        fields={[{"name":"company","label":"Company Name","type":"text","placeholder":"ABC Corp","required":true},{"name":"email","label":"Business Email","type":"email","placeholder":"contact@abccorp.com","required":true},{"name":"phone","label":"Phone Number","type":"tel","placeholder":"+91 XXXXX XXXXX","required":true}]}
      />
    </main>
  );
}
