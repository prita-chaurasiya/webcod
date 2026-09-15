import { PageBanner } from "@/components/PageBanner";
import { PremiumFormLayout } from "@/components/PremiumFormLayout";

export default function Page() {
  return (
    <main>
      <PageBanner 
        title="Employee Verification" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Employee Verification", href: "/employee-verification" }
        ]} 
      />
      <PremiumFormLayout 
        title="Employee Verification"
        subtitle="Verify the credentials of a WebCodian employee using their ID."
        submitText="Verify Now"
        fields={[{"name":"empId","label":"Employee ID","type":"text","placeholder":"WC-XXXX","required":true},{"name":"email","label":"Your Requesting Email","type":"email","placeholder":"hr@yourcompany.com","required":true}]}
      />
    </main>
  );
}
