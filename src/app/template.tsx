"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import useScrollProgress from "../../hooks/useScrollProgress";

const varients = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

function Template({ children }: { children: React.ReactNode }) {
  const completion = useScrollProgress();
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{
            delay: 0.2,
            duration: 0.3,
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* completion bar */}
      <span
        style={{ transform: `translateY(${(completion as number) - 100}%)` }}
        className="fixed top-0 right-0 bottom-0 z-50 w-1 bg-primary transition-all duration-700"
      ></span>
    </>
  );
}

export default Template;
