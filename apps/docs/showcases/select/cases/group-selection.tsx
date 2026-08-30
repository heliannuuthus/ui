import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Select } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  type WorkspaceItem = {
    value: string;
    label: string;
    disabled?: boolean;
  };

  const workspaceGroups: { label: string; items: WorkspaceItem[] }[] = [
    {
      label: copy('我的工作区'),
      items: [
        { value: 'design', label: copy('设计系统') },
        { value: 'website', label: copy('品牌官网') },
      ],
    },
    {
      label: copy('共享空间'),
      items: [
        { value: 'growth', label: copy('增长实验') },
        { value: 'archive', label: copy('已归档项目'), disabled: true },
      ],
    },
  ];

  const SelectWorkspaceDemo = () => {
    const [value, setValue] = useState<string | null>(
      workspaceGroups[0]?.items[0]?.value ?? null
    );
    const selectedWorkspace = workspaceGroups
      .flatMap((group) => group.items)
      .find((item) => item.value === value);

    return (
      <div className="data-compact-form">
        <div className="data-field-copy">
          <label className="text-sm font-medium">{copy('移动到工作区')}</label>
          <span>{copy('列表可以分组、分隔并禁用不可选项')}</span>
        </div>
        <Select
          classNames={{ trigger: 'data-wide-control' }}
          value={value}
          onChange={setValue}
          options={workspaceGroups.map((group) => ({
            label: group.label,
            options: group.items.map((item) => ({
              disabled: 'disabled' in item && item.disabled,
              label: item.label,
              value: item.value,
            })),
          }))}
          placeholder={copy('选择工作区')}
        />
        <p className="data-result">
          {copy('目标：')}
          {value === 'design'
            ? copy('设计系统')
            : value === 'website'
              ? copy('品牌官网')
              : (selectedWorkspace?.label ?? copy('未选择'))}
        </p>
      </div>
    );
  };

  return SelectWorkspaceDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function SelectCase02({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-select">
      <Example />
    </div>
  );
}
