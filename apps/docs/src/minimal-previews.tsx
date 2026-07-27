import type { ReactNode } from 'react';
import { Alert } from '@heliannuuthus/ui';
import { Avatar } from '@heliannuuthus/ui';
import { Breadcrumb } from '@heliannuuthus/ui';
import { Button } from '@heliannuuthus/ui';
import { Checkbox } from '@heliannuuthus/ui';
import { Command } from '@heliannuuthus/ui';
import { ContextMenu } from '@heliannuuthus/ui';
import { Counter } from '@heliannuuthus/ui';
import { DirectionProvider } from '@heliannuuthus/ui';
import { Empty } from '@heliannuuthus/ui';
import { Input } from '@heliannuuthus/ui';
import { Label } from '@heliannuuthus/ui';
import { Menubar } from '@heliannuuthus/ui';
import { Progress } from '@heliannuuthus/ui';
import { ScrollArea } from '@heliannuuthus/ui';
import { Skeleton } from '@heliannuuthus/ui';
import { Slider } from '@heliannuuthus/ui';
import { Spinner } from '@heliannuuthus/ui';
import { Switch } from '@heliannuuthus/ui';
import { Table } from '@heliannuuthus/ui';
import { Toggle } from '@heliannuuthus/ui';
import {
  ArrowLeft,
  Bold,
  Copy,
  FilePlus2,
  Plus,
  Settings2,
  Trash2,
} from 'lucide-react';
import { AspectRatioCoverDemo } from './aspect-ratio-preview';
import { CardBasicDemo } from './card-preview';
import { ResizableWorkspaceDemo } from './resizable-preview';

export const minimalComponentPreviews: Record<string, ReactNode> = {
  'aspect-ratio': <AspectRatioCoverDemo />,
  card: <CardBasicDemo />,
  resizable: <ResizableWorkspaceDemo />,
  'scroll-area': (
    <ScrollArea className="minimal-scroll">
      <div>
        {Array.from({ length: 12 }, (_, index) => (
          <p key={index}>可滚动内容 {index + 1}</p>
        ))}
      </div>
    </ScrollArea>
  ),
  input: (
    <div className="minimal-field">
      <Label htmlFor="preview-email">邮箱地址</Label>
      <Input id="preview-email" type="email" placeholder="name@example.com" />
    </div>
  ),
  checkbox: <Checkbox className="minimal-control">接收产品更新</Checkbox>,
  counter: <Counter fontSize={52} fontWeight={600} value={7.4} />,
  slider: (
    <div className="minimal-slider">
      <span>音量</span>
      <Slider defaultValue={[64]} max={100} />
    </div>
  ),
  switch: (
    <label className="minimal-control">
      <Switch defaultChecked />
      启用通知
    </label>
  ),
  toggle: (
    <Toggle aria-label="切换粗体" defaultValue>
      <Bold />
      粗体
    </Toggle>
  ),
  alert: (
    <Alert
      className="minimal-alert"
      description="新的主题设置已经应用到当前工作区。"
      title="配置已保存"
    />
  ),
  progress: (
    <Progress
      className="minimal-progress"
      label="文档覆盖率"
      showValue
      value={68}
    />
  ),
  skeleton: (
    <div className="minimal-skeleton">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div>
        <Skeleton className="h-4 w-44" />
        <Skeleton className="mt-2 h-3 w-28" />
      </div>
    </div>
  ),
  spinner: (
    <div className="minimal-control">
      <Spinner />
      正在加载组件……
    </div>
  ),
  empty: (
    <Empty
      actions={
        <Button size="sm">
          <Plus />
          新建项目
        </Button>
      }
      className="minimal-empty"
      description="创建第一个项目开始使用组件库。"
      title="还没有项目"
    />
  ),
  avatar: (
    <Avatar.Group
      items={['HN', 'UI', '林', '周', '陈'].map((fallback) => ({
        alt: fallback,
        fallback,
      }))}
      max={2}
    />
  ),
  breadcrumb: (
    <Breadcrumb
      items={[{ label: '组件', href: '#' }, { label: 'Breadcrumb' }]}
    />
  ),
  menubar: (
    <Menubar
      menus={[
        {
          label: '文件',
          items: [
            { label: '新建窗口', shortcut: '⌘N' },
            { label: '打开文件', shortcut: '⌘O' },
            { type: 'separator' },
            { label: '退出' },
          ],
        },
        {
          label: '编辑',
          items: [
            { label: '撤销', shortcut: '⌘Z' },
            { label: '重做', shortcut: '⇧⌘Z' },
          ],
        },
        {
          label: '帮助',
          items: [{ label: '组件文档' }, { label: '快捷键' }],
        },
      ]}
    />
  ),
  command: (
    <Command
      className="minimal-command"
      groups={[
        {
          heading: '常用命令',
          options: [
            {
              icon: <FilePlus2 />,
              label: '新建文件',
              shortcut: '⌘N',
              value: 'new-file',
            },
            {
              icon: <Settings2 />,
              label: '打开设置',
              shortcut: '⌘,',
              value: 'settings',
            },
          ],
        },
      ]}
      placeholder="搜索命令…"
    />
  ),
  'context-menu': (
    <ContextMenu
      items={[
        { icon: <Copy />, label: '复制链接', shortcut: '⌘C' },
        { icon: <Settings2 />, label: '项目设置' },
        { type: 'separator' },
        { destructive: true, icon: <Trash2 />, label: '删除项目' },
      ]}
      trigger={
        <button className="minimal-context-menu-trigger" type="button">
          <span>组件文档</span>
          <small>在这里单击右键</small>
        </button>
      }
    />
  ),
  direction: (
    <DirectionProvider direction="rtl">
      <div className="minimal-direction" dir="rtl">
        <div>
          <strong>واجهة عربية</strong>
          <span>组件布局会跟随阅读方向排列</span>
        </div>
        <Button variant="outline">
          下一步
          <ArrowLeft />
        </Button>
      </div>
    </DirectionProvider>
  ),
  table: (
    <Table className="minimal-table">
      <Table.Header>
        <Table.Row>
          <Table.Head>组件</Table.Head>
          <Table.Head>状态</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Button</Table.Cell>
          <Table.Cell>稳定</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Dialog</Table.Cell>
          <Table.Cell>稳定</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};
