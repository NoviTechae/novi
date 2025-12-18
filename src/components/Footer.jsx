"use client";
import { Instagram, MessageCircle, Video } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-40 pt-10 border-t border-border text-sm text-muted">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">

        {/* Left */}
        <p>
          © {new Date().getFullYear()} NoviTech
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a
            href="https://wa.me/971558198862"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-accent transition p-1"
          >
            <MessageCircle size={18} />
          </a>

          <a
            href="https://www.instagram.com/novitech.ae"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-accent transition p-1"
          >
            <Instagram size={18} />
          </a>

          <a
            href="https://www.tiktok.com/@novitech.ae"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:text-accent transition p-1"
          >
            <Video size={18} />
          </a>
        </div>

        {/* Right */}
        <p className="text-xs">
          Emirati-led • Built with precision
        </p>

      </div>
    </footer>
  );
}