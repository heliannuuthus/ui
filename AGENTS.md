# Heliannuuthus UI

## Scope

- `src/components/` contains domain-neutral public UI primitives.
- `apps/docs/` is the documentation and component showcase deployed to `ui.heliannuuthus.com`.
- Every public component is exported from the `@heliannuuthus/ui` package root.
- The package root is the only public component entry; do not add component
  subpath or global stylesheet compatibility exports.
- Every generated component entry automatically imports the shared theme and
  its component-scoped CSS. The official Vite plugin rewrites static named root
  imports to those private entries so unused JavaScript and CSS stay out of
  consumer builds.

## Rules

- Treat shadcn/ui as an open-code recipe, not a runtime namespace or compatibility layer.
- This repository is the workspace's single source of truth for domain-neutral frontend primitives. Consumers must extend this library instead of creating parallel primitives in product repositories.
- Preserve accessible Radix semantics, keyboard interaction, focus visibility, disabled states, and narrow layouts.
- Keep colors and visual decisions in semantic CSS variables; do not add product-domain state to the package.
- Benchmark public API quality against Ant Design: consistent prop names and defaults, complete TypeScript types, controlled and uncontrolled state where appropriate, ref forwarding, stable events, sizes, variants, composition, and deliberate extension points.
- Ant Design is an API-design reference only. Do not introduce `antd`, copy its implementation, or create an Ant-compatible facade.
- Do not design a component solely around one current screen. Cover common composition, loading, empty, error and disabled states, long content, accessibility, narrow layouts, and backward-compatible evolution.
- Prefer composable primitives and compound components over boolean-prop proliferation. Expose `className`, semantic slots, `asChild` or equivalent escape hatches only when their contract remains type-safe and predictable.
- Every new public component must be added to the root export manifest,
  documentation/example coverage, and a changeset or release note when the
  release workflow requires one.
- Update the documentation index whenever a public component is added or removed.

## Validation

1. `pnpm type-check`
2. `pnpm lint`
3. `pnpm format:check`
4. `pnpm build`
5. `pnpm pack`
