import { PremiumServiceDetail } from "@/components/PremiumServiceDetail";
import { Monitor, Server, Code2, Globe } from "lucide-react";

export default function WebDevelopmentPage() {
  return (
    <main>
      <PremiumServiceDetail 
        title="Web Development"
        badgeText="NEXT-GEN"
        description="We engineer bespoke, high-performance web applications that combine award-winning design with robust, scalable architecture."
        heroImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000"
        heroVideo="/videos/web-dev.mp4"
        overviewTitle="Build The Future Web"
        overviewDescription="From corporate portals to complex e-commerce platforms, our web development services ensure your business stands out in the digital landscape with unmatched performance and security."
        features={[
          {
            title: "Custom Web Apps",
            description: "Scalable, secure, and lightning-fast web applications tailored to your specific business workflows.",
            icon: <Monitor className="w-5 h-5" />
          },
          {
            title: "E-Commerce Solutions",
            description: "High-converting online stores built on Shopify, WooCommerce, or custom tech stacks.",
            icon: <Globe className="w-5 h-5" />
          },
          {
            title: "Backend Architecture",
            description: "Robust server-side engineering and API development ensuring your data is secure and accessible.",
            icon: <Server className="w-5 h-5" />
          },
          {
            title: "Frontend Excellence",
            description: "Pixel-perfect, responsive user interfaces that provide an engaging experience on every device.",
            icon: <Code2 className="w-5 h-5" />
          }
        ]}
        technologies={[
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
          { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
          { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
          { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" }
        ]}
        faqs={[
          { q: "How long does it take to develop a custom website?", a: "A standard corporate site takes 2-4 weeks, while a complex e-commerce or SaaS platform can take 8-12 weeks." },
          { q: "Do you provide SEO and performance optimization?", a: "Yes! Every website we build is fundamentally optimized for search engines (SEO) and lightning-fast loading speeds." },
          { q: "Will my website be mobile-responsive?", a: "Absolutely. We adopt a mobile-first approach ensuring your platform looks and functions flawlessly across all devices." }
        ]}
      />
    </main>
  );
}
