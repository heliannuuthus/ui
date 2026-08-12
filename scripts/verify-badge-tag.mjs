import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { Badge, Tag } from '../dist/index.js';

const render = (component, props, children) =>
  renderToStaticMarkup(createElement(component, props, children));

for (const [type, expectedClass] of Object.entries({
  default: 'bg-muted',
  primary: 'bg-primary/10',
  info: 'bg-info/10',
  success: 'bg-success/10',
  warning: 'bg-warning/10',
  error: 'bg-destructive/10',
})) {
  const tag = render(Tag, { type }, 'State');

  assert.match(tag, /^<span\b/);
  assert.match(tag, new RegExp(`data-type="${type}"`));
  assert.match(tag, new RegExp(expectedClass.replace('/', '\\/')));
}

assert.match(render(Tag, undefined, 'Default'), /data-type="default"/);

const anchoredCount = render(
  Badge,
  {
    indicator: 123,
    indicatorLabel: 'More than 99 unread messages',
    max: 99,
    offset: [2, -1],
  },
  createElement('button', { type: 'button' }, 'Inbox')
);
const dot = render(
  Badge,
  { indicator: true, indicatorLabel: 'New notification' },
  'Updates'
);
const zero = render(Badge, { indicator: 0 });
const hidden = render(Badge, { indicator: false }, 'Inbox');
const hiddenByDefault = render(Badge, undefined, 'Inbox');

assert.match(anchoredCount, /^<span\b/);
assert.match(anchoredCount, /relative/);
assert.match(anchoredCount, />99\+<\/sup>/);
assert.match(anchoredCount, /aria-label="More than 99 unread messages"/);
assert.match(anchoredCount, /--badge-offset-x:2px/);
assert.match(anchoredCount, /--badge-offset-y:-1px/);
assert.match(anchoredCount, /\bend-0\b/);
assert.match(anchoredCount, /rtl:translate-x-/);
assert.match(dot, /size-2\.5/);
assert.doesNotMatch(dot, />true<\/sup>/);
assert.match(zero, />0<\/sup>/);
assert.doesNotMatch(zero, /\brelative\b/);
assert.doesNotMatch(hidden, /data-slot="badge-indicator"/);
assert.doesNotMatch(hiddenByDefault, /data-slot="badge-indicator"/);

globalThis.console.log(
  'Verified Tag semantic types and Badge notification rendering.'
);
