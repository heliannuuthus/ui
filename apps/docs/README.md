# UI documentation

This app uses Rspress 2 for MDX, routing, search-index generation, and static
build output. The visible documentation shell is implemented in `theme/` with
public `@heliannuuthus/ui` components; it does not render Rspress's default
layout or search interface.

## Authoring a component page

For a component named `Example`, add the following structure:

```text
docs/
  en/components/example.mdx
  zh/components/example.mdx
showcases/example/
  index.tsx
  cases/
    basic.tsx
    controlled.tsx
```

Write explanation and API tables directly in each locale's MDX page. Keep one
meaningful interaction or state in each case file, then compose the page's
complete demo in `showcases/example/index.tsx`. Both MDX pages render the same
showcase index; its visible copy must respond to the current locale.

Cases import only from the public package entries:

```tsx
import '@heliannuuthus/ui/styles.css';
import { Example } from '@heliannuuthus/ui';
```

`showcases/case-layouts.css` only arranges realistic demo scenes around those
components. It must use the package's semantic tokens and must not restyle the
component internals or replace package components with docs-only facades.

The theme-level MDX provider maps headings, paragraphs, prose links, list-item
text, quotes, inline code, separators, and Markdown tables to public
`@heliannuuthus/ui` components. Native `article`, `nav`, `section`, list, and
`pre` elements remain only where they carry document structure with no matching
public primitive. Extend this shared mapping instead of styling a parallel MDX
component implementation.

MDX prose carries explicit `docs-mdx-*` classes for headings, paragraphs,
links, lists, code, quotes, and tables. Scope prose typography to these
markers so embedded public components keep their own spacing, colors,
and alignment. Table alignment remains owned by the public Table components.
Sources: `theme/mdx-content.tsx:20` and `theme/theme.css:389`.

API tables render every explicitly authored row, including native attributes,
accessible relationships, refs, and root styling. Keep one API member per row;
do not hide documented props in the shared renderer. Type references may open
their declarations and member descriptions in a popover.

Theme exports and MDX mappings are runtime entry points. In particular,
Rspress consumes `Callout` from `theme/index.tsx`, while
`remark-ui-directives.ts` injects the `DocsAdmonition`, `DocsCollapse`,
`DocsHint`, `DocsTab`, and `DocsTabs` mappings. Keep these registrations when
checking for unused private components, even without direct MDX imports.

Pass the owning case sources into the showcase with Rspress's file code block
syntax. `ComponentShowcase` pairs the blocks with cases in order and exposes
each source behind the case card's expand control. Do not copy implementations
into MDX:

````mdx
<ExampleShowcase>

```tsx title="showcases/example/cases/basic.tsx" file="<root>/showcases/example/cases/basic.tsx"

```

</ExampleShowcase>
````

All public components follow this structure. Add or change examples directly
in their owning case file and keep both locale pages synchronized. Do not add a
central preview registry or a compatibility component that looks up examples by
slug and index.

## 顶部导航

顶部导航在离开页面顶部后随下滑收起，随上滑恢复；累计 8px 的方向位移用于过滤轻微滚动抖动。回到顶部、键盘焦点进入导航、展开外观菜单或移动导航时保持显示。

左右目录与组件总览搜索栏同步调整顶部偏移，导航收起后不预留空白。键盘聚焦会立即恢复导航，避免浏览器滚动页面寻找屏外控件；减少动态效果偏好会关闭这些过渡。

实现引用：`theme/layout.tsx:153`、`theme/layout.tsx:269`、`theme/layout.tsx:283`、`theme/theme.css:80`、`theme/theme.css:128`、`theme/theme.css:1247`、`src/pages/pages.css:76`。

## Commands

```bash
pnpm --filter @heliannuuthus/ui-docs dev
pnpm --filter @heliannuuthus/ui-docs build
pnpm --filter @heliannuuthus/ui-docs verify:i18n
pnpm --filter @heliannuuthus/ui-docs verify:rspress
```
