import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { ScrollArea } from '../dist/scroll-area.js';

const configuredMarkup = renderToStaticMarkup(
  createElement(
    ScrollArea,
    {
      orientation: 'both',
      scrollbar: { size: 6, visibility: 'always' },
    },
    'Scrollable content'
  )
);

assert.match(configuredMarkup, /data-slot="scroll-area"/);
assert.match(configuredMarkup, /--scroll-area-scrollbar-size:6px/);
assert.match(configuredMarkup, /data-slot="scroll-area-viewport"/);
assert.equal(
  (configuredMarkup.match(/data-slot="scroll-area-scrollbar"/g) ?? []).length,
  2
);
assert.equal(ScrollArea.Bar, undefined);

const hiddenMarkup = renderToStaticMarkup(
  createElement(
    ScrollArea,
    { scrollbar: { visibility: 'hidden' } },
    'Scrollable content'
  )
);

assert.doesNotMatch(hiddenMarkup, /data-slot="scroll-area-scrollbar"/);
assert.doesNotMatch(hiddenMarkup, /data-slot="scroll-area-thumb"/);

globalThis.console.log(
  'Verified the encapsulated viewport and configurable scrollbar size, visibility, and orientation.'
);
