import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/vertical-area';
import Case03 from './cases/size-constraints-and-divider-overrides';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Drag the separator line between the file area and preview area, or use the arrow keys to adjust the width after focusing on the separator line.',
      zh: '拖动文件区和预览区之间的分隔线，或聚焦分隔线后使用方向键调整宽度。',
    },
  },
  {
    component: Case02,
    title: { en: 'vertical area', zh: '纵向区域' },
    description: {
      en: 'After setting vertical, the upper and lower areas can be adjusted, which is suitable for scenarios such as editor and terminal, preview and log.',
      zh: '设置 vertical 后可调整上下区域，适合编辑器与终端、预览与日志等场景。',
    },
  },
  {
    component: Case03,
    title: {
      en: 'Size constraints and divider overrides',
      zh: '尺寸约束与分隔线覆盖',
    },
    description: {
      en: 'size centrally expresses the initial, minimum and maximum sizes; item can override the default divider and obtain the real-time size through onResize.',
      zh: 'size 集中表达初始、最小和最大尺寸；item 可覆盖默认分隔线，并通过 onResize 获取实时尺寸。',
    },
  },
];

export default function ResizableShowcase() {
  return <ComponentShowcase cases={cases} />;
}
