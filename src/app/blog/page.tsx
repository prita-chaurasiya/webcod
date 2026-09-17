import { AboutBreadcrumb } from "@/components/AboutBreadcrumb";
import { PremiumBlog } from "@/components/PremiumBlog";
import { PremiumNewsletter } from "@/components/PremiumNewsletter";

export default function BlogPage() {
  return (
    <main>
      <AboutBreadcrumb title="OUR BLOG" />
      <PremiumBlog />
      <PremiumNewsletter />
    </main>
  );
}
