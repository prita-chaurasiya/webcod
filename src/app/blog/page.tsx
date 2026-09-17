import { AboutBreadcrumb } from "@/components/AboutBreadcrumb";
import { PremiumBlog } from "@/components/PremiumBlog";
import { PremiumNewsletter } from "@/components/PremiumNewsletter";

export default function BlogPage() {
  return (
    <main>
      <AboutBreadcrumb 
        title="LATEST INSIGHTS & BLOG"
        subtitle="Discover in-depth engineering breakdowns, modern tech tutorials, software trends, and career roadmaps."
        badge="✦ ARTICLES & INDUSTRY TRENDS"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "More" },
          { label: "Blog" }
        ]}
        highlights={["Modern Architecture", "AI Developments", "Software Engineering", "Career Guides"]}
      />
      <PremiumBlog />
      <PremiumNewsletter />
    </main>
  );
}
