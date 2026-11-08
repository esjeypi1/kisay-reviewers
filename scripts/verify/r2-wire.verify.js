// Answer checkers for Robotics II Magnetic Force on a Current-Carrying Wire. Each entry re-solves one question (see scripts/verify/index.js).

import { COMPASS, PAGE, dir, ilb } from './magnetism.js';

export default {
  'R2-WDR-001': () => dir(PAGE, '+', 'down', 'right'),
  'R2-WDR-002': () => dir(PAGE, '+', 'up', 'left'),
  'R2-WDR-003': () => dir(PAGE, '+', 'into', 'right'),
  'R2-WDR-004': () => dir(PAGE, '+', 'out', 'left'),
  'R2-WDR-005': () => dir(PAGE, '+', 'right', 'into'),
  'R2-WDR-006': () => dir(PAGE, '+', 'up', 'out'),
  'R2-WDR-007': () => dir(COMPASS, '+', 'east', 'north'),
  'R2-WCM-001': () => ilb(3.0, 0.50, 0.20, 90),
  'R2-WCM-002': () => ilb(4.0, 1.5, 0.40, 30),
  'R2-WCM-003': () => ({ value: 0.60 / (2.0 * 0.50) }),
  'R2-WCM-004': () => ({ ...ilb(2.5, 1.2, 0.60, 60), tol: 0.03 }),
  'R2-WCM-005': () => ({ value: 0.48 / (4.0 * 0.40) }),
  'R2-WCM-006': () => ilb(3.0, 0.20, 0.50, 90),
  'R2-WCM-007': () => ilb(5.0, 2.0, 0.40, 0),
  'R2-WCM-008': () => ({ value: 0.90 / (3.0 * 0.60) }),
};
