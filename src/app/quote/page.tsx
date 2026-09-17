import { AboutBreadcrumb } from "@/components/AboutBreadcrumb";
import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";
import { PremiumFormLayout } from "@/components/PremiumFormLayout";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50">
      <AboutBreadcrumb title="REQUEST A QUOTE" />
      
      <PremiumFormLayout 
        title="Get Your Free Quote"
        subtitle="Share your project details with us, and our technical experts will get back to you with a comprehensive proposal, strategy, and estimated timeline within 24 hours."
        fields={[
          { name: "name", label: "Full Name", type: "text", placeholder: "Enter your full name", required: true },
          { name: "email", label: "Email Address", type: "email", placeholder: "Enter your email address", required: true },
          { name: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number", required: true },
          { name: "company", label: "Company Name", type: "text", placeholder: "Enter your company name (Optional)", required: false },
          { name: "service", label: "Service Required", type: "text", placeholder: "e.g. Web Development, AI Solution, CRM...", required: true },
          { name: "message", label: "Project Details & Query", type: "textarea", placeholder: "Tell us about your requirements, goals, and any specific questions you have...", required: true },
        ]}
        submitText="Submit Query"
      />
      
      <PremiumProjectCTA />
    </main>
  );
}
