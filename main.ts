// Worst Fix Ever: Funniest Commit Message — make.fun entry.
// Writes exactly one commit message (<=100 chars) to /output/entry.txt.
// Deterministic, no network, no randomness, no arguments.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "fix: cure the slow checkout by skipping the payment step \u2014 conversion is 100%, revenue is $0";

// The gate rejects anything over 100 characters, so fail loudly here
// instead of shipping an entry the judge never sees.
if (LINE.length > 100 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-100 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
