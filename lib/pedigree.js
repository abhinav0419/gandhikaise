// Tidy pedigree layout. Generation 0 (the subject) sits at the bottom and
// each generation of ancestors sits one row higher. Sibling subtrees are
// packed as tightly as their per-row contours allow, so branches of
// different depths can share horizontal space.
//
// Returns { nodes, edges, ghosts, slots } where x positions are measured in
// "slots" (one card width + gutter).

export function layoutPedigree(root, maxGen) {
  const nodes = [];
  const edges = [];
  const ghosts = [];

  function lay(person, gen, inheritedLine) {
    const line = person.line || inheritedLine;
    const parents = gen < maxGen ? person.parents || [] : [];
    const node = { person, gen, line, x: 0 };
    let ownNodes = [node];
    let ownGhosts = [];
    let left = new Map([[gen, 0]]);
    let right = new Map([[gen, 0]]);

    if (person.undocumentedAbove && gen < maxGen) {
      const ghost = { gen: maxGen, fromGen: gen, x: 0, line };
      ownGhosts.push(ghost);
      for (let g = gen + 1; g <= maxGen; g++) {
        left.set(g, 0);
        right.set(g, 0);
      }
    }

    if (parents.length) {
      const subs = parents.map((p) => lay(p, gen + 1, line));
      const accL = new Map();
      const accR = new Map();
      const roots = [];
      subs.forEach((sub, i) => {
        let shift = 0;
        if (i > 0) {
          shift = -Infinity;
          for (const [d, l] of sub.left) {
            if (accR.has(d)) shift = Math.max(shift, accR.get(d) + 1 - l);
          }
          if (shift === -Infinity) shift = 0;
        }
        sub.nodes.forEach((n) => (n.x += shift));
        sub.ghosts.forEach((g) => (g.x += shift));
        for (const [d, l] of sub.left) {
          const v = l + shift;
          accL.set(d, accL.has(d) ? Math.min(accL.get(d), v) : v);
        }
        for (const [d, r] of sub.right) {
          const v = r + shift;
          accR.set(d, accR.has(d) ? Math.max(accR.get(d), v) : v);
        }
        roots.push(sub.root);
        ownNodes = ownNodes.concat(sub.nodes);
        ownGhosts = ownGhosts.concat(sub.ghosts);
      });
      node.x = (roots[0].x + roots[roots.length - 1].x) / 2;
      accL.set(gen, node.x);
      accR.set(gen, node.x);
      left = accL;
      right = accR;
      edges.push({ child: node, parents: roots });
    }

    return { root: node, nodes: ownNodes, ghosts: ownGhosts, left, right };
  }

  const result = lay(root, 0, root.line);
  const all = [...result.nodes, ...result.ghosts];
  const minX = Math.min(...all.map((n) => n.x));
  const maxX = Math.max(...all.map((n) => n.x));
  all.forEach((n) => (n.x -= minX));
  nodes.push(...result.nodes);
  ghosts.push(...result.ghosts);

  return { nodes, edges, ghosts, slots: maxX - minX + 1 };
}
