import '@heliannuuthus/ui/styles.css';
import { Button, Resizable, Typography } from '@heliannuuthus/ui';
import { FileCode2, FolderOpen, GripVertical } from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const files = ['button.tsx', 'card.tsx', 'resizable.tsx'];

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const Workspace = () => {
    return (
      <div className="resizable-workspace-shell">
        <div className="resizable-workspace-label">
          <span>Resizable workspace</span>
          <small>horizontal · 34 / 66</small>
        </div>
        <Resizable
          className="resizable-workspace"
          classNames={{ separator: 'resizable-demo-separator' }}
          id="component-workspace"
          orientation="horizontal"
          separator={
            <GripVertical aria-hidden className="resizable-demo-grip" />
          }
          items={[
            {
              key: 'files',
              size: ['34', '24'],
              panel: (
                <aside className="resizable-file-panel">
                  <div className="resizable-panel-heading">
                    <span>items[0]</span>
                    <small>{copy('文件')}</small>
                  </div>
                  <div className="resizable-folder">
                    <FolderOpen aria-hidden />
                    <strong>components</strong>
                  </div>
                  <nav aria-label={copy('示例文件')}>
                    {files.map((file) => (
                      <Button
                        className={file === 'resizable.tsx' ? 'active' : ''}
                        key={file}
                        variant="ghost"
                      >
                        <FileCode2 aria-hidden />
                        {file}
                      </Button>
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
                    <small>{copy('预览')}</small>
                  </div>
                  <div className="resizable-editor-tab">
                    <FileCode2 aria-hidden />
                    <span>resizable.tsx</span>
                  </div>
                  <div className="resizable-editor-copy">
                    <span>LAYOUT PRIMITIVE</span>
                    <Typography.Title level={4}>Resizable</Typography.Title>
                    <Typography.Text as="p" size="sm" tone="muted">
                      {copy(
                        '拖动中间分隔线，按当前任务调整文件区和内容区的可用空间。'
                      )}
                    </Typography.Text>
                    <dl>
                      <div>
                        <dt>{copy('方向')}</dt>
                        <dd>{copy('水平')}</dd>
                      </div>
                      <div>
                        <dt>{copy('初始比例')}</dt>
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
          {copy('← 拖动或使用方向键调整 →')}
        </div>
      </div>
    );
  };

  return Workspace;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function ResizableCase01({
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
