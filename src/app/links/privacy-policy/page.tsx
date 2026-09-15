import { PageBanner } from "@/components/PageBanner";
import { PremiumDocumentLayout } from "@/components/PremiumDocumentLayout";

export default function Page() {
  return (
    <main>
      <PageBanner 
        title="Privacy Policy" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy", href: "/links/privacy-policy" }
        ]} 
      />
      <PremiumDocumentLayout 
        title="Privacy Policy"
        lastUpdated="October 1, 2024"
        content={`At WebCodian LLP, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website and services.

Information Collection: We collect information you provide directly to us, such as when you fill out a form, request a quote, or communicate with us. This may include your name, email, phone number, and project details.

Data Usage: The information we collect is used to provide, maintain, and improve our services, process transactions, and communicate with you.

Data Protection: We implement a variety of security measures to maintain the safety of your personal information. Your data is encrypted and stored securely.`}
      />
    </main>
  );
}
