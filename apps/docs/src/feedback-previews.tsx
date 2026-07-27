'use client';

import { useRef, useState } from 'react';
import { Alert } from '@heliannuuthus/ui';
import { AlertDialog } from '@heliannuuthus/ui';
import { Avatar } from '@heliannuuthus/ui';
import { Badge } from '@heliannuuthus/ui';
import { Button } from '@heliannuuthus/ui';
import { Checkbox } from '@heliannuuthus/ui';
import { Dialog } from '@heliannuuthus/ui';
import { Drawer } from '@heliannuuthus/ui';
import { Label } from '@heliannuuthus/ui';
import { Input } from '@heliannuuthus/ui';
import { Popover } from '@heliannuuthus/ui';
import { Progress } from '@heliannuuthus/ui';
import { Skeleton } from '@heliannuuthus/ui';
import { Sonner } from '@heliannuuthus/ui';
import { Spinner } from '@heliannuuthus/ui';
import { Toast, useToast } from '@heliannuuthus/ui';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  CheckCircle2,
  CircleX,
  CloudUpload,
  Filter,
  Info,
  Mail,
  Rocket,
  Trash2,
  TriangleAlert,
  Users,
} from 'lucide-react';
import { toast as sonnerToast } from 'sonner';

type AlertStatus = 'info' | 'success' | 'warning' | 'error';

const alertScenarios = {
  info: {
    label: '信息',
    title: '发布窗口将在 22:00 开始',
    description: '值班成员将在开始前 15 分钟收到提醒。',
    icon: Info,
  },
  success: {
    label: '成功',
    title: '预检已通过',
    description: '12 项检查全部通过，可以安排生产环境发布。',
    icon: CheckCircle2,
  },
  warning: {
    label: '警告',
    title: '回滚镜像即将过期',
    description: '镜像将在 2 小时后清理，建议在发布前重新构建。',
    icon: TriangleAlert,
  },
  error: {
    label: '错误',
    title: '发布被阻止',
    description: '生产环境缺少 DATABASE_URL，请补充变量后重试。',
    icon: CircleX,
  },
} satisfies Record<
  AlertStatus,
  {
    label: string;
    title: string;
    description: string;
    icon: typeof Info;
  }
>;

export function AlertReleaseDemo() {
  const [status, setStatus] = useState<AlertStatus | null>('info');
  const scenario = status ? alertScenarios[status] : null;
  const Icon = scenario?.icon;

  return (
    <div className="feedback-alert-demo">
      <div className="feedback-alert-triggers" aria-label="选择 Alert 状态">
        {(Object.keys(alertScenarios) as AlertStatus[]).map((value) => {
          const option = alertScenarios[value];
          const OptionIcon = option.icon;

          return (
            <Button
              aria-pressed={status === value}
              key={value}
              onClick={() => setStatus(value)}
              size="sm"
              variant={status === value ? 'secondary' : 'outline'}
            >
              <OptionIcon />
              {option.label}
            </Button>
          );
        })}
      </div>
      <div className="feedback-alert-stage">
        {scenario && Icon ? (
          <Alert
            action={
              <Button onClick={() => setStatus(null)} size="sm" variant="ghost">
                关闭
              </Button>
            }
            className="feedback-alert"
            description={scenario.description}
            icon={<Icon />}
            key={status}
            title={scenario.title}
            variant={status}
          />
        ) : (
          <div className="feedback-alert-placeholder">
            选择一个状态，在页面内显示对应提示。
          </div>
        )}
      </div>
    </div>
  );
}

export function AlertDialogDeleteDemo({
  size = 'default',
}: {
  size?: 'default' | 'sm';
}) {
  return (
    <AlertDialog
      cancelText="保留环境"
      confirmText="确认删除"
      confirmVariant="destructive"
      description="运行日志和临时域名会一并移除，此操作无法撤销。"
      media={<Trash2 />}
      size={size}
      title="删除 preview-142？"
      trigger={
        <Button variant="destructive">
          <Trash2 />
          删除预览环境
        </Button>
      }
    />
  );
}

export function DialogReleaseDemo() {
  return (
    <Dialog
      cancelText="取消"
      confirmText="确认安排"
      description="选择发布时间，并为值班成员补充本次发布说明。"
      title="安排生产环境发布"
      trigger={
        <Button>
          <Rocket />
          安排发布
        </Button>
      }
    >
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
    </Dialog>
  );
}

