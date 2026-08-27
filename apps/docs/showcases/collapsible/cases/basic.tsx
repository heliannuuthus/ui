import '@heliannuuthus/ui/styles.css';
import { Collapsible } from '@heliannuuthus/ui';
import '../../case.css';

export default function CollapsibleBasicCase({
  locale = 'zh',
}: {
  locale?: 'zh' | 'en';
}) {
  const english = locale === 'en';

  return (
    <Collapsible
      className="collapsible-case"
      classNames={{ content: 'collapsible-case-content' }}
      content={
        <p>
          {english
            ? 'Improves filter responsiveness and fixes the transition from the last carousel item back to the first.'
            : '优化筛选器响应速度，并修复轮播从最后一项回到第一项时的切换动效。'}
        </p>
      }
      defaultOpen
      header={
        <span className="collapsible-case-summary">
          <strong>
            {english
              ? 'This release includes 6 changes'
              : '本次发布包含 6 项变更'}
          </strong>
          <span>
            {english ? 'Select the header to collapse' : '点击 Header 收起内容'}
          </span>
        </span>
      }
    />
  );
}
