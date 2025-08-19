// src/components/Footer.tsx
import { FaTiktok, FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-600">
        <div>© {new Date().getFullYear()} NoviTech — جميع الحقوق محفوظة</div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.tiktok.com/@novitech.ae"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors"
          >
            <FaTiktok />
          </a>

          <a
            href="https://www.instagram.com/novitech.ae"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors"
          >
            <FaInstagram />
          </a>

          <a
            href="mailto:info@novitech.ae"
            className="hover:text-orange-500 transition-colors"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://wa.me/971558198862"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}


