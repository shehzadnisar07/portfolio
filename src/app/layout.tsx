import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ClientOnlyEffects from "@/components/ClientOnlyEffects";
import { contact } from "@/data/contact";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shehzad Nisar | Java Backend & Microservices Developer",
  description:
    "Portfolio of Shehzad Nisar — Junior Java Backend & Full-Stack Developer specializing in Java 17, Spring Boot microservices, Kafka event streaming, SAGA pattern transactions, and Redis. BSCS student at University of Karachi.",
  keywords: [
    "Shehzad Nisar",
    "Java Backend Developer",
    "Spring Boot Developer",
    "Microservices Architecture",
    "Apache Kafka",
    "Redis",
    "TransMoney",
    "University of Karachi",
    "Full-Stack Developer Pakistan",
  ],
  authors: [{ name: "Shehzad Nisar" }],
  creator: "Shehzad Nisar",
  openGraph: {
    title: "Shehzad Nisar | Java Backend & Microservices Developer",
    description:
      "Engineering resilient event-driven microservices, SAGA transactions, and enterprise architectures with Java 17, Spring Boot, Kafka, and Redis.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shehzad Nisar | Java Backend & Microservices Developer",
    description:
      "Engineering resilient event-driven microservices, SAGA transactions, and enterprise architectures.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: contact.name,
    jobTitle: contact.role,
    email: contact.email,
    telephone: contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressCountry: "PK",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Karachi (UBIT)",
    },
    sameAs: [contact.github, contact.linkedin],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#090b10] text-[#f8fafc] font-sans overflow-x-clip relative selection:bg-emerald-500 selection:text-black">
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-full focus:bg-emerald-500 focus:px-5 focus:py-2.5 focus:text-xs focus:font-mono focus:font-bold focus:text-black focus:shadow-lg"
        >
          Skip to main content
        </a>

        {/* Subtle Atmospheric Noise Overlay */}
        <div className="noise-overlay pointer-events-none" aria-hidden="true" />

        {/* Ambient Radial Glow in the background */}
        <div
          className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.12),rgba(255,255,255,0))]"
          aria-hidden="true"
        />

        <Navbar />
        <main
          id="main-content"
          tabIndex={-1}
          className="flex flex-col items-center w-full min-h-screen focus:outline-none"
        >
          {children}
        </main>
        <ClientOnlyEffects />
      </body>
    </html>
  );
}
