'use client';

import { useState } from 'react';
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from '@heliannuuthus/ui/alert';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@heliannuuthus/ui/alert-dialog';
import { Badge } from '@heliannuuthus/ui/badge';
import { Button } from '@heliannuuthus/ui/button';
import { Checkbox } from '@heliannuuthus/ui/checkbox';
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
import { Label } from '@heliannuuthus/ui/form';
import { Input } from '@heliannuuthus/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from '@heliannuuthus/ui/popover';
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from '@heliannuuthus/ui/progress';
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
import { Skeleton } from '@heliannuuthus/ui/skeleton';
import { Toaster as SonnerToaster } from '@heliannuuthus/ui/sonner';
import { Spinner } from '@heliannuuthus/ui/spinner';
import {
  Toaster as ToastToaster,
  toast as uiToast,
} from '@heliannuuthus/ui/toast';
import {
  CalendarClock,
  CheckCircle2,
  CloudUpload,
  Filter,
  Mail,
  MoreHorizontal,
  Rocket,
  Trash2,
  TriangleAlert,
  Users,
} from 'lucide-react';
import { toast as sonnerToast } from 'sonner';

export function AlertReleaseDemo({
  variant = 'default',
}: {
  variant?: 'default' | 'destructive';
}) {
  const destructive = variant === 'destructive';

  return (
    <Alert className="feedback-alert" variant={variant}>
      {destructive ? <TriangleAlert /> : <CheckCircle2 />}
      <AlertTitle>{destructive ? '发布被阻止' : '预检已通过'}</AlertTitle>
      <AlertDescription>
        {destructive
          ? '生产环境缺少 DATABASE_URL，请补充变量后重试。'
          : '12 项检查全部通过，可以安排生产环境发布。'}
      </AlertDescription>
      <AlertAction>
        <Button size="sm" variant={destructive ? 'outline' : 'ghost'}>
          {destructive ? '前往配置' : '查看报告'}
        </Button>
      </AlertAction>
    </Alert>
  );
}

