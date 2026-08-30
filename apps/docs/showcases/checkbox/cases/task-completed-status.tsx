import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Checkbox } from '@heliannuuthus/ui';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const CheckboxTasksDemo = () => {
    const tasks = [
      ['tokens', copy('确认设计令牌'), copy('核对颜色、圆角与间距变量')],
      ['docs', copy('更新组件文档'), copy('补充示例与 API 说明')],
      ['release', copy('发布新版本'), copy('完成验证后创建版本记录')],
    ] as const;
    const [completed, setCompleted] = useState(['tokens']);

    return (
      <div className="data-settings-card">
        <div className="data-card-heading">
          <div>
            <strong>{copy('发布清单')}</strong>
            <p>{copy('勾选完成的事项，文字会自动进入完成态。')}</p>
          </div>
          <span>
            {completed.length}/{tasks.length}
            {copy('已完成')}
          </span>
        </div>
        <Checkbox.Group
          aria-label={copy('发布清单')}
          className="data-option-stack"
          gap={0}
          name="release-task"
          onChange={setCompleted}
          options={tasks.map(([value, title, description]) => ({
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
          value={completed}
          variant="task"
        />
      </div>
    );
  };

  return CheckboxTasksDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function CheckboxCase02({
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
