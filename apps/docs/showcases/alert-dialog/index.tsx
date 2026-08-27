import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Use only for warnings or dangerous actions that must be acknowledged by the user; success and general messages should use Alert or Toast.',
      zh: '仅用于必须由用户确认的警告或危险操作；成功和普通信息应使用 Alert 或 Toast。',
    },
  },
];

export default function AlertDialogShowcase() {
  return <ComponentShowcase cases={cases} />;
}
