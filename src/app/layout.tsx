// src/app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://novitech.ae"),
  title: {
    default: "NoviTech | Custom Software & Web Development",
    template: "%s | NoviTech",
  },
  description:
    "NoviTech is a UAE-based, Emirati-led technology company building websites, mobile applications, custom software, management systems, and AI-powered solutions.",
  keywords: [
    "NoviTech",
    "technology company UAE",
    "software company UAE",
    "web development UAE",
    "mobile app development UAE",
    "custom software UAE",
    "management systems UAE",
    "AI solutions UAE",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "NoviTech",
    description: "A UAE-based, Emirati-led technology company building digital products and custom technology solutions.",
    url: "https://novitech.ae",
    siteName: "NoviTech",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-beige text-charcoal">
        {children}
      </body>
    </html>
  );
}