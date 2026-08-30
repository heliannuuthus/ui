import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Button, Command, type CommandGroup } from '@heliannuuthus/ui';
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

  const CommandDialogDemo = () => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(copy('尚未执行命令'));

    return (
      <div className="command-dialog-demo">
        <Command
          dialog={{
            description: copy('搜索并执行当前工作区中的快捷操作。'),
            open,
            title: copy('快速操作'),
            trigger: <Button variant="outline">{copy('打开命令面板')}</Button>,
            onOpenChange: setOpen,
          }}
          groups={createGroups((label) => {
            setSelected(copy(`已执行：${label}`));
            setOpen(false);
          })}
          inputProps={{ autoFocus: true }}
          placeholder={copy('搜索文件、设置或主题…')}
        />
        <p aria-live="polite" className="data-result">
          {selected}
        </p>
      </div>
    );
  };

  return CommandDialogDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function CommandCase05({
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
