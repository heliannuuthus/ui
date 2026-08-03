# @heliannuuthus/ui

Accessible shadcn-style primitives shared by Heliannuuthus products.

Use named imports from the package root. Component styles are included
automatically:

```tsx
import { Button, Input, Radio } from '@heliannuuthus/ui';
import './app.css';

<Input.OTP maxLength={6} />
<Radio.Group options={options} />
```

Load application styles after component imports when they need to replace
semantic tokens or component rules through the normal CSS cascade.

Add the package plugin before React in `vite.config.ts`:

```ts
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { heliannuuthusUI } from '@heliannuuthus/ui/vite';

export default defineConfig({
  plugins: [heliannuuthusUI(), react()],
});
```

## Automatic component bundles

The build discovers every public component automatically and emits an
independent ESM and CSS entry for it. During a Vite build,
`heliannuuthusUI()` rewrites named root imports to private component entries.
The application therefore includes only the selected components, their
component CSS and their real JavaScript dependencies. Shared theme and base
rules are imported by component entries and deduplicated by Vite.

No global stylesheet import or manually maintained consumer import list is
required. Component subpaths are intentionally not public. Use static named
imports; namespace imports such as `import * as UI` are not transformed.

The generated shared theme still has document-wide CSS scope because semantic
tokens, light/dark mode, reset and focus rules must also apply to portals and
composed components. It is not a legacy consumer entry: the first selected
component loads it automatically, additional components reuse it, and
applications can override its semantic variables from their own CSS.

The package build verifies that a transformed root `Button` import produces the
same JavaScript and CSS as its private component entry. The current official
build integration targets Vite.

The package is intentionally domain-neutral. Authentication flows, API calls, routing and product copy stay in Pallas.

The package implements the complete shadcn/ui component catalog for the Radix foundation, including Heliannuuthus-owned recipe exports for Data Table, Date Picker, Form, and Typography.

## Workspace policy

`@heliannuuthus/ui` is the single source of truth for domain-neutral frontend primitives across Heliannuuthus projects. If a product needs a missing base component or a reusable capability, implement and document it here first instead of creating a product-local primitive.

Public APIs target Ant Design-level maturity—consistent naming and defaults, strong TypeScript types, controlled and uncontrolled modes where appropriate, refs, events, sizes, variants, composition, and deliberate extension points—without depending on Ant Design or providing a compatibility facade.
