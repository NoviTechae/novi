"use client";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitch() {
  const router = useRouter();
  const pathname = usePathname();

  const isEN = pathname === "/" || pathname === "/en";

  return (
    <button
      onClick={() => router.push(isEN ? "/ar" : "/en")}
      className="text-sm underline"
    >
      {isEN ? "AR" : "EN"}
    </button>
  );
}