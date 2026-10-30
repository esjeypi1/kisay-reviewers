// Main settings for the reviewer. Edit these values to change the subjects and how the mock exam works.

// Name of the home page, which lists every reviewer.
export const SITE_NAME = 'KISAY Reviewers';

// Each subject is one reviewer, listed on the home page in this order and opened at #<id> (for example #dagitab).
// Its questions live in src/data/<id>/ (subtopics.json plus one file per domain).
//   name         short name in the top bar
//   title        page heading and browser tab title
//   description  line under the title on the home page
//   icon         icon on the home page (a name from src/lib/icons.js)
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
    description: 'Unofficial. Practice and mock exam.',
    icon: 'bolt',
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
    id: 'brainiac',
    name: 'Brainiac 2026',
    title: 'Brainiac 2026 Reviewer',
    description: 'Biology, Grades 7 to 10.',
    icon: 'leaf',
    tagline: 'Biology, Grades 7 to 10',
    domainLabel: 'Grade',
    passRate: 0.6,
  },
  {
    id: 'robotics-1',
    name: 'Robotics I',
    title: 'Robotics I Reviewer',
    description: 'Grade 9, Weeks 1 to 3.',
    icon: 'chip',
    tagline: 'Grade 9, Weeks 1 to 3',
    domainLabel: 'Week',
    passRate: 0.6,
  },
];

// Choices for "How many questions?" in Practice mode. "all" means every matching item.
export const PRACTICE_COUNTS = [10, 20, 50, 'all'];
