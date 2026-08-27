import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/heading-levels';
import Case03 from './cases/text-customization';
import Case04 from './cases/quotations-and-inline-code';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Organize a coherent, readable piece of content using a title, lead, text, quotes, inline code, and supporting information.',
      zh: '用标题、导语、正文、引用、行内代码和辅助信息组织一段连贯、可阅读的内容。',
    },
  },
  {
    component: Case02,
    title: { en: 'Heading levels', zh: '标题层级' },
    description: {
      en: 'level selects both the h1–h6 semantic element and its visual hierarchy. Start with h1 and keep the page order continuous.',
      zh: 'level 同时选择 h1–h6 语义元素和对应视觉层级，页面应从 h1 开始保持连续顺序。',
    },
  },
  {
    component: Case03,
    title: { en: 'Text customization', zh: '文本定制' },
    description: {
      en: 'as selects the semantic element, while size, tone, and weight independently control font size, color hierarchy, and font weight.',
      zh: 'as 选择真实语义元素；size、tone 与 weight 分别控制字号、颜色层级和字重，可以按内容需要自由组合。',
    },
  },
  {
    component: Case04,
    title: { en: 'Quotations and inline code', zh: '引用与行内代码' },
    description: {
      en: 'Blockquote preserves the citation source, while Code marks short inline code. Use a separate pre and code structure for multiline blocks.',
      zh: 'Blockquote 保留引用来源，Code 在正文中标记短代码；多行代码块应使用独立的 pre 与 code 结构。',
    },
  },
];

export default function TypographyShowcase() {
  return <ComponentShowcase cases={cases} />;
}
