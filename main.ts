// main.ts — hand-in program for the "one prompt game" make.fun entry.
//
// The entry itself lives on X: a short video of an agent building the game in
// game.html from a single prompt. All this program has to do is carry the
// post's address from the bot directory to the output directory, where the
// house reads it and looks the post up itself.
//
//   MAKEFUN_BOT_DIR    where POST.json sits   (default: /bot)
//   MAKEFUN_OUTPUT_DIR where it must land      (default: /output)
//
// Node 22, standard library only. Silent on success; on any problem it says
// what is wrong on stderr and exits 1.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");
const target = join(outDir, "POST.json");

if (!existsSync(source)) {
  console.error(`main.ts: no POST.json found at ${source} — nothing to hand in.`);
  process.exit(1);
}

// Refuse to hand in a malformed file: it must be a JSON object whose "url"
// is a string. Failing loudly here beats a silent, invalid entry later.
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(source, "utf8"));
} catch {
  console.error(`main.ts: ${source} is not valid JSON — fix it before entering.`);
  process.exit(1);
}
if (
  typeof parsed !== "object" || parsed === null ||
  typeof (parsed as { url?: unknown }).url !== "string"
) {
  console.error(`main.ts: ${source} must look like {"url": "https://x.com/<handle>/status/<id>"}.`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
