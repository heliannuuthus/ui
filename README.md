# @heliannuuthus/ui

Accessible shadcn-style primitives shared by Heliannuuthus products.

The package works with any modern ESM bundler. Import the shared stylesheet
once at the application entry, then use named imports from the package root:

```tsx
import '@heliannuuthus/ui/styles.css';
import { Button, Input, Radio } from '@heliannuuthus/ui';
import './app.css';

<Input.OTP maxLength={6} />
<Radio.Group options={options} />
```

This integration is independent of the package manager and build tool. Install
with pnpm, npm, Yarn, or Bun, and bundle with Vite, Rollup, Webpack, Rspack,
Parcel, Next.js, or another ESM-aware tool.

The stylesheet contains the complete deduplicated component CSS. Semantic token
defaults live in a named CSS layer, so unlayered application styles can override
them even when a component is loaded by an asynchronous route.

## Optional Vite optimization

Vite applications that use only a narrow selection of components can replace
the shared stylesheet with the optional package plugin. Add it before React and
remove the `@heliannuuthus/ui/styles.css` import:

```ts
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { heliannuuthusUI } from '@heliannuuthus/ui/vite';

export default defineConfig({
  plugins: [heliannuuthusUI(), react()],
});
```

The build discovers every public component automatically and emits an
independent ESM and CSS entry for it. The plugin rewrites static named root
imports to those private entries and automatically loads their styles.
Component-scoped CSS can be smaller for narrow selections, but repeated
Tailwind utilities may make it larger as the selection grows. Applications
using a normal range of components should keep the build-tool-neutral shared
stylesheet instead.

Component subpaths remain private implementation details. The plugin requires
static named imports; namespace imports such as `import * as UI` are rejected.

The generated shared theme has document-wide CSS scope because semantic tokens,
light/dark mode, reset and focus rules must also apply to portals and composed
components.

The package build verifies every public export, the build-tool-neutral root and
stylesheet integration, the optional Vite optimization, and the packaged
component entries.

The package is intentionally domain-neutral. Authentication flows, API calls, routing and product copy stay in Pallas.

The package implements the complete shadcn/ui component catalog for the Radix foundation, including Heliannuuthus-owned recipe exports for Data Table, Date Picker, Form, and Typography.

## Workspace policy

`@heliannuuthus/ui` is the single source of truth for domain-neutral frontend primitives across Heliannuuthus projects. If a product needs a missing base component or a reusable capability, implement and document it here first instead of creating a product-local primitive.

Public APIs target Ant Design-level maturity—consistent naming and defaults, strong TypeScript types, controlled and uncontrolled modes where appropriate, refs, events, sizes, variants, composition, and deliberate extension points—without depending on Ant Design or providing a compatibility facade.
