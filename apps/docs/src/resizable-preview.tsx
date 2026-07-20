import { Resizable } from '@heliannuuthus/ui/resizable';
import { FileCode2, FolderOpen } from 'lucide-react';

const files = ['button.tsx', 'card.tsx', 'resizable.tsx'];

export function ResizableWorkspaceDemo() {
  return (
    <div className="resizable-workspace-shell">
      <div className="resizable-workspace-label">
        <span>Resizable</span>
        <small>horizontal</small>
      </div>
      <Resizable
        className="resizable-workspace"
        id="component-workspace"
        orientation="horizontal"
        handleClassName="resizable-demo-handle"
        withHandle
        panels={[
          {
            id: 'files',
            defaultSize: '34',
            minSize: '24',
            content: (
              <aside className="resizable-file-panel">
                <div className="resizable-panel-heading">
                  <span>panels[0]</span>
                  <small>文件</small>
                </div>
                <div className="resizable-folder">
                  <FolderOpen />
                  <strong>components</strong>
                </div>
                <nav aria-label="示例文件">
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
            id: 'preview',
            defaultSize: '66',
            minSize: '40',
            content: (
              <article className="resizable-editor-panel">
                <div className="resizable-panel-heading">
                  <span>panels[1]</span>
                  <small>预览</small>
                </div>
                <div className="resizable-editor-tab">
                  <FileCode2 />
                  <span>resizable.tsx</span>
                </div>
                <div className="resizable-editor-copy">
                  <span>LAYOUT PRIMITIVE</span>
                  <h4>Resizable</h4>
                  <p>
                    拖动中间分隔线，按当前任务调整文件区和内容区的可用空间。
                  </p>
                  <dl>
                    <div>
                      <dt>方向</dt>
                      <dd>水平</dd>
                    </div>
                    <div>
                      <dt>初始比例</dt>
                      <dd>34 / 66</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ),
          },
        ]}
      />
      <div className="resizable-handle-hint">← 拖动或使用方向键调整 →</div>
    </div>
  );
}
