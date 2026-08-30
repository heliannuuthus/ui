import '@heliannuuthus/ui/styles.css';
import { Tag } from '@heliannuuthus/ui';
import { CircleCheck, LockKeyhole } from 'lucide-react';

const ZhExample = (() => {
  return () => (
    <>
      <Tag type="success">
        <CircleCheck aria-hidden="true" data-icon="inline-start" />
        已同步
      </Tag>
      <Tag type="info">
        受保护
        <LockKeyhole aria-hidden="true" data-icon="inline-end" />
      </Tag>
    </>
  );
})();

const EnExample = (() => {
  return () => (
    <>
      <Tag type="success">
        <CircleCheck aria-hidden="true" data-icon="inline-start" />
        Synced
      </Tag>
      <Tag type="info">
        Protected
        <LockKeyhole aria-hidden="true" data-icon="inline-end" />
      </Tag>
    </>
  );
})();

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-tag">
      <Example />
    </div>
  );
}
