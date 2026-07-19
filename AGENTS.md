# Heliannuuthus UI

## Scope

- `src/components/` contains domain-neutral public UI primitives.
- `apps/docs/` is the documentation and component showcase deployed to `ui.heliannuuthus.com`.
- Every public component is imported through an explicit `@heliannuuthus/ui/<component>` subpath.

## Rules

- Treat shadcn/ui as an open-code recipe, not a runtime namespace or compatibility layer.
- Preserve accessible Radix semantics, keyboard interaction, focus visibility, disabled states, and narrow layouts.
- Keep colors and visual decisions in semantic CSS variables; do not add product-domain state to the package.
- Do not introduce Ant Design or an Ant-compatible facade.
- Update the documentation index whenever a public component is added or removed.

## Validation

1. `pnpm type-check`
2. `pnpm lint`
3. `pnpm format:check`
4. `pnpm build`
5. `pnpm pack`
