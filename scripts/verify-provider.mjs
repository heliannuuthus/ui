import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const { Avatar, Button, Card, Provider } = await import('../dist/index.js');

const markup = renderToStaticMarkup(
  createElement(
    Provider,
    {
      appearance: 'dark',
      components: {
        Avatar: { shape: 'square', size: 'sm' },
        Button: { size: 'sm', variant: 'outline' },
        Card: { variant: 'outline' },
      },
      direction: 'rtl',
      theme: {
        colors: { primary: 'blue' },
        darkColors: { primary: 'cyan' },
        radius: '12px',
      },
    },
    createElement(Avatar, { alt: 'Default avatar' }),
    createElement(Avatar, { alt: 'Explicit avatar', shape: 'circle' }),
    createElement(Button, null, 'Default button'),
    createElement(Button, { size: 'lg', variant: 'ghost' }, 'Explicit button'),
    createElement(Card, null, 'Default card'),
    createElement(Card, { variant: 'ghost' }, 'Explicit card')
  )
);

assert.match(markup, /class="dark"/);
assert.match(markup, /data-appearance="dark"/);
assert.match(markup, /data-slot="provider"/);
assert.match(markup, /dir="rtl"/);
assert.match(markup, /--primary:cyan/);
assert.match(markup, /--radius:12px/);
assert.match(markup, /data-shape="square" data-size="sm"/);
assert.match(markup, /data-shape="circle" data-size="sm"/);
assert.match(
  markup,
  /data-slot="button" data-size="sm" data-variant="outline"/
);
assert.match(markup, /data-slot="button" data-size="lg" data-variant="ghost"/);
assert.match(markup, /data-slot="card" data-variant="outline"/);
assert.match(markup, /data-slot="card" data-variant="ghost"/);

globalThis.console.log(
  'Verified Provider theme, appearance, direction, component defaults, and explicit prop precedence.'
);
