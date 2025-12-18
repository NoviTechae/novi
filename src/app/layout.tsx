// src/app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "NoviTech | Custom Software & Web Development",
    template: "%s | NoviTech",
  },
  description:
    "NoviTech is an Emirati-led tech brand building custom websites, software systems, and AI-powered solutions.",
  keywords: [
    "NoviTech",
    "web development UAE",
    "software company UAE",
    "custom software",
    "AI solutions",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "NoviTech",
    description: "Building precise digital solutions for real-world needs.",
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