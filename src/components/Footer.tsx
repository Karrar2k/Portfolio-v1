// src/components/Footer.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1D1E25] px-8 py-6 flex flex-col items-center">
      <div className="flex items-center justify-center gap-6 mb-2">
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          {/* If your SVG is black, you can recolor it using filter or you can replace with a white SVG version */}
          <Image
            src="/github-icon.svg"
            alt="GitHub"
            width={32}
            height={32}
            className="invert"
            /*
              'invert' filter makes a black icon appear white.
              You can also supply a white version of the icon if you have it.
            */
          />
        </a>

        <a
          href="https://linkedin.com/in/your-linkedin"
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

      <p className="text-sm text-[#EBE4D5] mb-2">
        &copy; 2024 Karrar Almayali – All Rights Reserved
      </p>

      {/* "KA." on the right linking home (optional) */}
      <Link
        href="/"
        className="font-logo text-[#EBE4D5] text-xl hover:opacity-80 transition-opacity"
      >
        KA.
      </Link>
    </footer>
  );
}
