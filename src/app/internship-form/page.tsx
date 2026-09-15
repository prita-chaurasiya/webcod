import { PageBanner } from "@/components/PageBanner";
import { PremiumInternshipForm } from "@/components/PremiumInternshipForm";

export default function Page() {
  return (
    <main>
      <PageBanner 
        title="Internship Application" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Internship Application", href: "/internship-form" }
        ]} 
      />
      <PremiumInternshipForm />
    </main>
  );
}
