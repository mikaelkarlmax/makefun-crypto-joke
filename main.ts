// Laugh Track: The Crypto Trading Joke — one-line joke writer.
// Writes the entry text to /output/entry.txt and prints it to stdout.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I bought the dip, then the dip bought a shovel, and now my portfolio chart looks like my sleep schedule: red, flat, and somehow still falling at 3am.";

// The gate allows 1 to 200 characters; refuse to write an invalid entry.
if ([...JOKE].length < 1 || [...JOKE].length > 200) {
  console.error(`entry is ${[...JOKE].length} characters, must be 1-200`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(JOKE);
