// src/components/LanguageSwitch.jsx
"use client";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitch() {
  const router = useRouter();
  const pathname = usePathname() || "/en";

  const isAr = pathname.startsWith("/ar");
  const rest = pathname.replace(/^\/(en|ar)/, "") || "";
  const target = `${isAr ? "/en" : "/ar"}${rest}`;

  return (
    <button
      type="button"
      onClick={() => router.push(target)}
      aria-label={isAr ? "Switch to English" : "التبديل إلى العربية"}
      className="text-sm underline underline-offset-4 transition hover:text-accent"
    >
      {isAr ? "EN" : "AR"}
    </button>
  );
}
