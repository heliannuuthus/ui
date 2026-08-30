import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { Button } from '../dist/button.js';

const actionMarkup = renderToStaticMarkup(
  createElement(Button, { variant: 'link' }, 'Clear')
);

assert.match(actionMarkup, /^<button\b/);
assert.match(actionMarkup, /data-variant="link"/);
assert.match(actionMarkup, /data-size="md"/);

const mediumMarkup = renderToStaticMarkup(
  createElement(Button, { size: 'md' }, 'Medium')
);

assert.match(mediumMarkup, /data-size="md"/);

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

const blockGroupMarkup = renderToStaticMarkup(
  createElement(
    Button.Group,
    { block: true },
    createElement(Button, null, 'Previous'),
    createElement(Button, null, 'Next')
  )
);

assert.match(blockGroupMarkup, /data-slot="button-group"/);
assert.match(blockGroupMarkup, /w-full/);
assert.match(blockGroupMarkup, /data-slot=button\]\]:flex-1/);

globalThis.console.log(
  'Verified the md default size, href-driven anchor rendering, visual variants, native link attributes, disabled links, and block groups.'
);
