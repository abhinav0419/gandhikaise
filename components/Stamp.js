"use client";

import { motion } from "framer-motion";

const stampVariants = {
  hidden: { scale: 0.5, rotate: -9, opacity: 0 },
  show: {
    scale: 1,
    rotate: -9,
    opacity: 0.92,
    transition: { type: "spring", stiffness: 300, damping: 12 },
  },
};

/** An ink-stamp style verdict badge. Pops in with a spring the moment it mounts. */
export default function Stamp({ tone = "red", children, style }) {
  return (
    <motion.div
      className={`stamp stamp-${tone}`}
      style={style}
      initial="hidden"
      animate="show"
      variants={stampVariants}
    >
      {children}
    </motion.div>
  );
}
