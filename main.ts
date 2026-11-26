import { mkdirSync, writeFileSync } from "node:fs";

// Funniest Lost Sock Status Update — a status update from a lost sock that
// ended up somewhere it should not be.
const ENTRY =
  "Status update: I eloped with a fitted sheet. We are happy. Do not look for me in the drawer.";
const MAX_CHARS = 120;

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${ENTRY.length}`);
}
// The gate also rejects whitespace-only text, so check that explicitly.
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
