import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Premium3DEffects } from "@/components/Premium3DEffects";
import { SmoothScrolling } from "@/components/SmoothScrolling";

const inter = Inter({
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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans selection:bg-cyan-500 selection:text-white">
        <Premium3DEffects />
        <TopBar />
        <Navbar />
        <SmoothScrolling>
          <main className="flex-grow">
            {children}
          </main>
        </SmoothScrolling>
        <Footer />
      </body>
    </html>
  );
}
