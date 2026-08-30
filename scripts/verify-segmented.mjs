import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { Segmented } from '../dist/segmented.js';

const markup = renderToStaticMarkup(
  createElement(Segmented, {
    'aria-label': 'View',
    classNames: { indicator: 'indicator-slot', item: 'item-slot' },
    defaultValue: 'board',
    name: 'view',
    options: [
      'list',
      { label: 'board', value: 'board' },
      { disabled: true, label: 'timeline', value: 'timeline' },
    ],
    styles: { indicator: { opacity: 0.9 } },
  })
);

assert.match(markup, /role="radiogroup"/);
assert.match(markup, /aria-label="View"/);
assert.match(markup, /data-slot="segmented"/);
assert.match(markup, /data-size="md"/);
assert.match(markup, /data-slot="segmented-indicator"/);
assert.match(markup, /indicator-slot/);
assert.match(markup, /item-slot/);
assert.match(markup, /opacity:0\.9/);
assert.match(markup, /aria-checked="true"[^>]*>.*board/s);
assert.match(markup, /data-disabled=""[^>]*>.*timeline/s);

const blockMarkup = renderToStaticMarkup(
  createElement(Segmented, {
    block: true,
    options: [1, 7, 30],
    orientation: 'vertical',
    size: 'lg',
    value: 7,
  })
);

assert.match(blockMarkup, /data-block="true"/);
assert.match(blockMarkup, /data-orientation="vertical"/);
assert.match(blockMarkup, /data-size="lg"/);
assert.match(blockMarkup, /aria-checked="true"[^>]*>.*7/s);

globalThis.console.log(
  'Verified Segmented radio semantics, controlled and uncontrolled selection, disabled options, semantic slots, sizes, and layouts.'
);
