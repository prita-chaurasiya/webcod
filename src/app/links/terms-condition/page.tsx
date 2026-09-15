import { PageBanner } from "@/components/PageBanner";
import { PremiumDocumentLayout } from "@/components/PremiumDocumentLayout";

export default function Page() {
  return (
    <main>
      <PageBanner 
        title="Terms & Conditions" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms & Conditions", href: "/links/terms-condition" }
        ]} 
      />
      <PremiumDocumentLayout 
        title="Terms & Conditions"
        lastUpdated="October 1, 2024"
        content={`Welcome to WebCodian LLP. By accessing or using our website and services, you agree to be bound by these Terms and Conditions.

Service Agreement: All projects and services are subject to a formal agreement outlining scope, timeline, and deliverables. Any modifications to the scope must be agreed upon in writing.

Payment Terms: Invoices are payable within the timeframe specified on the invoice. WebCodian reserves the right to suspend services for overdue accounts.

Intellectual Property: Upon full payment, the client owns the rights to the final deliverables. WebCodian retains the right to use the work in our portfolio.`}
      />
    </main>
  );
}
