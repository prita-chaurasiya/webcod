import { AboutBreadcrumb } from "@/components/AboutBreadcrumb";
import { PremiumOpenTicket } from "@/components/PremiumOpenTicket";

export default function SupportPage() {
  return (
    <main>
      <AboutBreadcrumb 
        title="CLIENT SUPPORT DESK"
        subtitle="Encountered an issue, need server maintenance, or want quick technical help? Raise a ticket or reach our live support channels."
        badge="⚡ 24/7 DEDICATED ASSISTANCE"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "More" },
          { label: "Support" }
        ]}
        highlights={["Average Response: <15 mins", "Dedicated Ticket Tracking", "Senior Dev Escalation", "100% SLA Guarantee"]}
      />
      <PremiumOpenTicket />
    </main>
  );
}
