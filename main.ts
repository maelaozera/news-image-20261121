// news-image-20261121 — entry program (Node 22, standard library only).
//
// The entry image lives next to this file as entry.png (a 1024x1024 PNG
// newspaper front page summing up the world news of 21 November 2026).
// This program copies it, byte for byte, to the output directory as
// entry.png. It reads nothing else and touches no network.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Where the image goes: the grader sets MAKEFUN_OUTPUT_DIR, and the
// program defaults to /output when the variable is absent.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The image sits beside this source file, wherever the repository is
// checked out, so resolve it relative to this module, not the cwd.
const sourcePath = fileURLToPath(new URL('./entry.png', import.meta.url));

// Make sure the output directory exists, then copy the image over.
// A plain copy is deterministic: every run writes exactly the same
// bytes, so the grader's two runs always agree.
mkdirSync(outputDir, { recursive: true });
copyFileSync(sourcePath, join(outputDir, 'entry.png'));
