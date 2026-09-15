import { PageBanner } from "@/components/PageBanner";
import { PremiumFormLayout } from "@/components/PremiumFormLayout";

export default function Page() {
  return (
    <main>
      <PageBanner 
        title="Internship Registration" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Internship Registration", href: "/internship" }
        ]} 
      />
      <PremiumFormLayout 
        title="Internship Registration"
        subtitle="Kickstart your career with WebCodian. Apply for our rigorous internship program."
        submitText="Submit Application"
        fields={[{"name":"name","label":"Full Name","type":"text","placeholder":"John Doe","required":true},{"name":"email","label":"Email Address","type":"email","placeholder":"john@example.com","required":true},{"name":"college","label":"College/University","type":"text","placeholder":"Enter College Name","required":true},{"name":"course","label":"Course/Degree","type":"text","placeholder":"e.g. B.Tech CS","required":true}]}
      />
    </main>
  );
}
