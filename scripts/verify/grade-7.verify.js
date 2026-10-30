// Answer checkers for Brainiac Grade 7. Each entry re-solves one question (see scripts/verify/index.js).

export default {
  // Field of view narrows by the same factor that magnification grows (100x to 400x).
  'G7-MIC-020': () => ({ value: 20 / (400 / 100) }),
  // Gametes with 46 chromosomes would double the number each generation.
  'G7-CREP-020': () => ({ value: (46 + 46) * 2 }),
  // 10% rule: producers to primary, then to secondary consumers.
  'G7-TRO-018': () => ({ value: 50000 * 0.1 * 0.1 }),
  // Fourth trophic level energy divided by each eagle's need.
  'G7-TRO-020': () => ({ value: (1000000 * 0.1 ** 3) / 100 }),
};
