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
palette. Adding a component without this metadata fails type checking.

Detailed component guidance and demo copy remain part of the documentation
content. Wrap canonical Chinese copy in `docsCopy()` and add the corresponding
English value to `content-translations.ts`. This applies to rendered examples,
API descriptions, accessibility guidance, code samples, placeholders, and
accessible names. Pure implementation refactors, styles, and test-only changes
do not require locale updates unless they change visible behavior or search
terminology.

Run `pnpm --filter @heliannuuthus/ui-docs verify:i18n` to execute the
project-local documentation i18n verifier directly. It rejects missing locale
keys, untranslated content values, uncovered `docsCopy()` source, and
user-facing Chinese literals that bypass localization. It also runs
automatically before every documentation production build. The reusable Agent
workflow lives in the root workspace `ui-docs-harness` skill.