export function DrawerReleaseDemo() {
  const placements = [
    { side: 'left', label: '从左侧', icon: ArrowRight },
    { side: 'right', label: '从右侧', icon: ArrowLeft },
    { side: 'top', label: '从上方', icon: ArrowDown },
    { side: 'bottom', label: '从下方', icon: ArrowUp },
  ] as const;

  return (
    <div className="feedback-drawer-directions" aria-label="Drawer 打开方向">
      {placements.map((placement) => {
        const Icon = placement.icon;

        return (
          <Drawer
            behavior="adaptive"
            closeText="关闭"
            description={`${placement.label}打开；窄屏保留触摸拖拽，宽屏使用稳定的边缘面板布局。`}
            footer={<Button>进入发布中心</Button>}
            key={placement.side}
            side={placement.side}
            title="今晚的发布窗口"
            trigger={
              <Button variant="outline">
                <Icon />
                {placement.label}
              </Button>
            }
          >
            <DrawerReleaseContent />
          </Drawer>
        );
      })}
    </div>
  );
}

function DrawerReleaseContent() {
  return (
    <div className="feedback-drawer-list">
      <ReleaseRow label="Web Console" meta="已通过 · 21:42" ready />
      <ReleaseRow label="Auth API" meta="已通过 · 21:46" ready />
      <ReleaseRow label="Worker" meta="等待负责人确认" />
    </div>
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
    <Popover
      description="发布开始和回滚时会通知以下成员。"
      side={side}
      title="发布负责人"
      trigger={
        <Button variant="outline">
          <Users />3 位负责人
        </Button>
      }
      content={
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
      }
    />
  );
}

