// Answer checkers for Brainiac Grade 10. Each entry re-solves one question (see scripts/verify/index.js).

export default {
  // Growth rate = (births - deaths) / population, as a percent.
  'G10-POP-023': () => ({ value: ((60 - 20) / 400) * 100 }),
  // Logistic growth is fastest at half the carrying capacity.
  'G10-POP-025': () => ({ value: 800 / 2 }),
};
