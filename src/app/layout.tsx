import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { areasServed, site } from "@/lib/data";

// TODO: confirm the live domain before launch and update this base URL.
const siteUrl = "https://www.apexeduabroad.com";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: site.name,
  description: site.differentiator,
  url: siteUrl,
  email: site.email,
  telephone: `+${site.phoneRaw}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Visakhapatnam",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  openingHours: "Mo-Sa 10:00-19:00",
  areaServed: areasServed,
};

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Apex EduAbroad | Overseas Education Consultants in Visakhapatnam",
    template: "%s",
  },
  description:
    "Apex EduAbroad is a trusted overseas education consultancy in Visakhapatnam guiding students through counseling, applications, test prep, visas, and post-arrival support across the USA, UK, Canada, Australia, and more.",
  keywords: [
    "Abroad Education Consultancy",
    "Overseas Education Consultancy",
    "Study Abroad Consultancy",
    "Overseas Education Consultants",
    "Best Study Abroad Consultants",
    "Overseas Career Consultants",
    "International Education Consultants",
    "Study Visa Consultants",
    "Student Visa Assistance",
    "Foreign Education Consultancy",
    "Abroad Education Consultancy in Visakhapatnam",
    "Overseas Education Consultants in Hyderabad",
    "Study Abroad Consultants Near Me",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-slate-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
