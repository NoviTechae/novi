"use client";
// src/components/ProjectCard.jsx

import { useState } from "react";
import Link from "next/link";

export default function ProjectCard({
  name,
  category,
  desc,
  image,
  placeholder,
  href,
  imageFit = "cover",
}) {
  const [imgError, setImgError] = useState(false);

  const cardContent = (
    <article className="group relative h-full overflow-hidden border border-border bg-beige transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-sm">
      {/* Corner detail */}
      <span className="absolute right-0 top-0 z-10 h-8 w-8 border-r border-t border-accent" />

      {/* Image */}
      <div className="relative aspect-square w-full overflow-hidden bg-border/20">        {!imgError ? (
        <img
          src={image}
          alt={`${name} project`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-4xl font-semibold tracking-[0.2em] text-accent/30">
            {placeholder}
          </span>
        </div>
      )}

        <div className="pointer-events-none absolute inset-0 bg-charcoal/[0.02]" />
      </div>

      {/* Content */}
      <div className="flex h-[calc(100%-1px)] flex-col p-7 md:p-9">
        <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-accent">
          {category}
        </p>

        <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
          {name}
        </h3>

        <div className="my-5 h-px w-10 bg-accent/60 transition-all duration-300 group-hover:w-16" />

        <p className="max-w-xl text-sm leading-7 text-muted">
          {desc}
        </p>

        {href && (
          <span className="mt-6 text-sm font-medium text-charcoal transition group-hover:text-accent">
            Explore project →
          </span>
        )}
      </div>
    </article>
  );

  if (!href) return cardContent;

  return (
    <Link
      href={href}
      className="block h-full"
      aria-label={`Explore ${name}`}
    >
      {cardContent}
    </Link>
  );
}