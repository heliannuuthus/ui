import { docsCopy } from './i18n/content';
import { useState, type ReactNode } from 'react';
import { Button } from '@heliannuuthus/ui';
import { DropdownMenu, type DropdownMenuEntry } from '@heliannuuthus/ui';
import {
  Archive,
  ChevronDown,
  Copy,
  Download,
  FileImage,
  FilePlus2,
  FileSpreadsheet,
  FileText,
  MoreHorizontal,
  PanelLeft,
  Trash2,
  Upload,
} from 'lucide-react';

function DemoFrame({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="dropdown-menu-demo">
      <div>
        <span>{eyebrow}</span>
        <strong>{title}</strong>
      </div>
      {children}
    </div>
  );
}

export function DropdownMenuActionsDemo() {
  const [lastAction, setLastAction] = useState(docsCopy('等待选择'));
  const items: DropdownMenuEntry[] = [
    { type: 'label', label: docsCopy('文件操作') },
    {
      label: docsCopy('新建文件'),
      icon: <FilePlus2 />,
      shortcut: '⌘N',
      onSelect: () => setLastAction(docsCopy('已选择：新建文件')),
    },
    {
      label: docsCopy('上传文件'),
      icon: <Upload />,
      shortcut: '⇧⌘U',
      onSelect: () => setLastAction(docsCopy('已选择：上传文件')),
    },
    {
      label: docsCopy('创建副本'),
      icon: <Copy />,
      disabled: true,
    },
    { type: 'separator' },
    {
      label: docsCopy('归档'),
      icon: <Archive />,
      onSelect: () => setLastAction(docsCopy('已选择：归档')),
    },
    {
      label: docsCopy('移至废纸篓'),
      icon: <Trash2 />,
      destructive: true,
      onSelect: () => setLastAction(docsCopy('已选择：移至废纸篓')),
    },
  ];

  return (
    <DemoFrame eyebrow={docsCopy('常用操作')} title={lastAction}>
      <DropdownMenu
        trigger={
          <Button variant="outline">
            {docsCopy('文件操作')}
            <ChevronDown />
          </Button>
        }
        items={items}
      />
    </DemoFrame>
  );
}

export function DropdownMenuSelectionDemo() {
  const [sidebar, setSidebar] = useState(true);
  const [density, setDensity] = useState('comfortable');
  const densityLabel =
    density === 'compact' ? docsCopy('紧凑') : docsCopy('舒适');

  return (
    <DemoFrame
      eyebrow={docsCopy('界面设置')}
      title={docsCopy(`侧栏${sidebar ? '开启' : '关闭'} · ${densityLabel}`)}
    >
      <DropdownMenu
        align="center"
        trigger={
          <Button variant="outline">
            <PanelLeft />
            {docsCopy('视图设置')}
          </Button>
        }
        items={[
          { type: 'label', label: docsCopy('显示内容') },
          {
            type: 'checkbox',
            label: docsCopy('显示侧栏'),
            checked: sidebar,
            onCheckedChange: setSidebar,
          },
          { type: 'separator' },
          { type: 'label', label: docsCopy('内容密度') },
          {
            type: 'radio',
            value: density,
            onValueChange: setDensity,
            items: [
              { label: docsCopy('紧凑'), value: 'compact' },
              { label: docsCopy('舒适'), value: 'comfortable' },
            ],
          },
        ]}
      />
    </DemoFrame>
  );
}

export function DropdownMenuSubmenuDemo() {
  const [format, setFormat] = useState(docsCopy('尚未选择格式'));

  return (
    <DemoFrame eyebrow={docsCopy('分层操作')} title={format}>
      <DropdownMenu
        size="lg"
        align="end"
        trigger={
          <Button>
            <Download />
            {docsCopy('导出')}
            <MoreHorizontal />
          </Button>
        }
        items={[
          {
            label: docsCopy('导出为'),
            icon: <Download />,
            children: [
              {
                label: docsCopy('PDF 文档'),
                icon: <FileText />,
                onSelect: () => setFormat(docsCopy('已选择：PDF 文档')),
              },
              {
                label: docsCopy('PNG 图片'),
                icon: <FileImage />,
                onSelect: () => setFormat(docsCopy('已选择：PNG 图片')),
              },
              {
                label: docsCopy('CSV 表格'),
                icon: <FileSpreadsheet />,
                onSelect: () => setFormat(docsCopy('已选择：CSV 表格')),
              },
            ],
          },
          { type: 'separator' },
          {
            label: docsCopy('下载原始文件'),
            icon: <Download />,
            onSelect: () => setFormat(docsCopy('已选择：原始文件')),
          },
        ]}
      />
    </DemoFrame>
  );
}
