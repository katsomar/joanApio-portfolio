import type { Metadata } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { PageTransition } from "@/components/PageTransition";

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
  title: "Joan Apio — Founder of KAVIBE® | Strategic Communicator & Storyteller",
  description: "Official portfolio and executive profile for Joan Apio (Joan E. Apio), Founder of KAVIBE® and Development Communications & Strategic Marketing Specialist in Uganda.",
  keywords: [
    "Joan Apio",
    "Joan E. Apio",
    "Joan Apio KAVIBE",
    "KAVIBE",
    "KAVIBE Founder",
    "KAVIBE Joan Apio",
    "Joan Apio Portfolio",
    "Development Communication Uganda",
    "Strategic Communicator",
    "Uganda Marketing Specialist",
    "Creative Storytelling Africa",
    "RUFORUM Communication",
    "University of Juba Rebranding"
  ],
  authors: [{ name: "Joan E. Apio" }],
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
    title: "Joan E. Apio — Strategic Communicator & Founder of KAVIBE®",
    description: "Development Communications · Marketing · Branding · Storytelling",
    url: siteUrl,
    siteName: "Joan E. Apio Personal Portfolio",
    images: [
      {
        url: `${siteUrl}/images/joan/9.jpg`,
        width: 1200,
        height: 630,
        alt: "Joan E. Apio — Strategic Communicator",
      },
    ],
    locale: "en_US",
    type: "website",
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
  return (
    <html lang="en" className={`${montserrat.variable} ${jakarta.variable}`}>
      <body className="font-sans bg-warm-bg text-ink-dark antialiased selection:bg-kavibe-primary selection:text-warm-bg">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
