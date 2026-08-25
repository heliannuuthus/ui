import { docsCopy } from './i18n/content';
import { useRef, useState, type ReactNode } from 'react';
import { Alert } from '@heliannuuthus/ui';
import { AlertDialog } from '@heliannuuthus/ui';
import { Avatar } from '@heliannuuthus/ui';
import { Tag } from '@heliannuuthus/ui';
import { Button } from '@heliannuuthus/ui';
import { Checkbox } from '@heliannuuthus/ui';
import { Dialog } from '@heliannuuthus/ui';
import { Drawer } from '@heliannuuthus/ui';
import { DemoLabel } from './demo-label';
import { Input } from '@heliannuuthus/ui';
import { Popover } from '@heliannuuthus/ui';
import { Progress } from '@heliannuuthus/ui';
import { Skeleton } from '@heliannuuthus/ui';
import { Sonner } from '@heliannuuthus/ui';
import { Spinner } from '@heliannuuthus/ui';
import { Toast, useToast } from '@heliannuuthus/ui';
import { toast as sonnerToast } from '@heliannuuthus/ui';
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

type AlertStatus = 'info' | 'success' | 'warning' | 'error';

const alertScenarios = {
  info: {
    label: docsCopy('信息'),
    title: docsCopy('发布窗口将在 22:00 开始'),
    description: docsCopy('值班成员将在开始前 15 分钟收到提醒。'),
    icon: Info,
  },
  success: {
    label: docsCopy('成功'),
    title: docsCopy('预检已通过'),
    description: docsCopy('12 项检查全部通过，可以安排生产环境发布。'),
    icon: CheckCircle2,
  },
  warning: {
    label: docsCopy('警告'),
    title: docsCopy('回滚镜像即将过期'),
    description: docsCopy('镜像将在 2 小时后清理，建议在发布前重新构建。'),
    icon: TriangleAlert,
  },
  error: {
    label: docsCopy('错误'),
    title: docsCopy('发布被阻止'),
    description: docsCopy('生产环境缺少 DATABASE_URL，请补充变量后重试。'),
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

export const AlertReleaseDemo = () => {
  const [status, setStatus] = useState<AlertStatus | null>('info');
  const scenario = status ? alertScenarios[status] : null;
  const Icon = scenario?.icon;

  return (
    <div className="feedback-alert-demo">
      <div
        className="feedback-alert-triggers"
        aria-label={docsCopy('选择 Alert 状态')}
      >
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
                {docsCopy('关闭')}
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
            {docsCopy('选择一个状态，在页面内显示对应提示。')}
          </div>
        )}
      </div>
    </div>
  );
};

export const AlertDialogDeleteDemo = ({
  size = 'default',
}: {
  size?: 'default' | 'sm';
}) => {
  return (
    <AlertDialog
      cancelText={docsCopy('保留环境')}
      confirmText={docsCopy('确认删除')}
      confirmVariant="destructive"
      description={docsCopy('运行日志和临时域名会一并移除，此操作无法撤销。')}
      media={<Trash2 />}
      size={size}
      title={docsCopy('删除 preview-142？')}
      trigger={
        <Button variant="destructive">
          <Trash2 />
          {docsCopy('删除预览环境')}
        </Button>
      }
    />
  );
};

export const DialogReleaseDemo = ({
  closable = true,
}: {
  closable?: boolean | ReactNode;
}) => {
  return (
    <Dialog
      cancelText={docsCopy('取消')}
      closable={closable}
      confirmText={docsCopy('确认安排')}
      description={docsCopy('选择发布时间，并为值班成员补充本次发布说明。')}
      title={docsCopy('安排生产环境发布')}
      trigger={
        <Button>
          <Rocket />
          {docsCopy('安排发布')}
        </Button>
      }
    >
      <div className="feedback-form-grid">
        <div>
          <DemoLabel htmlFor="release-version">{docsCopy('版本')}</DemoLabel>
          <Input id="release-version" defaultValue="v0.12.0" />
        </div>
        <div>
          <DemoLabel htmlFor="release-time">{docsCopy('发布时间')}</DemoLabel>
          <Input id="release-time" type="datetime-local" />
        </div>
      </div>
    </Dialog>
  );
};

