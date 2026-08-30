import '@heliannuuthus/ui/styles.css';
import { type CSSProperties } from 'react';
import { Tabs } from '@heliannuuthus/ui';
import { Activity, BookOpen, CircleHelp, Gauge, GitBranch } from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const responsiveTabsItems = [
    {
      value: 'overview',
      label: (
        <>
          <Gauge />
          {copy('项目概览')}
        </>
      ),
      content: copy('查看项目状态、负责人和近期变化。'),
    },
    {
      value: 'activity',
      label: (
        <>
          <Activity />
          {copy('活动记录')}
        </>
      ),
      content: copy('查看团队最近完成的操作。'),
    },
    {
      value: 'branches',
      label: (
        <>
          <GitBranch />
          {copy('分支策略')}
        </>
      ),
      content: copy('查看分支保护与合并规则。'),
    },
    {
      value: 'docs',
      label: (
        <>
          <BookOpen />
          {copy('使用文档')}
        </>
      ),
      content: copy('查看组件接入与升级说明。'),
    },
    {
      value: 'support',
      label: (
        <>
          <CircleHelp />
          {copy('帮助支持')}
        </>
      ),
      content: copy('查看常见问题与支持渠道。'),
    },
  ] as const;

  const TabsResponsiveDemo = ({
    labels = 'custom',
  }: {
    labels?: 'custom' | 'default';
  }) => {
    return (
      <div className="tabs-responsive-demo">
        <p>
          {copy(
            '这些宽度只用于验证嵌套场景；组件不会读取固定断点，而是响应当前可用空间。'
          )}
        </p>
        {[320, 480].map((width) => (
          <section
            className="tabs-responsive-frame"
            key={width}
            style={
              {
                '--tabs-responsive-width': `${width}px`,
              } as CSSProperties
            }
          >
            <header>
              <strong>
                ≤ {width}
                {copy('px 测试容器')}
              </strong>
              <span>{copy('使用方向键浏览全部标签')}</span>
            </header>
            <Tabs
              animation="none"
              defaultValue="overview"
              items={responsiveTabsItems}
              scrollLabels={
                labels === 'custom'
                  ? {
                      end: copy('向后滚动标签'),
                      start: copy('向前滚动标签'),
                    }
                  : undefined
              }
              variant={width === 320 ? 'soft' : 'line'}
            />
          </section>
        ))}
      </div>
    );
  };

  return TabsResponsiveDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function TabsCase03({
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
