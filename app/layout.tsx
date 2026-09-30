import type { Metadata } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { PageTransition } from "@/components/PageTransition";
import { getPersonSchema, getWebSiteSchema } from "@/lib/schema";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["italic", "normal"],
  variable: "--font-montserrat",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://joan-apio-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Joan Apio — Strategic Communicator, Storyteller & Founder of KAVIBE®",
    template: "%s | Joan Apio",
  },
  description: "Official portfolio and executive profile for Joan Apio (Joan E. Apio), Founder of KAVIBE® and Development Communications & Strategic Marketing Specialist in Uganda.",
  keywords: [
    "Joan Apio",
    "Joan E. Apio",
    "Joan E Apio",
    "Apio Joan",
    "Joan Apio Portfolio",
    "Joan Apio Uganda",
    "Joan Apio KAVIBE",
    "KAVIBE Founder Joan Apio",
    "Development Communication Uganda",
    "Strategic Communicator Joan Apio",
    "Uganda Marketing Specialist Joan Apio",
    "RUFORUM Communication Joan Apio",
    "Joan Apio Biography"
  ],
  authors: [{ name: "Joan E. Apio", url: siteUrl }],
  creator: "Joan E. Apio",
  publisher: "KAVIBE®",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Joan Apio — Strategic Communicator & Founder of KAVIBE®",
    description: "Official portfolio of Joan Apio (Joan E. Apio), Strategic Communicator, Brand Director, and Founder of KAVIBE® in Uganda.",
    url: siteUrl,
    siteName: "Joan Apio Personal Portfolio",
    images: [
      {
        url: `${siteUrl}/images/joan/hero.png`,
        width: 1200,
        height: 630,
        alt: "Joan Apio — Strategic Communicator & Founder of KAVIBE®",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joan Apio — Strategic Communicator & Founder of KAVIBE®",
    description: "Official portfolio and executive profile for Joan Apio.",
    images: [`${siteUrl}/images/joan/hero.png`],
  },
  verification: {
    google: "google76a92ac6bf39f132",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = getPersonSchema();
  const websiteSchema = getWebSiteSchema();

  return (
    <html lang="en" className={`${montserrat.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans bg-warm-bg text-ink-dark antialiased selection:bg-kavibe-primary selection:text-warm-bg">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}

