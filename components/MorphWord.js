"use client";

import { motion } from "framer-motion";

/**
 * A flip-card style crossfade between two spellings (Ghandy -> Gandhi).
 * Both words occupy the same grid cell and rotate past each other on the
 * X axis, like a card being turned over.
 */
export default function MorphWord({ from, to }) {
  return (
    <span className="morph" style={{ perspective: 600 }}>
      <motion.span
        className="morph-from"
        initial={{ rotateX: 0, opacity: 1 }}
        animate={{ rotateX: 90, opacity: 0 }}
        transition={{ duration: 0.55, ease: "easeIn" }}
      >
        {from}
      </motion.span>
      <motion.span
        className="morph-to"
        initial={{ rotateX: -90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
      >
        {to}
      </motion.span>
    </span>
  );
}
