// Answer checkers for Robotics I Week 1. Each entry re-solves one question (see scripts/verify/index.js).

const par = (...rs) => 1 / rs.reduce((a, r) => a + 1 / r, 0);

export default {
  'R1-SER-004': () => ({ value: 2 + 3 + 5 }),
  'R1-SER-005': () => ({ value: 12 / (4 + 4 + 4) }),
  'R1-SER-006': () => ({ value: (18 / (6 + 3)) * 6 }),
  // Each bulb is half of 6 V / 1.5 A; three of them in series.
  'R1-SER-007': () => ({ value: 6 / (3 * ((6 / 1.5) / 2)) }),
  'R1-PAR-005': () => ({ value: 12 / 6 }),
  'R1-PAR-006': () => ({ value: 12 / 3 + 12 / 6 + 12 / 12 }),
  'R1-PAR-007': () => ({ value: 6 / (5 - 6 / 2) }),
  'R1-SPC-004': () => ({ value: 8 / (2 + par(4, 4)) }),
  'R1-SPC-005': () => ({ value: 8 / (2 + par(4, 4)) / 2 }),
};
