import '@heliannuuthus/ui/styles.css';
import { Command } from '@heliannuuthus/ui';

const ZhExample = (() => {
  return () => (
    <Command
      groups={[
        {
          heading: '常用命令',
          options: [
            { label: '新建文件', shortcut: '⌘N', value: 'new-file' },
            { label: '打开设置', shortcut: '⌘,', value: 'settings' },
          ],
        },
      ]}
    />
  );
})();

const EnExample = (() => {
  return () => (
    <Command
      groups={[
        {
          heading: 'Common commands',
          options: [
            { label: 'New File', shortcut: '⌘N', value: 'new-file' },
            { label: 'Open settings', shortcut: '⌘,', value: 'settings' },
          ],
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
    <div className="demo-preview demo-preview-command">
      <Example />
    </div>
  );
}
