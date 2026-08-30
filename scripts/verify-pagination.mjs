import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { Pagination } from '../dist/pagination.js';

const dataMarkup = renderToStaticMarkup(
  createElement(Pagination, {
    boundaries: 2,
    classNames: { summary: 'summary-slot' },
    current: 3,
    pageSize: 20,
    first: true,
    last: true,
    next: 'Next',
    previous: 'Previous',
    siblings: 2,
    showQuickJumper: { goButton: 'Go' },
    showSizeChanger: {
      getOptionLabel: (pageSize) => `${pageSize} rows`,
      options: [10, 20, 50],
    },
    showTotal: (total, range) => `${range[0]}-${range[1]} / ${total}`,
    styles: { summary: { minWidth: 120 } },
    total: 95,
  })
);

assert.match(dataMarkup, /aria-current="page"[^>]*>3</);
assert.ok(dataMarkup.includes('41-60 / 95'));
assert.match(dataMarkup, /class="[^"]*summary-slot[^"]*"/);
assert.match(dataMarkup, /min-width:120px/);
assert.match(dataMarkup, /data-slot="pagination-page-size"/);
assert.ok(dataMarkup.includes('20 rows'));
assert.match(dataMarkup, /data-slot="pagination-quick-jumper"/);
assert.match(dataMarkup, /flex-nowrap/);
assert.doesNotMatch(dataMarkup, /overflow-x-auto/);
assert.match(dataMarkup, /w-28/);
assert.match(dataMarkup, /data-type="first"/);
assert.match(dataMarkup, /data-type="last"/);

const linkMarkup = renderToStaticMarkup(
  createElement(Pagination, {
    current: 4,
    getItemHref: (page) => `/results?page=${page}`,
    pageCount: 12,
  })
);

assert.match(linkMarkup, /href="\/results\?page=3"/);
assert.match(linkMarkup, /href="\/results\?page=4"/);
assert.match(linkMarkup, /href="\/results\?page=5"/);

const disabledMarkup = renderToStaticMarkup(
  createElement(Pagination, {
    current: 2,
    disabled: true,
    getItemHref: (page) => `/results?page=${page}`,
    pageCount: 3,
  })
);

assert.match(disabledMarkup, /aria-disabled="true"/);
assert.doesNotMatch(disabledMarkup, /href=/);

const simpleMarkup = renderToStaticMarkup(
  createElement(Pagination, {
    defaultCurrent: 6,
    simple: { readOnly: true },
    total: 120,
  })
);

assert.match(simpleMarkup, /data-simple=""/);
assert.match(simpleMarkup, />6<\/span>/);
assert.match(simpleMarkup, /\/ 12/);

const hiddenMarkup = renderToStaticMarkup(
  createElement(Pagination, { hideOnSinglePage: true, pageCount: 1 })
);

assert.equal(hiddenMarkup, '');

globalThis.console.log(
  'Verified controlled and uncontrolled pagination, total-derived pages, links, disabled state, semantic slots, size controls, quick jumping, and simple mode.'
);
