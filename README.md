# @heliannuuthus/ui

Accessible shadcn-style primitives shared by Heliannuuthus products.

Import every public component from the package root and load the theme once at
the application entry:

```tsx
import '@heliannuuthus/ui/styles.css';
import { Button, Input, Radio } from '@heliannuuthus/ui';

<Input.OTP maxLength={6} />
<Radio.Group options={options} />
```

The build discovers every public component automatically and emits an
independent ESM entry for it. Keep importing from the package root: application
bundlers remove unused component exports and include only the components and
shared dependencies that the application actually uses. The package build
verifies this behavior against the equivalent component subpath.

Existing explicit subpaths such as `@heliannuuthus/ui/button` remain available
for backwards compatibility; consumers do not need an import transform plugin
or a manually maintained component list.

`styles.css` is intentionally a separate compatibility entry and is never
imported by the JavaScript root. This keeps JavaScript tree-shaking independent
from CSS side effects and leaves room for component-scoped style entries without
changing component imports.

The package is intentionally domain-neutral. Authentication flows, API calls, routing and product copy stay in Pallas.

The package implements the complete shadcn/ui component catalog for the Radix foundation, including Heliannuuthus-owned recipe exports for Data Table, Date Picker, Form, and Typography.

## Workspace policy

`@heliannuuthus/ui` is the single source of truth for domain-neutral frontend primitives across Heliannuuthus projects. If a product needs a missing base component or a reusable capability, implement and document it here first instead of creating a product-local primitive.

Public APIs target Ant Design-level maturity—consistent naming and defaults, strong TypeScript types, controlled and uncontrolled modes where appropriate, refs, events, sizes, variants, composition, and deliberate extension points—without depending on Ant Design or providing a compatibility facade.
