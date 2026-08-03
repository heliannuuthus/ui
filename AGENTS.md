# Heliannuuthus UI

## Scope

- `src/components/` contains domain-neutral public UI primitives.
- `apps/docs/` is the documentation and component showcase deployed to `ui.heliannuuthus.com`.
- Every public component is exported from the `@heliannuuthus/ui` package root.
- The package root is the only public component entry. `./styles.css` is the
  build-tool-neutral stylesheet entry, and `./vite` is an optional optimization.
  Component subpaths are private build details and may change without
  compatibility guarantees.
- The JavaScript root stays free of implicit CSS. All bundlers can use the root
  plus the shared stylesheet. The optional Vite plugin rewrites static named
  imports to private entries with component-scoped styles for narrow selections.

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
