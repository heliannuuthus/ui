import '@heliannuuthus/ui/styles.css';
import { useState } from 'react';
import { Resizable } from '@heliannuuthus/ui';
import { GripVertical } from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const ResizableAdvancedDemo = () => {
    const [navigationSize, setNavigationSize] = useState(24);

    return (
      <div className="resizable-advanced-shell">
        <div className="resizable-workspace-label">
          <span>Constrained workspace</span>
          <small>navigation {navigationSize}%</small>
        </div>
        <Resizable
          className="resizable-advanced"
          classNames={{
            panel: 'resizable-advanced-panel',
            separator: 'resizable-demo-separator',
          }}
          id="constrained-workspace"
          separator={({ index }) => (
            <span aria-hidden="true" className="resizable-separator-index">
              {index + 1}
            </span>
          )}
          items={[
            {
              key: 'navigation',
              size: ['24', '18', '34'],
              collapsible: true,
              collapsedSize: 0,
              onResize: (size) =>
                setNavigationSize(Math.round(size.asPercentage)),
              separator: (
                <GripVertical
                  aria-hidden="true"
                  className="resizable-demo-grip resizable-demo-grip-primary"
                />
              ),
              panel: (
                <aside className="resizable-advanced-navigation">
                  <strong>{copy('导航')}</strong>
                  <span>Overview</span>
                  <span className="active">Components</span>
                  <span>Tokens</span>
                </aside>
              ),
            },
            {
              key: 'canvas',
              size: ['52', '36'],
              panel: (
                <main className="resizable-advanced-canvas">
                  <span>CANVAS</span>
                  <strong>{copy('拖动两侧分隔线')}</strong>
                  <p>{copy('左侧可折叠，并限制在 18%–34% 之间。')}</p>
                </main>
              ),
            },
            {
              key: 'inspector',
              size: ['24', '18', '34'],
              collapsible: true,
              collapsedSize: 0,
              panel: (
                <aside className="resizable-advanced-inspector">
                  <strong>{copy('属性')}</strong>
                  <dl>
                    <div>
                      <dt>Width</dt>
                      <dd>Auto</dd>
                    </div>
                    <div>
                      <dt>Gap</dt>
                      <dd>16px</dd>
                    </div>
                  </dl>
                </aside>
              ),
            },
          ]}
        />
        <div className="resizable-handle-hint">
          {copy('第一个 item 覆盖分隔线；第二个使用全局默认内容')}
        </div>
      </div>
    );
  };

  return ResizableAdvancedDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function ResizableCase03({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-resizable">
      <Example />
    </div>
  );
}
