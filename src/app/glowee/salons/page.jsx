// src/app/glowee/salons/page.jsx

import GloweeSalons from "@/components/GloweeSalons";

export const metadata = {
  title: "Register your salon | Glowee",
  description:
    "Salons and home-service providers: register your interest in trying Glowee.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function GloweeSalonsPage() {
  return <GloweeSalons />;
}