export function AlertDialogDeleteDemo({
  size = 'default',
}: {
  size?: 'default' | 'sm';
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="destructive" />}>
        <Trash2 />
        删除预览环境
      </AlertDialogTrigger>
      <AlertDialogContent size={size}>
        <AlertDialogHeader>
          <AlertDialogMedia>
            <Trash2 />
          </AlertDialogMedia>
          <AlertDialogTitle>删除 preview-142？</AlertDialogTitle>
          <AlertDialogDescription>
            运行日志和临时域名会一并移除，此操作无法撤销。
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>保留环境</AlertDialogCancel>
          <AlertDialogAction variant="destructive">确认删除</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function DialogReleaseDemo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>
        <Rocket />
        安排发布
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>安排生产环境发布</DialogTitle>
          <DialogDescription>
            选择发布时间，并为值班成员补充本次发布说明。
          </DialogDescription>
        </DialogHeader>
        <div className="feedback-form-grid">
          <div>
            <Label htmlFor="release-version">版本</Label>
            <Input id="release-version" defaultValue="v0.12.0" />
          </div>
          <div>
            <Label htmlFor="release-time">发布时间</Label>
            <Input id="release-time" type="datetime-local" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>取消</DialogClose>
          <DialogClose render={<Button />}>确认安排</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function DrawerReleaseDemo({
  direction = 'down',
}: {
  direction?: 'down' | 'right';
}) {
  return (
    <Drawer showSwipeHandle swipeDirection={direction}>
      <DrawerTrigger render={<Button variant="outline" />}>
        <CalendarClock />
        查看发布窗口
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>今晚的发布窗口</DrawerTitle>
          <DrawerDescription>
            22:00–23:00，当前还有两个服务等待确认。
          </DrawerDescription>
        </DrawerHeader>
        <div className="feedback-drawer-list">
          <ReleaseRow label="Web Console" meta="已通过 · 21:42" ready />
          <ReleaseRow label="Auth API" meta="已通过 · 21:46" ready />
          <ReleaseRow label="Worker" meta="等待负责人确认" />
        </div>
        <DrawerFooter>
          <Button>进入发布中心</Button>
          <DrawerClose render={<Button variant="outline" />}>关闭</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ReleaseRow({
  label,
  meta,
  ready = false,
}: {
  label: string;
  meta: string;
  ready?: boolean;
}) {
  return (
    <div className="feedback-release-row">
      <span className={ready ? 'is-ready' : undefined} />
      <div>
        <strong>{label}</strong>
        <small>{meta}</small>
      </div>
      <Badge variant={ready ? 'secondary' : 'outline'}>
        {ready ? '就绪' : '待确认'}
      </Badge>
    </div>
  );
}

export function PopoverOwnersDemo({
  side = 'bottom',
}: {
  side?: 'bottom' | 'right';
}) {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        <Users />3 位负责人
      </PopoverTrigger>
      <PopoverContent side={side}>
        <PopoverHeader>
          <PopoverTitle>发布负责人</PopoverTitle>
          <PopoverDescription>
            发布开始和回滚时会通知以下成员。
          </PopoverDescription>
        </PopoverHeader>
        <div className="feedback-owner-list">
          {[
            ['林夏', '发布协调'],
            ['周一', '前端值班'],
            ['陈青', '后端值班'],
          ].map(([name, role]) => (
            <div key={name}>
              <span>{name.slice(0, 1)}</span>
              <p>
                <strong>{name}</strong>
                <small>{role}</small>
              </p>
              <Button aria-label={`联系${name}`} size="icon-sm" variant="ghost">
                <Mail />
              </Button>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export function ProgressReleaseDemo() {
  const [value, setValue] = useState(68);
  const complete = value === 100;

  return (
    <div className="feedback-progress-card">
      <div className="feedback-progress-heading">
        <span>
          <CloudUpload />
        </span>
        <div>
          <strong>{complete ? '发布完成' : '正在部署 Web Console'}</strong>
          <small>
            {complete ? '所有流量已切换至新版本' : '步骤 3 / 4 · 切换流量'}
          </small>
        </div>
      </div>
      <Progress value={value}>
        <ProgressLabel>生产环境</ProgressLabel>
        <ProgressValue />
      </Progress>
      <div className="feedback-progress-actions">
        <Button
          disabled={complete}
          onClick={() => setValue((current) => Math.min(current + 16, 100))}
          size="sm"
        >
          推进部署
        </Button>
        <Button onClick={() => setValue(12)} size="sm" variant="ghost">
          重新开始
        </Button>
      </div>
    </div>
  );
}

export function SheetFiltersDemo({
  side = 'right',
}: {
  side?: 'left' | 'right';
}) {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <Filter />
        筛选发布记录
      </SheetTrigger>
      <SheetContent side={side}>
        <SheetHeader>
          <SheetTitle>筛选发布记录</SheetTitle>
          <SheetDescription>
            条件会立即应用到当前发布历史列表。
          </SheetDescription>
        </SheetHeader>
        <div className="feedback-sheet-options">
          <section>
            <strong>环境</strong>
            <Checkbox defaultChecked value="production">
              生产环境
            </Checkbox>
            <Checkbox value="preview">预览环境</Checkbox>
          </section>
          <section>
            <strong>结果</strong>
            <Checkbox defaultChecked value="success">
              发布成功
            </Checkbox>
            <Checkbox defaultChecked value="failed">
              发布失败
            </Checkbox>
            <Checkbox value="cancelled">已取消</Checkbox>
          </section>
        </div>
        <SheetFooter>
          <SheetClose render={<Button />}>查看 18 条记录</SheetClose>
          <SheetClose render={<Button variant="outline" />}>取消</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export function SkeletonReleaseDemo({
  density = 'comfortable',
}: {
  density?: 'comfortable' | 'compact';
}) {
  const rows = density === 'compact' ? 4 : 3;

  return (
    <div className="feedback-skeleton-card" data-density={density}>
      <header>
        <div>
          <Skeleton className="h-4 w-32" />
          <Skeleton className="mt-2 h-3 w-52" />
        </div>
        <Skeleton className="h-8 w-20 rounded-full" />
      </header>
      <div>
        {Array.from({ length: rows }, (_, index) => (
          <div className="feedback-skeleton-row" key={index}>
            <Skeleton className="size-8 rounded-full" />
            <span>
              <Skeleton className="h-3 w-28" />
              <Skeleton className="mt-2 h-2.5 w-40" />
            </span>
            <Skeleton className="ml-auto h-6 w-14 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function SonnerPublishDemo() {
  function publish() {
    sonnerToast.promise(
      new Promise<string>((resolve) => {
        window.setTimeout(() => resolve('v0.12.0'), 1200);
      }),
      {
        loading: '正在发布到生产环境…',
        success: (version) => `${version} 已发布`,
        error: '发布失败，请检查构建日志',
      }
    );
  }

  return (
    <>
      <Button onClick={publish}>
        <Rocket />
        模拟异步发布
      </Button>
      <SonnerToaster position="bottom-right" richColors />
    </>
  );
}

export function SpinnerLoadingDemo({
  size = 'default',
}: {
  size?: 'sm' | 'default' | 'lg';
}) {
  const spinnerSize =
    size === 'sm' ? 'size-3.5' : size === 'lg' ? 'size-6' : 'size-4';

  return (
    <div className="feedback-spinner-demo">
      <Button disabled size={size === 'lg' ? 'lg' : 'default'}>
        <Spinner aria-label="正在保存" className={spinnerSize} />
        正在保存
      </Button>
      <div aria-live="polite">
        <Spinner aria-label="正在同步发布状态" className={spinnerSize} />
        <span>
          <strong>同步发布状态</strong>
          <small>通常只需要几秒钟</small>
        </span>
      </div>
    </div>
  );
}

export function ToastUndoDemo({
  position = 'top-center',
}: {
  position?: 'top-center' | 'bottom-right';
}) {
  function archive() {
    uiToast('发布草稿已归档', {
      description: 'v0.12.0 已从待发布列表移除。',
      action: {
        label: '撤销',
        onClick: () => uiToast.success('草稿已恢复'),
      },
    });
  }

  return (
    <>
      <Button onClick={archive} variant="outline">
        <MoreHorizontal />
        归档并显示撤销
      </Button>
      <ToastToaster position={position} />
    </>
  );
}
