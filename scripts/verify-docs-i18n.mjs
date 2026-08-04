import assert from 'node:assert/strict';
import { Buffer } from 'node:buffer';
import { readdir, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from '@babel/parser';
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
          localizedComponentName,
          zhComponentNames,
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
        export {
          englishContentTranslations,
        } from './apps/docs/src/i18n/content-translations.ts'
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
  englishContentTranslations,
  htmlLanguage,
  isDocsLocale,
  localizedComponentName,
  localizedComponentMetadata,
  localizedPath,
  resources,
  supportedLocales,
  zhComponentNames,
} = await loadHarnessModule();

const chinesePattern = /[\u3400-\u9fff]/u;
const contentEntries = Object.entries(englishContentTranslations);

assert.ok(
  contentEntries.length > 0,
  'The documentation content translation catalog must not be empty.'
);
for (const [source, translation] of contentEntries) {
  assert.ok(
    chinesePattern.test(source),
    `Content source "${source}" must contain Chinese copy.`
  );
  assert.ok(
    translation.trim(),
    `English content translation for "${source}" must not be empty.`
  );
  assert.equal(
    chinesePattern.test(translation),
    false,
    `English content translation for "${source}" must not retain Chinese copy.`
  );
}

const docsSourceRoot = resolve(packageRoot, 'apps/docs/src');
const sourceFiles = (await readdir(docsSourceRoot)).filter((file) =>
  /\.(?:ts|tsx)$/.test(file)
);
const contentSourceExclusions = new Set([
  'component-catalog.ts',
  'component-metadata.ts',
]);
const intentionalSourceCopy = new Set(['中文', '导航', '布局']);
const untranslatedNodes = [];
const uncoveredSourceCopy = [];

function normalizeJsxText(value) {
  return value.replace(/\s+/g, ' ').trim();
}

function isInsideDocsCopy(ancestors) {
  return ancestors.some(
    (node) =>
      node.type === 'CallExpression' &&
      node.callee.type === 'Identifier' &&
      node.callee.name === 'docsCopy'
  );
}

function inspectContentNode(node, ancestors, file) {
  if (!node || typeof node !== 'object') return;

  const localized = isInsideDocsCopy(ancestors);
  const values = [];

  if (node.type === 'StringLiteral' && chinesePattern.test(node.value)) {
    values.push(node.value);
  }
  if (node.type === 'JSXText' && chinesePattern.test(node.value)) {
    values.push(normalizeJsxText(node.value));
  }
  if (node.type === 'TemplateLiteral') {
    for (const quasi of node.quasis) {
      const value = (quasi.value.cooked ?? quasi.value.raw).trim();
      if (chinesePattern.test(value)) values.push(value);
    }
  }

  for (const value of values) {
    if (!value || intentionalSourceCopy.has(value)) continue;
    if (!localized) untranslatedNodes.push(`${file}: ${value}`);
    if (!englishContentTranslations[value]) {
      uncoveredSourceCopy.push(`${file}: ${value}`);
    }
  }

  const nextAncestors = [...ancestors, node];
  for (const [key, value] of Object.entries(node)) {
    if (['end', 'extra', 'loc', 'start'].includes(key)) continue;
    if (Array.isArray(value)) {
      value.forEach((child) => inspectContentNode(child, nextAncestors, file));
    } else if (value && typeof value === 'object') {
      inspectContentNode(value, nextAncestors, file);
    }
  }
}

for (const file of sourceFiles) {
  if (contentSourceExclusions.has(file)) continue;
  const source = await readFile(resolve(docsSourceRoot, file), 'utf8');
  const ast = parse(source, {
    plugins: ['jsx', 'typescript'],
    sourceType: 'module',
  });
  inspectContentNode(ast, [], file);
}

assert.deepEqual(
  untranslatedNodes,
  [],
  `User-facing Chinese source copy must use docsCopy:\n${untranslatedNodes.join(
    '\n'
  )}`
);
assert.deepEqual(
  uncoveredSourceCopy,
  [],
  `Localized source copy must have an English translation:\n${uncoveredSourceCopy.join(
    '\n'
  )}`
);

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

assert.deepEqual(
  Object.keys(zhComponentNames).sort(),
  [...componentCatalog].sort(),
  'Every catalog component must have exactly one Chinese display name.'
);

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

for (const componentName of componentCatalog) {
  assert.equal(localizedComponentName(componentName, 'en'), componentName);
  const zhName = localizedComponentName(componentName, 'zh');
  assert.ok(zhName.trim(), `"${componentName}" needs a Chinese display name.`);
  assert.ok(
    chinesePattern.test(zhName),
    `"${componentName}" must use a translated Chinese display name.`
  );
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
    `keys, ${contentEntries.length} content translations, ` +
    `${catalogSlugs.length} component search entries, and localized paths.`
);
