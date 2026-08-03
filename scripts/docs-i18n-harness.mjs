import assert from 'node:assert/strict';
import { Buffer } from 'node:buffer';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');

async function loadHarnessModule() {
  const result = await build({
    absWorkingDir: packageRoot,
    bundle: true,
    format: 'esm',
    logLevel: 'silent',
    platform: 'node',
    stdin: {
      contents: `
        export {
          componentCatalog,
          componentGroups,
          componentSlug,
        } from './apps/docs/src/component-catalog.ts'
        export {
          componentSearchMetadata,
          localizedComponentMetadata,
        } from './apps/docs/src/component-metadata.ts'
        export { localizedPath } from './apps/docs/src/i18n/paths.ts'
        export {
          defaultLocale,
          htmlLanguage,
          isDocsLocale,
          resources,
          supportedLocales,
        } from './apps/docs/src/i18n/resources.ts'
      `,
      loader: 'ts',
      resolveDir: packageRoot,
      sourcefile: 'docs-i18n-harness-entry.ts',
    },
    write: false,
  });
  const [output] = result.outputFiles;

  assert.ok(output, 'The i18n harness bundle must produce JavaScript.');

  return import(
    `data:text/javascript;base64,${Buffer.from(output.contents).toString('base64')}`
  );
}

function flattenStrings(value, prefix = '') {
  if (typeof value === 'string') return new Map([[prefix, value]]);

  return new Map(
    Object.entries(value).flatMap(([key, child]) => {
      const childPrefix = prefix ? `${prefix}.${key}` : key;
      return [...flattenStrings(child, childPrefix)];
    })
  );
}

function interpolationNames(value) {
  return [...value.matchAll(/\{\{\s*([^},\s]+)[^}]*\}\}/g)]
    .map((match) => match[1])
    .sort();
}

const {
  componentCatalog,
  componentGroups,
  componentSearchMetadata,
  componentSlug,
  defaultLocale,
  htmlLanguage,
  isDocsLocale,
  localizedComponentMetadata,
  localizedPath,
  resources,
  supportedLocales,
} = await loadHarnessModule();

const zhStrings = flattenStrings(resources.zh.common);
const enStrings = flattenStrings(resources.en.common);
const zhKeys = [...zhStrings.keys()].sort();
const enKeys = [...enStrings.keys()].sort();

assert.deepEqual(
  enKeys,
  zhKeys,
  'Chinese and English resources must expose exactly the same leaf keys.'
);

for (const key of zhKeys) {
  const zhValue = zhStrings.get(key);
  const enValue = enStrings.get(key);

  assert.ok(zhValue.trim(), `Chinese translation "${key}" must not be empty.`);
  assert.ok(enValue.trim(), `English translation "${key}" must not be empty.`);
  assert.deepEqual(
    interpolationNames(enValue),
    interpolationNames(zhValue),
    `Interpolation variables must match for "${key}".`
  );
}

assert.deepEqual(
  [...supportedLocales].sort(),
  ['en', 'zh'],
  'The public documentation locales must remain explicit.'
);
assert.equal(defaultLocale, 'zh');
assert.equal(isDocsLocale('zh'), true);
assert.equal(isDocsLocale('en'), true);
assert.equal(isDocsLocale('fr'), false);
assert.equal(htmlLanguage('zh'), 'zh-Hans');
assert.equal(htmlLanguage('en'), 'en');
assert.equal(localizedPath('zh'), '/zh');
assert.equal(
  localizedPath('en', '/components/button'),
  '/en/components/button'
);

const catalogSlugs = componentCatalog.map(componentSlug);
const metadataSlugs = Object.keys(componentSearchMetadata);

assert.equal(
  new Set(catalogSlugs).size,
  catalogSlugs.length,
  'Component catalog slugs must be unique.'
);
assert.deepEqual(
  [...metadataSlugs].sort(),
  [...catalogSlugs].sort(),
  'Every catalog component must have exactly one search metadata entry.'
);

for (const group of componentGroups) {
  assert.ok(
    resources.zh.common.groups[group.key],
    `Component group "${group.key}" needs a Chinese label.`
  );
  assert.ok(
    resources.en.common.groups[group.key],
    `Component group "${group.key}" needs an English label.`
  );
}

for (const slug of catalogSlugs) {
  const [summary, zhAliases, enAliases] = componentSearchMetadata[slug];
  const localized = localizedComponentMetadata(slug, 'en');

  assert.ok(summary.trim(), `"${slug}" needs an English summary.`);
  assert.ok(zhAliases.length > 0, `"${slug}" needs a Chinese search alias.`);
  assert.ok(enAliases.length > 0, `"${slug}" needs an English search alias.`);
  assert.equal(
    new Set(zhAliases).size,
    zhAliases.length,
    `"${slug}" has duplicate Chinese search aliases.`
  );
  assert.equal(
    new Set(enAliases).size,
    enAliases.length,
    `"${slug}" has duplicate English search aliases.`
  );
  assert.equal(localized.summary, summary);
  assert.deepEqual(localized.aliases, enAliases);
  assert.deepEqual(localized.searchText, [summary, ...enAliases]);
}

const documentationFixture = {
  accessibility: ['键盘说明'],
  api: [
    {
      description: '属性说明',
      name: 'value',
      type: 'string',
    },
  ],
  examples: [
    {
      code: '',
      description: '示例说明',
      preview: null,
      title: '示例标题',
    },
  ],
  name: 'Button',
  parts: [{ description: '组成说明', name: 'Button.Icon' }],
  pitfalls: ['避免事项'],
  relatedComponents: [
    {
      description: '相关说明',
      name: 'Toggle',
      slug: 'toggle',
    },
  ],
  semanticDom: {
    description: '语义说明',
    preview: null,
  },
  slug: 'button',
  summary: '组件摘要',
  whenToUse: ['使用场景'],
};
const zhMetadata = localizedComponentMetadata(
  'button',
  'zh',
  documentationFixture
);

for (const searchableText of [
  '组件摘要',
  '使用场景',
  '示例标题',
  '示例说明',
  'Button.Icon',
  '组成说明',
  'Toggle',
  '相关说明',
  '语义说明',
  'value',
  '属性说明',
  'string',
  '键盘说明',
  '避免事项',
]) {
  assert.ok(
    zhMetadata.searchText.includes(searchableText),
    `Structured search must include "${searchableText}".`
  );
}

globalThis.console.log(
  `Verified ${supportedLocales.length} locales, ${zhKeys.length} translation ` +
    `keys, ${catalogSlugs.length} component search entries, and localized paths.`
);
