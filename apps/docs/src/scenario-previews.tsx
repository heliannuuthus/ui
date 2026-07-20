'use client';

import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@heliannuuthus/ui/accordion';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@heliannuuthus/ui/alert-dialog';
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from '@heliannuuthus/ui/attachment';
import { Bubble, BubbleContent, BubbleGroup } from '@heliannuuthus/ui/bubble';
import { Button } from '@heliannuuthus/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@heliannuuthus/ui/carousel';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@heliannuuthus/ui/chart';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@heliannuuthus/ui/collapsible';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from '@heliannuuthus/ui/command';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from '@heliannuuthus/ui/context-menu';
import { DataTable } from '@heliannuuthus/ui/data-table';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@heliannuuthus/ui/dialog';
import { DirectionProvider } from '@heliannuuthus/ui/direction';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@heliannuuthus/ui/drawer';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@heliannuuthus/ui/hover-card';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from '@heliannuuthus/ui/item';
import { Marker, MarkerContent, MarkerIcon } from '@heliannuuthus/ui/marker';
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from '@heliannuuthus/ui/message';
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from '@heliannuuthus/ui/message-scroller';
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from '@heliannuuthus/ui/popover';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@heliannuuthus/ui/sheet';
import { toast, Toaster } from '@heliannuuthus/ui/toast';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@heliannuuthus/ui/tooltip';
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Download,
  FileText,
  FolderOpen,
  Inbox,
  MoreHorizontal,
  Search,
  Share2,
  Trash2,
  UserRound,
} from 'lucide-react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

const memberColumns = [
  { accessorKey: 'name', header: '成员' },
  { accessorKey: 'role', header: '角色' },
  { accessorKey: 'status', header: '状态' },
];

const memberData = [
  { name: '林夏', role: '设计', status: '在线' },
  { name: '周一', role: '前端', status: '忙碌' },
  { name: '陈青', role: '产品', status: '离线' },
];

const chartData = [
  { month: '一月', visits: 38 },
  { month: '二月', visits: 56 },
  { month: '三月', visits: 44 },
  { month: '四月', visits: 72 },
];

