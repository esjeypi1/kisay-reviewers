// Main settings for the reviewer. Edit these values to change the subjects and how the mock exam works.

// Each subject is a tab on the site. Its questions live in src/data/<id>/ (subtopics.json plus one file per domain).
// The first subject opens when the site is visited without a tab in the link.
//   name         tab label
//   title        page heading and browser tab title
//   tagline      line under the heading (subjects with a mock exam show the exam format instead)
//   domainLabel  what one question file is called on the Practice screen
//   footer       note at the bottom of every page (optional)
//   noCalculator shows the "No calculators" note
//   passRate     passing score as a fraction (0.6 means 60%)
//   mock         timed mock exam (optional). split: items per domain, and the numbers must add up to total.
export const SUBJECTS = [
  {
    id: 'dagitab',
    name: 'Dagitab 2026',
    title: 'Dagitab 2026 Reviewer',
    domainLabel: 'Domain',
    footer: 'Unofficial reviewer. Not affiliated with or endorsed by the UP Engineering Radio Guild. Questions are not actual exam items.',
    noCalculator: true,
    passRate: 0.6,
    mock: {
      split: {
        'math-logic': 13,
        'physics-circuits': 13,
        'technical-knowledge': 12,
        'abstract-reasoning': 12,
      },
      total: 50,
      minutes: 60,
    },
  },
  {
    id: 'biology',
    name: 'Biology',
    title: 'Biology Reviewer',
    tagline: 'Grades 7 to 10',
    domainLabel: 'Grade',
    passRate: 0.6,
  },
];

// Choices for "How many questions?" in Practice mode. "all" means every matching item.
export const PRACTICE_COUNTS = [10, 20, 50, 'all'];
