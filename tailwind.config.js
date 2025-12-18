/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        arabic: ["IBM Plex Sans Arabic", "Cairo", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      colors: {
        beige: "#F5F1EC",
        charcoal: "#111111",
        accent: "#9C8A5A",

        muted: "#6B6B6B",        // نصوص ثانوية
        border: "#E2DDD6",       // حدود خفيفة
        darkAccent: "#6F623F",  // accent داكن للهوفر
      },
    },
  },
  plugins: [],
};