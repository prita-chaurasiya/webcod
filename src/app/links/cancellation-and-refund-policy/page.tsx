import { PageBanner } from "@/components/PageBanner";
import { PremiumDocumentLayout } from "@/components/PremiumDocumentLayout";

export default function Page() {
  return (
    <main>
      <PageBanner 
        title="Cancellation & Refund Policy" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Cancellation & Refund Policy", href: "/links/cancellation-and-refund-policy" }
        ]} 
      />
      <PremiumDocumentLayout 
        title="Cancellation & Refund Policy"
        lastUpdated="October 1, 2024"
        content={`WebCodian LLP strives to ensure complete client satisfaction. Our cancellation and refund policy is as follows:

Cancellation: Projects can be cancelled by providing written notice. If a project is cancelled after work has commenced, the client will be billed for the work completed up to that point.

Refunds: Due to the custom nature of our digital services, refunds are generally not provided once work has started. However, if you are unsatisfied with the deliverables, we will work with you to make necessary revisions according to the project scope.

Hosting & Domains: Domain registrations and hosting fees are non-refundable.`}
      />
    </main>
  );
}
