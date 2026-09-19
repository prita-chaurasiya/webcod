import { PageBanner } from "@/components/PageBanner";
import { PremiumCourseEnquiry } from "@/components/PremiumCourseEnquiry";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Course Enquiry | WebCodian",
  description: "Enquire about our premium IT courses and training programs.",
};

export default function CourseEnquiryPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1c]">
      <PageBanner
        title="Course Enquiry"
        subtitle="Take the first step towards a premium tech career. Fill out the form below and our admission counselors will guide you."
        badge="✦ ADMISSIONS OPEN"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/services" },
          { label: "Course Enquiry" },
        ]}
      />
      <PremiumCourseEnquiry />
    </main>
  );
}