export function AccordionScenarioDemo() {
  return (
    <Accordion className="w-full max-w-lg" defaultValue={['account']}>
      <AccordionItem value="account">
        <AccordionTrigger>如何修改工作区名称？</AccordionTrigger>
        <AccordionContent>
          在工作区设置的“基本信息”中修改，保存后会同步给所有成员。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="billing">
        <AccordionTrigger>账单在哪里下载？</AccordionTrigger>
        <AccordionContent>
          进入账单与用量页面，选择月份后即可下载 PDF 发票。
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function AttachmentScenarioDemo() {
  return (
    <div className="grid gap-3">
      <Attachment>
        <AttachmentMedia>
          <FileText />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>产品需求说明.pdf</AttachmentTitle>
          <AttachmentDescription>2.4 MB · 上传完成</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="下载附件">
            <Download />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>
      <Attachment state="error">
        <AttachmentMedia>
          <FileText />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>研究数据.csv</AttachmentTitle>
          <AttachmentDescription>上传失败，请重试</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
    </div>
  );
}

export function CarouselScenarioDemo() {
  return (
    <Carousel className="w-full max-w-sm" opts={{ loop: true }}>
      <CarouselContent>
        {['建立结构', '完善状态', '交付验证'].map((title, index) => (
          <CarouselItem key={title}>
            <div className="grid h-44 place-content-center gap-2 rounded-3xl border bg-background text-center">
              <span className="text-xs text-muted-foreground">
                0{index + 1} / 03
              </span>
              <strong>{title}</strong>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export function ChartScenarioDemo() {
  return (
    <ChartContainer
      className="min-h-64 w-full max-w-xl"
      config={{ visits: { label: '访问量', color: 'var(--primary)' } }}
    >
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="visits" fill="var(--color-visits)" radius={8} />
      </BarChart>
    </ChartContainer>
  );
}

export function CollapsibleScenarioDemo() {
  return (
    <Collapsible className="w-full max-w-md rounded-3xl border bg-background p-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <strong className="text-sm">高级筛选</strong>
          <p className="text-xs text-muted-foreground">
            按负责人和更新时间缩小范围
          </p>
        </div>
        <CollapsibleTrigger render={<Button variant="outline" size="sm" />}>
          展开
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="pt-4 text-sm text-muted-foreground">
        负责人：全部成员 · 更新时间：最近 30 天
      </CollapsibleContent>
    </Collapsible>
  );
}

export function DataTableScenarioDemo() {
  return (
    <div className="w-full max-w-2xl">
      <DataTable
        columns={memberColumns}
        data={memberData}
        filterColumn="name"
        filterPlaceholder="搜索成员…"
      />
    </div>
  );
}

export function HoverCardScenarioDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger render={<a href="#member">@林夏</a>} />
      <HoverCardContent>
        <div className="flex gap-3">
          <div className="grid size-10 place-content-center rounded-full bg-muted">
            <UserRound className="size-5" />
          </div>
          <div>
            <strong>林夏</strong>
            <p className="mt-1 text-xs text-muted-foreground">
              产品设计师 · 最近参与 8 个组件评审
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export function ItemScenarioDemo() {
  return (
    <ItemGroup className="w-full max-w-lg">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <FolderOpen />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>设计系统</ItemTitle>
          <ItemDescription>18 个组件 · 2 分钟前更新</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="ghost" size="icon-sm" aria-label="更多操作">
            <MoreHorizontal />
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemMedia variant="icon">
          <Inbox />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>增长实验</ItemTitle>
          <ItemDescription>5 个待处理请求</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  );
}

export function MarkerScenarioDemo() {
  return (
    <div className="grid w-full max-w-lg gap-5">
      <Marker variant="separator">
        <MarkerContent>今天</MarkerContent>
      </Marker>
      <Marker variant="border">
        <MarkerIcon>
          <CalendarDays />
        </MarkerIcon>
        <MarkerContent>14:30 · 组件文档已更新</MarkerContent>
      </Marker>
    </div>
  );
}

export function MessageScenarioDemo() {
  return (
    <MessageScrollerProvider>
      <MessageScroller className="h-72 w-full max-w-xl rounded-3xl border bg-background p-4">
        <MessageScrollerViewport>
          <MessageScrollerContent>
            <MessageScrollerItem>
              <MessageGroup>
                <Message>
                  <MessageAvatar>HN</MessageAvatar>
                  <MessageContent>
                    <MessageHeader>Heliannuuthus · 14:28</MessageHeader>
                    <BubbleGroup>
                      <Bubble variant="muted">
                        <BubbleContent>
                          把基础用法和范围选择放到同一行。
                        </BubbleContent>
                      </Bubble>
                    </BubbleGroup>
                    <MessageFooter>已发送</MessageFooter>
                  </MessageContent>
                </Message>
                <Message align="end">
                  <MessageAvatar>UI</MessageAvatar>
                  <MessageContent>
                    <BubbleGroup>
                      <Bubble align="end">
                        <BubbleContent>
                          已经按结构化布局整理好了。
                        </BubbleContent>
                      </Bubble>
                    </BubbleGroup>
                    <MessageFooter>刚刚</MessageFooter>
                  </MessageContent>
                </Message>
              </MessageGroup>
            </MessageScrollerItem>
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton />
      </MessageScroller>
    </MessageScrollerProvider>
  );
}

export function TooltipScenarioDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          render={<Button variant="outline" size="icon" aria-label="分享" />}
        >
          <Share2 />
        </TooltipTrigger>
        <TooltipContent>分享当前页面</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function AlertDialogScenarioDemo() {
  const [open, setOpen] = useState(false);
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger
        render={<Button variant="destructive">删除项目</Button>}
      />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>确认删除“增长实验”？</AlertDialogTitle>
          <AlertDialogDescription>
            项目和 12 条实验记录将被永久删除，此操作无法撤销。
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>取消</AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            onClick={() => setOpen(false)}
          >
            确认删除
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function DialogScenarioDemo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">编辑资料</Button>} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>编辑工作区资料</DialogTitle>
          <DialogDescription>
            修改名称和说明后，所有成员都会看到最新内容。
          </DialogDescription>
        </DialogHeader>
        <div className="rounded-2xl border bg-muted/40 p-4 text-sm">
          工作区名称：Heliannuuthus UI
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>取消</DialogClose>
          <DialogClose render={<Button />}>保存</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function DrawerScenarioDemo() {
  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline">查看移动筛选</Button>} />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>筛选项目</DrawerTitle>
          <DrawerDescription>向下滑动或取消以返回列表。</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 text-sm">状态：进行中 · 负责人：全部成员</div>
        <DrawerFooter>
          <DrawerClose render={<Button />}>应用筛选</DrawerClose>
          <DrawerClose render={<Button variant="outline" />}>取消</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export function PopoverScenarioDemo() {
  return (
    <Popover>
      <PopoverTrigger
        render={<Button variant="outline">查看发布计划</Button>}
      />
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>下次发布</PopoverTitle>
          <PopoverDescription>
            7 月 24 日 10:00 · 中国标准时间
          </PopoverDescription>
        </PopoverHeader>
        <Button size="sm">打开排期</Button>
      </PopoverContent>
    </Popover>
  );
}

export function SheetScenarioDemo() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline">打开桌面筛选</Button>} />
      <SheetContent>
        <SheetHeader>
          <SheetTitle>筛选组件</SheetTitle>
          <SheetDescription>选择分类与稳定状态。</SheetDescription>
        </SheetHeader>
        <div className="p-6 text-sm">分类：数据录入 · 状态：稳定</div>
        <SheetFooter>
          <SheetClose render={<Button />}>应用筛选</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export function ToastScenarioDemo() {
  return (
    <>
      <Button
        variant="outline"
        onClick={() =>
          toast.success('设置已保存', { description: '新的主题已生效。' })
        }
      >
        保存并提示
      </Button>
      <Toaster />
    </>
  );
}

export function CommandScenarioDemo() {
  return (
    <Command className="h-72 w-full max-w-md border">
      <CommandInput placeholder="搜索命令…" />
      <CommandList>
        <CommandEmpty>没有匹配的命令</CommandEmpty>
        <CommandGroup heading="导航">
          <CommandItem>
            <Search /> 搜索组件 <CommandShortcut>⌘K</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <FolderOpen /> 打开项目 <CommandShortcut>⌘O</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

export function ContextMenuScenarioDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="grid h-48 w-full max-w-md place-content-center rounded-3xl border border-dashed bg-background text-sm text-muted-foreground">
        在项目卡片上点击右键
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <FolderOpen /> 打开 <ContextMenuShortcut>↵</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <Share2 /> 分享
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <Trash2 /> 删除
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

export function DirectionScenarioDemo() {
  return (
    <div className="grid w-full max-w-lg grid-cols-2 gap-4">
      <DirectionProvider direction="ltr">
        <div dir="ltr" className="rounded-3xl border bg-background p-5">
          <span className="text-xs text-muted-foreground">LTR</span>
          <div className="mt-3 flex items-center justify-between">
            <ArrowLeft /> English <ArrowRight />
          </div>
        </div>
      </DirectionProvider>
      <DirectionProvider direction="rtl">
        <div dir="rtl" className="rounded-3xl border bg-background p-5">
          <span className="text-xs text-muted-foreground">RTL</span>
          <div className="mt-3 flex items-center justify-between">
            <ArrowLeft /> العربية <ArrowRight />
          </div>
        </div>
      </DirectionProvider>
    </div>
  );
}
