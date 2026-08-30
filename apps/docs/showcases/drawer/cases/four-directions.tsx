import '@heliannuuthus/ui/styles.css';
import { Tag } from '@heliannuuthus/ui';
import { Button } from '@heliannuuthus/ui';
import { Drawer } from '@heliannuuthus/ui';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const DrawerDirectionsDemo = () => {
    const placements = [
      { side: 'left', label: copy('从左侧'), icon: ArrowRight },
      { side: 'right', label: copy('从右侧'), icon: ArrowLeft },
      { side: 'top', label: copy('从上方'), icon: ArrowDown },
      { side: 'bottom', label: copy('从下方'), icon: ArrowUp },
    ] as const;

    return (
      <div
        className="feedback-drawer-directions"
        aria-label={copy('Drawer 打开方向')}
      >
        {placements.map((placement) => {
          const Icon = placement.icon;

          return (
            <Drawer
              behavior="adaptive"
              closeText={copy('关闭')}
              description={copy(
                `${placement.label}打开；窄屏保留触摸拖拽，宽屏使用稳定的边缘面板布局。`
              )}
              footer={<Button>{copy('进入发布中心')}</Button>}
              key={placement.side}
              side={placement.side}
              title={copy('今晚的发布窗口')}
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
        <ReleaseRow label="Web Console" meta={copy('已通过 · 21:42')} ready />
        <ReleaseRow label="Auth API" meta={copy('已通过 · 21:46')} ready />
        <ReleaseRow label="Worker" meta={copy('等待负责人确认')} />
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
          {ready ? copy('就绪') : copy('待确认')}
        </Tag>
      </div>
    );
  };

  return DrawerDirectionsDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function DrawerCase02({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-drawer">
      <Example />
    </div>
  );
}
