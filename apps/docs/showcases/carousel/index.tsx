import type { ReactNode } from 'react';
import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/navigation-buttons';
import Case03 from './cases/pagination-dots';
import Case04 from './cases/track-and-item-styles';
import Case05 from './cases/custom-page-turner';
import Case06 from './cases/autoplay';
import Case07 from './cases/external-control';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'The pagination.position option places dots before or after the carousel track.',
      zh: 'pagination.position 可将分页点放在轮播轨道之前或之后。',
    },
  },
  {
    component: Case02,
    title: { en: 'Navigation buttons', zh: '导航按钮' },
    description: {
      en: 'Set controls to false to hide both buttons, or pass previous and next button props in one object.',
      zh: 'controls 设为 false 可隐藏两侧按钮；传入对象可分别配置上一项和下一项按钮。',
    },
  },
  {
    component: Case03,
    title: { en: 'Pagination dots', zh: '分页点' },
    description: {
      en: 'Pagination shows dots by default; set it to false to hide them, or pass renderDot to customize each dot.',
      zh: '默认显示分页点；pagination 设为 false 可隐藏，传入 renderDot 可自定义点位内容。',
    },
  },
  {
    component: Case04,
    title: { en: 'Track and item styles', zh: '轨道与项目样式' },
    description: {
      en: 'classNames extends the carousel track and items through the content and item semantic slots.',
      zh: 'classNames 按 content 与 item 语义槽位扩展轮播轨道和项目样式。',
    },
  },
  {
    component: Case05,
    title: { en: 'Custom page turner', zh: '自定义翻页器' },
    description: {
      en: 'pagination.render receives the page state and navigation methods for a custom page turner.',
      zh: 'pagination.render 提供页码状态和导航方法，可据此构建完整翻页器。',
    },
  },
  {
    component: Case06,
    title: { en: 'Autoplay', zh: '自动播放' },
    description: {
      en: 'Autoplay passes true to use the default interval, and passes a number to directly set the number of seconds; the loop loop always crosses the beginning and end along the next page.',
      zh: 'autoplay 传 true 使用默认间隔，传数字直接设置秒数；loop 循环始终沿下一页方向越过首尾。',
    },
  },
  {
    component: Case07,
    title: { en: 'External control', zh: '外部控制' },
    description: {
      en: 'Use the ref to call scrollPrev, scrollNext, scrollTo, play, and pause without exposing the underlying carousel instance.',
      zh: '通过 ref 调用 scrollPrev、scrollNext、scrollTo、play 与 pause，不暴露底层轮播实例。',
    },
  },
];

export default function CarouselShowcase({
  children,
}: {
  children?: ReactNode;
}) {
  return <ComponentShowcase cases={cases}>{children}</ComponentShowcase>;
}
