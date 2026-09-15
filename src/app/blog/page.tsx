import { PageBanner } from "@/components/PageBanner";
import { PremiumBlog } from "@/components/PremiumBlog";
import { PremiumNewsletter } from "@/components/PremiumNewsletter";

export default function BlogPage() {
  return (
    <main>
      <PageBanner 
        title="Our Blog" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" }
        ]} 
      />
      <PremiumBlog />
      <PremiumNewsletter />
    </main>
  );
}
