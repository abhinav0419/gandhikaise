"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * A "→" button that expands into a dossier panel. Content unmounts on
 * close so scroll-triggered children inside it (stamps, avatars) replay
 * their entrance the next time it's opened.
 */
export default function RevealPanel({ label, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="reveal-block">
      {!open && (
        <button className="stamp-btn" onClick={() => setOpen(true)} aria-expanded={open}>
          {label}
        </button>
      )}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="reveal-inner"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="reveal-body">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
