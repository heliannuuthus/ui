# Heliannuuthus UI

## Scope

- `src/components/` contains domain-neutral public UI primitives.
- `apps/docs/` is the documentation and component showcase deployed to `ui.heliannuuthus.com`.
- Documentation uses Rspress 2. Routes live under `apps/docs/docs/{zh,en}/`; do not place pages under the public package `src/components/` tree.
- Component demos live under `apps/docs/showcases/<component-slug>/`. Put each meaningful case in its own `cases/*.tsx` file and compose the complete component display from that directory's `index.tsx`.
- The package and documentation app must remain independently buildable. The docs app may alias the package root to local source, but documentation code must still import public APIs from `@heliannuuthus/ui`.
- Every public component is exported from the `@heliannuuthus/ui` package root.
- The package has exactly two public entries: the component root and
  `./styles.css`. Component modules are private build details.
- The JavaScript root stays free of implicit CSS. Consumers import the static,
  deduplicated stylesheet once at their application root. Do not add
  build-tool-specific integration or runtime style generation.

## Rules

- Treat shadcn/ui as an open-code recipe, not a runtime namespace or compatibility layer.
- Build documentation chrome and examples with public `@heliannuuthus/ui` components. Keep native elements for document semantics, routing, and content structure; do not create a parallel docs-only primitive set.
- Write component documentation directly in bilingual MDX. Do not add a parallel route registry or centralized page shell.
- This repository is the workspace's single source of truth for domain-neutral frontend primitives. Consumers must extend this library instead of creating parallel primitives in product repositories.
- Preserve accessible Radix semantics, keyboard interaction, focus visibility, disabled states, and narrow layouts.
- Keep colors and visual decisions in semantic CSS variables; do not add product-domain state to the package.
- Route cross-cutting appearance, semantic colors, writing direction and component defaults through the root `Provider`. Do not add standalone theme or direction components, parallel providers, or compatibility aliases. Explicit component props must override Provider defaults.
- Benchmark public API quality against Ant Design: consistent prop names and defaults, complete TypeScript types, controlled and uncontrolled state where appropriate, ref forwarding, stable events, sizes, variants, composition, and deliberate extension points.
- Ant Design is an API-design reference only. Do not introduce `antd`, copy its implementation, or create an Ant-compatible facade.
- Do not design a component solely around one current screen. Cover common composition, loading, empty, error and disabled states, long content, accessibility, narrow layouts, and backward-compatible evolution.
- Prefer composable primitives and compound components over boolean-prop proliferation. Expose `className`, semantic slots, `asChild` or equivalent escape hatches only when their contract remains type-safe and predictable.
- `className` and `style` always target the component root. Composite components may additionally expose `classNames` and `styles`, but these maps must be provided together with exactly matching semantic slot keys and must never contain a `root` slot. Do not add flat slot-prefixed props such as `headerClassName`, `contentClassName`, or `itemStyle`.
- When a boolean prop enables a behavior and a `ReactNode` only customizes that same behavior's content, combine them into one `boolean | ReactNode` prop instead of adding a parallel content prop. Use `false` or `undefined` to disable the behavior, `true` to enable its default content, and a `ReactNode` to enable it with custom content. Split the API only when the two values represent independently controllable semantics; for example, prefer `ellipsis?: boolean | ReactNode` over `ellipsis` plus `ellipsisTooltip`.
- List every public prop and component part on its own documentation row. Do not join names, types, or default values with `/`; each row must describe one independently usable API member.
- Every new public component must be added to the root export manifest,
  documentation/example coverage, and a changeset or release note when the
  release workflow requires one.
- Update the documentation index whenever a public component is added or removed.

## Form architecture

- `Field` is the form-library-independent presentation layer. It owns field
  layout, labels, descriptions, errors, grouping and accessible relationships,
  but it does not own form values or validation state.
- `Form` is the integration layer for field registration, validation state,
  submission and binding Heliannuuthus UI data-entry components. Its public
  component must represent the actual HTML `<form>` boundary; do not expose a
  context provider under the ambiguous `Form` name.
- Heliannuuthus UI data-entry components must support controlled and
  uncontrolled use where the underlying interaction permits it. Preserve
  component-appropriate semantics such as `value` for value controls and
  `checked` for boolean controls instead of forcing every control into one
  public prop shape.
- Public controlled-state callbacks use `onChange` consistently, regardless of
  whether the underlying primitive calls its event `onValueChange` or
  `onCheckedChange`. Reserve specific names such as `onOpenChange`,
  `onSearch`, and `onChangeComplete` for genuinely distinct state or lifecycle
  events; primitive-specific callback names remain implementation details.
- Form integration must use a typed, component-owned binding contract so
  `Input`, `Select`, `Switch`, `Checkbox`, `Radio.Group`, `DatePicker` and
  similar controls can be used by `Form.Field` without product code wiring
  library-specific controllers.
- `Form.Field` owns the field name, label, description, required marker,
  validation message and ARIA wiring. Product code must not manually repeat
  these concerns for supported Heliannuuthus UI controls.
- `Form.Field` must inject the standard controlled-component contract into one
  direct user-authored child. Adapt third-party property names and composite
  internals inside a reusable control component instead of expanding
  `Form.Field` with per-library mapping options. Do not infer bindings from
  component display names, DOM inspection or undocumented child shapes.
- Ref forwarding is an optional focus capability, not a value-binding
  requirement. This package targets React 19: function components may receive
  `ref` as a regular prop. Do not add compatibility branches or widen the peer
  range below React 19.
- Keep the binding contract independent of `react-hook-form`. A form engine may
  be used internally, but engine-specific objects such as `Controller`,
  `control` and `UseFormReturn` are not the target product-facing API.
- Do not create per-control public wrappers such as `FormInput`, `FormSelect`
  and `FormSwitch`; extend the common binding contract instead.
- Keep the unified Form implementation, type tests and public documentation in
  sync. Do not reintroduce the provider-based compound API or require consumers
  to render a second nested `<form>`.
- The detailed target contract, compatibility matrix and migration plan live in
  `docs/form-integration.md`. Update that document when changing Form or any
  data-entry component's binding semantics.

## Validation

1. `pnpm type-check`
2. `pnpm lint`
3. `pnpm format:check`
4. `pnpm build`
5. `pnpm pack`
