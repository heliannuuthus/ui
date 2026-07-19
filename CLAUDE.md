# Heliannuuthus UI

Reusable React component library and documentation site for Heliannuuthus products.

## Stack

- React 19 and TypeScript
- shadcn/ui component model
- Radix UI and Base UI primitives
- Tailwind CSS 4 and CVA
- Vite documentation application
- tsup package build

## Commands

```bash
pnpm install
pnpm dev
pnpm type-check
pnpm lint
pnpm build
pnpm pack
```

The npm package is `@heliannuuthus/ui`. Documentation deploys from `apps/docs` to GitHub Pages and uses `ui.heliannuuthus.com` as its custom domain.

## Component ownership and API design

- This is the only domain-neutral component library for the Heliannuuthus workspace. Product repositories consume it through `@heliannuuthus/ui/<component>` and contribute missing primitives here first.
- Keep product data fetching, permissions, routing, domain copy and workflow state outside this package.
- Use Ant Design as the benchmark for API completeness and consistency: stable naming/defaults, strong TypeScript types, controlled/uncontrolled behavior, refs, events, sizes, variants, composition and extensibility.
- Do not depend on Ant Design or implement an Ant compatibility facade. The implementation remains Heliannuuthus-owned and follows shadcn/Radix/Base UI/Tailwind/CVA patterns.
- A new component is incomplete without explicit exports, documentation examples, accessibility states and the full validation sequence.
