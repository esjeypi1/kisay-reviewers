import { go } from '../lib/router.js';
import { icons } from '../lib/icons.js';
import { SUBJECTS, subject } from '../lib/bank.js';
import { escapeHtml } from '../lib/render.js';
import { practiceSetup } from './practice-setup.js';
import { mockIntro } from './mock-intro.js';

export function home(root) {
  const s = subject();
  const { mock } = s;
  const sub = mock
    ? `<span class="num">${mock.total}</span> items<span class="dot-sep">&middot;</span><span class="num">${mock.minutes}</span> minutes<span class="dot-sep">&middot;</span><span class="num">${Math.round(s.passRate * 100)}%</span> to pass`
    : escapeHtml(s.tagline || '');

  root.innerHTML = `
  ${SUBJECTS.length > 1 ? `<nav class="tabs" aria-label="Subjects">
    ${SUBJECTS.map((t) => `<a class="tab" href="#${t.id}"${t === s ? ' aria-current="page"' : ''}>${escapeHtml(t.name)}</a>`).join('')}
  </nav>` : ''}

  <header class="page-head home">
    <h1>${escapeHtml(s.title)}</h1>
    ${sub ? `<p>${sub}</p>` : ''}
  </header>

  <nav class="panel" aria-label="Choose a mode">
    <button class="mode-row row-enter" style="--i:0" id="go-practice" type="button">
      <span class="mode-icon">${icons.practice()}</span>
      <span class="grow">
        <span class="mode-title">Practice</span>
        <span class="mode-desc">No timer. Pick a topic and learn from each answer.</span>
      </span>
      <span class="chev">${icons.chevron()}</span>
    </button>
    ${mock ? `<button class="mode-row row-enter" style="--i:1" id="go-mock" type="button">
      <span class="mode-icon">${icons.clock()}</span>
      <span class="grow">
        <span class="mode-title">Mock Exam</span>
        <span class="mode-desc">${mock.total} items, ${mock.minutes} minutes, just like the real one.</span>
      </span>
      <span class="chev">${icons.chevron()}</span>
    </button>` : ''}
  </nav>

  <p class="note">${s.noCalculator ? 'No calculators. ' : ''}Nothing is saved, so every visit starts fresh.</p>`;

  root.querySelector('#go-practice').addEventListener('click', () => go(practiceSetup));
  root.querySelector('#go-mock')?.addEventListener('click', () => go(mockIntro));
}
