"use client";
import { motion } from "framer-motion";

export default function SystemVisual() {
  return (
    <div className="relative w-[360px] h-[360px]">
      
      {/* Center core */}
      <motion.div
        className="absolute inset-0 m-auto w-6 h-6 rounded-full bg-accent"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orbit 1 – Web */}
      <Orbit
        size={120}
        speed={18}
        dots={4}
        opacity={0.35}
      />

      {/* Orbit 2 – Software */}
      <Orbit
        size={170}
        speed={26}
        dots={5}
        opacity={0.25}
        dashed
      />

      {/* Orbit 3 – AI */}
      <Orbit
        size={220}
        speed={34}
        dots={6}
        opacity={0.18}
      />
    </div>
  );
}

/* ===== Orbit Component ===== */

function Orbit({ size, speed, dots, opacity, dashed = false }) {
  return (
    <motion.div
      className="absolute inset-0 m-auto"
      style={{ width: size, height: size }}
      animate={{ rotate: 360 }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
    >
      {/* Path */}
      <div
        className={`
          absolute inset-0 rounded-full
          ${dashed ? "border border-dashed" : "border"}
        `}
        style={{
          borderColor: `rgba(156,138,90,${opacity})`,
        }}
      />

      {/* Nodes */}
      {Array.from({ length: dots }).map((_, i) => {
        const angle = (360 / dots) * i;
        return (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-accent"
            style={{
              opacity,
              transform: `
                rotate(${angle}deg)
                translateX(${size / 2}px)
              `,
            }}
          />
        );
      })}
    </motion.div>
  );
}