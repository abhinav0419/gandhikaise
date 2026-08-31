"use client";

import { motion } from "framer-motion";

export const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

export const itemUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const spineVariants = {
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: { duration: 0.9, ease: [0.3, 0.7, 0.2, 1] } },
};

const dotVariants = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { type: "spring", stiffness: 300, damping: 15, delay: 0.1 } },
};

/**
 * One "case file" entry in the timeline: draws its own segment of the
 * left-hand spine (colour keyed by `thread`) as it scrolls into view, pops
 * its pin dot, then cascades its children in with a stagger.
 */
export default function TimelineEntry({ thread = "parsi", children, className = "" }) {
  return (
    <motion.section
      className={`entry ${className}`}
      data-thread={thread}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      <motion.span className="node-dot" variants={dotVariants} />
      <motion.span className="spine" variants={spineVariants} />
      <div className="wrap">{children}</div>
    </motion.section>
  );
}
