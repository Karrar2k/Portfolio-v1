// src/components/Header.tsx
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-[#1D1E25] px-8 py-4 flex items-center justify-between">
      {/* Logo linking to home */}
      <Link
        href="/"
        className="font-logo text-2xl text-[#EBE4D5] hover:opacity-80 transition-opacity"
      >
        KA.
      </Link>

      {/* Nav Links */}
      <nav className="flex space-x-6">
        <Link href="/works" className="hover:underline">
          Works
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
      </nav>
    </header>
  );
}
