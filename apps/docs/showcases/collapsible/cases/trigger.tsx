import '@heliannuuthus/ui/styles.css';
import { Collapsible } from '@heliannuuthus/ui';
import '../../case.css';

export default function CollapsibleTriggerCase({
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
              ? 'The entire summary area toggles the open state.'
              : '整个摘要区域都可以切换展开状态。'}
          </p>
        }
        header={<strong>{english ? 'Header trigger' : 'Header 触发'}</strong>}
      />
      <Collapsible
        className="collapsible-case"
        classNames={{
          content: 'collapsible-case-content',
          header: 'p-3',
        }}
        content={
          <p>
            {english
              ? 'The header stays static and only the button controls the content.'
              : 'Header 保持静态，只由右侧按钮控制。'}
          </p>
        }
        header={<strong>{english ? 'Separate button' : '独立按钮触发'}</strong>}
        trigger={english ? 'Configure' : '配置'}
        triggerProps={{ size: 'sm', variant: 'outline' }}
      />
    </div>
  );
}
