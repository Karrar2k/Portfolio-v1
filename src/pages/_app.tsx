// src/pages/_app.tsx

import type { AppProps } from "next/app";
import "../globals.css"; // Tailwind + your global styles
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Background animation behind everything */}
      <div className="animated-background" />

      {/* Splash screen */}
      {showSplash && (
        <div className="fixed inset-0 flex justify-center items-center bg-[#3E4150] z-50">
          <div className="text-center">
            <h1 className="font-[Orbitron] text-4xl text-[#66A2B2]">KA.</h1>
            <p className="font-[Poppins] text-lg text-[#EBE4D5] mt-2">
              Welcome to my portfolio
            </p>
          </div>
        </div>
      )}

      {/* Render Layout + page content once splash is hidden */}
      {!showSplash && (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}
