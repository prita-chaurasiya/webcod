import { PremiumMobileAppDev } from "@/components/PremiumMobileAppDev";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development Services | WebCodian",
  description: "Top-rated mobile app development company. We design and develop custom iOS and Android applications for enterprises worldwide.",
};

export default function Page() {
  return (
    <>
      <PremiumMobileAppDev />
    </>
  );
}
