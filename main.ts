// Monday morning joke — make.fun one-liner entry.
// Writes a single joke (at most 200 characters) to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "My Monday alarm and I have a toxic relationship — it rings, I snooze, we both pretend this is fine.";

// Guard: the joke must be a single non-empty line of 1–200 characters.
if (joke.length < 1 || joke.length > 200 || joke.trim() !== joke) {
  throw new Error(`Joke must be 1–200 characters, got ${joke.length}`);
}

const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
console.log(`Wrote ${joke.length} characters to entry.txt`);
