// Answer checkers for Robotics II Lenz's Law. Each entry re-solves one question (see scripts/verify/index.js).

import { coil, conc, concWhy, loop, wire } from './magnetism.js';

export default {
  'R2-LZM-004': () => coil('right', 'N', 'toward'),
  'R2-LZM-005': () => coil('right', 'S', 'toward'),
  'R2-LZM-006': () => coil('left', 'S', 'away'),
  'R2-LZF-001': () => loop('into', 'decreasing'),
  'R2-LZF-002': () => loop('into', 'increasing'),
  'R2-LZF-003': () => loop('out', 'increasing'),
  'R2-LZF-004': () => wire('up', 'right', 'decreasing'),
  'R2-LZF-005': () => wire('down', 'left', 'decreasing'),
  'R2-LZF-006': () => concWhy('ACW', 'increasing'),
  'R2-LZF-007': () => conc('CW', 'increasing'),
};
