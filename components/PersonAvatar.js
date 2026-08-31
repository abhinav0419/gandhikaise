"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

const EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

const avatarVariants = {
  hidden: { scale: 0.35, rotate: -16, opacity: 0 },
  show: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 14, delay: 0.15 },
  },
};

/**
 * One candidate <img> for a single file extension. Browsers sometimes
 * resolve an image (especially a cached or instant-404 one) *before* React
 * finishes attaching the onLoad/onError listeners, which silently drops
 * the event. The ref callback below double-checks `complete`/`naturalWidth`
 * the moment the node mounts, so a same-tick resolution is never missed.
 */
function Candidate({ src, onSuccess, onFail }) {
  const handled = useRef(false);

  const resolve = (isSuccess) => {
    if (handled.current) return;
    handled.current = true;
    (isSuccess ? onSuccess : onFail)();
  };

  return (
    <img
      ref={(node) => {
        if (node && node.complete) {
          resolve(node.naturalWidth > 0);
        }
      }}
      src={src}
      alt=""
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      onLoad={() => resolve(true)}
      onError={() => resolve(false)}
    />
  );
}

/**
 * Wraps a person's name in text and floats a small circular photo badge
 * over the top-right corner of it. Sizing is all in `em`, so the badge
 * automatically scales with whatever heading or body text it sits inside.
 *
 * Drop a photo at /public/photos/<slug>.(jpg|jpeg|png|webp) and it appears
 * automatically; until then (or if none of the four extensions are found)
 * it shows a colour-coded initials badge instead. All four extensions are
 * requested in parallel so a match shows up after one round trip instead
 * of up to four.
 */
export default function PersonAvatar({ person, as = "span", children }) {
  const [loadedExt, setLoadedExt] = useState(null);
  const [errorCount, setErrorCount] = useState(0);
  const Tag = as;
  const failed = errorCount >= EXTENSIONS.length && loadedExt === null;

  return (
    <Tag className="person" style={{ "--p-color": person.color }}>
      {children ?? person.name}
      <motion.span className="avatar" variants={avatarVariants} whileHover={{ scale: 1.12, rotate: -5 }}>
        {EXTENSIONS.map((ext) => (
          <div key={ext} style={{ opacity: loadedExt === ext ? 1 : 0, position: "absolute", inset: 0 }}>
            <Candidate
              src={`/photos/${person.slug}.${ext}`}
              onSuccess={() => setLoadedExt((prev) => prev ?? ext)}
              onFail={() => setErrorCount((c) => c + 1)}
            />
          </div>
        ))}
        {failed && <span className="initials">{person.initials}</span>}
      </motion.span>
    </Tag>
  );
}
