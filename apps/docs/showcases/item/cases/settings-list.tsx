import { Cloud } from 'lucide-react';
import '@heliannuuthus/ui/styles.css';
import { Item, Switch } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <Item
      variant="muted"
      media={<Cloud />}
      mediaType="icon"
      title="自动部署预览环境"
      description="合并到 main 后自动更新预览环境。"
      actions={<Switch aria-label="自动部署预览环境" />}
    />
  );
})();

const EnExample = (() => {
  return () => (
    <Item
      variant="muted"
      media={<Cloud />}
      mediaType="icon"
      title="Automatically deploy preview environment"
      description="Update the preview environment after merging into main."
      actions={<Switch aria-label="Automatically deploy preview environment" />}
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
    <div className="demo-preview demo-preview-item">
      <Example />
    </div>
  );
}
