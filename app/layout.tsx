import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://thinkram.com"),
  title: {
    default: "Think RAM | Digital Transformation & Delivery",
    template: "%s | Think RAM",
  },
  description: "Think RAM helps Australian organisations turn digital transformation strategy into measurable outcomes through expert delivery, program assurance and AI governance.",
  openGraph: {
    type: "website",
    siteName: "Think RAM",
    title: "Think RAM | Digital Transformation & Delivery",
    description: "Human-led, AI-powered digital transformation and delivery for Australian organisations.",
    images: ["/thinkram-logo-white.png"],
  },
  twitter: {
    card: "summary",
    title: "Think RAM | Digital Transformation & Delivery",
    description: "Human-led, AI-powered digital transformation and delivery for Australian organisations.",
    images: ["/thinkram-logo-white.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon-xs.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
