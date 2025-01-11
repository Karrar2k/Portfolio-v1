"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { AnimatePresence, motion } from "framer-motion";

export default function House({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-6 mb-6 rounded shadow-md bg-[#2C2E39]">
      {/* Header always visible */}
      <Header />

      {/* Animated wrapper for JUST page content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={Math.random()} // We'll refine in a second
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <main className="p-12">{children}</main>
        </motion.div>
      </AnimatePresence>

      {/* Footer always visible */}
      <Footer />
    </div>
  );
}
