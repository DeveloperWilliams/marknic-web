// app/layout.tsx (or app/layout.js if not using TypeScript)
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marknic Credit | Logbook, Personal & Group Loans in Kenya",
  description:
    "Marknic Credit offers flexible loan solutions including logbook loans, personal loans, and group loans. Secure a loan against your vehicle logbook, get quick personal financing, or access group lending options tailored to your needs.",
  keywords: [
    "Marknic Credit",
    "logbook loans",
    "personal loans",
    "group loans",
    "loans Kenya",
    "logbook financing",
    "quick loans",
    "secured loans",
  ],
  metadataBase: new URL("https://www.markniccredit.co.ke"), // Update to your domain
  openGraph: {
    title: "Marknic Credit | Logbook, Personal & Group Loans in Kenya",
    description:
      "Marknic Credit provides secure and fast loans in Kenya. Get financing through logbook, personal, or group loans tailored to your needs.",
    url: "https://www.markniccredit.co.ke",
    siteName: "Marknic Credit",
    images: [
      {
        url: "https://www.markniccredit.co.ke/og-image.jpg", // Add your OG image
        width: 1200,
        height: 630,
        alt: "Marknic Credit - Loan Solutions",
      },
    ],
    type: "website",
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marknic Credit | Trusted Logbook & Personal Loans",
    description:
      "Get quick, secure, and flexible loan solutions from Marknic Credit. Serving Kenya with logbook, personal, and group loan options.",
    images: ["https://www.markniccredit.co.ke/og-image.jpg"], // Use your OG image
    site: "@markniccredit", // Add your Twitter handle if available
  },
  themeColor: "#004AAD", // Customize to your brand color
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${josefinSans.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
