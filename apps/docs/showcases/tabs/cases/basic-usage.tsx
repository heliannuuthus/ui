import '@heliannuuthus/ui/styles.css';
import { Tabs } from '@heliannuuthus/ui';
import { Activity, Gauge, Users } from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const TabsDashboardDemo = () => {
    return (
      <Tabs
        animation="none"
        className="tabs-dashboard-demo"
        defaultValue="overview"
        items={[
          {
            value: 'overview',
            label: (
              <>
                <Gauge />
                {copy('概览')}
              </>
            ),
            content: (
              <div className="tabs-metric-grid">
                <article>
                  <span>{copy('本月请求')}</span>
                  <strong>82.4k</strong>
                  <small>{copy('较上月 +12%')}</small>
                </article>
                <article>
                  <span>{copy('可用率')}</span>
                  <strong>99.98%</strong>
                  <small>{copy('运行稳定')}</small>
                </article>
              </div>
            ),
          },
          {
            value: 'activity',
            label: (
              <>
                <Activity />
                {copy('动态')}
              </>
            ),
            content: (
              <div className="tabs-message-panel">
                {copy('最近 24 小时完成了 18 次部署。')}
              </div>
            ),
          },
          {
            value: 'members',
            label: (
              <>
                <Users />
                {copy('成员')}
              </>
            ),
            content: (
              <div className="tabs-message-panel">
                {copy('当前工作区共有 12 位成员。')}
              </div>
            ),
          },
        ]}
      />
    );
  };

  return TabsDashboardDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function TabsCase01({
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
