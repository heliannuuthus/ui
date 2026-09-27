export const handbookSections = [
  {
    key: 'start',
    labels: { en: 'Getting connected', zh: '接入使用' },
    items: [
      {
        labels: { en: 'Getting started', zh: '快速开始' },
        slug: 'getting-started',
      },
      {
        labels: { en: 'Imports and bundling', zh: '按需导入' },
        slug: 'imports-and-bundling',
      },
    ],
  },
  {
    key: 'foundations',
    labels: { en: 'Styling foundations', zh: '样式基础' },
    items: [
      {
        labels: { en: 'Styles and design tokens', zh: '样式与设计变量' },
        slug: 'css-and-tokens',
      },
      {
        labels: { en: 'Typography and fonts', zh: '字体与排版' },
        slug: 'typography-and-fonts',
      },
    ],
  },
  {
    key: 'theme',
    labels: { en: 'Theme configuration', zh: '主题配置' },
    items: [
      {
        labels: { en: 'Global Provider', zh: '全局 Provider' },
        slug: 'provider',
      },
      {
        labels: { en: 'Dark mode', zh: '暗黑模式' },
        slug: 'dark-mode',
      },
    ],
  },
  {
    key: 'practice',
    labels: { en: 'Interaction practice', zh: '交互实践' },
    items: [
      {
        labels: { en: 'Interaction tips', zh: '交互设计 Tips' },
        slug: 'interaction-tips',
      },
      {
        labels: { en: 'Form architecture', zh: '表单设计与实现' },
        slug: 'form-architecture',
      },
      {
        labels: { en: 'Choosing a table', zh: '数据表格与普通表格' },
        slug: 'choosing-a-table',
      },
    ],
  },
] as const;

export const handbookPageSlugs = handbookSections.flatMap((section) =>
  section.items.map((item) => item.slug)
);
