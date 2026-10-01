import { PageBanner } from "@/components/PageBanner";
import { EnterpriseIndustryLayout } from "@/components/EnterpriseIndustryLayout";

const industryData = {
  title: "Security",
  overview: "Empowering the security sector with cutting-edge digital transformation. We engineer bespoke software ecosystems that streamline operations, enhance customer experiences, and unlock new revenue streams in a highly competitive market. Our domain experts understand the unique regulatory and operational hurdles of your industry, allowing us to build solutions that are not just technically superior, but strategically aligned with your business objectives.",
  technologies: ["AI & Machine Learning", "IoT Integration", "Cloud Computing", "Big Data Analytics", "Blockchain", "RPA Automation"],
  image1: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000&auto=format&fit=crop",
  challenges: [
    { title: "Digital Disruption", desc: "Traditional business models struggling to keep pace with digital-first competitors." },
    { title: "Customer Expectations", desc: "Demand for seamless, omnichannel experiences is at an all-time high." },
    { title: "Operational Inefficiency", desc: "Manual processes leading to high overhead costs and slow turnaround times." },
    { title: "Regulatory Pressures", desc: "Navigating complex global compliance landscapes and data sovereignty." }
  ],
  solutions: [
    { title: "Custom Platform Engineering", desc: "Building tailored digital products that directly address your unique operational needs." },
    { title: "Data-Driven Insights", desc: "Implementing advanced analytics to drive strategic decision-making." },
    { title: "Process Automation", desc: "Deploying AI-driven automation to eliminate manual tasks and reduce errors." },
    { title: "Secure Infrastructure", desc: "Architecting zero-trust networks that safeguard sensitive customer data." }
  ],
  outcomes: [
    { metric: "40%", desc: "Increase in Operational Efficiency" },
    { metric: "3x", desc: "Faster Time-to-Market" },
    { metric: "2.5x", desc: "Growth in Customer Retention" }
  ]
};

export default function Page() {
  return (
    <>
      <PageBanner 
        title="Security" 
        subtitle="Advanced digital solutions tailored for the security industry."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industry" }, { label: "Security" }]} 
      />
      <EnterpriseIndustryLayout data={industryData} />
    </>
  );
}
