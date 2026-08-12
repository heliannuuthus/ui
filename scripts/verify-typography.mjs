import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { Typography } from '../dist/typography.js';

const render = (component, props, children) =>
  renderToStaticMarkup(createElement(component, props, children));

assert.equal(typeof Typography, 'object');
assert.deepEqual(Object.keys(Typography).sort(), [
  'Blockquote',
  'Code',
  'Text',
  'Title',
]);

const levelOneTitle = render(Typography.Title, undefined, 'Release notes');
const levelSixTitle = render(Typography.Title, { level: 6 }, 'Details');

assert.match(levelOneTitle, /^<h1\b/);
assert.match(levelOneTitle, /text-4xl/);
assert.match(levelSixTitle, /^<h6\b/);
assert.match(levelSixTitle, /text-base/);

const defaultText = render(Typography.Text, undefined, 'Inline text');
const paragraphText = render(
  Typography.Text,
  {
    as: 'p',
    size: 'xl',
    tone: 'muted',
    weight: 'semibold',
  },
  'Introduction'
);

assert.match(defaultText, /^<span\b/);
assert.match(defaultText, /text-base leading-7/);
assert.doesNotMatch(defaultText, /\bmt-/);
assert.match(paragraphText, /^<p\b/);
assert.match(paragraphText, /text-xl leading-8/);
assert.match(paragraphText, /text-muted-foreground/);
assert.match(paragraphText, /font-semibold/);

const quotation = render(
  Typography.Blockquote,
  { cite: 'https://example.com/source' },
  'Cited content'
);
const code = render(Typography.Code, undefined, 'pnpm build');

assert.match(quotation, /^<blockquote\b/);
assert.match(quotation, /cite="https:\/\/example.com\/source"/);
assert.match(code, /^<code\b/);

globalThis.console.log(
  'Verified Typography.Title, Text, Blockquote, and Code semantics and styles.'
);
