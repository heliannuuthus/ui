import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Command, type CommandGroup } from '@heliannuuthus/ui';
import { FilePlus2, FolderOpen, MoonStar, Settings2 } from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const createGroups = (onSelect?: (label: string) => void): CommandGroup[] => [
    {
      heading: copy('文件与项目'),
      options: [
        {
          icon: <FilePlus2 />,
          keywords: ['create', 'document'],
          label: copy('新建文件'),
          onSelect: () => onSelect?.(copy('新建文件')),
          shortcut: '⌘N',
          value: 'new-file',
        },
        {
          icon: <FolderOpen />,
          keywords: ['folder', 'recent'],
          label: copy('打开文件'),
          onSelect: () => onSelect?.(copy('打开文件')),
          shortcut: '⌘O',
          value: 'open-file',
        },
      ],
    },
    {
      heading: copy('偏好设置'),
      options: [
        {
          icon: <Settings2 />,
          keywords: ['preferences', 'configuration'],
          label: copy('打开设置'),
          onSelect: () => onSelect?.(copy('打开设置')),
          shortcut: '⌘,',
          value: 'settings',
        },
        {
          disabled: true,
          icon: <MoonStar />,
          keywords: ['appearance', 'dark'],
          label: copy('切换主题'),
          value: 'toggle-theme',
        },
      ],
    },
  ];

  const CommandGroupsDemo = () => {
    const [selected, setSelected] = useState(copy('尚未执行命令'));

    return (
      <div className="command-demo-stack">
        <Command
          className="minimal-command"
          groups={createGroups((label) =>
            setSelected(copy(`已执行：${label}`))
          )}
          placeholder={copy('搜索文件、设置或主题…')}
        />
        <p aria-live="polite" className="data-result">
          {selected}
        </p>
      </div>
    );
  };

  return CommandGroupsDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function CommandCase02({
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
