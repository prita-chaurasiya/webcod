import { AboutBreadcrumb } from "@/components/AboutBreadcrumb";
import { PremiumPayment } from "@/components/PremiumPayment";

export default function PayOnlinePage() {
  return (
    <main>
      <AboutBreadcrumb 
        title="SECURE ONLINE PAYMENT"
        subtitle="Complete your project invoices, service milestones, or IT course fees securely via UPI, QR Code, IMPS, or Cards."
        badge="🔒 256-BIT ENCRYPTED GATEWAY"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "More" },
          { label: "Pay Online" }
        ]}
        highlights={["Instant Digital Receipt", "Zero Extra Surcharges", "All UPI Apps Supported", "Official Business Account"]}
      />
      <PremiumPayment />
    </main>
  );
}
