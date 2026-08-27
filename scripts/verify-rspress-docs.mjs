import assert from 'node:assert/strict';
import { Buffer } from 'node:buffer';
import { access, readdir, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const docsAppRoot = resolve(packageRoot, 'apps/docs');
const docsRoot = resolve(docsAppRoot, 'docs');

const loadCatalog = async () => {
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
          componentSlug,
        } from './apps/docs/src/component-catalog.ts'
      `,
      loader: 'ts',
      resolveDir: packageRoot,
      sourcefile: 'verify-rspress-docs-entry.ts',
    },
    write: false,
  });
  const [output] = result.outputFiles;

  assert.ok(output, 'The Rspress verifier must produce JavaScript.');

  return import(
    `data:text/javascript;base64,${Buffer.from(output.contents).toString('base64')}`
  );
};

const loadSourceLocalizer = async () => {
  const result = await build({
    absWorkingDir: packageRoot,
    bundle: true,
    format: 'esm',
    logLevel: 'silent',
    platform: 'node',
    stdin: {
      contents: `
        export { localizeShowcaseSource } from './apps/docs/theme/localized-source.ts'
      `,
      loader: 'ts',
      resolveDir: packageRoot,
      sourcefile: 'verify-localized-source-entry.ts',
    },
    write: false,
  });
  const [output] = result.outputFiles;

  assert.ok(output, 'The localized source verifier must produce JavaScript.');

  return import(
    `data:text/javascript;base64,${Buffer.from(output.contents).toString('base64')}`
  );
};

const loadApiTypeDefinitions = async () => {
  const result = await build({
    absWorkingDir: packageRoot,
    bundle: true,
    format: 'esm',
    logLevel: 'silent',
    platform: 'node',
    stdin: {
      contents: `
        export { apiTypeDefinitions } from './apps/docs/src/rspress/api-type-definitions.ts'
      `,
      loader: 'ts',
      resolveDir: packageRoot,
      sourcefile: 'verify-api-type-definitions-entry.ts',
    },
    write: false,
  });
  const [output] = result.outputFiles;

  assert.ok(output, 'The API type verifier must produce JavaScript.');

  return import(
    `data:text/javascript;base64,${Buffer.from(output.contents).toString('base64')}`
  );
};

const catalog = await loadCatalog();
const sourceLocalizer = await loadSourceLocalizer();
const { apiTypeDefinitions } = await loadApiTypeDefinitions();
const slugs = catalog.componentCatalog.map(catalog.componentSlug);
const casesBySlug = new Map();

assert.ok(
  Object.keys(apiTypeDefinitions).length > 0,
  'The shared API type registry must not be empty.'
);
for (const [name, declaration] of Object.entries(apiTypeDefinitions)) {
  assert.ok(name.trim(), 'Every shared API type needs a name.');
  assert.ok(
    declaration.includes(name.replace(/\..*$/, '')) || declaration.length > 0,
    `${name} must have a non-empty declaration.`
  );
}

for (const locale of ['zh', 'en']) {
  for (const relativePath of [
    'index.mdx',
    'design.mdx',
    'docs/getting-started.mdx',
    'components/index.mdx',
  ]) {
    const source = await readFile(
      resolve(docsRoot, locale, relativePath),
      'utf8'
    );
    assert.doesNotMatch(
      source,
      /LegacyDocsPage/,
      `${relativePath} must be authored directly in MDX.`
    );
    assert.match(
      source,
      new RegExp(`lang: ${locale === 'zh' ? 'zh-Hans' : 'en'}`),
      `${relativePath} must declare the exact document language.`
    );
  }

  const meta = JSON.parse(
    await readFile(resolve(docsRoot, locale, 'components/_meta.json'), 'utf8')
  );
  const metaNames = meta
    .filter((item) => item.name !== 'index')
    .map((item) => item.name);

  assert.deepEqual(
    metaNames,
    slugs,
    `${locale} component sidebar must exactly follow componentCatalog.`
  );

  for (const slug of slugs) {
    const pagePath = resolve(docsRoot, locale, 'components', `${slug}.mdx`);
    const source = await readFile(pagePath, 'utf8');

    assert.match(source, /^---\n[\s\S]*?title:/, `${pagePath} needs a title.`);
    assert.match(
      source,
      /description:/,
      `${pagePath} needs a searchable description.`
    );
    assert.doesNotMatch(
      source,
      /LegacyDocsPage/,
      `${pagePath} must not use the removed compatibility bridge.`
    );
    assert.match(
      source,
      new RegExp(`lang: ${locale === 'zh' ? 'zh-Hans' : 'en'}`),
      `${pagePath} must declare the exact document language.`
    );
    const showcaseImport = source.match(
      new RegExp(`import ([A-Za-z0-9]+Showcase) from '@showcases/${slug}';`)
    );
    assert.ok(
      showcaseImport,
      `${pagePath} must import its component showcase index.`
    );
    const showcaseName = showcaseImport[1];
    assert.ok(showcaseName, `${pagePath} must name its component showcase.`);
    const showcaseSection = source.match(
      new RegExp(`<${showcaseName}>\\n([\\s\\S]*?)\\n</${showcaseName}>`)
    );
    assert.ok(
      showcaseSection,
      `${pagePath} must nest case sources inside its component showcase.`
    );
    if (locale === 'en') {
      assert.doesNotMatch(
        source,
        /^- need.+\.hour\.$/mu,
        `${pagePath} contains a broken generated usage sentence.`
      );
    }

    assert.doesNotMatch(
      source,
      /^## (?:类型定义|Type definitions)$/mu,
      `${pagePath} must reference shared API type tooltips instead of rendering a type-definition section.`
    );

    const caseFiles = Array.from(
      showcaseSection[1].matchAll(
        new RegExp(
          `title="showcases/${slug}/cases/([^"]+\\.tsx)" file="<root>/showcases/${slug}/cases/\\1"\\n\\n\\x60\\x60\\x60`,
          'g'
        )
      ),
      (match) => match[1]
    );
    assert.ok(
      caseFiles.length > 0,
      `${pagePath} must reference its case files.`
    );

    const existingCases = casesBySlug.get(slug);
    if (existingCases) {
      assert.deepEqual(
        caseFiles,
        existingCases,
        `${slug} must reference the same cases in zh and en.`
      );
    } else {
      casesBySlug.set(slug, caseFiles);
    }
  }
}

