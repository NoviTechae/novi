// src/app/glowee/page.jsx

import GloweeLinks from "@/components/GloweeLinks";

export const metadata = {
  title: "Glowee | Beauty Booking",
  description:
    "Glowee: book salon and home-service beauty appointments, gift a service, and earn rewards. Salons can register to try Glowee.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function GloweePage() {
  return <GloweeLinks />;
}
