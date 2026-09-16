import { PremiumServiceDetail } from "@/components/PremiumServiceDetail";
import { Search, TrendingUp, BarChart, Target } from "lucide-react";

export default function SeoSmoPage() {
  return (
    <main>
      <PremiumServiceDetail 
        title="SEO & SMO Services"
        badgeText="ORGANIC GROWTH"
        description="Dominate search rankings and social media feeds. We build organic visibility that drives high-quality traffic to your business."
        heroImage="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1000"
        overviewTitle="Maximize Your Digital Footprint"
        overviewDescription="Visibility is everything. Our strategic SEO (Search Engine Optimization) and SMO (Social Media Optimization) services combine content strategy, technical optimizations, and data analytics to deliver measurable business growth."
        features={[
          {
            title: "On-Page SEO",
            description: "Optimizing your website's content, meta tags, and structure to rank higher on Google.",
            icon: <Search className="w-5 h-5" />
          },
          {
            title: "Social Media Optimization",
            description: "Engaging your audience across Meta, LinkedIn, and X with viral content and strategic posting.",
            icon: <TrendingUp className="w-5 h-5" />
          },
          {
            title: "Technical SEO",
            description: "Improving site speed, mobile-friendliness, and crawlability for search engine bots.",
            icon: <Target className="w-5 h-5" />
          },
          {
            title: "Analytics & Reporting",
            description: "Deep data insights and transparent reporting so you always know your exact ROI.",
            icon: <BarChart className="w-5 h-5" />
          }
        ]}
        technologies={[
          { name: "Google Analytics", icon: "https://cdn.simpleicons.org/googleanalytics/E37400" },
          { name: "Google Search Console", icon: "https://cdn.simpleicons.org/googlesearchconsole/4285F4" },
          { name: "Semrush", icon: "https://cdn.simpleicons.org/semrush/FF642D" },
          { name: "Ahrefs", icon: "https://cdn.simpleicons.org/ahrefs/FF9900" },
          { name: "Meta", icon: "https://cdn.simpleicons.org/meta/0468FF" }
        ]}
        faqs={[
          { q: "How quickly will I see results from SEO?", a: "Organic strategies like SEO typically show significant results within 3 to 6 months depending on the competitiveness of your industry." },
          { q: "Do you provide monthly reports?", a: "Yes, we provide detailed, easy-to-understand monthly reports outlining traffic, keyword rankings, and social engagement." },
          { q: "Is SMO really necessary?", a: "Absolutely. Social Media Optimization builds brand trust and creates a direct communication channel with your target audience." }
        ]}
      />
    </main>
  );
}
