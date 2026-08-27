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
      en: 'Carousel always uses a depth of field transition; paginationPosition controls the default point in front or behind content.',
      zh: 'Carousel 始终使用景深过渡；paginationPosition 控制默认点位位于内容前方或后方。',
    },
  },
  {
    component: Case02,
    title: { en: 'Navigation buttons', zh: '导航按钮' },
    description: {
      en: 'controls determines whether previous and next buttons are rendered; previousButtonProps and nextButtonProps extend each button independently.',
      zh: 'controls 决定是否渲染上一项和下一项按钮；按钮属性通过 previousButtonProps 与 nextButtonProps 独立扩展。',
    },
  },
  {
    component: Case03,
    title: { en: 'Pagination dots', zh: '分页点' },
    description: {
      en: 'pagination enables the default dots or hides pagination, while renderDot replaces only the content of each dot.',
      zh: 'pagination 控制默认点位或隐藏分页，renderDot 只改写单个点位的内容。',
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
      en: 'Pagination provides page number status and control methods when receiving functions, and can directly combine a complete page turner that matches the current page.',
      zh: 'pagination 接收函数时提供页码状态与控制方法，可直接组合符合当前页面的完整翻页器。',
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

export default function CarouselShowcase() {
  return <ComponentShowcase cases={cases} />;
}
