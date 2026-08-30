import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Checkbox } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const CheckboxPermissionsDemo = () => {
    const [selected, setSelected] = useState(['read', 'comment']);
    const permissions = [
      ['read', copy('查看项目'), copy('浏览页面、文件与活动记录')],
      ['comment', copy('参与评论'), copy('回复讨论并提及团队成员')],
      ['manage', copy('管理项目'), copy('修改设置并邀请新成员')],
    ] as const;

    return (
      <div className="data-settings-card">
        <div className="data-card-heading">
          <div>
            <strong>{copy('成员权限')}</strong>
            <p>{copy('为外部协作者设置可执行的操作。')}</p>
          </div>
          <span>
            {selected.length}
            {copy('项已开启')}
          </span>
        </div>
        <Checkbox.Group
          aria-label={copy('成员权限')}
          className="data-option-stack"
          gap={0}
          name="permission"
          onChange={setSelected}
          options={permissions.map(([value, title, description]) => ({
            className: 'data-check-row',
            label: (
              <span className="data-check-copy">
                <strong>{title}</strong>
                <small>{description}</small>
              </span>
            ),
            value,
          }))}
          orientation="vertical"
          value={selected}
        />
      </div>
    );
  };

  return CheckboxPermissionsDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function CheckboxCase03({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-checkbox">
      <Example />
    </div>
  );
}
