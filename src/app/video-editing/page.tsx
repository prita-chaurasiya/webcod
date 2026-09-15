import { PageBanner } from "@/components/PageBanner";
import { PremiumVideoEditing } from "@/components/PremiumVideoEditing";

export default function Page() {
  return (
    <main>
      <PageBanner 
        title="Video Editing" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "#" },
          { label: "Video Editing", href: "/video-editing" }
        ]} 
      />
      <PremiumVideoEditing />
    </main>
  );
}
