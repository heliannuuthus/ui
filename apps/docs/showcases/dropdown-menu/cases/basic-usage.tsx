import '@heliannuuthus/ui/styles.css';
import { Button, DropdownMenu } from '@heliannuuthus/ui';
import { FilePlus2, Trash2 } from 'lucide-react';

const ZhExample = (() => {
  return () => (
    <DropdownMenu
      trigger={<Button variant="outline">文件操作</Button>}
      items={[
        { type: 'label', label: '文件操作' },
        { label: '新建文件', icon: <FilePlus2 />, shortcut: '⌘N' },
        { label: '创建副本', disabled: true },
        { type: 'separator' },
        { label: '移至废纸篓', icon: <Trash2 />, destructive: true },
      ]}
    />
  );
})();

const EnExample = (() => {
  return () => (
    <DropdownMenu
      trigger={<Button variant="outline">File operation</Button>}
      items={[
        { type: 'label', label: 'File operation' },
        { label: 'New File', icon: <FilePlus2 />, shortcut: '⌘N' },
        { label: 'Create a copy', disabled: true },
        { type: 'separator' },
        { label: 'Move to Trash', icon: <Trash2 />, destructive: true },
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
    <div className="demo-preview demo-preview-dropdown-menu">
      <Example />
    </div>
  );
}
