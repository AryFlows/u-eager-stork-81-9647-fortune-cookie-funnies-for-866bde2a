import { mkdirSync, writeFileSync } from "node:fs";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, "A stranger will fix your bug today: future you, cursing present you.\n");
