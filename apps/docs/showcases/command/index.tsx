import type { ReactNode } from 'react';
import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/groups-and-options';
import Case03 from './cases/search-input-placeholder';
import Case04 from './cases/empty-result-content';
import Case05 from './cases/command-dialog';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Create a searchable command list through groups and options, which are responsible for icons, shortcut keys and execution callbacks.',
      zh: '通过 groups 和 options 创建可搜索的命令列表，选项负责图标、快捷键与执行回调。',
    },
  },
  {
    component: Case02,
    title: { en: 'Groups and options', zh: '分组与选项' },
    description: {
      en: 'Each group uses heading for its title and options to configure command values, labels, search keywords, icons, shortcuts, disabled states, and execution callbacks.',
      zh: '每个 group 使用 heading 标记分组标题，并通过 options 配置命令值、标签、检索关键词、图标、快捷键、禁用状态和执行回调。',
    },
  },
  {
    component: Case03,
    title: { en: 'Search input placeholder', zh: '搜索输入提示' },
    description: {
      en: 'placeholder describes the expected query before anything is entered; it does not provide empty-result feedback.',
      zh: 'placeholder 只描述搜索输入框尚未输入内容时的预期查询，不负责空结果反馈。',
    },
  },
  {
    component: Case04,
    title: { en: 'Empty result content', zh: '空结果内容' },
    description: {
      en: 'emptyText appears only when filtering finds no matching command and can be plain text or a ReactNode with an icon, title, and suggestion.',
      zh: 'emptyText 仅在过滤后没有匹配命令时显示，可以是纯文本，也可以是包含图标、标题和建议的 ReactNode。',
    },
  },
  {
    component: Case05,
    title: { en: 'Command dialog', zh: '命令弹窗' },
    description: {
      en: 'dialog composes Command with the shared Dialog to place the same command list in a modal layer; it owns the trigger, title, description, and open state while groups still define the commands.',
      zh: 'dialog 是 Command 对通用 Dialog 的组合入口，用来把同一份命令列表放入模态层；它负责触发器、标题、说明和开关状态，groups 仍负责命令内容。',
    },
  },
];

export default function CommandShowcase({
  children,
}: {
  children?: ReactNode;
}) {
  return <ComponentShowcase cases={cases}>{children}</ComponentShowcase>;
}