export function PopoverOwnerPreviewDemo({
  side = 'bottom',
}: {
  side?: 'bottom' | 'right';
}) {
  return (
    <div className="display-hover-stage">
      发布负责人是{' '}
      <Popover
        triggerMode="hover"
        side={side}
        trigger={
          <button className="display-inline-person" type="button">
            @linmo
          </button>
        }
        content={
          <>
            <div className="display-profile">
              <Avatar alt="林默" badge={<span />} fallback="林" size="lg" />
              <div>
                <strong>林默</strong>
                <span>平台工程 · 当前在线</span>
              </div>
            </div>
            <p className="display-profile-description">
              负责生产发布、监控确认与紧急回滚。
            </p>
            <div className="display-profile-meta">
              <span>本月 18 次发布</span>
              <span>98% 成功率</span>
            </div>
          </>
        }
      />
      ，悬停或聚焦名字查看详情。
    </div>
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
      <Progress effect="sparkle" label="生产环境" showValue value={value} />
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

export function DrawerContainedDemo() {
  const boundaryRef = useRef<HTMLDivElement>(null);
  const placements = [
    { side: 'left', label: '左', icon: ArrowRight },
    { side: 'right', label: '右', icon: ArrowLeft },
    { side: 'top', label: '上', icon: ArrowDown },
    { side: 'bottom', label: '下', icon: ArrowUp },
  ] as const;

  return (
    <div className="feedback-drawer-boundary" ref={boundaryRef}>
      <div className="feedback-drawer-boundary-header">
        <div>
          <strong>发布记录</strong>
          <span>抽屉只覆盖当前父容器</span>
        </div>
        <Filter />
      </div>
      <div className="feedback-drawer-boundary-content">
        <span>v0.12.0</span>
        <strong>生产环境发布历史</strong>
        <small>选择一个方向，在当前卡片内打开筛选面板。</small>
      </div>
      <div className="feedback-drawer-boundary-actions">
        {placements.map((placement) => {
          const Icon = placement.icon;

          return (
            <Drawer
              behavior="panel"
              closeText="应用筛选"
              closeVariant="default"
              container={boundaryRef}
              description={`面板从父容器${placement.label}侧进入，不覆盖整个页面。`}
              key={placement.side}
              side={placement.side}
              title="筛选发布记录"
              trigger={
                <Button size="sm" variant="outline">
                  <Icon />
                  {placement.label}
                </Button>
              }
            >
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
                  <Checkbox value="failed">发布失败</Checkbox>
                </section>
              </div>
            </Drawer>
          );
        })}
      </div>
    </div>
  );
}

export function SkeletonReleaseDemo({
  density = 'comfortable',
  effect = 'shimmer',
}: {
  density?: 'comfortable' | 'compact';
  effect?: 'shimmer' | 'pulse' | 'none';
}) {
  const rows = density === 'compact' ? 4 : 3;

  return (
    <div className="feedback-skeleton-card" data-density={density}>
      <header>
        <div>
          <Skeleton className="h-4 w-32" effect={effect} />
          <Skeleton className="mt-2 h-3 w-52" effect={effect} />
        </div>
        <Skeleton className="h-8 w-20 rounded-full" effect={effect} />
      </header>
      <div>
        {Array.from({ length: rows }, (_, index) => (
          <div className="feedback-skeleton-row" key={index}>
            <Skeleton className="size-8 rounded-full" effect={effect} />
            <span>
              <Skeleton className="h-3 w-28" effect={effect} />
              <Skeleton className="mt-2 h-2.5 w-40" effect={effect} />
            </span>
            <Skeleton
              className="ml-auto h-6 w-14 rounded-full"
              effect={effect}
            />
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
      <Sonner position="bottom-right" richColors />
    </>
  );
}

export function SpinnerSizesDemo() {
  const sizes = [
    { label: '小', size: 'sm', pixels: '14 px' },
    { label: '默认', size: 'default', pixels: '16 px' },
    { label: '大', size: 'lg', pixels: '24 px' },
  ] as const;

  return (
    <div
      aria-label="Spinner 尺寸"
      className="feedback-spinner-sizes"
      role="list"
    >
      {sizes.map((item) => (
        <div key={item.size} role="listitem">
          <span className="feedback-spinner-icon-stage">
            <Spinner aria-label={`${item.label}号加载图标`} size={item.size} />
          </span>
          <strong>{item.label}</strong>
          <small>{item.pixels}</small>
        </div>
      ))}
    </div>
  );
}

export function SpinnerLoadingDemo() {
  return (
    <div className="feedback-local-loading-demo">
      <article aria-busy="true">
        <span className="feedback-local-loading-hero">
          <Spinner aria-label="正在生成发布预览" size="lg" />
        </span>
        <strong>正在生成发布预览</strong>
        <small>合并构建产物与变更摘要</small>
      </article>
      <section aria-busy="true" aria-label="正在同步环境状态">
        <header>
          <div>
            <strong>环境状态</strong>
            <small>只更新当前区域</small>
          </div>
          <span>同步中</span>
        </header>
        <div>
          <CloudUpload aria-hidden />
          <span>
            <strong>预览环境</strong>
            <small>正在上传静态资源</small>
          </span>
          <Spinner aria-label="预览环境同步中" size="sm" />
        </div>
        <div>
          <Users aria-hidden />
          <span>
            <strong>评审成员</strong>
            <small>正在刷新访问权限</small>
          </span>
          <Spinner aria-label="评审成员同步中" size="sm" />
        </div>
      </section>
    </div>
  );
}

const toastScenarios = {
  success: {
    label: '成功',
    title: '发布已完成',
    description: 'v0.12.0 已部署到生产环境。',
    icon: CheckCircle2,
  },
  info: {
    label: '信息',
    title: '发布窗口即将开始',
    description: '值班成员将在 15 分钟后收到提醒。',
    icon: Info,
  },
  warning: {
    label: '警告',
    title: '回滚镜像即将过期',
    description: '请在继续发布前重新生成镜像。',
    icon: TriangleAlert,
  },
  error: {
    label: '错误',
    title: '发布失败',
    description: '生产环境缺少 DATABASE_URL。',
    icon: CircleX,
  },
} as const;

type ToastStatus = keyof typeof toastScenarios;

function ToastSemanticActions() {
  const { toast } = useToast();

  function notify(status: ToastStatus) {
    const scenario = toastScenarios[status];
    toast[status](scenario.title, { description: scenario.description });
  }

  return (
    <div className="feedback-toast-semantic-actions">
      {(Object.keys(toastScenarios) as ToastStatus[]).map((status) => {
        const scenario = toastScenarios[status];
        const Icon = scenario.icon;

        return (
          <Button
            data-status={status}
            key={status}
            onClick={() => notify(status)}
            variant="outline"
          >
            <Icon />
            {scenario.label}
          </Button>
        );
      })}
    </div>
  );
}

export function ToastSemanticDemo() {
  return (
    <Toast.Provider id="toast-semantic-demo">
      <ToastSemanticActions />
    </Toast.Provider>
  );
}

function ToastLocalActions() {
  const { toast } = useToast();

  return (
    <div className="feedback-toast-local-workspace">
      <div>
        <span>预览环境</span>
        <strong>release/ui-refresh</strong>
        <small>Toast 只会出现在当前容器顶部</small>
      </div>
      <Button
        onClick={() =>
          toast.info('预览已刷新', {
            description: '最新构建已加载到当前工作区。',
          })
        }
        size="sm"
      >
        <Info />
        局部通知
      </Button>
    </div>
  );
}

export function ToastLocalDemo() {
  return (
    <div className="feedback-toast-local-stage">
      <Toast.Provider id="toast-local-demo" scope="local">
        <ToastLocalActions />
      </Toast.Provider>
    </div>
  );
}
