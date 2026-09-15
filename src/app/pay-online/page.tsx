import { PageBanner } from "@/components/PageBanner";
import { PremiumPayment } from "@/components/PremiumPayment";

export default function Page() {
  return (
    <main>
      <PageBanner 
        title="Pay Online securely" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pay Online securely", href: "/pay-online" }
        ]} 
      />
      <PremiumPayment />
    </main>
  );
}
