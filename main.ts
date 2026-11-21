// news-image-20261121 — "The World Today", Saturday 21 November 2026.
// A one-image summary of the day's world news: Russian missiles land in
// Poland, Wall Street slumps into correction, the ICJ finds Myanmar guilty
// of genocide against the Rohingya, the UK and EU sign new deals, Cyclone
// Akvan hits India's east coast, and COP31 enters its final stage.
// The image is the entry.png beside this file (JPEG bytes, 1024x1024,
// 275213 bytes, under the 1 MiB limit); the program copies it to the
// output directory. Node 22, standard library only, no network.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
