import { PageBanner } from "@/components/PageBanner";
import { PremiumClientRegistration } from "@/components/PremiumClientRegistration";

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
      <PremiumClientRegistration />
    </main>
  );
}
