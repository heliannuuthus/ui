import '@heliannuuthus/ui/styles.css';
import { useState, type ReactNode } from 'react';
import { Menubar } from '@heliannuuthus/ui';
import {
  FileCode2,
  FilePlus2,
  FileText,
  FolderOpen,
  RotateCcw,
  Save,
  Trash2,
} from 'lucide-react';
import { createCaseCopy } from '../../_shared/copy';

const createExample = (locale: 'en' | 'zh') => {
  const copy = createCaseCopy(locale);

  const DemoWindow = ({
    title,
    status,
    children,
  }: {
    title: string;
    status: string;
    children: ReactNode;
  }) => {
    return (
      <div className="menubar-demo-window">
        <div className="menubar-demo-chrome">
          <div className="menubar-demo-lights" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <strong>{title}</strong>
          <small>Heliannuuthus UI</small>
        </div>
        {children}
        <div className="menubar-demo-status">
          <span>{status}</span>
          <span>{copy('组件文档 · 本地预览')}</span>
        </div>
      </div>
    );
  };

  const MenubarCommandsDemo = () => {
    const [status, setStatus] = useState(copy('文档已保存'));

    return (
      <DemoWindow title={copy('Menubar 组件文档')} status={status}>
        <Menubar
          className="menubar-demo-control"
          menus={[
            {
              label: copy('文件'),
              items: [
                { type: 'label', label: copy('文档') },
                {
                  label: copy('新建文档'),
                  icon: <FilePlus2 />,
                  shortcut: '⌘N',
                  onSelect: () => setStatus(copy('已新建空白文档')),
                },
                {
                  label: copy('打开文件'),
                  icon: <FolderOpen />,
                  shortcut: '⌘O',
                  onSelect: () => setStatus(copy('正在打开文件')),
                },
                {
                  label: copy('保存'),
                  icon: <Save />,
                  shortcut: '⌘S',
                  onSelect: () => setStatus(copy('文档已保存')),
                },
                { type: 'separator' },
                {
                  label: copy('移至废纸篓'),
                  icon: <Trash2 />,
                  destructive: true,
                  onSelect: () => setStatus(copy('已移至废纸篓')),
                },
              ],
            },
            {
              label: copy('编辑'),
              items: [
                {
                  label: copy('撤销'),
                  icon: <RotateCcw />,
                  shortcut: '⌘Z',
                  onSelect: () => setStatus(copy('已撤销上一步')),
                },
                { label: copy('重做'), shortcut: '⇧⌘Z', disabled: true },
              ],
            },
            {
              label: copy('视图'),
              items: [
                { label: copy('显示侧栏'), shortcut: '⌘B' },
                { label: copy('进入全屏'), shortcut: '⌃⌘F' },
              ],
            },
            {
              label: copy('帮助'),
              items: [
                { label: copy('命令面板'), shortcut: '⇧⌘P' },
                { label: copy('键盘快捷键'), shortcut: '⌘K ⌘S' },
              ],
            },
          ]}
        />
        <div className="menubar-demo-workspace">
          <aside className="menubar-demo-sidebar">
            <span>{copy('资源管理器')}</span>
            <strong>HELIANNUUTHUS UI</strong>
            <div className="active">
              <FileText />
              menubar.mdx
            </div>
            <div>
              <FileCode2 />
              menubar.tsx
            </div>
            <div>
              <FolderOpen />
              components
            </div>
          </aside>
          <main className="menubar-demo-editor">
            <div className="menubar-demo-tabs">
              <FileText />
              menubar.mdx
            </div>
            <article className="menubar-demo-document">
              <span>COMPONENT GUIDELINE</span>
              <h4>Menubar</h4>
              <p>
                {copy(
                  '将跨内容生效的应用命令放在稳定的顶层位置，并为高频命令提供快捷键。'
                )}
              </p>
            </article>
          </main>
        </div>
      </DemoWindow>
    );
  };

  return MenubarCommandsDemo;
};

const ZhExample = createExample('zh');
const EnExample = createExample('en');

export default function MenubarCase01({
  locale = 'zh',
}: {
  locale?: 'en' | 'zh';
}) {
  const Example = locale === 'en' ? EnExample : ZhExample;
  return (
    <div className="demo-preview demo-preview-menubar">
      <Example />
    </div>
  );
}
