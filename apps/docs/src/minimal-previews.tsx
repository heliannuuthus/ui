import type { ReactNode } from 'react';
import { Alert } from '@heliannuuthus/ui/alert';
import { Group as AvatarGroup } from '@heliannuuthus/ui/avatar';
import { Breadcrumb } from '@heliannuuthus/ui/breadcrumb';
import { Button } from '@heliannuuthus/ui/button';
import { Checkbox } from '@heliannuuthus/ui/checkbox';
import { Counter } from '@heliannuuthus/ui/counter';
import { Empty } from '@heliannuuthus/ui/empty';
import { Input } from '@heliannuuthus/ui/input';
import { Label } from '@heliannuuthus/ui/label';
import { Menubar } from '@heliannuuthus/ui/menubar';
import { Progress } from '@heliannuuthus/ui/progress';
import { ScrollArea } from '@heliannuuthus/ui/scroll-area';
import { Skeleton } from '@heliannuuthus/ui/skeleton';
import { Slider } from '@heliannuuthus/ui/slider';
import { Spinner } from '@heliannuuthus/ui/spinner';
import { Switch } from '@heliannuuthus/ui/switch';
import {
  Body as TableBody,
  Cell as TableCell,
  Head as TableHead,
  Header as TableHeader,
  Row as TableRow,
  Table,
} from '@heliannuuthus/ui/table';
import { Toggle } from '@heliannuuthus/ui/toggle';
import { Bold, Plus } from 'lucide-react';
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
    <AvatarGroup
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
  table: (
    <Table className="minimal-table">
      <TableHeader>
        <TableRow>
          <TableHead>组件</TableHead>
          <TableHead>状态</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Button</TableCell>
          <TableCell>稳定</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Dialog</TableCell>
          <TableCell>稳定</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
