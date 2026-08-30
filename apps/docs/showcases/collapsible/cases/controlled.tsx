import '@heliannuuthus/ui/styles.css';
import { Collapsible } from '@heliannuuthus/ui';
import { useState } from 'react';
import '../../case.css';

export default function CollapsibleControlledCase({
  locale = 'zh',
}: {
  locale?: 'zh' | 'en';
}) {
  const [open, setOpen] = useState(false);
  const english = locale === 'en';

  return (
    <div className="component-case-grid is-split">
      <Collapsible
        className="collapsible-case"
        classNames={{ content: 'collapsible-case-content' }}
        content={
          <p>
            {english
              ? 'The consumer reads and updates the open state.'
              : '展开状态由调用方读取和更新。'}
          </p>
        }
        header={
          <span className="collapsible-case-summary">
            <strong>{english ? 'Controlled state' : '受控状态'}</strong>
            <span>
              {english
                ? open
                  ? 'Expanded'
                  : 'Collapsed'
                : open
                  ? '已展开'
                  : '已收起'}
            </span>
          </span>
        }
        onOpenChange={setOpen}
        open={open}
      />
      <Collapsible
        className="collapsible-case"
        classNames={{ content: 'collapsible-case-content' }}
        content={
          <p>
            {english
              ? 'The disabled state ignores pointer and keyboard input.'
              : '禁用状态不会响应指针或键盘操作。'}
          </p>
        }
        disabled
        header={
          <strong>{english ? 'Disabled summary' : '不可展开的摘要'}</strong>
        }
      />
    </div>
  );
}
