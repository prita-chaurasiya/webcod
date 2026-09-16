import { PremiumIndustryDetailPage, IndustryPageData } from "@/components/PremiumIndustryDetailPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Media Digital Solutions | WebCodian",
  description: "High-performance publishing platforms and scalable Content Management Systems built for modern digital journalism.",
};

const newsData: IndustryPageData = {
  id: "news",
  title: "News & Media",
  eyebrow: "WebCodian • Industry Solutions",
  heroDescription: "High-performance publishing platforms and scalable Content Management Systems built for modern digital journalism.",
  heroImage: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  introHeading: "Technology built around the 24/7 news cycle.",
  introDescription: "In the digital publishing world, speed and reliability are everything. When breaking news happens, your platform needs to handle massive traffic spikes without going offline. We build ultra-fast, SEO-optimized publishing platforms and custom CMS tools that empower editors to write, publish, and distribute content seamlessly.",
  challenges: [
    {
      id: "01",
      title: "Traffic Spikes",
      description: "Standard web hosting crashes under the weight of sudden viral traffic, leading to lost readership and ad revenue."
    },
    {
      id: "02",
      title: "Editorial Bottlenecks",
      description: "Clunky, outdated CMS interfaces slow down journalists and complicate the editorial review process."
    },
    {
      id: "03",
      title: "Content Monetization",
      description: "Integrating paywalls, subscriptions, and dynamic ad-bidding networks is highly complex on legacy systems."
    },
    {
      id: "04",
      title: "Mobile Experience",
      description: "Slow mobile load times drastically reduce reader engagement and hurt Google search rankings."
    }
  ],
  solutions: [
    {
      icon: "LayoutGrid",
      title: "Custom CMS Platforms",
      description: "Tailor-made Content Management Systems designed specifically for complex editorial workflows."
    },
    {
      icon: "Globe",
      title: "High-Traffic Architectures",
      description: "Serverless and CDN-backed infrastructures guaranteed to stay online during massive traffic spikes."
    },
    {
      icon: "PenTool",
      title: "Monetization Systems",
      description: "Seamless integration of paywalls, premium subscriptions, and programmatic advertising."
    },
    {
      icon: "Rss",
      title: "Content Distribution",
      description: "Automated syndication tools to push articles to social media, newsletters, and news aggregators."
    }
  ],
  featuredVisual: {
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    overlayText: "From breaking news to global distribution."
  },
  whatWeCanBuild: [
    "High-Performance News Portals",
    "Custom Editorial CMS",
    "Paywall & Subscription Platforms",
    "Digital Magazine Web Apps",
    "Native News Mobile Applications",
    "Newsletter Automation Systems"
  ],
  useCases: [
    {
      title: "Editorial Workflow",
      items: ["Drafting & review pipelines", "Multimedia asset management", "SEO optimization tools", "Automated tagging"]
    },
    {
      title: "Reader Experience",
      items: ["Personalized news feeds", "Offline reading mode", "Push notifications", "Seamless subscription checkout"]
    }
  ],
  technologies: ["Next.js", "WordPress VIP", "Node.js", "AWS CloudFront", "Redis", "React Native", "Elasticsearch"]
};

export default function NewsIndustryPage() {
  return <PremiumIndustryDetailPage data={newsData} />;
}
