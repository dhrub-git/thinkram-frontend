import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Think RAM",
  description: "Realise. Accelerate. Modernise.",
  generator: "v0.dev",
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
