import '@heliannuuthus/ui/styles.css';
import { Accordion } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <Accordion
      defaultValue={['preflight', 'rollback']}
      multiple
      items={[
        {
          value: 'preflight',
          title: '预检结果',
          content: '42 项检查均已通过。',
        },
        {
          value: 'rollback',
          title: '回滚方案',
          content: '异常时切回上一版本。',
        },
      ]}
    />
  );
})();

const EnExample = (() => {
  return () => (
    <Accordion
      defaultValue={['preflight', 'rollback']}
      multiple
      items={[
        {
          value: 'preflight',
          title: 'Preflight results',
          content: '42 checks passed. ',
        },
        {
          value: 'rollback',
          title: 'Rollback plan',
          content: 'Switch back to the previous version in case of exception. ',
        },
      ]}
    />
  );
})();

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-accordion">
      <Example />
    </div>
  );
}
