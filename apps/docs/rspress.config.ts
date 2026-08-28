import { fileURLToPath } from 'node:url';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { defineConfig } from '@rspress/core';
import { pluginTailwindcss } from '@rsbuild/plugin-tailwindcss';
import remarkDirective from 'remark-directive';
import {
  componentGroups,
  componentSlug,
  localizedComponentName,
} from './src/component-catalog';
import { remarkUiDirectives } from './src/rspress/remark-ui-directives';

const uiEntry = fileURLToPath(new URL('../../src/index.ts', import.meta.url));
const uiStyles = fileURLToPath(
  new URL('../../src/styles/globals.css', import.meta.url)
);
const publicDirectory = fileURLToPath(new URL('./public', import.meta.url));
const distDirectory = fileURLToPath(new URL('./dist', import.meta.url));

const aliases = {
  '@docs': fileURLToPath(new URL('./src', import.meta.url)),
  '@showcases': fileURLToPath(new URL('./showcases', import.meta.url)),
  '@heliannuuthus/ui/styles.css': uiStyles,
  '@heliannuuthus/ui': uiEntry,
};

const builderConfig = {
  plugins: [pluginTailwindcss()],
  resolve: {
    alias: aliases,
    dedupe: ['react', 'react-dom'],
  },
  server: {
    publicDir: {
      copyOnBuild: true,
      name: publicDirectory,
    },
  },
};

const englishGroupTitles = {
  actions: 'Actions and menus',
  content: 'Content',
  dataDisplay: 'Data display',
  feedback: 'Feedback',
  forms: 'Forms',
  general: 'General',
  layout: 'Layout',
  navigation: 'Navigation',
  overlays: 'Overlays',
} satisfies Record<(typeof componentGroups)[number]['key'], string>;

const componentSidebar = (locale: 'zh' | 'en') => [
  {
    text: locale === 'zh' ? '组件总览' : 'Overview',
    link: `/${locale}/components/`,
  },
  ...componentGroups.map((group) => ({
    text: locale === 'zh' ? group.title : englishGroupTitles[group.key],
    items: group.items.map((name) => ({
      text: localizedComponentName(name, locale),
      link: `/${locale}/components/${componentSlug(name)}`,
    })),
  })),
];

const rewriteHtmlLanguage = async (directory: string, language: string) => {
  const entries = await readdir(directory, { withFileTypes: true }).catch(
    (error: NodeJS.ErrnoException) => {
      if (error.code === 'ENOENT') return [];
      throw error;
    }
  );

  await Promise.all(
    entries.map(async (entry) => {
      const path = `${directory}/${entry.name}`;

      if (entry.isDirectory()) {
        await rewriteHtmlLanguage(path, language);
        return;
      }

      if (!entry.name.endsWith('.html')) return;

      const html = await readFile(path, 'utf8');
      await writeFile(
        path,
        html.replace(/<html lang="[^"]+">/, `<html lang="${language}">`),
        'utf8'
      );
    })
  );
};

const exactDocumentLanguagePlugin = {
  name: 'exact-document-language',
  async afterBuild() {
    await Promise.all([
      rewriteHtmlLanguage(`${distDirectory}/en`, 'en'),
      rewriteHtmlLanguage(`${distDirectory}/zh`, 'zh-Hans'),
    ]);
  },
};

export default defineConfig({
  builderConfig,
  description:
    'Accessible React primitives and component guidance for Heliannuuthus products.',
  icon: new URL('./public/heliannuuthus.png', import.meta.url),
  lang: 'zh',
  logo: '/heliannuuthus.png',
  logoText: 'Heliannuuthus UI',
  markdown: {
    remarkPlugins: [remarkDirective, remarkUiDirectives],
  },
  outDir: 'dist',
  plugins: [exactDocumentLanguagePlugin],
  root: 'docs',
  route: {
    cleanUrls: true,
  },
  siteOrigin: 'https://ui.heliannuuthus.com',
  themeConfig: {
    darkMode: true,
    enableContentAnimation: true,
    lastUpdated: false,
    sidebar: {
      '/en/components/': componentSidebar('en'),
      '/zh/components/': componentSidebar('zh'),
    },
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/heliannuuthus/ui',
      },
    ],
  },
  title: 'Heliannuuthus UI',
});
