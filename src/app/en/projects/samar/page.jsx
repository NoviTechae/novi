import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCaseStudy from "@/components/ProductCaseStudy";

export const metadata = {
  title: "Samar | Assistive Education Platform by NoviTech",
  description:
    "Explore Samar, an interactive platform developed by NoviTech to support learning, communication, structured activities, and progress tracking for People of Determination.",
};

export default function SamarProjectPage() {
  return (
    <main className="min-h-screen bg-beige px-6 py-10 text-charcoal md:px-10 md:py-14">
      <Navbar />

      <div className="mx-auto max-w-6xl">
        <ProductCaseStudy
          locale="en"
          eyebrow="Selected Product"
          name="Samar"
          category="Assistive Education Platform"
          intro="An interactive digital platform designed to support learning, communication, structured activities, and progress tracking for People of Determination."
          image="/projects/samar.png"
          status="Currently in validation & development"
          problemTitle="The Problem"
          problem="Learning and communication needs can vary significantly between students, while educators and specialists need structured ways to deliver activities, follow progress, understand daily responses, and manage learning content. These experiences can become fragmented when tools, assessments, communication, and progress information are separated."
          solutionTitle="The Solution"
          solution="Samar brings these experiences into one connected platform with dedicated environments for students, educators, and administrators. It combines interactive learning activities, communication support, assessments, progress tracking, and content management within a structured digital experience."
          featuresTitle="The Product"
          features={[
            "Interactive lessons, activities, and educational games",
            "AAC communication support",
            "Structured assessments and progress tracking",
            "Daily feelings and student check-ins",
            "Educator tools for students and learning content",
            "Administration and content management",
          ]}
          audiences={[
            {
              title: "For Students",
              items: [
                "Access age-appropriate learning activities and lessons",
                "Use communication support tools",
                "Complete interactive exercises and assessments",
                "Express daily feelings through structured check-ins",
                "Follow a more organized digital learning experience",
              ],
            },
            {
              title: "For Educators & Administrators",
              items: [
                "Organize students by learning level",
                "Follow progress and assessment results",
                "Manage courses, lessons, topics, and activities",
                "Review student feelings and learning information",
                "Manage users and platform content through dedicated tools",
              ],
            },
          ]}
          builtTitle="What NoviTech Built"
          builtItems={[
            "Mobile Application",
            "Student Experience",
            "Educator Experience",
            "Administration System",
            "Backend & APIs",
            "Assessment System",
            "Progress Tracking",
            "AAC Tools",
            "Content Management",
            "Bilingual Experience",
          ]}
          availabilityTitle="Current Stage"
          availabilityText="Samar is currently in a validation and development stage. The platform is being prepared for specialist review and controlled testing before any broader public release."
          footerTitle="Building technology around a meaningful real-world need?"
          footerText="NoviTech develops custom digital platforms that bring users, workflows, data, and management tools together within a practical and scalable product."
        />
      </div>

      <Footer />
    </main>
  );
}