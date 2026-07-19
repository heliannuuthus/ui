import type { ReactNode } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@heliannuuthus/ui/alert';
import { AspectRatio } from '@heliannuuthus/ui/aspect-ratio';
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from '@heliannuuthus/ui/avatar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@heliannuuthus/ui/breadcrumb';
import { Button } from '@heliannuuthus/ui/button';
import { ButtonGroup, ButtonGroupText } from '@heliannuuthus/ui/button-group';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@heliannuuthus/ui/card';
import { Checkbox } from '@heliannuuthus/ui/checkbox';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from '@heliannuuthus/ui/empty';
import { Input } from '@heliannuuthus/ui/input';
import { Label } from '@heliannuuthus/ui/label';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@heliannuuthus/ui/menubar';
import {
  NativeSelect,
  NativeSelectOption,
} from '@heliannuuthus/ui/native-select';
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from '@heliannuuthus/ui/progress';
import { ScrollArea } from '@heliannuuthus/ui/scroll-area';
import { Separator } from '@heliannuuthus/ui/separator';
import { Skeleton } from '@heliannuuthus/ui/skeleton';
import { Slider } from '@heliannuuthus/ui/slider';
import { Spinner } from '@heliannuuthus/ui/spinner';
import { Switch } from '@heliannuuthus/ui/switch';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@heliannuuthus/ui/table';
import { Textarea } from '@heliannuuthus/ui/textarea';
import { Toggle } from '@heliannuuthus/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@heliannuuthus/ui/toggle-group';
import { Bold, Italic, Plus } from 'lucide-react';

export const minimalComponentPreviews: Record<string, ReactNode> = {
  'button-group': (
    <ButtonGroup>
      <Button variant="outline">上一项</Button>
      <Button>下一项</Button>
      <ButtonGroupText className="border-primary/20 bg-primary/10 text-primary">
        2 / 8
      </ButtonGroupText>
    </ButtonGroup>
  ),
  'aspect-ratio': (
    <div className="minimal-aspect">
      <AspectRatio ratio={16 / 9}>
        <div className="minimal-aspect-content">16 : 9</div>
      </AspectRatio>
    </div>
  ),
  card: (
    <Card className="minimal-card">
      <CardHeader>
        <CardTitle>组件文档</CardTitle>
        <CardDescription>清晰描述组件的用途与边界。</CardDescription>
      </CardHeader>
      <CardContent>使用真实组件组合内容。</CardContent>
      <CardFooter>
        <Button size="sm">查看详情</Button>
      </CardFooter>
    </Card>
  ),
  'scroll-area': (
    <ScrollArea className="minimal-scroll">
      <div>
        {Array.from({ length: 12 }, (_, index) => (
          <p key={index}>可滚动内容 {index + 1}</p>
        ))}
      </div>
    </ScrollArea>
  ),
  separator: (
    <div className="minimal-separator">
      <strong>账户设置</strong>
      <Separator />
      <span>个人资料</span>
      <Separator orientation="vertical" />
      <span>安全</span>
    </div>
  ),
  input: (
    <div className="minimal-field">
      <Label htmlFor="preview-email">邮箱地址</Label>
      <Input id="preview-email" type="email" placeholder="name@example.com" />
    </div>
  ),
  label: (
    <div className="minimal-field">
      <Label htmlFor="preview-name">项目名称</Label>
      <Input id="preview-name" defaultValue="Heliannuuthus UI" />
    </div>
  ),
  'native-select': (
    <NativeSelect defaultValue="zh">
      <NativeSelectOption value="zh">简体中文</NativeSelectOption>
      <NativeSelectOption value="en">English</NativeSelectOption>
    </NativeSelect>
  ),
  checkbox: (
    <label className="minimal-control">
      <Checkbox defaultChecked />
      接收产品更新
    </label>
  ),
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
  textarea: (
    <Textarea className="minimal-textarea" placeholder="写下补充说明……" />
  ),
  toggle: (
    <Toggle aria-label="切换粗体">
      <Bold />
      粗体
    </Toggle>
  ),
  'toggle-group': (
    <ToggleGroup defaultValue={['bold']}>
      <ToggleGroupItem value="bold" aria-label="粗体">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="斜体">
        <Italic />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  alert: (
    <Alert className="minimal-alert">
      <AlertTitle>配置已保存</AlertTitle>
      <AlertDescription>新的主题设置已经应用到当前工作区。</AlertDescription>
    </Alert>
  ),
  progress: (
    <Progress className="minimal-progress" value={68}>
      <ProgressLabel>文档覆盖率</ProgressLabel>
      <ProgressValue />
    </Progress>
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
    <Empty className="minimal-empty">
      <EmptyHeader>
        <EmptyTitle>还没有项目</EmptyTitle>
        <EmptyDescription>创建第一个项目开始使用组件库。</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">
          <Plus />
          新建项目
        </Button>
      </EmptyContent>
    </Empty>
  ),
  avatar: (
    <AvatarGroup>
      <Avatar>
        <AvatarFallback>HN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>UI</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>
  ),
  breadcrumb: (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">组件</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
  menubar: (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>文件</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            新建窗口
            <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            打开文件
            <MenubarShortcut>⌘O</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>退出</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>编辑</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            撤销
            <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            重做
            <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>帮助</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>组件文档</MenubarItem>
          <MenubarItem>快捷键</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
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
