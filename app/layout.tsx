import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/src/components/Navbar";
import SplashScreen from "@/src/components/SplashScreen";
import { LanguageProvider } from "@/src/context/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PORTOFOLIO",
  description: "Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white relative antialiased selection:bg-[#13ec7b]/30 selection:text-[#13ec7b]">
        {/* Global Soft Tech Grid Background */}
        <div className="fixed inset-0 bg-grid-soft pointer-events-none z-0 [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />

        <div className="relative z-10 flex flex-col min-h-screen">
          <LanguageProvider>
            <SplashScreen />
            <Navbar />
            {children}
          </LanguageProvider>
        </div>
      </body>
    </html>
  );
}

