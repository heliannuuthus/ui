# Documentation i18n

The documentation site uses `i18next` and `react-i18next`.

- Public routes use the short locale prefixes `/zh` and `/en`.
- The Chinese route sets the document language to `zh-Hans`; the English route
  uses `en`.
- Requests without a locale prefix are redirected to the saved language or the
  browser preference.
- Changing the language preserves the current page, query string, and hash.

## What must be kept in sync

Update the locale resources when navigation, actions, headings, empty states,
or other user-facing interface copy changes. The English resource is checked
against the Chinese resource at compile time, so missing or extra keys fail
type checking.

Every component in `component-catalog.ts` must also have an entry in
`component-metadata.ts`. That entry supplies the English summary and the
Chinese and English search aliases used by the component overview and command
palette. Component display names use the `zhComponentNames` map in the same
catalog, while the canonical catalog name remains the English API name. Adding
a component without either localization entry fails the i18n verifier.

Detailed guidance is authored directly in the bilingual MDX routes. Every
interactive example owns its localized copy in the matching single-case TSX
file; shared canonical translations that a case reuses remain in
`content-translations.ts`. Pure implementation refactors, styles, and test-only
changes do not require locale updates unless they change visible behavior or
search terminology.

Run `pnpm --filter @heliannuuthus/ui-docs verify:i18n` to execute the
project-local documentation i18n verifier directly. It rejects missing locale
keys, incomplete shared translations, catalog gaps, and invalid localized
paths. It also runs automatically before every documentation production build.
The reusable Agent workflow lives in the root workspace `ui-docs-harness`
skill.
