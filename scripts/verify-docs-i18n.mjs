import assert from 'node:assert/strict';
import { Buffer } from 'node:buffer';
import { readdir, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from '@babel/parser';
import { build } from 'esbuild';

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const loadHarnessModule = async () => {
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
        export {
          componentDocumentation,
        } from './apps/docs/src/component-docs.tsx'
        export {
          comparePropertyNames,
          orderApiProperties,
          orderPropertyEntries,
          qualifiedApiPropertyName,
        } from './apps/docs/src/api-property-order.ts'
        export {
          apiTypeDefinitionReference,
          apiTypeReferences,
          createApiTypeDefinitions,
          isCustomApiTypeReference,
        } from './apps/docs/src/api-type-definitions.ts'
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

const interpolationNames = (value) => {
  return [...value.matchAll(/\{\{\s*([^},\s]+)[^}]*\}\}/g)]
    .map((match) => match[1])
    .sort();
};

const createCasesFromAxes = (axes) => {
  return axes.reduce(
    (cases, axis) =>
      cases.flatMap((harnessCase) => {
        const defaultValue = axis.defaultValue ?? axis.options[0]?.value ?? '';
        return axis.options.map((option) => ({
          isDefault: harnessCase.isDefault && option.value === defaultValue,
          label: [...harnessCase.labels, option.label].join(' · '),
          labels: [...harnessCase.labels, option.label],
          properties: {
            ...harnessCase.properties,
            ...(axis.property === false
              ? {}
              : { [axis.property ?? axis.name]: option.value }),
            ...option.properties,
          },
          values: { ...harnessCase.values, [axis.name]: option.value },
        }));
      }),
    [{ isDefault: true, labels: [], properties: {}, values: {} }]
  );
};

const caseCoverageExemptPropertyNames = new Set([
  'autoComplete',
  'autoFocus',
  'children',
  'className',
  'containerRef',
  'form',
  'id',
  'inputMode',
  'inputRef',
  'name',
  'onBlur',
  'onFocus',
  'readOnly',
  'ref',
  'required',
  'style',
]);

const requiresCaseCoverage = (qualifiedName) => {
  const propertyName = qualifiedName.split('.').at(-1);
  return !caseCoverageExemptPropertyNames.has(propertyName);
};

const jsxElementName = (node) => {
  if (node.type === 'JSXIdentifier') return node.name;
  if (node.type !== 'JSXMemberExpression') return '';

  const object = jsxElementName(node.object);
  const property = jsxElementName(node.property);
  return object && property ? `${object}.${property}` : '';
};

const collectObjectPropertyNames = (node, names = new Set()) => {
  if (!node || typeof node !== 'object') return names;

  if (node.type === 'ObjectProperty' || node.type === 'ObjectMethod') {
    if (!node.computed) {
      if (node.key.type === 'Identifier') names.add(node.key.name);
      if (node.key.type === 'StringLiteral') names.add(node.key.value);
    }
  }

  for (const [key, value] of Object.entries(node)) {
    if (['end', 'extra', 'loc', 'start'].includes(key)) continue;
    if (Array.isArray(value)) {
      value.forEach((child) => collectObjectPropertyNames(child, names));
    } else if (value && typeof value === 'object') {
      collectObjectPropertyNames(value, names);
    }
  }

  return names;
};

const openingTags = (source) => {
  const tags = [];
  const tagPattern = /<([A-Z][A-Za-z0-9_.]*)\b/g;
  let match;

  while ((match = tagPattern.exec(source)) != null) {
    let braces = 0;
    let quote = '';
    let escaped = false;
    let end = match.index + match[0].length;

    for (; end < source.length; end += 1) {
      const character = source[end];

      if (escaped) {
        escaped = false;
        continue;
      }
      if (quote) {
        if (character === '\\') escaped = true;
        if (character === quote) quote = '';
        continue;
      }
      if (character === '"' || character === "'" || character === '`') {
        quote = character;
        continue;
      }
      if (character === '{') braces += 1;
      if (character === '}') braces = Math.max(0, braces - 1);
      if (character === '>' && braces === 0) break;
    }

    tags.push({
      component: match[1],
      source: source.slice(match.index, end + 1),
    });
    tagPattern.lastIndex = end + 1;
  }

  return tags;
};

