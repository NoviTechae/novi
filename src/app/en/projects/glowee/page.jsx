import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCaseStudy from "@/components/ProductCaseStudy";

export const metadata = {
  title: "Glowee | Beauty Technology Platform by NoviTech",
  description:
    "Explore Glowee, a UAE beauty platform developed by NoviTech for salon and home-service bookings, gifting, rewards, and business management.",
};

export default function GloweeProjectPage() {
  return (
    <main className="min-h-screen bg-beige px-6 py-10 text-charcoal md:px-10 md:py-14">
      <Navbar />

      <div className="mx-auto max-w-6xl">
        <ProductCaseStudy
          locale="en"
          eyebrow="Selected Product"
          name="Glowee"
          category="Beauty Technology Platform"
          intro="A UAE beauty platform bringing bookings, gifting, loyalty, and business management into one connected digital experience."
          image="/projects/glowee-icon.png"
          status="Live on the App Store"
          primaryAction={{
            label: "Download on the App Store",
            href: "https://apps.apple.com/ae/app/glowee-app/id6761380382",
            external: true,
          }}
          problemTitle="The Problem"
          problem="Beauty bookings are often fragmented across social media, messaging, phone calls, and separate loyalty systems. Customers may need to move between multiple channels to discover businesses, understand services, book appointments, send gifts, and manage rewards."
          solutionTitle="The Solution"
          solution="Glowee brings the core beauty journey into one platform, connecting customers with salons and home-service businesses while giving partners dedicated tools to manage services, bookings, availability, gifting, loyalty, and day-to-day operations."
          featuresTitle="The Product"
          features={[
            "Salon and home-service beauty bookings",
            "Service gifting and Gift Credit",
            "Customer wallet and balance management",
            "Rewards, stamps, and loyalty experiences",
            "Business service and availability management",
            "Dedicated administration and operational tools",
          ]}
          audiences={[
            {
              title: "For Customers",
              items: [
                "Discover beauty businesses and services",
                "Book salon and home-service appointments",
                "Send beauty gifts to friends and family",
                "Earn rewards and collect loyalty stamps",
                "Manage wallet balance, bookings, and gifts",
              ],
            },
            {
              title: "For Beauty Businesses",
              items: [
                "Manage services, pricing, and availability",
                "Receive and manage customer bookings",
                "Manage locations and team information",
                "Track gifts, loyalty, reviews, and analytics",
                "Operate through a dedicated business dashboard",
              ],
            },
          ]}
          builtTitle="What NoviTech Built"
          builtItems={[
            "iOS Mobile Application",
            "Business Dashboard",
            "Administration Platform",
            "Backend & APIs",
            "Booking System",
            "Gifting System",
            "Wallet & Rewards",
            "Payment Integration",
            "Push Notifications",
          ]}
          availabilityTitle="Availability"
          availabilityText="Glowee is currently available on the Apple App Store and is launching across the UAE beauty market."
          footerTitle="Building a platform with multiple users, workflows, and business operations?"
          footerText="NoviTech designs and develops connected digital products that combine customer experiences, business tools, administration systems, and backend infrastructure."
        />
      </div>

      <Footer />
    </main>
  );
}