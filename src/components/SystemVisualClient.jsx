"use client";

import dynamic from "next/dynamic";

const SystemVisual = dynamic(
  () => import("./SystemVisual"),
  { ssr: false }
);

export default function SystemVisualClient() {
  return <SystemVisual />;
}