const stripAttributeValues = (source) => {
  let braces = 0;
  let quote = '';
  let escaped = false;

  return [...source]
    .map((character) => {
      if (escaped) {
        escaped = false;
        return ' ';
      }
      if (quote) {
        if (character === '\\') escaped = true;
        if (character === quote) quote = '';
        return ' ';
      }
      if (character === '"' || character === "'" || character === '`') {
        quote = character;
        return ' ';
      }
      if (character === '{') {
        braces += 1;
        return ' ';
      }
      if (character === '}') {
        braces = Math.max(0, braces - 1);
        return ' ';
      }
      return braces > 0 ? ' ' : character;
    })
    .join('');
};

const exampleCodeCoverage = (documentation, example, allowedApiNames) => {
  const covered = new Set();
  const rootComponent = documentation.name.replaceAll(' ', '');
  const rootComponents = new Set([
    rootComponent,
    ...(documentation.slug === 'input-number' ? ['Input.Number'] : []),
  ]);
  const apiByName = new Map(
    documentation.api.map((property) => [
      property.component
        ? `${property.component}.${property.name}`
        : property.name,
      property,
    ])
  );
  const apiComponents = new Set(
    documentation.api
      .map((property) => property.component)
      .filter((component) => component != null)
  );
  const typeReferencesComponent = (type, component) => {
    const typeNames = new Set([component, component.replaceAll('.', '')]);

    return [...typeNames].some((typeName) =>
      new RegExp(
        `(?:^|[^A-Za-z0-9_$])${typeName.replaceAll('.', '\\.')}(?:[^A-Za-z0-9_$]|$)`
      ).test(type ?? '')
    );
  };
  const qualifiedAttributeName = (component, propertyName) => {
    const rootName = rootComponents.has(component)
      ? propertyName
      : `${component}.${propertyName}`;

    if (allowedApiNames.has(rootName)) return rootName;

    const explicitComponentName = `${component}.${propertyName}`;
    return allowedApiNames.has(explicitComponentName)
      ? explicitComponentName
      : rootName;
  };
  let ast;
  const objectBindings = new Map();
  const normalizedCode = example.code.replace(/\n\n(?=<[A-Z])/g, ';\n\n');

  for (const tag of openingTags(example.code)) {
    const tagSource = stripAttributeValues(tag.source);
    for (const qualifiedName of allowedApiNames) {
      const propertyName = qualifiedName.slice(
        qualifiedName.lastIndexOf('.') + 1
      );
      if (propertyName.includes('.')) continue;
      if (
        qualifiedAttributeName(tag.component, propertyName) !== qualifiedName
      ) {
        continue;
      }

      const propertyPattern = new RegExp(
        `(?:^|\\s)${propertyName.replaceAll('-', '\\-')}(?=\\s*(?:=|/?>|[A-Za-z_:]))`
      );
      if (propertyPattern.test(tagSource)) covered.add(qualifiedName);
    }
  }

  try {
    ast = parse(normalizedCode, {
      errorRecovery: true,
      plugins: ['jsx', 'typescript'],
      sourceType: 'module',
    });
  } catch {
    const fragmentBody = normalizedCode.replace(/^\s*import[^\n]*\n/gm, '');

    try {
      ast = parse(`<>${fragmentBody}</>`, {
        errorRecovery: true,
        plugins: ['jsx', 'typescript'],
        sourceType: 'module',
      });
    } catch {
      ast = undefined;
    }
  }

  const inspect = (node) => {
    if (!node || typeof node !== 'object') return;

    if (node.type === 'JSXOpeningElement') {
      const component = jsxElementName(node.name);

      for (const attribute of node.attributes) {
        if (attribute.type !== 'JSXAttribute') continue;
        if (attribute.name.type !== 'JSXIdentifier') continue;

        const propertyName = attribute.name.name;
        const qualifiedName = qualifiedAttributeName(component, propertyName);
        if (!allowedApiNames.has(qualifiedName)) continue;

        covered.add(qualifiedName);
        const property = apiByName.get(qualifiedName);
        const referencedTypeGroups = new Set(
          [...apiComponents].filter((name) =>
            typeReferencesComponent(property?.type, name)
          )
        );
        let previousSize = -1;
        while (previousSize !== referencedTypeGroups.size) {
          previousSize = referencedTypeGroups.size;
          for (const group of referencedTypeGroups) {
            for (const groupProperty of documentation.api.filter(
              (candidate) => candidate.component === group
            )) {
              for (const candidateGroup of apiComponents) {
                if (
                  typeReferencesComponent(groupProperty.type, candidateGroup)
                ) {
                  referencedTypeGroups.add(candidateGroup);
                }
              }
            }
          }
        }
        const expression =
          attribute.value?.type === 'JSXExpressionContainer'
            ? attribute.value.expression
            : undefined;
        const objectPropertyNames =
          expression?.type === 'Identifier' &&
          objectBindings.has(expression.name)
            ? objectBindings.get(expression.name)
            : collectObjectPropertyNames(expression);

        for (const group of referencedTypeGroups) {
          for (const nestedName of objectPropertyNames) {
            const nestedQualifiedName = `${group}.${nestedName}`;
            if (allowedApiNames.has(nestedQualifiedName)) {
              covered.add(nestedQualifiedName);
            }
          }
        }
      }
    }

    for (const [key, value] of Object.entries(node)) {
      if (['end', 'extra', 'loc', 'start'].includes(key)) continue;
      if (Array.isArray(value)) {
        value.forEach(inspect);
      } else if (value && typeof value === 'object') {
        inspect(value);
      }
    }
  };

  const collectBindings = (node) => {
    if (!node || typeof node !== 'object') return;

    if (
      node.type === 'VariableDeclarator' &&
      node.id?.type === 'Identifier' &&
      node.init
    ) {
      objectBindings.set(node.id.name, collectObjectPropertyNames(node.init));
    }

    for (const [key, value] of Object.entries(node)) {
      if (['end', 'extra', 'loc', 'start'].includes(key)) continue;
      if (Array.isArray(value)) value.forEach(collectBindings);
      else if (value && typeof value === 'object') collectBindings(value);
    }
  };

  if (ast) {
    collectBindings(ast);
    inspect(ast);
  }

  if (documentation.semanticDom) {
    for (const name of allowedApiNames) {
      if (name === 'classNames' || name === 'styles') {
        covered.add(name);
        continue;
      }

      const component = name.slice(0, name.lastIndexOf('.'));
      if (/(?:ClassNames|Styles)$/.test(component)) covered.add(name);
    }
  }

  return covered;
};

