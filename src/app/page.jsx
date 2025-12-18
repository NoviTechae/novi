import { redirect } from "next/navigation";

export default function Home() {
  redirect("/en"); // أو "/ar" إذا تبين العربي افتراضي
}