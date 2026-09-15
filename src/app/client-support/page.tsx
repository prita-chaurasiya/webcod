import { PageBanner } from "@/components/PageBanner";
import { PremiumOpenTicket } from "@/components/PremiumOpenTicket";

export default function ClientSupportPage() {
  return (
    <main>
      <PageBanner 
        title="Client Support" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Client Support", href: "/client-support" }
        ]} 
      />
      <PremiumOpenTicket />
    </main>
  );
}
