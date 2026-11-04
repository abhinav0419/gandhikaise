// Starts Next on the first free port, beginning at $PORT (default 3000).
// Usage: node scripts/run.mjs dev|start
import net from "node:net";
import { spawn } from "node:child_process";

const mode = process.argv[2] || "dev";
const first = Number(process.env.PORT) || 3000;

const isFree = (port) =>
  new Promise((resolve) => {
    const srv = net.createServer();
    srv.once("error", () => resolve(false));
    srv.once("listening", () => srv.close(() => resolve(true)));
    srv.listen(port);
  });

let port = first;
while (!(await isFree(port))) {
  if (port - first > 100) {
    console.error(`No free port found between ${first} and ${port}.`);
    process.exit(1);
  }
  port++;
}
if (port !== first) console.log(`Port ${first} is busy, using ${port} instead.`);
console.log(`→ http://localhost:${port}`);

const child = spawn("npx", ["next", mode, "-p", String(port)], {
  stdio: "inherit",
  shell: process.platform === "win32",
});
child.on("exit", (code) => process.exit(code ?? 0));
