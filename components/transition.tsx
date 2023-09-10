import React from "react";
import { motion } from "framer-motion";
import { init } from "@emailjs/browser";

const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
};

export default function Transition() {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full h-screen z-30 bg-emerald-800"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full h-screen z-20 bg-emerald-600"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full h-screen z-10 bg-emerald-400"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
    </>
  );
}
