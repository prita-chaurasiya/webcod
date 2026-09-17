import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Premium3DEffects } from "@/components/Premium3DEffects";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WebCodian • Computer Institute & IT Training",
  description: "WebCodian provides premium technology solutions and IT training. From websites and software to digital marketing and computer courses.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-800 font-sans selection:bg-[#2eb872] selection:text-white">
        <Premium3DEffects />
        <TopBar />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
