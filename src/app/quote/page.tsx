import { PageBanner } from "@/components/PageBanner";
import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageBanner 
        title="Request a Quote"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Request a Quote" }
        ]}
      />
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-4xl font-black text-slate-900 mb-6">Request a Quote</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          We are currently crafting an incredible digital experience for this page. 
          Please contact our team via the form below for immediate assistance regarding Request a Quote.
        </p>
      </div>
      <PremiumProjectCTA />
    </main>
  );
}