globalThis.window = {
  location: { pathname: '/zh' },
  localStorage: {
    getItem: () => null,
    setItem: () => undefined,
  },
};
const {
  apiTypeDefinitionReference,
  apiTypeReferences,
  componentCatalog,
  componentGroups,
  componentDocumentation,
  componentSearchMetadata,
  componentSlug,
  comparePropertyNames,
  createApiTypeDefinitions,
  defaultLocale,
  englishContentTranslations,
  htmlLanguage,
  isCustomApiTypeReference,
  isDocsLocale,
  localizedComponentName,
  localizedComponentMetadata,
  localizedPath,
  orderApiProperties,
  orderPropertyEntries,
  qualifiedApiPropertyName,
  resources,
  supportedLocales,
  zhComponentNames,
} = await loadHarnessModule();

const chinesePattern = /[\u3400-\u9fff]/u;
const contentEntries = Object.entries(englishContentTranslations);

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
  orderedApiFixtureNames,
  'Case properties must follow the same order as the API table.'
);

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
const groupedDocumentationNames = [];
const documentationCaseSources = [];

const normalizeJsxText = (value) => {
  return value.replace(/\s+/g, ' ').trim();
};

const isInsideDocsCopy = (ancestors) => {
  return ancestors.some(
    (node) =>
      node.type === 'CallExpression' &&
      node.callee.type === 'Identifier' &&
      node.callee.name === 'docsCopy'
  );
};

