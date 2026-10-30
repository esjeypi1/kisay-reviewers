import '@fontsource-variable/geist';
import '@fontsource-variable/geist-mono';
import 'katex/dist/katex.min.css';
import './styles/main.css';
import { go, isGuarded, setGuard } from './lib/router.js';
import { setSubject, subject } from './lib/bank.js';
import { escapeHtml } from './lib/render.js';
import { confirmLeave } from './lib/ui.js';
import { home } from './screens/home.js';

// The link names the subject tab (#dagitab, #brainiac), so a teacher can share a link to one subject.
function openSubject() {
  const s = setSubject(location.hash.slice(1));
  document.title = s.title;
  document.querySelector('#brand .brand-text').innerHTML = `${escapeHtml(s.name)} <span class="brand-sub">Reviewer</span>`;
  document.getElementById('brand').setAttribute('aria-label', `${s.title}, go to home page`);
  const footer = document.querySelector('.footer');
  footer.hidden = !s.footer;
  footer.querySelector('p').textContent = s.footer || '';
  go(home);
}

window.addEventListener('hashchange', async () => {
  if (location.hash.slice(1) === subject().id) return;
  if (isGuarded() && !(await confirmLeave())) {
    history.replaceState(null, '', `#${subject().id}`);
    return;
  }
  setGuard(false);
  openSubject();
});

document.getElementById('brand').addEventListener('click', async () => {
  if (isGuarded() && !(await confirmLeave())) return;
  setGuard(false);
  go(home);
});

openSubject();
