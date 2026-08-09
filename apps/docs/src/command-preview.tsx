import { docsCopy } from './i18n/content';
import { useState } from 'react';
import { Button, Command, type CommandGroup } from '@heliannuuthus/ui';
import {
  FilePlus2,
  FolderOpen,
  MoonStar,
  SearchX,
  Settings2,
} from 'lucide-react';

const createGroups = (onSelect?: (label: string) => void): CommandGroup[] => [
  {
    heading: docsCopy('文件与项目'),
    options: [
      {
        icon: <FilePlus2 />,
        keywords: ['create', 'document'],
        label: docsCopy('新建文件'),
        onSelect: () => onSelect?.(docsCopy('新建文件')),
        shortcut: '⌘N',
        value: 'new-file',
      },
      {
        icon: <FolderOpen />,
        keywords: ['folder', 'recent'],
        label: docsCopy('打开文件'),
        onSelect: () => onSelect?.(docsCopy('打开文件')),
        shortcut: '⌘O',
        value: 'open-file',
      },
    ],
  },
  {
    heading: docsCopy('偏好设置'),
    options: [
      {
        icon: <Settings2 />,
        keywords: ['preferences', 'configuration'],
        label: docsCopy('打开设置'),
        onSelect: () => onSelect?.(docsCopy('打开设置')),
        shortcut: '⌘,',
        value: 'settings',
      },
      {
        disabled: true,
        icon: <MoonStar />,
        keywords: ['appearance', 'dark'],
        label: docsCopy('切换主题'),
        value: 'toggle-theme',
      },
    ],
  },
];

export const CommandGroupsDemo = () => {
  const [selected, setSelected] = useState(docsCopy('尚未执行命令'));

  return (
    <div className="command-demo-stack">
      <Command
        className="minimal-command"
        groups={createGroups((label) =>
          setSelected(docsCopy(`已执行：${label}`))
        )}
        placeholder={docsCopy('搜索文件、设置或主题…')}
      />
      <p aria-live="polite" className="data-result">
        {selected}
      </p>
    </div>
  );
};

export const CommandPlaceholderDemo = () => {
  return (
    <Command
      className="minimal-command"
      groups={createGroups()}
      placeholder={docsCopy('搜索文件、设置或主题…')}
    />
  );
};

export const CommandEmptyDemo = () => {
  const [query, setQuery] = useState(docsCopy('不存在的命令'));

  return (
    <Command
      className="minimal-command"
      emptyText={
        <div className="command-demo-empty">
          <SearchX aria-hidden="true" />
          <strong>{docsCopy('没有匹配的命令')}</strong>
          <span>{docsCopy('请尝试更短或不同的关键词。')}</span>
        </div>
      }
      groups={createGroups()}
      inputProps={{ onChange: setQuery, value: query }}
      placeholder={docsCopy('搜索命令…')}
    />
  );
};

export const CommandDialogDemo = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(docsCopy('尚未执行命令'));

  return (
    <div className="command-dialog-demo">
      <Command
        dialog={{
          description: docsCopy('搜索并执行当前工作区中的快捷操作。'),
          open,
          title: docsCopy('快速操作'),
          trigger: (
            <Button variant="outline">{docsCopy('打开命令面板')}</Button>
          ),
          onOpenChange: setOpen,
        }}
        groups={createGroups((label) => {
          setSelected(docsCopy(`已执行：${label}`));
          setOpen(false);
        })}
        inputProps={{ autoFocus: true }}
        placeholder={docsCopy('搜索文件、设置或主题…')}
      />
      <p aria-live="polite" className="data-result">
        {selected}
      </p>
    </div>
  );
};
