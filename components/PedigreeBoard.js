"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { layoutPedigree } from "@/lib/pedigree";
import {
  GENERATION_LABELS,
  LINES,
  MAX_GEN,
  MODI_TREE,
  RAHUL_TREE,
  SOURCES,
} from "@/data/trees";

const SLOT = 138; // horizontal pitch of one card
const CARD_W = 128;
const CARD_H = 92;
const ROW = 122; // vertical pitch of one generation
const TREE_H = MAX_GEN * ROW + CARD_H;
const RAIL_W = 112;
const GAP = 28;

const top = (gen) => (MAX_GEN - gen) * ROW;
const cx = (x) => x * SLOT + CARD_W / 2;

const treeWidth = (layout) => layout.slots * SLOT - (SLOT - CARD_W);

function Tree({ layout }) {
  const width = treeWidth(layout);

  return (
    <div className="tree" style={{ width, height: TREE_H }}>
      <svg className="tree-lines" width={width} height={TREE_H} aria-hidden="true">
        {layout.edges.map(({ child, parents }, i) => {
          const childTop = top(child.gen);
          const mid = childTop - (ROW - CARD_H) / 2;
          const parentBottom = top(child.gen + 1) + CARD_H;
          const xs = parents.map((p) => cx(p.x));
          const d = [
            `M ${cx(child.x)} ${childTop} V ${mid}`,
            `M ${Math.min(...xs)} ${mid} H ${Math.max(...xs)}`,
            ...xs.map((x) => `M ${x} ${mid} V ${parentBottom}`),
          ].join(" ");
          return <path key={i} d={d} />;
        })}
        {layout.ghosts.map((g, i) => (
          <path
            key={`g${i}`}
            className="ghost-line"
            d={`M ${cx(g.x)} ${top(g.fromGen)} V ${top(MAX_GEN) + CARD_H}`}
          />
        ))}
      </svg>

      {layout.nodes.map(({ person, gen, line, x }) => (
        <motion.div
          key={`${person.name}-${gen}`}
          className={`card${gen === 0 ? " is-self" : ""}${person.italian ? " is-italian" : ""}`}
          style={{
            left: x * SLOT,
            top: top(gen),
            width: CARD_W,
            height: CARD_H,
            "--line": LINES[line]?.color,
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: gen * 0.09, ease: [0.22, 1, 0.36, 1] }}
        >
          {person.italian && <span className="tag-italian">Italian</span>}
          <span className="card-name">{person.name}</span>
          {person.sub && <span className="card-sub">{person.sub}</span>}
          {person.years && <span className="card-years">{person.years}</span>}
          {person.claim && (
            <a
              className="card-claim"
              href={person.claim.href}
              title={person.claim.title}
              target="_blank"
              rel="noopener"
            >
              {person.claim.text} ↗
            </a>
          )}
        </motion.div>
      ))}

      {layout.ghosts.map((g, i) => (
        <motion.div
          key={`ghost${i}`}
          className="card ghost"
          style={{ left: g.x * SLOT, top: top(MAX_GEN), width: CARD_W, height: CARD_H }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <span className="card-sub">Not publicly documented</span>
          <span className="card-years">
            gen {g.fromGen + 1}–{MAX_GEN}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function Legend({ keys }) {
  return (
    <ul className="legend">
      {keys.map((k) => (
        <li key={k} style={{ "--line": LINES[k].color }}>
          {LINES[k].label}
        </li>
      ))}
    </ul>
  );
}

function Rail() {
  return (
    <div className="rail" style={{ height: TREE_H, width: RAIL_W }}>
      {GENERATION_LABELS.slice(0, MAX_GEN + 1).map((label, gen) => (
        <div key={gen} className="rail-row" style={{ top: top(gen), height: CARD_H }}>
          <span className="rail-gen">Gen {gen}</span>
          <span className="rail-label">{label}</span>
        </div>
      ))}
    </div>
  );
}

export default function PedigreeBoard() {
  const rahul = useMemo(() => layoutPedigree(RAHUL_TREE, MAX_GEN), []);
  const modi = useMemo(() => layoutPedigree(MODI_TREE, MAX_GEN), []);
  const colW = Math.max(treeWidth(rahul), treeWidth(modi));
  const outer = useRef(null);
  const inner = useRef(null);
  const [scale, setScale] = useState(1);
  const [naturalH, setNaturalH] = useState(null);

  // Shrink the whole board to fit narrower windows (down to 55%), then
  // fall back to horizontal scrolling so the two trees stay side by side.
  useLayoutEffect(() => {
    const fit = () => {
      if (!outer.current || !inner.current) return;
      const avail = outer.current.clientWidth;
      const natural = inner.current.scrollWidth;
      setScale(Math.max(0.55, Math.min(1, avail / natural)));
      setNaturalH(inner.current.offsetHeight);
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(outer.current);
    ro.observe(inner.current);
    document.fonts?.ready.then(fit);
    return () => ro.disconnect();
  }, []);

  return (
    <main className="page">
      <p className="page-intro">
            Rahul Gandh achievement = Sperm won the race.<br></br>
            Modi's achievement = 15 years CM, 15 years PM. Came from nothing, self made.
      </p>
      <div
        className="board-scroll"
        ref={outer}
        style={naturalH ? { height: naturalH * scale } : undefined}
      >
        <div
          className="board"
          ref={inner}
          style={{
            transform: `scale(${scale})`,
            gridTemplateColumns: `${colW}px ${RAIL_W}px ${colW}px`,
            columnGap: GAP,
          }}
        >
          <header className="col-head">
            <h2>Rahul Gandhi or Gandhy? Surname changed for political gains?</h2>
            <p>Three generations of ancestors</p>
          </header>
          <div />
          <header className="col-head">
            <h2>Narendra Modi</h2>
            <p>Known ancestors only</p>
          </header>

          <Tree layout={rahul} />
          <Rail />
          <Tree layout={modi} />

          <Legend keys={["ghandy", "nehru", "kaul", "maino"]} />
          <div />
          <Legend keys={["modi", "hiraben"]} />
        </div>
      </div>

      <p className="footnote">
      Keeping "Gandhi" as surname suits for political gains. If the surname was taken by Indira Gandhi from mother side then Rahul should be Maino.
      Surname he nahi hai ya churaya hua hai ?? India wants to know before vote chori.
      </p>
    </main>

  );
}