const inspectContentNode = (node, ancestors, file) => {
  if (!node || typeof node !== 'object') return;

  if (
    node.type === 'ObjectProperty' &&
    node.computed === false &&
    node.key.type === 'Identifier' &&
    node.key.name === 'name' &&
    node.value.type === 'StringLiteral' &&
    node.value.value.includes(' / ')
  ) {
    groupedDocumentationNames.push(`${file}: ${node.value.value}`);
  }

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
};

for (const file of sourceFiles) {
  if (contentSourceExclusions.has(file)) continue;
  const source = await readFile(resolve(docsSourceRoot, file), 'utf8');
  if (file === 'component-docs.tsx' || /(?:^|-)previews?\.tsx$/.test(file)) {
    documentationCaseSources.push(source);
  }
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
assert.deepEqual(
  groupedDocumentationNames,
  [],
  `Documentation rows must describe one API member at a time:\n${groupedDocumentationNames.join(
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

const documentationSlugs = Object.keys(componentDocumentation);
assert.deepEqual(
  [...documentationSlugs].sort(),
  [...catalogSlugs].sort(),
  'Every catalog component must have exactly one documentation object.'
);

const missingCaseCoverage = {};

for (const [slug, documentation] of Object.entries(componentDocumentation)) {
  assert.equal(
    documentation.slug,
    slug,
    `Documentation key and slug must match for "${slug}".`
  );
  assert.ok(
    documentation.examples.length > 0,
    `"${slug}" must include a basic example.`
  );

  const apiNames = documentation.api.map((property) =>
    property.component
      ? `${property.component}.${property.name}`
      : property.name
  );
  const allowedApiNames = new Set(apiNames);

  for (const property of documentation.api) {
    const qualifiedName = property.component
      ? `${property.component}.${property.name}`
      : property.name;
    const pairedName = (name) =>
      property.component ? `${property.component}.${name}` : name;

    if (property.name === 'classNames') {
      assert.ok(
        allowedApiNames.has(pairedName('styles')),
        `"${slug}" documents ${qualifiedName} without matching styles.`
      );
    }
    if (property.name === 'styles') {
      assert.ok(
        allowedApiNames.has(pairedName('classNames')),
        `"${slug}" documents ${qualifiedName} without matching classNames.`
      );
    }
    assert.ok(
      !(
        property.name === 'root' &&
        (property.component?.endsWith('ClassNames') ||
          property.component?.endsWith('Styles'))
      ),
      `"${slug}" must document its root through className/style, not ${qualifiedName}.`
    );
  }

  const documentedTypeSlots = new Map();
  for (const property of documentation.api) {
    if (
      property.component?.endsWith('ClassNames') ||
      property.component?.endsWith('Styles')
    ) {
      const slots = documentedTypeSlots.get(property.component) ?? [];
      slots.push(property.name);
      documentedTypeSlots.set(property.component, slots);
    }
  }
  for (const [name, slots] of documentedTypeSlots) {
    if (!name.endsWith('ClassNames')) continue;
    const stylesName = name.replace(/ClassNames$/, 'Styles');
    const stylesSlots = documentedTypeSlots.get(stylesName);
    if (!stylesSlots) continue;
    assert.deepEqual(
      [...stylesSlots].sort(),
      [...slots].sort(),
      `"${slug}" ${stylesName} must match ${name} slots.`
    );
  }

  const typePreviews = new Map(
    (documentation.typePreviews ?? []).map((preview) => [preview.name, preview])
  );
  for (const [name, preview] of typePreviews) {
    if (!name.endsWith('ClassNames')) continue;

    const stylesName = name.replace(/ClassNames$/, 'Styles');
    const stylesPreview = typePreviews.get(stylesName);
    assert.ok(
      stylesPreview,
      `"${slug}" documents ${name} without ${stylesName}.`
    );
    const classNamesSlots = preview.api.map((property) => property.name).sort();
    const stylesSlots = stylesPreview.api
      .map((property) => property.name)
      .sort();
    assert.ok(
      !classNamesSlots.includes('root'),
      `"${slug}" ${name} must not contain a root slot.`
    );
    assert.deepEqual(
      stylesSlots,
      classNamesSlots,
      `"${slug}" ${stylesName} must match ${name} slots.`
    );
  }

  assert.equal(
    allowedApiNames.size,
    apiNames.length,
    `"${slug}" API property names must be unique after qualification.`
  );
  assert.deepEqual(
    apiNames.filter(
      (name) =>
        name.includes('原生属性') ||
        name.includes('Native properties') ||
        name === '...navProps'
    ),
    [],
    `"${slug}" must document className and style explicitly instead of a generic native-properties row.`
  );

  const coveredApiNames = new Set();
  for (const source of documentationCaseSources) {
    for (const name of exampleCodeCoverage(
      documentation,
      { code: source },
      allowedApiNames
    )) {
      coveredApiNames.add(name);
    }
  }
  for (const [exampleIndex, example] of documentation.examples.entries()) {
    for (const name of exampleCodeCoverage(
      documentation,
      example,
      allowedApiNames
    )) {
      coveredApiNames.add(name);
    }
    const declaredCoverage = example.coveredProperties ?? [];
    assert.equal(
      new Set(declaredCoverage).size,
      declaredCoverage.length,
      `"${slug}" example ${exampleIndex + 1} must not repeat covered properties.`
    );
    for (const name of declaredCoverage) {
      assert.ok(
        allowedApiNames.has(name),
        `"${slug}" example ${exampleIndex + 1} declares unknown covered property "${name}".`
      );
      coveredApiNames.add(name);
    }

    for (const axis of example.caseAxes ?? []) {
      assert.ok(
        axis.options.length > 0,
        `"${slug}" example ${exampleIndex + 1} axis "${axis.name}" needs options.`
      );
      assert.ok(
        axis.property === false || allowedApiNames.has(axis.property),
        `"${slug}" example ${exampleIndex + 1} axis "${axis.name}" must map to a documented API property or explicitly opt out.`
      );
    }

    const cases = example.cases ?? createCasesFromAxes(example.caseAxes ?? []);
    if (exampleIndex === 0) {
      assert.ok(cases.length > 0, `"${slug}" basic example needs a case.`);
    }
    if (cases.length === 0) continue;

    assert.equal(
      cases.filter((harnessCase) => harnessCase.isDefault).length,
      1,
      `"${slug}" example ${exampleIndex + 1} must have exactly one default case.`
    );
    for (const harnessCase of cases) {
      for (const name of Object.keys(harnessCase.properties ?? {})) {
        assert.ok(
          allowedApiNames.has(name),
          `"${slug}" case "${harnessCase.label}" references unknown API property "${name}".`
        );
        coveredApiNames.add(name);
      }
    }
  }

  for (const property of documentation.api) {
    if (property.name !== 'classNames' && property.name !== 'styles') continue;

    const siblingName =
      property.name === 'classNames' ? 'styles' : 'classNames';
    const qualifiedName = property.component
      ? `${property.component}.${property.name}`
      : property.name;
    const qualifiedSiblingName = property.component
      ? `${property.component}.${siblingName}`
      : siblingName;

    if (coveredApiNames.has(qualifiedName)) {
      coveredApiNames.add(qualifiedSiblingName);
    }
  }

  const missingApiNames = [...allowedApiNames].filter(
    (name) => requiresCaseCoverage(name) && !coveredApiNames.has(name)
  );
  if (missingApiNames.length > 0) {
    missingCaseCoverage[slug] = missingApiNames;
  }
}

assert.deepEqual(apiTypeReferences("'sm' | ReactNode | PanelSize"), [
  'ReactNode',
  'PanelSize',
]);
assert.equal(isCustomApiTypeReference('ReactNode'), false);
assert.equal(isCustomApiTypeReference('React.CSSProperties'), false);
assert.equal(isCustomApiTypeReference('PanelSize'), true);
assert.equal(isCustomApiTypeReference('Table.Column'), true);

const apiTypeDefinitions = createApiTypeDefinitions(componentDocumentation);
assert.deepEqual(
  [...apiTypeDefinitions.keys()].filter(
    (reference) => !isCustomApiTypeReference(reference)
  ),
  [],
  'Only custom API types may receive standalone hover definitions.'
);
const missingApiTypeDefinitions = [];
const inlineApiObjectTypes = [];
const nestedAnonymousTypeDefinitions = [];

const inspectApiType = (
  slug,
  location,
  type,
  ownReference,
  rejectInlineObject = false
) => {
  if (rejectInlineObject && type.includes('{')) {
    inlineApiObjectTypes.push(`${slug}.${location}`);
  }

  for (const reference of apiTypeReferences(type)) {
    if (
      reference !== ownReference &&
      isCustomApiTypeReference(reference) &&
      !apiTypeDefinitions.has(reference)
    ) {
      missingApiTypeDefinitions.push(`${slug}.${location}: ${reference}`);
    }
  }
};

const hasNestedAnonymousType = (definition) => {
  const parseableDefinition = definition.replace(
    /^(\s*type\s+)[A-Za-z_$][A-Za-z0-9_$]*\./,
    '$1'
  );
  const ast = parse(parseableDefinition, {
    plugins: ['typescript'],
    sourceType: 'module',
  });
  const alias = ast.program.body.find(
    (node) => node.type === 'TSTypeAliasDeclaration'
  );
  if (!alias) return false;

  let nested = false;
  const visit = (node, parent) => {
    if (!node || typeof node !== 'object' || nested) return;

    if (node.type === 'TSTypeLiteral') {
      const isPrimaryLiteral =
        node === alias.typeAnnotation ||
        (parent?.type === 'TSIntersectionType' &&
          parent === alias.typeAnnotation);
      if (!isPrimaryLiteral) {
        nested = true;
        return;
      }
    }

    for (const [key, value] of Object.entries(node)) {
      if (['end', 'extra', 'loc', 'start'].includes(key)) continue;
      if (Array.isArray(value)) {
        value.forEach((child) => visit(child, node));
      } else if (value && typeof value === 'object') {
        visit(value, node);
      }
    }
  };

  visit(alias.typeAnnotation, alias);
  return nested;
};

for (const [slug, documentation] of Object.entries(componentDocumentation)) {
  for (const property of documentation.api) {
    const qualifiedName = property.component
      ? `${property.component}.${property.name}`
      : property.name;
    inspectApiType(slug, qualifiedName, property.type, undefined, true);
  }

  for (const preview of documentation.typePreviews ?? []) {
    const ownReference = apiTypeDefinitionReference(preview.name);

    if (preview.declaration) {
      inspectApiType(
        slug,
        `${preview.name} declaration`,
        preview.declaration,
        ownReference
      );
    }
    if (preview.definition) {
      inspectApiType(
        slug,
        `${preview.name} definition`,
        preview.definition,
        ownReference
      );
      if (hasNestedAnonymousType(preview.definition)) {
        nestedAnonymousTypeDefinitions.push(`${slug}.${preview.name}`);
      }
    }
    for (const property of preview.api ?? []) {
      inspectApiType(
        slug,
        `${preview.name}.${property.name}`,
        property.type,
        ownReference,
        true
      );
    }
  }
}

assert.deepEqual(
  [...new Set(missingApiTypeDefinitions)].sort(),
  [],
  'Every custom API type must have a standalone hover definition.'
);
assert.deepEqual(
  inlineApiObjectTypes,
  [],
  'API property types must reference named custom types instead of inline object literals.'
);
assert.deepEqual(
  nestedAnonymousTypeDefinitions,
  [],
  'Custom type definitions must name nested object types instead of embedding anonymous type literals.'
);

assert.deepEqual(
  missingCaseCoverage,
  {},
  'Every non-foundational API property must be covered by a real example or case.'
);

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
    `${catalogSlugs.length} component docs with complete case coverage, and localized paths.`
);
