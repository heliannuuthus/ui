import { docsCopy } from './i18n/content';
import { useState } from 'react';
import { Resizable } from '@heliannuuthus/ui';
import {
  FileCode2,
  FolderOpen,
  GripHorizontal,
  GripVertical,
} from 'lucide-react';

const files = ['button.tsx', 'card.tsx', 'resizable.tsx'];

export const ResizableWorkspaceDemo = () => {
  return (
    <div className="resizable-workspace-shell">
      <div className="resizable-workspace-label">
        <span>Resizable</span>
        <small>horizontal</small>
      </div>
      <Resizable
        className="resizable-workspace"
        classNames={{ separator: 'resizable-demo-separator' }}
        id="component-workspace"
        orientation="horizontal"
        separator={
          <GripVertical aria-hidden="true" className="resizable-demo-grip" />
        }
        items={[
          {
            key: 'files',
            size: ['34', '24'],
            panel: (
              <aside className="resizable-file-panel">
                <div className="resizable-panel-heading">
                  <span>items[0]</span>
                  <small>{docsCopy('文件')}</small>
                </div>
                <div className="resizable-folder">
                  <FolderOpen />
                  <strong>components</strong>
                </div>
                <nav aria-label={docsCopy('示例文件')}>
                  {files.map((file) => (
                    <button
                      className={file === 'resizable.tsx' ? 'active' : ''}
                      key={file}
                      type="button"
                    >
                      <FileCode2 />
                      {file}
                    </button>
                  ))}
                </nav>
              </aside>
            ),
          },
          {
            key: 'preview',
            size: ['66', '40'],
            panel: (
              <article className="resizable-editor-panel">
                <div className="resizable-panel-heading">
                  <span>items[1]</span>
                  <small>{docsCopy('预览')}</small>
                </div>
                <div className="resizable-editor-tab">
                  <FileCode2 />
                  <span>resizable.tsx</span>
                </div>
                <div className="resizable-editor-copy">
                  <span>LAYOUT PRIMITIVE</span>
                  <h4>Resizable</h4>
                  <p>
                    {docsCopy(
                      '拖动中间分隔线，按当前任务调整文件区和内容区的可用空间。'
                    )}
                  </p>
                  <dl>
                    <div>
                      <dt>{docsCopy('方向')}</dt>
                      <dd>{docsCopy('水平')}</dd>
                    </div>
                    <div>
                      <dt>{docsCopy('初始比例')}</dt>
                      <dd>34 / 66</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ),
          },
        ]}
      />
      <div className="resizable-handle-hint">
        {docsCopy('← 拖动或使用方向键调整 →')}
      </div>
    </div>
  );
};

export const ResizableVerticalDemo = () => {
  return (
    <div className="resizable-vertical-shell">
      <div className="resizable-workspace-label">
        <span>Editor / Terminal</span>
        <small>vertical</small>
      </div>
      <Resizable
        className="resizable-vertical"
        classNames={{ separator: 'resizable-demo-separator' }}
        id="editor-terminal"
        orientation="vertical"
        separator={
          <GripHorizontal aria-hidden="true" className="resizable-demo-grip" />
        }
        items={[
          {
            key: 'editor',
            size: ['64', '38'],
            panel: (
              <section className="resizable-code-panel">
                <header>
                  <FileCode2 aria-hidden="true" />
                  <span>resizable.tsx</span>
                </header>
                <pre aria-label={docsCopy('Resizable 示例代码')}>
                  <code>
                    <span>const</span> workspace = {'{'}
                    {'\n  '}orientation: <em>&apos;vertical&apos;</em>,{'\n  '}
                    items: <strong>2</strong>
                    {'\n'}
                    {'}'}
                  </code>
                </pre>
              </section>
            ),
          },
          {
            key: 'terminal',
            size: ['36', '20'],
            panel: (
              <section className="resizable-terminal-panel">
                <header>
                  <span>TERMINAL</span>
                  <small>zsh</small>
                </header>
                <p>
                  <span>➜</span> pnpm type-check
                </p>
                <p className="resizable-terminal-success">
                  ✓ TypeScript check passed
                </p>
              </section>
            ),
          },
        ]}
      />
      <div className="resizable-handle-hint">
        {docsCopy('上下拖动分隔线调整终端高度')}
      </div>
    </div>
  );
};

export const ResizableAdvancedDemo = () => {
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
                <strong>{docsCopy('导航')}</strong>
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
                <strong>{docsCopy('拖动两侧分隔线')}</strong>
                <p>{docsCopy('左侧可折叠，并限制在 18%–34% 之间。')}</p>
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
                <strong>{docsCopy('属性')}</strong>
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
        {docsCopy('第一个 item 覆盖分隔线；第二个使用全局默认内容')}
      </div>
    </div>
  );
};
