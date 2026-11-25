// Worst Fix Ever: Funniest Commit Message — make.fun entry.
// Writes exactly one commit message (<=100 chars) to /output/entry.txt.
// Deterministic, no network, no randomness, no arguments.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "fix: cure the slow checkout by skipping the payment step \u2014 conversion is 100%, revenue is $0";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
