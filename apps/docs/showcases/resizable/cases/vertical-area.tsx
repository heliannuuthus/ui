import '@heliannuuthus/ui/styles.css';
import { Resizable } from '@heliannuuthus/ui';
import { FileCode2, GripHorizontal } from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const EditorWithTerminal = () => {
    return (
      <div className="resizable-vertical-shell">
        <div className="resizable-workspace-label">
          <span>Editor / Terminal</span>
          <small>vertical · 64 / 36</small>
        </div>
        <Resizable
          className="resizable-vertical"
          classNames={{ separator: 'resizable-demo-separator' }}
          id="editor-terminal"
          orientation="vertical"
          separator={
            <GripHorizontal aria-hidden className="resizable-demo-grip" />
          }
          items={[
            {
              key: 'editor',
              size: ['64', '38'],
              panel: (
                <section className="resizable-code-panel">
                  <header>
                    <FileCode2 aria-hidden />
                    <span>resizable.tsx</span>
                  </header>
                  <pre aria-label={copy('Resizable 示例代码')}>
                    <code>
                      <span>const</span> workspace = {'{'}
                      {'\n  '}orientation: <em>&apos;vertical&apos;</em>,
                      {'\n  '}items: <strong>2</strong>
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
          {copy('上下拖动分隔线调整终端高度')}
        </div>
      </div>
    );
  };

  return EditorWithTerminal;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function ResizableCase02({
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
