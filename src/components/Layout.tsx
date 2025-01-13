
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="w-full flex justify-center">
      <div
        className="
          mt-8 mb-8 
          w-full max-w-4xl 
          bg-[#2C2E39]
          rounded-md shadow-md 
          overflow-hidden 
          flex flex-col
          h-[calc(100vh-4rem)]
        "
      >
        <Header />

        <div className="house flex-grow overflow-y-hidden p-6 mt-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={router.route}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>

        <Footer />
      </div>
    </div>
  );
}
