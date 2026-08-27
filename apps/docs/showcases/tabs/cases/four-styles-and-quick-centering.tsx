import '@heliannuuthus/ui/styles.css';
import { Tabs } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <Tabs
      defaultValue="preview"
      variant="line"
      centered
      items={[
        { value: 'preview', label: '预览', content: '实时预览当前组件。' },
        { value: 'code', label: '代码', content: '查看组件实现代码。' },
      ]}
    />
  );
})();

const EnExample = (() => {
  return () => (
    <Tabs
      defaultValue="preview"
      variant="line"
      centered
      items={[
        {
          value: 'preview',
          label: 'Preview',
          content: 'Preview the current component in real time. ',
        },
        {
          value: 'code',
          label: 'code',
          content: 'View component implementation code. ',
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
    <div className="demo-preview demo-preview-tabs">
      <Example />
    </div>
  );
}
