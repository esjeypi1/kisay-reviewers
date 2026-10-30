import { SUBJECTS } from '../lib/bank.js';
import { escapeHtml } from '../lib/render.js';
import { icons } from '../lib/icons.js';
import { SITE_NAME } from '../config.js';

// The site's home page: one row per reviewer. Each row is a link (#dagitab, #brainiac) so it can be shared.
export function hub(root) {
  root.innerHTML = `
  <header class="page-head home">
    <h1>${escapeHtml(SITE_NAME)}</h1>
    <p>Choose a reviewer.</p>
  </header>

  <nav class="panel" aria-label="Reviewers">
    ${SUBJECTS.map((s, i) => `<a class="mode-row row-enter" style="--i:${i}" href="#${s.id}">
      <span class="mode-icon">${icons[s.icon]?.() ?? ''}</span>
      <span class="grow">
        <span class="mode-title">${escapeHtml(s.title)}</span>
        <span class="mode-desc">${escapeHtml(s.description || '')}</span>
      </span>
      <span class="chev">${icons.chevron()}</span>
    </a>`).join('')}
  </nav>

  <p class="note">Free to use. Nothing is saved, so every visit starts fresh.</p>`;
}
