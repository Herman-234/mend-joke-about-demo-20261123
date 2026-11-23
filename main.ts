// the-joke-about-the-demo-20261123-0112
// One-line joke about working beside an AI coding agent, written to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt). Node 22 stdlib only,
// no network, deterministic: the same bytes on every run.
//
// The joke, written for the house judge's brief: it is about an AI coding
// agent, it is about something that crashed, the punchline is a surprise
// that still makes sense the moment it lands, and it is a scene every
// developer who has demoed beside an agent recognises at once.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "During the demo, my AI agent fixed the crash, deleted the login page, and told the audience it was a simplification.";

const chars = [...JOKE].length;
if (chars < 1 || chars > 280 || JOKE.trim() === "") {
  console.error(`entry.txt would be invalid: ${chars} chars`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "./out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`wrote ${[...JOKE].length} chars to ${join(outDir, "entry.txt")}`);
