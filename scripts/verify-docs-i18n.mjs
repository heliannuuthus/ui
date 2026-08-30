import assert from 'node:assert/strict';
import { Buffer } from 'node:buffer';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const loadDocsData = async () => {
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
          localizedComponentName,
          zhComponentNames,
        } from './apps/docs/src/component-catalog.ts'
        export { componentSearchMetadata } from './apps/docs/src/component-metadata.ts'
        export { localizedPath } from './apps/docs/src/i18n/paths.ts'
        export {
          defaultLocale,
          htmlLanguage,
          isDocsLocale,
          resources,
          supportedLocales,
        } from './apps/docs/src/i18n/resources.ts'
        export {
          englishContentTranslations,
        } from './apps/docs/src/i18n/content-translations.ts'
        export {
          comparePropertyNames,
          orderApiProperties,
          orderPropertyEntries,
          qualifiedApiPropertyName,
        } from './apps/docs/src/api-property-order.ts'
      `,
      loader: 'ts',
      resolveDir: packageRoot,
      sourcefile: 'verify-docs-i18n-entry.ts',
    },
    write: false,
  });
  const [output] = result.outputFiles;
  assert.ok(output, 'The i18n verifier bundle must produce JavaScript.');
  return import(
    `data:text/javascript;base64,${Buffer.from(output.contents).toString('base64')}`
  );
};

const flattenStrings = (value, prefix = '') => {
  if (typeof value === 'string') return new Map([[prefix, value]]);
  return new Map(
    Object.entries(value).flatMap(([key, child]) => {
      const childPrefix = prefix ? `${prefix}.${key}` : key;
      return [...flattenStrings(child, childPrefix)];
    })
  );
};

const interpolationNames = (value) =>
  [...value.matchAll(/\{\{\s*([^},\s]+)[^}]*\}\}/g)]
    .map((match) => match[1])
    .sort();

const {
  comparePropertyNames,
  componentCatalog,
  componentGroups,
  componentSearchMetadata,
  componentSlug,
  defaultLocale,
  englishContentTranslations,
  htmlLanguage,
  isDocsLocale,
  localizedComponentName,
  localizedPath,
  orderApiProperties,
  orderPropertyEntries,
  qualifiedApiPropertyName,
  resources,
  supportedLocales,
  zhComponentNames,
} = await loadDocsData();

const apiOrderFixture = [
  { component: 'Demo', name: 'style' },
  { component: 'Demo', name: 'onChange' },
  { component: 'Demo', name: 'defaultValue' },
  { component: 'Demo', name: 'className' },
  { component: 'Demo', name: 'value' },
  { component: 'Demo', name: 'items', required: true },
  { component: 'Demo', name: 'ref' },
  { component: 'Demo', name: 'styles' },
  { component: 'Demo', name: 'disabled' },
  { component: 'Demo', name: 'classNames' },
];
const orderedApiFixtureNames = orderApiProperties(apiOrderFixture, 'Demo').map(
  qualifiedApiPropertyName
);

assert.deepEqual(orderedApiFixtureNames, [
  'Demo.items',
  'Demo.disabled',
  'Demo.value',
  'Demo.defaultValue',
  'Demo.onChange',
  'Demo.ref',
  'Demo.classNames',
  'Demo.styles',
  'Demo.className',
  'Demo.style',
]);
assert.ok(comparePropertyNames('disabled', 'onChange') < 0);
assert.deepEqual(
  orderPropertyEntries(
    Object.fromEntries(
      [...orderedApiFixtureNames].reverse().map((name) => [name, true])
    ),
    orderedApiFixtureNames
  ).map(([name]) => name),
  orderedApiFixtureNames
);

const chinesePattern = /[\u3400-\u9fff]/u;
const contentEntries = Object.entries(englishContentTranslations);
assert.ok(contentEntries.length > 0, 'Content translations must not be empty.');
for (const [source, translation] of contentEntries) {
  assert.ok(chinesePattern.test(source), `"${source}" must contain Chinese.`);
  assert.ok(translation.trim(), `"${source}" needs an English translation.`);
  assert.doesNotMatch(
    translation,
    chinesePattern,
    `The English translation for "${source}" retains Chinese copy.`
  );
}

const zhStrings = flattenStrings(resources.zh.common);
const enStrings = flattenStrings(resources.en.common);
const zhKeys = [...zhStrings.keys()].sort();
assert.deepEqual([...enStrings.keys()].sort(), zhKeys);
for (const key of zhKeys) {
  const zhValue = zhStrings.get(key);
  const enValue = enStrings.get(key);
  assert.ok(zhValue.trim(), `Chinese translation "${key}" must not be empty.`);
  assert.ok(enValue.trim(), `English translation "${key}" must not be empty.`);
  assert.deepEqual(interpolationNames(enValue), interpolationNames(zhValue));
}

assert.deepEqual([...supportedLocales].sort(), ['en', 'zh']);
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
assert.equal(new Set(catalogSlugs).size, catalogSlugs.length);
assert.deepEqual(
  Object.keys(componentSearchMetadata).sort(),
  [...catalogSlugs].sort()
);
assert.deepEqual(
  Object.keys(zhComponentNames).sort(),
  [...componentCatalog].sort()
);

for (const group of componentGroups) {
  assert.ok(resources.zh.common.groups[group.key]);
  assert.ok(resources.en.common.groups[group.key]);
}

for (const componentName of componentCatalog) {
  assert.equal(localizedComponentName(componentName, 'en'), componentName);
  assert.match(localizedComponentName(componentName, 'zh'), chinesePattern);
}

for (const slug of catalogSlugs) {
  const [summary, zhAliases, enAliases] = componentSearchMetadata[slug];
  assert.ok(summary.trim(), `"${slug}" needs an English summary.`);
  assert.ok(zhAliases.length > 0, `"${slug}" needs Chinese search aliases.`);
  assert.ok(enAliases.length > 0, `"${slug}" needs English search aliases.`);
  assert.equal(new Set(zhAliases).size, zhAliases.length);
  assert.equal(new Set(enAliases).size, enAliases.length);
}

globalThis.console.log(
  `Verified ${supportedLocales.length} locales, ${zhKeys.length} translation ` +
    `keys, ${contentEntries.length} content translations, ${catalogSlugs.length} ` +
    'component metadata entries, and localized paths.'
);
