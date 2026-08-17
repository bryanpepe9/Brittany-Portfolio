import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { profile } from "@/lib/data/profile";
import { education } from "@/lib/data/education";
import {
  POSITIONING_KEYWORDS,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site";

const displaySerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Brittany Pepe",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Brittany Pepe",
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  keywords: [...POSITIONING_KEYWORDS],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: profile.name,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

/**
 * Person schema. `knowsAbout` is where the target-role vocabulary lives —
 * discoverable by search without turning the page itself into a keyword list.
 */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: SITE_URL,
  jobTitle: profile.shortRole,
  email: `mailto:${profile.email}`,
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Miami",
    addressRegion: "FL",
    addressCountry: "US",
  },
  worksFor: {
    "@type": "Organization",
    name: profile.currentCompany,
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: education.institution,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Miami",
      addressRegion: "FL",
      addressCountry: "US",
    },
  },
  knowsLanguage: ["English", "Portuguese", "Spanish"],
  knowsAbout: POSITIONING_KEYWORDS,
  sameAs: [profile.linkedin],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${displaySerif.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="grain min-h-full">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-60 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-ivory"
        >
          Skip to content
        </a>

        <Header />

        <main id="main" className="relative z-2">
          {children}
        </main>

        <Footer />

        <MotionProvider />

        <script
          type="application/ld+json"
          // Static, developer-authored object — no user input reaches this.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
