// src/components/Footer.tsx

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1D1E25] px-8 py-4 flex flex-col md:flex-row md:items-center justify-between h-20">
      {/* GitHub & LinkedIn */}
      <div className="flex items-center gap-6 mb-4 md:mb-0">
        <a
          href="https://github.com/Karrar2k"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <Image
            src="/github-icon.svg"
            alt="GitHub"
            width={32}
            height={32}
            className="invert"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/karrar-almayali/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <Image
            src="/linkedin-icon.svg"
            alt="LinkedIn"
            width={32}
            height={32}
            className="invert"
          />
        </a>
      </div>

      {/* Copyright */}
      <div className="flex-1 text-center mb-0 md:mb-0 mt-auto">
        <p className="text-sm font-[Overpass]">
          &copy; Designed &amp; Built by Yours Truly
        </p>
      </div>

      {/* Logo (right) */}
      <Link
        href="/"
        className="font-[Orbitron] text-[#66A2B2] text-xl hover:opacity-80 transition-opacity"
      >
        KA.
      </Link>
    </footer>
  );
}
