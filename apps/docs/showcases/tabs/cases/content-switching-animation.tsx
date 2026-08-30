import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Button, Tabs, type TabsAnimation } from '@heliannuuthus/ui';
import { Code2, Package, Palette } from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const tabsAnimationOptions: Array<{
    label: string;
    value: TabsAnimation;
  }> = [
    { label: copy('淡入'), value: 'fade' },
    { label: copy('滑动'), value: 'slide' },
    { label: copy('关闭'), value: 'none' },
  ];

  const TabsMotionDemo = () => {
    const [animation, setAnimation] = useState<TabsAnimation>('slide');

    return (
      <div className="tabs-motion-demo">
        <header className="tabs-demo-toolbar">
          <div>
            <span>MOTION</span>
            <strong>{copy('固定视口，仅切换面板内容')}</strong>
          </div>
          <div
            aria-label={copy('选择内容切换动效')}
            className="tabs-demo-options"
            role="group"
          >
            {tabsAnimationOptions.map((option) => (
              <Button
                aria-pressed={animation === option.value}
                key={option.value}
                onClick={() => setAnimation(option.value)}
                size="xs"
                variant={animation === option.value ? 'secondary' : 'ghost'}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </header>
        <div className="tabs-motion-stage">
          <Tabs
            animation={animation}
            centered
            defaultValue="design"
            classNames={{ viewport: 'tabs-motion-viewport' }}
            variant="soft"
            items={[
              {
                value: 'design',
                label: (
                  <>
                    <Palette />
                    {copy('设计')}
                  </>
                ),
                content: (
                  <>
                    <strong>{copy('整理组件视觉规范')}</strong>
                    <p>{copy('确认状态、密度与响应式表现，再进入实现。')}</p>
                  </>
                ),
              },
              {
                value: 'code',
                label: (
                  <>
                    <Code2 />
                    {copy('开发')}
                  </>
                ),
                content: (
                  <>
                    <strong>{copy('连接组件与业务状态')}</strong>
                    <p>
                      {copy('键盘切换时，内容沿操作方向移动并保持上下文。')}
                    </p>
                  </>
                ),
              },
              {
                value: 'release',
                label: (
                  <>
                    <Package />
                    {copy('发布')}
                  </>
                ),
                content: (
                  <>
                    <strong>{copy('完成验证并发布')}</strong>
                    <p>
                      {copy('降低动态效果时会自动取消位移，仅保留即时切换。')}
                    </p>
                  </>
                ),
              },
            ]}
          />
        </div>
      </div>
    );
  };

  return TabsMotionDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function TabsCase04({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-tabs">
      <Example />
    </div>
  );
}
