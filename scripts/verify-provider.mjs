import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const {
  Alert,
  Attachment,
  Avatar,
  Bubble,
  Button,
  Card,
  Checkbox,
  Input,
  Item,
  Marker,
  Menubar,
  Pagination,
  Progress,
  Provider,
  ScrollArea,
  Slider,
  Spinner,
  Tabs,
  Tag,
  Toggle,
  Typography,
} = await import('../dist/index.js');

const markup = renderToStaticMarkup(
  createElement(
    Provider,
    {
      appearance: 'dark',
      components: {
        Alert: { variant: 'success' },
        Attachment: { size: 'sm' },
        Avatar: { shape: 'square', size: 'sm' },
        Bubble: { variant: 'muted' },
        Button: { size: 'sm', variant: 'outline' },
        Card: { variant: 'outline' },
        Checkbox: { variant: 'task' },
        Input: {
          Number: { size: 'sm' },
          OTP: { variant: 'separated' },
        },
        Item: { size: 'sm', variant: 'muted' },
        Marker: { variant: 'separator' },
        Menubar: { size: 'sm' },
        Pagination: { size: 'sm' },
        Progress: { effect: 'sparkle' },
        ScrollArea: { scrollbar: { size: 'sm', visibility: 'always' } },
        Slider: { effect: 'none' },
        Spinner: { size: 'sm' },
        Tabs: { animation: 'slide', centered: true, variant: 'line' },
        Tag: { type: 'primary' },
        Toggle: { variant: 'outline' },
        Typography: {
          Text: { size: 'sm', tone: 'muted', weight: 'medium' },
        },
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
    createElement(Card, { variant: 'ghost' }, 'Explicit card'),
    createElement(Alert, { title: 'Alert' }),
    createElement(Checkbox, null, 'Checkbox'),
    createElement(Attachment, { title: 'Attachment' }),
    createElement(Bubble, { content: 'Bubble' }),
    createElement(Input.Number, { 'aria-label': 'Count' }),
    createElement(Input.OTP, { maxLength: 2 }),
    createElement(Item, { title: 'Item' }),
    createElement(Marker, { content: 'Marker' }),
    createElement(Menubar, { menus: [] }),
    createElement(Pagination, { pageCount: 2 }),
    createElement(Progress, { value: 40 }),
    createElement(ScrollArea, null, 'Scrollable content'),
    createElement(Slider, { defaultValue: 40 }),
    createElement(Spinner),
    createElement(Spinner, { size: 'lg' }),
    createElement(Tabs, {
      items: [{ content: 'Panel', label: 'Tab', value: 'tab' }],
    }),
    createElement(Tag, null, 'Tag'),
    createElement(Toggle, { 'aria-label': 'Toggle' }),
    createElement(Typography.Text, null, 'Default text'),
    createElement(
      Typography.Text,
      { size: 'lg', tone: 'default' },
      'Explicit text'
    )
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
assert.match(markup, /data-slot="alert" data-variant="success"/);
assert.match(markup, /data-slot="checkbox" data-variant="task"/);
assert.match(markup, /data-slot="attachment" data-state="done" data-size="sm"/);
assert.match(markup, /data-slot="bubble" data-variant="muted"/);
assert.match(markup, /data-size="sm" data-slot="input-number"/);
assert.match(markup, /data-slot="input-otp-group" data-shape="separated"/);
assert.match(
  markup,
  /<div(?=[^>]*data-slot="item")(?=[^>]*data-size="sm")(?=[^>]*data-variant="muted")[^>]*>/
);
assert.match(markup, /data-slot="marker" data-variant="separator"/);
assert.match(markup, /data-slot="menubar" data-size="sm"/);
assert.match(
  markup,
  /<nav(?=[^>]*data-slot="pagination")(?=[^>]*data-size="sm")[^>]*>/
);
assert.match(markup, /data-slot="progress" data-effect="sparkle"/);
assert.match(markup, /data-scrollbar-visibility="always"/);
assert.match(markup, /--scroll-area-scrollbar-size:6px/);
assert.match(
  markup,
  /<div(?=[^>]*data-slot="slider")(?=[^>]*data-effect="none")[^>]*>/
);
assert.match(markup, /data-size="sm" data-slot="spinner"/);
assert.match(markup, /data-size="lg" data-slot="spinner"/);
assert.match(
  markup,
  /<div(?=[^>]*data-slot="tabs-list")(?=[^>]*data-variant="line")[^>]*>/
);
assert.match(markup, /data-slot="tag" data-type="primary"/);
assert.match(markup, /data-slot="toggle" data-variant="outline"/);
assert.match(markup, /data-size="sm" data-tone="muted" data-weight="medium"/);
assert.match(markup, /data-size="lg" data-tone="default" data-weight="medium"/);

globalThis.console.log(
  'Verified Provider theme, appearance, direction, component defaults, and explicit prop precedence.'
);
