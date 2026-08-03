# @heliannuuthus/ui

Accessible shadcn-style primitives shared by Heliannuuthus products.

Use named imports from the package root:

```tsx
import { Button, Input, Radio } from '@heliannuuthus/ui';
import './app.css';

<Input.OTP maxLength={6} />
<Radio.Group options={options} />
```

For Vite applications, add the package plugin before React. The default
strategy rewrites JavaScript imports for tree shaking and injects one shared,
deduplicated stylesheet:

```ts
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { heliannuuthusUI } from '@heliannuuthus/ui/vite';

export default defineConfig({
  plugins: [heliannuuthusUI(), react()],
});
```

Semantic token defaults live in a named CSS layer, so unlayered application
styles can override them even when a component is loaded by an asynchronous
route.

The current package integration intentionally targets Vite and requires the
plugin. There are no public component or stylesheet compatibility subpaths.

## Style strategies

The build discovers every public component automatically and emits an
independent ESM and CSS entry for it. `heliannuuthusUI()` supports three style
strategies:

- `global` (default) injects one deduplicated stylesheet. It is predictable for
  applications that use a normal range of components.
- `components` loads the selected component styles and shared theme. It can be
  smaller for narrow selections, but repeated Tailwind utilities may make it
  larger as the selection grows.

```ts
heliannuuthusUI({ styles: 'components' });
```

Component subpaths remain private implementation details. Use static named
imports; namespace imports such as `import * as UI` are rejected by the
plugin.

The generated shared theme has document-wide CSS scope because semantic tokens,
light/dark mode, reset and focus rules must also apply to portals and composed
components.

The package build verifies every public export, both plugin strategies, the
style-free JavaScript root and the packaged component entries.

The package is intentionally domain-neutral. Authentication flows, API calls, routing and product copy stay in Pallas.

The package implements the complete shadcn/ui component catalog for the Radix foundation, including Heliannuuthus-owned recipe exports for Data Table, Date Picker, Form, and Typography.

## Workspace policy

`@heliannuuthus/ui` is the single source of truth for domain-neutral frontend primitives across Heliannuuthus projects. If a product needs a missing base component or a reusable capability, implement and document it here first instead of creating a product-local primitive.

Public APIs target Ant Design-level maturity—consistent naming and defaults, strong TypeScript types, controlled and uncontrolled modes where appropriate, refs, events, sizes, variants, composition, and deliberate extension points—without depending on Ant Design or providing a compatibility facade.
