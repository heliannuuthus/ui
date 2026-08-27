import '@heliannuuthus/ui/styles.css';
import { Resizable } from '@heliannuuthus/ui';
import { GripVertical } from 'lucide-react';

const ZhExample = (() => {
  const Workspace = () => {
    return (
      <Resizable
        orientation="horizontal"
        separator={<GripVertical aria-hidden />}
        items={[
          { key: 'files', panel: '文件列表', size: ['34', '24'] },
          { key: 'preview', panel: '内容预览', size: ['66', '40'] },
        ]}
      />
    );
  };

  return Workspace;
})();

const EnExample = (() => {
  const Workspace = () => {
    return (
      <Resizable
        orientation="horizontal"
        separator={<GripVertical aria-hidden />}
        items={[
          { key: 'files', panel: 'file list', size: ['34', '24'] },
          { key: 'preview', panel: 'content preview', size: ['66', '40'] },
        ]}
      />
    );
  };

  return Workspace;
})();

export default function ExampleCase({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-resizable">
      <Example />
    </div>
  );
}
