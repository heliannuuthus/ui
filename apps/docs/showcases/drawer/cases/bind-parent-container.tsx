import '@heliannuuthus/ui/styles.css';
import { useRef } from 'react';
import { Button } from '@heliannuuthus/ui';
import { Checkbox } from '@heliannuuthus/ui';
import { Drawer } from '@heliannuuthus/ui';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Filter,
} from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const DrawerContainedDemo = () => {
    const boundaryRef = useRef<HTMLDivElement>(null);
    const placements = [
      { side: 'left', label: copy('左'), icon: ArrowRight },
      { side: 'right', label: copy('右'), icon: ArrowLeft },
      { side: 'top', label: copy('上'), icon: ArrowDown },
      { side: 'bottom', label: copy('下'), icon: ArrowUp },
    ] as const;

    return (
      <div className="feedback-drawer-boundary" ref={boundaryRef}>
        <div className="feedback-drawer-boundary-header">
          <div>
            <strong>{copy('发布记录')}</strong>
            <span>{copy('抽屉只覆盖当前父容器')}</span>
          </div>
          <Filter />
        </div>
        <div className="feedback-drawer-boundary-content">
          <span>v0.12.0</span>
          <strong>{copy('生产环境发布历史')}</strong>
          <small>{copy('选择一个方向，在当前卡片内打开筛选面板。')}</small>
        </div>
        <div className="feedback-drawer-boundary-actions">
          {placements.map((placement) => {
            const Icon = placement.icon;

            return (
              <Drawer
                behavior="panel"
                closeText={copy('应用筛选')}
                closeVariant="default"
                container={boundaryRef}
                description={copy(
                  `面板从父容器${placement.label}侧进入，不覆盖整个页面。`
                )}
                key={placement.side}
                side={placement.side}
                title={copy('筛选发布记录')}
                trigger={
                  <Button size="sm" variant="outline">
                    <Icon />
                    {placement.label}
                  </Button>
                }
              >
                <div className="feedback-sheet-options">
                  <section>
                    <strong>{copy('环境')}</strong>
                    <Checkbox defaultChecked value="production">
                      {copy('生产环境')}
                    </Checkbox>
                    <Checkbox value="preview">{copy('预览环境')}</Checkbox>
                  </section>
                  <section>
                    <strong>{copy('结果')}</strong>
                    <Checkbox defaultChecked value="success">
                      {copy('发布成功')}
                    </Checkbox>
                    <Checkbox value="failed">{copy('发布失败')}</Checkbox>
                  </section>
                </div>
              </Drawer>
            );
          })}
        </div>
      </div>
    );
  };

  return DrawerContainedDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function DrawerCase03({
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
