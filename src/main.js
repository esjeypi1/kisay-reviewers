import '@fontsource-variable/geist';
import '@fontsource-variable/geist-mono';
import 'katex/dist/katex.min.css';
import './styles/main.css';
import { go, isGuarded, setGuard } from './lib/router.js';
import { setSubject, subjectById } from './lib/bank.js';
import { escapeHtml } from './lib/render.js';
import { confirmLeave } from './lib/ui.js';
import { SITE_NAME } from './config.js';
import { home } from './screens/home.js';
import { hub } from './screens/hub.js';

// The link names the reviewer (#dagitab, #brainiac), so a teacher can share a link to one reviewer.
// A link without a known reviewer opens the home page that lists them all.
let shown = null; // id of the open reviewer, or '' for the home page
const linked = () => (subjectById[location.hash.slice(1)] ? location.hash.slice(1) : '');
// On the home page, drop a leftover "#" or unknown "#name" from the address bar.
const cleanUrl = () => {
  if (!shown && location.href.includes('#')) history.replaceState(null, '', location.pathname + location.search);
};

function route() {
  shown = linked();
  const footer = document.querySelector('.footer');
  if (!shown) {
    cleanUrl();
    document.title = SITE_NAME;
    footer.hidden = true;
    go(hub);
    return;
  }
  const s = setSubject(shown);
  document.title = s.title;
  document.querySelector('#brand .brand-text').innerHTML = `${escapeHtml(s.name)} <span class="brand-sub">Reviewer</span>`;
  document.getElementById('brand').setAttribute('aria-label', `${s.title}, go to its home page`);
  footer.hidden = !s.footer;
  footer.querySelector('p').textContent = s.footer || '';
  go(home);
}

window.addEventListener('hashchange', async () => {
  if (linked() === shown) { cleanUrl(); return; }
  if (isGuarded() && !(await confirmLeave())) {
    history.replaceState(null, '', shown ? `#${shown}` : location.pathname + location.search);
    return;
  }
  setGuard(false);
  route();
});

document.getElementById('brand').addEventListener('click', async () => {
  if (isGuarded() && !(await confirmLeave())) return;
  setGuard(false);
  go(home);
});

route();
