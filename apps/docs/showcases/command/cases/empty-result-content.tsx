import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Command, type CommandGroup } from '@heliannuuthus/ui';
import {
  FilePlus2,
  FolderOpen,
  MoonStar,
  SearchX,
  Settings2,
} from 'lucide-react';
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

  const CommandEmptyDemo = () => {
    const [query, setQuery] = useState(copy('不存在的命令'));

    return (
      <Command
        className="minimal-command"
        emptyText={
          <div className="command-demo-empty">
            <SearchX aria-hidden="true" />
            <strong>{copy('没有匹配的命令')}</strong>
            <span>{copy('请尝试更短或不同的关键词。')}</span>
          </div>
        }
        groups={createGroups()}
        inputProps={{ onChange: setQuery, value: query }}
        placeholder={copy('搜索命令…')}
      />
    );
  };

  return CommandEmptyDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function CommandCase04({
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
