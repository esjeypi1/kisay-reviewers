// Answer checkers for Brainiac Grade 8. Each entry re-solves one question (see scripts/verify/index.js).

export default {
  // Tt x Tt gives TT : Tt : tt = 1 : 2 : 1; among tall (TT + Tt), Tt is 2 of 3.
  'G8-HER-025': () => ({ value: 2 / (1 + 2) }),
};
