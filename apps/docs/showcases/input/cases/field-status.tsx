import { Input } from '@heliannuuthus/ui';
import '@heliannuuthus/ui/styles.css';

const ZhExample = (() => {
  return () => (
    <>
      <Input defaultValue="设计系统迁移" />
      <Input aria-invalid defaultValue="my workspace" />
      <Input value="UI-2048" readOnly />
      <Input value="项目进行中" disabled />
    </>
  );
})();

const EnExample = (() => {
  return () => (
    <>
      <Input defaultValue="Design system migration" />
      <Input aria-invalid defaultValue="my workspace" />
      <Input value="UI-2048" readOnly />
      <Input value="Project in progress" disabled />
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
    <div className="demo-preview demo-preview-input">
      <Example />
    </div>
  );
}
