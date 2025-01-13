
import type { AppProps } from "next/app";
import "../globals.css";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { motion, AnimatePresence } from "framer-motion";

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
      {/* Background */}
      <div className="pagebackground" />

      {/* Splash screen */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="fixed inset-0 flex flex-col justify-center items-center bg-[#3E4150] z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="text-center">
              <h1 className="font-[Orbitron] text-4xl text-[#66A2B2]">KA.</h1>
              <p className="font-[Poppins] text-lg text-[#EBE4D5] mt-2">
                Welcome to my portfolio
              </p>

              {/* Loader */}
              <div className="loader mt-4"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main site content */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
