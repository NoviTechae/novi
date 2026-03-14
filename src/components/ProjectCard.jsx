"use client";
// src/components/ProjectCard.jsx

import { useState } from "react";

export default function ProjectCard({ name, category, desc, image, placeholder }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="border border-border hover:border-accent hover:-translate-y-1 transition-all duration-200 overflow-hidden">
      {/* Image area */}
      <div className="w-full h-48 bg-border/30 flex items-center justify-center overflow-hidden">
        {!imgError ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="text-2xl font-bold text-accent/40 tracking-widest">
            {placeholder}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-8">
        <p className="text-xs uppercase tracking-widest text-accent mb-2">{category}</p>
        <p className="text-lg font-medium mb-2">{name}</p>
        <p className="text-sm text-muted">{desc}</p>
      </div>
    </div>
  );
}