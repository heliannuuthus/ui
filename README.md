# @heliannuuthus/ui

Accessible shadcn-style primitives shared by Heliannuuthus products.

Import components through explicit subpaths and load the theme once at the application entry:

```tsx
import '@heliannuuthus/ui/styles.css';
import { Button } from '@heliannuuthus/ui/button';
```

The package is intentionally domain-neutral. Authentication flows, API calls, routing and product copy stay in Pallas.

The package implements the complete shadcn/ui component catalog for the Radix foundation, including Heliannuuthus-owned recipe exports for Data Table, Date Picker, Form, and Typography. Every component is available through an explicit subpath such as `@heliannuuthus/ui/accordion`.

## Workspace policy

`@heliannuuthus/ui` is the single source of truth for domain-neutral frontend primitives across Heliannuuthus projects. If a product needs a missing base component or a reusable capability, implement and document it here first instead of creating a product-local primitive.

Public APIs target Ant Design-level maturity—consistent naming and defaults, strong TypeScript types, controlled and uncontrolled modes where appropriate, refs, events, sizes, variants, composition, and deliberate extension points—without depending on Ant Design or providing a compatibility facade.
