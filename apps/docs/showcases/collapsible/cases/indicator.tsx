import '@heliannuuthus/ui/styles.css';
import { Collapsible } from '@heliannuuthus/ui';
import { ChevronRight } from 'lucide-react';
import '../../case.css';

export default function CollapsibleIndicatorCase({
  locale = 'zh',
}: {
  locale?: 'zh' | 'en';
}) {
  const english = locale === 'en';

  return (
    <div className="component-case-grid is-split">
      <Collapsible
        className="collapsible-case"
        classNames={{ content: 'collapsible-case-content' }}
        content={
          <p>
            {english
              ? 'A custom icon still rotates with the open state.'
              : '自定义图标仍会跟随展开状态旋转。'}
          </p>
        }
        header={<strong>{english ? 'Custom icon' : '自定义图标'}</strong>}
        indicator={<ChevronRight />}
      />
      <Collapsible
        className="collapsible-case"
        classNames={{ content: 'collapsible-case-content' }}
        content={
          <p>
            {english
              ? 'Hiding the icon preserves button semantics and keyboard interaction.'
              : '隐藏图标后仍保留按钮语义和键盘操作。'}
          </p>
        }
        header={<strong>{english ? 'Hidden icon' : '隐藏图标'}</strong>}
        indicator={false}
      />
    </div>
  );
}
