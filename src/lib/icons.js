// Small stroke icons (24px grid, 2px stroke) used across screens.
const icon = (body, size = 20) =>
  `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;

export const icons = {
  chevron: (s) => icon('<path d="m9 6 6 6-6 6"/>', s),
  back: (s) => icon('<path d="m15 6-6 6 6 6"/>', s),
  bolt: (s) => icon('<path d="M13.5 2 6 13h5l-1 9 8-12h-5l.5-8z"/>', s),
  chip: (s) => icon('<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>', s),
  leaf: (s) => icon('<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19 13 11"/>', s),
  practice: (s) => icon('<path d="M4 5h11M4 12h11M4 19h7"/><path d="m15 17 2 2 4-4"/>', s),
  clock: (s) => icon('<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2M9.5 2h5"/>', s),
  check: (s) => icon('<path d="m5 12.5 4.5 4.5L19 7.5"/>', s),
  x: (s) => icon('<path d="M6 6l12 12M18 6 6 18"/>', s),
};
