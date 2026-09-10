import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { PageTransition } from "@/components/PageTransition";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["italic", "normal"],
  variable: "--font-cormorant",
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
  title: "Joan Apio — Strategic Communicator & Founder of KAVIBE®",
  description: "Official NFC digital identity & editorial profile for Joan Apio, a Ugandan Development Communications & Marketing Specialist, Creative Storyteller, and founder of KAVIBE®.",
  keywords: [
    "Joan Apio",
    "KAVIBE",
    "Development Communication",
    "Strategic Communicator",
    "Uganda Marketing Specialist",
    "Creative Storytelling",
    "RUFORUM",
    "University of Juba Rebranding",
    "African Higher Education Communication"
  ],
  authors: [{ name: "Joan Apio" }],
  openGraph: {
    title: "Joan Apio — Strategic Communicator & Founder of KAVIBE®",
    description: "Development Communications · Marketing · Branding · Storytelling",
    url: siteUrl,
    siteName: "Joan Apio Personal Portfolio",
    images: [
      {
        url: `${siteUrl}/images/joan/9.jpeg`,
        width: 1200,
        height: 630,
        alt: "Joan Apio — Strategic Communicator",
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
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="font-sans bg-warm-bg text-ink-dark antialiased selection:bg-kavibe-primary selection:text-warm-bg">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
