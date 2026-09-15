import { PageBanner } from "@/components/PageBanner";
import { PremiumFormLayout } from "@/components/PremiumFormLayout";

export default function Page() {
  return (
    <main>
      <PageBanner 
        title="Client Registration" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Client Registration", href: "/client-registration-form" }
        ]} 
      />
      <PremiumFormLayout 
        title="Client Registration"
        subtitle="Create your client account to track projects and access support."
        submitText="Register Account"
        fields={[{"name":"name","label":"Full Name","type":"text","placeholder":"John Doe","required":true},{"name":"email","label":"Email Address","type":"email","placeholder":"john@example.com","required":true},{"name":"password","label":"Password","type":"password","placeholder":"••••••••","required":true}]}
      />
    </main>
  );
}
