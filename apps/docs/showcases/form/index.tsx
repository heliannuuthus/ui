import { ComponentShowcase } from '../_shared/component-showcase';
import Case01 from './cases/basic-usage';
import Case02 from './cases/label-association-and-necessity';
import Case03 from './cases/complete-component-form';
import Case04 from './cases/custom-control-integration';

const cases = [
  {
    component: Case01,
    title: { en: 'Basic usage', zh: '基础用法' },
    description: {
      en: 'Also displays labels, descriptions, error messages, and horizontal fields for setting items.',
      zh: '同时展示标签、说明、错误信息，以及适合设置项的水平字段。',
    },
  },
  {
    component: Case02,
    title: { en: 'Label association and necessity', zh: '标签关联与必要性' },
    description: {
      en: 'Form.Field automatically associates labels with controls and consistently generates required markers and supporting descriptions.',
      zh: 'Form.Field 自动关联标签与真实控件，并统一生成必填标记和辅助说明。',
    },
  },
  {
    component: Case03,
    title: { en: 'Complete component form', zh: '完整组件表单' },
    description: {
      en: 'Validate value binding, validation state, and accessible relationships for every supported control in one form.',
      zh: '在一个表单中验证全部受支持控件的值绑定、校验状态与无障碍关系。',
    },
  },
  {
    component: Case04,
    title: { en: 'Custom control integration', zh: '自定义控件接入' },
    description: {
      en: 'Compare a minimal value-bound control with one that also supports error focus and the complete field contract.',
      zh: '对比只实现值绑定的最小控件，以及额外支持错误聚焦和完整字段属性的控件。',
    },
  },
];

export default function FormShowcase() {
  return <ComponentShowcase cases={cases} />;
}
