import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Select } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const members = [
    copy('林夏 · 设计'),
    copy('周一 · 前端'),
    copy('陈青 · 产品'),
    copy('宋雨 · 运营'),
  ];

  const SelectMemberSearchDemo = () => {
    const [value, setValue] = useState<string | null>(members[0]);

    return (
      <div className="data-compact-form">
        <div className="data-field-copy">
          <label className="text-sm font-medium" htmlFor="member-select">
            {copy('负责人')}
          </label>
          <span>{copy('输入姓名或团队进行搜索')}</span>
        </div>
        <Select
          emptyText={copy('没有找到成员')}
          id="member-select"
          onChange={setValue}
          options={members.map((member) => ({ label: member, value: member }))}
          placeholder={copy('搜索成员…')}
          showClear
          value={value}
        />
        <p className="data-result">
          {copy('当前负责人：')}
          {value ?? copy('未分配')}
        </p>
      </div>
    );
  };

  return SelectMemberSearchDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function SelectCase01({
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
