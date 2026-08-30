# UI documentation

This app uses Rspress 2 for MDX, routing, search-index generation, and static
build output. The visible documentation shell is implemented in `theme/` with
public `@heliannuuthus/ui` components; it does not render Rspress's default
layout or search interface.

## Authoring a component page

For a component named `Example`, add the following structure:

```text
docs/
  en/components/example.mdx
  zh/components/example.mdx
showcases/example/
  index.tsx
  cases/
    basic.tsx
    controlled.tsx
```

Write explanation and API tables directly in each locale's MDX page. Keep one
meaningful interaction or state in each case file, then compose the page's
complete demo in `showcases/example/index.tsx`. Both MDX pages render the same
showcase index; its visible copy must respond to the current locale.

Cases import only from the public package entries:

```tsx
import '@heliannuuthus/ui/styles.css';
import { Example } from '@heliannuuthus/ui';
```

`showcases/case-layouts.css` only arranges realistic demo scenes around those
components. It must use the package's semantic tokens and must not restyle the
component internals or replace package components with docs-only facades.

The theme-level MDX provider maps headings, paragraphs, prose links, list-item
text, quotes, inline code, separators, and Markdown tables to public
`@heliannuuthus/ui` components. Native `article`, `nav`, `section`, list, and
`pre` elements remain only where they carry document structure with no matching
public primitive. Extend this shared mapping instead of styling a parallel MDX
component implementation.

Pass the owning case sources into the showcase with Rspress's file code block
syntax. `ComponentShowcase` pairs the blocks with cases in order and exposes
each source behind the case card's expand control. Do not copy implementations
into MDX:

````mdx
<ExampleShowcase>

```tsx title="showcases/example/cases/basic.tsx" file="<root>/showcases/example/cases/basic.tsx"

```

</ExampleShowcase>
````

All public components follow this structure. Add or change examples directly
in their owning case file and keep both locale pages synchronized. Do not add a
central preview registry or a compatibility component that looks up examples by
slug and index.

## Commands

```bash
pnpm --filter @heliannuuthus/ui-docs dev
pnpm --filter @heliannuuthus/ui-docs build
pnpm --filter @heliannuuthus/ui-docs verify:i18n
pnpm --filter @heliannuuthus/ui-docs verify:rspress
```
