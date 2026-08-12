import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/src/components/Navbar";
import SplashScreen from "@/src/components/SplashScreen";
import FloatingWhatsApp from "@/src/components/FloatingWhatsApp";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dedejuniarputra.me"),
  title: {
    default: "Dede Juniar Putra | Portofolio",
    template: "%s | Dede Juniar Putra",
  },
  description:
    "Portofolio resmi Dede Juniar Putra - Junior Software Engineer & AI Enthusiast. Menampilkan proyek mobile & web development, keahlian teknis, sertifikasi, dan pengalaman karier.",
  keywords: [
    "Dede Juniar Putra",
    "Portofolio Dede Juniar Putra",
    "Software Engineer",
    "Web Developer",
    "Mobile Developer",
    "Flutter Developer",
    "React Developer",
    "Next.js Developer",
    "Fullstack Developer",
    "Bandar Lampung Developer",
  ],
  authors: [{ name: "Dede Juniar Putra", url: "https://dedejuniarputra.me" }],
  creator: "Dede Juniar Putra",
  publisher: "Dede Juniar Putra",
  alternates: {
    canonical: "https://dedejuniarputra.me",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/D.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Dede Juniar Putra | Portofolio",
    description:
      "Portofolio resmi Dede Juniar Putra - Junior Software Engineer & AI Enthusiast.",
    url: "https://dedejuniarputra.me",
    siteName: "Dede Juniar Putra | Portofolio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/D.png",
        width: 512,
        height: 512,
        alt: "Dede Juniar Putra Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dede Juniar Putra | Portofolio",
    description:
      "Portofolio resmi Dede Juniar Putra - Junior Software Engineer & AI Enthusiast.",
    images: ["/D.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google11544006d8068141",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dede Juniar Putra",
  alternateName: ["Dede Juniar", "WHUSZ"],
  jobTitle: "Junior Software Engineer & AI Enthusiast",
  url: "https://dedejuniarputra.me",
  sameAs: [
    "https://github.com/dedejuniarputra",
    "https://www.linkedin.com/in/dedejuniarputraaa/",
    "https://www.instagram.com/dezxz__?igsh=MWY0Y294YW1pZmF3Yg%3D%3D",
    "https://www.youtube.com/@dedejuniarputraunila6525",
    "https://tiktok.com/@dedejuniarputra",
  ],
  knowsAbout: [
    "Software Engineering",
    "Web Development",
    "Mobile Development",
    "Flutter",
    "React.js",
    "Next.js",
    "Laravel",
    "TypeScript",
    "Tailwind CSS",
    "Artificial Intelligence",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bandar Lampung",
    addressRegion: "Lampung",
    addressCountry: "ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white relative antialiased selection:bg-[#13ec7b]/30 selection:text-[#13ec7b]">
        {/* Global Tech Grid Background */}
        <div className="fixed inset-0 bg-grid-soft pointer-events-none z-0 opacity-90 [mask-image:radial-gradient(ellipse_at_center,black_85%,transparent_100%)]" />

        <div className="relative z-10 flex flex-col min-h-screen">
          <LanguageProvider>
            <SplashScreen />
            <Navbar />
            {children}
            <FloatingWhatsApp />
          </LanguageProvider>
        </div>
      </body>
    </html>
  );
}

