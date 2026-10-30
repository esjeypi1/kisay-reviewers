import { SUBJECTS as LIST } from '../config.js';

// Each subject has a folder in src/data/ with subtopics.json and one question file per domain.
const metas = import.meta.glob('../data/*/subtopics.json', { eager: true, import: 'default' });
const files = import.meta.glob(['../data/*/*.json', '!../data/*/subtopics.json'], { import: 'default' });

export const SUBJECTS = LIST.map((s) => ({ ...s, domains: metas[`../data/${s.id}/subtopics.json`].domains }));
export const subjectById = Object.fromEntries(SUBJECTS.map((s) => [s.id, s]));
export const domainById = Object.fromEntries(SUBJECTS.flatMap((s) => s.domains).map((d) => [d.id, d]));

// The reviewer (subject) the student is in.
let current = SUBJECTS[0];
export const subject = () => current;
export function setSubject(id) {
  current = subjectById[id] || SUBJECTS[0];
  return current;
}

const cache = {};

// Loads a subject's question files (each is its own small download).
export function loadBank(s = current) {
  cache[s.id] ??= Promise.all(s.domains.map((d) => files[`../data/${s.id}/${d.file}`]())).then((parts) => parts.flat());
  return cache[s.id];
}