export const DrawerReleaseDemo = ({
  chrome = 'default',
}: {
  chrome?: 'custom' | 'default' | 'minimal';
}) => {
  const placements = [
    { side: 'left', label: docsCopy('从左侧'), icon: ArrowRight },
    { side: 'right', label: docsCopy('从右侧'), icon: ArrowLeft },
    { side: 'top', label: docsCopy('从上方'), icon: ArrowDown },
    { side: 'bottom', label: docsCopy('从下方'), icon: ArrowUp },
  ] as const;

  return (
    <div
      className="feedback-drawer-directions"
      aria-label={docsCopy('Drawer 打开方向')}
    >
      {placements.map((placement) => {
        const Icon = placement.icon;

        return (
          <Drawer
            behavior="adaptive"
            closable={
              chrome === 'custom' ? (
                <CircleX />
              ) : chrome === 'minimal' ? (
                false
              ) : (
                true
              )
            }
            closeText={docsCopy('关闭')}
            description={docsCopy(
              `${placement.label}打开；窄屏保留触摸拖拽，宽屏使用稳定的边缘面板布局。`
            )}
            footer={<Button>{docsCopy('进入发布中心')}</Button>}
            handle={chrome === 'minimal' ? false : undefined}
            key={placement.side}
            side={placement.side}
            title={docsCopy('今晚的发布窗口')}
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
};

const DrawerReleaseContent = () => {
  return (
    <div className="feedback-drawer-list">
      <ReleaseRow label="Web Console" meta={docsCopy('已通过 · 21:42')} ready />
      <ReleaseRow label="Auth API" meta={docsCopy('已通过 · 21:46')} ready />
      <ReleaseRow label="Worker" meta={docsCopy('等待负责人确认')} />
    </div>
  );
};

const ReleaseRow = ({
  label,
  meta,
  ready = false,
}: {
  label: string;
  meta: string;
  ready?: boolean;
}) => {
  return (
    <div className="feedback-release-row">
      <span className={ready ? 'is-ready' : undefined} />
      <div>
        <strong>{label}</strong>
        <small>{meta}</small>
      </div>
      <Tag type={ready ? 'success' : 'warning'}>
        {ready ? docsCopy('就绪') : docsCopy('待确认')}
      </Tag>
    </div>
  );
};

export const PopoverOwnersDemo = ({
  side = 'bottom',
}: {
  side?: 'bottom' | 'right';
}) => {
  return (
    <Popover
      description={docsCopy('发布开始和回滚时会通知以下成员。')}
      side={side}
      title={docsCopy('发布负责人')}
      trigger={
        <Button variant="outline">
          <Users />
          {docsCopy('3 位负责人')}
        </Button>
      }
      content={
        <div className="feedback-owner-list">
          {[
            [docsCopy('林夏'), docsCopy('发布协调')],
            [docsCopy('周一'), docsCopy('前端值班')],
            [docsCopy('陈青'), docsCopy('后端值班')],
          ].map(([name, role]) => (
            <div key={name}>
              <span>{name.slice(0, 1)}</span>
              <p>
                <strong>{name}</strong>
                <small>{role}</small>
              </p>
              <Button
                aria-label={docsCopy(`联系${name}`)}
                size="icon-sm"
                variant="ghost"
              >
                <Mail />
              </Button>
            </div>
          ))}
        </div>
      }
    />
  );
};

export const PopoverOwnerPreviewDemo = ({
  side = 'bottom',
}: {
  side?: 'bottom' | 'right';
}) => {
  return (
    <div className="display-hover-stage">
      {docsCopy('发布负责人是')}{' '}
      <Popover
        triggerMode="hover"
        side={side}
        trigger={
          <Button className="display-inline-person" size="xs" variant="link">
            @linmo
          </Button>
        }
        content={
          <>
            <div className="display-profile">
              <Avatar
                alt={docsCopy('林默')}
                badge={<span />}
                fallback={docsCopy('林')}
                size="lg"
              />
              <div>
                <strong>{docsCopy('林默')}</strong>
                <span>{docsCopy('平台工程 · 当前在线')}</span>
              </div>
            </div>
            <p className="display-profile-description">
              {docsCopy('负责生产发布、监控确认与紧急回滚。')}
            </p>
            <div className="display-profile-meta">
              <span>{docsCopy('本月 18 次发布')}</span>
              <span>{docsCopy('98% 成功率')}</span>
            </div>
          </>
        }
      />
      {docsCopy('，悬停或聚焦名字查看详情。')}
    </div>
  );
};

export const ProgressReleaseDemo = () => {
  const [value, setValue] = useState(68);
  const complete = value === 100;

  return (
    <div className="feedback-progress-card">
      <div className="feedback-progress-heading">
        <span>
          <CloudUpload />
        </span>
        <div>
          <strong>
            {complete ? docsCopy('发布完成') : docsCopy('正在部署 Web Console')}
          </strong>
          <small>
            {complete
              ? docsCopy('所有流量已切换至新版本')
              : docsCopy('步骤 3 / 4 · 切换流量')}
          </small>
        </div>
      </div>
      <Progress
        effect="sparkle"
        label={docsCopy('生产环境')}
        showValue
        value={value}
      />
      <div className="feedback-progress-actions">
        <Button
          disabled={complete}
          onClick={() => setValue((current) => Math.min(current + 16, 100))}
          size="sm"
        >
          {docsCopy('推进部署')}
        </Button>
        <Button onClick={() => setValue(12)} size="sm" variant="ghost">
          {docsCopy('重新开始')}
        </Button>
      </div>
    </div>
  );
};

export const DrawerContainedDemo = () => {
  const boundaryRef = useRef<HTMLDivElement>(null);
  const placements = [
    { side: 'left', label: docsCopy('左'), icon: ArrowRight },
    { side: 'right', label: docsCopy('右'), icon: ArrowLeft },
    { side: 'top', label: docsCopy('上'), icon: ArrowDown },
    { side: 'bottom', label: docsCopy('下'), icon: ArrowUp },
  ] as const;

  return (
    <div className="feedback-drawer-boundary" ref={boundaryRef}>
      <div className="feedback-drawer-boundary-header">
        <div>
          <strong>{docsCopy('发布记录')}</strong>
          <span>{docsCopy('抽屉只覆盖当前父容器')}</span>
        </div>
        <Filter />
      </div>
      <div className="feedback-drawer-boundary-content">
        <span>v0.12.0</span>
        <strong>{docsCopy('生产环境发布历史')}</strong>
        <small>{docsCopy('选择一个方向，在当前卡片内打开筛选面板。')}</small>
      </div>
      <div className="feedback-drawer-boundary-actions">
        {placements.map((placement) => {
          const Icon = placement.icon;

          return (
            <Drawer
              behavior="panel"
              closeText={docsCopy('应用筛选')}
              closeVariant="default"
              container={boundaryRef}
              description={docsCopy(
                `面板从父容器${placement.label}侧进入，不覆盖整个页面。`
              )}
              key={placement.side}
              side={placement.side}
              title={docsCopy('筛选发布记录')}
              trigger={
                <Button size="sm" variant="outline">
                  <Icon />
                  {placement.label}
                </Button>
              }
            >
              <div className="feedback-sheet-options">
                <section>
                  <strong>{docsCopy('环境')}</strong>
                  <Checkbox defaultChecked value="production">
                    {docsCopy('生产环境')}
                  </Checkbox>
                  <Checkbox value="preview">{docsCopy('预览环境')}</Checkbox>
                </section>
                <section>
                  <strong>{docsCopy('结果')}</strong>
                  <Checkbox defaultChecked value="success">
                    {docsCopy('发布成功')}
                  </Checkbox>
                  <Checkbox value="failed">{docsCopy('发布失败')}</Checkbox>
                </section>
              </div>
            </Drawer>
          );
        })}
      </div>
    </div>
  );
};

export const SkeletonReleaseDemo = ({
  density = 'comfortable',
  effect = 'shimmer',
}: {
  density?: 'comfortable' | 'compact';
  effect?: 'shimmer' | 'pulse' | 'none';
}) => {
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
};

export const SonnerPublishDemo = () => {
  const publish = () => {
    sonnerToast.promise(
      new Promise<string>((resolve) => {
        window.setTimeout(() => resolve('v0.12.0'), 1200);
      }),
      {
        loading: docsCopy('正在发布到生产环境…'),
        success: (version) => docsCopy(`${version} 已发布`),
        error: docsCopy('发布失败，请检查构建日志'),
      }
    );
  };

  return (
    <>
      <Button onClick={publish}>
        <Rocket />
        {docsCopy('模拟异步发布')}
      </Button>
      <Sonner position="bottom-right" richColors />
    </>
  );
};

export const SpinnerSizesDemo = () => {
  const sizes = [
    { label: docsCopy('小'), size: 'sm', pixels: '14 px' },
    { label: docsCopy('默认'), size: 'default', pixels: '16 px' },
    { label: docsCopy('大'), size: 'lg', pixels: '24 px' },
  ] as const;

  return (
    <div
      aria-label={docsCopy('Spinner 尺寸')}
      className="feedback-spinner-sizes"
      role="list"
    >
      {sizes.map((item) => (
        <div key={item.size} role="listitem">
          <span className="feedback-spinner-icon-stage">
            <Spinner
              aria-label={docsCopy(`${item.label}号加载图标`)}
              size={item.size}
            />
          </span>
          <strong>{item.label}</strong>
          <small>{item.pixels}</small>
        </div>
      ))}
    </div>
  );
};

export const SpinnerLoadingDemo = () => {
  return (
    <div className="feedback-local-loading-demo">
      <article aria-busy="true">
        <span className="feedback-local-loading-hero">
          <Spinner aria-label={docsCopy('正在生成发布预览')} size="lg" />
        </span>
        <strong>{docsCopy('正在生成发布预览')}</strong>
        <small>{docsCopy('合并构建产物与变更摘要')}</small>
      </article>
      <section aria-busy="true" aria-label={docsCopy('正在同步环境状态')}>
        <header>
          <div>
            <strong>{docsCopy('环境状态')}</strong>
            <small>{docsCopy('只更新当前区域')}</small>
          </div>
          <span>{docsCopy('同步中')}</span>
        </header>
        <div>
          <CloudUpload aria-hidden />
          <span>
            <strong>{docsCopy('预览环境')}</strong>
            <small>{docsCopy('正在上传静态资源')}</small>
          </span>
          <Spinner aria-label={docsCopy('预览环境同步中')} size="sm" />
        </div>
        <div>
          <Users aria-hidden />
          <span>
            <strong>{docsCopy('评审成员')}</strong>
            <small>{docsCopy('正在刷新访问权限')}</small>
          </span>
          <Spinner aria-label={docsCopy('评审成员同步中')} size="sm" />
        </div>
      </section>
    </div>
  );
};

const toastScenarios = {
  success: {
    label: docsCopy('成功'),
    title: docsCopy('发布已完成'),
    description: docsCopy('v0.12.0 已部署到生产环境。'),
    icon: CheckCircle2,
  },
  info: {
    label: docsCopy('信息'),
    title: docsCopy('发布窗口即将开始'),
    description: docsCopy('值班成员将在 15 分钟后收到提醒。'),
    icon: Info,
  },
  warning: {
    label: docsCopy('警告'),
    title: docsCopy('回滚镜像即将过期'),
    description: docsCopy('请在继续发布前重新生成镜像。'),
    icon: TriangleAlert,
  },
  error: {
    label: docsCopy('错误'),
    title: docsCopy('发布失败'),
    description: docsCopy('生产环境缺少 DATABASE_URL。'),
    icon: CircleX,
  },
} as const;

type ToastStatus = keyof typeof toastScenarios;

const ToastSemanticActions = () => {
  const { toast } = useToast();

  const notify = (status: ToastStatus) => {
    const scenario = toastScenarios[status];
    toast[status](scenario.title, { description: scenario.description });
  };

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
};

export const ToastSemanticDemo = () => {
  return (
    <Toast.Provider id="toast-semantic-demo">
      <ToastSemanticActions />
    </Toast.Provider>
  );
};

const ToastLocalActions = () => {
  const { toast } = useToast();

  return (
    <div className="feedback-toast-local-workspace">
      <div>
        <span>{docsCopy('预览环境')}</span>
        <strong>release/ui-refresh</strong>
        <small>{docsCopy('Toast 只会出现在当前容器顶部')}</small>
      </div>
      <Button
        onClick={() =>
          toast.info(docsCopy('预览已刷新'), {
            description: docsCopy('最新构建已加载到当前工作区。'),
          })
        }
        size="sm"
      >
        <Info />
        {docsCopy('局部通知')}
      </Button>
    </div>
  );
};

export const ToastLocalDemo = () => {
  return (
    <div className="feedback-toast-local-stage">
      <Toast.Provider id="toast-local-demo" scope="local">
        <ToastLocalActions />
      </Toast.Provider>
    </div>
  );
};