let caseCount = 0;
for (const slug of slugs) {
  const showcaseDirectory = resolve(docsAppRoot, 'showcases', slug);
  const indexSource = await readFile(
    resolve(showcaseDirectory, 'index.tsx'),
    'utf8'
  );
  assert.match(
    indexSource,
    /export default function [A-Za-z0-9]+Showcase/,
    `${slug}/index.tsx must expose the complete component showcase.`
  );
  assert.match(
    indexSource,
    /ComponentShowcase/,
    `${slug}/index.tsx must compose cases through ComponentShowcase.`
  );
  assert.match(
    indexSource,
    /<ComponentShowcase cases=\{cases\}>\{children\}<\/ComponentShowcase>/u,
    `${slug}/index.tsx must pass its MDX case sources into ComponentShowcase.`
  );

  const expectedCases = casesBySlug.get(slug);
  assert.ok(expectedCases, `${slug} must have documented cases.`);
  const actualCases = (await readdir(resolve(showcaseDirectory, 'cases')))
    .filter((file) => file.endsWith('.tsx'))
    .sort();

  assert.deepEqual(
    actualCases,
    [...expectedCases].sort(),
    `${slug} must have exactly one file for every documented case.`
  );

  for (const file of expectedCases) {
    const source = await readFile(
      resolve(showcaseDirectory, 'cases', file),
      'utf8'
    );
    assert.match(
      source,
      /export default function/,
      `${slug}/${file} must own one case.`
    );
    assert.match(
      source,
      /import(?: type)? \{[^}]+\} from ['"]@heliannuuthus\/ui['"]/u,
      `${slug}/${file} must import components from the public package root.`
    );
    assert.doesNotMatch(
      source,
      /MigratedExampleCase|migrated-example-case|component-docs|showcase\.css/u,
      `${slug}/${file} must not delegate rendering to the legacy docs runtime.`
    );
    assert.doesNotMatch(
      source,
      /from ['"](?:\.\.\/)+src\//u,
      `${slug}/${file} must not import private docs component helpers.`
    );
    assert.ok(
      indexSource.includes(`./cases/${file.replace(/\.tsx$/, '')}`),
      `${slug}/index.tsx must import ${file}.`
    );
  }

  caseCount += expectedCases.length;
}

assert.ok(
  caseCount >= 196,
  `The migration must preserve at least 196 documented cases; found ${caseCount}.`
);

const assertMissing = async (path) => {
  try {
    await access(path);
    assert.fail(`${path} must be removed after the Rspress migration.`);
  } catch (error) {
    if (error?.code !== 'ENOENT') throw error;
  }
};

await assertMissing(resolve(docsAppRoot, 'src/rspress/legacy-docs-page.tsx'));
await assertMissing(resolve(docsAppRoot, 'src/showcase.tsx'));
await assertMissing(
  resolve(docsAppRoot, 'showcases/_shared/migrated-example-case.tsx')
);
await assertMissing(resolve(docsAppRoot, 'src/showcase.css'));
await assertMissing(resolve(docsAppRoot, 'src/component-docs.tsx'));

const legacyPreviewSources = (
  await readdir(resolve(docsAppRoot, 'src'))
).filter(
  (file) =>
    /(?:^|-)previews?\.tsx$/u.test(file) || /^component-harness/u.test(file)
);
assert.deepEqual(
  legacyPreviewSources,
  [],
  'The Rspress docs must not retain a centralized preview implementation.'
);

const themeIndex = await readFile(
  resolve(docsAppRoot, 'theme/index.tsx'),
  'utf8'
);
const themeLayout = await readFile(
  resolve(docsAppRoot, 'theme/layout.tsx'),
  'utf8'
);
const themeCodeBlock = await readFile(
  resolve(docsAppRoot, 'theme/code-block.tsx'),
  'utf8'
);
const themeMdxContent = await readFile(
  resolve(docsAppRoot, 'theme/mdx-content.tsx'),
  'utf8'
);
const themeInternalLink = await readFile(
  resolve(docsAppRoot, 'theme/internal-link.tsx'),
  'utf8'
);
const themeSearch = await readFile(
  resolve(docsAppRoot, 'theme/search.tsx'),
  'utf8'
);
const componentsOverview = await readFile(
  resolve(docsAppRoot, 'src/pages/components.tsx'),
  'utf8'
);
const componentShowcase = await readFile(
  resolve(docsAppRoot, 'showcases/_shared/component-showcase.tsx'),
  'utf8'
);
const apiTable = await readFile(
  resolve(docsAppRoot, 'src/rspress/api-table.tsx'),
  'utf8'
);
const localeRedirect = await readFile(
  resolve(docsAppRoot, 'src/rspress/locale-redirect.tsx'),
  'utf8'
);
const localizedSourceFixture = await readFile(
  resolve(docsAppRoot, 'showcases/button/cases/combination-button.tsx'),
  'utf8'
);
const localizedChineseSource = sourceLocalizer.localizeShowcaseSource(
  localizedSourceFixture,
  'zh'
);
const localizedEnglishSource = sourceLocalizer.localizeShowcaseSource(
  localizedSourceFixture,
  'en'
);

for (const source of [localizedChineseSource, localizedEnglishSource]) {
  assert.doesNotMatch(
    source,
    /ZhExample|EnExample|locale\s*[?:=]/u,
    'Visible case source must not expose bilingual runtime wrappers.'
  );
  assert.match(
    source,
    /export default Example;/u,
    'Visible case source must export one directly copyable example.'
  );
}
assert.match(localizedChineseSource, /分页操作/u);
assert.doesNotMatch(localizedChineseSource, /Pagination actions/u);
assert.match(localizedEnglishSource, /Pagination actions/u);
assert.doesNotMatch(localizedEnglishSource, /分页操作/u);

assert.doesNotMatch(
  themeIndex,
  /export \* from ['"]@rspress\/core\/theme-original['"]/,
  'The docs theme must not restore the Rspress default visual theme.'
);
assert.doesNotMatch(
  themeLayout,
  /OriginalLayout|@rspress\/core\/theme-original/,
  'The docs shell must be composed from the public UI package.'
);
assert.match(
  themeLayout,
  /from ['"]@heliannuuthus\/ui['"]/,
  'The docs shell must consume the public UI package root.'
);
assert.match(
  themeLayout,
  /InternalButtonLink/u,
  'The docs shell must route internal controls without full-page reloads.'
);
assert.match(
  themeInternalLink,
  /import \{ Link \} from ['"]@rspress\/core\/theme-original['"]/u,
  'Internal button links must use the Rspress client router.'
);
assert.match(
  themeInternalLink,
  /buttonVariants/u,
  'Internal links must preserve the public Button visual contract.'
);
assert.match(
  themeCodeBlock,
  /import \{[^}]*Button[^}]*Typography[^}]*\} from ['"]@heliannuuthus\/ui['"]/s,
  'The code block must use the public Button and Typography components.'
);
assert.match(
  themeCodeBlock,
  /localizeShowcaseSource/u,
  'Case source blocks must render only the active locale example.'
);
assert.match(
  themeCodeBlock,
  /wrapCode = true/u,
  'Code blocks must wrap long lines by default.'
);
assert.match(
  themeCodeBlock,
  /https:\/\/stackblitz\.com\/fork\/github\/heliannuuthus\/ui/u,
  'Case source blocks must link to the public StackBlitz project.'
);
assert.match(
  themeCodeBlock,
  /https:\/\/codesandbox\.io\/p\/github\/heliannuuthus\/ui\/main/u,
  'Case source blocks must link to the public CodeSandbox project.'
);
assert.doesNotMatch(
  themeCodeBlock,
  /@rspress\/core\/theme-original/,
  'The code block must not import the Rspress default visual theme.'
);
for (const component of [
  'Button',
  'Separator',
  'Table.Primitive',
  'Table.Header',
  'Table.Body',
  'Table.Row',
  'Table.Head',
  'Table.Cell',
  'Typography.Title',
  'Typography.Text',
  'Typography.Blockquote',
  'Typography.Code',
]) {
  assert.ok(
    themeMdxContent.includes(component),
    `The MDX renderer must map visible content through public ${component}.`
  );
}
assert.match(
  themeMdxContent,
  /InternalButtonLink/u,
  'MDX links must use the Rspress client router.'
);
assert.match(
  componentsOverview,
  /import \{ Link \} from ['"]@rspress\/core\/theme-original['"]/u,
  'Component catalog cards must use the Rspress client router.'
);
assert.match(
  componentShowcase,
  /import \{ Button, Typography \} from ['"]@heliannuuthus\/ui['"]/,
  'Case cards must use the public Button and Typography components.'
);
assert.match(
  componentShowcase,
  /aria-expanded=\{sourceExpanded\}/u,
  'Case source must use an explicit disclosure button.'
);
assert.doesNotMatch(
  componentShowcase,
  /<Toggle(?:\.|\s)/u,
  'One-shot case source actions must not be modeled as toggles.'
);
assert.doesNotMatch(
  componentShowcase,
  /<Collapsible/u,
  'Case source must not fall back to the legacy text-triggered Collapsible.'
);
assert.doesNotMatch(
  componentShowcase,
  /<(?:h[1-6]|p)>/u,
  'Case card text must not bypass the public Typography component.'
);
assert.match(
  apiTable,
  /import \{ Table, Tooltip, Typography \} from ['"]@heliannuuthus\/ui['"]/,
  'API tables must use the public Table, Tooltip, and Typography components.'
);
assert.doesNotMatch(
  apiTable,
  /<(?:table|thead|tbody|tfoot|tr|th|td|code)\b/u,
  'API tables must not retain parallel native table rendering.'
);
assert.match(
  themeLayout,
  /<UiLayout\.Sidebar/u,
  'The docs sidebars must use the public Layout.Sidebar.'
);
assert.doesNotMatch(
  themeLayout,
  /<(?:aside|h[1-6]|p|a)\b/u,
  'The docs shell must not bypass public components for visible controls and text.'
);
assert.match(
  themeSearch,
  /Typography\.(?:Text|Title)/u,
  'Search copy must use the public Typography component.'
);
assert.match(
  localeRedirect,
  /import \{ Button, Layout, Stack, Typography \} from ['"]@heliannuuthus\/ui['"]/,
  'The locale fallback must be composed from public UI components.'
);
assert.doesNotMatch(
  localeRedirect,
  /<(?:main|h[1-6]|p|a)\b/u,
  'The locale fallback must not retain parallel native UI rendering.'
);

const packageJson = JSON.parse(
  await readFile(resolve(docsAppRoot, 'package.json'), 'utf8')
);
assert.match(packageJson.scripts.dev, /^rspress dev\b/);
assert.match(packageJson.scripts.build, /rspress build$/);
assert.equal(packageJson.devDependencies.vite, undefined);

globalThis.console.log(
  `Verified ${slugs.length} bilingual Rspress component routes and ${caseCount} single-file cases with no legacy route shell.`
);
