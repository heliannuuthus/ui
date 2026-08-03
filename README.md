# @heliannuuthus/ui

Accessible shadcn-style primitives shared by Heliannuuthus products.

Import the stylesheet once at the application entry, then use named imports
from the package root:

```tsx
import '@heliannuuthus/ui/styles.css';
import './app.css';

import { Button, Input, Radio } from '@heliannuuthus/ui';

<Input.OTP maxLength={6} />
<Radio.Group options={options} />
```

Load application overrides after `styles.css` so they can replace semantic
tokens or component styles through the normal CSS cascade.

## On-demand JavaScript

The build discovers every public component automatically and emits an
independent ESM entry for it. Keep importing from the package root: application
bundlers remove unused component exports and include only the components and
shared dependencies that the application actually uses. The package build
verifies this behavior against the equivalent component subpath.

Existing explicit subpaths such as `@heliannuuthus/ui/button` remain available
for backwards compatibility; consumers do not need an import transform plugin
or a manually maintained component list. Prefer named imports and avoid
namespace imports such as `import * as UI` when the namespace is passed around
dynamically, because that can prevent a bundler from proving which exports are
unused.

This guarantee applies to JavaScript and TypeScript declarations. The current
stylesheet remains a single compatibility bundle and is not tree-shaken per
component.

## Why `styles.css` is required

Component JavaScript provides markup, behavior and accessible interaction, but
the visual contract is compiled separately. `styles.css` contains:

- the Tailwind utilities used by component source files;
- semantic light and dark theme variables, including colors, typography and
  radii;
- shared base rules such as border, focus, body and cursor behavior;
- component-only selectors, animations and reduced-motion fallbacks.

Without this entry, components may still render and respond to input, but their
layout, theme, focus treatment and motion will be missing or incorrect.

`styles.css` is intentionally a separate compatibility entry and is never
imported by the JavaScript root. Requiring one explicit import avoids hidden
global side effects, prevents repeated runtime style injection, lets the
application control cascade order, and keeps JavaScript tree-shaking independent
from CSS. Import it once per application. Component-scoped style entries can
replace this compatibility bundle later without changing component imports.

The package is intentionally domain-neutral. Authentication flows, API calls, routing and product copy stay in Pallas.

The package implements the complete shadcn/ui component catalog for the Radix foundation, including Heliannuuthus-owned recipe exports for Data Table, Date Picker, Form, and Typography.

## Workspace policy

`@heliannuuthus/ui` is the single source of truth for domain-neutral frontend primitives across Heliannuuthus projects. If a product needs a missing base component or a reusable capability, implement and document it here first instead of creating a product-local primitive.

Public APIs target Ant Design-level maturity—consistent naming and defaults, strong TypeScript types, controlled and uncontrolled modes where appropriate, refs, events, sizes, variants, composition, and deliberate extension points—without depending on Ant Design or providing a compatibility facade.
