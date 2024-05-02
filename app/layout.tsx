import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bautistahome.com"),
  title: {
    template: "%s | Miguel's Portfolio",
    default: "Miguel's Portfolio",
  },
  // title: "Miguel's Portfolio",
  description: "Miguel's Portfolio - showcasing my projects and skills",
  keywords: ["portfolio", "web development", "React", "tailwindcss", "nextjs", "typescript", "Miguel Bautista", "Miguel", "Bautista", 
  "Miguel Bautista Portfolio", "Miguel Portfolio", "Miguel Bautista Web Development", "Miguel Web Development", "Miguel Bautista NextJS", "Miguel NextJS",],
  category: "Technology",
  authors: [{ name: "Miguel Bautista"}],
  creator: "Miguel Bautista",
  publisher: "Miguel Bautista",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    address: false,
    email: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Miguel's Portfolio",
    description: "Miguel's Portfolio - showcasing my projects and skills",
    url: "/",
    siteName: "Miguel's Portfolio",
    images: [{
      url: "/og.png",
      width: 288,
      height: 288,
      alt: "Miguel's Portfolio",
    }]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
