"use client";

import "./globals.css";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Track cursor position
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Set timer for splash screen
    const timer = setTimeout(() => {
      setShowSplash(false); // Hide splash screen after 3 seconds
    }, 3000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer); // Clean up timer on unmount
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Karrar&apos;s Portfolio</title>
      </head>

      <body className="bg-[#3E4150] text-[#EBE4D5] min-h-screen relative">
        {/* Splash Screen */}
        {showSplash && (
          <div className="splash-screen">
            <div className="splash-content">
              <h1 className="font-[Orbitron] text-4xl text-[#66A2B2]">KA.</h1>
              <p className="font-[Poppins] text-lg text-[#EBE4D5] mt-2">
                Welcome to my portfolio
              </p>
            </div>
          </div>
        )}

        {/* Energy Pulse Effect */}
        {!showSplash && (
          <div
            className="cursor-pulse"
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
            }}
          ></div>
        )}

        {/* Main Content */}
        {!showSplash && children}
      </body>
    </html>
  );
}
