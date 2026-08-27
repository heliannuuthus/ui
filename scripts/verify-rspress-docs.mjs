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

const catalog = await loadCatalog();
const slugs = catalog.componentCatalog.map(catalog.componentSlug);
const casesBySlug = new Map();

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
    assert.match(
      source,
      new RegExp(`from '@showcases/${slug}'`),
      `${pagePath} must render its component showcase index.`
    );
    if (locale === 'en') {
      assert.doesNotMatch(
        source,
        /^- need.+\.hour\.$/mu,
        `${pagePath} contains a broken generated usage sentence.`
      );
    }

    const typeSectionHeading =
      locale === 'zh' ? '## 类型定义' : '## Type definitions';
    const typeSection = source.split(typeSectionHeading)[1];
    if (typeSection) {
      assert.doesNotMatch(
        typeSection,
        /```ts\n(?:\{|[^\n]* & \{)\n```/u,
        `${pagePath} contains an incomplete type definition.`
      );
    }

    const caseFiles = Array.from(
      source.matchAll(
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
  themeCodeBlock,
  /import \{ Button \} from ['"]@heliannuuthus\/ui['"]/,
  'The interactive code block controls must use the public Button.'
);
assert.doesNotMatch(
  themeCodeBlock,
  /@rspress\/core\/theme-original/,
  'The code block must not import the Rspress default visual theme.'
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
