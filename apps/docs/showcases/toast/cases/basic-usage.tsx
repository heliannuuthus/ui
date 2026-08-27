import '@heliannuuthus/ui/styles.css';
import { Button } from '@heliannuuthus/ui';
import { Toast, useToast } from '@heliannuuthus/ui';
import { CheckCircle2, CircleX, Info, TriangleAlert } from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const toastScenarios = {
    success: {
      label: copy('成功'),
      title: copy('发布已完成'),
      description: copy('v0.12.0 已部署到生产环境。'),
      icon: CheckCircle2,
    },
    info: {
      label: copy('信息'),
      title: copy('发布窗口即将开始'),
      description: copy('值班成员将在 15 分钟后收到提醒。'),
      icon: Info,
    },
    warning: {
      label: copy('警告'),
      title: copy('回滚镜像即将过期'),
      description: copy('请在继续发布前重新生成镜像。'),
      icon: TriangleAlert,
    },
    error: {
      label: copy('错误'),
      title: copy('发布失败'),
      description: copy('生产环境缺少 DATABASE_URL。'),
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

  const ToastSemanticDemo = () => {
    return (
      <Toast.Provider id="toast-semantic-demo">
        <ToastSemanticActions />
      </Toast.Provider>
    );
  };

  return ToastSemanticDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function ToastCase01({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-toast">
      <Example />
    </div>
  );
}
