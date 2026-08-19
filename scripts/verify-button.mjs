import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { Button } from '../dist/button.js';

const actionMarkup = renderToStaticMarkup(
  createElement(Button, { variant: 'link' }, 'Clear')
);

assert.match(actionMarkup, /^<button\b/);
assert.match(actionMarkup, /data-variant="link"/);

const linkMarkup = renderToStaticMarkup(
  createElement(
    Button,
    {
      download: 'release-notes.pdf',
      href: '/release-notes.pdf',
      rel: 'noreferrer',
      target: '_blank',
      variant: 'outline',
    },
    'Download'
  )
);

assert.match(linkMarkup, /^<a\b/);
assert.match(linkMarkup, /data-variant="outline"/);
assert.match(linkMarkup, /href="\/release-notes.pdf"/);
assert.match(linkMarkup, /target="_blank"/);
assert.match(linkMarkup, /rel="noreferrer"/);
assert.match(linkMarkup, /download="release-notes.pdf"/);

const disabledLinkMarkup = renderToStaticMarkup(
  createElement(Button, { disabled: true, href: '/private' }, 'Private')
);

assert.match(disabledLinkMarkup, /^<a\b/);
assert.doesNotMatch(disabledLinkMarkup, /href=/);
assert.match(disabledLinkMarkup, /aria-disabled="true"/);
assert.match(disabledLinkMarkup, /tabindex="-1"/);

globalThis.console.log(
  'Verified href-driven anchor rendering, visual variants, native link attributes, and disabled links.'
);
