// Helpers for the Robotics II checkers (Lenz's Law and magnetic force).
// Directions are unit vectors: x to the right (or east), y up the page (or north), z out of the page (or upward).
import { deg } from './lib.js';

const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const same = (a, b) => a.every((x, i) => Math.abs(x - b[i]) < 1e-9);

export const PAGE = {
  'To the right': [1, 0, 0], 'To the left': [-1, 0, 0], Upward: [0, 1, 0], Downward: [0, -1, 0],
  'Out of the page': [0, 0, 1], 'Into the page': [0, 0, -1],
};
const PAGE_KEY = { right: 'To the right', left: 'To the left', up: 'Upward', down: 'Downward', out: 'Out of the page', into: 'Into the page' };
export const COMPASS = {
  East: [1, 0, 0], West: [-1, 0, 0], North: [0, 1, 0], South: [0, -1, 0], Upward: [0, 0, 1], Downward: [0, 0, -1],
};
const lookup = (frame, k) => frame[PAGE_KEY[k]] || frame[k[0].toUpperCase() + k.slice(1)];

// Magnetic force direction F = q v x B; returns the choice label.
export function dir(frame, sign, v, B) {
  let f = cross(lookup(frame, v), lookup(frame, B));
  if (sign === '-') f = f.map((x) => -x);
  const name = Object.keys(frame).find((k) => same(frame[k], f));
  return { choice: name };
}

const AX = { '+x': [1, 0, 0], '-x': [-1, 0, 0], '+y': [0, 1, 0], '-y': [0, -1, 0], '+z': [0, 0, 1], '-z': [0, 0, -1] };
// Same rule on axes; returns the index of the choice that starts with the right axis, such as "$+z$".
export function axes(q, sign, v, B) {
  let f = cross(AX[v], AX[B]);
  if (sign === '-') f = f.map((x) => -x);
  const axis = Object.keys(AX).find((a) => same(AX[a], f));
  return { index: q.choices.findIndex((c) => c.startsWith(`$${axis}$`)) };
}

// Induced current from the direction of the original field through the loop and whether its flux grows.
// An induced field into the page needs a clockwise current (seen from the front).
const induced = (field, change) => {
  const ind = change === 'increasing' ? (field === 'into' ? 'out' : 'into') : field;
  return { choice: ind === 'into' ? 'Clockwise (CW)' : 'Anticlockwise (ACW)' };
};
export const loop = (field, change) => induced(field, change);
// Field of a long straight wire at the loop: B = I x r.
export function wire(cur, side, change) {
  const b = cross(cur === 'up' ? [0, 1, 0] : [0, -1, 0], side === 'right' ? [1, 0, 0] : [-1, 0, 0]);
  return induced(b[2] > 0 ? 'out' : 'into', change);
}
// Concentric loops: the net flux through either loop points the way the driving loop's center field points.
export const conc = (dirn, change) => induced(dirn === 'CW' ? 'into' : 'out', change);
// The same, as a reason: "ACW, since flux out of the page increases".
export function concWhy(dirn, change) {
  const field = dirn === 'CW' ? 'into' : 'out';
  const cw = induced(field, change).choice.startsWith('Clockwise') ? 'CW' : 'ACW';
  return { choice: `${cw}, since flux ${field === 'into' ? 'into' : 'out of'} the page ${change === 'increasing' ? 'increases' : 'decreases'}` };
}
// Bar magnet and coil (coil axis along x, viewer on +z). Returns the current direction on the front of the coil.
export function coil(side, facing, motion) {
  const s = side === 'right' ? 1 : -1;
  const b = facing === 'N' ? -s : s; // field lines leave N and enter S
  const n = motion === 'toward' ? -b : b; // induced field along x
  const front = cross([n, 0, 0], [0, 0, 1]); // current at the front point of a loop whose field is along n
  return { choice: front[1] > 0 ? 'Upward (↑)' : 'Downward (↓)' };
}

export const qvb = (q, v, B, th) => ({ value: q * v * B * Math.sin(deg(th)), abs: 0 });
export const ilb = (I, L, B, th) => ({ value: I * L * B * Math.sin(deg(th)) });
