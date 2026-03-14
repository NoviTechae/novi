// src/app/en/privacy-policy/layout.jsx
// هذا الملف يعزل الـ metadata عن الـ page component

export const metadata = {
  title: "Privacy Policy | NoviTech",
  description: "How NoviTech collects, uses, and protects your personal information.",
};

export default function PrivacyLayout({ children }) {
  return children;
}