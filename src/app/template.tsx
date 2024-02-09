"use client";

import { motion } from "framer-motion";
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
      <motion.div
        variants={varients}
        initial="hidden"
        animate="enter"
        transition={{
          type: "liner",
          delay: 0.1,
          duration: 0.4,
        }}
      >
        {children}
      </motion.div>

      {/* completion bar */}
      <span
        style={{ transform: `translateY(${(completion as number) - 100}%)` }}
        className="fixed top-0 right-0 bottom-0 z-50 w-1 bg-primary transition-all duration-700"
      ></span>
    </>
  );
}

export default Template;
