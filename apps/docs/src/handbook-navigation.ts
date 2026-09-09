export const handbookSections = [
  {
    key: 'start',
    labels: { en: 'Start here', zh: '开始' },
    items: [
      {
        labels: { en: 'Getting started', zh: '快速开始' },
        slug: 'getting-started',
      },
    ],
  },
  {
    key: 'foundations',
    labels: { en: 'Foundations', zh: '基础接入' },
    items: [
      {
        labels: { en: 'CSS and tokens', zh: 'CSS 设计与定义' },
        slug: 'css-and-tokens',
      },
      {
        labels: { en: 'Global Provider', zh: '全局 Provider' },
        slug: 'provider',
      },
      {
        labels: { en: 'Imports and bundling', zh: '按需导入' },
        slug: 'imports-and-bundling',
      },
      {
        labels: { en: 'Typography and fonts', zh: '字体与排版' },
        slug: 'typography-and-fonts',
      },
      {
        labels: { en: 'Dark mode', zh: '暗黑模式' },
        slug: 'dark-mode',
      },
    ],
  },
  {
    key: 'practice',
    labels: { en: 'Engineering practice', zh: '工程实践' },
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
