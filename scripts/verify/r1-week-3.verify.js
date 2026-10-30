// Answer checkers for Robotics I Week 3. Each entry re-solves one question (see scripts/verify/index.js).

export default {
  'R1-TYP-002': () => ({ value: 1000 }),
  'R1-TYP-007': () => ({ value: 0.000047 * 1e6 }),
  'R1-TAU-006': () => ({ value: 10e3 * 100e-6 }),
  'R1-TAU-007': () => ({ value: 0.865 * 20 }),
  'R1-TAU-008': () => ({ value: 0.368 * 10, tol: 0.02 }),
};
