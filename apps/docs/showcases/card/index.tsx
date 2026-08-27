import type { ReactNode } from 'react';
import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/header-content-and-footer';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Quickly organize a set of related information by providing just a title and content.',
      zh: '只提供标题和内容，即可快速组织一组相关信息。',
    },
  },
  {
    component: Case02,
    title: {
      en: 'Header, Content and Footer',
      zh: 'Header、Content 与 Footer',
    },
    description: {
      en: 'Header is responsible for the title and auxiliary operations, Content carries the main body, and Footer places operations related to the entire card.',
      zh: 'Header 负责标题与辅助操作，Content 承载主体，Footer 放置与整张卡片相关的操作。',
    },
  },
];

export default function CardShowcase({ children }: { children?: ReactNode }) {
  return <ComponentShowcase cases={cases}>{children}</ComponentShowcase>;
}
