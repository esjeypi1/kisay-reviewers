// Answer checkers for Robotics II Magnetic Force on a Moving Charge. Each entry re-solves one question (see scripts/verify/index.js).

import { COMPASS, PAGE, axes, dir, qvb } from './magnetism.js';

export default {
  'R2-QDR-001': () => dir(PAGE, '+', 'right', 'out'),
  'R2-QDR-002': () => dir(PAGE, '-', 'right', 'into'),
  'R2-QDR-003': () => dir(PAGE, '+', 'up', 'right'),
  'R2-QDR-004': () => dir(PAGE, '-', 'down', 'right'),
  'R2-QDR-005': () => dir(PAGE, '+', 'down', 'out'),
  'R2-QDR-006': () => dir(COMPASS, '+', 'north', 'downward'),
  'R2-QDR-007': (q) => axes(q, '+', '-x', '-y'),
  'R2-QCM-001': () => qvb(1.6e-19, 2.0e6, 0.50, 90),
  'R2-QCM-002': () => qvb(1.6e-19, 4.0e5, 0.20, 30),
  'R2-QCM-003': () => qvb(3.2e-19, 1.0e7, 0.80, 0),
  'R2-QCM-004': () => ({ value: 1.6e-13 / (1.6e-19 * 4.0e6) }),
  'R2-QCM-005': () => ({ value: 2.4e-13 / (4.8e-19 * 0.50) }),
  'R2-QCM-006': () => qvb(1.6e-19, 4.0e6, 0.50, 150),
  'R2-QRD-001': () => ({ value: (1.67e-27 * 2.0e6) / (1.6e-19 * 0.50), tol: 0.01 }),
};
