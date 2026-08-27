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

Show the owning case source beside the live showcase:

````mdx
```tsx title="showcases/example/cases/basic.tsx"
import '@heliannuuthus/ui/styles.css';
import { Example } from '@heliannuuthus/ui';

export default function BasicExample() {
  return <Example />;
}
```
````

All public components follow this structure. Add or change examples directly
in their owning case file and keep both locale pages synchronized.

## Commands

```bash
pnpm --filter @heliannuuthus/ui-docs dev
pnpm --filter @heliannuuthus/ui-docs build
pnpm --filter @heliannuuthus/ui-docs verify:i18n
pnpm --filter @heliannuuthus/ui-docs verify:rspress
```
